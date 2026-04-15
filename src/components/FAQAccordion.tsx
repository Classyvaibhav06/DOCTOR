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
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="section">
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
            Common Questions
          </p>
          <h2 className="section-title center">Frequently Asked Questions</h2>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(480px, 1fr))",
            gap: "0.75rem",
            maxWidth: 1000,
            margin: "0 auto",
          }}
        >
          {FAQS.map((f, i) => (
            <div key={f.q} className={`faq-item ${open === i ? "open" : ""}`}>
              <button
                className="faq-btn"
                onClick={() => setOpen(open === i ? null : i)}
                aria-expanded={open === i}
              >
                <span>{f.q}</span>
                <span className="faq-icon">+</span>
              </button>

              <AnimatePresence>
                {open === i && (
                  <motion.div
                    key="answer"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25, ease: "easeInOut" }}
                    style={{ overflow: "hidden" }}
                  >
                    <div className="faq-answer">{f.a}</div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
