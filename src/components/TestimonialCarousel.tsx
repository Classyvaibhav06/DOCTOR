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
    <section className="section py-16 md:py-24 border-b border-[#E8E6DF]" style={{ backgroundColor: "#F2F0E9" }}>
      <div className="container-xl px-4 mx-auto max-w-7xl">
        {/* Header */}
        <div className="text-center" style={{ marginBottom: "3.5rem" }}>
          <div className="inline-flex items-center gap-2 justify-center mb-4">
            <span className="h-[1px] w-8 bg-[#1A4D3E]"></span>
            <p className="text-sm font-semibold tracking-widest uppercase text-[#1A4D3E]">
              What Our Patients Say
            </p>
            <span className="h-[1px] w-8 bg-[#1A4D3E]"></span>
          </div>
          
          <h2 className="text-3xl md:text-5xl font-medium text-[#0F2922] tracking-tight mb-4">Patient Testimonials</h2>
          <p className="text-[#4A5E58] max-w-2xl mx-auto text-lg">
            Thousands of patients have regained confidence and wellbeing with our trusted care.
          </p>
        </div>

        {/* Cards */}
        <div className="flex gap-6 overflow-hidden">
          <AnimatePresence mode="popLayout">
            {visible.map((t, i) => (
              <motion.div
                key={`${index}-${i}`}
                className="bg-white p-8 border border-[#E8E6DF] shadow-sm flex flex-col"
                style={{ flex: "1", minWidth: 0 }}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ delay: i * 0.08, duration: 0.4 }}
              >
                {/* Stars */}
                <div className="text-[#1A4D3E] text-xl mb-4 tracking-widest">
                  {"★".repeat(t.rating)}
                </div>

                {/* Quote */}
                <p className="text-[#4A5E58] text-lg leading-relaxed mb-8 flex-grow">"{t.text}"</p>

                {/* Meta */}
                <div className="pt-6 border-t border-[#E8E6DF]">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-[#0F2922] font-bold">{t.name}</div>
                      <div className="text-[#4A5E58] text-sm mt-0.5">{t.location}</div>
                    </div>
                    <span
                      style={{
                        fontSize: "0.75rem",
                        fontWeight: 600,
                        background: "#FAF9F6",
                        border: "1px solid #E8E6DF",
                        color: "#1A4D3E",
                        borderRadius: "4px",
                        padding: "0.25rem 0.75rem",
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
        <div className="flex justify-center gap-3 mt-10">
          {TESTIMONIALS.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              aria-label={`Go to testimonial ${i + 1}`}
              style={{
                width: i === index ? 32 : 8,
                height: 8,
                borderRadius: 4,
                background: i === index ? "#1A4D3E" : "#D1D5DB",
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
