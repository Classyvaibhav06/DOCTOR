import { Navigation } from "@/components/Navigation";
import type { Metadata } from "next";
import {
  CalendarCheck2,
  Clock3,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Contact Us | Dr. Rajesh Manghnani Burlington Clinic",
  description:
    "Get in touch with Dr. Rajesh Manghnani at Burlington Clinic, Bhopal. Book a confidential consultation in person or online.",
};

const locations = [
  {
    name: "Main Clinic — Kasturba Nagar",
    address:
      "47, Sector C, Kasturba Nagar, Near Chetak Bridge, Bhopal – 462023",
    phone: "+91 98938 80001",
    whatsapp: "+91 99366 04444",
    email: "info@bestsexologistdoctor.com",
    hours: "Mon – Sat, 9AM – 9PM",
    map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3665.8117967965415!2d77.43821677532057!3d23.23229707902492!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x397c37e912d09cf3%3A0x55bf79788220dcae!2sDR%20RAJESH'S%20SEXOLOGY%20CLINIC-Best%20Sexologist%20Doctor%20In%20Bhopal!5e0!3m2!1sen!2sin!4v1713372605481!5m2!1sen!2sin",
  },
  {
    name: "Arera Colony Branch",
    address:
      "Shop No 05, GM Tower, 10 Number Market, Arera Colony, Bhopal – 462016",
    phone: "+91 98938 80001",
    whatsapp: "+91 99366 04444",
    email: "info@bestsexologistdoctor.com",
    hours: "Mon – Sat, 10AM – 7PM",
    map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3666.22!2d77.4!3d23.25!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjPCsDE1JzAwLjAiTiA3N8KwMjQnMDAuMCJF!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin",
  },
];

