import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  ArrowRight,
  Calendar,
  Globe,
  Phone,
  Tag,
  User,
} from "lucide-react";
import { Navigation } from "@/components/Navigation";
import { getBlogBySlug, listBlogs } from "@/lib/blogs-db";

export const dynamic = "force-dynamic";

const categoryColors: Record<string, string> = {
  "Men's Health": "#1E40AF",
  "Women's Health": "#be185d",
  "General Wellness": "#065f46",
  "Holistic Care": "#7c3aed",
  "Sexual Wellness": "#0f766e",
};

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await getBlogBySlug(slug);

  if (!post) {
    notFound();
  }

  const related = (await listBlogs())
    .filter((item) => item.slug !== post.slug)
    .slice(0, 3);

  return (
    <div style={{ background: "#FFFFFF", minHeight: "100vh" }}>
      <Navigation />

      <style>{`
        .post-hero {
          padding-top: 9.5rem;
          padding-bottom: 4.5rem;
          background: linear-gradient(180deg, #f8fafc 0%, #ffffff 100%);
          border-bottom: 1px solid #DBEAFE;
        }
        .container {
          max-width: 1120px;
          margin: 0 auto;
          padding: 0 1.5rem;
        }
        .back-link {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          color: #1E40AF;
          font-weight: 800;
          font-size: 0.85rem;
          text-decoration: none;
          margin-bottom: 1.8rem;
          transition: transform 0.2s ease;
        }
        .back-link:hover {
          transform: translateX(-5px);
        }
        .post-h1 {
          font-family: 'DM Serif Display', Georgia, serif;
          font-size: clamp(2.25rem, 5vw, 4rem);
          color: #0F172A;
          line-height: 1.12;
          margin-bottom: 1.6rem;
          font-weight: 400;
        }
        .post-meta {
          display: flex;
          flex-wrap: wrap;
          gap: 1.6rem;
          color: #64748B;
          font-size: 0.95rem;
          margin-bottom: 1rem;
        }
        .post-article {
          padding: 5.5rem 0;
          max-width: 900px;
          margin: 0 auto;
        }
        .post-featured-img {
          width: 100%;
          aspect-ratio: 16/9;
          object-fit: cover;
          border-radius: 24px;
          margin-bottom: 3.5rem;
          box-shadow: 0 30px 60px rgba(30, 64, 175, 0.1);
          border: 1px solid #DBEAFE;
        }
        .post-body {
          font-size: 1.13rem;
          line-height: 1.95;
          color: #334155;
          white-space: pre-wrap;
          font-family: 'Inter', sans-serif;
        }
        .consult-box {
          margin-top: 5.5rem;
          padding: 3.25rem;
          background: linear-gradient(180deg, #f8fafc 0%, #eef4ff 100%);
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
          font-size: 1.03rem;
          color: #64748B;
          line-height: 1.75;
          margin-bottom: 2.2rem;
        }
        .related-section {
          padding: 7.5rem 0;
          background: #F8FAFC;
          border-top: 1px solid #DBEAFE;
        }
        .related-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
          gap: 1.6rem;
          margin-top: 3rem;
        }
        .related-card {
          background: #FFFFFF;
          border: 1px solid #E2E8F0;
          border-radius: 20px;
          padding: 2rem;
          text-decoration: none;
          transition: all 0.3s ease;
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
          line-height: 1.65;
        }
        .tag-pill {
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
          padding: 0.35rem 0.9rem;
          border-radius: 999px;
          font-size: 0.7rem;
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          color: #fff;
          margin-bottom: 1rem;
        }
        @media (max-width: 768px) {
          .post-hero { padding-top: 8.5rem; }
          .consult-box { padding: 2rem 1.5rem; }
          .related-grid { grid-template-columns: 1fr; }
        }
      `}</style>

      <header className="post-hero">
        <div className="container">
          <Link href="/blog" className="back-link">
            <ArrowLeft size={16} /> Back to Journal
          </Link>

          <div
            className="tag-pill"
            style={{ background: categoryColors[post.category] || "#1E40AF" }}
          >
            <Tag size={12} /> {post.category}
          </div>

          <h1 className="post-h1">{post.title}</h1>

          <div className="post-meta">
            <div
              style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}
            >
              <Calendar size={18} color="#1E40AF" />
              {post.date}
            </div>
            <div
              style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}
            >
              <User size={18} color="#1E40AF" />
              {post.author}
            </div>
          </div>
        </div>
      </header>

      <main className="container">
        <article className="post-article">
          <img
            src={post.image}
            alt={post.title}
            className="post-featured-img"
          />
          <div className="post-body">{post.content}</div>

          <div className="consult-box">
            <h3>Consult Dr. Rajesh Manghnani</h3>
            <p>
              If you are seeking professional, evidence-based solutions for the
              concerns discussed in this article, we invite you to book a
              private consultation. Experience the highest standard of
              confidential care.
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem" }}>
              <a
                href="tel:+919893880001"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.75rem",
                  background: "#1E40AF",
                  color: "#fff",
                  padding: "1rem 1.8rem",
                  borderRadius: "12px",
                  fontWeight: 700,
                  textDecoration: "none",
                  boxShadow: "0 10px 20px rgba(30, 64, 175, 0.2)",
                }}
              >
                <Phone size={18} /> Call +91 98938 80001
              </a>
              <a
                href="https://bestsexologistdoctor.com/index.php/payment/"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.75rem",
                  background: "#fff",
                  color: "#1E40AF",
                  padding: "1rem 1.8rem",
                  borderRadius: "12px",
                  fontWeight: 700,
                  textDecoration: "none",
                  border: "1px solid #DBEAFE",
                }}
              >
                <Globe size={18} /> Book Appointment Online
              </a>
            </div>
          </div>
        </article>
      </main>

      <section className="related-section">
        <div className="container">
          <span
            className="overline"
            style={{
              color: "#1E40AF",
              fontSize: "0.75rem",
              fontWeight: 800,
              textTransform: "uppercase",
              letterSpacing: "0.12em",
            }}
          >
            Deepen Your Knowledge
          </span>
          <h2
            style={{
              fontFamily: "'DM Serif Display', serif",
              fontSize: "2.5rem",
              color: "#0F172A",
              marginTop: "1rem",
            }}
          >
            Related{" "}
            <em style={{ color: "#1E40AF", fontStyle: "italic" }}>Articles</em>
          </h2>

          <div className="related-grid">
            {related.map((item) => (
              <Link
                key={item.id}
                href={`/blog/${item.slug}`}
                className="related-card"
              >
                <div
                  style={{
                    color: categoryColors[item.category] || "#1E40AF",
                    fontSize: "0.7rem",
                    fontWeight: 800,
                    textTransform: "uppercase",
                    letterSpacing: "0.1em",
                    marginBottom: "0.75rem",
                  }}
                >
                  {item.category}
                </div>
                <h4>{item.title}</h4>
                <p>{item.excerpt}</p>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.5rem",
                    marginTop: "1.5rem",
                    color: "#1E40AF",
                    fontWeight: 700,
                    fontSize: "0.85rem",
                  }}
                >
                  Read Entry <ArrowRight size={14} />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
