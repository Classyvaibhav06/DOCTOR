"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const stats = [
  { value: "5,50,000+", label: "Patients Treated" },
  { value: "98+", label: "Years of Legacy" },
  { value: "100%", label: "Confidential" },
  { value: "24/7", label: "Online Consult" },
];

export function HeroSection({ city }: { city: string }) {
  return (
    <section className="hero">
      <div className="container-xl w-full relative" style={{ zIndex: 1, padding: "3rem 0" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr auto",
            gap: "2rem",
            alignItems: "center",
          }}
        >
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            {/* Badge */}
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="hero-badge">
                <svg width="10" height="10" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
                ISO Certified (USA) · World Book of Records Holder
              </span>
              <span className="hero-badge">
                <svg width="10" height="10" fill="currentColor" viewBox="0 0 24 24">
                  <circle cx="12" cy="12" r="10"/>
                </svg>
                Online Consultation Available
              </span>
            </div>

            <h1 className="hero-title" style={{ marginBottom: "1rem" }}>
              Best Sexologist in <span>{city}</span>
              <br />Dr. Rajesh Maghnani&apos;s Burlington
              <br />Clinic &amp; Hospital
            </h1>

            <p className="hero-sub" style={{ marginBottom: "1.5rem" }}>
              India&apos;s most trusted sexual health clinic since 1926. Discreet, evidence-based care
              for men&apos;s sexual health with natural treatments and complete confidentiality.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-3" style={{ marginBottom: "2.5rem" }}>
              <Link
                href="/contact"
                className="btn-book"
                style={{ padding: "0.75rem 1.75rem", fontSize: "0.95rem", borderRadius: 6 }}
              >
                Book Appointment
              </Link>
              <a
                href="tel:+919936604444"
                style={{
                  padding: "0.75rem 1.75rem",
                  fontSize: "0.95rem",
                  borderRadius: 6,
                  border: "2px solid rgba(255,255,255,0.4)",
                  color: "#fff",
                  textDecoration: "none",
                  fontWeight: 600,
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.4rem",
                  transition: "border-color 0.2s",
                  background: "rgba(255,255,255,0.05)",
                }}
              >
                <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1-9.4 0-17-7.6-17-17 0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z"/>
                </svg>
                Call Now: +91 99366 04444
              </a>
              <a
                href="https://wa.me/919936604444"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  padding: "0.75rem 1.75rem",
                  fontSize: "0.95rem",
                  borderRadius: 6,
                  background: "#25d366",
                  color: "#fff",
                  textDecoration: "none",
                  fontWeight: 600,
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.4rem",
                }}
              >
                WhatsApp Us
              </a>
            </div>

            {/* Stats */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(4, 1fr)",
                gap: "0.75rem",
              }}
            >
              {stats.map((s) => (
                <div key={s.label} className="stat-chip">
                  <span className="stat-chip-value">{s.value}</span>
                  <span className="stat-chip-label">{s.label}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right — Doctor Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            style={{ width: "clamp(220px, 28vw, 360px)", flexShrink: 0 }}
          >
            <div
              style={{
                borderRadius: 16,
                overflow: "hidden",
                border: "3px solid rgba(220,38,38,0.4)",
                boxShadow: "0 24px 60px rgba(0,0,0,0.4)",
                background: "rgba(255,255,255,0.05)",
              }}
            >
              <Image
                src="/images/doctor-portrait.png"
                alt="Dr. Rajesh Maghnani — Best Sexologist"
                width={360}
                height={440}
                style={{ width: "100%", height: "auto", display: "block" }}
                priority
              />
            </div>
            {/* Floating credential tag */}
            <div
              style={{
                marginTop: "0.75rem",
                background: "rgba(255,255,255,0.1)",
                border: "1px solid rgba(255,255,255,0.2)",
                borderRadius: 10,
                padding: "0.75rem 1rem",
                display: "flex",
                gap: "0.75rem",
                alignItems: "center",
                backdropFilter: "blur(8px)",
              }}
            >
              <div
                style={{
                  width: 40,
                  height: 40,
                  borderRadius: "50%",
                  background: "linear-gradient(135deg,#dc2626,#991b1b)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#fff",
                  fontWeight: 800,
                  fontSize: "0.7rem",
                  flexShrink: 0,
                }}
              >
                RM
              </div>
              <div>
                <div style={{ color: "#fff", fontWeight: 700, fontSize: "0.85rem" }}>Dr. Rajesh Maghnani</div>
                <div style={{ color: "rgba(255,255,255,0.6)", fontSize: "0.7rem" }}>
                  Senior Sexologist · 50+ Yrs Exp
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
