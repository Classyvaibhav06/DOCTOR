import Link from "next/link";
import { services } from "@/lib/services";
import { ServiceCard } from "@/components/ServiceCard";

const otherDiseases = [
  "Nightfall (Excessive Wet Dreams)",
  "Sexual Weakness (Kamzori)",
  "Loss of Libido / Desire",
  "Penis Size Concerns",
  "Spermatorrhoea",
  "Masturbation Effects",
  "Performance Anxiety",
  "Venereal Diseases",
  "Prostate Related Concerns",
  "Hormonal Imbalance",
];

export default function DiseasePage() {
  return (
    <div className="pb-20">
      <section className="hero" style={{ minHeight: "250px", display: "flex", alignItems: "center" }}>
        <div className="container-xl">
          <h1 className="hero-title">Common <span>Sexual Diseases</span></h1>
          <p className="hero-sub">Expert diagnosis and natural treatment for all men&apos;s sexual health conditions.</p>
        </div>
      </section>

      <section className="section">
        <div className="container-xl">
          <h2 className="section-title">Primary Conditions</h2>
          <div className="grid-3 mt-8">
            {services.map((service) => (
              <ServiceCard key={service.slug} service={service} />
            ))}
          </div>

          <div className="mt-16 bg-navy-900 rounded-2xl p-8 text-white" style={{ background: "#0a1628" }}>
            <h2 className="text-heading text-white" style={{ fontSize: "1.8rem" }}>Other Conditions We Treat</h2>
            <p className="mt-4" style={{ color: "rgba(255,255,255,0.7)" }}>
              Dr. Rajesh Maghnani Burlington Clinic provides comprehensive holistic care for a wide range of sexual and reproductive health concerns. 
              Our treatments are personalized based on the root cause.
            </p>
            
            <div className="grid-auto mt-8">
              {otherDiseases.map((d) => (
                <div key={d} style={{ display: "flex", alignItems: "center", gap: "0.5rem", padding: "0.5rem 0" }}>
                  <span style={{ color: "#dc2626", fontWeight: "bold" }}>✓</span>
                  <span style={{ fontSize: "0.95rem" }}>{d}</span>
                </div>
              ))}
            </div>

            <div className="mt-10 pt-8 border-t border-white/10 flex flex-wrap gap-4 items-center justify-between">
              <div>
                <h3 className="text-heading text-white" style={{ fontSize: "1.2rem" }}>Don&apos;t wait for the problem to worsen.</h3>
                <p style={{ color: "rgba(255,255,255,0.6)", fontSize: "0.9rem" }}>Early consultation leads to faster and better recovery.</p>
              </div>
              <Link href="/contact" className="btn-book" style={{ background: "#fff", color: "#dc2626" }}>
                Book Free Consultation
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
