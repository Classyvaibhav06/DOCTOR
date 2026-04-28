import { NextRequest, NextResponse } from "next/server";
import { MongoClient, GridFSBucket, ObjectId } from "mongodb";
import path from "path";

const mongoUri = process.env.MONGODB_URI;
const mongoDbName = process.env.MONGODB_DB || "doctor-clinic";

const CORS_HEADERS = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "POST, GET, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type",
};

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

  const client = new MongoClient(mongoUri as string);
  await client.connect();
  const db = client.db(mongoDbName);
  const bucket = new GridFSBucket(db, { bucketName: "blog-images" });

  cachedClient = client;
  cachedDb = db;
  cachedBucket = bucket;

  return { client, db, bucket };
}

export async function POST(req: NextRequest) {
  try {
    const { bucket } = await getConnection();

    const formData = await req.formData();
    const imageFile = formData.get("image") as File | null;

    if (!imageFile) {
      return NextResponse.json(
        { message: "No image file received." },
        { status: 400, headers: CORS_HEADERS },
      );
    }

    const buffer = Buffer.from(await imageFile.arrayBuffer());
    const safeBase = path
      .basename(imageFile.name)
      .replace(/[^a-zA-Z0-9_.-]/g, "-");
    const fileId = new ObjectId();

    return new Promise<NextResponse>((resolve) => {
      const uploadStream = bucket.openUploadStreamWithId(
        fileId,
        `${Date.now()}-${safeBase}`,
        {
          contentType: imageFile.type,
          metadata: {
            originalName: imageFile.name,
          },
        },
      );

      uploadStream.on("error", (error) => {
        resolve(
          NextResponse.json(
            {
              message: "Failed to store image in MongoDB.",
              error: error.message,
            },
            { status: 500, headers: CORS_HEADERS },
          ),
        );
      });

      uploadStream.on("finish", () => {
        resolve(
          NextResponse.json(
            {
              message: "Image uploaded successfully.",
              url: `/api/images/${fileId.toHexString()}`,
              id: fileId.toHexString(),
              filename: imageFile.name,
            },
            { headers: CORS_HEADERS },
          ),
        );
      });

      uploadStream.end(buffer);
    });
  } catch (error) {
    return NextResponse.json(
      {
        message: "Upload failed.",
        error: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500, headers: CORS_HEADERS },
    );
  }
}

// Health check endpoint
export async function GET() {
  try {
    await getConnection();
    return NextResponse.json({ ok: true }, { headers: CORS_HEADERS });
  } catch (error) {
    return NextResponse.json(
      { ok: false, error: error instanceof Error ? error.message : "Error" },
      { status: 503, headers: CORS_HEADERS },
    );
  }
}

// Handle CORS preflight requests
export async function OPTIONS() {
  return new NextResponse(null, {
    status: 204,
    headers: CORS_HEADERS,
  });
}
