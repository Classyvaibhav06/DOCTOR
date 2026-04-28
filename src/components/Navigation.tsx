"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";

type BookingFormData = {
  name: string;
  email: string;
  phone: string;
  concern: string;
  preferredTime: string;
};

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [bookingOpen, setBookingOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");
  const [submitMessage, setSubmitMessage] = useState("");
  const [bookingForm, setBookingForm] = useState<BookingFormData>({
    name: "",
    email: "",
    phone: "",
    concern: "Erectile Dysfunction",
    preferredTime: "",
  });

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

  const handleBookingInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    const { name, value } = e.target;
    setBookingForm((prev) => ({ ...prev, [name]: value }));
  };

  const resetBookingForm = () => {
    setBookingForm({
      name: "",
      email: "",
      phone: "",
      concern: "Erectile Dysfunction",
      preferredTime: "",
    });
  };

  const handleBookingSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitStatus("idle");
    setSubmitMessage("");
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/book", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(bookingForm),
      });

      const data = await response.json();
      if (!response.ok) {
        throw new Error(data?.message || "Unable to submit booking request.");
      }

      setSubmitStatus("success");
      setSubmitMessage(data?.message || "Request submitted successfully.");
      resetBookingForm();
    } catch (error) {
      const message =
        error instanceof Error
          ? error.message
          : "Something went wrong while submitting your request.";
      setSubmitStatus("error");
      setSubmitMessage(message);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <nav
        className={`${isOpen ? "nav-open" : ""} ${scrolled ? "scrolled" : ""}`}
      >
        <div className="nav-logo">
          <Link href="/#home" className="nav-logo-link">
            <img src="/images/logo.png" alt="Dr. G.D. Memorial Clinic" />
            <span className="nav-brand-text">Dr. Rajesh Manghnani</span>
          </Link>
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
            <Link href="/services" onClick={() => setIsOpen(false)}>
              SERVICES
            </Link>
          </li>
          <li>
            <Link href="/about" onClick={() => setIsOpen(false)}>
              ABOUT
            </Link>
          </li>
          <li>
            <Link href="/blog" onClick={() => setIsOpen(false)}>
              BLOG
            </Link>
          </li>
          <li>
            <Link href="/contact" onClick={() => setIsOpen(false)}>
              CONTACT
            </Link>
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
                <form className="booking-form" onSubmit={handleBookingSubmit}>
                  <div className="booking-form-row">
                    <div className="booking-field">
                      <label>Your Name</label>
                      <input
                        type="text"
                        name="name"
                        value={bookingForm.name}
                        onChange={handleBookingInputChange}
                        placeholder="Full name"
                        required
                      />
                    </div>
                    <div className="booking-field">
                      <label>Email Address</label>
                      <input
                        type="email"
                        name="email"
                        value={bookingForm.email}
                        onChange={handleBookingInputChange}
                        placeholder="you@example.com"
                        required
                      />
                    </div>
                  </div>
                  <div className="booking-form-row">
                    <div className="booking-field">
                      <label>Phone Number</label>
                      <input
                        type="tel"
                        name="phone"
                        value={bookingForm.phone}
                        onChange={handleBookingInputChange}
                        placeholder="+91 XXXXX XXXXX"
                        required
                      />
                    </div>
                  </div>
                  <div className="booking-field">
                    <label>Concern / Service</label>
                    <select
                      name="concern"
                      value={bookingForm.concern}
                      onChange={handleBookingInputChange}
                    >
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
                      name="preferredTime"
                      value={bookingForm.preferredTime}
                      onChange={handleBookingInputChange}
                      placeholder="e.g., Morning, Evening, Weekends"
                    />
                  </div>
                  <button
                    type="submit"
                    className="booking-submit"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Submitting..." : "Request Callback"}
                  </button>
                  {submitStatus !== "idle" && (
                    <p
                      className="booking-submit-status"
                      style={{
                        fontSize: "0.85rem",
                        color:
                          submitStatus === "success" ? "#047857" : "#dc2626",
                      }}
                    >
                      {submitMessage}
                    </p>
                  )}
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
