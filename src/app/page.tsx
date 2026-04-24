"use client";
import { useState, useEffect, useCallback } from "react";
import { Navigation } from "@/components/Navigation";
import JsonLd, { generateFAQSchema } from "@/components/JsonLd";
import {
  Award,
  BadgeCheck,
  Building2,
  GraduationCap,
  ShieldCheck,
  Star,
} from "lucide-react";

/* ─── HERO CAROUSEL ─────────────────────────────────── */
function HeroCarousel() {
  const slides = [
    {
      src: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1200&q=80",
      alt: "Modern Luxury Clinic Interior",
    },
    {
      src: "https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&w=1200&q=80",
      alt: "Expert Doctor Consultation",
    },
    {
      src: "https://images.unsplash.com/photo-1638202993928-7267aad84c31?auto=format&fit=crop&w=1200&q=80",
      alt: "Advanced Medical Technology",
    },
    {
      src: "https://images.unsplash.com/photo-1581594693702-fbdc51b2763b?auto=format&fit=crop&w=1200&q=80",
      alt: "Professional Healthcare Environment",
    },
  ];

  const [cur, setCur] = useState(0);
  const DURATION = 5000;

  const next = useCallback(
    () => setCur((c) => (c + 1) % slides.length),
    [slides.length],
  );

  useEffect(() => {
    const id = setInterval(next, DURATION);
    return () => clearInterval(id);
  }, [next]);

  return (
    <>
      <style>{`
        .hero-section {
          position: relative; width: 100%; background: #FFFFFF; color: #0F172A;
          font-family: 'Inter', system-ui, sans-serif;
          padding-top: 7rem; padding-bottom: 5rem;
          border-bottom: 1px solid #DBEAFE;
        }
        .hero-inner {
          max-width: 1400px; margin: 0 auto; padding: 0 1.5rem;
        }
        .hero-flex {
          display: flex; flex-wrap: wrap; gap: 3rem; align-items: center;
        }
        .hero-left-col {
          flex: 1; min-width: 280px;
          display: flex; flex-direction: column; gap: 1.75rem;
        }
        .hero-h1 {
          font-size: clamp(2.5rem, 5vw, 4rem);
          font-family: 'Plus Jakarta Sans', sans-serif;
          font-weight: 800; line-height: 1.08;
          letter-spacing: -0.04em; color: #0F172A; margin: 0;
        }
        .hero-right-col {
          width: 50%; min-width: 300px;
          position: relative; flex-shrink: 0;
        }
        .hero-carousel-wrap {
          position: relative; width: 100%; aspect-ratio: 4/3;
          border-radius: 24px; overflow: hidden;
          box-shadow: 0 24px 50px rgba(30,64,175,0.15);
          background: #1E40AF;
        }
        .hero-stats-grid {
          display: grid; grid-template-columns: repeat(3, 1fr);
          gap: 1.5rem; padding-top: 2rem; margin-top: 0.5rem;
          border-top: 1px solid #DBEAFE;
        }
        @media (max-width: 768px) {
          .hero-section { padding-top: 5.5rem; padding-bottom: 3rem; }
          .hero-flex { gap: 2rem; }
          .hero-right-col { width: 100%; min-width: unset; }
          .hero-carousel-wrap { aspect-ratio: 16/9; border-radius: 16px; }
          .hero-h1 { font-size: 2rem; }
          .hero-stats-grid { gap: 1rem; }
        }
        @media (max-width: 480px) {
          .hero-section { padding-top: 5rem; }
          .hero-h1 { font-size: 1.75rem; }
        }
      `}</style>

      <section id="home" className="hero-section">
        <div className="hero-inner">
          <div className="hero-flex">
            {/* Left Content */}
            <div className="hero-left-col">
              <div
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.6rem",
                }}
              >
                <span
                  style={{
                    display: "block",
                    height: "1px",
                    width: "32px",
                    background: "#1E40AF",
                  }}
                ></span>
                <p
                  style={{
                    fontSize: "0.72rem",
                    fontWeight: 700,
                    letterSpacing: "0.2em",
                    textTransform: "uppercase",
                    color: "#1E40AF",
                    margin: 0,
                  }}
                >
                  #1 Sexologist in Bhopal · Justdial 4.9/5
                </p>
              </div>

              <h1 className="hero-h1">
                India&apos;s Most{" "}
                <em
                  style={{
                    fontStyle: "italic",
                    color: "#1E40AF",
                    fontFamily: "'Plus Jakarta Sans', sans-serif",
                    fontWeight: 800,
                  }}
                >
                  Trusted
                </em>
                <br />
                Sexologist &amp; Wellness Expert
              </h1>

              <p
                style={{
                  fontSize: "1rem",
                  color: "#64748B",
                  lineHeight: 1.8,
                  maxWidth: "600px",
                  margin: 0,
                  fontWeight: 400,
                }}
              >
                Dr. Rajesh Manghnani brings 23+ years of specialized expertise
                in sexual health, combining evidence-based medicine with
                holistic healing. Personalized, confidential care for men and
                women across India.
              </p>

              {/* CTA Buttons */}
              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  alignItems: "center",
                  gap: "0.75rem",
                  paddingTop: "0.25rem",
                }}
              >
                <a
                  href="https://bestsexologistdoctor.com/index.php/payment/"
                  target="_blank"
                  rel="noopener"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    borderRadius: "8px",
                    fontSize: "0.86rem",
                    fontWeight: 700,
                    letterSpacing: "0.02em",
                    textDecoration: "none",
                    background: "#1E40AF",
                    color: "#fff",
                    padding: "0.75rem 1.6rem",
                    height: "48px",
                    boxShadow: "0 4px 16px rgba(30,64,175,0.28)",
                  }}
                >
                  Book Appointment Online
                </a>

                <a
                  href="tel:+919893880001"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    borderRadius: "8px",
                    fontSize: "0.86rem",
                    fontWeight: 600,
                    textDecoration: "none",
                    border: "1.5px solid #DBEAFE",
                    background: "#fff",
                    color: "#0F172A",
                    padding: "0.75rem 1.4rem",
                    height: "48px",
                    boxShadow: "0 2px 8px rgba(0,0,0,0.06)",
                  }}
                >
                  📞 +91 9893880001
                </a>
              </div>

              {/* Stats */}
              <div className="hero-stats-grid">
                {[
                  { val: "23+", label: "Years Experience" },
                  { val: "5.5L+", label: "Patients Treated" },
                  { val: "4.9★", label: "Justdial Rating" },
                ].map((s, i) => (
                  <div
                    key={s.label}
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      borderRight: i < 2 ? "1px solid #DBEAFE" : "none",
                      paddingRight: i < 2 ? "1.5rem" : "0",
                    }}
                  >
                    <span
                      style={{
                        fontSize: "1.9rem",
                        fontFamily: "'Plus Jakarta Sans', sans-serif",
                        fontWeight: 800,
                        color: "#1E40AF",
                        lineHeight: 1,
                        letterSpacing: "-0.04em",
                      }}
                    >
                      {s.val}
                    </span>
                    <span
                      style={{
                        fontSize: "0.72rem",
                        fontWeight: 700,
                        color: "#64748B",
                        marginTop: "0.4rem",
                        letterSpacing: "0.02em",
                      }}
                    >
                      {s.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right — Image Carousel */}
            <div className="hero-right-col">
              <div className="hero-carousel-wrap">
                {slides.map((s, i) => (
                  <div
                    key={i}
                    style={{
                      position: "absolute",
                      inset: 0,
                      opacity: i === cur ? 1 : 0,
                      transition: "opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1)",
                      zIndex: i === cur ? 2 : 1,
                    }}
                  >
                    <img
                      src={s.src}
                      alt={s.alt}
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        objectPosition: "center",
                      }}
                    />
                  </div>
                ))}

                {/* Dots */}
                <div
                  style={{
                    position: "absolute",
                    bottom: "1.25rem",
                    left: 0,
                    width: "100%",
                    display: "flex",
                    justifyContent: "center",
                    gap: "0.5rem",
                    zIndex: 3,
                  }}
                >
                  {slides.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setCur(i)}
                      style={{
                        width: i === cur ? "24px" : "8px",
                        height: "8px",
                        borderRadius: "4px",
                        background:
                          i === cur ? "#1E40AF" : "rgba(255,255,255,0.8)",
                        border: "none",
                        cursor: "pointer",
                        outline: "none",
                        transition: "all 0.3s",
                        padding: 0,
                      }}
                      aria-label={`Slide ${i + 1}`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

/* ─── FAQ SECTION ────────────────────────────────────── */
export function FAQSection() {
  const faqs = [
    {
      q: "Is my consultation completely confidential?",
      a: "Dr. G.D. Memorial Clinic maintains the highest standards of privacy. From discreet billing and private consultation rooms to encrypted records, your confidentiality is our absolute priority.",
    },
    {
      q: "Are treatments natural with no side effects?",
      a: "We specialized in integrative medicine using premium German homeopathic protocols. Our treatments are designed to provide effective, long-term recovery with zero synthetic disadvantages.",
    },
    {
      q: "Can I consult online from outside Bhopal?",
      a: "Yes. We provide secure video and tele-consultations for patients across India and internationally. Our digital platform is private, secure, and available 9 AM – 9 PM.",
    },
    {
      q: "What should I expect in my first visit?",
      a: "Your first visit includes a comprehensive clinical assessment, lifestyle mapping, and a personalized diagnostic review with Dr. Rajesh to create your custom recovery roadmap.",
    },
  ];

  const [open, setOpen] = useState(0);
  const faqSchema = generateFAQSchema(faqs);

  return (
    <section id="faq" style={{ background: "#FFFFFF", padding: "7rem 0" }}>
      <JsonLd data={faqSchema} />
      <style>{`
        .faq-split {
          display: grid;
          grid-template-columns: 1.1fr 1fr;
          gap: 4.5rem;
          align-items: start;
        }
        @media (max-width: 1024px) {
          .faq-split {
            grid-template-columns: 1fr;
            gap: 3rem;
          }
        }
      `}</style>
      <div className="container">
        <div className="faq-split">
          {/* Left: Content & Branding */}
          <div>
            <span className="overline" style={{ color: "#1E40AF" }}>
              Frequently Asked
            </span>
            <h2
              className="section-title"
              style={{
                fontSize: "clamp(2.5rem, 5vw, 4rem)",
                color: "#0F172A",
                margin: "1rem 0",
              }}
            >
              Clarity &{" "}
              <em style={{ color: "#1E40AF", fontStyle: "italic" }}>Care</em>.
            </h2>
            <p
              style={{
                color: "#64748B",
                fontSize: "1.1rem",
                lineHeight: 1.8,
                marginBottom: "2rem",
              }}
            >
              We believe in transparent healthcare. Here are answers to common
              questions about our clinical approach and patient journey.
            </p>

            <div
              style={{
                background: "#F8FAFC",
                padding: "2rem",
                borderRadius: "32px",
                border: "1px solid #E2E8F0",
              }}
            >
              <div style={{ fontSize: "2rem", marginBottom: "1rem" }}>🩺</div>
              <h4
                style={{
                  fontSize: "1.2rem",
                  fontWeight: 700,
                  color: "#0F172A",
                  marginBottom: "0.5rem",
                }}
              >
                Still Have Questions?
              </h4>
              <p
                style={{
                  fontSize: "0.95rem",
                  color: "#64748B",
                  lineHeight: 1.6,
                  marginBottom: "2rem",
                }}
              >
                Our medical coordinators are available for a private chat to
                address any specific concerns.
              </p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem" }}>
                <a
                  href="tel:+919893880001"
                  className="btn-primary"
                  style={{ padding: "0 1.5rem", fontSize: "0.78rem" }}
                >
                  Call Now
                </a>
                <a
                  href="https://wa.me/919936604444"
                  className="btn-secondary"
                  style={{ padding: "0 1.5rem", fontSize: "0.78rem" }}
                >
                  WhatsApp Advisor
                </a>
              </div>
            </div>
          </div>

          {/* Right: Modern Accordion */}
          <div
            style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}
          >
            {faqs.map((f, i) => (
              <div
                key={i}
                style={{
                  background: open === i ? "#F1F5F9" : "transparent",
                  border: "1px solid",
                  borderColor: open === i ? "#BFDBFE" : "#E2E8F0",
                  borderRadius: "20px",
                  overflow: "hidden",
                  transition: "all 0.3s",
                }}
              >
                <button
                  onClick={() => setOpen(open === i ? -1 : i)}
                  style={{
                    width: "100%",
                    padding: "1.35rem 1.8rem",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    background: "none",
                    border: "none",
                    cursor: "pointer",
                    textAlign: "left",
                  }}
                >
                  <span
                    style={{
                      fontSize: "1.1rem",
                      fontWeight: 700,
                      color: "#0F172A",
                      paddingRight: "1.5rem",
                    }}
                  >
                    {f.q}
                  </span>
                  <span
                    style={{
                      fontSize: "1.2rem",
                      color: "#1E40AF",
                      transition: "transform 0.3s",
                      transform: open === i ? "rotate(180deg)" : "rotate(0)",
                    }}
                  >
                    {open === i ? "−" : "+"}
                  </span>
                </button>
                <div
                  style={{
                    maxHeight: open === i ? "300px" : "0",
                    overflow: "hidden",
                    transition: "all 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
                  }}
                >
                  <div
                    style={{
                      padding: "0 1.8rem 1.8rem",
                      color: "#64748B",
                      lineHeight: 1.8,
                      fontSize: "1rem",
                    }}
                  >
                    {f.a}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── KNOWLEDGE CENTER (Redesigned) ───────────────── */
export function KnowledgeCenter() {
  const blogs = [
    {
      title: "Psychological Barriers vs. Physiological Causes",
      date: "Oct 12, 2025",
      desc: "A clinical breakdown of how neuro-stress impacts intimate wellness and practical recovery steps.",
      tag: "Clinical Insight",
    },
    {
      title: "The Science of German Homeopathic Dilutions",
      date: "Sep 28, 2025",
      desc: "Exploring the pharmacological efficacy of biochemic salts in treating chronic performance anxiety.",
      tag: "Science",
    },
    {
      title: "Integrative Wellness: Diet & Restoration",
      date: "Aug 15, 2025",
      desc: "Nutritional protocols designed to support hormonal balance and long-term vitality naturally.",
      tag: "Wellness",
    },
  ];
  const videos = [
    { id: "GROST5WDZQk", title: "Hypersensitive Glans Treatment" },
    { id: "6IsSe9Q5SFs", title: "Phimosis Treatment without Surgery" },
    { id: "iyGTDYFzFBY", title: "5 Best Balance Medicines" },
    { id: "VTm_KICkLKM", title: "Top 5 Phimosis Medicines" },
  ];

  return (
    <section id="media" style={{ background: "#F8FAFC", padding: "6rem 0" }}>
      <style>{`
        .knowledge-grid {
          display: grid; 
          grid-template-columns: 1fr 400px; 
          gap: 4rem;
        }
        .insight-card {
          background: #FFFFFF;
          border: 1px solid #E2E8F0;
          border-radius: 16px;
          padding: 1.15rem 1.2rem;
          transition: transform 0.25s ease, box-shadow 0.25s ease, border-color 0.25s ease;
        }
        .insight-card:hover {
          transform: translateY(-4px);
          border-color: #BFDBFE;
          box-shadow: 0 12px 30px rgba(30,64,175,0.10);
        }
        @media (max-width: 1024px) {
          .knowledge-grid {
            grid-template-columns: 1fr;
            gap: 3rem;
          }
        }
      `}</style>
      <div className="container">
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
            alignItems: "flex-end",
            gap: "2rem",
            marginBottom: "2.5rem",
          }}
        >
          <div style={{ maxWidth: "600px" }}>
            <span className="overline" style={{ color: "#1E40AF" }}>
              Insight & Education
            </span>
            <h2
              className="section-title"
              style={{
                fontSize: "clamp(2.5rem, 5vw, 4rem)",
                color: "#0F172A",
                margin: "1rem 0",
              }}
            >
              Medical{" "}
              <em style={{ color: "#1E40AF", fontStyle: "italic" }}>
                Intelligence
              </em>
              .
            </h2>
            <p
              style={{ color: "#64748B", fontSize: "1.1rem", lineHeight: 1.8 }}
            >
              Empowering patients with clear, scientific, and compassionate
              information about sexual health and modern treatment options.
            </p>
          </div>
          <a
            href="/media"
            className="btn-secondary"
            style={{ height: "56px", padding: "0 2.5rem" }}
          >
            Explore Full Archives →
          </a>
        </div>

        <div className="knowledge-grid">
          {/* Main Stage: Featured Video */}
          <div>
            <div
              style={{
                background: "#000",
                borderRadius: "32px",
                overflow: "hidden",
                position: "relative",
                aspectRatio: "16/9",
                boxShadow: "0 40px 80px rgba(30,64,175,0.15)",
              }}
            >
              <iframe
                src={`https://www.youtube.com/embed/${videos[0].id}?rel=0&modestbranding=1`}
                style={{ width: "100%", height: "100%", border: "none" }}
                allowFullScreen
              />
            </div>
            <div style={{ marginTop: "2.5rem" }}>
              <div
                style={{
                  display: "inline-block",
                  background: "#EFF6FF",
                  color: "#1E40AF",
                  fontWeight: 700,
                  fontSize: "0.65rem",
                  padding: "0.4rem 1.2rem",
                  borderRadius: "50px",
                  textTransform: "uppercase",
                  letterSpacing: "0.1em",
                  marginBottom: "1rem",
                }}
              >
                Featured Clinic Lecture
              </div>
              <h3
                className="section-title"
                style={{
                  fontSize: "1.8rem",
                  color: "#0F172A",
                  marginBottom: "1rem",
                }}
              >
                {videos[0].title}
              </h3>
              <p
                style={{
                  color: "#64748B",
                  lineHeight: 1.8,
                  fontSize: "1.05rem",
                }}
              >
                Dr. Rajesh Manghnani explains the clinical protocols for
                non-surgical management of hypersensitivity and the role of
                integrative homeopathy in restoring confidence.
              </p>
            </div>
          </div>

          {/* Sidebar: Latest Insights */}
          <div
            style={{ display: "flex", flexDirection: "column", gap: "2rem" }}
          >
            <h3
              style={{
                fontSize: "1.2rem",
                fontWeight: 800,
                color: "#0F172A",
                borderBottom: "2px solid #1E40AF",
                paddingBottom: "0.75rem",
                width: "fit-content",
              }}
            >
              Latest Insights
            </h3>
            {blogs.map((b, i) => (
              <div
                key={i}
                className="insight-card"
                style={{ cursor: "pointer" }}
              >
                <div
                  style={{
                    fontSize: "0.65rem",
                    color: "#1E40AF",
                    fontWeight: 800,
                    textTransform: "uppercase",
                    letterSpacing: "0.15em",
                    marginBottom: "0.5rem",
                  }}
                >
                  {b.tag}
                </div>
                <h4
                  style={{
                    fontSize: "1.1rem",
                    color: "#0F172A",
                    fontWeight: 700,
                    marginBottom: "0.75rem",
                    lineHeight: 1.4,
                  }}
                >
                  {b.title}
                </h4>
                <p
                  style={{
                    fontSize: "0.9rem",
                    color: "#64748B",
                    lineHeight: 1.6,
                    marginBottom: "0.5rem",
                  }}
                >
                  {b.desc}
                </p>
                <div style={{ fontSize: "0.78rem", color: "#94A3B8" }}>
                  {b.date}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── HOME PAGE ──────────────────────────────────────── */
export default function Home() {
  const trustHighlights = [
    { value: "23+", label: "Years in specialized sexual wellness care" },
    { value: "5.5L+", label: "Patients treated with confidential support" },
    { value: "Est. 2004", label: "Long-standing clinical presence" },
  ];

  const trustCredentials = [
    {
      icon: GraduationCap,
      eyebrow: "Academic Foundation",
      title: "BHMS Graduate",
      sub: "Govt. Homeopathy Medical College",
    },
    {
      icon: BadgeCheck,
      eyebrow: "Clinical Membership",
      title: "American College of Sexology",
      sub: "Member · Clinical Sexology",
    },
    {
      icon: ShieldCheck,
      eyebrow: "Quality Benchmark",
      title: "ISO Certified (USA)",
      sub: "International Quality Standard",
    },
    {
      icon: Award,
      eyebrow: "Public Recognition",
      title: "World Book of Records",
      sub: "Recognized Achievement",
    },
    {
      icon: Building2,
      eyebrow: "Licensed Practice",
      title: "Govt. Registered Clinic",
      sub: "Bhopal & Mumbai, India",
    },
  ];

  const trustRatings = [
    {
      platform: "Justdial · Kasturba Nagar",
      score: "4.9",
      count: "887+ verified ratings",
    },
    {
      platform: "Justdial · Kasturba Nagar (Gynae)",
      score: "4.6",
      count: "80 ratings · 19 years",
    },
    {
      platform: "Justdial · Arera Colony",
      score: "4.7",
      count: "486 ratings and reviews",
    },
  ];

  return (
    <div>
      <Navigation />

      {/* ── HERO ── */}
      <HeroCarousel />

      {/* ── TRUST BAR ── */}
      <div className="trust-bar">
        <div className="trust-bar-inner">
          <div className="trust-item">
            <span>🏅</span> BHMS Certified · Clinical Sexology
          </div>
          <div
            className="trust-sep"
            style={{
              width: "1px",
              height: "20px",
              background: "rgba(30,64,175,0.1)",
            }}
          />
          <div className="trust-item">
            <span>🇺🇸</span> ISO Certified (USA)
          </div>
          <div
            className="trust-sep"
            style={{
              width: "1px",
              height: "20px",
              background: "rgba(30,64,175,0.1)",
            }}
          />
          <div className="trust-item">
            <span>📖</span> World Book of Records
          </div>
          <div
            className="trust-sep"
            style={{
              width: "1px",
              height: "20px",
              background: "rgba(30,64,175,0.1)",
            }}
          />
          <div className="trust-item">
            <span>🏛️</span> Govt. Registered Clinic
          </div>
          <div
            className="trust-sep"
            style={{
              width: "1px",
              height: "20px",
              background: "rgba(30,64,175,0.1)",
            }}
          />
          <div className="trust-item">
            <span>🔒</span> 100% Confidential Care
          </div>
          <div
            className="trust-sep"
            style={{
              width: "1px",
              height: "20px",
              background: "rgba(30,64,175,0.1)",
            }}
          />
          <div className="trust-item">
            <span>💻</span> Online Consultation Available
          </div>
        </div>
      </div>

      {/* ── WHY CHOOSE US ── */}
      <section
        id="why"
        style={{
          background: "#fff",
          padding: "6.5rem 0",
          borderBottom: "1px solid #E2E8F0",
        }}
      >
        <style>{`
          .why-grid {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 3.5rem;
            align-items: center;
          }
          @media (max-width: 900px) {
            .why-grid { grid-template-columns: 1fr; gap: 3rem; }
          }

          /* Left: Photo Card */
          .why-photo-wrap {
            position: relative;
          }
          .why-photo-card {
            background: #F8FAFC;
            border: 1px solid #E2E8F0;
            border-radius: 20px;
            overflow: hidden;
          }
          .why-photo-card img {
            width: 100%;
            display: block;
            filter: contrast(1.02);
          }
          .why-stats-row {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 1rem;
            margin-top: 1rem;
          }
          .why-stat-pill {
            background: #F8FAFC;
            border: 1px solid #E2E8F0;
            border-radius: 14px;
            padding: 1.25rem 1.5rem;
          }
          .why-stat-val {
            font-family: 'Plus Jakarta Sans', sans-serif;
            font-size: 1.8rem;
            color: #1E40AF;
            line-height: 1;
            font-weight: 800;
            letter-spacing: -0.04em;
          }
          .why-stat-label {
            font-size: 0.72rem;
            font-weight: 700;
            text-transform: uppercase;
            letter-spacing: 0.1em;
            color: #94A3B8;
            margin-top: 0.4rem;
          }

          /* Year badge */
          .why-badge {
            position: absolute;
            top: -1rem;
            right: -1rem;
            background: #1E40AF;
            color: #fff;
            border-radius: 50%;
            width: 120px;
            height: 120px;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            text-align: center;
            box-shadow: 0 8px 24px rgba(30,64,175,0.35);
          }
          .why-badge-num {
            font-family: 'Plus Jakarta Sans', sans-serif;
            font-size: 2rem;
            line-height: 1;
            color: #fff;
            font-weight: 800;
            letter-spacing: -0.04em;
          }
          .why-badge-label {
            font-size: 0.55rem;
            font-weight: 800;
            text-transform: uppercase;
            letter-spacing: 0.1em;
            margin-top: 0.2rem;
            opacity: 0.8;
          }

          /* Right: Content */
          .why-features {
            display: flex;
            flex-direction: column;
            gap: 0;
            border: 1px solid #E2E8F0;
            border-radius: 16px;
            overflow: hidden;
            margin-top: 2.5rem;
          }
          .why-feature-row {
            display: flex;
            align-items: center;
            gap: 1.25rem;
            padding: 1.4rem 1.75rem;
            background: #fff;
            border-bottom: 1px solid #F1F5F9;
            transition: background 0.2s;
          }
          .why-feature-row:last-child { border-bottom: none; }
          .why-feature-row:hover { background: #F8FAFC; }
          .why-feature-icon {
            width: 44px; height: 44px;
            background: #EFF6FF;
            border-radius: 10px;
            display: flex; align-items: center; justify-content: center;
            font-size: 1.2rem;
            flex-shrink: 0;
          }
          .why-feature-title {
            font-size: 0.95rem;
            font-weight: 700;
            color: #0F172A;
          }
          .why-feature-desc {
            font-size: 0.8rem;
            color: #64748B;
            margin-top: 0.15rem;
            line-height: 1.5;
          }
        `}</style>

        <div
          style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 1.5rem" }}
        >
          <div className="why-grid">
            {/* Left: Photo + Stats */}
            <div className="why-photo-wrap">
              <div className="why-photo-card">
                <img
                  src="/images/image copy.png"
                  alt="Dr. Rajesh Manghnani – Clinic"
                />
              </div>
              <div className="why-badge">
                <div className="why-badge-num">23+</div>
                <div className="why-badge-label">
                  Years Of
                  <br />
                  Legacy
                </div>
              </div>
              <div className="why-stats-row">
                <div className="why-stat-pill">
                  <div className="why-stat-val">5.5L+</div>
                  <div className="why-stat-label">Patients Treated</div>
                </div>
                <div className="why-stat-pill">
                  <div className="why-stat-val">4.9★</div>
                  <div className="why-stat-label">Avg. Rating</div>
                </div>
              </div>
            </div>

            {/* Right: Content */}
            <div>
              <span className="overline" style={{ color: "#1E40AF" }}>
                Founded on Trust
              </span>
              <h2
                className="section-title"
                style={{ marginTop: "0.75rem", marginBottom: "1.25rem" }}
              >
                Crafting Pathways To{" "}
                <em style={{ color: "#1E40AF", fontStyle: "italic" }}>
                  Sexual Wellness
                </em>
              </h2>
              <p
                style={{
                  fontSize: "1rem",
                  color: "#64748B",
                  lineHeight: 1.8,
                  marginBottom: 0,
                }}
              >
                Dr. Rajesh Manghnani combines deep clinical knowledge with a
                compassionate, non-judgmental approach — ensuring every patient
                receives the highest standard of evidence-based care.
              </p>

              <div className="why-features">
                {[
                  {
                    icon: "🔬",
                    title: "Specialized Clinical Expertise",
                    desc: "Expert diagnosis using world-class diagnostic protocols.",
                  },
                  {
                    icon: "🔒",
                    title: "100% Confidential Care",
                    desc: "Safe, secure, and private environment for every patient.",
                  },
                  {
                    icon: "📋",
                    title: "Personalized Treatment Plans",
                    desc: "Custom recovery pathways tailored to your medical history.",
                  },
                  {
                    icon: "🌿",
                    title: "Natural Holistic Healing",
                    desc: "Premium German homeopathic medicine with zero side effects.",
                  },
                ].map((f, i) => (
                  <div key={i} className="why-feature-row">
                    <div className="why-feature-icon">{f.icon}</div>
                    <div>
                      <div className="why-feature-title">{f.title}</div>
                      <div className="why-feature-desc">{f.desc}</div>
                    </div>
                  </div>
                ))}
              </div>

              <div style={{ marginTop: "2rem" }}>
                <a
                  href="https://bestsexologistdoctor.com/index.php/about-us/"
                  target="_blank"
                  rel="noopener"
                  className="btn-primary"
                  style={{ height: "52px", padding: "0 2rem" }}
                >
                  Learn More About Our Clinic →
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── EXPERT CARE (Bento Grid V2 - Professional Clinical) ── */}
      <section
        id="services"
        style={{ padding: "6.5rem 0", background: "#F8FAFC" }}
      >
        <style>{`
          .bento-container {
            max-width: 1280px;
            margin: 0 auto;
            padding: 0 1.5rem;
          }
          .bento-header {
            text-align: center;
            margin-bottom: 3.5rem;
          }
          .bento-grid {
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            grid-auto-rows: 240px;
            gap: 1.5rem;
          }
          .bento-card {
            border-radius: 32px;
            padding: 2.5rem;
            display: flex;
            flex-direction: column;
            transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
            background: #FFFFFF;
            border: 1px solid rgba(0,0,0,0.04);
            position: relative;
            z-index: 1;
          }
          .bento-card:hover {
            transform: translateY(-10px);
            box-shadow: 0 30px 60px rgba(30,64,175,0.08);
          }
          .bento-icon-box {
            width: 52px;
            height: 52px;
            border-radius: 14px;
            display: flex;
            align-items: center;
            justify-content: center;
            margin-bottom: 1.5rem;
            transition: all 0.3s;
          }
          .bento-icon-box svg {
            width: 26px;
            height: 26px;
            stroke-width: 1.8px;
          }
          .bento-card h3 {
            font-family: 'Plus Jakarta Sans', sans-serif;
            font-size: 1.25rem;
            font-weight: 800;
            margin-bottom: 0.75rem;
            line-height: 1.2;
            letter-spacing: -0.02em;
          }
          .bento-card p {
            font-size: 0.9rem;
            line-height: 1.5;
            margin-bottom: 1.5rem;
            color: #64748B;
          }
          .bento-link {
            display: inline-flex;
            align-items: center;
            gap: 8px;
            font-size: 0.85rem;
            font-weight: 700;
            color: #1E40AF;
            text-decoration: none;
            margin-top: auto;
            transition: gap 0.2s;
          }
          .bento-card:hover .bento-link { gap: 12px; }

          /* Card Variants */
          .bento-card.featured {
            grid-column: span 2;
            grid-row: span 2;
            background: #1E40AF;
            color: #FFFFFF;
            border: none;
          }
          .bento-card.featured h3 { font-size: 2rem; color: #FFFFFF; }
          .bento-card.featured p { color: rgba(255,255,255,0.8); font-size: 1rem; }
          .bento-card.featured .bento-icon-box { background: rgba(255,255,255,0.15); color: #FFFFFF; }
          .bento-card.featured .bento-link { color: #FFFFFF; border-bottom: 1px solid rgba(255,255,255,0.3); }

          .bento-card.wide { grid-column: span 2; }
          .bento-card.tall { grid-row: span 2; }

          /* Custom Theme Fills (Subtle) */
          .fill-blue { background: #F0F7FF; border-color: #DBEAFE; }
          .fill-purple { background: #F5F3FF; border-color: #EDE9FE; }
          .fill-green { background: #F0FDF4; border-color: #DCFCE7; }
          .fill-orange { background: #FFF7ED; border-color: #FFEDD5; }
          .fill-rose { background: #FFF1F2; border-color: #FFE4E6; }
          .fill-yellow { background: #FEFCE8; border-color: #FEF9C3; }

          @media (max-width: 1024px) {
            .bento-grid { grid-template-columns: repeat(2, 1fr); }
          }
          @media (max-width: 640px) {
            .bento-grid { grid-template-columns: 1fr; grid-auto-rows: auto; }
            .bento-card.featured, .bento-card.wide, .bento-card.tall { grid-column: span 1; grid-row: span 1; }
            .bento-card { min-height: 280px; padding: 2rem; }
          }
        `}</style>

        <div className="bento-container">
          <div className="bento-header">
            <span className="overline" style={{ color: "#1E40AF" }}>
              Our Expertise
            </span>
            <h2 className="section-title" style={{ marginTop: "1rem" }}>
              Expert Care For <br /> Every Condition
            </h2>
          </div>

          <div className="bento-grid">
            {/* 1. Erectile Dysfunction - FEATURED */}
            <div className="bento-card featured">
              <div className="bento-icon-box">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path
                    d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <div style={{ flex: 1 }}>
                <h3>Erectile Dysfunction</h3>
                <p>
                  A holistic treatment approach combining cutting-edge clinical
                  medicine with personalized psychological support to restore
                  your confidence and intimate vitality.
                </p>
              </div>
              <a href="/services/erectile-dysfunction" className="bento-link">
                Start Your Recovery Journey →
              </a>
            </div>

            {/* 2. Premature Ejaculation - WIDE */}
            <div className="bento-card wide fill-purple">
              <div
                className="bento-icon-box"
                style={{ background: "#EDE9FE", color: "#7C3AED" }}
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <circle cx="12" cy="12" r="9" />
                  <polyline
                    points="12 7 12 12 15.5 15.5"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <h3>Premature Ejaculation</h3>
              <p>
                Tailored behavioral and medical strategies designed for
                long-term control and sexual satisfaction.
              </p>
              <a href="/services/premature-ejaculation" className="bento-link">
                Explore Treatments →
              </a>
            </div>

            {/* 3. Infertility - STANDARD */}
            <div className="bento-card fill-green">
              <div
                className="bento-icon-box"
                style={{ background: "#DCFCE7", color: "#059669" }}
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <circle cx="12" cy="8" r="4" />
                  <path d="M12 12v8" />
                  <path d="M9 17h6" />
                  <circle cx="7" cy="20" r="1.5" />
                  <circle cx="17" cy="20" r="1.5" />
                </svg>
              </div>
              <h3>Male Infertility</h3>
              <a href="/services/infertility" className="bento-link">
                Learn More →
              </a>
            </div>

            {/* 4. Female Health - TALL */}
            <div className="bento-card tall fill-orange">
              <div
                className="bento-icon-box"
                style={{ background: "#FFEDD5", color: "#D97706" }}
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                  <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                </svg>
              </div>
              <h3>Female Sexual Wellness</h3>
              <p>
                Specialized care for vaginismus, orgasmic disorders, and
                reproductive health with a compassionate clinical touch.
              </p>
              <a href="/services/female-sexual-problems" className="bento-link">
                View Support Options →
              </a>
            </div>

            {/* 5. Low Libido - STANDARD */}
            <div className="bento-card fill-rose">
              <div
                className="bento-icon-box"
                style={{ background: "#FFE4E6", color: "#E11D48" }}
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path
                    d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <h3>Low Libido & Desire</h3>
              <a href="/services/low-libido" className="bento-link">
                Learn More →
              </a>
            </div>

            {/* 6. Anxiety - WIDE */}
            <div className="bento-card wide fill-yellow">
              <div
                className="bento-icon-box"
                style={{ background: "#FEF9C3", color: "#CA8A04" }}
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path
                    d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <h3>Sexual Performance Anxiety</h3>
              <p>
                Overcome psychological barriers and performance stress with our
                specialized clinical therapy protocols.
              </p>
              <a href="/services/sexual-anxiety" className="bento-link">
                Therapy Overview →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── TRUST & RECOGNITION (Unified Section) ── */}
      <section
        style={{
          background: "#0F172A",
          padding: "6.5rem 0",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Subtle grid texture */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "radial-gradient(rgba(30,64,175,0.08) 1px, transparent 1px)",
            backgroundSize: "32px 32px",
            pointerEvents: "none",
          }}
        />

        <style>{`
          .trust-section-inner { position: relative; z-index: 2; }

          /* Overline & heading on dark */
          .trust-section-inner .overline { color: #3B82F6; }
          .trust-section-inner .section-title { color: #F8FAFC; }

          /* ── CERT GRID ── */
          .cert-grid {
            display: grid;
            grid-template-columns: repeat(5, 1fr);
            gap: 1.25rem;
            margin-top: 2.5rem;
          }
          @media (max-width: 1024px) {
            .cert-grid { grid-template-columns: repeat(3, 1fr); }
          }
          @media (max-width: 640px) {
            .cert-grid { grid-template-columns: repeat(2, 1fr); }
          }

          .cert-card {
            background: rgba(255,255,255,0.03);
            border: 1px solid rgba(255,255,255,0.08);
            border-radius: 16px;
            padding: 2rem 1.5rem;
            text-align: center;
            transition: all 0.3s ease;
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 0.75rem;
          }
          .cert-card:hover {
            background: rgba(59,130,246,0.08);
            border-color: rgba(59,130,246,0.3);
            transform: translateY(-4px);
          }
          .cert-card-icon {
            font-size: 2rem;
            line-height: 1;
          }
          .cert-card-title {
            font-size: 0.9rem;
            font-weight: 700;
            color: #F1F5F9;
            line-height: 1.3;
          }
          .cert-card-sub {
            font-size: 0.72rem;
            color: rgba(148,163,184,0.85);
            line-height: 1.4;
          }

          /* ── DIVIDER ── */
          .trust-divider {
            height: 1px;
            background: rgba(255,255,255,0.06);
            margin: 3.5rem 0;
          }

          /* ── RATINGS GRID ── */
          .ratings-redesign {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 1.25rem;
            margin-top: 2.5rem;
          }
          @media (max-width: 768px) {
            .ratings-redesign { grid-template-columns: 1fr; }
          }

          .rating-redesign-card {
            background: rgba(255,255,255,0.03);
            border: 1px solid rgba(255,255,255,0.08);
            border-radius: 16px;
            padding: 2rem 1.5rem;
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 0.5rem;
            transition: all 0.3s ease;
          }
          .rating-redesign-card:hover {
            background: rgba(59,130,246,0.08);
            border-color: rgba(59,130,246,0.3);
            transform: translateY(-4px);
          }
          .rating-redesign-platform {
            font-size: 0.72rem;
            font-weight: 700;
            text-transform: uppercase;
            letter-spacing: 0.12em;
            color: #3B82F6;
            margin-bottom: 0.5rem;
          }
          .rating-redesign-score {
            font-family: 'Plus Jakarta Sans', sans-serif;
            font-size: 3.5rem;
            color: #F8FAFC;
            line-height: 1;
            font-weight: 800;
            letter-spacing: -0.04em;
          }
          .rating-redesign-stars {
            color: #F59E0B;
            font-size: 1rem;
            letter-spacing: 0.1em;
            margin: 0.25rem 0;
          }
          .rating-redesign-count {
            font-size: 0.78rem;
            color: rgba(148,163,184,0.7);
            font-weight: 500;
          }
        `}</style>

        <div className="container trust-section-inner">
          {/* ── CERTIFICATIONS ── */}
          <div style={{ textAlign: "center" }}>
            <span className="overline">Accreditations &amp; Recognition</span>
            <h2
              className="section-title"
              style={{ marginTop: "0.75rem", marginBottom: 0 }}
            >
              Trusted by Thousands,{" "}
              <em style={{ fontStyle: "italic", color: "#3B82F6" }}>
                Recognized
              </em>{" "}
              by All
            </h2>
          </div>

          <div className="cert-grid">
            {[
              {
                icon: "🎓",
                title: "BHMS Graduate",
                sub: "Govt. Homeopathy Medical College",
              },
              {
                icon: "🇺🇸",
                title: "American College of Sexology",
                sub: "Member · Clinical Sexology",
              },
              {
                icon: "🏅",
                title: "ISO Certified (USA)",
                sub: "International Quality Standard",
              },
              {
                icon: "📖",
                title: "World Book of Records",
                sub: "Recognized Achievement",
              },
              {
                icon: "🏛️",
                title: "Govt. Registered Clinic",
                sub: "Bhopal &amp; Mumbai, India",
              },
            ].map((c, i) => (
              <div key={i} className="cert-card">
                <div className="cert-card-icon">{c.icon}</div>
                <div className="cert-card-title">{c.title}</div>
                <div className="cert-card-sub">{c.sub}</div>
              </div>
            ))}
          </div>

          {/* ── DIVIDER ── */}
          <div className="trust-divider" />

          {/* ── RATINGS ── */}
          <div style={{ textAlign: "center" }}>
            <span className="overline">Platform Ratings</span>
            <h2
              className="section-title"
              style={{ marginTop: "0.75rem", marginBottom: 0 }}
            >
              Top Rated Across{" "}
              <em style={{ fontStyle: "italic", color: "#3B82F6" }}>
                All Platforms
              </em>
            </h2>
          </div>

          <div className="ratings-redesign">
            {[
              {
                platform: "Justdial · Kasturba Nagar",
                score: "4.9",
                count: "887+ Verified Ratings",
              },
              {
                platform: "Justdial · Kasturba Nagar (Gynae)",
                score: "4.6",
                count: "80 Ratings · 19 Years",
              },
              {
                platform: "Justdial · Arera Colony",
                score: "4.7",
                count: "486 Ratings &amp; Reviews",
              },
            ].map((r, i) => (
              <div key={i} className="rating-redesign-card">
                <div className="rating-redesign-platform">{r.platform}</div>
                <div className="rating-redesign-score">{r.score}</div>
                <div className="rating-redesign-stars">★★★★★</div>
                <div className="rating-redesign-count">{r.count}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ABOUT DOCTOR (Clean Redesign) ── */}
      <section
        id="about"
        style={{ background: "#F8FAFC", padding: "6.5rem 0" }}
      >
        <style>{`
          .abt-grid {
            display: grid;
            grid-template-columns: 1.1fr 1fr;
            gap: 3.5rem;
            align-items: center;
          }
          @media (max-width: 1024px) {
            .abt-grid { grid-template-columns: 1fr; gap: 3rem; }
          }
          
          .abt-desc {
            font-size: 1.05rem;
            color: #64748B;
            line-height: 1.8;
            margin: 1rem 0 1.5rem;
          }
          .abt-list {
            list-style: none;
            padding: 0;
            margin: 0 0 2rem 0;
            display: flex;
            flex-direction: column;
            gap: 1rem;
          }
          .abt-list li {
            display: flex;
            align-items: flex-start;
            gap: 1rem;
            font-size: 0.95rem;
            color: #0F172A;
            line-height: 1.5;
          }
          .abt-list-icon {
            width: 24px;
            height: 24px;
            background: #EFF6FF;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            color: #1E40AF;
            font-size: 0.75rem;
            flex-shrink: 0;
            margin-top: 2px;
          }

          .abt-stats {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 1rem;
            margin-bottom: 2.5rem;
          }
          .abt-stat-card {
            background: #fff;
            border: 1px solid #E2E8F0;
            border-radius: 12px;
            padding: 1.5rem;
            text-align: left;
          }
          .abt-stat-val {
            font-family: 'Plus Jakarta Sans', sans-serif;
            font-size: 2rem;
            color: #1E40AF;
            line-height: 1;
            font-weight: 800;
            letter-spacing: -0.04em;
          }
          .abt-stat-label {
            font-size: 0.75rem;
            font-weight: 700;
            text-transform: uppercase;
            letter-spacing: 0.05em;
            color: #64748B;
            margin-top: 0.6rem;
          }
          
          .abt-img-wrap {
            position: relative;
            border-radius: 24px;
            overflow: hidden;
            border: 1px solid #E2E8F0;
            box-shadow: 0 20px 60px rgba(15, 23, 42, 0.06);
          }
          .abt-img-wrap img {
            width: 100%;
            display: block;
            filter: contrast(1.02);
          }
          .abt-badge-float {
            position: absolute;
            bottom: 2rem;
            left: 2rem;
            background: rgba(255, 255, 255, 0.95);
            backdrop-filter: blur(8px);
            padding: 0.75rem 1.25rem;
            border-radius: 50px;
            box-shadow: 0 10px 30px rgba(0,0,0,0.1);
            font-size: 0.8rem;
            font-weight: 700;
            color: #0F172A;
            display: flex;
            align-items: center;
            gap: 0.5rem;
            border: 1px solid rgba(255,255,255,0.4);
          }
        `}</style>
        <div
          style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 1.5rem" }}
        >
          <div className="abt-grid">
            {/* Content */}
            <div>
              <span className="overline" style={{ color: "#1E40AF" }}>
                About The Doctor
              </span>
              <h2
                className="section-title"
                style={{ marginTop: "0.75rem", marginBottom: "0.5rem" }}
              >
                Dr. Rajesh Manghnani
              </h2>
              <div
                style={{
                  fontSize: "0.85rem",
                  fontWeight: 700,
                  color: "#1E40AF",
                  textTransform: "uppercase",
                  letterSpacing: "0.05em",
                }}
              >
                Senior Consultant · Dr. G.D. Memorial Clinic · Bhopal
              </div>

              <p className="abt-desc">
                Dr. Rajesh Manghnani is one of India&apos;s most renowned and
                experienced sexologists with 23+ years of specialized practice.
                His patient-first philosophy — rooted in trust, clinical
                discipline, and holistic care — has helped over 5,50,000
                patients reclaim confidence and sexual wellness. A member of the
                American College of Sexology, Dr. Rajesh combines evidence-based
                medicine with premium homeopathic German medicines for highly
                effective treatments with zero disadvantages.
              </p>

              <ul className="abt-list">
                {[
                  "23+ years of specialised sexology practice with proven results",
                  "5,50,000+ consultations managed with confidence and care",
                  "BHMS, Clinical Sexology — Govt. Homeopathy Medical College",
                  "Free diet charts, exercise & lifestyle guidance with every plan",
                  "Strict patient confidentiality maintained at all times",
                ].map((item, i) => (
                  <li key={i}>
                    <div className="abt-list-icon">✓</div>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <div className="abt-stats">
                <div className="abt-stat-card">
                  <div className="abt-stat-val">5.5L+</div>
                  <div className="abt-stat-label">Patients Treated</div>
                </div>
                <div className="abt-stat-card">
                  <div className="abt-stat-val">23 Yrs</div>
                  <div className="abt-stat-label">Of Experience</div>
                </div>
                <div className="abt-stat-card">
                  <div className="abt-stat-val">World</div>
                  <div className="abt-stat-label">Book of Records</div>
                </div>
                <div className="abt-stat-card">
                  <div className="abt-stat-val">ISO</div>
                  <div className="abt-stat-label">Certified (USA)</div>
                </div>
              </div>

              <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
                <a
                  href="https://bestsexologistdoctor.com/index.php/about-us/"
                  className="btn-primary"
                  target="_blank"
                  rel="noopener"
                  style={{ height: "52px", padding: "0 2rem" }}
                >
                  About Dr. Rajesh Manghnani
                </a>
                <a
                  href="https://bestsexologistdoctor.com/index.php/payment/"
                  className="btn-secondary"
                  target="_blank"
                  rel="noopener"
                  style={{ height: "52px", padding: "0 2rem" }}
                >
                  Book Appointment
                </a>
              </div>
            </div>

            {/* Image */}
            <div>
              <div className="abt-img-wrap">
                <img
                  src="/images/image.png"
                  alt="Dr. Rajesh Manghnani – Award-Winning Sexologist"
                />
                <div className="abt-badge-float">
                  <span style={{ fontSize: "1.2rem" }}>🏆</span> Best Sexologist
                  in Bhopal · Est. 2004
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── VOICES OF RESTORATION (Premium Redesign) ── */}
      {/* ── VOICES OF RESTORATION (Booking Style Redesign) ── */}
      <section
        id="testimonials"
        className="rv-section"
        style={{ background: "#F8FAFC", padding: "6rem 0" }}
      >
        <style>{`
          .rv-container {
            max-width: 1200px;
            margin: 0 auto;
            padding: 3rem;
            background: #fff;
            border: 1px solid #E2E8F0;
            border-radius: 16px;
            font-family: 'Inter', sans-serif;
            box-shadow: 0 4px 20px rgba(0,0,0,0.02);
          }
          
          .rv-header-row {
            display: flex;
            align-items: flex-start;
            gap: 4rem;
            margin-bottom: 2rem;
          }
          
          .rv-overall {
            display: flex;
            flex-direction: column;
            align-items: center;
            min-width: 120px;
          }
          .rv-overall-score {
            font-size: 3.5rem;
            font-weight: 800;
            color: #0F172A;
            line-height: 1;
            margin-bottom: 0.5rem;
          }
          .rv-overall-stars {
            display: flex;
            gap: 2px;
            margin-bottom: 0.5rem;
          }
          .rv-overall-stars svg {
            width: 18px;
            height: 18px;
            fill: #1E40AF;
          }
          .rv-overall-count {
            font-size: 0.85rem;
            color: #64748B;
          }

          .rv-bars-container {
            flex: 1;
            display: flex;
            flex-direction: column;
            gap: 10px;
          }
          .rv-bar-row {
            display: flex;
            align-items: center;
            gap: 12px;
          }
          .rv-bar-track {
            flex: 1;
            height: 6px;
            background: #F1F5F9;
            border-radius: 4px;
            overflow: hidden;
          }
          .rv-bar-fill {
            height: 100%;
            background: #1E40AF;
            border-radius: 4px;
          }
          .rv-bar-label {
            font-size: 0.85rem;
            color: #64748B;
            min-width: 95px;
            text-align: left;
            display: flex;
            justify-content: space-between;
          }
          .rv-bar-label span:first-child {
            font-weight: 700;
            color: #0F172A;
            margin-right: 8px;
          }

          .rv-categories {
            display: flex;
            flex-wrap: wrap;
            gap: 12px;
            margin-bottom: 3rem;
          }
          .rv-cat-badge {
            display: flex;
            align-items: center;
            gap: 8px;
            padding: 8px 16px;
            border: 1px solid #E2E8F0;
            border-radius: 8px;
            font-size: 0.95rem;
            background: #fff;
          }
          .rv-cat-score {
            font-weight: 700;
            color: #0F172A;
          }
          .rv-cat-score.high {
            color: #16A34A; /* Green for high scores */
          }
          .rv-cat-name {
            color: #475569;
          }

          .rv-list {
            display: flex;
            flex-direction: column;
          }
          .rv-item {
            padding: 2rem 0;
            border-top: 1px solid #E2E8F0;
          }
          
          .rv-item-header {
            display: flex;
            justify-content: space-between;
            align-items: flex-start;
            margin-bottom: 1rem;
          }
          .rv-user-info {
            display: flex;
            align-items: center;
            gap: 12px;
          }
          .rv-avatar {
            width: 48px;
            height: 48px;
            border-radius: 50%;
            object-fit: cover;
          }
          .rv-avatar-fallback {
            width: 48px;
            height: 48px;
            border-radius: 50%;
            background: #EFF6FF;
            color: #1E40AF;
            display: flex;
            align-items: center;
            justify-content: center;
            font-weight: 700;
            font-size: 1.1rem;
          }
          .rv-user-name {
            font-weight: 800;
            color: #0F172A;
            font-size: 1.05rem;
            display: flex;
            align-items: center;
            gap: 8px;
          }
          .rv-user-time {
            font-weight: 400;
            font-size: 0.85rem;
            color: #94A3B8;
          }
          
          .rv-item-score {
            display: flex;
            align-items: center;
            gap: 8px;
          }
          .rv-item-score-num {
            font-weight: 800;
            color: #0F172A;
            font-size: 1.05rem;
          }
          
          .rv-item-text {
            font-size: 1rem;
            color: #334155;
            line-height: 1.6;
            margin-bottom: 1.25rem;
          }
          
          .rv-photos {
            display: flex;
            gap: 12px;
            flex-wrap: wrap;
          }
          .rv-photo {
            width: 80px;
            height: 80px;
            border-radius: 8px;
            object-fit: cover;
            border: 1px solid #E2E8F0;
          }

          .rv-footer-link {
            display: inline-flex;
            align-items: center;
            gap: 4px;
            margin-top: 1.5rem;
            font-size: 1rem;
            font-weight: 700;
            color: #1E40AF;
            text-decoration: none;
          }
          .rv-footer-link:hover {
            text-decoration: underline;
          }

          @media (max-width: 768px) {
            .rv-section {
              padding: 4rem 0 !important;
            }
            .rv-header-row {
              flex-direction: column;
              gap: 1.5rem;
              margin-bottom: 1.5rem;
            }
            .rv-container {
              padding: 1.25rem;
              border-radius: 14px;
            }
            .rv-overall {
              align-items: flex-start;
            }
            .rv-overall-score {
              font-size: 2.7rem;
            }
            .rv-bars-container {
              width: 100%;
            }
            .rv-bar-label {
              min-width: 88px;
              font-size: 0.8rem;
            }
            .rv-categories {
              margin-bottom: 2rem;
              gap: 0.6rem;
            }
            .rv-cat-badge {
              width: 100%;
              justify-content: space-between;
              font-size: 0.88rem;
              padding: 0.6rem 0.75rem;
            }
            .rv-item {
              padding: 1.25rem 0;
            }
            .rv-item-header {
              flex-direction: column;
              gap: 0.75rem;
              margin-bottom: 0.75rem;
            }
            .rv-user-info {
              width: 100%;
            }
            .rv-user-name {
              flex-direction: column;
              align-items: flex-start;
              gap: 0.15rem;
              font-size: 0.98rem;
            }
            .rv-item-score {
              gap: 0.45rem;
            }
            .rv-item-score-num {
              font-size: 0.95rem;
            }
            .rv-overall-stars svg {
              width: 15px;
              height: 15px;
            }
            .rv-item-text {
              font-size: 0.93rem;
              line-height: 1.7;
              margin-bottom: 1rem;
            }
            .rv-photo {
              width: 70px;
              height: 70px;
            }
            .rv-footer-link {
              margin-top: 1rem;
              font-size: 0.92rem;
            }
          }

          @media (max-width: 480px) {
            .rv-section {
              padding: 3.25rem 0 !important;
            }
            .rv-container {
              padding: 1rem;
            }
            .rv-overall-score {
              font-size: 2.3rem;
            }
            .rv-bar-row {
              gap: 8px;
            }
            .rv-bar-label {
              min-width: 74px;
              font-size: 0.74rem;
            }
            .rv-user-time {
              font-size: 0.76rem;
            }
            .rv-photo {
              width: 62px;
              height: 62px;
            }
          }
        `}</style>

        <div className="container">
          <div style={{ textAlign: "center", marginBottom: "3rem" }}>
            <span className="overline" style={{ color: "#1E40AF" }}>
              Clinical Impact
            </span>
            <h2 className="section-title" style={{ marginTop: "0.5rem" }}>
              Voices Of{" "}
              <em style={{ color: "#1E40AF", fontStyle: "italic" }}>
                Restoration
              </em>
            </h2>
          </div>

          <div className="rv-container">
            {/* Header / Bars */}
            <div className="rv-header-row">
              <div className="rv-overall">
                <div className="rv-overall-score">4.9</div>
                <div className="rv-overall-stars">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <svg key={s} viewBox="0 0 18 17">
                      <polygon points="9,1 11.5,6.5 17.5,7.3 13,11.6 14.3,17.5 9,14.5 3.7,17.5 5,11.6 0.5,7.3 6.5,6.5" />
                    </svg>
                  ))}
                </div>
                <div className="rv-overall-count">5.5L ratings</div>
              </div>

              <div className="rv-bars-container">
                {[
                  { s: "5.0", p: 78, count: "4.2L reviews" },
                  { s: "4.0", p: 14, count: "77K reviews" },
                  { s: "3.0", p: 5, count: "27K reviews" },
                  { s: "2.0", p: 2, count: "11K reviews" },
                  { s: "1.0", p: 1, count: "5K reviews" },
                ].map((row, i) => (
                  <div key={i} className="rv-bar-row">
                    <div className="rv-bar-track">
                      <div
                        className="rv-bar-fill"
                        style={{ width: `${row.p}%` }}
                      ></div>
                    </div>
                    <div className="rv-bar-label">
                      <span>{row.s}</span>
                      <span>{row.count}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Categories */}
            <div className="rv-categories">
              {[
                { n: "Overall Care", s: "4.9", high: true },
                { n: "Explanation", s: "4.8", high: true },
                { n: "Treatment", s: "4.9", high: true },
                { n: "Diet & Guidance", s: "4.7", high: true },
                { n: "Approachability", s: "4.8", high: false },
              ].map((cat, i) => (
                <div key={i} className="rv-cat-badge">
                  <span className={`rv-cat-score ${cat.high ? "high" : ""}`}>
                    {cat.s}
                  </span>
                  <span className="rv-cat-name">{cat.n}</span>
                </div>
              ))}
            </div>

            {/* Reviews List */}
            <div className="rv-list">
              {[
                {
                  name: "Rajesh K.",
                  time: "4 months ago",
                  avatar:
                    "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop&q=80",
                  score: "5.0",
                  text: "I was suffering from erectile dysfunction with Diabetes Type 2 for a long time. Very depressed — but Dr. Rajesh gave me all solutions to my multiple issues. Life changing! The way he explains the medical and psychological overlap is what gave me the confidence to follow the treatment.",
                  photos: [
                    "https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=200&auto=format&fit=crop&q=80",
                    "https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?w=200&auto=format&fit=crop&q=80",
                    "https://images.unsplash.com/photo-1585435557343-3b092031a831?w=200&auto=format&fit=crop&q=80",
                  ],
                },
                {
                  name: "Santosh J.",
                  time: "6 months ago",
                  avatar:
                    "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&auto=format&fit=crop&q=80",
                  score: "5.0",
                  text: "Consulted for premature ejaculation and precum. His medicine and treatment did wonders for me. His YouTube lectures are very enlightening. Highly recommend for his logical approach to medicine.",
                  photos: [],
                },
                {
                  name: "Anil M.",
                  time: "8 months ago",
                  avatar: null,
                  initial: "AM",
                  score: "4.8",
                  text: "Knowledgeable, polite, and caring. Many patients recover from chronic illnesses after a few months of treatment. The free diet chart and exercise guidance is a bonus.",
                  photos: [],
                },
              ].map((rv, i) => (
                <div key={i} className="rv-item">
                  <div className="rv-item-header">
                    <div className="rv-user-info">
                      {rv.avatar ? (
                        <img
                          src={rv.avatar}
                          alt={rv.name}
                          className="rv-avatar"
                        />
                      ) : (
                        <div className="rv-avatar-fallback">{rv.initial}</div>
                      )}
                      <div className="rv-user-name">
                        {rv.name}{" "}
                        <span className="rv-user-time">{rv.time}</span>
                      </div>
                    </div>
                    <div className="rv-item-score">
                      <span className="rv-item-score-num">{rv.score}</span>
                      <div className="rv-overall-stars">
                        {[1, 2, 3, 4, 5].map((s) => (
                          <svg key={s} viewBox="0 0 18 17">
                            <polygon points="9,1 11.5,6.5 17.5,7.3 13,11.6 14.3,17.5 9,14.5 3.7,17.5 5,11.6 0.5,7.3 6.5,6.5" />
                          </svg>
                        ))}
                      </div>
                    </div>
                  </div>
                  <p className="rv-item-text">{rv.text}</p>
                  {rv.photos && rv.photos.length > 0 && (
                    <div className="rv-photos">
                      {rv.photos.map((img, idx) => (
                        <img
                          key={idx}
                          src={img}
                          alt="Patient result"
                          className="rv-photo"
                        />
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>

            <a
              href="https://bestsexologistdoctor.com/index.php/testimonials-best-sexologist-in-bhopal/"
              className="rv-footer-link"
              target="_blank"
              rel="noopener"
            >
              Read all reviews
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="6 9 12 15 18 9"></polyline>
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* ── KNOWLEDGE CENTER ── */}
      <KnowledgeCenter />

      {/* ── CTA ── */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-inner">
            <h2
              style={{
                fontSize: "2.8rem",
                fontFamily: "'Plus Jakarta Sans'",
                fontWeight: 800,
                letterSpacing: "-0.04em",
                marginBottom: "1.5rem",
              }}
            >
              Ready to Regain Your Confidence?
            </h2>
            <p
              style={{
                fontSize: "1.1rem",
                opacity: 0.9,
                marginBottom: "2.5rem",
              }}
            >
              Book a confidential consultation with Dr. Rajesh Manghnani today.
              Online and in-person appointments available across India — Mon to
              Sat, 9 AM to 9 PM.
            </p>
            <div className="cta-buttons">
              <a
                href="https://bestsexologistdoctor.com/index.php/payment/"
                className="btn-white"
                target="_blank"
                rel="noopener"
              >
                Book Appointment Online
              </a>
              <a href="tel:+919893880001" className="btn-ghost">
                Call: +91 9893880001
              </a>
              <a
                href="https://wa.me/919936604444"
                className="btn-whatsapp"
                target="_blank"
                rel="noopener"
              >
                💬 WhatsApp Now
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <FAQSection />

      {/* ── LOCATIONS ── */}
      <section className="locations" id="locations">
        <div className="container">
          <p className="overline">Visit Us</p>
          <h2 className="section-title">Clinic Locations</h2>
          <div className="loc-single">
            <div className="loc-content">
              <div className="loc-icon">🏥</div>
              <h3 className="loc-city">Main Clinic (Bhopal)</h3>
              <p className="loc-brand">DR RAJESH&apos;S SEXOLOGY CLINIC</p>

              <div className="loc-detail">
                <strong>Address:</strong>
                <p>
                  Shop No. 1, S.K. Plaza, Near Chetak Bridge, Govindpura,
                  Bhopal, Madhya Pradesh 462023
                </p>
              </div>

              <div className="loc-detail">
                <strong>Consultation Hours:</strong>
                <p>Monday - Saturday: 11:00 AM - 8:00 PM</p>
                <p className="loc-tag">Prior Appointments Recommended</p>
              </div>

              <div className="loc-actions">
                <a href="tel:+919893880001" className="btn-primary">
                  Call +91 98938 80001
                </a>
                <a href="https://wa.me/919936604444" className="btn-secondary">
                  WhatsApp Clinic
                </a>
              </div>
            </div>

            <div className="loc-map">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3665.8117967965415!2d77.43821677532057!3d23.23229707902492!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x397c37e912d09cf3%3A0x55bf79788220dcae!2sDR%20RAJESH'S%20SEXOLOGY%20CLINIC-Best%20Sexologist%20Doctor%20In%20Bhopal!5e0!3m2!1sen!2sin!4v1713372605481!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
