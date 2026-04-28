import { NextResponse } from "next/server";
import { deleteBlogById } from "@/lib/blogs-db";

export const runtime = "nodejs";

const ADMIN_APP_ORIGIN = process.env.ADMIN_APP_ORIGIN || "http://localhost:5174";

function withCors(response: NextResponse): NextResponse {
  response.headers.set("Access-Control-Allow-Origin", ADMIN_APP_ORIGIN);
  response.headers.set("Access-Control-Allow-Methods", "DELETE,OPTIONS");
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

export async function DELETE(
  request: Request,
  context: { params: Promise<{ id: string }> }
) {
  try {
    if (!isAuthorizedAdmin(request)) {
      return withCors(NextResponse.json({ message: "Unauthorized." }, { status: 401 }));
    }

    const { id } = await context.params;
    const deleted = await deleteBlogById(id);

    if (!deleted) {
      return withCors(NextResponse.json(
        { message: "Blog not found." },
        { status: 404 }
      ));
    }

    return withCors(NextResponse.json({ message: "Blog deleted successfully." }));
  } catch {
    return withCors(NextResponse.json(
      { message: "Unable to delete blog." },
      { status: 500 }
    ));
  }
}

export async function OPTIONS() {
  return withCors(new NextResponse(null, { status: 204 }));
}
