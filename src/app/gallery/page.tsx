import Image from "next/image";

export default function GalleryPage() {
  const photos = [
    { src: "/images/clinic-hero-bg.png", alt: "Burlington Clinic Exterior" },
    { src: "/images/doctor-portrait.png", alt: "Consultation Room" },
    { src: "/images/clinic-hero-bg.png", alt: "Hospital Ward" },
    { src: "/images/doctor-portrait.png", alt: "Reception Area" },
    { src: "/images/clinic-hero-bg.png", alt: "Pharmacy" },
    { src: "/images/doctor-portrait.png", alt: "Waiting Lounge" },
  ];

  return (
    <div className="pb-20">
      <section className="hero" style={{ minHeight: "250px", display: "flex", alignItems: "center" }}>
        <div className="container-xl">
          <h1 className="hero-title">Clinic <span>Gallery</span></h1>
          <p className="hero-sub">A glimpse into our world-class facilities at Burlington Clinic &amp; Hospital.</p>
        </div>
      </section>

      <section className="section">
        <div className="container-xl">
          <div className="grid-3">
            {photos.map((photo, i) => (
              <div key={i} style={{ borderRadius: 12, overflow: "hidden", border: "1px solid #e5e7eb", boxShadow: "0 4px 12px rgba(0,0,0,0.05)", position: "relative", height: 280 }}>
                <Image 
                  src={photo.src} 
                  alt={photo.alt} 
                  fill
                  style={{ objectFit: "cover" }}
                />
                <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, background: "rgba(10,22,40,0.7)", padding: "0.75rem", color: "#fff", fontSize: "0.85rem", textAlign: "center" }}>
                  {photo.alt}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
