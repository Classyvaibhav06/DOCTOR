"use client";
import { useState, useEffect, useCallback, useRef } from "react";
import { Navigation } from "@/components/Navigation";
import JsonLd, { generateFAQSchema } from "@/components/JsonLd";
import Image from "next/image";

/* ─── HERO CAROUSEL ─────────────────────────────────── */
function HeroCarousel() {
  const slides = [
    { src: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1200&q=80", alt: "Modern Luxury Clinic Interior" },
    { src: "https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&w=1200&q=80", alt: "Expert Doctor Consultation" },
    { src: "https://images.unsplash.com/photo-1638202993928-7267aad84c31?auto=format&fit=crop&w=1200&q=80", alt: "Advanced Medical Technology" },
    { src: "https://images.unsplash.com/photo-1581594693702-fbdc51b2763b?auto=format&fit=crop&w=1200&q=80", alt: "Professional Healthcare Environment" },
  ];

  const [cur, setCur] = useState(0);
  const DURATION = 5000;

  const next = useCallback(() => setCur(c => (c + 1) % slides.length), [slides.length]);

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
          font-family: 'DM Serif Display', serif;
          font-weight: 400; line-height: 1.08;
          letter-spacing: -0.02em; color: #0F172A; margin: 0;
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

      <section className="hero-section">
        <div className="hero-inner">
          <div className="hero-flex">
            
            {/* Left Content */}
            <div className="hero-left-col">
              <div style={{ display: "inline-flex", alignItems: "center", gap: "0.6rem" }}>
                <span style={{ display: "block", height: "1px", width: "32px", background: "#1E40AF" }}></span>
                <p style={{ fontSize: "0.72rem", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: "#1E40AF", margin: 0 }}>
                  #1 Sexologist in Bhopal · Justdial 4.9/5
                </p>
              </div>

              <h1 className="hero-h1">
                India&apos;s Most <em style={{ fontStyle: "italic", color: "#1E40AF", fontFamily: "'DM Serif Display', serif" }}>Trusted</em><br />
                Sexologist &amp; Wellness Expert
              </h1>

              <p style={{ fontSize: "1rem", color: "#64748B", lineHeight: 1.8, maxWidth: "600px", margin: 0, fontWeight: 400 }}>
                Dr. Rajesh Manghnani brings 23+ years of specialized expertise in sexual health,
                combining evidence-based medicine with holistic healing. Personalized, confidential
                care for men and women across India.
              </p>

              {/* CTA Buttons */}
              <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "0.75rem", paddingTop: "0.25rem" }}>
                <a
                  href="https://bestsexologistdoctor.com/index.php/payment/"
                  target="_blank"
                  rel="noopener"
                  style={{
                    display: "inline-flex", alignItems: "center", justifyContent: "center",
                    borderRadius: "8px", fontSize: "0.86rem", fontWeight: 700,
                    letterSpacing: "0.02em", textDecoration: "none",
                    background: "#1E40AF", color: "#fff",
                    padding: "0.75rem 1.6rem", height: "48px",
                    boxShadow: "0 4px 16px rgba(30,64,175,0.28)",
                  }}
                >
                  Book Appointment Online
                </a>
                
                <a
                  href="tel:+919893880001"
                  style={{
                    display: "inline-flex", alignItems: "center", justifyContent: "center",
                    borderRadius: "8px", fontSize: "0.86rem", fontWeight: 600,
                    textDecoration: "none", border: "1.5px solid #DBEAFE",
                    background: "#fff", color: "#0F172A", padding: "0.75rem 1.4rem", height: "48px",
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
                      paddingRight: i < 2 ? "1.5rem" : "0"
                    }}
                  >
                    <span style={{ fontSize: "1.9rem", fontFamily: "'DM Serif Display', serif", fontWeight: 400, color: "#1E40AF", lineHeight: 1 }}>{s.val}</span>
                    <span style={{ fontSize: "0.72rem", fontWeight: 700, color: "#64748B", marginTop: "0.4rem", letterSpacing: "0.02em" }}>{s.label}</span>
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
                      position: "absolute", inset: 0,
                      opacity: i === cur ? 1 : 0,
                      transition: "opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1)",
                      zIndex: i === cur ? 2 : 1,
                    }}
                  >
                    <img
                      src={s.src}
                      alt={s.alt}
                      style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center" }}
                    />
                  </div>
                ))}

                {/* Dots */}
                <div style={{ position: "absolute", bottom: "1.25rem", left: 0, width: "100%", display: "flex", justifyContent: "center", gap: "0.5rem", zIndex: 3 }}>
                  {slides.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setCur(i)}
                      style={{
                        width: i === cur ? "24px" : "8px", height: "8px", borderRadius: "4px",
                        background: i === cur ? "#1E40AF" : "rgba(255,255,255,0.8)",
                        border: "none", cursor: "pointer", outline: "none",
                        transition: "all 0.3s", padding: 0,
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
    { q: "Is my consultation completely confidential?", a: "Dr. G.D. Memorial Clinic maintains the highest standards of privacy. From discreet billing and private consultation rooms to encrypted records, your confidentiality is our absolute priority." },
    { q: "Are treatments natural with no side effects?", a: "We specialized in integrative medicine using premium German homeopathic protocols. Our treatments are designed to provide effective, long-term recovery with zero synthetic disadvantages." },
    { q: "Can I consult online from outside Bhopal?", a: "Yes. We provide secure video and tele-consultations for patients across India and internationally. Our digital platform is private, secure, and available 9 AM – 9 PM." },
    { q: "What should I expect in my first visit?", a: "Your first visit includes a comprehensive clinical assessment, lifestyle mapping, and a personalized diagnostic review with Dr. Rajesh to create your custom recovery roadmap." },
  ];

  const [open, setOpen] = useState(0);
  const faqSchema = generateFAQSchema(faqs);

  return (
    <section id="faq" style={{ background: "#FFFFFF", padding: "10rem 0" }}>
      <JsonLd data={faqSchema} />
      <style>{`
        .faq-split {
          display: grid;
          grid-template-columns: 1.1fr 1fr;
          gap: 6rem;
          align-items: start;
        }
        @media (max-width: 1024px) {
          .faq-split {
            grid-template-columns: 1fr;
            gap: 4rem;
          }
        }
      `}</style>
      <div className="container">
        <div className="faq-split">
          
          {/* Left: Content & Branding */}
          <div>
            <span className="overline" style={{ color: "#1E40AF" }}>Frequently Asked</span>
            <h2 className="section-title" style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)", color: "#0F172A", margin: "1rem 0" }}>
              Clarity & <em style={{ color: "#1E40AF", fontStyle: "italic" }}>Care</em>.
            </h2>
            <p style={{ color: "#64748B", fontSize: "1.1rem", lineHeight: 1.8, marginBottom: "3rem" }}>
              We believe in transparent healthcare. Here are answers to common questions about our clinical approach and patient journey.
            </p>
            
            <div style={{ background: "#F8FAFC", padding: "2.5rem", borderRadius: "32px", border: "1px solid #E2E8F0" }}>
              <div style={{ fontSize: "2rem", marginBottom: "1rem" }}>🩺</div>
              <h4 style={{ fontSize: "1.2rem", fontWeight: 700, color: "#0F172A", marginBottom: "0.5rem" }}>Still Have Questions?</h4>
              <p style={{ fontSize: "0.95rem", color: "#64748B", lineHeight: 1.6, marginBottom: "2rem" }}>Our medical coordinators are available for a private chat to address any specific concerns.</p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem" }}>
                <a href="tel:+919893880001" className="btn-primary" style={{ padding: "0 1.5rem", fontSize: "0.78rem" }}>Call Now</a>
                <a href="https://wa.me/919936604444" className="btn-secondary" style={{ padding: "0 1.5rem", fontSize: "0.78rem" }}>WhatsApp Advisor</a>
              </div>
            </div>
          </div>

          {/* Right: Modern Accordion */}
          <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
            {faqs.map((f, i) => (
              <div 
                key={i} 
                style={{ 
                  background: open === i ? "#F1F5F9" : "transparent",
                  border: "1px solid",
                  borderColor: open === i ? "#BFDBFE" : "#E2E8F0",
                  borderRadius: "20px", overflow: "hidden", transition: "all 0.3s"
                }}
              >
                <button 
                  onClick={() => setOpen(open === i ? -1 : i)}
                  style={{ 
                    width: "100%", padding: "1.75rem 2.5rem", display: "flex", alignItems: "center", justifyContent: "space-between",
                    background: "none", border: "none", cursor: "pointer", textAlign: "left"
                  }}
                >
                  <span style={{ fontSize: "1.1rem", fontWeight: 700, color: "#0F172A", paddingRight: "1.5rem" }}>{f.q}</span>
                  <span style={{ fontSize: "1.2rem", color: "#1E40AF", transition: "transform 0.3s", transform: open === i ? "rotate(180deg)" : "rotate(0)" }}>
                    {open === i ? "−" : "+"}
                  </span>
                </button>
                <div style={{ 
                  maxHeight: open === i ? "300px" : "0", 
                  overflow: "hidden", transition: "all 0.4s cubic-bezier(0.16, 1, 0.3, 1)"
                }}>
                  <div style={{ padding: "0 2.5rem 2.5rem", color: "#64748B", lineHeight: 1.8, fontSize: "1rem" }}>
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
    { title: "Psychological Barriers vs. Physiological Causes", date: "Oct 12, 2025", desc: "A clinical breakdown of how neuro-stress impacts intimate wellness and practical recovery steps.", tag: "Clinical Insight" },
    { title: "The Science of German Homeopathic Dilutions", date: "Sep 28, 2025", desc: "Exploring the pharmacological efficacy of biochemic salts in treating chronic performance anxiety.", tag: "Science" },
    { title: "Integrative Wellness: Diet & Restoration", date: "Aug 15, 2025", desc: "Nutritional protocols designed to support hormonal balance and long-term vitality naturally.", tag: "Wellness" },
  ];
  const videos = [
    { id: "GROST5WDZQk", title: "Hypersensitive Glans Treatment" },
    { id: "6IsSe9Q5SFs", title: "Phimosis Treatment without Surgery" },
    { id: "iyGTDYFzFBY", title: "5 Best Balance Medicines" },
    { id: "VTm_KICkLKM", title: "Top 5 Phimosis Medicines" },
  ];

  return (
    <section id="media" style={{ background: "#F8FAFC", padding: "10rem 0" }}>
      <style>{`
        .knowledge-grid {
          display: grid; 
          grid-template-columns: 1fr 400px; 
          gap: 4rem;
        }
        @media (max-width: 1024px) {
          .knowledge-grid {
            grid-template-columns: 1fr;
            gap: 3rem;
          }
        }
      `}</style>
      <div className="container">
        <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "flex-end", gap: "2rem", marginBottom: "5rem" }}>
          <div style={{ maxWidth: "600px" }}>
            <span className="overline" style={{ color: "#1E40AF" }}>Insight & Education</span>
            <h2 className="section-title" style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)", color: "#0F172A", margin: "1rem 0" }}>
              Medical <em style={{ color: "#1E40AF", fontStyle: "italic" }}>Intelligence</em>.
            </h2>
            <p style={{ color: "#64748B", fontSize: "1.1rem", lineHeight: 1.8 }}>
              Empowering patients with clear, scientific, and compassionate information about sexual health and modern treatment options.
            </p>
          </div>
          <a href="/media" className="btn-secondary" style={{ height: "56px", padding: "0 2.5rem" }}>
            Explore Full Archives →
          </a>
        </div>

        <div className="knowledge-grid">
          {/* Main Stage: Featured Video */}
          <div>
            <div style={{ background: "#000", borderRadius: "32px", overflow: "hidden", position: "relative", aspectRatio: "16/9", boxShadow: "0 40px 80px rgba(30,64,175,0.15)" }}>
              <iframe
                src={`https://www.youtube.com/embed/${videos[0].id}?rel=0&modestbranding=1`}
                style={{ width: "100%", height: "100%", border: "none" }}
                allowFullScreen
              />
            </div>
            <div style={{ marginTop: "2.5rem" }}>
              <div style={{ display: "inline-block", background: "#EFF6FF", color: "#1E40AF", fontWeight: 700, fontSize: "0.65rem", padding: "0.4rem 1.2rem", borderRadius: "50px", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: "1rem" }}>
                Featured Clinic Lecture
              </div>
              <h3 className="section-title" style={{ fontSize: "1.8rem", color: "#0F172A", marginBottom: "1rem" }}>{videos[0].title}</h3>
              <p style={{ color: "#64748B", lineHeight: 1.8, fontSize: "1.05rem" }}>
                Dr. Rajesh Manghnani explains the clinical protocols for non-surgical management of hypersensitivity and the role of integrative homeopathy in restoring confidence.
              </p>
            </div>
          </div>

          {/* Sidebar: Latest Insights */}
          <div style={{ display: "flex", flexDirection: "column", gap: "2.5rem" }}>
            <h3 style={{ fontSize: "1.2rem", fontWeight: 800, color: "#0F172A", borderBottom: "2px solid #1E40AF", paddingBottom: "0.75rem", width: "fit-content" }}>Latest Insights</h3>
            {blogs.map((b, i) => (
              <div 
                key={i} 
                className="insight-card" 
                style={{ cursor: "pointer", transition: "all 0.3s" }}
                onMouseEnter={(e) => { e.currentTarget.style.transform = "translateX(10px)"; }}
                onMouseLeave={(e) => { e.currentTarget.style.transform = "translateX(0)"; }}
              >
                <div style={{ fontSize: "0.65rem", color: "#1E40AF", fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.15em", marginBottom: "0.5rem" }}>{b.tag}</div>
                <h4 style={{ fontSize: "1.1rem", color: "#0F172A", fontWeight: 700, marginBottom: "0.75rem", lineHeight: 1.4 }}>{b.title}</h4>
                <p style={{ fontSize: "0.9rem", color: "#64748B", lineHeight: 1.6, marginBottom: "0.5rem" }}>{b.desc}</p>
                <div style={{ fontSize: "0.78rem", color: "#94A3B8" }}>{b.date}</div>
              </div>
            ))}
            
            <div style={{ marginTop: "1.5rem", background: "#1E40AF", borderRadius: "24px", padding: "2.5rem", color: "#fff" }}>
              <div style={{ fontSize: "2rem", marginBottom: "1rem" }}>📺</div>
              <h4 style={{ fontSize: "1.2rem", fontWeight: 700, marginBottom: "0.5rem" }}>Video Archives</h4>
              <p style={{ fontSize: "0.85rem", opacity: 0.8, lineHeight: 1.6, marginBottom: "1.5rem" }}>Watch 100+ clinical explanation videos on our official YouTube channel.</p>
              <a href="https://youtube.com/@DrRajeshManghnani" target="_blank" rel="noopener" style={{ color: "#fff", fontWeight: 700, textDecoration: "underline", fontSize: "0.85rem" }}>Visit Channel →</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── HOME PAGE ──────────────────────────────────────── */
export default function Home() {
  return (
    <div>
      <Navigation />

      {/* ── HERO ── */}
      <HeroCarousel />

      {/* ── TRUST BAR ── */}
      <div className="trust-bar">
        <div className="trust-bar-inner">
          <div className="trust-item"><span>🏅</span> BHMS Certified · Clinical Sexology</div>
          <div className="trust-sep" style={{ width: "1px", height: "20px", background: "rgba(30,64,175,0.1)" }} />
          <div className="trust-item"><span>🇺🇸</span> ISO Certified (USA)</div>
          <div className="trust-sep" style={{ width: "1px", height: "20px", background: "rgba(30,64,175,0.1)" }} />
          <div className="trust-item"><span>📖</span> World Book of Records</div>
          <div className="trust-sep" style={{ width: "1px", height: "20px", background: "rgba(30,64,175,0.1)" }} />
          <div className="trust-item"><span>🏛️</span> Govt. Registered Clinic</div>
          <div className="trust-sep" style={{ width: "1px", height: "20px", background: "rgba(30,64,175,0.1)" }} />
          <div className="trust-item"><span>🔒</span> 100% Confidential Care</div>
          <div className="trust-sep" style={{ width: "1px", height: "20px", background: "rgba(30,64,175,0.1)" }} />
          <div className="trust-item"><span>💻</span> Online Consultation Available</div>
        </div>
      </div>

      {/* ── WHY CHOOSE US ── */}
      <section id="why" style={{ background: "#fff", padding: "8rem 0", borderBottom: "1px solid #E2E8F0" }}>
        <style>{`
          .why-grid {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 5rem;
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
            font-family: 'DM Serif Display', serif;
            font-size: 1.8rem;
            color: #1E40AF;
            line-height: 1;
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
            font-family: 'DM Serif Display', serif;
            font-size: 2rem;
            line-height: 1;
            color: #fff;
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

        <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 1.5rem" }}>
          <div className="why-grid">

            {/* Left: Photo + Stats */}
            <div className="why-photo-wrap">
              <div className="why-photo-card">
                <img src="/images/image copy.png" alt="Dr. Rajesh Manghnani – Clinic" />
              </div>
              <div className="why-badge">
                <div className="why-badge-num">23+</div>
                <div className="why-badge-label">Years Of<br />Legacy</div>
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
              <span className="overline" style={{ color: "#1E40AF" }}>Founded on Trust</span>
              <h2 className="section-title" style={{ marginTop: "0.75rem", marginBottom: "1.25rem" }}>
                Crafting Pathways To <em style={{ color: "#1E40AF", fontStyle: "italic" }}>Sexual Wellness</em>
              </h2>
              <p style={{ fontSize: "1rem", color: "#64748B", lineHeight: 1.8, marginBottom: 0 }}>
                Dr. Rajesh Manghnani combines deep clinical knowledge with a compassionate, non-judgmental approach — ensuring every patient receives the highest standard of evidence-based care.
              </p>

              <div className="why-features">
                {[
                  { icon: "🔬", title: "Specialized Clinical Expertise", desc: "Expert diagnosis using world-class diagnostic protocols." },
                  { icon: "🔒", title: "100% Confidential Care", desc: "Safe, secure, and private environment for every patient." },
                  { icon: "📋", title: "Personalized Treatment Plans", desc: "Custom recovery pathways tailored to your medical history." },
                  { icon: "🌿", title: "Natural Holistic Healing", desc: "Premium German homeopathic medicine with zero side effects." },
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

              <div style={{ marginTop: "2.5rem" }}>
                <a
                  href="https://bestsexologistdoctor.com/index.php/about-us/"
                  target="_blank" rel="noopener"
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

      {/* ── SERVICES ── */}
      <section id="services" style={{ background: "#fff", padding: "8rem 0", borderBottom: "1px solid #E2E8F0" }}>
        <style>{`
          .svc-header {
            display: flex;
            align-items: flex-end;
            justify-content: space-between;
            gap: 2rem;
            flex-wrap: wrap;
            margin-bottom: 4rem;
          }
          .svc-header-left { max-width: 600px; }
          .svc-header-left .overline { color: #1E40AF; }
          .svc-header-left h2 { color: #0F172A; margin: 0.75rem 0 0; }

          .svc-cards {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 1.5rem;
          }
          @media (max-width: 1024px) { .svc-cards { grid-template-columns: repeat(2, 1fr); } }
          @media (max-width: 600px)  { .svc-cards { grid-template-columns: 1fr; } }

          .svc-card {
            background: #F8FAFC;
            border: 1px solid #E2E8F0;
            border-top: 3px solid #1E40AF;
            border-radius: 0 0 16px 16px;
            padding: 2rem;
            display: flex;
            flex-direction: column;
            gap: 0.75rem;
            text-decoration: none;
            transition: all 0.25s ease;
          }
          .svc-card:hover {
            background: #fff;
            border-color: #1E40AF;
            border-top-color: #1E40AF;
            box-shadow: 0 12px 32px rgba(30,64,175,0.10);
            transform: translateY(-4px);
          }
          .svc-card-icon {
            font-size: 2rem;
            line-height: 1;
          }
          .svc-card-title {
            font-size: 1.05rem;
            font-weight: 700;
            color: #0F172A;
            line-height: 1.3;
          }
          .svc-card-desc {
            font-size: 0.85rem;
            color: #64748B;
            line-height: 1.7;
            flex: 1;
          }
          .svc-card-link {
            font-size: 0.8rem;
            font-weight: 700;
            color: #1E40AF;
            display: flex;
            align-items: center;
            gap: 0.4rem;
            margin-top: 0.5rem;
            transition: gap 0.2s;
          }
          .svc-card:hover .svc-card-link { gap: 0.75rem; }
        `}</style>

        <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 1.5rem" }}>

          <div className="svc-header">
            <div className="svc-header-left">
              <span className="overline">Our Specialities</span>
              <h2 className="section-title">
                Expert Care For <em style={{ color: "#1E40AF", fontStyle: "italic" }}>Every Condition</em>
              </h2>
            </div>
            <a
              href="https://bestsexologistdoctor.com/index.php/payment/"
              target="_blank" rel="noopener"
              className="btn-primary"
              style={{ height: "52px", padding: "0 2rem", whiteSpace: "nowrap" }}
            >
              Book a Consultation →
            </a>
          </div>

          <div className="svc-cards">
            {[
              { icon: "💊", title: "Erectile Dysfunction", desc: "Holistic treatment combining evidence-based medicine and counselling for lasting, confident results.", href: "/services/erectile-dysfunction" },
              { icon: "⏱️", title: "Premature Ejaculation", desc: "Behavioral and medical strategies tailored to your physiology for enhanced control and satisfaction.", href: "/services/premature-ejaculation" },
              { icon: "❤️", title: "Low Libido & Desire", desc: "Restoring hormonal balance and psychological drive through a fully natural, integrated approach.", href: "/services/low-libido" },
              { icon: "🔬", title: "Male Infertility", desc: "Science-backed fertility diagnostics and protocols to improve sperm health and reproductive outcomes.", href: "/services/infertility" },
              { icon: "👩‍⚕️", title: "Female Sexual Issues", desc: "Compassionate, expert support for vaginismus, orgasmic disorders, and low desire in women.", href: "/services/female-sexual-problems" },
              { icon: "🧠", title: "Sexual Anxiety", desc: "Confidential therapy addressing psychological barriers to intimacy, performance, and self-confidence.", href: "/services/sexual-anxiety" },
              { icon: "🌙", title: "Nightfall Treatment", desc: "Premium herbal and homeopathic protocols with proven clinical outcomes for nocturnal emission.", href: "/services/nightfall" },
              { icon: "🩺", title: "STI Care", desc: "Discreet, thorough diagnostic testing and medically supervised management of sexual infections.", href: "/services/sti-treatment" },
              { icon: "🤝", title: "Couples Therapy", desc: "Professional mediation and intimacy coaching to rebuild connection, trust, and emotional bonds.", href: "/services/couples-counseling" },
            ].map((s, i) => (
              <a key={i} href={s.href} className="svc-card">
                <div className="svc-card-icon">{s.icon}</div>
                <div className="svc-card-title">{s.title}</div>
                <div className="svc-card-desc">{s.desc}</div>
                <div className="svc-card-link">Learn more <span>→</span></div>
              </a>
            ))}
          </div>

        </div>
      </section>


      {/* ── CONDITIONS (Clean Uniform Grid) ── */}
      <section id="conditions" style={{ background: "#F8FAFC", padding: "8rem 0" }}>
        <style>{`
          .cond-header { text-align: center; max-width: 680px; margin: 0 auto 4rem; }
          .cond-header .overline { color: #1E40AF; }
          .cond-header h2 { color: #0F172A; margin: 0.75rem 0 1rem; }
          .cond-header p { color: #64748B; font-size: 1rem; line-height: 1.8; }

          .cond-grid {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 1.5rem;
          }
          @media (max-width: 1024px) {
            .cond-grid { grid-template-columns: repeat(2, 1fr); }
          }
          @media (max-width: 600px) {
            .cond-grid { grid-template-columns: 1fr; }
          }

          .cond-card {
            background: #fff;
            border: 1px solid #E2E8F0;
            border-radius: 16px;
            padding: 2rem 2rem 2rem 2rem;
            display: flex;
            align-items: flex-start;
            gap: 1.25rem;
            transition: all 0.25s ease;
            cursor: pointer;
            text-decoration: none;
          }
          .cond-card:hover {
            border-color: #1E40AF;
            box-shadow: 0 8px 24px rgba(30,64,175,0.10);
            transform: translateY(-3px);
          }
          .cond-icon-wrap {
            width: 52px; height: 52px;
            background: #EFF6FF;
            border-radius: 12px;
            display: flex; align-items: center; justify-content: center;
            font-size: 1.5rem;
            flex-shrink: 0;
            transition: background 0.25s;
          }
          .cond-card:hover .cond-icon-wrap { background: #DBEAFE; }
          .cond-body {}
          .cond-title {
            font-size: 1rem;
            font-weight: 700;
            color: #0F172A;
            margin-bottom: 0.3rem;
            line-height: 1.3;
          }
          .cond-desc {
            font-size: 0.82rem;
            color: #64748B;
            line-height: 1.6;
          }

          .cond-cta {
            margin-top: 3rem;
            text-align: center;
          }
          .cond-cta p {
            color: #64748B;
            font-size: 0.95rem;
            margin-bottom: 1.25rem;
          }
        `}</style>

        <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 1.5rem" }}>

          <div className="cond-header">
            <span className="overline">Clinical Directory</span>
            <h2 className="section-title">
              Treatments For <em style={{ color: "#1E40AF", fontStyle: "italic" }}>Every Concern</em>
            </h2>
            <p>Evidence-based solutions for complex sexual health conditions, delivered with over 23 years of clinical mastery.</p>
          </div>

          <div className="cond-grid">
            {[
              { icon: "💊", title: "Erectile Dysfunction", desc: "Holistic treatment combining medicine and counselling for lasting results.", href: "/services/erectile-dysfunction" },
              { icon: "⏱️", title: "Premature Ejaculation", desc: "Behavioral and medical strategies for enhanced control and satisfaction.", href: "/services/premature-ejaculation" },
              { icon: "❤️", title: "Low Libido & Desire", desc: "Natural hormonal and psychological approaches for regained vitality.", href: "/services/low-libido" },
              { icon: "🔬", title: "Male Infertility", desc: "Science-backed fertility protocols for improved reproductive health.", href: "/services/infertility" },
              { icon: "👩‍⚕️", title: "Female Sexual Issues", desc: "Sensitive, professional support for vaginismus and orgasmic disorders.", href: "/services/female-sexual-problems" },
              { icon: "🧠", title: "Sexual Anxiety", desc: "Confidential therapy to overcome psychological barriers to intimacy.", href: "/services/sexual-anxiety" },
              { icon: "🌙", title: "Nightfall Treatment", desc: "Holistic herbal solutions with established clinical success.", href: "/services/nightfall" },
              { icon: "🩺", title: "STI Care", desc: "Discreet diagnostic testing and medical management of infections.", href: "/services/sti-treatment" },
              { icon: "🤝", title: "Couples Therapy", desc: "Professional mediation to rebuild intimacy and emotional bonds.", href: "/services/couples-counseling" },
            ].map((c, i) => (
              <a key={i} href={c.href} className="cond-card">
                <div className="cond-icon-wrap">{c.icon}</div>
                <div className="cond-body">
                  <div className="cond-title">{c.title}</div>
                  <div className="cond-desc">{c.desc}</div>
                </div>
              </a>
            ))}
          </div>

          <div className="cond-cta">
            <p>We treat <strong>50+ specialized conditions</strong>. Don&apos;t see yours listed?</p>
            <a
              href="https://bestsexologistdoctor.com/index.php/disease-treatment-best-sexologist-treatment-in-bhopal/"
              target="_blank"
              rel="noopener"
              className="btn-primary"
              style={{ display: "inline-flex", padding: "0 2.5rem", height: "52px" }}
            >
              Browse All 50+ Treatments →
            </a>
          </div>

        </div>
      </section>


      {/* ── TRUST & RECOGNITION (Unified Section) ── */}
      <section style={{ background: "#0F172A", padding: "8rem 0", position: "relative", overflow: "hidden" }}>
        {/* Subtle grid texture */}
        <div style={{ position: "absolute", inset: 0, backgroundImage: "radial-gradient(rgba(30,64,175,0.08) 1px, transparent 1px)", backgroundSize: "32px 32px", pointerEvents: "none" }} />

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
            margin-top: 3.5rem;
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
            margin: 5rem 0;
          }

          /* ── RATINGS GRID ── */
          .ratings-redesign {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 1.25rem;
            margin-top: 3.5rem;
          }
          @media (max-width: 768px) {
            .ratings-redesign { grid-template-columns: 1fr; }
          }

          .rating-redesign-card {
            background: rgba(255,255,255,0.03);
            border: 1px solid rgba(255,255,255,0.08);
            border-radius: 16px;
            padding: 2.5rem 2rem;
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
            font-family: 'DM Serif Display', serif;
            font-size: 3.5rem;
            color: #F8FAFC;
            line-height: 1;
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
            <h2 className="section-title" style={{ marginTop: "0.75rem", marginBottom: 0 }}>
              Trusted by Thousands,{" "}
              <em style={{ fontStyle: "italic", color: "#3B82F6" }}>Recognized</em> by All
            </h2>
          </div>

          <div className="cert-grid">
            {[
              { icon: "🎓", title: "BHMS Graduate", sub: "Govt. Homeopathy Medical College" },
              { icon: "🇺🇸", title: "American College of Sexology", sub: "Member · Clinical Sexology" },
              { icon: "🏅", title: "ISO Certified (USA)", sub: "International Quality Standard" },
              { icon: "📖", title: "World Book of Records", sub: "Recognized Achievement" },
              { icon: "🏛️", title: "Govt. Registered Clinic", sub: "Bhopal &amp; Mumbai, India" },
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
            <h2 className="section-title" style={{ marginTop: "0.75rem", marginBottom: 0 }}>
              Top Rated Across{" "}
              <em style={{ fontStyle: "italic", color: "#3B82F6" }}>All Platforms</em>
            </h2>
          </div>

          <div className="ratings-redesign">
            {[
              { platform: "Justdial · Kasturba Nagar", score: "4.9", count: "887+ Verified Ratings" },
              { platform: "Justdial · Kasturba Nagar (Gynae)", score: "4.6", count: "80 Ratings · 19 Years" },
              { platform: "Justdial · Arera Colony", score: "4.7", count: "486 Ratings &amp; Reviews" },
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
      <section id="about" style={{ background: "#F8FAFC", padding: "8rem 0" }}>
        <style>{`
          .abt-grid {
            display: grid;
            grid-template-columns: 1.1fr 1fr;
            gap: 5rem;
            align-items: center;
          }
          @media (max-width: 1024px) {
            .abt-grid { grid-template-columns: 1fr; gap: 4rem; }
          }
          
          .abt-desc {
            font-size: 1.05rem;
            color: #64748B;
            line-height: 1.8;
            margin: 1.5rem 0 2rem;
          }
          .abt-list {
            list-style: none;
            padding: 0;
            margin: 0 0 3rem 0;
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
            font-family: 'DM Serif Display', serif;
            font-size: 2rem;
            color: #1E40AF;
            line-height: 1;
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
        <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 1.5rem" }}>
          <div className="abt-grid">
            
            {/* Content */}
            <div>
              <span className="overline" style={{ color: "#1E40AF" }}>About The Doctor</span>
              <h2 className="section-title" style={{ marginTop: "0.75rem", marginBottom: "0.5rem" }}>
                Dr. Rajesh Manghnani
              </h2>
              <div style={{ fontSize: "0.85rem", fontWeight: 700, color: "#1E40AF", textTransform: "uppercase", letterSpacing: "0.05em" }}>
                Senior Consultant · Dr. G.D. Memorial Clinic · Bhopal
              </div>
              
              <p className="abt-desc">
                Dr. Rajesh Manghnani is one of India&apos;s most renowned and experienced sexologists 
                with 23+ years of specialized practice. His patient-first philosophy — rooted in trust, 
                clinical discipline, and holistic care — has helped over 5,50,000 patients reclaim 
                confidence and sexual wellness. A member of the American College of Sexology, 
                Dr. Rajesh combines evidence-based medicine with premium homeopathic German medicines 
                for highly effective treatments with zero disadvantages.
              </p>

              <ul className="abt-list">
                {[
                  "23+ years of specialised sexology practice with proven results",
                  "5,50,000+ consultations managed with confidence and care",
                  "BHMS, Clinical Sexology — Govt. Homeopathy Medical College",
                  "Free diet charts, exercise & lifestyle guidance with every plan",
                  "Strict patient confidentiality maintained at all times"
                ].map((item, i) => (
                  <li key={i}>
                    <div className="abt-list-icon">✓</div>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <div className="abt-stats">
                <div className="abt-stat-card"><div className="abt-stat-val">5.5L+</div><div className="abt-stat-label">Patients Treated</div></div>
                <div className="abt-stat-card"><div className="abt-stat-val">23 Yrs</div><div className="abt-stat-label">Of Experience</div></div>
                <div className="abt-stat-card"><div className="abt-stat-val">World</div><div className="abt-stat-label">Book of Records</div></div>
                <div className="abt-stat-card"><div className="abt-stat-val">ISO</div><div className="abt-stat-label">Certified (USA)</div></div>
              </div>

              <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
                <a href="https://bestsexologistdoctor.com/index.php/about-us/" className="btn-primary" target="_blank" rel="noopener" style={{ height: "52px", padding: "0 2rem" }}>
                  About Dr. Rajesh Manghnani
                </a>
                <a href="https://bestsexologistdoctor.com/index.php/payment/" className="btn-secondary" target="_blank" rel="noopener" style={{ height: "52px", padding: "0 2rem" }}>
                  Book Appointment
                </a>
              </div>
            </div>

            {/* Image */}
            <div>
              <div className="abt-img-wrap">
                <img src="/images/image.png" alt="Dr. Rajesh Manghnani – Award-Winning Sexologist" />
                <div className="abt-badge-float">
                  <span style={{ fontSize: "1.2rem" }}>🏆</span> Best Sexologist in Bhopal · Est. 2004
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>


      {/* ── VOICES OF RESTORATION (Premium Redesign) ── */}
      <section id="testimonials" style={{ background: "#FFFFFF", padding: "12vw 0", position: "relative", overflow: "hidden" }}>
        {/* Editorial Background Lines */}
        <div style={{ position: "absolute", top: 0, left: "15%", width: "1px", height: "100%", background: "rgba(30,64,175,0.03)", zIndex: 1 }} />
        <div style={{ position: "absolute", top: 0, left: "85%", width: "1px", height: "100%", background: "rgba(30,64,175,0.03)", zIndex: 1 }} />
        
        <div className="container" style={{ position: "relative", zIndex: 2 }}>
          <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "flex-start", gap: "4rem", marginBottom: "8rem" }}>
            <div style={{ maxWidth: "700px" }}>
              <span className="overline" style={{ color: "#1E40AF" }}>Clinical Impact</span>
              <h2 className="section-title">
                The Anatomy Of <em style={{ color: "#1E40AF", fontStyle: "italic" }}>Trust</em>.
              </h2>
              <p style={{ color: "#64748B", fontSize: "1.15rem", marginTop: "1.5rem", lineHeight: 1.8 }}>
                Moving beyond clinical data—real stories of emotional and physical restoration from patients who reclaimed their vitality under Dr. Rajesh&apos;s care.
              </p>
            </div>
            <div style={{ display: "flex", gap: "4rem", borderLeft: "2px solid #EFF6FF", paddingLeft: "3rem" }}>
              <div>
                <div style={{ fontSize: "3rem", fontFamily: "'Plus Jakarta Sans'", fontWeight: 800, color: "#1E40AF", lineHeight: 0.8 }}>4.9</div>
                <div style={{ fontSize: "0.65rem", fontWeight: 800, textTransform: "uppercase", color: "#94A3B8", marginTop: "1rem" }}>Verified Avg</div>
              </div>
              <div>
                <div style={{ fontSize: "3rem", fontFamily: "'Plus Jakarta Sans'", fontWeight: 800, color: "#1E40AF", lineHeight: 0.8 }}>5.5L</div>
                <div style={{ fontSize: "0.65rem", fontWeight: 800, textTransform: "uppercase", color: "#94A3B8", marginTop: "1rem" }}>Patients</div>
              </div>
            </div>
          </div>

          <style>{`
            .voice-wall {
              display: grid;
              grid-template-columns: repeat(12, 1fr);
              gap: 2.5rem;
            }
            .voice-card {
              grid-column: span 4;
              background: #fff; border: 1px solid #F1F5F9; border-radius: 4px; padding: 3.5rem;
              transition: all 0.6s var(--ease);
              display: flex; flex-direction: column; justify-content: space-between;
              box-shadow: 0 10px 30px -10px rgba(30,64,175,0.05);
            }
            .voice-card:hover { 
              transform: translateY(-8px); 
              box-shadow: 0 50px 100px -20px rgba(30,64,175,0.12);
              border-color: #DBEAFE;
            }
            .voice-card-hero { grid-column: span 8; background: #F8FAFC; border: none; padding: 4.5rem; }
            .voice-card-offset { margin-top: 3rem; }
            
            .voice-quote {
              font-size: 1.1rem; color: #1E293B; line-height: 1.9; font-weight: 400;
              margin-bottom: 3rem; position: relative;
            }
            .voice-profile {
              display: flex; align-items: center; gap: 1.2rem;
            }
            .v-avatar {
              width: 52px; height: 52px; border-radius: 4px; background: #1E40AF;
              display: flex; align-items: center; justify-content: center;
              font-weight: 800; color: #fff; font-size: 0.8rem; letter-spacing: 0.1em;
            }
            .v-meta { flex: 1; }
            .v-name { font-size: 1rem; font-weight: 700; color: #0F172A; }
            .v-tag { font-size: 0.72rem; color: #1E40AF; font-weight: 700; text-transform: uppercase; letter-spacing: 0.05em; margin-top: 0.2rem; }

            @media (max-width: 1024px) {
              .voice-card, .voice-card-hero { grid-column: span 12; margin-top: 0; padding: 3rem; }
            }
          `}</style>

          <div className="voice-wall">
            {/* Featured Story */}
            <div className="voice-card voice-card-hero">
              <div className="voice-quote" style={{ fontSize: "1.4rem", lineHeight: 1.7, color: "#0F172A" }}>
                &ldquo;I was suffering from erectile dysfunction with Diabetes Type 2 for a long time. Very depressed — but Dr. Rajesh gave me all solutions to my multiple issues. Life changing! The way he explains the medical and psychological overlap is what gave me the confidence to follow the treatment.&rdquo;
              </div>
              <div className="voice-profile">
                <img 
                  src="https://plus.unsplash.com/premium_photo-1689838026921-c09632fd77ff?w=600&auto=format&fit=crop&q=60" 
                  alt="Rajesh K." 
                  className="v-avatar" 
                  style={{ objectFit: "cover" }}
                />
                <div className="v-meta">
                  <div className="v-name">Rajesh K. <span style={{ fontWeight: 400, color: "#94A3B8", marginLeft: "0.5rem" }}>· Bhopal</span></div>
                  <div className="v-tag">Primary Clinical Case · via Sulekha</div>
                </div>
              </div>
            </div>

            {[
              { name: "Verified Patient", loc: "Bhopal", src: "via Practo", img: "https://plus.unsplash.com/premium_photo-1691030254390-aa56b22e6a45?w=600&auto=format&fit=crop&q=60", quote: "He first understands what the problem is, then explains how to change it. Highly recommend for his logical approach to medicine.", offset: true },
              { name: "Santosh J.", loc: "Bhopal", src: "via YouTube Referral", img: "https://images.unsplash.com/photo-1694871420373-e9c1031b91ee?w=600&auto=format&fit=crop&q=60", quote: "Consulted for premature ejaculation and precum. His medicine and treatment did wonders for me. His YouTube lectures are very enlightening.", offset: false },
              { name: "Anil M.", loc: "Indore", src: "via Justdial", img: "https://images.unsplash.com/photo-1616002851413-ebcc9611139d?w=600&auto=format&fit=crop&q=60", quote: "Knowledgeable, polite, and caring. Many patients recover from chronic illnesses after a few months of treatment. The free diet chart and exercise guidance is a bonus.", offset: true },
            ].map((v, i) => (
              <div key={i} className={`voice-card ${v.offset ? 'voice-card-offset' : ''}`}>
                <div className="voice-quote">
                  &ldquo;{v.quote}&rdquo;
                </div>
                <div className="voice-profile">
                  <img src={v.img} alt={v.name} className="v-avatar" style={{ objectFit: "cover" }} />
                  <div className="v-meta">
                    <div className="v-name">{v.name}</div>
                    <div className="v-tag">{v.src}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div style={{ marginTop: "8rem", textAlign: "center" }}>
            <a href="https://bestsexologistdoctor.com/index.php/testimonials-best-sexologist-in-bhopal/" target="_blank" rel="noopener" style={{ fontSize: "0.85rem", fontWeight: 800, color: "#0F172A", textDecoration: "underline", textUnderlineOffset: "10px", letterSpacing: "0.1em", textTransform: "uppercase" }}>
              Explore the full archive of 5,50,000+ Patient Narratives →
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
            <h2 style={{ fontSize: "2.8rem", fontFamily: "'Plus Jakarta Sans'", fontWeight: 800, letterSpacing: "-0.04em", marginBottom: "1.5rem" }}>Ready to Regain Your Confidence?</h2>
            <p style={{ fontSize: "1.1rem", opacity: 0.9, marginBottom: "2.5rem" }}>Book a confidential consultation with Dr. Rajesh Manghnani today. Online and in-person appointments available across India — Mon to Sat, 9 AM to 9 PM.</p>
            <div className="cta-buttons">
              <a href="https://bestsexologistdoctor.com/index.php/payment/" className="btn-white" target="_blank" rel="noopener">Book Appointment Online</a>
              <a href="tel:+919893880001" className="btn-ghost">Call: +91 9893880001</a>
              <a href="https://wa.me/919936604444" className="btn-whatsapp" target="_blank" rel="noopener">💬 WhatsApp Now</a>
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
                <p>Shop No. 1, S.K. Plaza, Near Chetak Bridge, Govindpura, Bhopal, Madhya Pradesh 462023</p>
              </div>

              <div className="loc-detail">
                <strong>Consultation Hours:</strong>
                <p>Monday - Saturday: 11:00 AM - 8:00 PM</p>
                <p className="loc-tag">Prior Appointments Recommended</p>
              </div>

              <div className="loc-actions">
                <a href="tel:+919893880001" className="btn-primary">Call +91 98938 80001</a>
                <a href="https://wa.me/919936604444" className="btn-secondary">WhatsApp Clinic</a>
              </div>
            </div>

            <div className="loc-map">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3665.8117967965415!2d77.43821677532057!3d23.23229707902492!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x397c37e912d09cf3%3A0x55bf79788220dcae!2sDR%20RAJESH'S%20SEXOLOGY%20CLINIC-Best%20Sexologist%20Doctor%20In%20Bhopal!5e0!3m2!1sen!2sin!4v1713372605481!5m2!1sen!2sin"
                width="100%" height="100%" style={{ border: 0 }} allowFullScreen loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── FOOTER (Premium Redesign) ── */}
      <footer style={{ background: "#0F172A", color: "#F8FAFC", padding: "8rem 0 3rem", borderTop: "1px solid rgba(255,255,255,0.05)" }}>
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "4rem", marginBottom: "6rem" }}>
            
            {/* Column 1: Brand */}
            <div>
              <img src="/images/logo.png" alt="Dr. G.D. Memorial Clinic" style={{ height: "42px", marginBottom: "2rem", filter: "brightness(0) invert(1)" }} />
              <p style={{ color: "rgba(248,250,252,0.5)", fontSize: "0.92rem", lineHeight: 1.8, marginBottom: "2rem" }}>
                Dr. Rajesh Manghnani&apos;s Sexology Clinic is India&apos;s premier destination for specialized sexual wellness and holistic clinical care with over 23 years of excellence.
              </p>
              <div style={{ display: "flex", gap: "1rem" }}>
                {["fb", "tw", "yt", "in"].map(s => (
                  <div key={s} style={{ width: "36px", height: "36px", background: "rgba(255,255,255,0.05)", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "0.8rem", color: "rgba(255,255,255,0.4)", cursor: "pointer" }}>{s}</div>
                ))}
              </div>
            </div>

            {/* Column 2: Quick Links */}
            <div>
              <h4 style={{ fontSize: "1rem", fontWeight: 700, marginBottom: "2rem", textTransform: "uppercase", letterSpacing: "0.1em" }}>Clinic Info</h4>
              <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "1.2rem", padding: 0 }}>
                {["About Our Clinic", "Testimonials", "Video Lectures", "Clinical Blog", "Privacy Policy"].map(l => (
                  <li key={l}><a href="#" style={{ color: "rgba(248,250,252,0.45)", fontSize: "0.9rem", textDecoration: "none", transition: "color 0.2s" }} onMouseEnter={e => e.currentTarget.style.color = "#fff"} onMouseLeave={e => e.currentTarget.style.color = "rgba(248,250,252,0.45)"}>{l}</a></li>
                ))}
              </ul>
            </div>

            {/* Column 3: Contact */}
            <div>
              <h4 style={{ fontSize: "1rem", fontWeight: 700, marginBottom: "2rem", textTransform: "uppercase", letterSpacing: "0.1em" }}>Connect</h4>
              <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "1.2rem", padding: 0 }}>
                <li style={{ color: "rgba(248,250,252,0.45)", fontSize: "0.9rem" }}>📞 +91 98938 80001</li>
                <li style={{ color: "rgba(248,250,252,0.45)", fontSize: "0.9rem" }}>💬 +91 99366 04444 (WA)</li>
                <li style={{ color: "rgba(248,250,252,0.45)", fontSize: "0.9rem" }}>📧 drrajeshmanghnani@gmail.com</li>
                <li style={{ color: "rgba(248,250,252,0.45)", fontSize: "0.9rem" }}>🕒 Mon-Sat, 9AM – 9PM</li>
              </ul>
            </div>

            {/* Column 4: Certifications */}
            <div>
              <h4 style={{ fontSize: "1rem", fontWeight: 700, marginBottom: "2rem", textTransform: "uppercase", letterSpacing: "0.1em" }}>Accreditations</h4>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "0.75rem" }}>
                {["ISO Certified", "BHMS Graduate", "ACS Member", "Govt. Regd", "Est. 2004"].map(c => (
                  <span key={c} style={{ background: "rgba(255,255,255,0.05)", padding: "0.35rem 0.8rem", borderRadius: "4px", fontSize: "0.65rem", fontWeight: 700, color: "rgba(255,255,255,0.4)", border: "1px solid rgba(255,255,255,0.1)" }}>{c}</span>
                ))}
              </div>
            </div>

          </div>

          <div style={{ borderTop: "1px solid rgba(255,255,255,0.05)", paddingTop: "3rem", display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "center", gap: "2rem" }}>
            <div style={{ fontSize: "0.8rem", color: "rgba(248,250,252,0.3)" }}>
              © 2026 Dr. Rajesh Manghnani · Dr. G.D. Memorial Clinic. All rights reserved.
            </div>
            <div style={{ fontSize: "0.8rem", color: "rgba(248,250,252,0.3)", display: "flex", gap: "2rem" }}>
              <span>Bhopal & Mumbai, India</span>
              <span>Confidentiality Guaranteed</span>
            </div>
          </div>
        </div>
      </footer>

    </div>
  );
}

