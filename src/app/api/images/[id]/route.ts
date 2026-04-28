import { NextRequest, NextResponse } from "next/server";
import { MongoClient, GridFSBucket, ObjectId } from "mongodb";

const mongoUri = process.env.MONGODB_URI;
const mongoDbName = process.env.MONGODB_DB || "doctor-clinic";

if (!mongoUri) {
  throw new Error("MONGODB_URI is not configured.");
}

let cachedClient: MongoClient | null = null;
let cachedDb: any = null;
let cachedBucket: GridFSBucket | null = null;

async function getConnection() {
  if (cachedClient && cachedDb && cachedBucket) {
    return { client: cachedClient, db: cachedDb, bucket: cachedBucket };
  }

  const client = new MongoClient(mongoUri);
  await client.connect();
  const db = client.db(mongoDbName);
  const bucket = new GridFSBucket(db, { bucketName: "blog-images" });

  cachedClient = client;
  cachedDb = db;
  cachedBucket = bucket;

  return { client, db, bucket };
}

export async function GET(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> },
) {
  try {
    const { id } = await params;

    if (!ObjectId.isValid(id)) {
      return new NextResponse("Invalid image id.", { status: 400 });
    }

    const { db, bucket } = await getConnection();

    const fileId = new ObjectId(id);
    const files = await db
      .collection("blog-images.files")
      .find({ _id: fileId })
      .toArray();

    if (!files.length) {
      return new NextResponse("Image not found.", { status: 404 });
    }

    const file = files[0];
    const downloadStream = bucket.openDownloadStream(fileId);

    const chunks: Buffer[] = [];

    return new Promise((resolve) => {
      downloadStream.on("data", (chunk) => {
        chunks.push(chunk);
      });

      downloadStream.on("end", () => {
        const buffer = Buffer.concat(chunks);
        resolve(
          new NextResponse(buffer, {
            headers: {
              "Content-Type": file.contentType || "application/octet-stream",
              "Cache-Control": "public, max-age=31536000, immutable",
            },
          }),
        );
      });

      downloadStream.on("error", () => {
        resolve(new NextResponse("Image not found.", { status: 404 }));
      });
    });
  } catch (error) {
    return new NextResponse(
      error instanceof Error ? error.message : "Unable to load image.",
      { status: 500 },
    );
  }
}
