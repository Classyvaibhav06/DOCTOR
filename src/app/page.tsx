import Image from "next/image";
import Link from "next/link";
import { FAQAccordion } from "@/components/FAQAccordion";
import { HeroSection } from "@/components/HeroSection";
import { ServiceCard } from "@/components/ServiceCard";
import { TestimonialCarousel } from "@/components/TestimonialCarousel";
import { services } from "@/lib/services";

const trustPoints = [
  {
    icon: "🏆",
    title: "World Book of Records",
    desc: "Recognized by the World Book of Records for excellence in sexual health care and patient outcomes.",
  },
  {
    icon: "✅",
    title: "ISO Certified (USA)",
    desc: "Burlington Clinic holds internationally recognized ISO certification validating our quality standards.",
  },
  {
    icon: "🔒",
    title: "100% Confidential",
    desc: "Complete privacy guaranteed. No records shared. Discreet entry, billing, and communication.",
  },
  {
    icon: "🌿",
    title: "Natural Treatments",
    desc: "Holistic and natural treatment methods with minimal side effects for long-term improvement.",
  },
  {
    icon: "💻",
    title: "Online Consultation",
    desc: "Secure video and phone consultations from the comfort and privacy of your home.",
  },
  {
    icon: "📅",
    title: "98 Years of Legacy",
    desc: "Serving confident men and families since 1926 with proven expertise and compassion.",
  },
];

