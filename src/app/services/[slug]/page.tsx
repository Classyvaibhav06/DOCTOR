import { getServiceBySlug } from "@/lib/services";
import { notFound } from "next/navigation";
import { Navigation } from "@/components/Navigation";

export default async function ServiceDetail({ params }: { params: { slug: string } }) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    notFound();
  }

  return (
    <div className="redesigned-home">
      <Navigation />
      
      <header className="hero" style={{ minHeight: "45vh", paddingTop: "120px", paddingBottom: "3rem" }}>
        <div className="hero-bg"></div>
        <div className="hero-grain"></div>
        <div className="container">
          <div className="hero-badge mb-4">
             <span className="hero-badge-dot"></span>
             Clinical Treatment Pathway
          </div>
          <h1 style={{ fontSize: "clamp(2.5rem, 5vw, 3.5rem)" }}>
             {service.title} <em style={{ color: "var(--gold)" }}>Advocacy & Care</em>
          </h1>
          <p className="hero-sub" style={{ maxWidth: "600px" }}>
             {service.shortDescription}
          </p>
        </div>
      </header>

      <section className="section" style={{ background: "var(--navy)", padding: "5rem 0" }}>
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "1.5fr 1fr", gap: "4rem" }} className="media-grid">
            {/* Left Content */}
            <div>
              <h2 className="section-title" style={{ textAlign: "left", fontSize: "2rem" }}>Clinical Overview</h2>
              <p style={{ fontSize: "1.1rem", color: "rgba(255,255,255,0.7)", lineHeight: 1.8, marginBottom: "3rem" }}>
                {service.overview}
              </p>

              <div className="bg-glass" style={{ padding: "2.5rem", borderRadius: "15px", marginBottom: "3rem" }}>
                <h3 style={{ color: "var(--gold)", fontSize: "1.4rem", marginBottom: "1.5rem", fontFamily: "var(--font-serif)" }}>Identifying Symptoms</h3>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
                  {service.symptoms.map((s, i) => (
                    <div key={i} style={{ display: "flex", gap: "0.75rem", alignItems: "center", color: "rgba(255,255,255,0.8)", fontSize: "0.95rem" }}>
                      <span style={{ color: "var(--red)", fontSize: "1.2rem" }}>•</span>
                      {s}
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="section-title" style={{ textAlign: "left", fontSize: "1.8rem", marginBottom: "2rem" }}>The Manghnani Protocol</h3>
                <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
                  {service.treatmentApproach.map((step, i) => (
                    <div key={i} className="bg-glass-light" style={{ display: "flex", gap: "1.5rem", padding: "1.5rem", borderRadius: "10px", border: "1px solid rgba(255,255,255,0.05)" }}>
                      <div style={{ width: 40, height: 40, borderRadius: "50%", background: "var(--red)", color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, fontWeight: 700, fontSize: "0.9rem" }}>
                        {i + 1}
                      </div>
                      <div>
                        <h4 style={{ color: "#fff", marginBottom: "0.25rem", fontWeight: "600" }}>Phase {i + 1}</h4>
                        <p style={{ color: "rgba(255,255,255,0.5)", fontSize: "0.9rem" }}>{step}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Sidebar */}
            <div style={{ position: "sticky", top: "100px" }}>
              <div className="bg-glass" style={{ border: "1px solid var(--gold-soft)", padding: "2.5rem", borderRadius: "15px" }}>
                <h3 style={{ color: "#fff", fontSize: "1.5rem", marginBottom: "1rem" }}>Private Consultation</h3>
                <p style={{ color: "rgba(255,255,255,0.6)", fontSize: "0.9rem", marginBottom: "2rem", lineHeight: "1.6" }}>
                  Consult Dr. Rajesh Manghnani with 100% confidentiality regarding {service.title}. We prioritize your privacy and holistic recovery.
                </p>
                <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                  <a href="tel:+919893880001" className="btn-primary" style={{ textAlign: "center", width: "100%" }}>Book Appointment</a>
                  <a href="https://bestsexologistdoctor.com/index.php/payment/" className="btn-outline" style={{ textAlign: "center", width: "100%" }}>Ask Online Consultation</a>
                </div>
              </div>

              <div className="bg-glass" style={{ marginTop: "2rem", padding: "2rem", borderRadius: "15px" }}>
                 <h4 style={{ color: "var(--gold)", marginBottom: "1rem", fontSize: "1.1rem" }}>Clinic Excellence</h4>
                 <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "0.75rem", fontSize: "0.85rem", color: "rgba(255,255,255,0.5)" }}>
                    <li style={{display: "flex", alignItems: "center", gap: "8px"}}><span style={{color:"var(--gold)"}}>✓</span> 98 Year Legacy of Trust</li>
                    <li style={{display: "flex", alignItems: "center", gap: "8px"}}><span style={{color:"var(--gold)"}}>✓</span> Certified German Homeopathic Care</li>
                    <li style={{display: "flex", alignItems: "center", gap: "8px"}}><span style={{color:"var(--gold)"}}>✓</span> Discreet, One-on-One Consultations</li>
                    <li style={{display: "flex", alignItems: "center", gap: "8px"}}><span style={{color:"var(--gold)"}}>✓</span> Holistic, Non-Surgical Solutions</li>
                 </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer style={{ background: "#050810", borderTop: "1px solid rgba(255,255,255,0.05)", padding: "4rem 0" }}>
        <div className="container" style={{ textAlign: "center" }}>
          <div className="nav-logo" style={{ marginBottom: "1.5rem", display: "inline-block" }}>Dr. G.D. Memorial Clinic</div>
          <p style={{ color: "rgba(255,255,255,0.4)", fontSize: "0.85rem" }}>© 2026 Dr. G.D. Memorial Clinic. Dedicated to Ethical Sexual Wellness.</p>
        </div>
      </footer>
    </div>
  );
}
