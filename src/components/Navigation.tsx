"use client";
import React, { useState, useEffect } from "react";

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className={`${isOpen ? "nav-open" : ""} ${scrolled ? "scrolled" : ""}`}>
      <div className="nav-logo">
        <a href="/" className="nav-logo-link">
          <img src="/images/logo.png" alt="Dr. G.D. Memorial Clinic" />
        </a>
      </div>

      <div
        className="nav-toggle"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle navigation"
      >
        <div className="bar" />
        <div className="bar" />
        <div className="bar" />
      </div>

      <ul className={`nav-links ${isOpen ? "active" : ""}`}>
        <li><a href="/"             onClick={() => setIsOpen(false)}>HOME</a></li>
        <li><a href="/services"      onClick={() => setIsOpen(false)}>SERVICES</a></li>
        <li><a href="/#about"        onClick={() => setIsOpen(false)}>ABOUT</a></li>
        <li><a href="/#testimonials" onClick={() => setIsOpen(false)}>REVIEWS</a></li>
        <li><a href="/#locations"    onClick={() => setIsOpen(false)}>LOCATIONS</a></li>
        <li><a href="/blog"          onClick={() => setIsOpen(false)}>BLOG</a></li>
        <li><a href="/#faq"          onClick={() => setIsOpen(false)}>FAQ</a></li>
        <li className="mobile-only-cta">
          <a href="tel:+919893880001" className="nav-cta">BOOK APPOINTMENT</a>
        </li>
      </ul>

      <a href="tel:+919893880001" className="nav-cta desktop-only-cta">
        BOOK APPOINTMENT
      </a>
    </nav>
  );
}
