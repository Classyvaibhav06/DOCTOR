"use client";
import React from "react";
import { Navigation } from "@/components/Navigation";

export default function ServicesPage() {
  const services = [
    { num: "01", icon: "💊", title: "Erectile Dysfunction", desc: "Inability to achieve or maintain an erection — treated through personalized plans combining counselling and homeopathic medicine.", href: "/services/erectile-dysfunction", img: "https://bestsexologistdoctor.com/wp-content/uploads/2023/03/Untitled-design-1024x576.png" },
    { num: "02", icon: "⏱️", title: "Premature Ejaculation", desc: "Targeted behavioral and medical therapies addressing both psychological and physical causes for improved control.", href: "/services/premature-ejaculation", img: "https://bestsexologistdoctor.com/wp-content/uploads/2023/03/ematiure-1024x576.png" },
    { num: "03", icon: "❤️", title: "Low Libido & Desire", desc: "Hormonal and psychological approaches addressing decreased interest in sexual activity due to stress or relationship factors.", href: "/services/low-libido", img: "https://bestsexologistdoctor.com/wp-content/uploads/2023/03/Untitled-design-1024x576.png" },
    { num: "04", icon: "🌙", title: "Nightfall Treatment", desc: "Safe, effective solutions for nocturnal emissions using holistic lifestyle guidance and German medicines.", href: "/services/nightfall", img: "https://bestsexologistdoctor.com/wp-content/uploads/2023/03/ematiure-3-1024x576.png" },
    { num: "05", icon: "🔬", title: "Male Infertility", desc: "Comprehensive fertility assessments and advanced diagnostic protocols to improve sperm health.", href: "/services/infertility", img: "https://bestsexologistdoctor.com/wp-content/uploads/2023/03/ematiure-5-1024x576.png" },
    { num: "06", icon: "👩‍⚕️", title: "Female Sexual Problems", desc: "Specialized care for vaginismus, orgasmic disorders, genital pain syndrome, and low female desire.", href: "/services/female-sexual-problems", img: "https://bestsexologistdoctor.com/wp-content/uploads/2023/03/Untitled-design-1-1024x576.png" },
    { num: "07", icon: "🧠", title: "Sexual Anxiety & Counselling", desc: "Confidential counseling and couples therapy to overcome performance anxiety and communication barriers.", href: "/services/sexual-anxiety", img: "https://bestsexologistdoctor.com/wp-content/uploads/2023/03/Untitled-design-1024x576.png" },
    { num: "08", icon: "🩺", title: "STI Diagnosis & Treatment", desc: "Discrete testing and management of sexually transmitted infections including chlamydia, gonorrhea, and genital warts.", href: "/services/sti-treatment", img: "https://bestsexologistdoctor.com/wp-content/uploads/2023/03/ematiure-1-1024x576.png" },
    { num: "09", icon: "🤝", title: "Couples Counseling", desc: "Professional guidance to help couples overcome intimacy barriers and strengthen their relationship bonds.", href: "/services/couples-counseling", img: "https://bestsexologistdoctor.com/wp-content/uploads/2023/03/ematiure-1024x576.png" },
  ];

  return (
    <div>
      <Navigation />
      
      <header className="hero" style={{ minHeight: '40vh', paddingTop: '120px', paddingBottom: '3rem', background: '#0a0a0a' }}>
        <div className="hero-slider" style={{ position: 'absolute', inset: 0, zIndex: 1 }}>
          <div className="hero-slide active">
            <img src="https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&q=80&w=2000" alt="Specialized Medical Care" style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'brightness(0.35)' }} />
          </div>
        </div>
        <div className="hero-overlay" />
        <div className="container" style={{ position: 'relative', zIndex: 3 }}>
          <p className="overline" style={{ textAlign: 'center', color: 'var(--gold-light)' }}>Our Specialities</p>
          <h1 style={{ textAlign: 'center', fontSize: 'clamp(2.5rem, 5vw, 4rem)', color: 'white' }}>Comprehensive <em style={{ color: 'var(--gold)' }}>Treatments</em></h1>
          <p style={{ textAlign: 'center', maxWidth: '600px', margin: '1rem auto', color: 'rgba(255,255,255,0.7)', fontSize: '1.05rem', lineHeight: 1.7 }}>
            Evidence-based, holistic treatment for a wide range of sexual health concerns — delivered with compassion, extreme privacy, and deep expertise.
          </p>
        </div>
      </header>

      <section className="services" style={{ background: 'var(--white)', padding: '6rem 0' }}>
        <div className="container">
          <div className="services-grid">
            {services.map((s, i) => (
              <div key={i} className="service-card" onClick={() => window.location.href = s.href}>
                <div className="service-img">
                  <img src={s.img} alt={s.title} />
                  <div className="service-num">{s.num}</div>
                </div>
                <div className="service-body">
                  <div className="service-icon">{s.icon}</div>
                  <div className="service-title">{s.title}</div>
                  <div className="service-desc">{s.desc}</div>
                  <a href={s.href} className="service-arrow">Learn More →</a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="container cta-inner">
          <h2>Ready to Regain Your Confidence?</h2>
          <p>Book a confidential consultation with Dr. Rajesh Manghnani today. Online and in-person appointments available across India.</p>
          <div className="cta-buttons">
             <a href="https://bestsexologistdoctor.com/index.php/payment/" className="btn-white">Book Appointment Online</a>
             <a href="tel:+919893880001" className="btn-ghost">Call: +91 9893880001</a>
          </div>
        </div>
      </section>

      <footer style={{ background: '#0a0a08', padding: '4rem 0', color: 'rgba(255,255,255,0.4)' }}>
        <div className="container footer-inner" style={{ flexDirection: 'column', textAlign: 'center', gap: '1rem' }}>
          <div className="footer-logo">
            <img src="/images/logo.png" alt="Dr. G.D. Memorial Clinic" style={{ height: "30px", opacity: 0.8 }} />
          </div>
          <p className="footer-copy">© 2026 Dr. G.D. Memorial Clinic. All Rights Reserved.</p>
          <p style={{ fontSize: '0.7rem' }}>ISO Certified · World Book of Records · Expert Care Since 2004</p>
        </div>
      </footer>
    </div>
  );
}
