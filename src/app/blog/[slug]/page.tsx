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
      
      <header className="hero" style={{ minHeight: '60vh', paddingTop: '140px', paddingBottom: '4rem', background: '#0a0a0a' }}>
        <div className="hero-slider" style={{ position: 'absolute', inset: 0, zIndex: 1 }}>
          <div className="hero-slide active">
            <img src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=2000" alt="Medical Innovation" style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'brightness(0.4)' }} />
          </div>
        </div>
        <div className="hero-overlay" />
        <div className="container" style={{ position: 'relative', zIndex: 3 }}>
          <div className="blog-tag" style={{ margin: '0 auto 1.5rem', display: 'table', background: 'var(--gold)', color: 'white' }}>{post.category}</div>
          <h1 style={{ textAlign: 'center', fontSize: 'clamp(2rem, 5vw, 3.5rem)', color: 'white', lineHeight: 1.2, maxWidth: '900px', margin: '0 auto' }}>{post.title}</h1>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', marginTop: '2rem', color: 'rgba(255,255,255,0.7)', fontSize: '0.9rem' }}>
            <span>📅 {post.date}</span>
            <span>✍️ {post.author}</span>
          </div>
        </div>
      </header>

      <article className="post-content" style={{ padding: '5rem 0', background: 'var(--white)' }}>
        <div className="container" style={{ maxWidth: '850px' }}>
          <div style={{ marginBottom: '3rem' }}>
             <img src="https://images.unsplash.com/photo-1576091160550-217359f4ecf8?auto=format&fit=crop&q=80&w=2000" alt={post.title} style={{ width: '100%', borderRadius: '18px', boxShadow: 'var(--shadow-lg)', border: '1px solid var(--border)' }} />
          </div>
          <div 
            style={{ 
              fontSize: '1.1rem', 
              lineHeight: 1.9, 
              color: 'var(--text)',
              whiteSpace: 'pre-wrap'
            }}
          >
            {post.content}
          </div>

          <div 
            style={{ 
              marginTop: '5rem', 
              padding: '3rem', 
              background: 'var(--cream)', 
              borderRadius: '18px', 
              border: '1px solid var(--border)',
              position: 'relative',
              overflow: 'hidden'
            }}
          >
            <div style={{ position: 'absolute', top: 0, left: 0, width: '4px', height: '100%', background: 'var(--gold)' }} />
            <h3 style={{ color: 'var(--text)', fontFamily: "'Playfair Display', serif", fontSize: '1.8rem', marginBottom: '1rem' }}>Consult Dr. Rajesh Manghnani</h3>
            <p style={{ color: 'var(--muted)', marginBottom: '2rem', fontSize: '1.05rem' }}>If you are experiencing any of the issues discussed in this article, don't wait. Get professional, confidential advice from India's leading expert in sexual health.</p>
            <div style={{ display: 'flex', gap: '1.2rem', flexWrap: 'wrap' }}>
              <a href="tel:+919893880001" className="btn-primary">Call: +91 98938 80001</a>
              <a href="https://bestsexologistdoctor.com/index.php/payment/" className="btn-secondary">Book Appointment Online</a>
            </div>
          </div>
        </div>
      </article>

      <section className="more-posts" style={{ padding: '6rem 0', background: 'var(--cream2)' }}>
        <div className="container">
          <p className="overline" style={{ textAlign: 'center' }}>Keep Reading</p>
          <h2 className="section-title" style={{ marginBottom: '3.5rem', textAlign: 'center' }}>Related Articles</h2>
          <div className="media-grid" style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '2rem' }}>
            {blogPosts.filter(p => p.slug !== post.slug).slice(0, 3).map((p, idx) => (
              <a key={idx} href={`/blog/${p.slug}`} className="blog-card" style={{ background: 'var(--white)' }}>
                <div className="blog-tag">{p.category}</div>
                <h3 style={{ fontSize: '1.3rem', marginBottom: '1rem', fontFamily: "'Playfair Display', serif" }}>{p.title}</h3>
                <p style={{ fontSize: '0.92rem', color: 'var(--muted)', lineHeight: 1.6 }}>{p.excerpt}</p>
                <div className="service-arrow" style={{ marginTop: '1.5rem' }}>Read Article &rarr;</div>
              </a>
            ))}
          </div>
        </div>
      </section>

      <footer style={{ background: '#0a0a08', padding: '4rem 0', color: 'rgba(255,255,255,0.4)' }}>
        <div className="container footer-inner" style={{ flexDirection: 'column', textAlign: 'center', gap: '1rem' }}>
          <div className="footer-logo" style={{ color: 'white' }}>Dr. G.D. Memorial Clinic</div>
          <p className="footer-copy">© 2026 Dr. G.D. Memorial Clinic. All Rights Reserved.</p>
          <p style={{ fontSize: '0.7rem' }}>ISO Certified · World Book of Records · Expert Care Since 2004</p>
        </div>
      </footer>
    </div>
  );
}
