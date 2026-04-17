import Image from "next/image";
import { Navigation } from "@/components/Navigation";

export default function GalleryPage() {
  const photos = [
    { src: "https://bestsexologistdoctor.com/wp-content/uploads/2023/02/Untitled-design-20.png", alt: "Burlington Clinic Exterior" },
    { src: "https://bestsexologistdoctor.com/wp-content/uploads/2025/11/photo-output.jpg", alt: "Dr. Rajesh Manghnani Consultation" },
    { src: "https://bestsexologistdoctor.com/wp-content/uploads/2023/02/Untitled-design-20.png", alt: "Medical Excellence" },
    { src: "https://bestsexologistdoctor.com/wp-content/uploads/2025/11/photo-output.jpg", alt: "Patient Privacy First" },
    { src: "https://bestsexologistdoctor.com/wp-content/uploads/2023/02/Untitled-design-20.png", alt: "ISO Certified Facility" },
    { src: "https://bestsexologistdoctor.com/wp-content/uploads/2025/11/photo-output.jpg", alt: "Holistic Healing Heritage" },
  ];

  return (
    <div className="redesigned-home">
      <Navigation />
      
      <header className="hero" style={{ minHeight: "45vh", paddingTop: "140px", paddingBottom: "4rem" }}>
        <div className="hero-bg"></div>
        <div className="hero-grain"></div>
        <div className="container">
          <p className="overline" style={{ textAlign: "center", color: "var(--gold)" }}>Visual Heritage</p>
          <h1 style={{ textAlign: "center", fontSize: "3.5rem", lineHeight: 1.2 }}>Clinic <em style={{ color: "var(--gold)" }}>Gallery</em></h1>
          <p style={{ textAlign: "center", maxWidth: "700px", margin: "1.5rem auto", color: "rgba(255,255,255,0.6)", fontSize: "1.1rem" }}>
            A glimpse into our world-class facilities and the legacy of care at Burlington Clinic & Hospital. 
            Blending nearly a century of tradition with modern clinical standards.
          </p>
        </div>
      </header>

      <section className="section" style={{ background: "var(--navy)", padding: "5rem 0" }}>
        <div className="container">
          <div className="media-grid" style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))', gap: '2rem' }}>
            {photos.map((photo, i) => (
              <div key={i} className="bg-glass" style={{ borderRadius: "20px", overflow: "hidden", border: "1px solid rgba(255,255,255,0.05)", position: "relative", height: "350px" }}>
                <img 
                  src={photo.src} 
                  alt={photo.alt} 
                  style={{ width: "100%", height: "100%", objectFit: "cover", opacity: 0.8 }}
                />
                <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, background: "linear-gradient(to top, rgba(5,8,16,0.9), transparent)", padding: "2rem", color: "#fff" }}>
                  <div style={{color: 'var(--gold2)', fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.5rem'}}>Featured</div>
                  <h3 style={{ fontSize: "1.25rem", fontFamily: 'var(--font-serif)' }}>{photo.alt}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="container cta-inner">
          <h2>Experience the Difference</h2>
          <p>Visit our facilities in person or book a secure online consultation from the comfort of your home.</p>
          <div className="cta-buttons">
            <a href="tel:+919893880001" className="btn-white">📞 Call Now</a>
            <a href="https://bestsexologistdoctor.com/index.php/payment/" className="btn-ghost">Book Consultation</a>
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
