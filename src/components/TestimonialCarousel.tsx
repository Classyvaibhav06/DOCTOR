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
    <section className="section" style={{ background: "#f3f4f6" }}>
      <div className="container-xl">
        {/* Header */}
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
            What Our Patients Say
          </p>
          <h2 className="section-title center">Patient Testimonials</h2>
          <p className="section-subtitle" style={{ margin: "1.25rem auto 0", textAlign: "center" }}>
            Thousands of patients have regained confidence and wellbeing with our trusted care.
          </p>
        </div>

        {/* Cards */}
        <div className="flex gap-4 overflow-hidden">
          <AnimatePresence mode="popLayout">
            {visible.map((t, i) => (
              <motion.div
                key={`${index}-${i}`}
                className="testimonial-card"
                style={{ flex: "1", minWidth: 0 }}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ delay: i * 0.08, duration: 0.4 }}
              >
                {/* Stars */}
                <div className="testimonial-star">
                  {"★".repeat(t.rating)}
                </div>

                {/* Quote */}
                <p className="testimonial-text">"{t.text}"</p>

                {/* Meta */}
                <div>
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="testimonial-author">{t.name}</div>
                      <div className="testimonial-location">{t.location}</div>
                    </div>
                    <span
                      style={{
                        fontSize: "0.7rem",
                        fontWeight: 600,
                        background: "rgba(220,38,38,0.1)",
                        color: "#dc2626",
                        borderRadius: 100,
                        padding: "0.2rem 0.6rem",
                        whiteSpace: "nowrap",
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
        <div className="flex justify-center gap-2" style={{ marginTop: "1.5rem" }}>
          {TESTIMONIALS.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              aria-label={`Go to testimonial ${i + 1}`}
              style={{
                width: i === index ? 24 : 8,
                height: 8,
                borderRadius: 4,
                background: i === index ? "#dc2626" : "#d1d5db",
                border: "none",
                cursor: "pointer",
                transition: "width 0.3s, background 0.3s",
                padding: 0,
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
