import Link from "next/link";
import { Mail, Phone, MapPin, Heart } from "lucide-react";

const footerLinks = {
  "SERVICES": [
    { href: "/services/erectile-dysfunction", label: "Erectile Dysfunction" },
    { href: "/services/premature-ejaculation", label: "Premature Ejaculation" },
    { href: "/services/low-libido", label: "Low Libido" },
    { href: "/services/nightfall", label: "Nightfall Treatment" },
    { href: "/services/infertility", label: "Male Infertility" },
  ],
  "COMPANY": [
    { href: "/about", label: "About Us" },
    { href: "/disease", label: "Diseases We Treat" },
    { href: "/faqs", label: "Our Process (FAQs)" },
    { href: "/contact", label: "Contact" },
    { href: "/media", label: "Media & Press" },
  ],
};

// Custom Brand Icons (since lucide v1 removed them)
const InstagramIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
);

const FacebookIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
);

const LinkedinIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
);

export function Footer() {
  return (
    <footer className="footer-new">
      <div className="container-footer">
        <div className="footer-grid-new">
          {/* Brand Section */}
          <div className="footer-brand-section">
            <div className="footer-logo-new">
              Dr. Rajesh <span className="accent-blue">Manghnani</span>
            </div>
            <p className="footer-brand-desc">
              India&apos;s most trusted sexual health clinic since 1926. 
              Built for results, focused on natural wellness.
            </p>
            <div className="footer-cta-text">
              Ready to take control of your health?
            </div>
          </div>

          {/* Link Columns */}
          {Object.entries(footerLinks).map(([heading, links]) => (
            <div key={heading} className="footer-col">
              <h4 className="footer-heading-new">{heading}</h4>
              <div className="footer-links-new">
                {links.map((link) => (
                  <Link key={link.href} href={link.href} className="footer-link-new">
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
          ))}

          {/* Contact Section */}
          <div className="footer-col">
            <h4 className="footer-heading-new">CONTACT</h4>
            <div className="footer-contact-info">
              <div className="contact-item">
                <Phone size={16} className="contact-icon" />
                <span>+91 99366 04444</span>
              </div>
              <div className="contact-item">
                <Mail size={16} className="contact-icon" />
                <span>info@drskjain.com</span>
              </div>
              <div className="contact-item">
                <MapPin size={16} className="contact-icon" />
                <span>Bhopal, Madhya Pradesh, India</span>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-bottom-new">
          <div className="footer-copyright">
            © {new Date().getFullYear()} Dr. Rajesh Manghnani Clinic. All rights reserved.
          </div>
          
          <div className="footer-social-horizontal">
            <Link href="#" className="social-icon-link"><InstagramIcon /></Link>
            <Link href="#" className="social-icon-link"><FacebookIcon /></Link>
            <Link href="#" className="social-icon-link"><LinkedinIcon /></Link>
          </div>

          <a href="https://kiwiconnectdigital.com/" className="crafted-link">
            <div className="footer-crafted">
              Crafted with <Heart size={14} className="heart-icon" /> Kiwi connect digital
            </div>
          </a>
        </div>
      </div>
    </footer>
  );
}


