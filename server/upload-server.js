import dotenv from "dotenv";
import express from "express";
import cors from "cors";
import multer from "multer";
import path from "path";
import fs from "fs";

dotenv.config({ path: ".env.local" });
dotenv.config();

const app = express();
const port = Number(process.env.UPLOAD_SERVER_PORT || 4101);
const publicDir = path.resolve(process.cwd(), "public");
const uploadDir = path.join(publicDir, "uploads", "blogs");

fs.mkdirSync(uploadDir, { recursive: true });
app.use(cors());
app.use(express.json());
app.use("/uploads", express.static(path.join(publicDir, "uploads")));

const storage = multer.diskStorage({
  destination: (_req, _file, cb) => cb(null, uploadDir),
  filename: (_req, file, cb) => {
    const safeBase = path
      .basename(file.originalname)
      .replace(/[^a-zA-Z0-9_.-]/g, "-");
    const stamp = Date.now();
    cb(null, `${stamp}-${safeBase}`);
  },
});

const upload = multer({
  storage,
  limits: {
    fileSize: 8 * 1024 * 1024,
  },
});

app.get("/health", (_req, res) => {
  res.json({ ok: true });
});

app.post("/upload", upload.single("image"), (req, res) => {
  if (!req.file) {
    return res.status(400).json({ message: "No image file received." });
  }

  const publicUrl = `/uploads/blogs/${req.file.filename}`;
  return res.json({
    message: "Image uploaded successfully.",
    url: publicUrl,
    filename: req.file.filename,
  });
});

app.listen(port, () => {
  console.log(`Upload server running on http://localhost:${port}`);
});
