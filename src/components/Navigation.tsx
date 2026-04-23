"use client";
import React, { useState, useEffect } from "react";

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [bookingOpen, setBookingOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (bookingOpen) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [bookingOpen]);

  return (
    <>
      <nav
        className={`${isOpen ? "nav-open" : ""} ${scrolled ? "scrolled" : ""}`}
      >
        <div className="nav-logo">
          <a href="/#home" className="nav-logo-link">
            <img src="/images/logo.png" alt="Dr. G.D. Memorial Clinic" />
            <span className="nav-brand-text">Dr. Rajesh Manghnani</span>
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
          <li>
            <a href="/services" onClick={() => setIsOpen(false)}>
              SERVICES
            </a>
          </li>
          <li>
            <a href="/about" onClick={() => setIsOpen(false)}>
              ABOUT
            </a>
          </li>
          <li>
            <a href="/blog" onClick={() => setIsOpen(false)}>
              BLOG
            </a>
          </li>
          <li>
            <a href="/contact" onClick={() => setIsOpen(false)}>
              CONTACT
            </a>
          </li>
          <li className="mobile-only-cta">
            <button
              onClick={() => {
                setIsOpen(false);
                setBookingOpen(true);
              }}
              className="nav-cta"
            >
              BOOK APPOINTMENT
            </button>
          </li>
        </ul>

        <button
          onClick={() => setBookingOpen(true)}
          className="nav-cta desktop-only-cta"
        >
          BOOK APPOINTMENT
        </button>
      </nav>

      {/* ── BOOKING MODAL ── */}
      {bookingOpen && (
        <div
          className="booking-overlay"
          onClick={(e) => e.target === e.currentTarget && setBookingOpen(false)}
        >
          <div className="booking-modal">
            <button
              className="booking-close"
              onClick={() => setBookingOpen(false)}
              aria-label="Close"
            >
              ✕
            </button>
            <div className="booking-modal-inner">
              <div className="booking-left">
                <p className="booking-overline">Private & Confidential</p>
                <h2 className="booking-title">
                  Book Your <span className="booking-accent">Consultation</span>
                </h2>
                <p className="booking-desc">
                  Reach Dr. Rajesh Manghnani directly. Your information is
                  always kept 100% confidential and secure.
                </p>
                <div className="booking-contact-list">
                  <div className="booking-contact-item">
                    <div className="booking-contact-icon">📞</div>
                    <div>
                      <div className="booking-contact-label">
                        Call / WhatsApp
                      </div>
                      <a
                        href="tel:+919893880001"
                        className="booking-contact-value"
                      >
                        +91 98938 80001
                      </a>
                    </div>
                  </div>
                  <div className="booking-contact-item">
                    <div className="booking-contact-icon">💬</div>
                    <div>
                      <div className="booking-contact-label">WhatsApp Only</div>
                      <a
                        href="https://wa.me/919936604444"
                        className="booking-contact-value"
                      >
                        +91 99366 04444
                      </a>
                    </div>
                  </div>
                  <div className="booking-contact-item">
                    <div className="booking-contact-icon">📍</div>
                    <div>
                      <div className="booking-contact-label">Main Clinic</div>
                      <div className="booking-contact-value">
                        47, Kasturba Nagar, Bhopal
                      </div>
                    </div>
                  </div>
                  <div className="booking-contact-item">
                    <div className="booking-contact-icon">🕒</div>
                    <div>
                      <div className="booking-contact-label">Timings</div>
                      <div className="booking-contact-value">
                        Mon – Sat, 9AM – 9PM
                      </div>
                    </div>
                  </div>
                </div>
                <a
                  href="https://bestsexologistdoctor.com/index.php/payment/"
                  target="_blank"
                  className="booking-online-btn"
                >
                  Pay & Book Online →
                </a>
              </div>

              <div className="booking-right">
                <h3 className="booking-form-title">Request a Callback</h3>
                <form
                  className="booking-form"
                  onSubmit={(e) => {
                    e.preventDefault();
                    alert("We'll call you back soon!");
                    setBookingOpen(false);
                  }}
                >
                  <div className="booking-form-row">
                    <div className="booking-field">
                      <label>Your Name</label>
                      <input type="text" placeholder="Full name" required />
                    </div>
                    <div className="booking-field">
                      <label>Phone Number</label>
                      <input
                        type="tel"
                        placeholder="+91 XXXXX XXXXX"
                        required
                      />
                    </div>
                  </div>
                  <div className="booking-field">
                    <label>Concern / Service</label>
                    <select>
                      <option>Erectile Dysfunction</option>
                      <option>Premature Ejaculation</option>
                      <option>Low Libido</option>
                      <option>Male Infertility</option>
                      <option>Nightfall Treatment</option>
                      <option>Other / General Query</option>
                    </select>
                  </div>
                  <div className="booking-field">
                    <label>Preferred Time</label>
                    <input
                      type="text"
                      placeholder="e.g., Morning, Evening, Weekends"
                    />
                  </div>
                  <button type="submit" className="booking-submit">
                    Request Callback
                  </button>
                  <p className="booking-privacy">
                    🔒 Safe & Discreet — Your privacy is guaranteed
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
