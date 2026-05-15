"use client";

import Image from "next/image";
import Link from "next/link";

const stats = [
  { value: "5.5L+", label: "Patients Treated" },
  { value: "98+", label: "Years of Legacy" },
  { value: "100%", label: "Confidential" },
  { value: "24/7", label: "Online Consult" },
];

export function HeroSection({ city, onBook }: { city: string, onBook?: () => void }) {
  return (
    <section style={{ 
      position: "relative", 
      width: "100%", 
      background: "var(--bg-hero)", 
      color: "#fff", 
      fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif", 
      paddingTop: "7rem", 
      paddingBottom: "6rem",
      overflow: "hidden"
    }}>
      {/* Decorative texture or grain if desired */}
      <div style={{ position: "absolute", inset: 0, opacity: 0.05, pointerEvents: "none", backgroundImage: "url('https://www.transparenttextures.com/patterns/carbon-fibre.png')" }}></div>
      <div style={{ maxWidth: "1400px", margin: "0 auto", padding: "0 1.5rem", position: "relative", zIndex: 10 }}>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "4rem", alignItems: "center" }}>
          
          {/* Left Content */}
          <div style={{ flex: 1, minWidth: "280px", display: "flex", flexDirection: "column", gap: "1.75rem" }}>
            <div style={{ display: "inline-flex", alignItems: "center", gap: "0.6rem" }}>
              <span style={{ display: "block", height: "1px", width: "32px", background: "#3c8f8c" }}></span>
              <p style={{ fontSize: "0.72rem", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: "#3c8f8c", margin: 0 }}>
                Established 1926
              </p>
            </div>

            <h1 style={{ 
              fontSize: "clamp(2.4rem, 5vw, 4.2rem)", 
              fontFamily: "'Plus Jakarta Sans', sans-serif", 
              fontWeight: 800, 
              lineHeight: 1.1, 
              letterSpacing: "-0.03em", 
              color: "#fff", 
              margin: 0 
            }}>
              The Trusted Name in <br className="hidden md:block" />
              Men&apos;s Health.
            </h1>

            <p style={{ fontSize: "1.1rem", color: "rgba(255,255,255,0.7)", lineHeight: 1.8, maxWidth: "600px", margin: 0, fontWeight: 400 }}>
              Discreet, evidence-based care under the expertise of Dr. Rajesh Maghnani. 
              Comprehensive natural treatments delivering lasting results with total confidentiality in {city}.
            </p>

            {/* CTA Buttons */}
            <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "0.85rem", paddingTop: "0.5rem" }}>
              <button
                onClick={onBook}
                style={{
                  display: "inline-flex", alignItems: "center", justifyContent: "center",
                  borderRadius: "8px", fontSize: "0.86rem", fontWeight: 700,
                  letterSpacing: "0.02em", textDecoration: "none",
                  background: "#3c8f8c", color: "#fff",
                  padding: "0.75rem 1.8rem", height: "48px",
                  boxShadow: "0 4px 16px rgba(60,143,140,0.28)",
                  transition: "all 0.22s",
                  border: "none", cursor: "pointer"
                }}
                onMouseEnter={e => { e.currentTarget.style.background = "#2d6d6b"; e.currentTarget.style.transform = "translateY(-1px)"; }}
                onMouseLeave={e => { e.currentTarget.style.background = "#3c8f8c"; e.currentTarget.style.transform = "translateY(0)"; }}
              >
                Book Appointment
              </button>
              
              <a
                href="tel:+919936604444"
                style={{
                  display: "inline-flex", alignItems: "center", justifyContent: "center",
                  borderRadius: "8px", fontSize: "0.86rem", fontWeight: 600,
                  textDecoration: "none", border: "1.5px solid rgba(255,255,255,0.2)",
                  background: "rgba(255,255,255,0.05)", color: "#fff", padding: "0.75rem 1.8rem", height: "48px",
                  transition: "all 0.22s",
                }}
                onMouseEnter={e => { e.currentTarget.style.background = "rgba(255,255,255,0.1)"; }}
                onMouseLeave={e => { e.currentTarget.style.background = "rgba(255,255,255,0.05)"; }}
              >
                <svg style={{ width: "16px", height: "16px", marginRight: "8px", flexShrink: 0 }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                Call Clinic
              </a>
              
              <a
                href="https://wa.me/919936604444"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "inline-flex", alignItems: "center", justifyContent: "center",
                  borderRadius: "8px", fontSize: "0.86rem", fontWeight: 600,
                  textDecoration: "none", background: "transparent", color: "rgba(255,255,255,0.8)",
                  padding: "0.75rem 1.2rem", height: "48px", transition: "all 0.2s",
                }}
                onMouseEnter={e => { e.currentTarget.style.background = "rgba(255,255,255,0.05)"; e.currentTarget.style.color = "#fff"; }}
                onMouseLeave={e => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.color = "rgba(255,255,255,0.8)"; }}
              >
                <svg style={{ width: "20px", height: "20px", marginRight: "8px", color: "#25D366", flexShrink: 0 }} fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884"/>
                </svg>
                WhatsApp
              </a>
            </div>

            {/* Stats Grid */}
            <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "1.5rem", paddingTop: "2.5rem", marginTop: "1rem", borderTop: "1px solid rgba(255,255,255,0.1)" }}>
              {stats.map((s) => (
                <div key={s.label} style={{ display: "flex", flexDirection: "column" }}>
                  <span style={{ fontSize: "2.2rem", fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 800, color: "#4ca5a2", lineHeight: 1 }}>{s.value}</span>
                  <span style={{ fontSize: "0.76rem", fontWeight: 600, color: "rgba(255,255,255,0.6)", marginTop: "0.4rem", letterSpacing: "0.02em" }}>{s.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right — Image Block */}
          <div style={{ width: "40%", minWidth: "280px", marginTop: "0", position: "relative", flexShrink: 0 }}>
            {/* Shadow block */}
            <div style={{ position: "absolute", top: "10px", right: "-10px", width: "100%", height: "100%", background: "#3c8f8c", zIndex: 0, display: "none" }} className="image-bg-block"></div>
            
            <div style={{ position: "relative", width: "100%", aspectRatio: "4/5", background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: "12px", overflow: "hidden", zIndex: 1 }}>
              <Image
                src="/images/doctor-portrait.png"
                alt="Dr. Rajesh Maghnani — Senior Sexologist"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                style={{ objectFit: "cover", objectPosition: "top" }}
                priority
              />
              
              {/* Name Plate */}
              <div style={{ position: "absolute", bottom: 0, left: 0, width: "100%", background: "rgba(10, 26, 25, 0.95)", borderTop: "1px solid rgba(255,255,255,0.1)", backdropFilter: "blur(8px)", padding: "1.4rem 1.6rem" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
                  <div style={{ width: "4px", height: "48px", background: "#3c8f8c", borderRadius: "2px", flexShrink: 0 }}></div>
                  <div>
                    <h3 style={{ color: "#fff", fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "1.25rem", margin: 0 }}>Dr. Rajesh Manghnani</h3>
                    <p style={{ color: "rgba(255,255,255,0.6)", fontWeight: 500, fontSize: "0.85rem", marginTop: "0.25rem", margin: 0 }}>Senior Sexologist · 50+ Years Expert Care</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
