export default function AskOnlinePage() {
  return (
    <div className="pb-20">
      <section className="hero" style={{ minHeight: "250px", display: "flex", alignItems: "center" }}>
        <div className="container-xl">
          <h1 className="hero-title">Ask <span>Online</span></h1>
          <p className="hero-sub">Get expert guidance from the privacy of your home. Consult Dr. S.K. Jain online.</p>
        </div>
      </section>

      <section className="section">
        <div className="container-xl">
          <div style={{ maxWidth: 800, margin: "0 auto", background: "#fff", borderRadius: 16, border: "1px solid #e5e7eb", boxShadow: "0 10px 40px rgba(0,0,0,0.08)", padding: "2.5rem" }}>
            <h2 className="text-heading" style={{ fontSize: "1.8rem", textAlign: "center", marginBottom: "2rem" }}>Confidential Inquiry Form</h2>
            
            <form className="grid-2" style={{ gap: "1.5rem" }}>
              <div style={{ gridColumn: "span 1" }}>
                <label style={{ display: "block", fontSize: "0.85rem", fontWeight: 600, marginBottom: "0.5rem" }}>Your Name (Optional)</label>
                <input type="text" placeholder="Enter your name" style={{ width: "100%", padding: "0.75rem", borderRadius: 8, border: "1px solid #d1d5db" }} />
              </div>
              <div style={{ gridColumn: "span 1" }}>
                <label style={{ display: "block", fontSize: "0.85rem", fontWeight: 600, marginBottom: "0.5rem" }}>Phone Number</label>
                <input type="tel" placeholder="+91 00000 00000" style={{ width: "100%", padding: "0.75rem", borderRadius: 8, border: "1px solid #d1d5db" }} />
              </div>
              <div style={{ gridColumn: "span 2" }}>
                <label style={{ display: "block", fontSize: "0.85rem", fontWeight: 600, marginBottom: "0.5rem" }}>Your Concern</label>
                <select style={{ width: "100%", padding: "0.75rem", borderRadius: 8, border: "1px solid #d1d5db", background: "#fff" }}>
                  <option>Erectile Dysfunction</option>
                  <option>Premature Ejaculation</option>
                  <option>Low Libido</option>
                  <option>Infertility</option>
                  <option>Other Concerns</option>
                </select>
              </div>
              <div style={{ gridColumn: "span 2" }}>
                <label style={{ display: "block", fontSize: "0.85rem", fontWeight: 600, marginBottom: "0.5rem" }}>Describe Your Symptoms</label>
                <textarea rows={4} placeholder="Please describe briefly..." style={{ width: "100%", padding: "0.75rem", borderRadius: 8, border: "1px solid #d1d5db" }}></textarea>
              </div>
              <div style={{ gridColumn: "span 2", textAlign: "center", marginTop: "1rem" }}>
                <button type="submit" className="btn-book" style={{ width: "100%", padding: "1rem" }}>Submit Inquiry</button>
                <p style={{ marginTop: "1rem", fontSize: "0.75rem", color: "#6b7280" }}>Your information is strictly confidential and protected by medical privacy protocols.</p>
              </div>
            </form>
          </div>

          <div className="grid-3 mt-12">
            {[
              { title: "Video Consultation", desc: "Consult via high-quality video call." },
              { title: "Audio Consultation", desc: "Phone calls if you prefer audio only." },
              { title: "Chat / Email", desc: "Brief queries via secure messaging." },
            ].map((s) => (
              <div key={s.title} className="trust-card">
                <h3 className="text-heading" style={{ fontSize: "1.1rem", marginBottom: "0.5rem" }}>{s.title}</h3>
                <p style={{ fontSize: "0.85rem", color: "#6b7280" }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
