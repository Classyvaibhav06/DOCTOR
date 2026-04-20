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
    <header className="border-b border-[#E8E6DF] bg-[#FAF9F6] text-[#0F2922] font-sans">
      {/* ── Top Info Bar ── */}
      <div className="bg-[#0F2922] text-[#FAF9F6] py-2">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 flex items-center justify-between flex-wrap gap-2 text-xs md:text-sm">
          <div className="flex items-center gap-6 flex-wrap font-medium tracking-wide">
            <a href="tel:+919936604444" className="flex items-center gap-1.5 hover:text-[#25D366] transition-colors">
              <svg width="14" height="14" fill="currentColor" viewBox="0 0 24 24">
                <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1-9.4 0-17-7.6-17-17 0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z"/>
              </svg>
              <span>+91 99366 04444</span>
            </a>
            <a href="mailto:info@drskjain.com" className="flex items-center gap-1.5 hover:text-white transition-colors opacity-80 hover:opacity-100 hidden sm:flex">
              <svg width="14" height="14" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
              </svg>
              <span>info@drskjain.com</span>
            </a>
          </div>
          <div className="flex items-center gap-3">
            <a
              href="/patient-login"
              className="text-[#FAF9F6] border border-[#FAF9F6]/30 px-3 py-1 rounded text-xs font-semibold hover:bg-[#FAF9F6] hover:text-[#0F2922] transition-colors uppercase tracking-widest"
            >
              Patient Login
            </a>
          </div>
        </div>
      </div>

      {/* ── Main Navbar ── */}
      <nav className="max-w-[1400px] mx-auto px-6 md:px-12 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-4 group">
          <div
            className="w-12 h-12 flex-shrink-0 bg-[#1A4D3E] flex items-center justify-center transition-transform group-hover:scale-105"
            style={{ borderRadius: "8px" }}
          >
            <svg viewBox="0 0 40 40" width="24" height="24" fill="none">
              <circle cx="20" cy="20" r="18" fill="rgba(255,255,255,0.1)" stroke="#FAF9F6" strokeWidth="1.5"/>
              <path d="M14 18h5v-5h2v5h5v2h-5v5h-2v-5h-5v-2z" fill="#FAF9F6"/>
            </svg>
          </div>
          <div>
            <div className="text-[#0F2922] font-semibold text-lg md:text-xl tracking-tight leading-none mb-1">
              Burlington Clinic &amp; Hospital
            </div>
            <div className="text-[#4A5E58] text-[0.65rem] font-bold uppercase tracking-widest">
              Dr. Rajesh Maghnani • Since 1926
            </div>
          </div>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-6">
          <div className="flex items-center gap-6 text-[0.9rem] font-medium text-[#4A5E58]">
            {navLinks.slice(0, 7).map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="hover:text-[#1A4D3E] transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#1A4D3E] bg-[#1A4D3E] text-white hover:bg-[#1A4D3E]/90 h-10 px-6 shadow-sm"
          >
            Book Now
          </Link>
        </div>

        {/* Mobile Hamburger Layout */}
        <div className="lg:hidden flex items-center gap-3">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-md text-xs font-semibold uppercase tracking-wider transition-colors border border-[#1A4D3E] text-[#1A4D3E] h-8 px-4"
          >
            Book
          </Link>
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
            className="flex flex-col gap-1.5 p-2"
          >
            <span className={`block w-6 h-0.5 bg-[#0F2922] transition-transform ${menuOpen ? "rotate-45 translate-y-2" : ""}`}></span>
            <span className={`block w-6 h-0.5 bg-[#0F2922] transition-opacity ${menuOpen ? "opacity-0" : ""}`}></span>
            <span className={`block w-6 h-0.5 bg-[#0F2922] transition-transform ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`}></span>
          </button>
        </div>
      </nav>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <div className="lg:hidden bg-white border-t border-[#E8E6DF] px-6 py-4 flex flex-col gap-4 shadow-lg absolute w-full z-50">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-[#0F2922] font-medium py-2 border-b border-[#E8E6DF]/50 last:border-0"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-md text-base font-medium transition-colors bg-[#1A4D3E] text-white hover:bg-[#1A4D3E]/90 h-12 w-full mt-2 shadow-sm"
            onClick={() => setMenuOpen(false)}
          >
            Book Appointment
          </Link>
        </div>
      )}
    </header>
  );
}
