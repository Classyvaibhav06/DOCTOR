export default function ContactPage() {
  const locations = [
    {
      name: "Bhopal (Main Branch)",
      address: "Bhopal Branch, Madhya Pradesh – 462001",
      phone: "+91 99366 04444",
      email: "bhopal@drskjain.com",
      map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3666.22!2d77.4!3d23.25!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjPCsDE1JzAwLjAiTiA3N8KwMjQnMDAuMCJF!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin"
    },
    {
      name: "Mumbai Branch",
      address: "Western Suburbs, Mumbai, Maharashtra",
      phone: "+91 96950 14444",
      email: "mumbai@drskjain.com",
      map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15082.93!2d72.8!3d19.0!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTnCsDAwJzAwLjAiTiA3MsKwNDgnMDAuMCJF!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin"
    }
  ];

  return (
    <div className="pb-20">
      <section className="hero" style={{ minHeight: "250px", display: "flex", alignItems: "center" }}>
        <div className="container-xl">
          <h1 className="hero-title">Contact <span>Us</span></h1>
          <p className="hero-sub">Visit us at our clinics or reach out via phone, email or WhatsApp.</p>
        </div>
      </section>

      <section className="section">
        <div className="container-xl">
          <div className="grid-2">
            {/* Contact Details */}
            <div>
              <h2 className="section-title">Get In Touch</h2>
              <div className="mt-8 flex flex-col gap-6">
                {locations.map((loc) => (
                  <div key={loc.name} className="contact-card" style={{ flexDirection: "column", padding: "2rem" }}>
                    <h3 className="text-heading" style={{ fontSize: "1.2rem", marginBottom: "1rem" }}>{loc.name}</h3>
                    <div style={{ display: "flex", flexDirection: "column", gap: "0.8rem" }}>
                      <div style={{ display: "flex", gap: "1rem", fontSize: "0.95rem" }}>
                        <span style={{ color: "#dc2626" }}>📍</span>
                        <span style={{ color: "#4b5563" }}>{loc.address}</span>
                      </div>
                      <div style={{ display: "flex", gap: "1rem", fontSize: "0.95rem" }}>
                        <span style={{ color: "#dc2626" }}>📞</span>
                        <span style={{ color: "#0a1628", fontWeight: 700 }}>{loc.phone}</span>
                      </div>
                      <div style={{ display: "flex", gap: "1rem", fontSize: "0.95rem" }}>
                        <span style={{ color: "#dc2626" }}>✉️</span>
                        <span style={{ color: "#4b5563" }}>{loc.email}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Form */}
            <div style={{ background: "#fff", borderRadius: 16, border: "1px solid #e5e7eb", padding: "2rem", boxShadow: "0 8px 30px rgba(0,0,0,0.05)" }}>
              <h3 className="text-heading" style={{ fontSize: "1.4rem", marginBottom: "1.5rem" }}>Send a Message</h3>
              <form className="flex flex-col gap-4">
                <input type="text" placeholder="Full Name" style={{ width: "100%", padding: "0.85rem", borderRadius: 8, border: "1px solid #d1d5db" }} />
                <input type="tel" placeholder="Phone Number" style={{ width: "100%", padding: "0.85rem", borderRadius: 8, border: "1px solid #d1d5db" }} />
                <input type="email" placeholder="Email Address" style={{ width: "100%", padding: "0.85rem", borderRadius: 8, border: "1px solid #d1d5db" }} />
                <textarea rows={5} placeholder="How can we help you?" style={{ width: "100%", padding: "0.85rem", borderRadius: 8, border: "1px solid #d1d5db" }}></textarea>
                <button type="submit" className="btn-book" style={{ padding: "1rem" }}>Submit Message</button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="section" style={{ background: "#f3f4f6" }}>
        <div className="container-xl">
          <h2 className="section-title center">Find Us On Map</h2>
          <div className="grid-2 mt-10">
            {locations.map((loc) => (
              <div key={loc.name} style={{ borderRadius: 16, overflow: "hidden", border: "1px solid #e5e7eb", height: 400 }}>
                <iframe 
                  src={loc.map} 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  loading="lazy"
                ></iframe>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
