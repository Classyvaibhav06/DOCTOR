import { getServiceBySlug } from "@/lib/services";
import { notFound } from "next/navigation";
import Link from "next/link";

export default async function ServiceDetail({ params }: { params: { slug: string } }) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    notFound();
  }

  return (
    <div className="pb-20">
      <section className="hero" style={{ minHeight: "350px", display: "flex", alignItems: "center" }}>
        <div className="container-xl">
          <div className="hero-badge mb-4" style={{ background: "rgba(220,38,38,0.1)", color: "#fca5a5" }}>Sexual Health Treatments</div>
          <h1 className="hero-title"><span>{service.title}</span><br />Treatment Approach</h1>
          <p className="hero-sub">{service.shortDescription}</p>
        </div>
      </section>

      <section className="section">
        <div className="container-xl">
          <div style={{ display: "grid", gridTemplateColumns: "1.5fr 1fr", gap: "4rem", alignItems: "start" }}>
            {/* Left Content */}
            <div>
              <h2 className="section-title">Overview</h2>
              <p className="mt-8" style={{ fontSize: "1.1rem", color: "#4b5563", lineHeight: 1.8 }}>
                {service.overview}
              </p>

              <div className="mt-12 bg-white rounded-2xl border border-gray-200 p-8 shadow-sm">
                <h3 className="text-heading" style={{ fontSize: "1.4rem", marginBottom: "1.5rem" }}>Common Symptoms</h3>
                <div className="grid-2">
                  {service.symptoms.map((s, i) => (
                    <div key={i} style={{ display: "flex", gap: "0.75rem", alignItems: "flex-start", marginBottom: "0.5rem" }}>
                      <span style={{ color: "#dc2626", fontWeight: "bold" }}>•</span>
                      <span style={{ fontSize: "0.95rem", color: "#4b5563" }}>{s}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-10">
                <h3 className="section-title" style={{ fontSize: "1.6rem" }}>Our Holistic Treatment Approach</h3>
                <div className="mt-8 flex flex-col gap-6">
                  {service.treatmentApproach.map((step, i) => (
                    <div key={i} style={{ display: "flex", gap: "1.5rem" }}>
                      <div style={{ width: 40, height: 40, borderRadius: "50%", background: "#0a1628", color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, fontWeight: 700 }}>
                        {i + 1}
                      </div>
                      <div>
                        <h4 style={{ fontWeight: 700, color: "#0a1628", marginBottom: "0.25rem" }}>Phase {i + 1}</h4>
                        <p style={{ color: "#6b7280", fontSize: "0.95rem" }}>{step}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Sidebar */}
            <div style={{ position: "sticky", top: "100px" }}>
              <div className="bg-navy-900 rounded-2xl p-8 text-white" style={{ background: "#0a1628" }}>
                <h3 className="text-heading text-white" style={{ fontSize: "1.3rem", marginBottom: "1rem" }}>Book Confidential Consultation</h3>
                <p style={{ color: "rgba(255,255,255,0.7)", fontSize: "0.9rem", marginBottom: "1.5rem" }}>
                  Consult Dr. Rajesh Maghnani privately for {service.title} treatment and regain your confidence today.
                </p>
                <div className="flex flex-col gap-3">
                  <Link href="/contact" className="btn-book" style={{ textAlign: "center", background: "#fff", color: "#dc2626" }}>Book Appointment</Link>
                  <a href="tel:+919936604444" className="btn-book" style={{ textAlign: "center", background: "transparent", border: "1px solid rgba(255,255,255,0.3)" }}>Call +91 99366 04444</a>
                </div>
              </div>

              <div className="mt-6 border border-gray-200 rounded-2xl p-6 bg-gray-50">
                <h4 style={{ fontWeight: 700, color: "#0a1628", marginBottom: "0.75rem" }}>Why Choose Us?</h4>
                <ul style={{ fontSize: "0.85rem", color: "#6b7280", display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                  <li>✓ 98 Years of Legacy</li>
                  <li>✓ 100% Confidential</li>
                  <li>✓ Professional Senior Doctors</li>
                  <li>✓ Natural Treatment Focus</li>
                  <li>✓ Proven Results</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
