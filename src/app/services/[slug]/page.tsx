import { getServiceBySlug, services } from "@/lib/services";
import { notFound } from "next/navigation";
import { Navigation } from "@/components/Navigation";

export async function generateStaticParams() {
  return services.map((service) => ({
    slug: service.slug,
  }));
}

export default async function ServiceDetail({ params }: { params: { slug: string } }) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    notFound();
  }

  return (
    <div>
      <Navigation />
      
      <header className="hero" style={{ minHeight: "45vh", paddingTop: "120px", paddingBottom: "3rem", position: "relative", background: "#0a0a0a" }}>
        <div className="hero-slider" style={{ position: "absolute", inset: 0, zIndex: 1 }}>
          <div className="hero-slide active">
            <img src={service.image} alt={service.title} style={{ width: "100%", height: "100%", objectFit: "cover", filter: "brightness(0.35)" }} />
          </div>
        </div>
        <div className="hero-overlay" />
        <div className="container" style={{ position: "relative", zIndex: 3, display: "grid", gridTemplateColumns: "1.2fr 1fr", gap: "3rem", alignItems: "center" }}>
          <div>
            <div className="hero-badge mb-4" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.6rem', padding: '0.4rem 1.2rem', background: 'rgba(197,160,89,0.15)', border: '1px solid rgba(197,160,89,0.4)', borderRadius: '50px', fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', color: 'var(--gold-light)' }}>
               <span className="hero-badge-dot" style={{ width: '6px', height: '6px', background: 'var(--gold)', borderRadius: '50%' }}></span>
               Clinical Treatment Pathway
            </div>
            <h1 style={{ fontSize: "clamp(2.5rem, 5vw, 3.5rem)", color: "white", marginTop: "1rem" }}>
               {service.title} <em style={{ color: "var(--gold)" }}>Advocacy & Care</em>
            </h1>
            <p className="hero-sub" style={{ maxWidth: "600px", color: "rgba(255,255,255,0.7)", marginTop: "1.5rem", fontSize: "1.05rem", lineHeight: "1.7" }}>
               {service.shortDescription}
            </p>
          </div>
          <div style={{ borderRadius: "24px", overflow: "hidden", border: "1px solid rgba(255,255,255,0.1)", height: "350px", position: "relative" }}>
              <img 
                src={service.image} 
                alt={service.title} 
                style={{ width: "100%", height: "100%", objectFit: "cover", opacity: 0.9 }} 
              />
             <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(0,0,0,0.8), transparent)" }}></div>
          </div>
        </div>
      </header>

      <section className="section" style={{ background: "var(--white)", padding: "5rem 0" }}>
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "1.5fr 1fr", gap: "4rem" }} className="media-grid">
            {/* Left Content */}
            <div>
              <h2 className="section-title" style={{ textAlign: "left", fontSize: "2.2rem", color: "var(--text)", marginBottom: "1.5rem" }}>Clinical Overview</h2>
              <p style={{ fontSize: "1.1rem", color: "var(--muted)", lineHeight: 1.8, marginBottom: "3rem" }}>
                {service.overview}
              </p>

              <div style={{ padding: "2.5rem", borderRadius: "18px", marginBottom: "3rem", background: "var(--cream)", border: "1px solid var(--border)" }}>
                <h3 style={{ color: "var(--gold2)", fontSize: "1.5rem", marginBottom: "1.5rem", fontFamily: "'Playfair Display', serif" }}>Identifying Symptoms</h3>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
                  {service.symptoms.map((s, i) => (
                    <div key={i} style={{ display: "flex", gap: "0.75rem", alignItems: "flex-start", color: "var(--text)", fontSize: "0.95rem" }}>
                      <span style={{ color: "var(--gold)", fontSize: "1.2rem", lineHeight: 1 }}>•</span>
                      <span style={{ lineHeight: 1.5 }}>{s}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div style={{ borderRadius: "24px", overflow: "hidden", height: "400px", position: "relative", marginBottom: "4rem" }}>
                  <img 
                     src={service.image} 
                     alt="Clinical Care" 
                     style={{ width: "100%", height: "100%", objectFit: "cover" }} 
                  />
                 <div style={{ position: "absolute", inset: 0, background: "rgba(10, 22, 40, 0.4)", display: "flex", alignItems: "center", justifyContent: "center", padding: "3rem" }}>
                    <div style={{ textAlign: "center", maxWidth: "500px", background: "rgba(255,255,255,0.9)", padding: "2rem", borderRadius: "16px", backdropFilter: "blur(10px)" }}>
                       <h3 style={{ fontSize: "2rem", color: "var(--text)", marginBottom: "1rem", fontFamily: "'Playfair Display', serif" }}>Evidence-Based <em style={{color: 'var(--gold)'}}>Results</em></h3>
                       <p style={{ color: "var(--muted)", fontSize: "0.95rem", lineHeight: 1.6 }}>Our treatments for {service.title} are backed by clinical studies and over 23 years of specialized practice experience.</p>
                    </div>
                 </div>
              </div>

              <div>
                <h3 className="section-title" style={{ textAlign: "left", fontSize: "2rem", color: "var(--text)", marginBottom: "2rem" }}>The Manghnani Protocol</h3>
                <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
                  {service.treatmentApproach.map((step, i) => (
                    <div key={i} style={{ display: "flex", gap: "1.5rem", padding: "1.8rem", borderRadius: "14px", border: "1px solid var(--border)", background: "var(--white)", boxShadow: "var(--shadow)" }}>
                      <div style={{ width: 44, height: 44, borderRadius: "50%", background: "var(--cream)", border: "1px solid var(--gold)", color: "var(--gold2)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, fontWeight: 700, fontSize: "1.1rem", fontFamily: "'Playfair Display', serif" }}>
                        {i + 1}
                      </div>
                      <div>
                        <h4 style={{ color: "var(--text)", marginBottom: "0.4rem", fontWeight: "700", fontSize: "1.1rem" }}>Phase {i + 1}</h4>
                        <p style={{ color: "var(--muted)", fontSize: "0.95rem", lineHeight: 1.6 }}>{step}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Sidebar */}
            <div style={{ position: "sticky", top: "100px", height: "max-content" }}>
              <div style={{ border: "1px solid var(--border)", padding: "2.5rem", borderRadius: "18px", background: "var(--cream2)", boxShadow: "var(--shadow)" }}>
                <h3 style={{ color: "var(--text)", fontSize: "1.6rem", marginBottom: "1rem", fontFamily: "'Playfair Display', serif" }}>Private Consultation</h3>
                <p style={{ color: "var(--muted)", fontSize: "0.95rem", marginBottom: "2rem", lineHeight: "1.7" }}>
                  Consult Dr. Rajesh Manghnani with 100% confidentiality regarding {service.title}. We prioritize your privacy and holistic recovery.
                </p>
                <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                  <a href="tel:+919893880001" className="btn-primary" style={{ textAlign: "center", width: "100%" }}>Book Appointment</a>
                  <a href="https://bestsexologistdoctor.com/index.php/payment/" className="btn-secondary" style={{ textAlign: "center", width: "100%" }}>Ask Online Consultation</a>
                </div>
              </div>

              <div style={{ marginTop: "2.5rem", padding: "2.5rem", borderRadius: "18px", border: "1px solid var(--border)", background: "var(--white)" }}>
                 <h4 style={{ color: "var(--gold2)", marginBottom: "1.5rem", fontSize: "1.2rem", fontFamily: "'Playfair Display', serif", fontWeight: 700 }}>Clinic Excellence</h4>
                 <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "1rem", fontSize: "0.9rem", color: "var(--text)", fontWeight: 500 }}>
                    <li style={{display: "flex", alignItems: "center", gap: "10px"}}><span style={{color:"var(--gold)", fontSize: "1.2rem"}}>✓</span> 23+ Year Legacy of Trust</li>
                    <li style={{display: "flex", alignItems: "center", gap: "10px"}}><span style={{color:"var(--gold)", fontSize: "1.2rem"}}>✓</span> Certified German Homeopathic Care</li>
                    <li style={{display: "flex", alignItems: "center", gap: "10px"}}><span style={{color:"var(--gold)", fontSize: "1.2rem"}}>✓</span> Discreet, One-on-One Consultations</li>
                    <li style={{display: "flex", alignItems: "center", gap: "10px"}}><span style={{color:"var(--gold)", fontSize: "1.2rem"}}>✓</span> Holistic, Non-Surgical Solutions</li>
                 </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer style={{ background: '#0a0a08', padding: '4rem 0', color: 'rgba(255,255,255,0.4)' }}>
        <div className="container" style={{ textAlign: "center" }}>
          <div style={{ marginBottom: "1.5rem", display: "inline-block" }}>
            <img src="/images/logo.png" alt="Dr. G.D. Memorial Clinic" style={{ height: "32px", opacity: 0.8 }} />
          </div>
          <p style={{ color: "rgba(255,255,255,0.4)", fontSize: "0.85rem", marginBottom: "0.5rem" }}>© 2026 Dr. G.D. Memorial Clinic. Dedicated to Ethical Sexual Wellness.</p>
          <p style={{ fontSize: '0.7rem' }}>ISO Certified · World Book of Records · Expert Care Since 2004</p>
        </div>
      </footer>
    </div>
  );
}
