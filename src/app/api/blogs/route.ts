import { NextResponse } from "next/server";
import { createBlog, listBlogs } from "@/lib/blogs-db";
import type { CreateBlogInput } from "@/lib/blog-types";

export const runtime = "nodejs";

const ADMIN_APP_ORIGIN = process.env.ADMIN_APP_ORIGIN || "http://localhost:5174";

function withCors(response: NextResponse): NextResponse {
  response.headers.set("Access-Control-Allow-Origin", ADMIN_APP_ORIGIN);
  response.headers.set("Access-Control-Allow-Methods", "GET,POST,OPTIONS");
  response.headers.set("Access-Control-Allow-Headers", "Content-Type,x-admin-key");
  return response;
}

function isAuthorizedAdmin(request: Request): boolean {
  const configuredKey = process.env.ADMIN_BLOG_KEY;
  if (!configuredKey) {
    return false;
  }

  const provided = request.headers.get("x-admin-key") || "";
  return provided === configuredKey;
}

function validateCreateInput(input: Partial<CreateBlogInput>) {
  const required = ["title", "excerpt", "category", "author", "image", "content"] as const;
  for (const field of required) {
    if (!input[field] || !String(input[field]).trim()) {
      return `${field} is required.`;
    }
  }

  return null;
}

export async function GET() {
  try {
    const blogs = await listBlogs();
    return withCors(NextResponse.json({ blogs }));
  } catch {
    return withCors(NextResponse.json(
      { message: "Unable to fetch blogs." },
      { status: 500 }
    ));
  }
}

export async function POST(request: Request) {
  try {
    if (!isAuthorizedAdmin(request)) {
      return withCors(NextResponse.json({ message: "Unauthorized." }, { status: 401 }));
    }

    const payload = (await request.json()) as Partial<CreateBlogInput>;
    const validationError = validateCreateInput(payload);

    if (validationError) {
      return withCors(NextResponse.json({ message: validationError }, { status: 400 }));
    }

    const keywords = Array.isArray(payload.keywords)
      ? payload.keywords.map((k) => String(k).trim()).filter(Boolean)
      : [];

    const created = await createBlog({
      title: String(payload.title),
      excerpt: String(payload.excerpt),
      category: String(payload.category),
      author: String(payload.author),
      image: String(payload.image),
      content: String(payload.content),
      keywords,
      slug: payload.slug ? String(payload.slug) : undefined,
    });

    return withCors(NextResponse.json({
      message: "Blog created successfully.",
      blog: created,
    }));
  } catch {
    return withCors(NextResponse.json(
      { message: "Unable to create blog." },
      { status: 500 }
    ));
  }
}

export async function OPTIONS() {
  return withCors(new NextResponse(null, { status: 204 }));
}
