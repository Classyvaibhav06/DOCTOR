import React from "react";
import { Metadata } from "next";
import { Navigation } from "@/components/Navigation";
import { blogPosts } from "@/lib/blog-data";
import { notFound } from "next/navigation";

type Props = {
  params: { slug: string };
};

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) return { title: "Post Not Found" };

  return {
    title: post.title,
    description: post.excerpt,
    keywords: post.keywords,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      publishedTime: new Date(post.date).toISOString(),
      authors: [post.author],
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) notFound();

  return (
    <div className="redesigned-home">
      <Navigation />
      
      <header className="hero" style={{ minHeight: '50vh', paddingTop: '140px', paddingBottom: '4rem' }}>
        <div className="hero-bg"></div>
        <div className="hero-grain"></div>
        <div className="container">
          <div className="blog-tag" style={{ margin: '0 auto 1.5rem', display: 'table' }}>{post.category}</div>
          <h1 style={{ textAlign: 'center', fontSize: '3.5rem', lineHeight: 1.2, maxWidth: '900px', margin: '0 auto' }}>{post.title}</h1>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', marginTop: '2rem', opacity: 0.7 }}>
            <span>📅 {post.date}</span>
            <span>✍️ {post.author}</span>
          </div>
        </div>
      </header>

      <article className="post-content" style={{ padding: '4rem 0', background: 'var(--navy)' }}>
        <div className="container" style={{ maxWidth: '800px' }}>
          <div 
            style={{ 
              fontSize: '1.2rem', 
              lineHeight: 1.8, 
              color: 'rgba(255,255,255,0.8)',
              whiteSpace: 'pre-wrap'
            }}
          >
            {post.content}
          </div>

          <div 
            style={{ 
              marginTop: '4rem', 
              padding: '2.5rem', 
              background: 'rgba(212,168,83,0.05)', 
              borderRadius: '16px', 
              border: '1px solid rgba(212,168,83,0.2)' 
            }}
          >
            <h3 style={{ color: 'var(--gold2)', marginBottom: '1rem' }}>Consult Dr. Rajesh Manghnani</h3>
            <p style={{ marginBottom: '1.5rem' }}>If you are experiencing any of the issues discussed in this article, don't wait. Get professional, confidential advice from India's leading expert.</p>
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <a href="tel:+919893880001" className="btn-primary" style={{ padding: '0.8rem 1.5rem' }}>Call: +91 98938 80001</a>
              <a href="https://bestsexologistdoctor.com/index.php/payment/" className="btn-outline" style={{ padding: '0.8rem 1.5rem' }}>Book Appointment</a>
            </div>
          </div>
        </div>
      </article>

      <section className="more-posts" style={{ padding: '4rem 0', background: 'rgba(255,255,255,0.02)' }}>
        <div className="container">
          <h2 style={{ marginBottom: '2.5rem', textAlign: 'center' }}>Related Articles</h2>
          <div className="media-grid" style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '2rem' }}>
            {blogPosts.filter(p => p.slug !== post.slug).slice(0, 3).map((p, idx) => (
              <a key={idx} href={`/blog/${p.slug}`} className="blog-card bg-glass" style={{ textDecoration: 'none', color: 'inherit' }}>
                <div className="blog-tag" style={{ position: 'static', alignSelf: 'flex-start', marginBottom: '1.25rem' }}>{p.category}</div>
                <h3 style={{ fontSize: '1.2rem', marginBottom: '0.75rem' }}>{p.title}</h3>
                <p style={{ fontSize: '0.9rem', opacity: 0.7 }}>{p.excerpt}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      <footer>
        <div className="container footer-inner">
          <div className="footer-logo">Dr. G.D. Memorial Clinic</div>
          <p className="footer-copy">© 2026 Dr. G.D. Memorial Clinic. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
}
