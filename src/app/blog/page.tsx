"use client";
import React, { useState } from "react";
import { blogPosts } from "@/lib/blog-data";
import { Navigation } from "@/components/Navigation";

const categoryColors = {
  "Men's Health": "#1E40AF",
  "Women's Health": "#be185d",
  "General Wellness": "#065f46",
  "Holistic Care": "#7c3aed",
};

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const categories = ["All", ...new Set(blogPosts.map((p) => p.category))];

  const featuredPost = blogPosts[0];
  const editorPicks = blogPosts.slice(1, 4);
  const remainingPosts = blogPosts.slice(4);

  const filtered = blogPosts.filter((post) => {
    const matchCat = activeCategory === "All" || post.category === activeCategory;
    const matchSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchCat && matchSearch;
  });


  return (
    <div style={{ fontFamily: "'Source Sans 3', sans-serif", background: "#FAFAFA", minHeight: "100vh", color: "#1a1a2e" }}>
      <Navigation />
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;1,400&family=Source+Sans+3:wght@300;400;600;700&display=swap');

        * { box-sizing: border-box; margin: 0; padding: 0; }

        body { font-family: 'Source Sans 3', sans-serif; }

        .page-wrap { max-width: 1200px; margin: 0 auto; padding: 0 1.5rem; }

        /* NAV */
        .nav {
          background: #fff;
          border-bottom: 3px solid #1E40AF;
          padding: 1rem 0;
          position: sticky; top: 0; z-index: 200;
        }
        .nav-inner {
          display: flex; align-items: center; justify-content: space-between;
        }
        .nav-logo {
          font-family: 'Playfair Display', serif;
          font-size: 1.6rem;
          font-weight: 700;
          color: #1E40AF;
          text-decoration: none;
        }
        .nav-tagline {
          font-size: 0.8rem;
          color: #64748B;
          margin-top: 0.15rem;
          font-family: 'Source Sans 3', sans-serif;
        }
        .nav-links {
          display: flex; gap: 1.5rem; list-style: none;
        }
        .nav-links a {
          font-family: 'Source Sans 3', sans-serif;
          font-size: 0.85rem;
          font-weight: 600;
          color: #1a1a2e;
          text-decoration: none;
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }
        .nav-links a:hover { color: #1E40AF; }

        /* HERO STRIP */
        .blog-hero-strip {
          background: #fff;
          padding: 2rem 0 0;
          border-bottom: 1px solid #e2e8f0;
          margin-bottom: 2.5rem;
        }
        .blog-hero-strip h1 {
          font-family: 'Playfair Display', serif;
          font-size: clamp(2rem, 5vw, 3.2rem);
          font-weight: 700;
          color: #0F172A;
          margin-bottom: 0.4rem;
        }
        .blog-hero-strip p {
          font-size: 0.95rem;
          color: #64748B;
          font-family: 'Source Sans 3', sans-serif;
          margin-bottom: 1.5rem;
        }

        /* FILTER BAR */
        .filter-bar {
          display: flex;
          align-items: center;
          gap: 1rem;
          flex-wrap: wrap;
          padding: 0.75rem 0;
          border-top: 1px solid #e2e8f0;
        }
        .filter-pill {
          padding: 0.35rem 1rem;
          border-radius: 4px;
          font-size: 0.8rem;
          font-weight: 700;
          cursor: pointer;
          border: 1.5px solid #cbd5e1;
          background: #fff;
          color: #475569;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          font-family: 'Source Sans 3', sans-serif;
          transition: all 0.2s;
        }
        .filter-pill.active {
          background: #1E40AF;
          color: #fff;
          border-color: #1E40AF;
        }
        .search-wrap {
          margin-left: auto;
          position: relative;
        }
        .search-wrap input {
          padding: 0.4rem 1rem 0.4rem 2.2rem;
          border: 1.5px solid #cbd5e1;
          border-radius: 4px;
          font-size: 0.85rem;
          font-family: 'Source Sans 3', sans-serif;
          outline: none;
          width: 220px;
        }
        .search-wrap input:focus { border-color: #1E40AF; }
        .search-icon {
          position: absolute;
          left: 0.7rem;
          top: 50%;
          transform: translateY(-50%);
          color: #94A3B8;
          font-size: 0.9rem;
        }

        /* MAIN GRID — two column like reference */
        .main-content-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 2.5rem;
          margin-bottom: 3rem;
          align-items: start;
        }

        /* FEATURED POST */
        .featured-section h2 {
          font-family: 'Source Sans 3', sans-serif;
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
          border-radius: 4px;
          overflow: hidden;
          text-decoration: none;
          color: inherit;
          display: block;
          transition: box-shadow 0.2s;
        }
        .featured-card:hover { box-shadow: 0 8px 30px rgba(30,64,175,0.1); }
        .featured-img {
          width: 100%;
          height: 280px;
          object-fit: cover;
          display: block;
        }
        .featured-badge {
          display: inline-block;
          background: #1E40AF;
          color: #fff;
          font-size: 0.65rem;
          font-weight: 800;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          padding: 0.25rem 0.75rem;
          margin: 1.25rem 1.25rem 0.5rem;
          font-family: 'Source Sans 3', sans-serif;
        }
        .featured-body { padding: 0 1.25rem 1.5rem; }
        .featured-body h3 {
          font-family: 'Playfair Display', serif;
          font-size: 1.55rem;
          font-weight: 700;
          color: #0F172A;
          line-height: 1.3;
          margin-bottom: 0.75rem;
        }
        .featured-body p {
          font-size: 0.9rem;
          color: #64748B;
          line-height: 1.65;
          font-family: 'Source Sans 3', sans-serif;
        }
        .featured-meta {
          display: flex;
          gap: 1.5rem;
          font-size: 0.78rem;
          color: #94A3B8;
          font-family: 'Source Sans 3', sans-serif;
          margin-top: 1rem;
          padding-top: 0.75rem;
          border-top: 1px solid #f1f5f9;
        }

        /* EDITOR'S PICKS */
        .picks-section h2 {
          font-family: 'Source Sans 3', sans-serif;
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
        .pick-card {
          display: grid;
          grid-template-columns: 120px 1fr;
          gap: 1rem;
          padding: 1rem 0;
          border-bottom: 1px solid #f1f5f9;
          text-decoration: none;
          color: inherit;
          transition: background 0.15s;
          background: #fff;
          padding-left: 0.5rem;
          padding-right: 0.5rem;
          border-radius: 2px;
        }
        .pick-card:hover { background: #f8faff; }
        .pick-card:last-child { border-bottom: none; }
        .pick-img {
          width: 120px;
          height: 90px;
          object-fit: cover;
          border-radius: 3px;
          display: block;
          flex-shrink: 0;
        }
        .pick-content {}
        .pick-cat {
          font-size: 0.62rem;
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          font-family: 'Source Sans 3', sans-serif;
          margin-bottom: 0.3rem;
        }
        .pick-title {
          font-family: 'Playfair Display', serif;
          font-size: 1rem;
          font-weight: 700;
          color: #0F172A;
          line-height: 1.3;
          margin-bottom: 0.4rem;
        }
        .pick-excerpt {
          font-size: 0.8rem;
          color: #64748B;
          line-height: 1.5;
          font-family: 'Source Sans 3', sans-serif;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        .pick-meta {
          font-size: 0.72rem;
          color: #94A3B8;
          margin-top: 0.4rem;
          font-family: 'Source Sans 3', sans-serif;
        }

        /* MORE POSTS GRID */
        .more-section {
          margin-bottom: 5rem;
        }
        .more-section h2 {
          font-family: 'Source Sans 3', sans-serif;
          font-size: 0.75rem;
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: 0.12em;
          color: #475569;
          margin-bottom: 1.5rem;
          border-bottom: 2px solid #e2e8f0;
          padding-bottom: 0.5rem;
        }
        .more-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
          gap: 1.5rem;
        }
        .more-card {
          background: #fff;
          border: 1px solid #e2e8f0;
          border-radius: 4px;
          overflow: hidden;
          text-decoration: none;
          color: inherit;
          display: block;
          transition: box-shadow 0.2s;
        }
        .more-card:hover { box-shadow: 0 6px 20px rgba(30,64,175,0.08); }
        .more-card img {
          width: 100%;
          height: 180px;
          object-fit: cover;
          display: block;
        }
        .more-card-body { padding: 1.25rem; }
        .more-cat {
          font-size: 0.65rem;
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          font-family: 'Source Sans 3', sans-serif;
          margin-bottom: 0.5rem;
        }
        .more-card-body h3 {
          font-family: 'Playfair Display', serif;
          font-size: 1.1rem;
          font-weight: 700;
          color: #0F172A;
          line-height: 1.3;
          margin-bottom: 0.5rem;
        }
        .more-card-body p {
          font-size: 0.82rem;
          color: #64748B;
          line-height: 1.6;
          font-family: 'Source Sans 3', sans-serif;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        .more-meta {
          font-size: 0.72rem;
          color: #94A3B8;
          margin-top: 0.75rem;
          font-family: 'Source Sans 3', sans-serif;
        }

        /* CTA */
        .cta-strip {
          background: #1E40AF;
          color: #fff;
          padding: 3rem 0;
          text-align: center;
          margin-bottom: 0;
        }
        .cta-strip h3 {
          font-family: 'Playfair Display', serif;
          font-size: 1.8rem;
          margin-bottom: 0.75rem;
        }
        .cta-strip p {
          font-family: 'Source Sans 3', sans-serif;
          font-size: 0.95rem;
          opacity: 0.85;
          margin-bottom: 1.5rem;
        }
        .cta-btns { display: flex; gap: 1rem; justify-content: center; flex-wrap: wrap; }
        .btn-white {
          background: #fff; color: #1E40AF;
          padding: 0.75rem 2rem;
          border-radius: 4px;
          font-weight: 700;
          font-size: 0.9rem;
          text-decoration: none;
          font-family: 'Source Sans 3', sans-serif;
        }
        .btn-outline-white {
          border: 2px solid #fff; color: #fff;
          padding: 0.75rem 2rem;
          border-radius: 4px;
          font-weight: 700;
          font-size: 0.9rem;
          text-decoration: none;
          font-family: 'Source Sans 3', sans-serif;
        }

        /* FOOTER */
        .footer {
          background: #0F172A;
          color: #f8fafc;
          padding: 3rem 0 2rem;
        }
        .footer-grid {
          display: grid;
          grid-template-columns: 2fr 1fr 1fr;
          gap: 2rem;
          margin-bottom: 2rem;
        }
        .footer h4 {
          font-family: 'Source Sans 3', sans-serif;
          font-size: 0.75rem;
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          margin-bottom: 1rem;
          color: #fff;
        }
        .footer p, .footer a, .footer li {
          font-family: 'Source Sans 3', sans-serif;
          font-size: 0.85rem;
          color: rgba(248,250,252,0.5);
          text-decoration: none;
          line-height: 1.8;
          list-style: none;
        }
        .footer-copy {
          border-top: 1px solid rgba(255,255,255,0.07);
          padding-top: 1.5rem;
          text-align: center;
          font-size: 0.75rem;
          color: rgba(248,250,252,0.3);
          font-family: 'Source Sans 3', sans-serif;
        }

        @media (max-width: 768px) {
          .main-content-grid { grid-template-columns: 1fr; }
          .pick-card { grid-template-columns: 90px 1fr; }
          .pick-img { width: 90px; height: 70px; }
          .footer-grid { grid-template-columns: 1fr; }
          .nav-links { display: none; }
        }
      `}</style>


      {/* HERO STRIP */}
      <div className="blog-hero-strip">
        <div className="page-wrap">
          <h1>Dr. Rajesh's Medical Blog</h1>
          <p>Professional insights, research-backed advice, and holistic wisdom from India's leading sexual wellness expert.</p>

          {/* Filter */}
          <div className="filter-bar">
            {categories.map((cat) => (
              <button
                key={cat}
                className={`filter-pill ${activeCategory === cat ? "active" : ""}`}
                onClick={() => setActiveCategory(cat)}
              >
                {cat}
              </button>
            ))}
            <div className="search-wrap">
              <span className="search-icon">🔍</span>
              <input
                type="text"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>
        </div>
      </div>

      {/* MAIN CONTENT */}
      <main style={{ padding: "2rem 0" }}>
        <div className="page-wrap">

          {/* Two-col: Featured + Editor's Picks */}
          <div className="main-content-grid">
            {/* LEFT: Latest / Featured */}
            <div className="featured-section">
              <h2>Latest Post</h2>
              <a href={`/blog/${featuredPost.slug}`} className="featured-card">
                <img src={featuredPost.image} alt={featuredPost.title} className="featured-img" />
                <div
                  className="featured-badge"
                  style={{ background: categoryColors[featuredPost.category] || "#1E40AF" }}
                >
                  {featuredPost.category}
                </div>
                <div className="featured-body">
                  <h3>{featuredPost.title}</h3>
                  <p>{featuredPost.excerpt}</p>
                  <div className="featured-meta">
                    <span>By {featuredPost.author}</span>
                    <span>Last modified {featuredPost.date}</span>
                  </div>
                </div>
              </a>
            </div>

            {/* RIGHT: Editor's Picks */}
            <div className="picks-section">
              <h2>Editor's Picks</h2>
              <div style={{ background: "#fff", border: "1px solid #e2e8f0", borderRadius: 4, overflow: "hidden" }}>
                {editorPicks.map((post, i) => (
                  <a key={i} href={`/blog/${post.slug}`} className="pick-card">
                    <img src={post.image} alt={post.title} className="pick-img" />
                    <div className="pick-content">
                      <div
                        className="pick-cat"
                        style={{ color: categoryColors[post.category] || "#1E40AF" }}
                      >
                        {post.category}
                      </div>
                      <div className="pick-title">{post.title}</div>
                      <div className="pick-excerpt">{post.excerpt}</div>
                      <div className="pick-meta">
                        By {post.author} · {post.date}
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* More Posts Grid */}
          {filtered.length > 0 && (
            <div className="more-section">
              <h2>More Articles</h2>
              <div className="more-grid">
                {filtered.map((post, i) => (
                  <a key={i} href={`/blog/${post.slug}`} className="more-card">
                    <img src={post.image} alt={post.title} />
                    <div className="more-card-body">
                      <div
                        className="more-cat"
                        style={{ color: categoryColors[post.category] || "#1E40AF" }}
                      >
                        {post.category}
                      </div>
                      <h3>{post.title}</h3>
                      <p>{post.excerpt}</p>
                      <div className="more-meta">By {post.author} · {post.date}</div>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          )}

          {filtered.length === 0 && (
            <div style={{ textAlign: "center", padding: "3rem 0", color: "#64748B", fontFamily: "'Source Sans 3', sans-serif" }}>
              <p>No articles found. <button onClick={() => { setActiveCategory("All"); setSearchQuery(""); }} style={{ color: "#1E40AF", fontWeight: 700, background: "none", border: "none", cursor: "pointer", textDecoration: "underline" }}>Clear filters</button></p>
            </div>
          )}
        </div>
      </main>

      {/* CTA */}
      <div className="cta-strip">
        <div className="page-wrap">
          <h3>Have a Personal Question?</h3>
          <p>Get professional, confidential medical advice directly from Dr. Rajesh Manghnani via a private call or secure online consultation.</p>
          <div className="cta-btns">
            <a href="tel:+919893880001" className="btn-white">📞 Call Dr. Rajesh</a>
            <a href="https://bestsexologistdoctor.com/index.php/payment/" className="btn-outline-white">Book Online</a>
          </div>
        </div>
      </div>

    </div>
  );
}