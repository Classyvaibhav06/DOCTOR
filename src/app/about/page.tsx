import Image from "next/image";
import Link from "next/link";
import { Navigation } from "@/components/Navigation";

export default function AboutPage() {
  return (
    <div className="redesigned-home">
      <Navigation />
      
      <header className="hero" style={{ minHeight: "50vh", paddingTop: "140px", paddingBottom: "4rem" }}>
        <div className="hero-bg"></div>
        <div className="hero-grain"></div>
        <div className="container">
          <p className="overline" style={{ textAlign: "center", color: "var(--gold)" }}>A Legacy of Trust</p>
          <h1 style={{ textAlign: "center", fontSize: "3.5rem", lineHeight: 1.2 }}>Dr. <em style={{ color: "var(--gold)" }}>Rajesh Manghnani</em></h1>
          <p style={{ textAlign: "center", maxWidth: "700px", margin: "1.5rem auto", color: "rgba(255,255,255,0.6)", fontSize: "1.1rem" }}>
            The legacy of India&apos;s most trusted sexual health specialist since 1926. 
            Blending traditional wisdom with modern clinical excellence.
          </p>
        </div>
      </header>

      <section className="section" style={{ background: "var(--navy)", padding: "5rem 0" }}>
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1.2fr", gap: "5rem", alignItems: "center" }} className="media-grid">
            <div className="about-img-wrap" style={{ borderRadius: "24px", overflow: "hidden" }}>
              <img 
                src="https://bestsexologistdoctor.com/wp-content/uploads/2025/11/photo-output.jpg" 
                alt="Dr. Rajesh Manghnani" 
                style={{ width: "100%", height: "auto" }}
              />
              <div className="hero-img-badge" style={{ bottom: "20px", left: "20px" }}>
                <div className="hero-img-badge-val">23+</div>
                <div className="hero-img-badge-label">Years of Expertise</div>
              </div>
            </div>
            
            <div>
              <p className="overline">The Doctor's Journey</p>
              <h2 className="section-title" style={{ textAlign: "left", fontSize: "2.5rem", marginBottom: "2rem" }}>Pioneering Natural <br/><em style={{color: 'var(--gold)'}}>Sexual Wellness</em></h2>
              <p style={{ color: "rgba(255,255,255,0.7)", lineHeight: 1.8, fontSize: "1.1rem", marginBottom: "1.5rem" }}>
                Dr. Rajesh Manghnani is a name synonymous with excellence and discretion in the field of sexual health. 
                Carrying forward a medical legacy that spans nearly a century, he has dedicated his career to finding 
                sustainable, evidence-based solutions for patients across the globe.
              </p>
              <p style={{ color: "rgba(255,255,255,0.7)", lineHeight: 1.8, fontSize: "1.1rem" }}>
                Under his leadership, Burlington Clinic has evolved into a nationally recognized center for healing, 
                serving over 5.5 lakh patients. His philosophy centers on "Private Care with Scientific Precision" — 
                ensuring every patient feels heard, protected, and empowered.
              </p>
              
              <div className="hero-stats" style={{ marginTop: "3rem", justifyContent: "flex-start", gap: "3rem" }}>
                <div className="hero-stat">
                  <div className="hero-stat-val">98+</div>
                  <div className="hero-stat-label">Years Legacy</div>
                </div>
                <div className="hero-stat">
                  <div className="hero-stat-val">5.5L+</div>
                  <div className="hero-stat-label">Patients Served</div>
                </div>
                <div className="hero-stat">
                  <div className="hero-stat-val">4.9★</div>
                  <div className="hero-stat-label">Patient Rating</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section" style={{ background: "rgba(255,255,255,0.02)", padding: "5rem 0" }}>
        <div className="container" style={{maxWidth: '1200px'}}>
          <div className="bg-glass" style={{ padding: "4rem", borderRadius: "32px", border: "1px solid rgba(212,168,83,0.1)" }}>
             <div style={{ textAlign: "center", maxWidth: "800px", margin: "0 auto" }}>
                <h3 style={{ fontSize: "2rem", color: "var(--gold2)", marginBottom: "1.5rem", fontFamily: "var(--font-serif)" }}>The Clinical Philosophy</h3>
                <p style={{ fontSize: "1.15rem", lineHeight: 1.8, color: "rgba(255,255,255,0.8)" }}>
                  "We believe that sexual health is a critical pillar of overall happiness. Our mission isn't just to treat symptoms, but to restore a man's confidence and a couple's harmony through the safest, most natural methods available in modern homeopathy."
                </p>
                <div style={{ marginTop: "2.5rem", fontWeight: "bold", fontSize: "1.1rem", textTransform: "uppercase", letterSpacing: "0.1em", color: 'var(--gold)' }}>— Dr. Rajesh Manghnani</div>
             </div>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="container cta-inner">
          <h2>Ready to Take the First Step?</h2>
          <p>Book your confidential appointment today. Available for online video calls and in-person consultations.</p>
          <div className="cta-buttons">
            <a href="tel:+919893880001" className="btn-white">📞 Call Dr. Rajesh</a>
            <a href="https://bestsexologistdoctor.com/index.php/payment/" className="btn-ghost">Book Appointment</a>
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
