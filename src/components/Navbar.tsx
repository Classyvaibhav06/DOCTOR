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
    <header>
      {/* ── Top Info Bar ── */}
      <div className="topbar py-1">
        <div className="container-xl flex items-center justify-between flex-wrap gap-2">
          <div className="flex items-center gap-4 flex-wrap">
            <a href="tel:+919936604444" className="flex items-center gap-1">
              <svg width="13" height="13" fill="currentColor" viewBox="0 0 24 24">
                <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1-9.4 0-17-7.6-17-17 0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z"/>
              </svg>
              <span>+91 99366 04444</span>
            </a>
            <a href="tel:+919695014444" className="flex items-center gap-1">
              <svg width="13" height="13" fill="currentColor" viewBox="0 0 24 24">
                <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1-9.4 0-17-7.6-17-17 0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z"/>
              </svg>
              <span>+91 96950 14444</span>
            </a>
            <a href="mailto:info@drskjain.com" className="flex items-center gap-1">
              <svg width="13" height="13" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
              </svg>
              <span>info@drskjain.com</span>
            </a>
          </div>
          <div className="flex items-center gap-3">
            {/* Social icons */}
            {[
              { icon: "f", label: "Facebook", href: "#" },
              { icon: "t", label: "Twitter", href: "#" },
              { icon: "in", label: "Instagram", href: "#" },
              { icon: "yt", label: "YouTube", href: "#" },
            ].map((s) => (
              <a
                key={s.label}
                href={s.href}
                aria-label={s.label}
                style={{
                  width: 22,
                  height: 22,
                  borderRadius: 4,
                  background: "rgba(255,255,255,0.15)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "0.6rem",
                  fontWeight: 700,
                  color: "#fff",
                  textDecoration: "none",
                }}
              >
                {s.icon}
              </a>
            ))}
            <a
              href="/patient-login"
              style={{
                fontSize: "0.72rem",
                fontWeight: 600,
                color: "#fcd34d",
                textDecoration: "none",
                border: "1px solid rgba(252,211,77,0.5)",
                padding: "0.15rem 0.6rem",
                borderRadius: 4,
              }}
            >
              Patient Login
            </a>
          </div>
        </div>
      </div>

      {/* ── Ticker ── */}
      <div className="ticker-wrap">
        <div className="ticker-inner">
          {[1, 2].map((rep) => (
            <span key={rep}>
              🏆 Record Holder – World Book of Records &nbsp;|&nbsp;
              ✅ ISO Certified (USA) &nbsp;|&nbsp;
              🌍 Serving Patients Since 1926 &nbsp;|&nbsp;
              🔒 100% Confidential Consultations &nbsp;|&nbsp;
              📞 Book Appointment: +91 99366 04444 &nbsp;|&nbsp;
              💻 Online Consultation Available &nbsp;|&nbsp;
            </span>
          ))}
        </div>
      </div>

      {/* ── Main Navbar ── */}
      <nav className="navbar">
        <div className="container-xl flex items-center justify-between" style={{ height: 72 }}>
          {/* Logo */}
          <Link href="/" style={{ textDecoration: "none" }}>
            <div className="flex items-center gap-3">
              <div
                style={{
                  width: 50,
                  height: 50,
                  borderRadius: "50%",
                  background: "linear-gradient(135deg, #0a1628, #1c3c74)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                  boxShadow: "0 2px 8px rgba(0,0,0,0.2)",
                }}
              >
                <svg viewBox="0 0 40 40" width="28" height="28" fill="none">
                  <circle cx="20" cy="20" r="18" fill="rgba(220,38,38,0.12)" stroke="#dc2626" strokeWidth="1.5"/>
                  <path d="M14 18h5v-5h2v5h5v2h-5v5h-2v-5h-5v-2z" fill="#dc2626"/>
                  <path d="M10 28 Q20 12 30 28" stroke="#fcd34d" strokeWidth="1" fill="none" strokeDasharray="2,2"/>
                </svg>
              </div>
              <div>
                <div className="navbar-logo-text" style={{ fontSize: "clamp(0.85rem, 1.5vw, 1.05rem)" }}>
                  Dr. Rajesh Maghnani&apos;s Burlington Clinic &amp; Hospital
                </div>
                <div className="navbar-logo-sub">SINCE 1926 · BHOPAL · MUMBAI · ISO CERTIFIED (USA)</div>
              </div>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="flex items-center gap-1" style={{ display: "none" }} id="desktop-nav">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href} className="nav-link" style={{ padding: "0.3rem 0.65rem" }}>
                {link.label}
              </Link>
            ))}
            <Link href="/contact" className="btn-book" style={{ marginLeft: "0.5rem" }}>
              Book Appointment
            </Link>
          </div>

          {/* Desktop Nav (shown via CSS) */}
          <div
            className="flex items-center gap-1"
            style={{ fontSize: "clamp(0.7rem, 1.1vw, 0.875rem)" }}
          >
            <div className="flex items-center gap-1" style={{ flexWrap: "nowrap" }}>
              {navLinks.slice(0, 5).map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="nav-link"
                  style={{ padding: "0.3rem 0.5rem", whiteSpace: "nowrap" }}
                >
                  {link.label}
                </Link>
              ))}
            </div>
            <Link href="/contact" className="btn-book" style={{ marginLeft: "0.5rem", whiteSpace: "nowrap" }}>
              Book Now
            </Link>

            {/* Mobile Hamburger */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
              style={{
                background: "none",
                border: "2px solid #dc2626",
                borderRadius: 6,
                padding: "0.3rem 0.5rem",
                cursor: "pointer",
                color: "#dc2626",
                marginLeft: "0.5rem",
                display: "none",
              }}
              id="mobile-menu-btn"
            >
              ☰
            </button>
          </div>
        </div>

        {/* Mobile Dropdown */}
        {menuOpen && (
          <div
            style={{
              background: "#fff",
              borderTop: "1px solid #e5e7eb",
              padding: "1rem",
              display: "flex",
              flexDirection: "column",
              gap: "0.5rem",
            }}
          >
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="nav-link"
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </div>
        )}
      </nav>
    </header>
  );
}
