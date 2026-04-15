import Link from "next/link";

const footerLinks = {
  "Quick Links": [
    { href: "/", label: "Home" },
    { href: "/about", label: "About Dr. Rajesh Maghnani" },
    { href: "/disease", label: "Diseases We Treat" },
    { href: "/gallery", label: "Clinic Gallery" },
    { href: "/media", label: "Media & Press" },
    { href: "/faqs", label: "FAQs" },
    { href: "/contact", label: "Contact Us" },
  ],
  "Treatments": [
    { href: "/services/erectile-dysfunction", label: "Erectile Dysfunction" },
    { href: "/services/premature-ejaculation", label: "Premature Ejaculation" },
    { href: "/services/low-libido", label: "Low Libido" },
    { href: "/services/nightfall", label: "Nightfall Treatment" },
    { href: "/services/infertility", label: "Male Infertility" },
    { href: "/services/sexual-counselling", label: "Sexual Counselling" },
  ],
};

export function Footer() {
  return (
    <footer className="footer">
      <div className="container-xl">
        {/* Top grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "2fr 1fr 1fr",
            gap: "2.5rem",
            paddingBottom: "2rem",
          }}
        >
          {/* Brand */}
          <div>
            <div className="footer-brand">
              Dr. Rajesh Maghnani&apos;s Burlington Clinic &amp; Hospital
            </div>
            <p style={{ fontSize: "0.82rem", color: "rgba(255,255,255,0.55)", lineHeight: 1.7, marginBottom: "1rem" }}>
              India&apos;s most trusted sexual health clinic since 1926. Over 5,50,000 patients
              treated with complete confidentiality and natural treatment approaches.
            </p>

            {/* Contact info */}
            <div style={{ display: "flex", flexDirection: "column", gap: "0.6rem" }}>
              {[
                {
                  icon: "📍",
                  text: "Bhopal Branch, Madhya Pradesh",
                },
                { icon: "📞", text: "+91 99366 04444 | +91 96950 14444" },
                { icon: "✉️", text: "info@drskjain.com" },
                { icon: "🕐", text: "Mon – Sat: 9 AM – 8 PM | Sun: 10 AM – 2 PM" },
              ].map((item) => (
                <div
                  key={item.text}
                  style={{
                    display: "flex",
                    gap: "0.5rem",
                    fontSize: "0.78rem",
                    color: "rgba(255,255,255,0.6)",
                    alignItems: "flex-start",
                  }}
                >
                  <span style={{ flexShrink: 0 }}>{item.icon}</span>
                  <span>{item.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([heading, links]) => (
            <div key={heading}>
              <div className="footer-heading">{heading}</div>
              {links.map((link) => (
                <Link key={link.href} href={link.href} className="footer-link">
                  {link.label}
                </Link>
              ))}
            </div>
          ))}
        </div>

        <hr className="footer-divider" />

        {/* Certifications strip */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "1.5rem",
            justifyContent: "center",
            marginBottom: "1.25rem",
          }}
        >
          {[
            "ISO Certified (USA)",
            "World Book of Records",
            "Govt. Registered",
            "Since 1926",
            "5,50,000+ Patients",
          ].map((badge) => (
            <span
              key={badge}
              style={{
                fontSize: "0.72rem",
                fontWeight: 600,
                color: "#fcd34d",
                border: "1px solid rgba(252,211,77,0.3)",
                padding: "0.25rem 0.75rem",
                borderRadius: 100,
              }}
            >
              {badge}
            </span>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="footer-bottom">
          <p>
            © {new Date().getFullYear()} Dr. Rajesh Maghnani Burlington Clinic &amp; Hospital. All Rights Reserved.
          </p>
          <p style={{ marginTop: "0.35rem" }}>
            Content is for informational purposes only. Consult a qualified doctor before starting any treatment. |{" "}
            <Link href="/privacy-policy" style={{ color: "rgba(255,255,255,0.5)", textDecoration: "none" }}>
              Privacy Policy
            </Link>
            {" | "}
            <Link href="/terms" style={{ color: "rgba(255,255,255,0.5)", textDecoration: "none" }}>
              Terms &amp; Conditions
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
