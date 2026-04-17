import { Navigation } from "@/components/Navigation";

export default function AskOnlinePage() {
  return (
    <div className="redesigned-home">
      <Navigation />
      
      <header className="hero" style={{ minHeight: "45vh", paddingTop: "140px", paddingBottom: "4rem" }}>
        <div className="hero-bg"></div>
        <div className="hero-grain"></div>
        <div className="container" style={{maxWidth: '800px'}}>
          <p className="overline" style={{ textAlign: "center", color: "var(--gold)" }}>Private & Confidential</p>
          <h1 style={{ textAlign: "center", fontSize: "3.5rem", lineHeight: 1.2 }}>Ask <em style={{ color: "var(--gold)" }}>Online</em></h1>
          <p style={{ textAlign: "center", margin: "1.5rem auto", color: "rgba(255,255,255,0.6)", fontSize: "1.1rem" }}>
            Get expert guidance from the privacy of your home. Speak directly with Dr. Rajesh Manghnani 
            through our secure, HIPAA-compliant digital pathways.
          </p>
        </div>
      </header>

      <section className="section" style={{ background: "var(--navy)", padding: "5rem 0" }}>
        <div className="container">
          <div className="media-grid" style={{ gridTemplateColumns: "1.2fr 1.5fr", gap: "4rem", alignItems: 'start' }}>
             {/* Info Side */}
             <div>
                <h2 style={{ fontSize: "2.5rem", marginBottom: "2rem", fontFamily: "var(--font-serif)" }}>Digital <em style={{color: 'var(--gold)'}}>Pathways</em></h2>
                <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
                   {[
                     { title: "Secure Video Call", desc: "Face-to-face clinical assessment through encrypted high-definition video." },
                     { title: "Telephonic Consultation", desc: "Direct phone access for those who prefer audio-only conversations." },
                     { title: "Discreet Callback", desc: "Submit your basic details and we will call you back at your preferred convenience." },
                   ].map((item, i) => (
                     <div key={i} className="bg-glass-light" style={{ padding: "1.5rem", borderRadius: "16px", border: "1px solid rgba(255,255,255,0.05)" }}>
                        <h4 style={{ color: "var(--gold2)", marginBottom: "0.5rem" }}>{item.title}</h4>
                        <p style={{ color: "rgba(255,255,255,0.6)", fontSize: "0.9rem" }}>{item.desc}</p>
                     </div>
                   ))}
                </div>
                
                <div style={{ marginTop: "3rem", padding: "2rem", background: "rgba(212,168,83,0.05)", borderRadius: "16px", border: "1px solid rgba(212,168,83,0.2)" }}>
                   <p style={{ fontSize: "0.9rem", color: "rgba(255,255,255,0.8)", marginBottom: "0" }}>
                     <strong>Privacy Guarantee:</strong> All digital communications are encrypted. We never share your contact details or symptoms with third-party networks.
                   </p>
                </div>
             </div>

             {/* Form Side */}
             <div className="bg-glass" style={{ padding: "3.5rem", borderRadius: "24px", border: "1px solid rgba(212,168,83,0.15)" }}>
                <h3 style={{ fontSize: "1.8rem", marginBottom: "2rem" }}>Confidential Inquiry</h3>
                <form style={{ display: "grid", gap: "1.5rem" }}>
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.5rem" }}>
                    <div>
                      <label style={{ display: "block", fontSize: "0.75rem", textTransform: 'uppercase', letterSpacing: '0.1em', fontWeight: 600, marginBottom: "0.5rem", color: 'var(--gold)' }}>Name</label>
                      <input type="text" placeholder="Optional" style={{ width: "100%", padding: "1rem", borderRadius: "8px", background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', color: '#fff' }} />
                    </div>
                    <div>
                      <label style={{ display: "block", fontSize: "0.75rem", textTransform: 'uppercase', letterSpacing: '0.1em', fontWeight: 600, marginBottom: "0.5rem", color: 'var(--gold)' }}>Phone</label>
                      <input type="tel" placeholder="Required" style={{ width: "100%", padding: "1rem", borderRadius: "8px", background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', color: '#fff' }} />
                    </div>
                  </div>
                  <div>
                    <label style={{ display: "block", fontSize: "0.75rem", textTransform: 'uppercase', letterSpacing: '0.1em', fontWeight: 600, marginBottom: "0.5rem", color: 'var(--gold)' }}>Health Category</label>
                    <select style={{ width: "100%", padding: "1rem", borderRadius: "8px", background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', color: '#fff' }}>
                      <option>Erectile Dysfunction</option>
                      <option>Premature Ejaculation</option>
                      <option>Low Libido</option>
                      <option>Fertility Issues</option>
                      <option>Other / General Query</option>
                    </select>
                  </div>
                  <div>
                    <label style={{ display: "block", fontSize: "0.75rem", textTransform: 'uppercase', letterSpacing: '0.1em', fontWeight: 600, marginBottom: "0.5rem", color: 'var(--gold)' }}>Describe Briefly</label>
                    <textarea rows={4} placeholder="Your concerns..." style={{ width: "100%", padding: "1rem", borderRadius: "8px", background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', color: '#fff' }}></textarea>
                  </div>
                  <button type="submit" className="btn-primary" style={{ width: "100%", padding: "1.2rem", fontSize: '1rem', fontWeight: 700 }}>Request Secure Consultation</button>
                  <p style={{ textAlign: "center", fontSize: "0.75rem", color: "rgba(255,255,255,0.4)" }}>Safe & Discreet Process Guarantee</p>
                </form>
             </div>
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
