"use client";
import React, { useState } from "react";

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className={isOpen ? 'nav-open' : ''}>
      <div className="nav-logo">
        <a href="/" style={{textDecoration:'none', color:'inherit'}}>
          Burlington Clinic
          <span>Dr. Rajesh Manghnani · Since 1926</span>
        </a>
      </div>
      
      <div className="nav-toggle" onClick={() => setIsOpen(!isOpen)}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>

      <ul className={`nav-links ${isOpen ? 'active' : ''}`}>
        <li><a href="/#services" onClick={() => setIsOpen(false)}>Services</a></li>
        <li><a href="/#about" onClick={() => setIsOpen(false)}>About</a></li>
        <li><a href="/#testimonials" onClick={() => setIsOpen(false)}>Reviews</a></li>
        <li><a href="/#locations" onClick={() => setIsOpen(false)}>Locations</a></li>
        <li><a href="/blog" onClick={() => setIsOpen(false)}>Blog</a></li>
        <li><a href="/#faq" onClick={() => setIsOpen(false)}>FAQ</a></li>
        <li className="mobile-only-cta"><a href="tel:+919893880001" className="nav-cta">Book Appointment</a></li>
      </ul>
      
      <a href="tel:+919893880001" className="nav-cta desktop-only-cta">Book Appointment</a>
    </nav>
  );
}
