import Link from "next/link";
import { services } from "@/lib/services";
import { Navigation } from "@/components/Navigation";
import { ServiceCard } from "@/components/ServiceCard";

const otherDiseases = [
  "Nightfall (Excessive Wet Dreams)",
  "Sexual Weakness (Kamzori)",
  "Loss of Libido / Desire",
  "Penis Size Concerns",
  "Spermatorrhoea",
  "Masturbation Effects",
  "Performance Anxiety",
  "Venereal Diseases",
  "Prostate Related Concerns",
  "Hormonal Imbalance",
];

export default function DiseasePage() {
  return (
    <div className="redesigned-home">
      <Navigation />
      
      <header className="hero" style={{ minHeight: "45vh", paddingTop: "140px", paddingBottom: "4rem" }}>
        <div className="hero-bg"></div>
        <div className="hero-grain"></div>
        <div className="container">
          <p className="overline" style={{ textAlign: "center", color: "var(--gold)" }}>Clinical Expertise</p>
          <h1 style={{ textAlign: "center", fontSize: "3.5rem", lineHeight: 1.2 }}>Common <em style={{ color: "var(--gold)" }}>Sexual Conditions</em></h1>
          <p style={{ textAlign: "center", maxWidth: "700px", margin: "1.5rem auto", color: "rgba(255,255,255,0.6)", fontSize: "1.1rem" }}>
            Expert diagnosis and precision homeopathic treatment for a wide range of sexual and reproductive health concerns. 
            Root-cause based healing since 1926.
          </p>
        </div>
      </header>

      <section className="section" style={{ background: "var(--navy)", padding: "5rem 0" }}>
        <div className="container">
          <h2 className="section-title">Primary Conditions</h2>
          <div className="media-grid" style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '2rem', marginTop: '3rem' }}>
            {services.map((service) => (
              <ServiceCard key={service.slug} service={service} />
            ))}
          </div>

          <div className="bg-glass" style={{ marginTop: "5rem", padding: "4rem", borderRadius: "24px", border: "1px solid rgba(212,168,83,0.15)" }}>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1.5fr", gap: "4rem" }} className="media-grid">
              <div>
                <h2 style={{ fontSize: "2rem", marginBottom: "1.5rem", fontFamily: "var(--font-serif)" }}>Other Conditions Treated</h2>
                <p style={{ color: "rgba(255,255,255,0.6)", lineHeight: 1.7, marginBottom: "2rem" }}>
                  Dr. Rajesh Manghnani Burlington Clinic provides comprehensive, holistic care for all sexual health needs. 
                  Every treatment plan is fully customized to your unique medical history.
                </p>
                <a href="tel:+919893880001" className="btn-primary">Book Consultation</a>
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
                {otherDiseases.map((d) => (
                  <div key={d} style={{ display: "flex", alignItems: "center", gap: "0.75rem", padding: "0.5rem 0", color: "rgba(255,255,255,0.8)" }}>
                    <span style={{ color: "var(--gold2)", fontWeight: "bold" }}>✓</span>
                    <span style={{ fontSize: "1rem" }}>{d}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="container cta-inner">
          <h2>Don't Suffer in Silence</h2>
          <p>Confidentiality is our promise. Speak directly with Dr. Rajesh Manghnani for a natural and effective recovery path.</p>
          <div className="cta-buttons">
            <a href="tel:+919893880001" className="btn-white">📞 Call Now</a>
            <a href="https://bestsexologistdoctor.com/index.php/payment/" className="btn-ghost">Online Booking</a>
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