export default function ContactPage() {
  return (
    <div>
      <Navigation />

      {/* ── HERO ── */}
      <header
        className="contact-hero"
        style={{
          background:
            "linear-gradient(145deg, #0F172A 0%, #1E3A8A 60%, #1E40AF 100%)",
          padding: "9rem 0 5rem",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Decorative rings */}
        <div
          style={{
            position: "absolute",
            top: "-20%",
            right: "-8%",
            width: 500,
            height: 500,
            borderRadius: "50%",
            border: "1px solid rgba(255,255,255,0.05)",
            pointerEvents: "none",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: "-30%",
            left: "-5%",
            width: 350,
            height: 350,
            borderRadius: "50%",
            border: "1px solid rgba(255,255,255,0.04)",
            pointerEvents: "none",
          }}
        />

        <div
          className="container"
          style={{ position: "relative", zIndex: 1, textAlign: "center" }}
        >
          <p
            style={{
              fontSize: "0.72rem",
              fontWeight: 800,
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              color: "#93C5FD",
              marginBottom: "1.25rem",
            }}
          >
            ● PRIVATE &amp; CONFIDENTIAL
          </p>
          <h1
            style={{
              fontFamily:
                "var(--font-display, 'Plus Jakarta Sans', sans-serif)",
              fontSize: "clamp(2.5rem, 5vw, 4rem)",
              fontWeight: 800,
              color: "#fff",
              lineHeight: 1.15,
              marginBottom: "1.5rem",
              letterSpacing: "-0.04em",
            }}
          >
            Get In <em style={{ color: "#60A5FA" }}>Touch</em> With Us
          </h1>
          <p
            style={{
              maxWidth: 580,
              margin: "0 auto 2.5rem",
              color: "rgba(255,255,255,0.65)",
              fontSize: "1.05rem",
              lineHeight: 1.75,
            }}
          >
            Reach out for a confidential consultation. Available for in-person
            visits, video calls, and telephonic consultations across India.
          </p>

          {/* Quick action pills */}
          <div
            className="contact-hero-actions"
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "1rem",
              justifyContent: "center",
            }}
          >
            <a
              href="tel:+919893880001"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.6rem",
                background: "rgba(255,255,255,0.12)",
                border: "1px solid rgba(255,255,255,0.25)",
                color: "#fff",
                padding: "0.85rem 1.75rem",
                borderRadius: "50px",
                fontWeight: 700,
                fontSize: "0.9rem",
                textDecoration: "none",
                backdropFilter: "blur(4px)",
                transition: "all 0.2s",
              }}
            >
              <Phone size={16} strokeWidth={2.2} />
              Call Now
            </a>
            <a
              href="https://wa.me/919936604444"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.6rem",
                background: "#25D366",
                border: "1px solid #25D366",
                color: "#fff",
                padding: "0.85rem 1.75rem",
                borderRadius: "50px",
                fontWeight: 700,
                fontSize: "0.9rem",
                textDecoration: "none",
                transition: "all 0.2s",
              }}
            >
              <MessageCircle size={16} strokeWidth={2.2} />
              WhatsApp
            </a>
            <a
              href="https://bestsexologistdoctor.com/index.php/payment/"
              target="_blank"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.6rem",
                background: "linear-gradient(135deg, #3B82F6, #1D4ED8)",
                color: "#fff",
                padding: "0.85rem 1.75rem",
                borderRadius: "50px",
                fontWeight: 700,
                fontSize: "0.9rem",
                textDecoration: "none",
                boxShadow: "0 8px 24px rgba(59,130,246,0.4)",
                transition: "all 0.2s",
              }}
            >
              <CalendarCheck2 size={16} strokeWidth={2.2} />
              Book Online
            </a>
          </div>
        </div>
      </header>

      {/* ── MAIN CONTENT ── */}
      <section
        className="contact-section"
        style={{ background: "#F8FAFC", padding: "6rem 0" }}
      >
        <div className="container">
          {/* Trust bar */}
          <div
            className="contact-trust-bar"
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "1.5rem",
              justifyContent: "center",
              marginBottom: "5rem",
            }}
          >
            {[
              { icon: "🔒", label: "100% Confidential" },
              { icon: "✅", label: "ISO Certified Clinic" },
              { icon: "🏆", label: "World Book of Records" },
              { icon: "👨‍⚕️", label: "23+ Years Experience" },
              { icon: "🌍", label: "Serving All India" },
            ].map((t) => (
              <div
                key={t.label}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.6rem",
                  background: "#fff",
                  border: "1px solid #DBEAFE",
                  borderRadius: "50px",
                  padding: "0.6rem 1.25rem",
                  fontSize: "0.85rem",
                  fontWeight: 600,
                  color: "#1E40AF",
                  boxShadow: "0 2px 8px rgba(30,64,175,0.06)",
                }}
              >
                <span>{t.icon}</span> {t.label}
              </div>
            ))}
          </div>

          {/* Two-col layout: form + info */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1.1fr",
              gap: "3rem",
              alignItems: "start",
            }}
            className="contact-main-grid"
          >
            {/* LEFT: Contact Form */}
            <div
              className="contact-form-card"
              style={{
                background: "#fff",
                borderRadius: 24,
                padding: "2.75rem",
                border: "1px solid #E2E8F0",
                boxShadow: "0 8px 40px rgba(0,0,0,0.06)",
              }}
            >
              <p
                style={{
                  fontSize: "0.7rem",
                  fontWeight: 800,
                  letterSpacing: "0.15em",
                  textTransform: "uppercase",
                  color: "#1E40AF",
                  marginBottom: "0.75rem",
                }}
              >
                ● Request a Callback
              </p>
              <h2
                style={{
                  fontFamily:
                    "var(--font-display, 'Plus Jakarta Sans', sans-serif)",
                  fontSize: "2rem",
                  fontWeight: 800,
                  color: "#0F172A",
                  marginBottom: "2rem",
                  lineHeight: 1.25,
                  letterSpacing: "-0.04em",
                }}
              >
                Tell Us About Your <em style={{ color: "#1E40AF" }}>Concern</em>
              </h2>

              <form
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "1.25rem",
                }}
              >
                <div
                  className="contact-form-row"
                  style={{
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr",
                    gap: "1rem",
                  }}
                >
                  {[
                    {
                      label: "Full Name",
                      type: "text",
                      placeholder: "Your name",
                    },
                    {
                      label: "Phone Number",
                      type: "tel",
                      placeholder: "+91 XXXXX XXXXX",
                    },
                  ].map((f) => (
                    <div
                      key={f.label}
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        gap: "0.4rem",
                      }}
                    >
                      <label
                        style={{
                          fontSize: "0.7rem",
                          fontWeight: 700,
                          textTransform: "uppercase",
                          letterSpacing: "0.08em",
                          color: "#1E40AF",
                        }}
                      >
                        {f.label}
                      </label>
                      <input
                        type={f.type}
                        placeholder={f.placeholder}
                        style={{
                          padding: "0.85rem 1rem",
                          border: "1.5px solid #E2E8F0",
                          borderRadius: 10,
                          fontSize: "0.9rem",
                          color: "#0F172A",
                          background: "#F8FAFC",
                          outline: "none",
                          fontFamily: "inherit",
                        }}
                      />
                    </div>
                  ))}
                </div>

                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "0.4rem",
                  }}
                >
                  <label
                    style={{
                      fontSize: "0.7rem",
                      fontWeight: 700,
                      textTransform: "uppercase",
                      letterSpacing: "0.08em",
                      color: "#1E40AF",
                    }}
                  >
                    Concern / Service
                  </label>
                  <select
                    style={{
                      padding: "0.85rem 1rem",
                      border: "1.5px solid #E2E8F0",
                      borderRadius: 10,
                      fontSize: "0.9rem",
                      color: "#0F172A",
                      background: "#F8FAFC",
                      outline: "none",
                      fontFamily: "inherit",
                    }}
                  >
                    <option>Select a service...</option>
                    <option>Erectile Dysfunction</option>
                    <option>Premature Ejaculation</option>
                    <option>Low Libido</option>
                    <option>Male Infertility</option>
                    <option>Nightfall Treatment</option>
                    <option>Female Sexual Problems</option>
                    <option>Couples Counseling</option>
                    <option>Other / General Query</option>
                  </select>
                </div>

                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "0.4rem",
                  }}
                >
                  <label
                    style={{
                      fontSize: "0.7rem",
                      fontWeight: 700,
                      textTransform: "uppercase",
                      letterSpacing: "0.08em",
                      color: "#1E40AF",
                    }}
                  >
                    Message (Optional)
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Briefly describe your concern or preferred consultation time..."
                    style={{
                      padding: "0.85rem 1rem",
                      border: "1.5px solid #E2E8F0",
                      borderRadius: 10,
                      fontSize: "0.9rem",
                      color: "#0F172A",
                      background: "#F8FAFC",
                      outline: "none",
                      fontFamily: "inherit",
                      resize: "vertical",
                    }}
                  />
                </div>

                <button
                  type="submit"
                  style={{
                    background: "linear-gradient(135deg, #1E40AF, #3B82F6)",
                    color: "#fff",
                    border: "none",
                    padding: "1.1rem 2rem",
                    borderRadius: 12,
                    fontSize: "1rem",
                    fontWeight: 700,
                    cursor: "pointer",
                    boxShadow: "0 8px 24px rgba(30,64,175,0.3)",
                    letterSpacing: "0.02em",
                  }}
                >
                  Send Message →
                </button>

                <p
                  style={{
                    textAlign: "center",
                    fontSize: "0.78rem",
                    color: "#94A3B8",
                  }}
                >
                  🔒 Your information is 100% private and never shared.
                </p>
              </form>
            </div>

            {/* RIGHT: Info + Locations */}
            <div
              className="contact-info-stack"
              style={{ display: "flex", flexDirection: "column", gap: "2rem" }}
            >
              {/* Quick contact info */}
              <div
                className="contact-direct-card"
                style={{
                  background: "linear-gradient(145deg, #0F172A, #1E3A8A)",
                  borderRadius: 20,
                  padding: "2.5rem",
                  color: "#fff",
                }}
              >
                <h3
                  style={{
                    fontFamily:
                      "var(--font-display, 'Plus Jakarta Sans', sans-serif)",
                    fontSize: "1.5rem",
                    fontWeight: 800,
                    color: "#fff",
                    marginBottom: "2rem",
                    letterSpacing: "-0.04em",
                  }}
                >
                  Reach Us <em style={{ color: "#60A5FA" }}>Directly</em>
                </h3>
                {[
                  {
                    icon: "📞",
                    label: "Call / WhatsApp",
                    value: "+91 98938 80001",
                    href: "tel:+919893880001",
                  },
                  {
                    icon: "💬",
                    label: "WhatsApp Direct",
                    value: "+91 99366 04444",
                    href: "https://wa.me/919936604444",
                  },
                  {
                    icon: "📧",
                    label: "Email",
                    value: "info@bestsexologistdoctor.com",
                    href: "mailto:info@bestsexologistdoctor.com",
                  },
                  {
                    icon: "🕒",
                    label: "Clinic Hours",
                    value: "Monday – Saturday, 9AM – 9PM",
                    href: null,
                  },
                ].map((item) => (
                  <div
                    key={item.label}
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                      gap: "1rem",
                      marginBottom: "1.25rem",
                    }}
                  >
                    <div
                      style={{
                        width: 40,
                        height: 40,
                        background: "rgba(255,255,255,0.1)",
                        borderRadius: 10,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontSize: "1.1rem",
                        flexShrink: 0,
                      }}
                    >
                      {item.icon}
                    </div>
                    <div>
                      <div
                        style={{
                          fontSize: "0.68rem",
                          fontWeight: 700,
                          textTransform: "uppercase",
                          letterSpacing: "0.08em",
                          color: "rgba(255,255,255,0.4)",
                          marginBottom: "0.2rem",
                        }}
                      >
                        {item.label}
                      </div>
                      {item.href ? (
                        <a
                          href={item.href}
                          style={{
                            color: "#fff",
                            fontWeight: 600,
                            fontSize: "0.95rem",
                            textDecoration: "none",
                          }}
                        >
                          {item.value}
                        </a>
                      ) : (
                        <div
                          style={{
                            color: "#fff",
                            fontWeight: 600,
                            fontSize: "0.95rem",
                          }}
                        >
                          {item.value}
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Certifications */}
              <div
                className="contact-trust-card"
                style={{
                  background: "#fff",
                  border: "1px solid #E2E8F0",
                  borderRadius: 20,
                  padding: "2rem",
                  boxShadow: "0 4px 20px rgba(0,0,0,0.04)",
                }}
              >
                <h4
                  style={{
                    fontSize: "0.85rem",
                    fontWeight: 700,
                    color: "#1E40AF",
                    textTransform: "uppercase",
                    letterSpacing: "0.1em",
                    marginBottom: "1.25rem",
                  }}
                >
                  Why Trust Us
                </h4>
                <div
                  className="contact-trust-points"
                  style={{
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr",
                    gap: "0.85rem",
                  }}
                >
                  {[
                    "✓  ISO Certified Facility",
                    "✓  23+ Years of Practice",
                    "✓  World Book of Records",
                    "✓  5.5 Lakh+ Patients",
                    "✓  100% Confidentiality",
                    "✓  Online Consultations",
                  ].map((item) => (
                    <div
                      key={item}
                      style={{
                        fontSize: "0.88rem",
                        color: "#334155",
                        fontWeight: 500,
                      }}
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* ── LOCATIONS ── */}
          <div style={{ marginTop: "5rem" }}>
            <div style={{ textAlign: "center", marginBottom: "3rem" }}>
              <p
                style={{
                  fontSize: "0.7rem",
                  fontWeight: 800,
                  letterSpacing: "0.18em",
                  textTransform: "uppercase",
                  color: "#1E40AF",
                  marginBottom: "0.75rem",
                }}
              >
                ● Our Locations
              </p>
              <h2
                style={{
                  fontFamily:
                    "var(--font-display, 'Plus Jakarta Sans', sans-serif)",
                  fontSize: "clamp(1.8rem, 3.5vw, 2.5rem)",
                  fontWeight: 800,
                  color: "#0F172A",
                  letterSpacing: "-0.04em",
                }}
              >
                Visit Our <em style={{ color: "#1E40AF" }}>Clinics</em>
              </h2>
            </div>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr",
                gap: "2rem",
              }}
            >
              {locations.slice(0, 1).map((loc) => (
                <div
                  className="contact-location-card"
                  key={loc.name}
                  style={{
                    background: "#fff",
                    borderRadius: 20,
                    overflow: "hidden",
                    border: "1px solid #E2E8F0",
                    boxShadow: "0 4px 20px rgba(0,0,0,0.05)",
                  }}
                >
                  <div
                    className="contact-location-map"
                    style={{ height: 240, position: "relative" }}
                  >
                    <iframe
                      src={loc.map}
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      loading="lazy"
                    />
                  </div>

                  {/* Info */}
                  <div
                    className="contact-location-info"
                    style={{ padding: "1.75rem" }}
                  >
                    <div
                      style={{
                        display: "inline-block",
                        background: "#EFF6FF",
                        color: "#1E40AF",
                        fontSize: "0.65rem",
                        fontWeight: 800,
                        textTransform: "uppercase",
                        letterSpacing: "0.1em",
                        padding: "0.3rem 0.8rem",
                        borderRadius: "50px",
                        marginBottom: "0.75rem",
                      }}
                    >
                      Branch
                    </div>
                    <h3
                      style={{
                        fontFamily:
                          "var(--font-display, 'Plus Jakarta Sans', sans-serif)",
                        fontSize: "1.3rem",
                        fontWeight: 800,
                        color: "#0F172A",
                        marginBottom: "1rem",
                        letterSpacing: "-0.02em",
                      }}
                    >
                      {loc.name}
                    </h3>
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        gap: "0.65rem",
                      }}
                    >
                      {[
                        { icon: MapPin, val: loc.address },
                        { icon: Phone, val: loc.phone },
                        {
                          icon: MessageCircle,
                          val: `WhatsApp: ${loc.whatsapp}`,
                        },
                        { icon: Mail, val: loc.email },
                        { icon: Clock3, val: loc.hours },
                      ].map((row) => (
                        <div
                          key={row.val}
                          style={{
                            display: "flex",
                            alignItems: "flex-start",
                            gap: "0.6rem",
                            fontSize: "0.88rem",
                            color: "#475569",
                          }}
                        >
                          <span
                            style={{
                              color: "#1E40AF",
                              lineHeight: 0,
                              marginTop: "0.15rem",
                            }}
                          >
                            <row.icon size={16} strokeWidth={2} />
                          </span>
                          <span>{row.val}</span>
                        </div>
                      ))}
                    </div>
                    <a
                      href={`https://maps.google.com/?q=${encodeURIComponent(loc.address)}`}
                      target="_blank"
                      style={{
                        display: "inline-block",
                        marginTop: "1.25rem",
                        background: "linear-gradient(135deg, #1E40AF, #3B82F6)",
                        color: "#fff",
                        padding: "0.7rem 1.5rem",
                        borderRadius: 8,
                        fontSize: "0.85rem",
                        fontWeight: 700,
                        textDecoration: "none",
                      }}
                    >
                      Get Directions →
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <style>{`
        @media (max-width: 900px) {
          .contact-main-grid {
            grid-template-columns: 1fr !important;
            gap: 1.75rem !important;
          }

          .contact-section {
            padding: 4rem 0 !important;
          }

          .contact-hero {
            padding: 7.5rem 0 3.5rem !important;
          }

          .contact-form-card,
          .contact-direct-card,
          .contact-trust-card {
            padding: 1.5rem !important;
            border-radius: 16px !important;
          }

          .contact-trust-bar {
            margin-bottom: 2.75rem !important;
            gap: 0.75rem !important;
          }

          .contact-trust-points {
            grid-template-columns: 1fr !important;
            gap: 0.65rem !important;
          }

          .contact-form-row {
            grid-template-columns: 1fr !important;
            gap: 0.9rem !important;
          }
        }

        @media (max-width: 600px) {
          .contact-hero-actions {
            flex-direction: column !important;
            align-items: stretch !important;
            width: 100%;
          }

          .contact-hero-actions > a {
            justify-content: center;
            width: 100%;
            text-align: center;
          }

          .contact-form-card {
            padding: 1.2rem !important;
          }

          .contact-info-stack {
            gap: 1.1rem !important;
          }

          .contact-location-map {
            height: 200px !important;
          }

          .contact-location-info {
            padding: 1.15rem !important;
          }
        }
      `}</style>
    </div>
  );
}
