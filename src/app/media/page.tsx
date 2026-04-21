import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Media & Awards | Dr. Rajesh Manghnani Burlington Clinic",
  description: "Explore news releases, awards, and media coverage of Dr. Rajesh Manghnani and Burlington Clinic's legacy in sexual health.",
};

export default function MediaPage() {
  const newsItems = [
    { title: "Dr. Rajesh Maghnani awarded by World Book of Records", source: "Press Release", date: "2023" },
    { title: "The Legacy of Burlington Clinic: 97 Years of Trust", source: "Medical Journal", date: "2023" },
    { title: "Online Consultation: Bridging the gap in Sexual Health", source: "Health Digest", date: "2022" },
    { title: "Importance of Confidentiality in Men's Health", source: "Times Health", date: "2022" },
  ];

  return (
    <div className="pb-20">
      <section className="hero" style={{ minHeight: "250px", display: "flex", alignItems: "center" }}>
        <div className="container-xl">
          <h1 className="hero-title">In The <span>Media</span></h1>
          <p className="hero-sub">Latest news, press releases and awards of Dr. Rajesh Maghnani &amp; Burlington Clinic.</p>
        </div>
      </section>

      <section className="section">
        <div className="container-xl">
          <div className="grid-2">
            {newsItems.map((item, i) => (
              <div key={i} className="trust-card" style={{ textAlign: "left", padding: "2rem" }}>
                <div style={{ color: "#1E40AF", fontSize: "0.8rem", fontWeight: 700, textTransform: "uppercase", marginBottom: "0.5rem" }}>
                  {item.source} • {item.date}
                </div>
                <h3 className="text-heading" style={{ fontSize: "1.2rem", marginBottom: "1rem" }}>{item.title}</h3>
                <p style={{ color: "#64748B", fontSize: "0.9rem", lineHeight: 1.6 }}>
                  Dr. Rajesh Maghnani has been featured across various medical journals and health publications for his 
                  pioneering work in natural sexual health treatments and his commitment to patient privacy.
                </p>
                <div className="mt-4">
                  <span style={{ color: "#0F172A", fontWeight: 600, fontSize: "0.85rem", cursor: "pointer", borderBottom: "1px solid #1E40AF" }}>
                    Read Full Article
                  </span>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <h2 className="section-title center">Video Gallery</h2>
            <div className="grid-3 mt-10">
              {[1, 2, 3].map((v) => (
                <div key={v} style={{ aspectRatio: "16/9", background: "#f3f4f6", borderRadius: 12, display: "flex", alignItems: "center", justifyContent: "center", border: "1px solid #e5e7eb" }}>
                  <div style={{ width: 60, height: 60, borderRadius: "50%", background: "#1E40AF", display: "flex", alignItems: "center", justifyContent: "center", color: "#fff" }}>
                    ▶
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
