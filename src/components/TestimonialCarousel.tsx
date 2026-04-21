"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const TESTIMONIALS = [
  {
    name: "Rajesh K.",
    location: "Bhopal",
    text: "Dr. Rajesh Maghnani's clinic is exceptional. I was very hesitant initially but the confidential environment and professional staff made me comfortable. Noticed significant improvement within 3 weeks.",
    rating: 5,
    treatment: "Erectile Dysfunction",
  },
  {
    name: "Anil S.",
    location: "Kanpur",
    text: "Truly the best sexual health specialist. Clear guidance, compassionate approach and most importantly complete privacy. My life has changed after the treatment.",
    rating: 5,
    treatment: "Premature Ejaculation",
  },
  {
    name: "Suresh M.",
    location: "Varanasi",
    text: "Online consultation was very easy and private. Dr. Rajesh Maghnani's natural treatment approach had no side effects. Highly recommended for anyone hesitant to visit in person.",
    rating: 5,
    treatment: "Online Consultation",
  },
  {
    name: "Vikram R.",
    location: "Delhi",
    text: "I was suffering for years before finding Burlington Clinic. 98 years of legacy shows — the expertise and results are unlike any other clinic I visited.",
    rating: 5,
    treatment: "Low Libido",
  },
  {
    name: "Mohan T.",
    location: "Allahabad",
    text: "Practical, natural treatments with real results. The follow-up care and counselling sessions gave me confidence I hadn't felt in years.",
    rating: 5,
    treatment: "Sexual Counselling",
  },
  {
    name: "Deepak B.",
    location: "Agra",
    text: "Visiting Burlington Clinic was the best decision of my life. The doctor explained everything clearly without any embarrassment. Results in just 4 weeks.",
    rating: 5,
    treatment: "Infertility",
  },
];

export function TestimonialCarousel() {
  const [index, setIndex] = useState(0);
  const [perView, setPerView] = useState(3);

  useEffect(() => {
    const update = () => {
      const w = window.innerWidth;
      if (w >= 1024) setPerView(3);
      else if (w >= 640) setPerView(2);
      else setPerView(1);
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  useEffect(() => {
    const id = setInterval(
      () => setIndex((i) => (i + 1) % TESTIMONIALS.length),
      4500
    );
    return () => clearInterval(id);
  }, []);

  const visible = Array.from({ length: perView }).map(
    (_, i) => TESTIMONIALS[(index + i) % TESTIMONIALS.length]
  );

  return (
    <section
      style={{
        padding: "5rem 0 6rem",
        background: "#F8FAFC",
        borderBottom: "1px solid #DBEAFE",
        fontFamily: "'DM Sans', system-ui, sans-serif",
      }}
    >
      <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 2rem" }}>

        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "3.5rem" }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: "0.6rem", justifyContent: "center", marginBottom: "1.1rem" }}>
            <span style={{ display: "block", height: "1px", width: "28px", background: "#1E40AF" }}></span>
            <p style={{ fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: "#1E40AF", margin: 0 }}>
              What Our Patients Say
            </p>
            <span style={{ display: "block", height: "1px", width: "28px", background: "#1E40AF" }}></span>
          </div>

          <h2 style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)", fontFamily: "'DM Serif Display', Georgia, serif", fontWeight: 400, color: "#0F172A", letterSpacing: "-0.01em", margin: "0 0 0.85rem" }}>
            Patient Testimonials
          </h2>
          <p style={{ color: "#64748B", maxWidth: "560px", margin: "0 auto", fontSize: "1rem", lineHeight: 1.7 }}>
            Thousands of patients have regained confidence and wellbeing with our trusted care.
          </p>
        </div>

        {/* Cards */}
        <div style={{ display: "flex", gap: "1.25rem", overflow: "hidden" }}>
          <AnimatePresence mode="popLayout">
            {visible.map((t, i) => (
              <motion.div
                key={`${index}-${i}`}
                style={{
                  flex: 1, minWidth: 0,
                  background: "#fff",
                  border: "1px solid #DBEAFE",
                  borderRadius: "16px",
                  padding: "2rem",
                  boxShadow: "0 2px 12px rgba(30,64,175,0.06)",
                  display: "flex",
                  flexDirection: "column",
                }}
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -14 }}
                transition={{ delay: i * 0.08, duration: 0.4 }}
              >
                {/* Stars */}
                <div style={{ color: "#F59E0B", fontSize: "1rem", marginBottom: "1rem", letterSpacing: "0.1em" }}>
                  {"★".repeat(t.rating)}
                </div>

                {/* Quote */}
                <p style={{
                  color: "#475569",
                  fontSize: "0.93rem",
                  lineHeight: 1.8,
                  marginBottom: "1.8rem",
                  flexGrow: 1,
                  fontFamily: "'DM Serif Display', Georgia, serif",
                  fontStyle: "italic",
                  fontWeight: 400,
                }}>
                  &quot;{t.text}&quot;
                </p>

                {/* Meta */}
                <div style={{ paddingTop: "1.2rem", borderTop: "1px solid #EFF6FF" }}>
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "0.75rem" }}>
                    <div>
                      <div style={{ color: "#0F172A", fontWeight: 700, fontSize: "0.88rem" }}>{t.name}</div>
                      <div style={{ color: "#94A3B8", fontSize: "0.76rem", marginTop: "0.2rem" }}>{t.location}</div>
                    </div>
                    <span
                      style={{
                        fontSize: "0.68rem",
                        fontWeight: 700,
                        background: "#EFF6FF",
                        border: "1px solid #DBEAFE",
                        color: "#1E40AF",
                        borderRadius: "6px",
                        padding: "0.22rem 0.7rem",
                        whiteSpace: "nowrap",
                        letterSpacing: "0.02em",
                        textTransform: "uppercase",
                      }}
                    >
                      {t.treatment}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Dots */}
        <div style={{ display: "flex", justifyContent: "center", gap: "0.6rem", marginTop: "2.5rem" }}>
          {TESTIMONIALS.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              aria-label={`Go to testimonial ${i + 1}`}
              style={{
                width: i === index ? 32 : 8,
                height: 8,
                borderRadius: 4,
                background: i === index ? "#1E40AF" : "#CBD5E1",
                border: "none",
                cursor: "pointer",
                transition: "width 0.3s cubic-bezier(0.16,1,0.3,1), background 0.3s",
                padding: 0,
              }}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
