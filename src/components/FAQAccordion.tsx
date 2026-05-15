"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const FAQS = [
  {
    q: "Is my consultation completely confidential?",
    a: "Yes. Burlington Clinic maintains strict patient confidentiality. All consultations, records, and treatment plans are kept completely private. We never share your information with anyone.",
  },
  {
    q: "Do you offer online consultations?",
    a: "Yes, we offer fully secure online consultations for patients across India and abroad. You can consult from the privacy of your home via video call or phone.",
  },
  {
    q: "What sexual health problems do you treat?",
    a: "We specialize in erectile dysfunction, premature ejaculation, low libido, nightfall, infertility, sexual anxiety, and all men's sexual health conditions. We also offer counselling for couples.",
  },
  {
    q: "How long does treatment take?",
    a: "Most patients see significant improvement within 3-6 weeks. Complete treatment duration varies based on the condition and individual factors. Our doctors create personalized timelines during your consultation.",
  },
  {
    q: "Are the treatments safe and natural?",
    a: "We emphasize natural, holistic treatment methods with minimal side effects. All treatments are evidence-based and FDA/Ayush compliant. We discuss all options, risks, and benefits clearly before starting.",
  },
  {
    q: "What is the clinic's experience?",
    a: "Burlington Clinic has been serving patients since 1926 — nearly 100 years of specialized sexual health expertise. We have treated over 5,50,000 patients and are ISO certified (USA) and a World Book of Records holder.",
  },
  {
    q: "Can I visit the clinic directly without an appointment?",
    a: "While walk-ins are welcome, we recommend booking an appointment to minimize waiting time and ensure dedicated time with the doctor. You can book online or call us directly.",
  },
  {
    q: "Do you have branches outside Bhopal?",
    a: "Our main clinic is in Bhopal with branches in Mumbai. Online consultations are available for patients across all cities and countries.",
  },
];

export function FAQAccordion() {
  const [openIndices, setOpenIndices] = useState<number[]>([0]);

  const toggleAccordion = (index: number) => {
    setOpenIndices((prev) =>
      prev.includes(index)
        ? prev.filter((i) => i !== index)
        : [...prev, index]
    );
  };

  return (
    <section style={{ padding: "5rem 0 6rem", background: "#F8FAFC", fontFamily: "'DM Sans', system-ui, sans-serif" }}>
      <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "0 1.5rem" }}>
        
        {/* Header */}
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", marginBottom: "3.5rem", maxWidth: "680px", marginLeft: "auto", marginRight: "auto" }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: "0.6rem", justifyContent: "center", marginBottom: "1rem" }}>
            <span style={{ display: "block", height: "1px", width: "28px", background: "#3c8f8c" }}></span>
            <p style={{ fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: "#3c8f8c", margin: 0 }}>
              Common Questions
            </p>
            <span style={{ display: "block", height: "1px", width: "28px", background: "#3c8f8c" }}></span>
          </div>
          <h2 style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)", fontFamily: "'DM Serif Display', Georgia, serif", fontWeight: 400, color: "var(--text)", letterSpacing: "-0.01em", margin: "0 0 1rem" }}>
            Frequently Asked Questions
          </h2>
          <p style={{ color: "var(--muted)", fontSize: "1rem", lineHeight: 1.75, margin: 0 }}>
            Everything you need to know about our treatments, booking, and consultations. Cannot find the answer you&apos;re looking for? Please contact us directly.
          </p>
        </div>

        {/* Accordion List */}
        <div style={{ maxWidth: "860px", margin: "0 auto", display: "flex", flexDirection: "column", gap: "0.75rem" }}>
          {FAQS.map((f, i) => {
            const isOpen = openIndices.includes(i);
            return (
              <div 
                key={i}
                style={{
                  border: isOpen ? "1px solid #3c8f8c" : "1px solid #e6f4f3",
                  borderRadius: "14px",
                  background: "#fff",
                  boxShadow: isOpen ? "0 8px 32px rgba(60, 143, 140, 0.09)" : "0 2px 8px rgba(0,0,0,0.04)",
                  transition: "all 0.3s cubic-bezier(0.16,1,0.3,1)",
                  overflow: "hidden",
                  transform: isOpen ? "translateY(-1px)" : "none",
                }}
              >
                <button
                  onClick={() => toggleAccordion(i)}
                  style={{
                    width: "100%", textAlign: "left",
                    display: "flex", justifyContent: "space-between", alignItems: "center",
                    padding: "1.4rem 1.8rem", gap: "1.2rem",
                    background: "none", border: "none", cursor: "pointer",
                    outline: "none",
                  }}
                  aria-expanded={isOpen}
                >
                  <h3 style={{
                    fontSize: "1rem", fontWeight: 600,
                    color: isOpen ? "#3c8f8c" : "var(--text)",
                    transition: "color 0.2s", margin: 0, lineHeight: 1.4,
                  }}>
                    {f.q}
                  </h3>
                  
                  {/* Plus/Minus Icon */}
                  <div style={{
                    position: "relative", display: "flex", alignItems: "center", justifyContent: "center",
                    flexShrink: 0, width: "28px", height: "28px", borderRadius: "50%",
                    border: isOpen ? "1.5px solid #3c8f8c" : "1.5px solid #e6f4f3",
                    background: isOpen ? "#3c8f8c" : "#F8FAFC",
                    transition: "all 0.3s",
                    transform: isOpen ? "rotate(135deg)" : "none",
                  }}>
                    <span style={{ position: "absolute", width: "11px", height: "2px", borderRadius: "2px", background: isOpen ? "#fff" : "#3c8f8c", transition: "background 0.2s" }} />
                    <span style={{ position: "absolute", width: "2px", height: "11px", borderRadius: "2px", background: isOpen ? "#fff" : "#3c8f8c", transition: "all 0.3s", opacity: isOpen ? 0 : 1 }} />
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                      style={{ overflow: "hidden" }}
                    >
                      <div style={{ padding: "0 1.8rem 1.6rem", color: "var(--muted)", lineHeight: 1.8, fontSize: "0.93rem", borderTop: "1px solid #f0f9f9" }}>
                        <motion.div
                          initial={{ y: -6, opacity: 0 }}
                          animate={{ y: 0, opacity: 1 }}
                          transition={{ delay: 0.08, duration: 0.28 }}
                          style={{ paddingTop: "1rem" }}
                        >
                          {f.a}
                        </motion.div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
