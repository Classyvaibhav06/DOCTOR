import { NextRequest, NextResponse } from "next/server";
import { MongoClient, GridFSBucket, ObjectId } from "mongodb";

const mongoUri = process.env.MONGODB_URI;
const mongoDbName = process.env.MONGODB_DB || "doctor-clinic";

if (!mongoUri) {
  throw new Error("MONGODB_URI is not configured.");
}

import { getMongoDb } from "@/lib/mongodb";

export const runtime = "nodejs";

let cachedBucket: GridFSBucket | null = null;

async function getBucket() {
  if (cachedBucket) return cachedBucket;
  const db = await getMongoDb();
  cachedBucket = new GridFSBucket(db, { bucketName: "blog-images" });
  return cachedBucket;
}

export async function GET(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> },
): Promise<Response> {
  try {
    const { id } = await params;

    if (!ObjectId.isValid(id)) {
      return new NextResponse("Invalid image id.", { status: 400 });
    }

    const db = await getMongoDb();
    const bucket = await getBucket();

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

    const readableStream = new ReadableStream({
      start(controller) {
        downloadStream.on("data", (chunk) => controller.enqueue(new Uint8Array(chunk)));
        downloadStream.on("end", () => controller.close());
        downloadStream.on("error", (err) => controller.error(err));
      },
      cancel() {
        downloadStream.destroy();
      },
    });

    return new Response(readableStream, {
      headers: {
        "Content-Type": file.contentType || "application/octet-stream",
        "Cache-Control": "public, max-age=31536000, immutable",
      },
    });
  } catch (error) {
    console.error("Error serving image:", error);
    return new Response(
      error instanceof Error ? error.message : "Unable to load image.",
      { status: 500 },
    );
  }
}
