import { useEffect, useMemo, useState } from "react";

const WEBSITE_BASE_URL =
  import.meta.env.VITE_MAIN_WEBSITE_URL || "http://localhost:3000";
const UPLOAD_API_BASE = WEBSITE_BASE_URL;
const BLOGS_API_BASE = import.meta.env.DEV
  ? "/api/blogs"
  : `${WEBSITE_BASE_URL}/api/blogs`;

const initialForm = {
  title: "",
  excerpt: "",
  category: "Men's Health",
  author: "Dr. Rajesh Manghnani",
  image: "",
  content: "",
  keywords: "",
  slug: "",
};

async function readApiResponse(response) {
  const contentType = response.headers.get("content-type") || "";

  if (contentType.includes("application/json")) {
    return response.json();
  }

  const text = await response.text();
  return {
    raw: text,
    message: text || `Unexpected response (${response.status}) from API`,
  };
}

export default function App() {
  const [adminKey, setAdminKey] = useState("");
  const [form, setForm] = useState(initialForm);
  const [selectedImageFile, setSelectedImageFile] = useState(null);
  const [isUploading, setIsUploading] = useState(false);
  const [blogs, setBlogs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isSaving, setIsSaving] = useState(false);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const sortedBlogs = useMemo(
    () => [...blogs].sort((a, b) => (a.createdAt < b.createdAt ? 1 : -1)),
    [blogs],
  );

  async function loadBlogs() {
    setIsLoading(true);
    setError("");
    try {
      const response = await fetch(BLOGS_API_BASE);
      const data = await readApiResponse(response);
      if (!response.ok)
        throw new Error(data?.message || data?.raw || "Failed to load blogs");
      setBlogs(Array.isArray(data.blogs) ? data.blogs : []);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to load blogs");
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    void loadBlogs();
  }, []);

  function onChange(e) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }

  function onImageFileChange(e) {
    const file = e.target.files?.[0] || null;
    setSelectedImageFile(file);
  }

  async function uploadSelectedImage() {
    if (!selectedImageFile) {
      setError("Please choose an image file first.");
      return null;
    }

    setError("");
    setMessage("");
    setIsUploading(true);

    try {
      const formData = new FormData();
      formData.append("image", selectedImageFile);

      const response = await fetch(`${WEBSITE_BASE_URL}/api/upload`, {
        method: "POST",
        body: formData,
      });

      const data = await readApiResponse(response);
      if (!response.ok) {
        throw new Error(data?.message || data?.raw || "Failed to upload image");
      }

      const uploadedUrl = data?.url || "";
      if (!uploadedUrl) {
        throw new Error("Upload succeeded but no image URL was returned.");
      }

      const fullUrl = uploadedUrl.startsWith("http")
        ? uploadedUrl
        : `${UPLOAD_API_BASE}${uploadedUrl}`;

      setForm((prev) => ({ ...prev, image: fullUrl }));
      setMessage("Image uploaded successfully.");
      setSelectedImageFile(null);
      return fullUrl;
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to upload image");
      return null;
    } finally {
      setIsUploading(false);
    }
  }

  async function createBlog(e) {
    e.preventDefault();
    setMessage("");
    setError("");

    if (!adminKey.trim()) {
      setError("Please enter admin key.");
      return;
    }

    if (!form.image.trim()) {
      setError("Please upload an image first.");
      return;
    }

    setIsSaving(true);
    try {
      const response = await fetch(BLOGS_API_BASE, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-admin-key": adminKey.trim(),
        },
        body: JSON.stringify({
          ...form,
          keywords: form.keywords
            .split(",")
            .map((k) => k.trim())
            .filter(Boolean),
        }),
      });

      const data = await readApiResponse(response);
      if (!response.ok)
        throw new Error(data?.message || data?.raw || "Failed to create blog");

      setMessage("Blog created successfully.");
      setForm(initialForm);
      await loadBlogs();
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to create blog");
    } finally {
      setIsSaving(false);
    }
  }

  async function deleteBlog(id) {
    setMessage("");
    setError("");
    if (!adminKey.trim()) {
      setError("Please enter admin key before deleting.");
      return;
    }

    if (!window.confirm("Delete this blog post?")) return;

    try {
      const response = await fetch(`${BLOGS_API_BASE}/${id}`, {
        method: "DELETE",
        headers: {
          "x-admin-key": adminKey.trim(),
        },
      });
      const data = await readApiResponse(response);
      if (!response.ok)
        throw new Error(data?.message || data?.raw || "Failed to delete blog");

      setMessage("Blog deleted successfully.");
      await loadBlogs();
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to delete blog");
    }
  }

  return (
    <div className="app-wrap">
      <header className="topbar">
        <h1>Doctor Blog Admin (React App)</h1>
        <p>Completely separate from Next.js</p>
      </header>

      <section className="card">
        <label>Admin Key</label>
        <input
          type="password"
          placeholder="Enter ADMIN_BLOG_KEY"
          value={adminKey}
          onChange={(e) => setAdminKey(e.target.value)}
        />
      </section>

      <form className="card" onSubmit={createBlog}>
        <h2>Create Blog</h2>
        <div className="grid2">
          <input
            name="title"
            value={form.title}
            onChange={onChange}
            placeholder="Title"
            required
          />
          <input
            name="slug"
            value={form.slug}
            onChange={onChange}
            placeholder="Slug (optional)"
          />
          <input
            name="author"
            value={form.author}
            onChange={onChange}
            placeholder="Author"
            required
          />
          <select name="category" value={form.category} onChange={onChange}>
            <option>Men's Health</option>
            <option>Women's Health</option>
            <option>General Wellness</option>
            <option>Holistic Care</option>
          </select>
          <input
            name="keywords"
            value={form.keywords}
            onChange={onChange}
            placeholder="Keywords comma separated"
          />
        </div>
        <div className="upload-row">
          <div style={{ flex: 1 }}>
            <label>Blog Image</label>
            <input type="file" accept="image/*" onChange={onImageFileChange} />
          </div>
          <button
            type="button"
            className="secondary"
            onClick={uploadSelectedImage}
            disabled={isUploading}
          >
            {isUploading ? "Uploading..." : "Upload Image"}
          </button>
        </div>
        <div className="image-preview-row">
          {form.image ? (
            <div className="preview-box">
              <img src={form.image} alt="Blog preview" />
            </div>
          ) : null}
        </div>
        <textarea
          name="excerpt"
          value={form.excerpt}
          onChange={onChange}
          placeholder="Excerpt"
          required
        />
        <textarea
          name="content"
          value={form.content}
          onChange={onChange}
          placeholder="Content"
          rows={8}
          required
        />
        <button type="submit" disabled={isSaving}>
          {isSaving ? "Creating..." : "Create Blog"}
        </button>
      </form>

      {message && <p className="ok">{message}</p>}
      {error && <p className="err">{error}</p>}

      <section className="card">
        <h2>Existing Blogs</h2>
        {isLoading ? <p>Loading...</p> : null}
        {!isLoading && sortedBlogs.length === 0 ? <p>No blogs found.</p> : null}
        <div className="list">
          {sortedBlogs.map((blog) => (
            <div className="item" key={blog.id}>
              <div>
                <strong>{blog.title}</strong>
                <p>/blog/{blog.slug}</p>
              </div>
              <button
                className="danger"
                type="button"
                onClick={() => deleteBlog(blog.id)}
              >
                Delete
              </button>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
