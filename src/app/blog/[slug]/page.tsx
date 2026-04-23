"use client";
import React from "react";
import { Navigation } from "@/components/Navigation";
import { blogPosts } from "@/lib/blog-data";
import { notFound, useParams } from "next/navigation";
import { Calendar, User, ArrowLeft, ArrowRight, Tag, Phone, Globe } from "lucide-react";

export default function BlogPostPage() {
  const { slug } = useParams();
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) notFound();

  return (
    <div style={{ background: "#FFFFFF", minHeight: "100vh" }}>
      <Navigation />
      
      <style>{`
        .post-hero {
          padding-top: 10rem;
          padding-bottom: 5rem;
          background: #F8FAFC;
          border-bottom: 1px solid #DBEAFE;
        }
        .back-link {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          color: #1E40AF;
          font-weight: 700;
          font-size: 0.85rem;
          text-decoration: none;
          margin-bottom: 2rem;
          transition: transform 0.2s;
        }
        .back-link:hover {
          transform: translateX(-5px);
        }
        .post-h1 {
          font-family: 'DM Serif Display', serif;
          font-size: clamp(2.2rem, 5vw, 3.8rem);
          color: #0F172A;
          line-height: 1.15;
          margin-bottom: 2rem;
          font-weight: 400;
        }
        .post-meta {
          display: flex;
          flex-wrap: wrap;
          gap: 2rem;
          color: #64748B;
          font-size: 0.95rem;
          margin-bottom: 1rem;
        }
        .post-article {
          padding: 6rem 0;
          max-width: 800px;
          margin: 0 auto;
        }
        .post-featured-img {
          width: 100%;
          aspect-ratio: 16/9;
          object-fit: cover;
          border-radius: 24px;
          margin-bottom: 4rem;
          box-shadow: 0 30px 60px rgba(30, 64, 175, 0.1);
          border: 1px solid #DBEAFE;
        }
        .post-body {
          font-size: 1.15rem;
          line-height: 1.9;
          color: #334155;
          white-space: pre-wrap;
          font-family: 'Inter', sans-serif;
        }
        .post-body b, .post-body strong {
          color: #0F172A;
          font-weight: 700;
        }
        .consult-box {
          margin-top: 6rem;
          padding: 3.5rem;
          background: #F1F5F9;
          border-radius: 24px;
          border-left: 6px solid #1E40AF;
          position: relative;
        }
        .consult-box h3 {
          font-family: 'DM Serif Display', serif;
          font-size: 2rem;
          color: #0F172A;
          margin-bottom: 1rem;
          font-weight: 400;
        }
        .consult-box p {
          font-size: 1.05rem;
          color: #64748B;
          line-height: 1.7;
          margin-bottom: 2.5rem;
        }
        .related-section {
          padding: 8rem 0;
          background: #F8FAFC;
          border-top: 1px solid #DBEAFE;
        }
        .related-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
          gap: 2rem;
          margin-top: 3.5rem;
        }
        .related-card {
          background: #FFFFFF;
          border: 1px solid #E2E8F0;
          border-radius: 20px;
          padding: 2rem;
          text-decoration: none;
          transition: all 0.3s;
        }
        .related-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 15px 30px rgba(30, 64, 175, 0.05);
          border-color: #1E40AF;
        }
        .related-card h4 {
          font-family: 'DM Serif Display', serif;
          font-size: 1.3rem;
          color: #0F172A;
          margin-bottom: 0.75rem;
          font-weight: 400;
        }
        .related-card p {
          font-size: 0.9rem;
          color: #64748B;
          line-height: 1.6;
        }
      `}</style>

      {/* Post Hero */}
      <header className="post-hero">
        <div className="container" style={{ maxWidth: "1000px" }}>
          <a href="/blog" className="back-link">
            <ArrowLeft size={16} /> Back to Journal
          </a>
          <div style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", background: "#EFF6FF", color: "#1E40AF", padding: "0.4rem 1rem", borderRadius: "50px", fontSize: "0.7rem", fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: "1.5rem" }}>
            <Tag size={12} /> {post.category}
          </div>
          <h1 className="post-h1">{post.title}</h1>
          <div className="post-meta">
            <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
              <Calendar size={18} color="#1E40AF" />
              {post.date}
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
              <User size={18} color="#1E40AF" />
              {post.author}
            </div>
          </div>
        </div>
      </header>

      {/* Post Content */}
      <main className="container">
        <article className="post-article">
          <img 
            src={post.image} 
            alt={post.title} 
            className="post-featured-img" 
          />
          <div className="post-body">
            {post.content}
          </div>

          {/* Consultation Box */}
          <div className="consult-box">
            <h3>Consult Dr. Rajesh Manghnani</h3>
            <p>
              If you are seeking professional, evidence-based solutions for the concerns discussed in this article, we invite you to book a private consultation. Experience the highest standard of confidential care.
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem" }}>
              <a 
                href="tel:+919893880001" 
                style={{ 
                  display: "inline-flex", alignItems: "center", gap: "0.75rem", background: "#1E40AF", color: "#fff", 
                  padding: "1rem 2rem", borderRadius: "12px", fontWeight: 700, textDecoration: "none", boxShadow: "0 10px 20px rgba(30, 64, 175, 0.2)"
                }}
              >
                <Phone size={18} /> Call +91 98938 80001
              </a>
              <a 
                href="https://bestsexologistdoctor.com/index.php/payment/" 
                target="_blank"
                style={{ 
                  display: "inline-flex", alignItems: "center", gap: "0.75rem", background: "#fff", color: "#1E40AF", 
                  padding: "1rem 2rem", borderRadius: "12px", fontWeight: 700, textDecoration: "none", border: "1px solid #DBEAFE"
                }}
              >
                <Globe size={18} /> Book Appointment Online
              </a>
            </div>
          </div>
        </article>
      </main>

      {/* Related Articles */}
      <section className="related-section">
        <div className="container">
          <span className="overline" style={{ color: "#1E40AF" }}>Deepen Your Knowledge</span>
          <h2 style={{ fontFamily: "'DM Serif Display', serif", fontSize: "2.5rem", color: "#0F172A", marginTop: "1rem" }}>Related <em style={{ color: "#1E40AF", fontStyle: "italic" }}>Articles</em></h2>
          
          <div className="related-grid">
            {blogPosts.filter(p => p.slug !== post.slug).slice(0, 3).map((p, idx) => (
              <a key={idx} href={`/blog/${p.slug}`} className="related-card">
                <div style={{ color: "#1E40AF", fontSize: "0.7rem", fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: "0.75rem" }}>{p.category}</div>
                <h4>{p.title}</h4>
                <p>{p.excerpt}</p>
                <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginTop: "1.5rem", color: "#1E40AF", fontWeight: 700, fontSize: "0.85rem" }}>
                  Read Entry <ArrowRight size={14} />
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}


