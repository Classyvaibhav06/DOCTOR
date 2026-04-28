const dotenv = require("dotenv");
const express = require("express");
const cors = require("cors");
const multer = require("multer");
const path = require("path");
const fs = require("fs");
const { MongoClient, GridFSBucket, ObjectId } = require("mongodb");

const app = express();
let db = null;
let bucket = null;

const rootEnvPath = path.resolve(process.cwd(), ".env.local");
const parentEnvPath = path.resolve(process.cwd(), "..", ".env.local");

if (fs.existsSync(rootEnvPath)) {
  dotenv.config({ path: rootEnvPath });
} else if (fs.existsSync(parentEnvPath)) {
  dotenv.config({ path: parentEnvPath });
} else {
  dotenv.config();
}

const port = Number(process.env.UPLOAD_SERVER_PORT || 4101);
const mongoUri = process.env.MONGODB_URI;
const mongoDbName = process.env.MONGODB_DB || "doctor-clinic";

if (!mongoUri) {
  throw new Error("MONGODB_URI is not configured.");
}

const upload = multer({
  storage: multer.memoryStorage(),
  limits: {
    fileSize: 8 * 1024 * 1024,
  },
});

app.use(cors({ origin: true }));
app.use(express.json());

app.get("/health", (_req, res) => {
  res.json({ ok: true });
});

app.post("/upload", upload.single("image"), (req, res) => {
  if (!bucket) {
    return res.status(503).json({ message: "Upload service is not ready." });
  }

  if (!req.file) {
    return res.status(400).json({ message: "No image file received." });
  }

  const safeBase = path
    .basename(req.file.originalname)
    .replace(/[^a-zA-Z0-9_.-]/g, "-");
  const fileId = new ObjectId();
  const uploadStream = bucket.openUploadStreamWithId(
    fileId,
    `${Date.now()}-${safeBase}`,
    {
      contentType: req.file.mimetype,
      metadata: {
        originalName: req.file.originalname,
      },
    },
  );

  uploadStream.on("error", (error) => {
    return res.status(500).json({
      message: "Failed to store image in MongoDB.",
      error: error.message,
    });
  });

  uploadStream.on("finish", () => {
    return res.json({
      message: "Image uploaded successfully.",
      url: `/images/${fileId.toHexString()}`,
      id: fileId.toHexString(),
      filename: req.file.originalname,
    });
  });

  uploadStream.end(req.file.buffer);
});

app.get("/images/:id", async (req, res) => {
  try {
    if (!db || !bucket) {
      return res.status(503).send("Upload service is not ready.");
    }

    const { id } = req.params;

    if (!ObjectId.isValid(id)) {
      return res.status(400).send("Invalid image id.");
    }

    const fileId = new ObjectId(id);
    const files = await db
      .collection("blog-images.files")
      .find({ _id: fileId })
      .toArray();

    if (!files.length) {
      return res.status(404).send("Image not found.");
    }

    const file = files[0];
    res.setHeader(
      "Content-Type",
      file.contentType || "application/octet-stream",
    );
    res.setHeader("Cache-Control", "public, max-age=31536000, immutable");

    const downloadStream = bucket.openDownloadStream(fileId);
    downloadStream.on("error", () => {
      return res.status(404).send("Image not found.");
    });

    return downloadStream.pipe(res);
  } catch (error) {
    return res
      .status(500)
      .send(error instanceof Error ? error.message : "Unable to load image.");
  }
});

async function main() {
  const client = new MongoClient(mongoUri);
  await client.connect();

  db = client.db(mongoDbName);
  bucket = new GridFSBucket(db, { bucketName: "blog-images" });

  app.listen(port, () => {
    console.log(`Upload server running on http://localhost:${port}`);
  });
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
