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
    <section className="py-20 md:py-32 bg-[#FAF9F6]">
      <div className="container px-4 mx-auto max-w-7xl">
        
        {/* Header */}
        <div className="flex flex-col flex-wrap items-center justify-between mb-16 gap-8 text-center max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 justify-center mb-2">
            <span className="h-[1px] w-8 bg-[#1A4D3E]"></span>
            <p className="text-sm font-semibold tracking-widest uppercase text-[#1A4D3E]">
              Common Questions
            </p>
            <span className="h-[1px] w-8 bg-[#1A4D3E]"></span>
          </div>
          <h2 className="text-3xl md:text-5xl font-medium text-[#0F2922] tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-[#4A5E58] text-lg mt-4 leading-relaxed">
            Everything you need to know about our treatments, booking, and consultations. Cannot find the answer you're looking for? Please contact us directly.
          </p>
        </div>

        {/* Accordion List */}
        <div className="max-w-4xl mx-auto flex flex-col gap-4">
          {FAQS.map((f, i) => {
            const isOpen = openIndices.includes(i);
            return (
              <div 
                key={i} 
                className={`group border border-[#E8E6DF] rounded-2xl bg-white shadow-sm transition-all duration-300 ease-in-out ${isOpen ? 'ring-1 ring-[#1A4D3E]/20 shadow-md' : 'hover:border-[#1A4D3E]/30 hover:shadow-md'}`}
              >
                <button
                  onClick={() => toggleAccordion(i)}
                  className="w-full text-left flex justify-between items-center px-6 py-5 md:px-8 md:py-6 gap-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1A4D3E] rounded-2xl"
                  aria-expanded={isOpen}
                >
                  <h3 className={`text-base md:text-lg font-semibold transition-colors duration-200 ${isOpen ? 'text-[#1A4D3E]' : 'text-[#0F2922] group-hover:text-[#1A4D3E]'}`}>
                    {f.q}
                  </h3>
                  
                  {/* Plus/Minus Icon */}
                  <div className={`relative flex items-center justify-center shrink-0 w-6 h-6 rounded-full border transition-all duration-300 ${isOpen ? 'bg-[#1A4D3E] border-[#1A4D3E]' : 'border-[#E8E6DF] bg-[#FAF9F6] group-hover:border-[#1A4D3E]/50 group-hover:bg-white'}`}>
                    {/* Horizontal line (always visible) */}
                    <span className={`absolute w-3 h-[2px] transition-colors rounded-full ${isOpen ? 'bg-white' : 'bg-[#1A4D3E]'}`} />
                    {/* Vertical line (rotates completely out of view horizontally when open to form a minus) */}
                    <span 
                      className={`absolute w-3 h-[2px] transition-all duration-300 rounded-full ${isOpen ? 'bg-white rotate-0 opacity-0' : 'bg-[#1A4D3E] rotate-90 opacity-100'}`} 
                    />
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }} // Highly polished ease curve
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 md:px-8 md:pb-8 pt-0 text-[#4A5E58] leading-relaxed text-sm md:text-base border-t border-transparent">
                        <motion.div
                          initial={{ y: -8, opacity: 0 }}
                          animate={{ y: 0, opacity: 1 }}
                          transition={{ delay: 0.1, duration: 0.3 }}
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
