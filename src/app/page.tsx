"use client";
import { useState } from "react";
import { Navigation } from "@/components/Navigation";
import JsonLd, { generateFAQSchema } from "@/components/JsonLd";

export function FAQSection() {
  const faqs = [
    { q: "Is my consultation completely confidential?", a: "Yes, absolutely. Dr. G.D. Memorial Clinic maintains strict confidentiality at every step — from discreet billing and communication to private entry and records. Your privacy is our foremost priority." },
    { q: "Can I consult online from another city?", a: "Yes. We offer secure video and phone consultations for patients across India and abroad. Our online consultation platform is private, easy to use, and available Monday to Saturday, 9 AM to 9 PM." },
    { q: "Are treatments natural with no side effects?", a: "We specialize in holistic treatments using homeopathic German medicines, dilutions, biochemic salts, syrups and mother tinctures. Our medicines offer 100% effective treatment with no disadvantages. Each plan is fully customized to your condition and medical history." },
    { q: "What is the consultation fee?", a: "Consultation fee is ₹500 at the Kasturba Nagar clinic. Dr. Rajesh also offers free phone consultations for initial queries. Online appointment booking is available at bestsexologistdoctor.com/payment." },
    { q: "How many patients has the clinic treated?", a: "Dr. G.D. Memorial Clinic has successfully treated over 5,50,000 patients since its establishment — making it one of India's most experienced and trusted sexual health and wellness practices." },
    { q: "Where are the clinic locations?", a: "Main clinic: 47, Sector C, Kasturba Nagar, Near Chetak Bridge, Bhopal – 462023. Second location: GM Tower, 10 Number Market, Near Bake N Shake, Arera Colony, Bhopal – 462016. Online consultations available pan-India." }
  ];

  const [openIdx, setOpenIdx] = useState<number | null>(null);
  const faqSchema = generateFAQSchema(faqs);

  return (
    <section className="faq" id="faq">
      <JsonLd data={faqSchema} />
      <div className="container">
        <p className="overline">Common Questions</p>
        <h2 className="section-title">Frequently Asked Questions</h2>
        <div className="faq-grid">
          {faqs.map((faq, index) => (
            <div key={index} className={`faq-item ${openIdx === index ? 'open' : ''}`} onClick={() => setOpenIdx(openIdx === index ? null : index)}>
              <div className="faq-q">{faq.q} <div className="faq-chevron">▾</div></div>
              <div className="faq-a" style={{ maxHeight: openIdx === index ? '500px' : '0' }}>
                <div className="faq-a-inner">{faq.a}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}



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
        <p className="overline">Insights & Media</p>
        <h2 className="section-title">Popular Videos & Articles</h2>
        <div className="media-grid">
          <div className="media-video-column">
            <h3 style={{color: '#fff', marginBottom: '1.5rem', fontSize: '1.5rem'}}>Featured Videos</h3>
            <div className="video-main-wrap">
               <div className="video-wrap">
                 <iframe src={`https://www.youtube.com/embed/${videos[0].id}`} title={videos[0].title} frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
               </div>
               <p className="video-caption">{videos[0].title}</p>
            </div>
            
            <div className="video-sub-grid">
               {videos.slice(1).map((v, i) => (
                 <div key={i} className="video-item-sub">
                    <div className="video-wrap">
                      <iframe src={`https://www.youtube.com/embed/${v.id}`} title={v.title} frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                    </div>
                    <p className="video-caption">{v.title}</p>
                 </div>
               ))}
            </div>
          </div>
          <div className="media-articles">
             {blogs.map((b, i) => (
                <div key={i} className="blog-card bg-glass">
                   <div className="blog-tag">{b.tag}</div>
                   <h3>{b.title}</h3>
                   <p>{b.desc}</p>
                   <span className="blog-date">{b.date}</span>
                </div>
             ))}
             <a href="/blog" className="btn-secondary" style={{alignSelf: 'flex-start', marginTop: '0.5rem', textDecoration: 'none'}}>View All Articles &rarr;</a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <div className="redesigned-home">
      <Navigation />

{/* HERO */}
<section className="hero">
  <div className="hero-bg"></div>
  <div className="hero-grain"></div>
  <div className="hero-line"></div>
  <div className="hero-left">
    <div className="hero-badge">
      <span className="hero-badge-dot"></span>
      #1 Sexologist in Bhopal · Justdial 4.9/5
    </div>
    <h1>India's Most <em>Trusted</em><br/>Sexologist &<br/>Wellness Expert</h1>
    <p className="hero-sub">Dr. Rajesh Manghnani brings 23+ years of specialized expertise in sexual health, combining evidence-based medicine with holistic healing. Personalized, confidential care for men and women across India.</p>
    <div className="hero-actions">
      <a href="https://bestsexologistdoctor.com/index.php/payment/" className="btn-primary" target="_blank">Book Appointment Online</a>
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
  <div className="hero-right">
    <div className="hero-img-wrap">
      <img src="https://bestsexologistdoctor.com/wp-content/uploads/2025/11/photo-output.jpg" alt="Dr. Rajesh Manghnani – Best Sexologist Doctor in Bhopal" onError={(e) => { e.currentTarget.style.display="none"; }}/>
      <div style={{display:"none", background:"rgba(255,255,255,0.04)", height:"460px", alignItems:"center", justifyContent:"center", borderRadius:"12px 12px 0 0"}}><span style={{fontSize:"8rem", opacity:0.15}}>👨‍⚕️</span></div>
      <div className="hero-img-badge">
        <div className="hero-img-badge-val">887+</div>
        <div className="hero-img-badge-label">Verified Reviews</div>
      </div>
      <div className="hero-img-badge2">
        <div className="badge2-icon">🏆</div>
        <div>
          <div className="badge2-text-top">American College of</div>
          <div className="badge2-text-val">Sexology Member</div>
        </div>
      </div>
    </div>
  </div>
</section>

{/* TRUST BAR */}
<div className="trust-bar">
  <div className="trust-bar-inner">
    <div className="trust-item"><span>🏅</span> BHMS Certified · Clinical Sexology</div>
    <div className="trust-dot"></div>
    <div className="trust-item"><span>🇺🇸</span> ISO Certified (USA)</div>
    <div className="trust-dot"></div>
    <div className="trust-item"><span>📖</span> World Book of Records</div>
    <div className="trust-dot"></div>
    <div className="trust-item"><span>🏛️</span> Govt. Registered Clinic</div>
    <div className="trust-dot"></div>
    <div className="trust-item"><span>🔒</span> 100% Confidential Care</div>
    <div className="trust-dot"></div>
    <div className="trust-item"><span>💻</span> Online Consultation Available</div>
  </div>
</div>

{/* WHY CHOOSE US */}
<section className="why" id="why">
  <div className="container">
    <div className="why-grid">
      <div>
        <p className="overline">Why Choose Us</p>
        <h2 className="section-title">Sexual Health Care<br/>Rooted in Trust &<br/>Expertise</h2>
        <p style={{fontSize:"0.9rem", color:"var(--muted)", lineHeight:1.8, margin:"1.25rem 0 2rem"}}>We understand that sexual health is an essential part of overall well-being. Dr. Rajesh Manghnani and his team provide compassionate, non-judgmental, personalized care — addressing both physical and psychological aspects of every condition.</p>
        <div className="trust-cards">
          <div className="trust-card">
            <div className="trust-card-icon">🎓</div>
            <div className="trust-card-title">Specialized Expertise</div>
            <div className="trust-card-desc">Specialized training in sexual medicine, a member of the American College of Sexology — India's leading expert in diagnosis and treatment of sexual disorders.</div>
          </div>
          <div className="trust-card">
            <div className="trust-card-icon">🌿</div>
            <div className="trust-card-title">Holistic Approach</div>
            <div className="trust-card-desc">Combining evidence-based medicine with traditional homeopathic healing for natural, long-lasting results with minimal side effects.</div>
          </div>
          <div className="trust-card">
            <div className="trust-card-icon">🔒</div>
            <div className="trust-card-title">Strict Confidentiality</div>
            <div className="trust-card-desc">Discreet billing, private entry, secure records — your privacy is our foremost priority at every step of the consultation.</div>
          </div>
          <div className="trust-card">
            <div className="trust-card-icon">💻</div>
            <div className="trust-card-title">Convenient Online Care</div>
            <div className="trust-card-desc">Secure video and phone consultations for patients across India and abroad — Mon to Sat, from the comfort of your home.</div>
          </div>
          <div className="trust-card">
            <div className="trust-card-icon">📋</div>
            <div className="trust-card-title">Personalized Plans</div>
            <div className="trust-card-desc">Free diet charts, exercise suggestions, and fully customized treatment plans tailored to your specific health history.</div>
          </div>
          <div className="trust-card">
            <div className="trust-card-icon">⭐</div>
            <div className="trust-card-title">Proven Track Record</div>
            <div className="trust-card-desc">4.9/5 rating on Justdial with 887+ verified reviews — recognized as Best Sexologist in Bhopal by Practo, Sulekha & more.</div>
          </div>
        </div>
      </div>
      <div>
        <div className="doctor-card">
          <img src="https://bestsexologistdoctor.com/wp-content/uploads/2023/02/Untitled-design-20.png" alt="Dr. Rajesh Manghnani Clinic" onError={(e) => { e.currentTarget.style.display="none"; }}/>
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

{/* SERVICES */}
<section className="services" id="services">
  <div className="container">
    <p className="overline">Our Specialities</p>
    <h2 className="section-title">Comprehensive Treatment Services</h2>
    <p style={{fontSize:"0.9rem", color:"rgba(255,255,255,0.4)", maxWidth:"560px", lineHeight:1.8, marginTop:"0.75rem"}}>Evidence-based, holistic treatment for a wide range of sexual health concerns — delivered with compassion and expertise.</p>
    <div className="services-grid">
      <div className="service-card">
        <div className="service-num">01</div>
        <div className="service-icon">💊</div>
        <div className="service-title">Erectile Dysfunction</div>
        <div className="service-desc">Inability to achieve or maintain an erection — treated through personalized plans combining counselling and homeopathic medicine for lasting confidence.</div>
        <a href="/services/erectile-dysfunction" className="service-arrow">Learn More →</a>
      </div>
      <div className="service-card">
        <div className="service-num">02</div>
        <div className="service-icon">⏱️</div>
        <div className="service-title">Premature Ejaculation</div>
        <div className="service-desc">Targeted behavioral and medical therapies addressing both psychological and physical causes — proven to improve control and satisfaction.</div>
        <a href="/services/premature-ejaculation" className="service-arrow">Learn More →</a>
      </div>
      <div className="service-card">
        <div className="service-num">03</div>
        <div className="service-icon">❤️</div>
        <div className="service-title">Low Libido & Desire</div>
        <div className="service-desc">Hormonal and psychological approaches addressing decreased interest in sexual activity due to stress, medication, or relationship factors.</div>
        <a href="/services/low-libido" className="service-arrow">Learn More →</a>
      </div>
      <div className="service-card">
        <div className="service-num">04</div>
        <div className="service-icon">🌙</div>
        <div className="service-title">Nightfall Treatment</div>
        <div className="service-desc">Safe, effective solutions for nocturnal emissions using holistic lifestyle guidance and homeopathic German medicines with no side effects.</div>
        <a href="/services/nightfall" className="service-arrow">Learn More →</a>
      </div>
      <div className="service-card">
        <div className="service-num">05</div>
        <div className="service-icon">🔬</div>
        <div className="service-title">Male Infertility</div>
        <div className="service-desc">Comprehensive fertility assessments and advanced diagnostic protocols to improve sperm health and support couples struggling to conceive.</div>
        <a href="/services/infertility" className="service-arrow">Learn More →</a>
      </div>
      <div className="service-card">
        <div className="service-num">06</div>
        <div className="service-icon">👩‍⚕️</div>
        <div className="service-title">Female Sexual Problems</div>
        <div className="service-desc">Specialized care for vaginismus, orgasmic disorders, genital pain syndrome, low female desire, and body image concerns — handled with full discretion.</div>
        <a href="/services/female-sexual-problems" className="service-arrow">Learn More →</a>
      </div>
      <div className="service-card">
        <div className="service-num">07</div>
        <div className="service-icon">🧠</div>
        <div className="service-title">Sexual Anxiety & Counselling</div>
        <div className="service-desc">Confidential counseling and couples therapy to overcome performance anxiety, communication barriers, and psychological barriers to intimacy.</div>
        <a href="/services/sexual-anxiety" className="service-arrow">Learn More →</a>
      </div>
      <div className="service-card">
        <div className="service-num">08</div>
        <div className="service-icon">🩺</div>
        <div className="service-title">STI Diagnosis & Treatment</div>
        <div className="service-desc">Discrete testing and management of sexually transmitted infections including chlamydia, gonorrhea, genital warts, and related conditions.</div>
        <a href="/services/sti-treatment" className="service-arrow">Learn More →</a>
      </div>
      <div className="service-card">
        <div className="service-num">09</div>
        <div className="service-icon">🤝</div>
        <div className="service-title">Couples Counseling</div>
        <div className="service-desc">Professional guidance to help couples overcome intimacy barriers, improve communication, and strengthen their relationship bonds.</div>
        <a href="/services/couples-counseling" className="service-arrow">Learn More →</a>
      </div>
    </div>
  </div>
</section>

{/* CONDITIONS */}
<section className="conditions">
  <div className="container">
    <p className="overline">Comprehensive Care</p>
    <h2 className="section-title">Conditions We Treat</h2>
    <div className="conditions-grid">
      <div className="condition-pill"><span className="condition-pill-arrow">→</span>Erectile Dysfunction</div>
      <div className="condition-pill"><span className="condition-pill-arrow">→</span>Premature Ejaculation</div>
      <div className="condition-pill"><span className="condition-pill-arrow">→</span>Low Libido / Loss of Desire</div>
      <div className="condition-pill"><span className="condition-pill-arrow">→</span>Nightfall (Wet Dreams)</div>
      <div className="condition-pill"><span className="condition-pill-arrow">→</span>Penis Size & Performance</div>
      <div className="condition-pill"><span className="condition-pill-arrow">→</span>Male Infertility</div>
      <div className="condition-pill"><span className="condition-pill-arrow">→</span>Sexual Weakness</div>
      <div className="condition-pill"><span className="condition-pill-arrow">→</span>Masturbation Effects</div>
      <div className="condition-pill"><span className="condition-pill-arrow">→</span>Lack of Confidence</div>
      <div className="condition-pill"><span className="condition-pill-arrow">→</span>Ling Ki Kamzori / Shighrapatan</div>
      <div className="condition-pill"><span className="condition-pill-arrow">→</span>Sexual Anxiety</div>
      <div className="condition-pill"><span className="condition-pill-arrow">→</span>Vaginismus</div>
      <div className="condition-pill"><span className="condition-pill-arrow">→</span>Orgasmic Disorders</div>
      <div className="condition-pill"><span className="condition-pill-arrow">→</span>Delayed Ejaculation</div>
      <div className="condition-pill"><span className="condition-pill-arrow">→</span>Genital Pain Syndrome</div>
      <div className="condition-pill"><span className="condition-pill-arrow">→</span>Sex Addiction</div>
    </div>
    <div className="conditions-cta">
      <a href="https://bestsexologistdoctor.com/index.php/disease-treatment-best-sexologist-treatment-in-bhopal/" className="btn-primary" target="_blank">View All Conditions & Treatments</a>
    </div>
  </div>
</section>

{/* CERTIFICATIONS */}
<section className="certs">
  <div className="container" style={{textAlign:"center"}}>
    <p className="overline" style={{textAlign:"center"}}>Accreditations & Recognition</p>
    <h2 className="section-title" style={{textAlign:"center"}}>Trusted by Thousands, Recognized by All</h2>
    <div className="certs-flex">
      <div className="cert-badge">
        <div className="cert-icon">🎓</div>
        <div className="cert-title">BHMS Graduate</div>
        <div className="cert-sub">Govt. Homeopathy Medical College</div>
      </div>
      <div className="cert-badge">
        <div className="cert-icon">🇺🇸</div>
        <div className="cert-title">American College of Sexology</div>
        <div className="cert-sub">Member · Clinical Sexology</div>
      </div>
      <div className="cert-badge">
        <div className="cert-icon">🏅</div>
        <div className="cert-title">ISO Certified</div>
        <div className="cert-sub">International Quality Standard · USA</div>
      </div>
      <div className="cert-badge">
        <div className="cert-icon">📖</div>
        <div className="cert-title">World Book of Records</div>
        <div className="cert-sub">Recognized Achievement</div>
      </div>
      <div className="cert-badge">
        <div className="cert-icon">🏛️</div>
        <div className="cert-title">Govt. Registered Clinic</div>
        <div className="cert-sub">Bhopal & Mumbai, India</div>
      </div>
    </div>
  </div>
</section>

{/* RATINGS */}
<section className="ratings-section">
  <div className="container">
    <p className="overline" style={{textAlign:"center"}}>Platform Ratings</p>
    <h2 className="section-title" style={{textAlign:"center"}}>Top Rated Across All Platforms</h2>
    <div className="ratings-grid">
      <div className="rating-card">
        <div className="rating-platform">Justdial · Kasturba Nagar</div>
        <div className="rating-score">4.9</div>
        <div className="rating-stars">★★★★★</div>
        <div className="rating-count">887+ Verified Ratings</div>
      </div>
      <div className="rating-card">
        <div className="rating-platform">Justdial · Kasturba Nagar (Gynae)</div>
        <div className="rating-score">4.6</div>
        <div className="rating-stars">★★★★★</div>
        <div className="rating-count">80 Ratings · 19 Years in Healthcare</div>
      </div>
      <div className="rating-card">
        <div className="rating-platform">Justdial · Arera Colony</div>
        <div className="rating-score">4.7</div>
        <div className="rating-stars">★★★★★</div>
        <div className="rating-count">486 Ratings & Reviews</div>
      </div>
    </div>
  </div>
</section>

{/* ABOUT DOCTOR */}
<section className="about" id="about">
  <div className="container">
    <div className="about-grid">
      <div>
        <p className="overline">About The Doctor</p>
        <h2 className="section-title">Dr. Rajesh Manghnani</h2>
        <p style={{fontSize:"0.85rem", color:"rgba(255,255,255,0.4)", fontWeight:500, marginTop:"0.25rem", letterSpacing:"0.05em", textTransform:"uppercase"}}>Senior Consultant · Dr. G.D. Memorial Clinic · Bhopal</p>
        <p className="about-desc">Dr. Rajesh Manghnani is one of India's most renowned and experienced sexologists with 23+ years of specialized practice. His patient-first philosophy — rooted in trust, clinical discipline, and holistic care — has helped over 5,50,000 patients reclaim confidence and sexual wellness. A member of the American College of Sexology, Dr. Rajesh combines evidence-based medicine with the best of homeopathic German medicines, dilutions, and biochemic salts for 100% effective treatment with no disadvantages.</p>
        <ul className="about-list">
          <li>23+ years of specialised sexology practice with proven results</li>
          <li>5,50,000+ consultations managed with confidence and care</li>
          <li>BHMS, Clinical Sexology — Govt. Homeopathy Medical College</li>
          <li>Member, American College of Sexology</li>
          <li>ISO Certified (USA) · World Book of Records Awardee</li>
          <li>Govt. registered clinic in Bhopal & Mumbai</li>
          <li>Free diet charts, exercise & lifestyle guidance with every plan</li>
          <li>Strict patient confidentiality maintained at all times</li>
        </ul>
        <div className="about-stats">
          <div className="about-stat"><div className="about-stat-val">5.5L+</div><div className="about-stat-label">Patients Treated</div></div>
          <div className="about-stat"><div className="about-stat-val">23 Yrs</div><div className="about-stat-label">Of Experience</div></div>
          <div className="about-stat"><div className="about-stat-val">World</div><div className="about-stat-label">Book of Records</div></div>
          <div className="about-stat"><div className="about-stat-val">ISO</div><div className="about-stat-label">Certified (USA)</div></div>
        </div>
        <div className="about-actions">
          <a href="https://bestsexologistdoctor.com/index.php/about-us/" className="btn-primary" target="_blank">About Dr. Rajesh Manghnani</a>
          <a href="https://bestsexologistdoctor.com/index.php/payment/" className="btn-outline" target="_blank">Book Appointment</a>
        </div>
      </div>
      <div>
        <div className="about-img-wrap">
          <img src="https://bestsexologistdoctor.com/wp-content/uploads/2025/11/photo-output.jpg" alt="Dr. Rajesh Manghnani – Award-Winning Sexologist" onError={(e) => { e.currentTarget.style.display="none"; }}/>
          <div id="about-fallback" style={{display:"none", background:"rgba(255,255,255,0.04)", height:"520px", alignItems:"center", justifyContent:"center"}}><span style={{fontSize:"8rem", opacity:0.1}}>👨‍⚕️</span></div>
          <div className="about-img-overlay">
            <div className="about-img-tag">🏆 Best Sexologist in Bhopal · Est. 2004</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

{/* TESTIMONIALS */}
<MediaAndBlogs />
<section className="testimonials" id="testimonials">
  <div className="container">
    <p className="overline">Patient Stories</p>
    <h2 className="section-title">What Our Patients Say</h2>
    <p style={{fontSize:"0.9rem", color:"var(--muted)", textAlign:"center", maxWidth:"520px", margin:"0.75rem auto 0", lineHeight:1.7}}>Real experiences from verified patients across Practo, Sulekha & Justdial.</p>
    <div className="testi-grid">
      <div className="testi-card">
        <div className="testi-qmark">"</div>
        <div className="testi-stars">★★★★★</div>
        <p className="testi-quote">He first understands what the problem is, then explains how to change it. I have been taking medicines for 2 months and there has been a lot of difference. Highly recommend.</p>
        <div className="testi-author">
          <div className="testi-avatar">AK</div>
          <div>
            <div className="testi-name">Verified Patient</div>
            <div className="testi-loc">Bhopal, MP</div>
            <div className="testi-source">via Practo</div>
          </div>
        </div>
      </div>
      <div className="testi-card">
        <div className="testi-qmark">"</div>
        <div className="testi-stars">★★★★★</div>
        <p className="testi-quote">I consulted for premature ejaculation and precum issues. His medicine and treatment did wonders for me. I got to know about Dr. Rajesh from YouTube — his experience shows.</p>
        <div className="testi-author">
          <div className="testi-avatar">SJ</div>
          <div>
            <div className="testi-name">Santosh J.</div>
            <div className="testi-loc">Bhopal, MP</div>
            <div className="testi-source">via Practo</div>
          </div>
        </div>
      </div>
      <div className="testi-card">
        <div className="testi-qmark">"</div>
        <div className="testi-stars">★★★★★</div>
        <p className="testi-quote">I was suffering from erectile dysfunction with Diabetes Type 2 for a long time. Very depressed — but Dr. Rajesh gave me all solutions to my multiple issues. Life changing!</p>
        <div className="testi-author">
          <div className="testi-avatar">RK</div>
          <div>
            <div className="testi-name">Rajesh K.</div>
            <div className="testi-loc">Bhopal, MP</div>
            <div className="testi-source">via Sulekha</div>
          </div>
        </div>
      </div>
      <div className="testi-card">
        <div className="testi-qmark">"</div>
        <div className="testi-stars">★★★★★</div>
        <p className="testi-quote">I was suffering from fissure, constipation and acidity for 5 years — no relief from allopathy. But Dr. Rajesh sir's treatment gave me a very comfortable experience. Thanks GD Memorial team!</p>
        <div className="testi-author">
          <div className="testi-avatar">VP</div>
          <div>
            <div className="testi-name">Verified Patient</div>
            <div className="testi-loc">Bhopal, MP</div>
            <div className="testi-source">via Sulekha</div>
          </div>
        </div>
      </div>
      <div className="testi-card">
        <div className="testi-qmark">"</div>
        <div className="testi-stars">★★★★★</div>
        <p className="testi-quote">Dr. Rajesh is knowledgeable, polite, and caring. Many patients recover from chronic illnesses after a few months of treatment. The free diet chart and exercise guidance is a bonus.</p>
        <div className="testi-author">
          <div className="testi-avatar">AM</div>
          <div>
            <div className="testi-name">Anil M.</div>
            <div className="testi-loc">Indore, MP</div>
            <div className="testi-source">via Justdial</div>
          </div>
        </div>
      </div>
      <div className="testi-card">
        <div className="testi-qmark">"</div>
        <div className="testi-stars">★★★★★</div>
        <p className="testi-quote">I had genital warts and weakness since 2018. Visited neurologists and skin specialists — no relief. But Dr. Rajesh sir is a magical doctor. Completely recovered now.</p>
        <div className="testi-author">
          <div className="testi-avatar">SK</div>
          <div>
            <div className="testi-name">Suresh K.</div>
            <div className="testi-loc">Bhopal, MP</div>
            <div className="testi-source">via Sulekha</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

{/* CTA */}
<section className="cta-section">
  <div className="container">
    <div className="cta-inner">
      <h2>Ready to Regain Your Confidence?</h2>
      <p>Book a confidential consultation with Dr. Rajesh Manghnani today. Online and in-person appointments available across India — Mon to Sat, 9 AM to 9 PM.</p>
      <div className="cta-buttons">
        <a href="https://bestsexologistdoctor.com/index.php/payment/" className="btn-white" target="_blank">Book Appointment Online</a>
        <a href="tel:+919893880001" className="btn-ghost">Call: +91 9893880001</a>
        <a href="https://wa.me/919936604444" className="btn-whatsapp" target="_blank">💬 WhatsApp Now</a>
      </div>
    </div>
  </div>
</section>

<FAQSection />
{/* LOCATIONS */}
<section className="locations" id="locations">
  <div className="container">
    <p className="overline">Visit Us</p>
    <h2 className="section-title">Clinic Locations</h2>
    <div className="loc-grid">
      <div className="loc-card">
        <div className="loc-icon">🏥</div>
        <div className="loc-city">DR RAJESH'S CLINIC (Bhopal)</div>
        <p style={{fontSize:'0.9rem', color:'var(--gold2)', fontWeight:'700', marginBottom:'0.5rem'}}>DR RAJESH'S SEXOLOGY CLINIC</p>
        <div className="loc-address">Shop No. 1, S.K. Plaza, Near Chetak Bridge, Govindpura, Bhopal, Madhya Pradesh 462023</div>
        <div className="loc-phone">📞 +91 98938 80001</div>
        <div className="loc-hours">Mon - Sat: 11:00 AM - 8:00 PM</div>
        
        <div className="map-embed" style={{marginTop: '1.5rem', borderRadius: '8px', overflow: 'hidden', height: '200px', border: '1px solid rgba(212,168,83,0.3)'}}>
           <iframe 
             src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3665.8117967965415!2d77.43821677532057!3d23.23229707902492!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x397c37e912d09cf3%3A0x55bf79788220dcae!2sDR%20RAJESH'S%20SEXOLOGY%20CLINIC-Best%20Sexologist%20Doctor%20In%20Bhopal!5e0!3m2!1sen!2sin!4v1713372605481!5m2!1sen!2sin" 
             width="100%" 
             height="100%" 
             style={{border:0}} 
             allowFullScreen 
             loading="lazy">
           </iframe>
        </div>
      </div>
      <div className="loc-card">
        <div className="loc-icon">📍</div>
        <div className="loc-city">Arera Colony Branch</div>
        <div className="loc-address">Shop No 05, Ground Floor, GM Tower, 10 Number Market, Near Bake N Shake, Arera Colony, Bhopal – 462016, Madhya Pradesh</div>
        <div className="loc-phone">📞 +91 9893880001</div>
        <div className="loc-hours">🕐 Mon–Sat: 10 AM – 7 PM</div>
      </div>
      <div className="loc-card">
        <div className="loc-icon">💻</div>
        <div className="loc-city">Online Consultation</div>
        <div className="loc-address">Secure video & phone consultations for patients across India and abroad — completely private and confidential</div>
        <div className="loc-phone">📞 +91 9893880001  |  💬 +91 9936604444</div>
        <div className="loc-hours">🕐 Mon–Sat: 9 AM – 9 PM</div>
      </div>
    </div>
  </div>
</section>

{/* FOOTER */}
<footer>
  <div className="container">
    <div className="footer-inner">
      <div className="footer-logo">Dr. G.D. Memorial Clinic · Dr. Rajesh Manghnani</div>
      <div className="footer-links">
        <a href="https://bestsexologistdoctor.com" target="_blank">Website</a>
        <a href="https://bestsexologistdoctor.com/index.php/about-us/" target="_blank">About</a>
        <a href="https://bestsexologistdoctor.com/index.php/contact-us/" target="_blank">Contact</a>
        <a href="https://bestsexologistdoctor.com/index.php/testimonials-best-sexologist-in-bhopal/" target="_blank">Testimonials</a>
      </div>
      <div>
        <div className="footer-copy">© 2026 Dr. Rajesh Manghnani · Dr. G.D. Memorial Clinic. All rights reserved.</div>
        <div className="footer-copy" style={{marginTop:"0.3rem"}}>ISO Certified · Est. 2004 · Govt. Registered · American College of Sexology Member · Confidential Care</div>
      </div>
    </div>
  </div>
</footer>


    </div>
  );
}
