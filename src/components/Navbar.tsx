"use client";

import Link from "next/link";
import { useState } from "react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/disease", label: "Disease" },
  { href: "/about", label: "About" },
  { href: "/media", label: "Media" },
  { href: "/gallery", label: "Gallery" },
  { href: "/ask-online", label: "Ask Online" },
  { href: "/faqs", label: "FAQs" },
  { href: "/contact", label: "Contact Us" },
];

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header style={{ borderBottom: "1px solid #DBEAFE", background: "#FFFFFF", color: "#0F172A", fontFamily: "'DM Sans', system-ui, sans-serif" }}>
      {/* ── Top Info Bar ── */}
      <div style={{ background: "#1E40AF", color: "#FFFFFF", padding: "0.5rem 0" }}>
        <div style={{ maxWidth: "1400px", margin: "0 auto", padding: "0 1.5rem", display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: "0.5rem", fontSize: "0.78rem" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "1.5rem", flexWrap: "wrap", fontWeight: 600, letterSpacing: "0.04em" }}>
            <a href="tel:+919936604444" style={{ display: "flex", alignItems: "center", gap: "0.35rem", color: "rgba(255,255,255,0.92)", textDecoration: "none", transition: "color 0.2s" }}
              onMouseEnter={e => (e.currentTarget.style.color = "#fff")}
              onMouseLeave={e => (e.currentTarget.style.color = "rgba(255,255,255,0.92)")}
            >
              <svg width="13" height="13" fill="currentColor" viewBox="0 0 24 24">
                <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1-9.4 0-17-7.6-17-17 0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z"/>
              </svg>
              <span>+91 99366 04444</span>
            </a>
            <a href="mailto:info@drskjain.com" style={{ display: "flex", alignItems: "center", gap: "0.35rem", color: "rgba(255,255,255,0.70)", textDecoration: "none", transition: "color 0.2s" }}
              onMouseEnter={e => (e.currentTarget.style.color = "#fff")}
              onMouseLeave={e => (e.currentTarget.style.color = "rgba(255,255,255,0.70)")}
            >
              <svg width="13" height="13" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
              </svg>
              <span>info@drskjain.com</span>
            </a>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
            <a
              href="/patient-login"
              style={{
                color: "rgba(255,255,255,0.90)", border: "1px solid rgba(255,255,255,0.35)",
                padding: "0.2rem 0.8rem", borderRadius: "6px", fontSize: "0.7rem",
                fontWeight: 700, textDecoration: "none", textTransform: "uppercase",
                letterSpacing: "0.12em", transition: "all 0.2s",
              }}
              onMouseEnter={e => { e.currentTarget.style.background = "rgba(255,255,255,0.12)"; e.currentTarget.style.borderColor = "rgba(255,255,255,0.6)"; }}
              onMouseLeave={e => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.borderColor = "rgba(255,255,255,0.35)"; }}
            >
              Patient Login
            </a>
          </div>
        </div>
      </div>

      {/* ── Main Navbar ── */}
      <nav style={{ maxWidth: "1400px", margin: "0 auto", padding: "0 1.5rem", display: "flex", alignItems: "center", justifyContent: "space-between", height: "72px" }}>
        {/* Logo */}
        <Link href="/" style={{ display: "flex", alignItems: "center", gap: "0.85rem", textDecoration: "none" }}>
          <div
            style={{ width: "46px", height: "46px", flexShrink: 0, background: "#1E40AF", borderRadius: "10px", display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 4px 14px rgba(30,64,175,0.3)", transition: "transform 0.2s" }}
            onMouseEnter={e => (e.currentTarget.style.transform = "scale(1.06)")}
            onMouseLeave={e => (e.currentTarget.style.transform = "scale(1)")}
          >
            <svg viewBox="0 0 40 40" width="22" height="22" fill="none">
              <circle cx="20" cy="20" r="18" fill="rgba(255,255,255,0.08)" stroke="#fff" strokeWidth="1.5"/>
              <path d="M14 18h5v-5h2v5h5v2h-5v5h-2v-5h-5v-2z" fill="#fff"/>
            </svg>
          </div>
          <div>
            <div style={{ color: "#0F172A", fontWeight: 700, fontSize: "1.05rem", letterSpacing: "-0.01em", lineHeight: 1, marginBottom: "0.25rem", fontFamily: "'DM Sans', system-ui, sans-serif" }}>
              Burlington Clinic &amp; Hospital
            </div>
            <div style={{ color: "#64748B", fontSize: "0.62rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.14em" }}>
              Dr. Rajesh Maghnani · Since 1926
            </div>
          </div>
        </Link>

        {/* Desktop Nav */}
        <div style={{ display: "flex", alignItems: "center", gap: "1.5rem" }} className="desktop-nav-wrap">
          <div style={{ display: "flex", alignItems: "center", gap: "1.6rem", fontSize: "0.78rem", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.06em" }}>
            {navLinks.slice(0, 7).map((link) => (
              <Link
                key={link.href}
                href={link.href}
                style={{ color: "#64748B", textDecoration: "none", transition: "color 0.2s" }}
                onMouseEnter={e => (e.currentTarget.style.color = "#1E40AF")}
                onMouseLeave={e => (e.currentTarget.style.color = "#64748B")}
              >
                {link.label}
              </Link>
            ))}
          </div>
          <Link
            href="/contact"
            style={{
              display: "inline-flex", alignItems: "center", justifyContent: "center",
              borderRadius: "8px", fontSize: "0.78rem", fontWeight: 700,
              textTransform: "uppercase", letterSpacing: "0.06em", textDecoration: "none",
              background: "#1E40AF", color: "#fff", padding: "0.6rem 1.4rem",
              boxShadow: "0 4px 14px rgba(30,64,175,0.28)", transition: "all 0.22s",
              whiteSpace: "nowrap",
            }}
            onMouseEnter={e => { e.currentTarget.style.background = "#1D3A9E"; e.currentTarget.style.boxShadow = "0 6px 20px rgba(30,64,175,0.38)"; e.currentTarget.style.transform = "translateY(-1px)"; }}
            onMouseLeave={e => { e.currentTarget.style.background = "#1E40AF"; e.currentTarget.style.boxShadow = "0 4px 14px rgba(30,64,175,0.28)"; e.currentTarget.style.transform = "translateY(0)"; }}
          >
            Book Now
          </Link>
        </div>

        {/* Mobile Controls */}
        <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }} className="mobile-nav-controls">
          <Link
            href="/contact"
            style={{
              display: "inline-flex", alignItems: "center", justifyContent: "center",
              borderRadius: "7px", fontSize: "0.72rem", fontWeight: 700,
              textTransform: "uppercase", letterSpacing: "0.08em", textDecoration: "none",
              border: "1.5px solid #1E40AF", color: "#1E40AF",
              padding: "0.4rem 0.9rem", transition: "all 0.2s",
            }}
            onMouseEnter={e => { e.currentTarget.style.background = "#1E40AF"; e.currentTarget.style.color = "#fff"; }}
            onMouseLeave={e => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.color = "#1E40AF"; }}
            className="mobile-book-btn"
          >
            Book
          </Link>
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
            style={{ display: "flex", flexDirection: "column", gap: "5px", padding: "0.4rem", background: "none", border: "none", cursor: "pointer" }}
            className="hamburger-btn"
          >
            <span style={{ display: "block", width: "22px", height: "2px", background: "#0F172A", borderRadius: "2px", transition: "transform 0.3s", transform: menuOpen ? "rotate(45deg) translateY(7px)" : "none" }}></span>
            <span style={{ display: "block", width: "22px", height: "2px", background: "#0F172A", borderRadius: "2px", transition: "opacity 0.3s", opacity: menuOpen ? 0 : 1 }}></span>
            <span style={{ display: "block", width: "22px", height: "2px", background: "#0F172A", borderRadius: "2px", transition: "transform 0.3s", transform: menuOpen ? "rotate(-45deg) translateY(-7px)" : "none" }}></span>
          </button>
        </div>
      </nav>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <div style={{ background: "#fff", borderTop: "1px solid #DBEAFE", padding: "1rem 1.5rem 1.5rem", display: "flex", flexDirection: "column", gap: "0.25rem", boxShadow: "0 8px 32px rgba(30,64,175,0.10)", position: "absolute", width: "100%", zIndex: 50 }}>
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              style={{ color: "#0F172A", fontWeight: 600, padding: "0.75rem 0", borderBottom: "1px solid #EFF6FF", textDecoration: "none", fontSize: "0.9rem", transition: "color 0.2s" }}
              onMouseEnter={e => (e.currentTarget.style.color = "#1E40AF")}
              onMouseLeave={e => (e.currentTarget.style.color = "#0F172A")}
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            style={{
              display: "flex", alignItems: "center", justifyContent: "center",
              borderRadius: "8px", fontSize: "0.88rem", fontWeight: 700,
              textDecoration: "none", background: "#1E40AF", color: "#fff",
              padding: "0.85rem 1.5rem", marginTop: "0.75rem",
              boxShadow: "0 4px 14px rgba(30,64,175,0.25)",
            }}
            onClick={() => setMenuOpen(false)}
          >
            Book Appointment
          </Link>
        </div>
      )}

      <style>{`
        @media (min-width: 1024px) {
          .desktop-nav-wrap { display: flex !important; }
          .mobile-nav-controls { display: none !important; }
        }
        @media (max-width: 1023px) {
          .desktop-nav-wrap { display: none !important; }
          .mobile-nav-controls { display: flex !important; }
        }
      `}</style>
    </header>
  );
}
