import { ObjectId } from "mongodb";
import { blogPosts as seedPosts } from "@/lib/blog-data";
import { getMongoDb } from "@/lib/mongodb";
import type { BlogPost, CreateBlogInput } from "@/lib/blog-types";

type BlogDocument = {
  _id?: ObjectId;
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  author: string;
  image: string;
  content: string;
  keywords: string[];
  createdAt: Date;
  updatedAt: Date;
};

let indexesEnsured = false;
let seedEnsured = false;

function slugify(value: string): string {
  return value
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");
}

function toBlogPost(doc: BlogDocument): BlogPost {
  return {
    id: doc._id!.toHexString(),
    slug: doc.slug,
    title: doc.title,
    excerpt: doc.excerpt,
    category: doc.category,
    date: doc.date,
    author: doc.author,
    image: doc.image,
    content: doc.content,
    keywords: doc.keywords,
    createdAt: doc.createdAt.toISOString(),
    updatedAt: doc.updatedAt.toISOString(),
  };
}

async function getBlogsCollection() {
  const db = await getMongoDb();
  const collection = db.collection<BlogDocument>("blogs");

  if (!indexesEnsured) {
    await collection.createIndex({ slug: 1 }, { unique: true, name: "slug_unique" });
    await collection.createIndex({ createdAt: -1 }, { name: "created_desc" });
    indexesEnsured = true;
  }

  return collection;
}

async function ensureSeedData() {
  if (seedEnsured) {
    return;
  }

  const collection = await getBlogsCollection();
  const existingCount = await collection.countDocuments();

  if (existingCount === 0) {
    const now = new Date();
    await collection.insertMany(
      seedPosts.map((post) => ({
        slug: post.slug,
        title: post.title,
        excerpt: post.excerpt,
        category: post.category,
        date: post.date,
        author: post.author,
        image: post.image,
        content: post.content,
        keywords: post.keywords,
        createdAt: now,
        updatedAt: now,
      })),
      { ordered: false }
    );
  }

  seedEnsured = true;
}

export async function listBlogs(): Promise<BlogPost[]> {
  await ensureSeedData();
  const collection = await getBlogsCollection();
  const docs = await collection.find({}).sort({ createdAt: -1 }).toArray();
  return docs.map(toBlogPost);
}

export async function getBlogBySlug(slug: string): Promise<BlogPost | null> {
  await ensureSeedData();
  const collection = await getBlogsCollection();
  const doc = await collection.findOne({ slug });
  return doc ? toBlogPost(doc) : null;
}

export async function createBlog(input: CreateBlogInput): Promise<BlogPost> {
  const collection = await getBlogsCollection();
  const now = new Date();

  const baseSlug = slugify(input.slug || input.title);
  let nextSlug = baseSlug;
  let suffix = 1;

  while (await collection.findOne({ slug: nextSlug }, { projection: { _id: 1 } })) {
    suffix += 1;
    nextSlug = `${baseSlug}-${suffix}`;
  }

  const doc = {
    slug: nextSlug,
    title: input.title.trim(),
    excerpt: input.excerpt.trim(),
    category: input.category.trim(),
    date: new Date().toLocaleDateString("en-US", {
      month: "short",
      day: "2-digit",
      year: "numeric",
    }),
    author: input.author.trim(),
    image: input.image.trim(),
    content: input.content.trim(),
    keywords: input.keywords,
    createdAt: now,
    updatedAt: now,
  };

  const result = await collection.insertOne(doc);
  const created = await collection.findOne({ _id: result.insertedId });

  if (!created) {
    throw new Error("Blog creation failed.");
  }

  return toBlogPost(created);
}

export async function deleteBlogById(id: string): Promise<boolean> {
  if (!ObjectId.isValid(id)) {
    return false;
  }

  const collection = await getBlogsCollection();
  const result = await collection.deleteOne({ _id: new ObjectId(id) });
  return result.deletedCount === 1;
}
