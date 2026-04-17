import { Navigation } from "@/components/Navigation";

export default function ContactPage() {
  const locations = [
    {
      name: "Bhopal (Main Branch)",
      address: "47, Sector C, Kasturba Nagar, Near Chetak Bridge, Bhopal – 462023",
      phone: "+91 98938 80001",
      email: "info@bestsexologistdoctor.com",
      map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3665.8117967965415!2d77.43821677532057!3d23.23229707902492!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x397c37e912d09cf3%3A0x55bf79788220dcae!2sDR%20RAJESH'S%20SEXOLOGY%20CLINIC-Best%20Sexologist%20Doctor%20In%20Bhopal!5e0!3m2!1sen!2sin!4v1713372605481!5m2!1sen!2sin"
    },
    {
      name: "Arera Colony Branch",
      address: "Shop No 05, GM Tower, 10 Number Market, Arera Colony, Bhopal – 462016",
      phone: "+91 98938 80001",
      email: "info@bestsexologistdoctor.com",
      map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3666.22!2d77.4!3d23.25!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjPCsDE1JzAwLjAiTiA3N8KwMjQnMDAuMCJF!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin"
    }
  ];

  return (
    <div className="redesigned-home">
      <Navigation />
      
      <header className="hero" style={{ minHeight: "45vh", paddingTop: "140px", paddingBottom: "4rem" }}>
        <div className="hero-bg"></div>
        <div className="hero-grain"></div>
        <div className="container">
          <p className="overline" style={{ textAlign: "center", color: "var(--gold)" }}>Connect With Us</p>
          <h1 style={{ textAlign: "center", fontSize: "3.5rem", lineHeight: 1.2 }}>Contact <em style={{ color: "var(--gold)" }}>Burlington Clinic</em></h1>
          <p style={{ textAlign: "center", maxWidth: "700px", margin: "1.5rem auto", color: "rgba(255,255,255,0.6)", fontSize: "1.1rem" }}>
            Reach out for a confidential consultation at one of our physical branches or schedule a secure 
            online video call with Dr. Rajesh Manghnani.
          </p>
        </div>
      </header>

      <section className="section" style={{ background: "var(--navy)", padding: "5rem 0" }}>
        <div className="container">
          <div className="media-grid" style={{ gridTemplateColumns: "1.2fr 1.5fr", gap: "4rem" }}>
            {/* Contact Details */}
            <div>
              <h2 style={{ fontSize: "2.5rem", marginBottom: "3rem", fontFamily: "var(--font-serif)" }}>Our <em style={{color: 'var(--gold)'}}>Locations</em></h2>
              <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
                {locations.map((loc) => (
                  <div key={loc.name} className="bg-glass" style={{ padding: "2.5rem", borderRadius: "16px", border: "1px solid rgba(255,255,255,0.05)" }}>
                    <h3 style={{ color: "var(--gold2)", fontSize: "1.25rem", marginBottom: "1.5rem" }}>{loc.name}</h3>
                    <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                      <div style={{ display: "flex", gap: "1rem", fontSize: "0.95rem", color: "rgba(255,255,255,0.7)" }}>
                        <span style={{ color: "var(--gold)" }}>📍</span>
                        <span>{loc.address}</span>
                      </div>
                      <div style={{ display: "flex", gap: "1rem", fontSize: "0.95rem", color: "rgba(255,255,255,0.7)" }}>
                        <span style={{ color: "var(--gold)" }}>📞</span>
                        <span style={{ color: "#fff", fontWeight: 700 }}>{loc.phone}</span>
                      </div>
                      <div style={{ display: "flex", gap: "1rem", fontSize: "0.95rem", color: "rgba(255,255,255,0.7)" }}>
                        <span style={{ color: "var(--gold)" }}>✉️</span>
                        <span>{loc.email}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Form */}
            <div className="bg-glass" style={{ padding: "4rem", borderRadius: "24px", border: "1px solid rgba(212,168,83,0.15)" }}>
              <h3 style={{ fontSize: "2rem", marginBottom: "2rem", fontFamily: "var(--font-serif)" }}>Request a <em style={{color: 'var(--gold)'}}>Callback</em></h3>
              <form style={{ display: "grid", gap: "1.5rem" }}>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.5rem" }}>
                  <div>
                    <label style={{ display: "block", fontSize: "0.75rem", textTransform: 'uppercase', letterSpacing: '0.1em', fontWeight: 600, marginBottom: '0.5rem', color: 'var(--gold)' }}>Full Name</label>
                    <input type="text" placeholder="Name" style={{ width: "100%", padding: "1rem", borderRadius: "8px", background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', color: '#fff' }} />
                  </div>
                  <div>
                    <label style={{ display: "block", fontSize: "0.75rem", textTransform: 'uppercase', letterSpacing: '0.1em', fontWeight: 600, marginBottom: '0.5rem', color: 'var(--gold)' }}>Phone Number</label>
                    <input type="tel" placeholder="Mobile" style={{ width: "100%", padding: "1rem", borderRadius: "8px", background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', color: '#fff' }} />
                  </div>
                </div>
                <div>
                   <label style={{ display: "block", fontSize: "0.75rem", textTransform: 'uppercase', letterSpacing: '0.1em', fontWeight: 600, marginBottom: '0.5rem', color: 'var(--gold)' }}>Subject</label>
                   <input type="text" placeholder="e.g. Online Consultation" style={{ width: "100%", padding: "1rem", borderRadius: "8px", background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', color: '#fff' }} />
                </div>
                <div>
                  <label style={{ display: "block", fontSize: "0.75rem", textTransform: 'uppercase', letterSpacing: '0.1em', fontWeight: 600, marginBottom: '0.5rem', color: 'var(--gold)' }}>Message</label>
                  <textarea rows={5} placeholder="How can we help you?" style={{ width: "100%", padding: "1rem", borderRadius: "8px", background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', color: '#fff' }}></textarea>
                </div>
                <button type="submit" className="btn-primary" style={{ width: "100%", padding: "1.2rem", fontSize: '1rem', fontWeight: 700 }}>Send Message</button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="section" style={{ background: "rgba(255,255,255,0.02)", padding: '5rem 0' }}>
        <div className="container">
          <h2 className="section-title">Satellite View</h2>
          <div className="media-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '2rem', marginTop: "3rem" }}>
            {locations.map((loc) => (
              <div key={loc.name} style={{ borderRadius: "24px", overflow: "hidden", border: "1px solid rgba(255,255,255,0.1)", height: "450px" }}>
                <iframe 
                  src={loc.map} 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0, filter: 'grayscale(1) invert(0.9) contrast(1.2)' }} 
                  loading="lazy"
                ></iframe>
              </div>
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