const conditions = [
  "Erectile Dysfunction",
  "Premature Ejaculation",
  "Low Libido / Loss of Desire",
  "Nightfall (Wet Dreams)",
  "Penis Size & Performance",
  "Male Infertility",
  "Sexual Weakness",
  "Masturbation Effects",
  "Lack of Confidence",
  "Ling Ki Kamzori",
  "Shighrapatan",
  "Sexual Anxiety",
];

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "MedicalClinic"],
    name: "Dr. Rajesh Maghnani Burlington Clinic & Hospital",
    image: "https://drskjain.com/images/og-clinic.jpg",
    telephone: "+91-9936604444",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Bhopal Branch",
      addressLocality: "Bhopal",
      addressRegion: "Madhya Pradesh",
      postalCode: "462001",
      addressCountry: "IN",
    },
    areaServed: ["Bhopal", "Mumbai", "Online Consultation India"],
    medicalSpecialty: "Sexual Health",
    url: "https://drskjain.com",
    foundingDate: "1926",
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* ── Hero ── */}
      <HeroSection city="Bhopal" />

      {/* ── Accreditation Labels ── */}
      <div
        style={{
          background: "#fff",
          borderTop: "1px solid #e5e7eb",
          borderBottom: "1px solid #e5e7eb",
        }}
      >
        <div className="container-xl">
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              flexWrap: "wrap",
              gap: "1rem",
              padding: "0.85rem 0",
            }}
          >
            {[
              { icon: "🏆", label: "World Book of Records Holder" },
              { icon: "✅", label: "ISO Certified (USA)" },
              { icon: "📅", label: "Serving Since 1926" },
              { icon: "👥", label: "5,50,000+ Patients" },
              { icon: "🔒", label: "100% Confidential" },
              { icon: "🌍", label: "Patients Across India" },
            ].map((b) => (
              <div
                key={b.label}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.4rem",
                  fontSize: "0.78rem",
                  fontWeight: 600,
                  color: "#374151",
                  whiteSpace: "nowrap",
                }}
              >
                <span>{b.icon}</span>
                <span>{b.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Why Choose Us ── */}
      <section className="section">
        <div className="container-xl">
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "3rem",
              alignItems: "center",
            }}
          >
            {/* Left – text */}
            <div>
              <p
                style={{
                  fontSize: "0.78rem",
                  fontWeight: 700,
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  color: "#dc2626",
                  marginBottom: "0.5rem",
                }}
              >
                Why Choose Burlington Clinic
              </p>
              <h2 className="section-title" style={{ marginBottom: "1.5rem" }}>
                India&apos;s Most Trusted<br />Sexual Health Specialist
              </h2>
              <p style={{ color: "#6b7280", lineHeight: 1.75, marginBottom: "1.5rem", fontSize: "0.93rem" }}>
                With nearly 100 years of specialized expertise, Dr. Rajesh Maghnani Burlington Clinic &amp;
                Hospital has earned the trust of over 5.5 lakh patients across India. Our approach combines
                traditional wisdom with modern evidence-based medicine for lasting results.
              </p>
              <div className="grid-2" style={{ gap: "0.75rem" }}>
                {trustPoints.map((tp) => (
                  <div key={tp.title} className="trust-card">
                    <div className="trust-card-icon">{tp.icon}</div>
                    <div className="trust-card-title">{tp.title}</div>
                    <div className="trust-card-desc">{tp.desc}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right – doctor about */}
            <div>
              <div
                style={{
                  borderRadius: 16,
                  overflow: "hidden",
                  boxShadow: "0 20px 60px rgba(0,0,0,0.15)",
                  border: "1px solid #e5e7eb",
                }}
              >
                <Image
                  src="/images/doctor-portrait.png"
                  alt="Dr. Rajesh Maghnani — Senior Sexologist at Burlington Clinic"
                  width={500}
                  height={580}
                  style={{ width: "100%", height: "auto", display: "block" }}
                />
              </div>
              <div
                style={{
                  background: "#0a1628",
                  borderRadius: 12,
                  padding: "1.25rem 1.5rem",
                  marginTop: "1rem",
                  display: "flex",
                  justifyContent: "space-between",
                  flexWrap: "wrap",
                  gap: "1rem",
                }}
              >
                {[
                  { value: "1926", label: "Est." },
                  { value: "98+", label: "Years" },
                  { value: "5.5L+", label: "Patients" },
                  { value: "2", label: "Cities" },
                ].map((s) => (
                  <div key={s.label} style={{ textAlign: "center", flex: 1 }}>
                    <div
                      style={{
                        fontFamily: "var(--font-display)",
                        fontSize: "1.5rem",
                        fontWeight: 800,
                        color: "#fcd34d",
                      }}
                    >
                      {s.value}
                    </div>
                    <div
                      style={{ fontSize: "0.7rem", color: "rgba(255,255,255,0.5)", textTransform: "uppercase", letterSpacing: "0.08em" }}
                    >
                      {s.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Services ── */}
      <section className="section" style={{ background: "#f3f4f6" }}>
        <div className="container-xl">
          <div className="text-center" style={{ marginBottom: "2.5rem" }}>
            <p
              style={{
                fontSize: "0.78rem",
                fontWeight: 700,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: "#dc2626",
                marginBottom: "0.5rem",
              }}
            >
              Our Expertise
            </p>
            <h2 className="section-title center">Sexual Health Services</h2>
            <p
              className="section-subtitle"
              style={{ margin: "1.25rem auto 0", textAlign: "center" }}
            >
              Evidence-based, personalized treatment plans designed to restore confidence and
              wellbeing while maintaining complete privacy.
            </p>
          </div>

          <div className="grid-3">
            {services.map((service) => (
              <ServiceCard key={service.slug} service={service} />
            ))}
          </div>
        </div>
      </section>

      {/* ── Conditions We Treat ── */}
      <section className="section" style={{ background: "#0a1628", color: "#fff" }}>
        <div className="container-xl">
          <div className="text-center" style={{ marginBottom: "2.5rem" }}>
            <p
              style={{
                fontSize: "0.78rem",
                fontWeight: 700,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: "#fca5a5",
                marginBottom: "0.5rem",
              }}
            >
              Comprehensive Care
            </p>
            <h2
              className="section-title center"
              style={{ color: "#fff", display: "block", marginBottom: "0" }}
            >
              Conditions We Treat
            </h2>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
              gap: "0.75rem",
            }}
          >
            {conditions.map((c) => (
              <div
                key={c}
                style={{
                  background: "rgba(255,255,255,0.05)",
                  border: "1px solid rgba(255,255,255,0.1)",
                  borderRadius: 10,
                  padding: "0.85rem 1.1rem",
                  fontSize: "0.85rem",
                  fontWeight: 500,
                  color: "rgba(255,255,255,0.85)",
                  display: "flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  transition: "background 0.2s, border-color 0.2s",
                  cursor: "pointer",
                }}
              >
                <span style={{ color: "#dc2626", fontWeight: 700 }}>→</span>
                {c}
              </div>
            ))}
          </div>

          <div style={{ textAlign: "center", marginTop: "2rem" }}>
            <Link
              href="/disease"
              style={{
                display: "inline-block",
                padding: "0.75rem 2rem",
                background: "linear-gradient(135deg,#dc2626,#b91c1c)",
                color: "#fff",
                borderRadius: 6,
                fontWeight: 600,
                fontSize: "0.9rem",
                textDecoration: "none",
              }}
            >
              View All Conditions
            </Link>
          </div>
        </div>
      </section>

      {/* ── About Doctor Section ── */}
      <section className="section about-section">
        <div className="container-xl">
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1.1fr 1fr",
              gap: "3rem",
              alignItems: "center",
            }}
          >
            {/* Stats left column */}
            <div>
              <p
                style={{
                  fontSize: "0.78rem",
                  fontWeight: 700,
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  color: "#fca5a5",
                  marginBottom: "0.5rem",
                }}
              >
                About The Doctor
              </p>
              <h2 className="section-title" style={{ color: "#fff", marginBottom: "1.25rem" }}>
                Dr. Rajesh Maghnani<br />
                <span style={{ fontSize: "1.1rem", color: "#fcd34d", fontFamily: "var(--font-body)", fontWeight: 500 }}>
                  Senior Consultant | Burlington Clinic
                </span>
              </h2>
              <p style={{ color: "rgba(255,255,255,0.75)", lineHeight: 1.75, marginBottom: "1.5rem", fontSize: "0.9rem" }}>
                Dr. Rajesh Maghnani is one of India&apos;s most renowned and experienced sexologists with
                decades of practice at Burlington Clinic &amp; Hospital, Bhopal. His patient-first
                philosophy, rooted in trust, clinical discipline, and comprehensive care, has helped
                over 5.5 lakh patients reclaim confidence and wellbeing.
              </p>

              <ul className="about-list" style={{ marginBottom: "1.5rem" }}>
                {[
                  "98+ years of clinic legacy with proven results",
                  "5,50,000+ consultations managed with confidence",
                  "ISO Certified (USA) medical practice",
                  "World Book of Records recognized clinic",
                  "Govt. registered clinic in Bhopal & Mumbai",
                  "Online consultation for patients across India",
                  "Natural, holistic treatment with minimal side effects",
                  "Strict patient confidentiality maintained at all times",
                ].map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>

              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(2, 1fr)",
                  gap: "0.75rem",
                }}
              >
                {[
                  { value: "5,50,000+", label: "Patients Treated" },
                  { value: "98 Years", label: "Of Experience" },
                  { value: "World", label: "Book of Records" },
                  { value: "ISO", label: "Certified (USA)" },
                ].map((s) => (
                  <div key={s.label} className="about-stat">
                    <div
                      style={{
                        fontFamily: "var(--font-display)",
                        fontSize: "1.4rem",
                        fontWeight: 800,
                        color: "#fcd34d",
                      }}
                    >
                      {s.value}
                    </div>
                    <div style={{ fontSize: "0.72rem", color: "rgba(255,255,255,0.5)", textTransform: "uppercase", letterSpacing: "0.08em" }}>
                      {s.label}
                    </div>
                  </div>
                ))}
              </div>

              <div style={{ marginTop: "1.5rem", display: "flex", gap: "0.75rem", flexWrap: "wrap" }}>
                <Link
                  href="/about"
                  style={{
                    padding: "0.65rem 1.5rem",
                    background: "#dc2626",
                    color: "#fff",
                    borderRadius: 6,
                    fontWeight: 600,
                    fontSize: "0.88rem",
                    textDecoration: "none",
                  }}
                >
                  About Dr. Rajesh Maghnani
                </Link>
                <Link
                  href="/contact"
                  style={{
                    padding: "0.65rem 1.5rem",
                    border: "2px solid rgba(255,255,255,0.3)",
                    color: "#fff",
                    borderRadius: 6,
                    fontWeight: 600,
                    fontSize: "0.88rem",
                    textDecoration: "none",
                    background: "rgba(255,255,255,0.05)",
                  }}
                >
                  Book Appointment
                </Link>
              </div>
            </div>

            {/* Right – image */}
            <div>
              <div
                style={{
                  borderRadius: 16,
                  overflow: "hidden",
                  boxShadow: "0 24px 64px rgba(0,0,0,0.5)",
                  border: "2px solid rgba(220,38,38,0.35)",
                }}
              >
                <Image
                  src="/images/doctor-portrait.png"
                  alt="Dr. Rajesh Maghnani, Senior Sexologist"
                  width={520}
                  height={600}
                  style={{ width: "100%", height: "auto", display: "block" }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Testimonials ── */}
      <TestimonialCarousel />

      {/* ── Contact CTA ── */}
      <section
        style={{
          background: "linear-gradient(135deg, #dc2626, #991b1b)",
          padding: "3rem 0",
        }}
      >
        <div className="container-xl text-center">
          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(1.5rem, 3vw, 2.4rem)",
              fontWeight: 800,
              color: "#fff",
              marginBottom: "0.75rem",
            }}
          >
            Ready to Regain Your Confidence?
          </h2>
          <p style={{ color: "rgba(255,255,255,0.8)", marginBottom: "1.75rem", maxWidth: 560, margin: "0 auto 1.75rem" }}>
            Book a confidential consultation with Dr. Rajesh Maghnani today. Online and in-person appointments available.
          </p>
          <div
            style={{
              display: "flex",
              gap: "1rem",
              justifyContent: "center",
              flexWrap: "wrap",
            }}
          >
            <Link
              href="/contact"
              style={{
                padding: "0.85rem 2rem",
                background: "#fff",
                color: "#dc2626",
                borderRadius: 6,
                fontWeight: 700,
                fontSize: "0.95rem",
                textDecoration: "none",
                boxShadow: "0 4px 16px rgba(0,0,0,0.15)",
              }}
            >
              Book Appointment Online
            </Link>
            <a
              href="tel:+919936604444"
              style={{
                padding: "0.85rem 2rem",
                border: "2px solid rgba(255,255,255,0.6)",
                color: "#fff",
                borderRadius: 6,
                fontWeight: 700,
                fontSize: "0.95rem",
                textDecoration: "none",
                background: "rgba(255,255,255,0.1)",
              }}
            >
              Call: +91 99366 04444
            </a>
            <a
              href="https://wa.me/919936604444"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                padding: "0.85rem 2rem",
                background: "#25d366",
                color: "#fff",
                borderRadius: 6,
                fontWeight: 700,
                fontSize: "0.95rem",
                textDecoration: "none",
              }}
            >
              WhatsApp Now
            </a>
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <FAQAccordion />

      {/* ── Clinic Address ── */}
      <section
        className="section"
        style={{
          background: "#fff",
          borderTop: "1px solid #e5e7eb",
        }}
      >
        <div className="container-xl">
          <div className="text-center" style={{ marginBottom: "2rem" }}>
            <p
              style={{
                fontSize: "0.78rem",
                fontWeight: 700,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: "#dc2626",
                marginBottom: "0.5rem",
              }}
            >
              Visit Us
            </p>
            <h2 className="section-title center">Clinic Locations</h2>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: "1.5rem",
            }}
          >
            {[
              {
                city: "Bhopal (Main Branch)",
                address: "Bhopal Branch, Madhya Pradesh",
                phone: "+91 99366 04444",
                hours: "Mon–Sat: 9 AM – 8 PM",
              },
              {
                city: "Mumbai Branch",
                address: "Burlington Clinic, Western Suburbs, Mumbai, Maharashtra",
                phone: "+91 96950 14444",
                hours: "Mon–Sat: 10 AM – 7 PM",
              },
              {
                city: "Online Consultation",
                address: "Available for all cities across India and abroad",
                phone: "+91 99366 04444",
                hours: "Mon–Sat: 9 AM – 9 PM",
              },
            ].map((loc) => (
              <div key={loc.city} className="contact-card">
                <div className="contact-icon">📍</div>
                <div>
                  <div
                    style={{
                      fontFamily: "var(--font-display)",
                      fontWeight: 700,
                      color: "#0a1628",
                      fontSize: "0.95rem",
                      marginBottom: "0.4rem",
                    }}
                  >
                    {loc.city}
                  </div>
                  <div style={{ fontSize: "0.8rem", color: "#6b7280", marginBottom: "0.3rem" }}>
                    {loc.address}
                  </div>
                  <div style={{ fontSize: "0.8rem", color: "#0a1628", fontWeight: 600 }}>
                    📞 {loc.phone}
                  </div>
                  <div style={{ fontSize: "0.75rem", color: "#9ca3af", marginTop: "0.2rem" }}>
                    🕐 {loc.hours}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
