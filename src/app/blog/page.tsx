import React from "react";
import { Navigation } from "@/components/Navigation";

const blogPosts = [
  {
    title: "The Science of Sexual Wellness: A Holistic Approach",
    date: "Dec 15, 2025",
    category: "Wellness",
    author: "Dr. Rajesh Manghnani",
    excerpt: "Exploring how integrated medicine and lifestyle changes can revitalize intimacy and overall health in modern men.",
    content: "Sexual health is often a reflection of our overall physiological and psychological state. In this article, Dr. Manghnani discusses the delicate balance between hormonal health, stress management, and traditional homeopathic therapies..."
  },
  {
    title: "Myth-Busting: Homeopathy as a Cure for Intimacy Issues",
    date: "Nov 22, 2025",
    category: "Treatments",
    author: "Medical Team",
    excerpt: "Addressing common misconceptions about German homeopathic dilutions and their effectiveness in treating chronic sexual health conditions.",
    content: "Many believe homeopathy takes months to show results. However, with precision dilutions and personalized constitutional remedies, we've seen rapid improvement in patients suffering from complex intimacy disorders..."
  },
  {
    title: "Nurturing Prostate Health After 40",
    date: "Oct 05, 2025",
    category: "Mens Health",
    author: "Dr. Rajesh Manghnani",
    excerpt: "Essential tips and holistic treatments for maintaining a healthy prostate and preventing age-related sexual dysfunction.",
    content: "Prostate health is a cornerstone of men's wellness. Understanding the signs of inflammation or enlargement early can save years of discomfort and prevent secondary sexual health complications..."
  },
  {
    title: "Psychological Barriers to Performance",
    date: "Sep 12, 2025",
    category: "Psychology",
    author: "Wellness Expert",
    excerpt: "How performance anxiety and modern work stress impact physical intimacy, and how we treat the mind to heal the body.",
    content: "The brain is the most powerful organ for intimacy. When stress hormones like cortisol dominate, wellness suffers. Our clinic uses a dual-path approach to stabilize both mental state and physical response..."
  }
];

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
              <div key={idx} className="blog-card bg-glass" style={{display: 'flex', flexDirection: 'column', height: '100%'}}>
                <div className="blog-tag" style={{position: 'static', alignSelf: 'flex-start', marginBottom: '1.25rem'}}>{post.category}</div>
                <h3 style={{fontSize: '1.5rem', marginBottom: '1rem', paddingRight: '0'}}>{post.title}</h3>
                <p style={{flexGrow: 1}}>{post.excerpt}</p>
                <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '1.5rem', borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '1rem'}}>
                  <span className="blog-date" style={{fontSize: '0.75rem'}}>{post.date}</span>
                  <span style={{fontSize: '0.75rem', color: 'var(--gold)', fontWeight: '600'}}>{post.author}</span>
                </div>
              </div>
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
