import React from "react";
import { Navigation } from "@/components/Navigation";
import { blogPosts } from "@/lib/blog-data";

export default function BlogPage() {
  return (
    <div>
      <Navigation />
      
      <header className="hero" style={{ minHeight: '40vh', paddingTop: '120px', paddingBottom: '3rem', background: '#0a0a0a' }}>
        <div className="hero-slider" style={{ position: 'absolute', inset: 0, zIndex: 1 }}>
          <div className="hero-slide active">
            <img src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=2000" alt="Medical Library" style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'brightness(0.35)' }} />
          </div>
        </div>
        <div className="hero-overlay" />
        <div className="container" style={{ position: 'relative', zIndex: 3 }}>
          <p className="overline" style={{ textAlign: 'center', color: 'var(--gold-light)' }}>Knowledge & Insights</p>
          <h1 style={{ textAlign: 'center', fontSize: 'clamp(2.5rem, 5vw, 4rem)', color: 'white' }}>Medical <em style={{ color: 'var(--gold)' }}>Journal</em></h1>
          <p style={{ textAlign: 'center', maxWidth: '600px', margin: '1rem auto', color: 'rgba(255,255,255,0.7)', fontSize: '1.05rem', lineHeight: 1.7 }}>
            Professional advice, research-backed insights, and holistic wisdom from India's leading sexual wellness expert.
          </p>
        </div>
      </header>

      <section className="media-blogs" style={{ background: 'var(--cream2)', minHeight: '60vh', padding: '6rem 0' }}>
        <div className="container">
          <div className="media-grid" style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))', gap: '2rem' }}>
            {blogPosts.map((post, idx) => (
              <a key={idx} href={`/blog/${post.slug}`} className="blog-card" style={{ display: 'flex', flexDirection: 'column', height: '100%', textDecoration: 'none', background: 'var(--white)' }}>
                <div className="blog-tag" style={{ position: 'static', alignSelf: 'flex-start', marginBottom: '1.25rem' }}>{post.category}</div>
                <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', fontFamily: "'Playfair Display', serif" }}>{post.title}</h3>
                <p style={{ flexGrow: 1, color: 'var(--muted)', fontSize: '0.92rem', lineHeight: 1.6 }}>{post.excerpt}</p>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '1.5rem', borderTop: '1px solid var(--border)', paddingTop: '1rem' }}>
                  <span className="blog-date" style={{ fontSize: '0.75rem', color: 'var(--muted)' }}>{post.date}</span>
                  <span style={{ fontSize: '0.75rem', color: 'var(--gold2)', fontWeight: '700' }}>{post.author}</span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="container cta-inner">
          <h2>Have a Personal Question?</h2>
          <p>Get professional, confidential medical advice directly from Dr. Rajesh Manghnani via a private call or online consultation.</p>
          <div className="cta-buttons">
             <a href="tel:+919893880001" className="btn-white">📞 Call Dr. Rajesh</a>
             <a href="https://bestsexologistdoctor.com/index.php/payment/" className="btn-ghost">Book Online</a>
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
