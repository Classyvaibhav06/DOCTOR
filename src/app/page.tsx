"use client";
import { useState, useEffect, useCallback } from "react";
import { Navigation } from "@/components/Navigation";
import JsonLd, { generateFAQSchema } from "@/components/JsonLd";
import Image from "next/image";

/* ─── HERO CAROUSEL ─────────────────────────────────── */
function HeroCarousel() {
  const slides = [
    { src: "https://bestsexologistdoctor.com/wp-content/uploads/2025/11/photo-output.jpg", alt: "Modern Luxury Clinic Interior" },
    { src: "https://images.unsplash.com/photo-1559839734-2b71f1e598c6?auto=format&fit=crop&q=80&w=2000", alt: "Expert Doctor Consultation" },
    { src: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=2000", alt: "Advanced Medical Technology" },
    { src: "https://images.unsplash.com/photo-1631217812972-301174627440?auto=format&fit=crop&q=80&w=2000", alt: "Professional Healthcare Environment" },
  ];

  const [cur, setCur] = useState(0);
  const [progress, setProgress] = useState(0);
  const DURATION = 6000;

  const next = useCallback(() => setCur(c => (c + 1) % slides.length), [slides.length]);

  useEffect(() => {
    let start = performance.now();
    let raf: number;
    const tick = (now: number) => {
      const elapsed = now - start;
      const pct = Math.min((elapsed / DURATION) * 100, 100);
      setProgress(pct);
      if (elapsed >= DURATION) { next(); start = performance.now(); }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [cur, next]);

  return (
    <section className="hero">
      {/* Slides */}
      <div className="hero-slider">
        {slides.map((s, i) => (
          <div key={i} className={`hero-slide ${i === cur ? "active" : ""}`}>
            <img src={s.src} alt={s.alt} />
          </div>
        ))}
      </div>

      {/* Gradient overlay */}
      <div className="hero-overlay" />

      {/* Content */}
      <div className="hero-left">
        <div className="hero-badge">
          <span className="hero-badge-dot" />
          #1 Sexologist in Bhopal &nbsp;·&nbsp; Justdial 4.9/5
        </div>
        <h1>
          India's Most <em>Trusted</em><br />
          Sexologist &amp;<br />Wellness Expert
        </h1>
        <p className="hero-sub">
          Dr. Rajesh Manghnani brings 23+ years of specialized expertise in sexual health,
          combining evidence-based medicine with holistic healing. Personalized, confidential
          care for men and women across India.
        </p>
        <div className="hero-actions">
          <a href="https://bestsexologistdoctor.com/index.php/payment/" className="btn-primary" target="_blank" rel="noopener">
            Book Appointment Online
          </a>
          <a href="tel:+919893880001" className="btn-outline">📞 +91 9893880001</a>
        </div>
        <div className="hero-stats">
          <div className="hero-stat">
            <div className="hero-stat-val">23+</div>
            <div className="hero-stat-label">Years Experience</div>
          </div>
          <div className="hero-stat">
            <div className="hero-stat-val">5.5L+</div>
            <div className="hero-stat-label">Patients Treated</div>
          </div>
          <div className="hero-stat">
            <div className="hero-stat-val">4.9★</div>
            <div className="hero-stat-label">Justdial Rating</div>
          </div>
        </div>
      </div>

      {/* Dot navigation */}
      <div className="hero-dots">
        {slides.map((_, i) => (
          <div
            key={i}
            className={`h-dot ${i === cur ? "active" : ""}`}
            onClick={() => setCur(i)}
          />
        ))}
      </div>

      {/* Progress bar */}
      <div className="hero-progress-bar" style={{ width: `${progress}%` }} />
    </section>
  );
}

/* ─── FAQ SECTION ────────────────────────────────────── */
export function FAQSection() {
  const faqs = [
    { q: "Is my consultation completely confidential?", a: "Yes, absolutely. Dr. G.D. Memorial Clinic maintains strict confidentiality at every step — from discreet billing and communication to private entry and records. Your privacy is our foremost priority." },
    { q: "Can I consult online from another city?", a: "Yes. We offer secure video and phone consultations for patients across India and abroad. Our platform is private, easy to use, and available Monday to Saturday, 9 AM to 9 PM." },
    { q: "Are treatments natural with no side effects?", a: "We specialize in holistic treatments using homeopathic German medicines, dilutions, biochemic salts, syrups and mother tinctures. Our medicines offer 100% effective treatment with no disadvantages. Each plan is fully customized to your condition and medical history." },
    { q: "What is the consultation fee?", a: "Consultation fee is ₹500 at the Kasturba Nagar clinic. Dr. Rajesh also offers free phone consultations for initial queries. Online appointment booking is available at bestsexologistdoctor.com/payment." },
    { q: "How many patients has the clinic treated?", a: "Dr. G.D. Memorial Clinic has successfully treated over 5,50,000 patients since its establishment — making it one of India's most experienced and trusted sexual health and wellness practices." },
    { q: "Where are the clinic locations?", a: "Main clinic: 47, Sector C, Kasturba Nagar, Near Chetak Bridge, Bhopal – 462023. Second location: GM Tower, 10 Number Market, Near Bake N Shake, Arera Colony, Bhopal – 462016. Online consultations available pan-India." },
  ];

  const [openIndices, setOpenIndices] = useState<number[]>([0]);
  const faqSchema = generateFAQSchema(faqs);

  const toggleAccordion = (index: number) => {
    setOpenIndices((prev) =>
      prev.includes(index)
        ? prev.filter((i) => i !== index)
        : [...prev, index]
    );
  };

  return (
    <section className="faq" id="faq">
      <JsonLd data={faqSchema} />
      <div className="container">
        <div className="faq-header">
          <p className="overline">Common Questions</p>
          <h2 className="section-title">Frequently Asked Questions</h2>
          <p style={{ color: "var(--muted)", marginTop: "1rem", fontSize: "1.05rem" }}>
            Everything you need to know about our treatments, booking, and consultations. Cannot find the answer you&apos;re looking for? Please contact us directly.
          </p>
        </div>

        <div className="faq-container">
          {faqs.map((faq, index) => {
            const isOpen = openIndices.includes(index);
            return (
              <div 
                key={index} 
                className={`faq-item ${isOpen ? 'open' : ''}`}
                onClick={() => toggleAccordion(index)}
              >
                <button
                  className="faq-q"
                  aria-expanded={isOpen}
                >
                  <span>{faq.q}</span>
                  <div className="faq-chevron-wrap">
                    <span className="faq-plus-h" />
                    <span className="faq-plus-v" />
                  </div>
                </button>

                <div className="faq-a">
                  <div className="faq-a-inner">
                    {faq.a}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ─── MEDIA & BLOGS ──────────────────────────────────── */
export function MediaAndBlogs() {
  const blogs = [
    { title: "Understanding Stress & Sexual Wellness", date: "Oct 12, 2025", desc: "How modern lifestyle and stress factors are the leading cause of early onset intimacy issues. Practical steps for men to regain confidence naturally.", tag: "Wellness" },
    { title: "Myths About Homeopathic Treatments", date: "Sep 28, 2025", desc: "Debunking common myths and exploring the scientific basis of German homeopathic dilutions. Why holistic treatments provide long term cures without side-effects.", tag: "Treatment" },
  ];
  const videos = [
    { id: "GROST5WDZQk", title: "Hypersensitive Glans Treatment" },
    { id: "6IsSe9Q5SFs", title: "Phimosis Treatment without Surgery" },
    { id: "iyGTDYFzFBY", title: "5 Best Balance Medicines" },
    { id: "VTm_KICkLKM", title: "Top 5 Phimosis Medicines" },
  ];

  return (
    <section className="media-blogs" id="media">
      <div className="container">
        <p className="overline">Insights &amp; Media</p>
        <h2 className="section-title">Popular Videos &amp; Articles</h2>
        <div className="media-grid">
          <div className="media-video-column">
            <h3 style={{ fontFamily: "'Playfair Display',serif", fontSize: "1.4rem", marginBottom: "1.5rem", color: "var(--text)" }}>Featured Videos</h3>
            <div className="video-main-wrap">
              <div className="video-wrap">
                <iframe
                  src={`https://www.youtube.com/embed/${videos[0].id}`}
                  title={videos[0].title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
              <p className="video-caption">{videos[0].title}</p>
            </div>
            <div className="video-sub-grid">
              {videos.slice(1).map((v, i) => (
                <div key={i} className="video-item-sub">
                  <div className="video-wrap">
                    <iframe
                      src={`https://www.youtube.com/embed/${v.id}`}
                      title={v.title}
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  </div>
                  <p className="video-caption">{v.title}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="media-articles">
            <h3 style={{ fontFamily: "'Playfair Display',serif", fontSize: "1.4rem", marginBottom: "1.5rem", color: "var(--text)" }}>Latest Articles</h3>
            {blogs.map((b, i) => (
              <div key={i} className="blog-card">
                <div className="blog-tag">{b.tag}</div>
                <h3>{b.title}</h3>
                <p>{b.desc}</p>
                <span className="blog-date">{b.date}</span>
              </div>
            ))}
            <a href="/blog" className="btn-secondary" style={{ alignSelf: "flex-start", marginTop: "0.5rem" }}>
              View All Articles &rarr;
            </a>
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
          <div className="trust-dot" />
          <div className="trust-item"><span>🇺🇸</span> ISO Certified (USA)</div>
          <div className="trust-dot" />
          <div className="trust-item"><span>📖</span> World Book of Records</div>
          <div className="trust-dot" />
          <div className="trust-item"><span>🏛️</span> Govt. Registered Clinic</div>
          <div className="trust-dot" />
          <div className="trust-item"><span>🔒</span> 100% Confidential Care</div>
          <div className="trust-dot" />
          <div className="trust-item"><span>💻</span> Online Consultation Available</div>
        </div>
      </div>

      {/* ── WHY CHOOSE US ── */}
      <section className="why" id="why">
        <div className="container">
          <div className="why-grid">
            <div>
              <p className="overline">Why Choose Us</p>
              <h2 className="section-title">Sexual Health Care<br />Rooted in Trust &amp;<br />Expertise</h2>
              <p style={{ fontSize: "0.92rem", color: "var(--muted)", lineHeight: 1.8, margin: "1.25rem 0 2rem" }}>
                We understand that sexual health is an essential part of overall well-being. Dr. Rajesh Manghnani and his team provide compassionate, non-judgmental, personalized care — addressing both physical and psychological aspects of every condition.
              </p>
              <div className="trust-cards">
                {[
                  { icon: "🎓", title: "Specialized Expertise", desc: "Specialized training in sexual medicine, a member of the American College of Sexology — India's leading expert in diagnosis and treatment of sexual disorders." },
                  { icon: "🌿", title: "Holistic Approach", desc: "Combining evidence-based medicine with traditional homeopathic healing for natural, long-lasting results with minimal side effects." },
                  { icon: "🔒", title: "Strict Confidentiality", desc: "Discreet billing, private entry, secure records — your privacy is our foremost priority at every step of the consultation." },
                  { icon: "💻", title: "Convenient Online Care", desc: "Secure video and phone consultations for patients across India and abroad — Mon to Sat, from the comfort of your home." },
                  { icon: "📋", title: "Personalized Plans", desc: "Free diet charts, exercise suggestions, and fully customized treatment plans tailored to your specific health history." },
                  { icon: "⭐", title: "Proven Track Record", desc: "4.9/5 rating on Justdial with 887+ verified reviews — recognized as Best Sexologist in Bhopal by Practo, Sulekha & more." },
                ].map((c, i) => (
                  <div key={i} className="trust-card">
                    <div className="trust-card-icon">{c.icon}</div>
                    <div className="trust-card-title">{c.title}</div>
                    <div className="trust-card-desc">{c.desc}</div>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <div className="doctor-card">
                <img src="/images/image copy.png" alt="Dr. Rajesh Manghnani Clinic" />
                <div className="doctor-stats-bar">
                  <div><div className="ds-val">23+</div><div className="ds-label">Yrs Practice</div></div>
                  <div><div className="ds-val">5.5L+</div><div className="ds-label">Patients</div></div>
                  <div><div className="ds-val">4.9★</div><div className="ds-label">Justdial</div></div>
                  <div><div className="ds-val">2</div><div className="ds-label">Clinics</div></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SERVICES ── */}
      <section className="services" id="services">
        <div className="container">
          <p className="overline">Our Specialities</p>
          <h2 className="section-title">Comprehensive Treatment Services</h2>
          <p style={{ fontSize: "0.92rem", color: "var(--muted)", maxWidth: "560px", lineHeight: 1.8, marginTop: "0.75rem" }}>
            Evidence-based, holistic treatment for a wide range of sexual health concerns — delivered with compassion and expertise.
          </p>
          <div className="services-grid">
            {[
              { num: "01", icon: "💊", title: "Erectile Dysfunction", desc: "Inability to achieve or maintain an erection — treated through personalized plans combining counselling and homeopathic medicine.", href: "/services/erectile-dysfunction", img: "https://bestsexologistdoctor.com/wp-content/uploads/2023/03/Untitled-design-1024x576.png" },
              { num: "02", icon: "⏱️", title: "Premature Ejaculation", desc: "Targeted behavioral and medical therapies addressing both psychological and physical causes — proven to improve control.", href: "/services/premature-ejaculation", img: "https://bestsexologistdoctor.com/wp-content/uploads/2023/03/ematiure-1024x576.png" },
              { num: "03", icon: "❤️", title: "Low Libido & Desire", desc: "Hormonal and psychological approaches addressing decreased interest in sexual activity due to stress or relationship factors.", href: "/services/low-libido", img: "https://bestsexologistdoctor.com/wp-content/uploads/2023/03/Untitled-design-1024x576.png" },
              { num: "04", icon: "🌙", title: "Nightfall Treatment", desc: "Safe, effective solutions for nocturnal emissions using holistic lifestyle guidance and homeopathic German medicines.", href: "/services/nightfall", img: "https://bestsexologistdoctor.com/wp-content/uploads/2023/03/ematiure-3-1024x576.png" },
              { num: "05", icon: "🔬", title: "Male Infertility", desc: "Comprehensive fertility assessments and advanced diagnostic protocols to improve sperm health and support couples.", href: "/services/infertility", img: "https://bestsexologistdoctor.com/wp-content/uploads/2023/03/ematiure-5-1024x576.png" },
              { num: "06", icon: "👩‍⚕️", title: "Female Sexual Problems", desc: "Specialized care for vaginismus, orgasmic disorders, and low female desire — handled with full discretion.", href: "/services/female-sexual-problems", img: "https://bestsexologistdoctor.com/wp-content/uploads/2023/03/Untitled-design-1-1024x576.png" },
              { num: "07", icon: "🧠", title: "Sexual Anxiety", desc: "Confidential counseling to overcome performance anxiety, communication barriers, and psychological barriers to intimacy.", href: "/services/sexual-anxiety", img: "https://bestsexologistdoctor.com/wp-content/uploads/2023/03/Untitled-design-1024x576.png" },
              { num: "08", icon: "🩺", title: "STI Treatment", desc: "Discrete testing and management of sexually transmitted infections including chlamydia, gonorrhea, and related conditions.", href: "/services/sti-treatment", img: "https://bestsexologistdoctor.com/wp-content/uploads/2023/03/ematiure-1-1024x576.png" },
              { num: "09", icon: "🤝", title: "Couples Counseling", desc: "Professional guidance to help couples overcome intimacy barriers and strengthen their relationship bonds.", href: "/services/couples-counseling", img: "https://bestsexologistdoctor.com/wp-content/uploads/2023/03/ematiure-1024x576.png" },
            ].map((s, i) => (
              <div key={i} className="service-card">
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

      {/* ── CONDITIONS ── */}
      <section className="conditions">
        <div className="container">
          <p className="overline">Comprehensive Care</p>
          <h2 className="section-title">Conditions We Treat</h2>
          <div className="conditions-grid">
            {[
              "Erectile Dysfunction", "Premature Ejaculation", "Low Libido / Loss of Desire",
              "Nightfall (Wet Dreams)", "Penis Size & Performance", "Male Infertility",
              "Sexual Weakness", "Masturbation Effects", "Lack of Confidence",
              "Ling Ki Kamzori / Shighrapatan", "Sexual Anxiety", "Vaginismus",
              "Orgasmic Disorders", "Delayed Ejaculation", "Genital Pain Syndrome", "Sex Addiction",
            ].map((c, i) => (
              <div key={i} className="condition-pill">
                <span className="condition-pill-arrow">→</span>{c}
              </div>
            ))}
          </div>
          <div className="conditions-cta">
            <a href="https://bestsexologistdoctor.com/index.php/disease-treatment-best-sexologist-treatment-in-bhopal/" className="btn-primary" target="_blank" rel="noopener">
              View All Conditions &amp; Treatments
            </a>
          </div>
        </div>
      </section>

      {/* ── CERTIFICATIONS ── */}
      <section className="certs">
        <div className="container" style={{ textAlign: "center" }}>
          <p className="overline" style={{ textAlign: "center" }}>Accreditations &amp; Recognition</p>
          <h2 className="section-title" style={{ textAlign: "center" }}>Trusted by Thousands, Recognized by All</h2>
          <div className="certs-flex">
            {[
              { icon: "🎓", title: "BHMS Graduate", sub: "Govt. Homeopathy Medical College" },
              { icon: "🇺🇸", title: "American College of Sexology", sub: "Member · Clinical Sexology" },
              { icon: "🏅", title: "ISO Certified", sub: "International Quality Standard · USA" },
              { icon: "📖", title: "World Book of Records", sub: "Recognized Achievement" },
              { icon: "🏛️", title: "Govt. Registered Clinic", sub: "Bhopal & Mumbai, India" },
            ].map((c, i) => (
              <div key={i} className="cert-badge">
                <div className="cert-icon">{c.icon}</div>
                <div className="cert-title">{c.title}</div>
                <div className="cert-sub">{c.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── RATINGS ── */}
      <section className="ratings-section">
        <div className="container">
          <p className="overline" style={{ textAlign: "center" }}>Platform Ratings</p>
          <h2 className="section-title" style={{ textAlign: "center" }}>Top Rated Across All Platforms</h2>
          <div className="ratings-grid">
            {[
              { platform: "Justdial · Kasturba Nagar", score: "4.9", count: "887+ Verified Ratings" },
              { platform: "Justdial · Kasturba Nagar (Gynae)", score: "4.6", count: "80 Ratings · 19 Years in Healthcare" },
              { platform: "Justdial · Arera Colony", score: "4.7", count: "486 Ratings & Reviews" },
            ].map((r, i) => (
              <div key={i} className="rating-card">
                <div className="rating-platform">{r.platform}</div>
                <div className="rating-score">{r.score}</div>
                <div className="rating-stars">★★★★★</div>
                <div className="rating-count">{r.count}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ABOUT DOCTOR ── */}
      <section className="about" id="about">
        <div className="container">
          <div className="about-grid">
            <div>
              <p className="overline">About The Doctor</p>
              <h2 className="section-title">Dr. Rajesh Manghnani</h2>
              <p style={{ fontSize: "0.8rem", color: "var(--muted)", fontWeight: 600, marginTop: "0.3rem", letterSpacing: "0.05em", textTransform: "uppercase" }}>
                Senior Consultant · Dr. G.D. Memorial Clinic · Bhopal
              </p>
              <p className="about-desc">
                Dr. Rajesh Manghnani is one of India's most renowned and experienced sexologists with 23+ years of specialized practice. His patient-first philosophy — rooted in trust, clinical discipline, and holistic care — has helped over 5,50,000 patients reclaim confidence and sexual wellness. A member of the American College of Sexology, Dr. Rajesh combines evidence-based medicine with the best of homeopathic German medicines, dilutions, and biochemic salts for 100% effective treatment with no disadvantages.
              </p>
              <ul className="about-list">
                <li>23+ years of specialised sexology practice with proven results</li>
                <li>5,50,000+ consultations managed with confidence and care</li>
                <li>BHMS, Clinical Sexology — Govt. Homeopathy Medical College</li>
                <li>Member, American College of Sexology</li>
                <li>ISO Certified (USA) · World Book of Records Awardee</li>
                <li>Govt. registered clinic in Bhopal &amp; Mumbai</li>
                <li>Free diet charts, exercise &amp; lifestyle guidance with every plan</li>
                <li>Strict patient confidentiality maintained at all times</li>
              </ul>
              <div className="about-stats">
                <div className="about-stat"><div className="about-stat-val">5.5L+</div><div className="about-stat-label">Patients Treated</div></div>
                <div className="about-stat"><div className="about-stat-val">23 Yrs</div><div className="about-stat-label">Of Experience</div></div>
                <div className="about-stat"><div className="about-stat-val">World</div><div className="about-stat-label">Book of Records</div></div>
                <div className="about-stat"><div className="about-stat-val">ISO</div><div className="about-stat-label">Certified (USA)</div></div>
              </div>
              <div className="about-actions">
                <a href="https://bestsexologistdoctor.com/index.php/about-us/" className="btn-primary" target="_blank" rel="noopener">About Dr. Rajesh Manghnani</a>
                <a href="https://bestsexologistdoctor.com/index.php/payment/" className="btn-secondary" target="_blank" rel="noopener">Book Appointment</a>
              </div>
            </div>
            <div>
              <div className="about-img-wrap">
                <img src="/images/image.png" alt="Dr. Rajesh Manghnani – Award-Winning Sexologist" />
                <div className="about-img-overlay">
                  <div className="about-img-tag">🏆 Best Sexologist in Bhopal · Est. 2004</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── MEDIA & BLOGS ── */}
      <MediaAndBlogs />

      {/* ── TESTIMONIALS ── */}
      <section className="testimonials" id="testimonials">
        <div className="container">
          <p className="overline">Patient Stories</p>
          <h2 className="section-title">What Our Patients Say</h2>
          <p style={{ fontSize: "0.9rem", color: "var(--muted)", textAlign: "center", maxWidth: "520px", margin: "0.75rem auto 0", lineHeight: 1.7 }}>
            Real experiences from verified patients across Practo, Sulekha &amp; Justdial.
          </p>
          <div className="testi-grid">
            {[
              { init: "AK", name: "Verified Patient", loc: "Bhopal, MP", src: "via Practo", quote: "He first understands what the problem is, then explains how to change it. I have been taking medicines for 2 months and there has been a lot of difference. Highly recommend." },
              { init: "SJ", name: "Santosh J.", loc: "Bhopal, MP", src: "via Practo", quote: "I consulted for premature ejaculation and precum issues. His medicine and treatment did wonders for me. I got to know about Dr. Rajesh from YouTube — his experience shows." },
              { init: "RK", name: "Rajesh K.", loc: "Bhopal, MP", src: "via Sulekha", quote: "I was suffering from erectile dysfunction with Diabetes Type 2 for a long time. Very depressed — but Dr. Rajesh gave me all solutions to my multiple issues. Life changing!" },
              { init: "VP", name: "Verified Patient", loc: "Bhopal, MP", src: "via Sulekha", quote: "I was suffering from fissure, constipation and acidity for 5 years — no relief from allopathy. But Dr. Rajesh sir's treatment gave me a very comfortable experience. Thanks GD Memorial team!" },
              { init: "AM", name: "Anil M.", loc: "Indore, MP", src: "via Justdial", quote: "Dr. Rajesh is knowledgeable, polite, and caring. Many patients recover from chronic illnesses after a few months of treatment. The free diet chart and exercise guidance is a bonus." },
              { init: "SK", name: "Suresh K.", loc: "Bhopal, MP", src: "via Sulekha", quote: "I had genital warts and weakness since 2018. Visited neurologists and skin specialists — no relief. But Dr. Rajesh sir is a magical doctor. Completely recovered now." },
            ].map((t, i) => (
              <div key={i} className="testi-card">
                <div className="testi-qmark">&ldquo;</div>
                <div className="testi-stars">★★★★★</div>
                <p className="testi-quote">{t.quote}</p>
                <div className="testi-author">
                  <div className="testi-avatar">{t.init}</div>
                  <div>
                    <div className="testi-name">{t.name}</div>
                    <div className="testi-loc">{t.loc}</div>
                    <div className="testi-source">{t.src}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-inner">
            <h2>Ready to Regain Your Confidence?</h2>
            <p>Book a confidential consultation with Dr. Rajesh Manghnani today. Online and in-person appointments available across India — Mon to Sat, 9 AM to 9 PM.</p>
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

      {/* ── FOOTER ── */}
      <footer>
        <div className="container">
          <div className="footer-inner">
            <div className="footer-logo">
              <img src="/images/logo.png" alt="Dr. G.D. Memorial Clinic" style={{ height: "32px", opacity: 0.7 }} />
            </div>
            <div className="footer-links">
              <a href="https://bestsexologistdoctor.com" target="_blank" rel="noopener">Website</a>
              <a href="https://bestsexologistdoctor.com/index.php/about-us/" target="_blank" rel="noopener">About</a>
              <a href="https://bestsexologistdoctor.com/index.php/contact-us/" target="_blank" rel="noopener">Contact</a>
              <a href="https://bestsexologistdoctor.com/index.php/testimonials-best-sexologist-in-bhopal/" target="_blank" rel="noopener">Testimonials</a>
            </div>
          </div>
          <div className="footer-copy">© 2026 Dr. Rajesh Manghnani · Dr. G.D. Memorial Clinic. All rights reserved.</div>
          <div className="footer-copy" style={{ marginTop: "0.3rem" }}>ISO Certified · Est. 2004 · Govt. Registered · American College of Sexology Member · Confidential Care</div>
        </div>
      </footer>
    </div>
  );
}
