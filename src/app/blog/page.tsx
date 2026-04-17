import React from "react";
import { Navigation } from "@/components/Navigation";
import { blogPosts } from "@/lib/blog-data";

export default function BlogPage() {
  return (
    <div className="redesigned-home">
      <Navigation />
      
      <header className="hero" style={{minHeight: '40vh', paddingTop: '120px', paddingBottom: '3rem'}}>
        <div className="hero-bg"></div>
        <div className="hero-grain"></div>
        <div className="container">
          <p className="overline" style={{textAlign: 'center', color: 'var(--gold)'}}>Knowledge & Insights</p>
          <h1 style={{textAlign: 'center', fontSize: '3.5rem'}}>Medical <em style={{color: 'var(--gold)'}}>Journal</em></h1>
          <p style={{textAlign: 'center', maxWidth: '600px', margin: '1rem auto', color: 'rgba(255,255,255,0.6)'}}>
            Professional advice, research-backed insights, and holistic wisdom from India's leading sexual wellness expert.
          </p>
        </div>
      </header>

      <section className="media-blogs" style={{background: 'var(--navy)', minHeight: '60vh'}}>
        <div className="container">
          <div className="media-grid" style={{gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))', gap: '2rem'}}>
            {blogPosts.map((post, idx) => (
              <a key={idx} href={`/blog/${post.slug}`} className="blog-card bg-glass" style={{display: 'flex', flexDirection: 'column', height: '100%', textDecoration: 'none', color: 'inherit'}}>
                <div className="blog-tag" style={{position: 'static', alignSelf: 'flex-start', marginBottom: '1.25rem'}}>{post.category}</div>
                <h3 style={{fontSize: '1.5rem', marginBottom: '1rem', paddingRight: '0'}}>{post.title}</h3>
                <p style={{flexGrow: 1}}>{post.excerpt}</p>
                <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '1.5rem', borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '1rem'}}>
                  <span className="blog-date" style={{fontSize: '0.75rem'}}>{post.date}</span>
                  <span style={{fontSize: '0.75rem', color: 'var(--gold)', fontWeight: '600'}}>{post.author}</span>
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

      <footer>
        <div className="container footer-inner">
          <div className="footer-logo">Dr. G.D. Memorial Clinic</div>
          <p className="footer-copy">© 2026 Dr. G.D. Memorial Clinic. All Rights Reserved.</p>
          <div className="footer-links">
            <a href="/">Home</a>
            <a href="#about">About</a>
            <a href="#locations">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
