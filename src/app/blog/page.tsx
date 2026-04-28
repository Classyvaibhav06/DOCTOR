"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { Fraunces, Manrope } from "next/font/google";
import { Navigation } from "@/components/Navigation";
import type { BlogPost } from "@/lib/blog-types";

const blogHeadingFont = Fraunces({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-blog-heading",
  display: "swap",
});

const blogBodyFont = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-blog-body",
  display: "swap",
});

const categoryColors: Record<string, string> = {
  "Men's Health": "#1E40AF",
  "Women's Health": "#be185d",
  "General Wellness": "#065f46",
  "Holistic Care": "#7c3aed",
  "Sexual Wellness": "#0f766e",
};

export default function BlogPage() {
  const [blogs, setBlogs] = useState<BlogPost[]>([]);
  const [activeCategory, setActiveCategory] = useState("All");
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function fetchBlogs() {
      setIsLoading(true);
      setError("");

      try {
        const response = await fetch("/api/blogs", { cache: "no-store" });
        const data = await response.json();

        if (!response.ok) {
          throw new Error(data?.message || "Unable to load blogs.");
        }

        setBlogs(Array.isArray(data.blogs) ? data.blogs : []);
      } catch (err) {
        const msg = err instanceof Error ? err.message : "Unable to load blogs.";
        setError(msg);
      } finally {
        setIsLoading(false);
      }
    }

    void fetchBlogs();
  }, []);

  const categories = useMemo(
    () => ["All", ...new Set(blogs.map((post) => post.category))],
    [blogs],
  );

  const filteredBlogs = useMemo(() => {
    return blogs.filter((post) => {
      const matchCategory =
        activeCategory === "All" || post.category === activeCategory;
      return matchCategory;
    });
  }, [blogs, activeCategory]);

  const featuredPost = filteredBlogs[0];
  const editorPicks = filteredBlogs.slice(1, 4);
  const remainingPosts = filteredBlogs.slice(4);

  return (
    <div
      className={`${blogHeadingFont.variable} ${blogBodyFont.variable}`}
      style={{
        minHeight: "100vh",
        background: "#FAFAFA",
        color: "#1a1a2e",
        fontFamily: "var(--font-blog-body)",
      }}
    >
      <Navigation />
      <style>{`
        * { box-sizing: border-box; }
        .page-wrap { max-width: 1240px; margin: 0 auto; padding: 0 1.5rem; }
        .blog-hero-strip {
          background: linear-gradient(180deg, #ffffff 0%, #fbfdff 100%);
          padding: 2.5rem 0 1.25rem;
          border-bottom: 1px solid #e2e8f0;
          margin-bottom: 2.25rem;
        }
        .blog-kicker {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          color: #1E40AF;
          font-size: 0.75rem;
          font-weight: 800;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          margin-bottom: 0.8rem;
        }
        .blog-hero-strip h1 {
          font-family: var(--font-blog-heading);
          font-size: clamp(2.1rem, 5vw, 3.8rem);
          line-height: 1.05;
          color: #0F172A;
          margin: 0;
        }
        .blog-hero-strip p {
          max-width: 760px;
          margin-top: 0.9rem;
          font-size: 1rem;
          line-height: 1.8;
          color: #64748B;
        }
        .filter-bar {
          display: flex;
          align-items: center;
          gap: 0.85rem;
          flex-wrap: wrap;
          margin-top: 1.5rem;
          padding-top: 1.1rem;
          border-top: 1px solid #e2e8f0;
        }
        .filter-pill {
          padding: 0.48rem 1rem;
          border-radius: 999px;
          font-size: 0.78rem;
          font-weight: 800;
          cursor: pointer;
          border: 1px solid #cbd5e1;
          background: #fff;
          color: #475569;
          text-transform: uppercase;
          letter-spacing: 0.07em;
          transition: all 0.2s ease;
        }
        .filter-pill.active {
          color: #fff;
          border-color: transparent;
        }
        .main-content-grid {
          display: grid;
          grid-template-columns: 1.25fr 1fr;
          gap: 2.5rem;
          margin-bottom: 3rem;
          align-items: start;
        }
        .featured-section h2,
        .picks-section h2,
        .more-section h2 {
          font-size: 0.75rem;
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: 0.12em;
          color: #1E40AF;
          margin-bottom: 1rem;
          border-bottom: 2px solid #1E40AF;
          padding-bottom: 0.5rem;
          display: inline-block;
        }
        .featured-card {
          background: #fff;
          border: 1px solid #e2e8f0;
          border-radius: 18px;
          overflow: hidden;
          text-decoration: none;
          color: inherit;
          display: block;
          transition: transform 0.2s ease, box-shadow 0.2s ease;
        }
        .featured-card:hover { transform: translateY(-2px); box-shadow: 0 18px 50px rgba(30,64,175,0.1); }
        .featured-img {
          width: 100%;
          height: 320px;
          object-fit: cover;
          display: block;
        }
        .featured-badge {
          display: inline-block;
          color: #fff;
          font-size: 0.67rem;
          font-weight: 800;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          padding: 0.3rem 0.8rem;
          margin: 1.25rem 1.25rem 0.6rem;
          border-radius: 999px;
        }
        .featured-body { padding: 0 1.25rem 1.5rem; }
        .featured-body h3 {
          font-family: var(--font-blog-heading);
          font-size: 1.8rem;
          font-weight: 700;
          color: #0F172A;
          line-height: 1.22;
          margin-bottom: 0.85rem;
        }
        .featured-body p {
          font-size: 0.95rem;
          color: #64748B;
          line-height: 1.75;
        }
        .featured-meta {
          display: flex;
          flex-wrap: wrap;
          gap: 1rem;
          font-size: 0.78rem;
          color: #94A3B8;
          margin-top: 1rem;
          padding-top: 0.85rem;
          border-top: 1px solid #f1f5f9;
        }
        .pick-card {
          display: grid;
          grid-template-columns: 120px 1fr;
          gap: 1rem;
          padding: 1rem;
          border-bottom: 1px solid #f1f5f9;
          text-decoration: none;
          color: inherit;
          transition: background 0.15s ease;
          background: #fff;
          border-radius: 14px;
        }
        .pick-card:hover { background: #f8faff; }
        .pick-card:last-child { border-bottom: none; }
        .pick-img {
          width: 120px;
          height: 90px;
          object-fit: cover;
          border-radius: 12px;
          display: block;
          flex-shrink: 0;
        }
        .pick-cat {
          font-size: 0.62rem;
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          margin-bottom: 0.3rem;
        }
        .pick-title {
          font-family: var(--font-blog-heading);
          font-size: 1.05rem;
          font-weight: 700;
          color: #0F172A;
          line-height: 1.3;
          margin-bottom: 0.35rem;
        }
        .pick-excerpt {
          font-size: 0.82rem;
          color: #64748B;
          line-height: 1.55;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        .pick-meta {
          font-size: 0.72rem;
          color: #94A3B8;
          margin-top: 0.45rem;
        }
        .more-section { margin-bottom: 4.5rem; }
        .more-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(310px, 1fr));
          gap: 1.4rem;
        }
        .more-card {
          background: #fff;
          border: 1px solid #e2e8f0;
          border-radius: 18px;
          overflow: hidden;
          text-decoration: none;
          color: inherit;
          display: block;
          transition: transform 0.2s ease, box-shadow 0.2s ease;
        }
        .more-card:hover { transform: translateY(-2px); box-shadow: 0 14px 36px rgba(30,64,175,0.08); }
        .more-card img {
          width: 100%;
          height: 190px;
          object-fit: cover;
          display: block;
        }
        .more-card-body { padding: 1.2rem; }
        .more-cat {
          font-size: 0.65rem;
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          margin-bottom: 0.55rem;
        }
        .more-title {
          font-family: var(--font-blog-heading);
          font-size: 1.3rem;
          line-height: 1.3;
          margin-bottom: 0.6rem;
          color: #0F172A;
        }
        .more-excerpt {
          font-size: 0.88rem;
          line-height: 1.7;
          color: #64748B;
        }
        .empty-state {
          background: #fff;
          border: 1px dashed #cbd5e1;
          border-radius: 18px;
          padding: 2rem;
          color: #64748B;
        }
        @media (max-width: 1024px) {
          .main-content-grid { grid-template-columns: 1fr; }
          .search-wrap { margin-left: 0; max-width: none; }
          .featured-img { height: 280px; }
        }
        @media (max-width: 640px) {
          .page-wrap { padding: 0 1rem; }
          .blog-hero-strip { padding-top: 2rem; }
          .featured-body h3 { font-size: 1.45rem; }
          .pick-card { grid-template-columns: 1fr; }
          .pick-img { width: 100%; height: 180px; }
        }
      `}</style>

      <section className="blog-hero-strip">
        <div className="page-wrap">
          <div className="blog-kicker">Burlington Clinic Journal</div>
          <h1>
            Sexual Wellness Blog
          </h1>
          <p>
            Evidence-backed insights from Dr. Rajesh Manghnani on sexual wellness,
            treatment options, and confidential care for men and women.
          </p>

          <div className="filter-bar">
            {categories.map((category) => {
              const color = categoryColors[category] || "#1E40AF";
              const active = activeCategory === category;
              return (
                <button
                  key={category}
                  type="button"
                  className={`filter-pill ${active ? "active" : ""}`}
                  onClick={() => setActiveCategory(category)}
                  style={{
                    background: active ? color : "#fff",
                    borderColor: active ? color : "#cbd5e1",
                  }}
                >
                  {category}
                </button>
              );
            })}

          </div>
        </div>
      </section>

      <main className="page-wrap">
        {isLoading && <p>Loading blogs...</p>}
        {!isLoading && error && <p style={{ color: "#b91c1c" }}>{error}</p>}

        {!isLoading && !error && filteredBlogs.length === 0 && (
          <div className="empty-state">No blog posts found for your filters.</div>
        )}

        {!isLoading && !error && filteredBlogs.length > 0 && (
          <>
            <section className="main-content-grid">
              <div className="featured-section">
                <h2>Featured Article</h2>
                {featuredPost && (
                  <Link href={`/blog/${featuredPost.slug}`} className="featured-card">
                    <img
                      src={featuredPost.image}
                      alt={featuredPost.title}
                      className="featured-img"
                    />
                    <span
                      className="featured-badge"
                      style={{
                        background: categoryColors[featuredPost.category] || "#1E40AF",
                      }}
                    >
                      {featuredPost.category}
                    </span>
                    <div className="featured-body">
                      <h3>{featuredPost.title}</h3>
                      <p>{featuredPost.excerpt}</p>
                      <div className="featured-meta">
                        <span>{featuredPost.date}</span>
                        <span>{featuredPost.author}</span>
                        <span>Read full article</span>
                      </div>
                    </div>
                  </Link>
                )}
              </div>

              <div className="picks-section">
                <h2>Editor's Picks</h2>
                <div style={{ background: "#fff", border: "1px solid #e2e8f0", borderRadius: 18, overflow: "hidden" }}>
                  {editorPicks.length > 0 ? (
                    editorPicks.map((post) => (
                      <Link key={post.id} href={`/blog/${post.slug}`} className="pick-card">
                        <img src={post.image} alt={post.title} className="pick-img" />
                        <div>
                          <div className="pick-cat" style={{ color: categoryColors[post.category] || "#1E40AF" }}>
                            {post.category}
                          </div>
                          <div className="pick-title">{post.title}</div>
                          <div className="pick-excerpt">{post.excerpt}</div>
                          <div className="pick-meta">{post.date} • {post.author}</div>
                        </div>
                      </Link>
                    ))
                  ) : (
                    <div style={{ padding: "1rem 1.2rem", color: "#64748B" }}>No additional picks yet.</div>
                  )}
                </div>
              </div>
            </section>

            <section className="more-section">
              <h2>More Articles</h2>
              <div className="more-grid">
                {(remainingPosts.length > 0 ? remainingPosts : filteredBlogs.slice(1)).map((post) => (
                  <Link key={post.id} href={`/blog/${post.slug}`} className="more-card">
                    <img src={post.image} alt={post.title} />
                    <div className="more-card-body">
                      <div className="more-cat" style={{ color: categoryColors[post.category] || "#1E40AF" }}>
                        {post.category}
                      </div>
                      <div className="more-title">{post.title}</div>
                      <div className="more-excerpt">{post.excerpt}</div>
                    </div>
                  </Link>
                ))}
              </div>
            </section>
          </>
        )}
      </main>
    </div>
  );
}
