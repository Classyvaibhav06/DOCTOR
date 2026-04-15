import Image from "next/image";
import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="pb-20">
      {/* Banner */}
      <section className="hero" style={{ minHeight: "300px", display: "flex", alignItems: "center" }}>
        <div className="container-xl">
          <h1 className="hero-title">About <span>Dr. Rajesh Maghnani</span></h1>
          <p className="hero-sub">The legacy of India&apos;s most trusted sexual health specialist since 1926.</p>
        </div>
      </section>

      {/* Content */}
      <section className="section">
        <div className="container-xl">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1.2fr", gap: "4rem", alignItems: "start" }}>
            <div>
              <div style={{ borderRadius: 16, overflow: "hidden", border: "1px solid #e5e7eb", boxShadow: "0 10px 30px rgba(0,0,0,0.1)" }}>
                <Image 
                  src="/images/doctor-portrait.png" 
                  alt="Dr. Rajesh Maghnani" 
                  width={500} 
                  height={600} 
                  style={{ width: "100%", height: "auto" }}
                />
              </div>
              <div style={{ marginTop: "1.5rem", background: "#f3f4f6", padding: "1.5rem", borderRadius: 12 }}>
                <h3 className="text-heading" style={{ fontSize: "1.1rem", marginBottom: "0.5rem" }}>Credentials & Experience</h3>
                <ul style={{ fontSize: "0.9rem", color: "#4b5563", listStyle: "disc", paddingLeft: "1.2rem" }}>
                  <li>Senior Sexologist with over 50 years of clinical practice</li>
                  <li>In charge of Burlington Clinic & Hospital, Bhopal</li>
                  <li>World Book of Records Holder for Excellence</li>
                  <li>ISO Certified Medical Professional</li>
                  <li>Specialist in Natural & Holistic sexual health treatments</li>
                </ul>
              </div>
            </div>
            
            <div>
              <h2 className="section-title">A Legacy of Trust</h2>
              <p className="mt-6" style={{ color: "#4b5563", lineHeight: 1.8 }}>
                Dr. Rajesh Maghnani is a name synonymous with Excellence and Trust in the field of sexual health. 
                Carrying forward a legacy that started in 1926, Dr. Maghnani has dedicated his life to 
                helping patients find sustainable, natural solutions to their most private concerns.
              </p>
              <p className="mt-4" style={{ color: "#4b5563", lineHeight: 1.8 }}>
                Burlington Clinic, under his guidance, has grown from a local institution to a nationally 
                recognized hospital serving over 5,50,000 patients. His approach is rooted in the 
                philosophy of &quot;Treatment with Confidentiality&quot; — ensuring every patient feels respected, 
                heard, and protected.
              </p>
              
              <h3 className="text-heading mt-8" style={{ fontSize: "1.4rem" }}>Our Philosophy</h3>
              <p className="mt-3" style={{ color: "#4b5563", lineHeight: 1.8 }}>
                We believe that sexual health is a critical component of overall wellbeing. Our clinic doesn&apos;t 
                just provide prescriptions; we provide a pathway to confidence. By merging centuries-old 
                herbal wisdom with modern clinical standards, we offer treatments that are effective and 
                safe, with zero to minimal side effects.
              </p>

              <div className="grid-2 mt-8">
                <div style={{ borderLeft: "4px solid #dc2626", paddingLeft: "1rem" }}>
                  <div style={{ fontWeight: 800, fontSize: "1.5rem", color: "#0a1628" }}>98+</div>
                  <div style={{ fontSize: "0.8rem", color: "#6b7280", textTransform: "uppercase" }}>Years of Service</div>
                </div>
                <div style={{ borderLeft: "4px solid #dc2626", paddingLeft: "1rem" }}>
                  <div style={{ fontWeight: 800, fontSize: "1.5rem", color: "#0a1628" }}>5.5L+</div>
                  <div style={{ fontSize: "0.8rem", color: "#6b7280", textTransform: "uppercase" }}>Happy Patients</div>
                </div>
              </div>

              <div className="mt-10">
                <Link href="/contact" className="btn-book" style={{ padding: "0.8rem 2rem" }}>
                  Consult Dr. Rajesh Maghnani Today
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
