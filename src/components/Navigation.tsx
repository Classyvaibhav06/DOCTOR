"use client";
import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Search } from "lucide-react";

/* ── Dropdown data for main nav items (Sentence Case) ── */
type NavItem = {
  label: string;
  href: string;
  isMega?: boolean;
  dropdown?: {
    label: string;
    href: string;
    description?: string;
    image?: string;
  }[];
};

const mainNavItems: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  {
    label: "Services",
    href: "/services",
    isMega: true,
    dropdown: [
      { 
        label: "Erectile Dysfunction", 
        href: "/services/erectile-dysfunction",
        description: "Advanced diagnostic and treatment options for ED to restore confidence and function.",
        image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=400&q=80"
      },
      { 
        label: "Premature Ejaculation", 
        href: "/services/premature-ejaculation",
        description: "Effective therapeutic strategies to improve control and enhance stamina.",
        image: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=400&q=80"
      },
      { 
        label: "Low Libido", 
        href: "/services/low-libido",
        description: "Comprehensive hormonal and psychological support to reignite your drive.",
        image: "https://images.unsplash.com/photo-1576091160550-2173ff9e5eb2?auto=format&fit=crop&w=400&q=80"
      },
      { 
        label: "Male Infertility", 
        href: "/services/male-infertility",
        description: "Evidence-based fertility solutions combining modern medicine and holistic care.",
        image: "https://images.unsplash.com/photo-1581594693702-fbdc51b2763b?auto=format&fit=crop&w=400&q=80"
      },
      { 
        label: "Nightfall Treatment", 
        href: "/services/nightfall",
        description: "Natural and safe clinical protocols to overcome nightfall issues safely.",
        image: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&w=400&q=80"
      },
    ],
  },
  {
    label: "Disease",
    href: "/disease",
    isMega: true,
    dropdown: [
      { 
        label: "Sexual Disorders", 
        href: "/disease",
        description: "Understanding common sexual health challenges and clinical pathways to recovery.",
        image: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&w=400&q=80"
      },
      { 
        label: "Male Sexual Health", 
        href: "/disease#male",
        description: "Focusing on physiological and psychological factors affecting male sexual wellness.",
        image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=400&q=80"
      },
      { 
        label: "Hormonal Issues", 
        href: "/disease#hormonal",
        description: "Specialized care for testosterone balance and endocrine-related health concerns.",
        image: "https://images.unsplash.com/photo-1581594693702-fbdc51b2763b?auto=format&fit=crop&w=400&q=80"
      },
    ],
  },
  { label: "Blog", href: "/blog" },
  { 
    label: "Contact Us", 
    href: "/contact",
    isMega: true,
    dropdown: [
      { 
        label: "Main Clinic — Kasturba Nagar", 
        href: "/contact",
        description: "Visit our primary facility located near Chetak Bridge for comprehensive care.",
        image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=400&q=80"
      },
      { 
        label: "Arera Colony Branch", 
        href: "/contact",
        description: "Conveniently located at 10 Number Market for easy access to expert consultations.",
        image: "https://images.unsplash.com/photo-1638202993928-7267aad84c31?auto=format&fit=crop&w=400&q=80"
      },
      { 
        label: "Online Consultation", 
        href: "/ask-online",
        description: "Book a private video or tele-consultation from the comfort of your home.",
        image: "https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&w=400&q=80"
      },
    ],
  },
];

/* ── Dropdown Item Component ── */
function DropdownMenu({ items }: { items: { label: string; href: string }[] }) {
  return (
    <div className="nav3-dropdown">
      {items.map((item) => (
        <Link key={item.label} href={item.href} className="nav3-dropdown-item">
          <span className="nav3-dropdown-arrow">›</span>
          {item.label}
        </Link>
      ))}
    </div>
  );
}

/* ── Mega Menu Component ── */
function MegaMenu({ items }: { items: { label: string; href: string; description?: string; image?: string }[] }) {
  const [activeItem, setActiveItem] = useState(items[0]);

  return (
    <div className="nav3-megamenu">
      <div className="megamenu-left">
        {items.map((item) => (
          <div 
            key={item.label} 
            className={`megamenu-tab ${activeItem.label === item.label ? 'active' : ''}`}
            onMouseEnter={() => setActiveItem(item)}
          >
            <Link href={item.href}>{item.label}</Link>
          </div>
        ))}
      </div>
      <div className="megamenu-right">
        <div className="megamenu-content">
          <h3 className="megamenu-title">{activeItem.label}</h3>
          <p className="megamenu-desc">{activeItem.description || "Discover our specialized treatment designed for your well-being."}</p>
          <Link href={activeItem.href} className="megamenu-btn">
            Explore <span>→</span>
          </Link>
        </div>
        {activeItem.image && (
          <div className="megamenu-image">
            <img src={activeItem.image} alt={activeItem.label} />
          </div>
        )}
      </div>
    </div>
  );
}

/* ── Nav Item with optional dropdown ── */
function NavItem({ item, isActive }: { item: NavItem; isActive: boolean }) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  if (!item.dropdown) {
    return (
      <Link href={item.href} className={`nav3-link ${isActive ? "active" : ""}`}>
        {item.label}
      </Link>
    );
  }

  return (
    <div
      ref={ref}
      className={`nav3-item-wrap ${item.isMega ? 'nav3-item-mega' : ''}`}
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <Link href={item.href} className={`nav3-link nav3-link--has-dropdown ${isActive ? "active" : ""}`}>
        {item.label}
        <svg
          className={`nav3-chevron ${open ? "nav3-chevron--open" : ""}`}
          viewBox="0 0 12 12"
          fill="currentColor"
        >
          <path d="M2 4l4 4 4-4" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </Link>
      {open && (item.isMega ? <MegaMenu items={item.dropdown} /> : <DropdownMenu items={item.dropdown} />)}
    </div>
  );
}

/* ── Main Navigation Component ── */
export const Navigation = ({ onBookAppointment }: { onBookAppointment?: () => void }) => {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileDropdown, setMobileDropdown] = useState<string | null>(null);

  return (
    <>
      {/* ════════════════════════════════════════
          ZONE 1 — Top Utility Bar
      ════════════════════════════════════════ */}
      <div className="nav1">
        <div className="nav1-inner">
          {/* Left: Contact */}
          <div className="nav1-left">
            <a href="tel:+919893880001" className="nav1-link">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
                <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1-9.4 0-17-7.6-17-17 0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z"/>
              </svg>
              +91 98938 80001
            </a>
            <span className="nav1-sep">|</span>
            <a href="tel:+919936604444" className="nav1-link">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z"/>
              </svg>
              WhatsApp: +91 99366 04444
            </a>
            <span className="nav1-sep">|</span>
            <a href="mailto:info@drrajesh.com" className="nav1-link">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
              </svg>
              info@drrajesh.com
            </a>
          </div>
          {/* Right: Secondary Links (No Buttons) */}
          <div className="nav1-right">
            <Link href="/ask-online" className="nav1-link">Ask Online</Link>
            <span className="nav1-sep">|</span>
            <Link href="/media" className="nav1-link">Media</Link>
            <span className="nav1-sep">|</span>
            <Link href="/gallery" className="nav1-link">Gallery</Link>
            <span className="nav1-sep">|</span>
            <Link href="/faqs" className="nav1-link">FAQs</Link>
          </div>
        </div>
      </div>

      {/* ════════════════════════════════════════
          ZONE 2 — Main Header
      ════════════════════════════════════════ */}
      <div className="nav2">
        <div className="nav2-inner">
          {/* Column A: Logo + Clinic Name + Tagline */}
          <div className="nav2-col-a">
            <Link href="/" className="nav2-brand-link">
              <div className="nav2-logo-icon">
                <svg viewBox="0 0 48 48" width="40" height="40" fill="none">
                  <circle cx="24" cy="24" r="22" fill="var(--blue)" />
                  <path d="M22 14h4v8h8v4h-8v8h-4v-8h-8v-4h8v-8z" fill="#fff"/>
                </svg>
              </div>
              <div className="nav2-brand-text">
                <div className="nav2-brand-name">BURLINGTON CLINIC & HOSPITAL</div>
                <div className="nav2-brand-tagline">DR. RAJESH MANGHNANI · EST. 2004</div>
              </div>
            </Link>
          </div>

          {/* Column B: Trust Badges */}
          <div className="nav2-col-b">
            <div className="nav2-badge">
              <span className="nav2-badge-icon">🏆</span>
              <div className="nav2-badge-content">
                <span className="nav2-badge-title">WORLD<br/>RECORD</span>
                <span className="nav2-badge-sub">HOLDER</span>
              </div>
            </div>
            
            <div className="nav2-badge-divider"></div>

            <div className="nav2-badge">
              <span className="nav2-badge-icon">✅</span>
              <div className="nav2-badge-content">
                <span className="nav2-badge-title">ISO<br/>9001</span>
                <span className="nav2-badge-sub">CERTIFIED</span>
              </div>
            </div>

            <div className="nav2-badge-divider"></div>

            <div className="nav2-badge">
              <span className="nav2-badge-icon">⭐</span>
              <div className="nav2-badge-content">
                <span className="nav2-badge-title">JUSTDIAL<br/>4.9</span>
                <span className="nav2-badge-sub">RATING</span>
              </div>
            </div>
          </div>

          {/* Column C: Stacked CTAs */}
          <div className="nav2-col-c">
            <button
              className="nav2-btn-primary"
              onClick={onBookAppointment}
              style={{ cursor: "pointer", border: "none" }}
            >
              Book Appointment
            </button>
          </div>

          {/* Mobile hamburger */}
          <button
            className="nav2-hamburger"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            <span className={`nav2-bar ${mobileOpen ? "nav2-bar--open1" : ""}`} />
            <span className={`nav2-bar ${mobileOpen ? "nav2-bar--open2" : ""}`} />
            <span className={`nav2-bar ${mobileOpen ? "nav2-bar--open3" : ""}`} />
          </button>
        </div>
      </div>

      {/* ════════════════════════════════════════
          ZONE 3 — Navigation Bar
      ════════════════════════════════════════ */}
      <nav className="nav3">
        <div className="nav3-inner">
          <div className="nav3-links-wrap">
            {mainNavItems.map((item) => {
              const isActive = pathname === item.href || pathname.startsWith(item.href + "/");
              return <NavItem key={item.href} item={item} isActive={isActive} />;
            })}
          </div>
          
          <button className="nav3-search-btn" aria-label="Search">
            <Search size={18} />
          </button>
        </div>
      </nav>

      {/* ════════════════════════════════════════
          MOBILE DRAWER
      ════════════════════════════════════════ */}
      {mobileOpen && (
        <div className="nav-mobile-drawer">
          {mainNavItems.map((item) => (
            <div key={item.href} className="nav-mobile-item">
              {item.dropdown ? (
                <>
                  <button
                    className="nav-mobile-link nav-mobile-toggle"
                    onClick={() =>
                      setMobileDropdown(
                        mobileDropdown === item.label ? null : item.label
                      )
                    }
                  >
                    {item.label}
                    <svg
                      width="12" height="12" viewBox="0 0 12 12" fill="none"
                      style={{ transform: mobileDropdown === item.label ? "rotate(180deg)" : "none", transition: "transform 0.2s" }}
                    >
                      <path d="M2 4l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                    </svg>
                  </button>
                  {mobileDropdown === item.label && (
                    <div className="nav-mobile-sub">
                      {item.dropdown.map((sub) => (
                        <Link
                          key={sub.label}
                          href={sub.href}
                          className="nav-mobile-sub-link"
                          onClick={() => setMobileOpen(false)}
                        >
                          › {sub.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </>
              ) : (
                <Link
                  href={item.href}
                  className="nav-mobile-link"
                  onClick={() => setMobileOpen(false)}
                >
                  {item.label}
                </Link>
              )}
            </div>
          ))}
          <button
            className="nav-mobile-book"
            onClick={() => {
              setMobileOpen(false);
              onBookAppointment?.();
            }}
            style={{ cursor: "pointer", border: "none", width: "100%" }}
          >
            📅 Book Appointment
          </button>
        </div>
      )}

      {/* ════════════════════════════════════════
          STYLES
      ════════════════════════════════════════ */}
      <style>{`
        /* ── Shared ── */
        .nav1, .nav2, nav.nav3 {
          position: sticky;
          left: 0; right: 0;
          z-index: 1000;
          width: 100%;
        }

        /* ── ZONE 1: Top Utility Bar ── */
        .nav1 {
          background: var(--text); /* dark navy */
          color: rgba(255,255,255,0.8);
          font-size: 0.75rem;
          font-weight: 500;
          height: 32px;
          display: flex;
          align-items: center;
          top: 0;
          z-index: 1002;
        }
        .nav1-inner {
          width: 100%;
          max-width: 1400px;
          margin: 0 auto;
          padding: 0 1.5rem;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }
        .nav1-left, .nav1-right {
          display: flex;
          align-items: center;
          gap: 0.75rem;
        }
        .nav1-link {
          display: inline-flex;
          align-items: center;
          gap: 0.35rem;
          color: rgba(255,255,255,0.8);
          text-decoration: none;
          transition: color 0.2s;
          white-space: nowrap;
        }
        .nav1-link:hover { color: #fff; }
        .nav1-sep {
          color: rgba(255,255,255,0.25);
          user-select: none;
        }

        /* ── ZONE 2: Main Header ── */
        .nav2 {
          background: #ffffff;
          top: 32px;
          z-index: 1001;
          height: 80px;
          display: flex;
          align-items: center;
        }
        .nav2-inner {
          width: 100%;
          max-width: 1400px;
          margin: 0 auto;
          padding: 0 1.5rem;
          display: flex;
          align-items: center;
          justify-content: space-between;
          height: 100%;
        }
        
        /* Column A: Logo */
        .nav2-col-a {
          display: flex;
          align-items: center;
        }
        .nav2-brand-link {
          display: flex;
          align-items: center;
          gap: 1rem;
          text-decoration: none;
        }
        .nav2-logo-icon {
          flex-shrink: 0;
          transition: transform 0.2s;
        }
        .nav2-brand-link:hover .nav2-logo-icon { transform: scale(1.05); }
        .nav2-brand-text {
          display: flex;
          flex-direction: column;
        }
        .nav2-brand-name {
          font-family: 'Plus Jakarta Sans', sans-serif;
          font-weight: 800;
          font-size: 1.3rem;
          color: var(--text);
          letter-spacing: -0.01em;
          line-height: 1.1;
        }
        .nav2-brand-tagline {
          font-size: 0.7rem;
          font-weight: 600;
          color: var(--muted);
          letter-spacing: 0.08em;
          text-transform: uppercase;
          margin-top: 0.3rem;
        }

        /* Column B: Trust Badges */
        .nav2-col-b {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 2rem;
        }
        .nav2-badge {
          display: flex;
          align-items: center;
          gap: 0.8rem;
        }
        .nav2-badge-icon {
          font-size: 1.6rem;
          background: #f8fafc;
          border-radius: 50%;
          box-shadow: 0 4px 12px rgba(30, 64, 175, 0.04);
          display: flex;
          align-items: center;
          justify-content: center;
          width: 50px;
          height: 50px;
        }
        .nav2-badge-content {
          display: flex;
          flex-direction: column;
        }
        .nav2-badge-title {
          font-size: 0.85rem;
          font-weight: 800;
          color: var(--text);
          line-height: 1.1;
          text-transform: uppercase;
        }
        .nav2-badge-sub {
          font-size: 0.65rem;
          font-weight: 700;
          color: var(--blue);
          letter-spacing: 0.08em;
          text-transform: uppercase;
          margin-top: 0.15rem;
        }
        .nav2-badge-divider {
          width: 1px;
          height: 36px;
          background: #cbd5e1;
          border-radius: 1px;
        }

        /* Column C: CTAs */
        .nav2-col-c {
          display: flex;
          align-items: center;
          justify-content: flex-end;
        }
        .nav2-btn-primary {
          background: var(--blue);
          color: #ffffff;
          font-size: 0.8rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.06em;
          padding: 0.6rem 1.4rem;
          border-radius: 6px;
          text-decoration: none;
          transition: background 0.2s, transform 0.2s;
          box-shadow: 0 4px 10px rgba(60, 143, 140, 0.2);
        }
        .nav2-btn-primary:hover {
          background: var(--blue2);
          transform: translateY(-1px);
        }

        /* Hamburger */
        .nav2-hamburger {
          display: none;
          flex-direction: column;
          gap: 5px;
          padding: 0.4rem;
          background: none;
          border: none;
          cursor: pointer;
          flex-shrink: 0;
        }
        .nav2-bar {
          display: block;
          width: 24px;
          height: 2px;
          background: var(--blue);
          border-radius: 2px;
          transition: transform 0.3s, opacity 0.3s;
        }
        .nav2-bar--open1 { transform: translateY(7px) rotate(45deg); }
        .nav2-bar--open2 { opacity: 0; }
        .nav2-bar--open3 { transform: translateY(-7px) rotate(-45deg); }

        /* ── ZONE 3: Navigation Bar ── */
        nav.nav3 {
          background: var(--blue); /* deep teal */
          top: 112px; /* 32 + 80 */
          z-index: 1000;
          height: 44px;
          display: flex;
          align-items: center;
          border-bottom: 3px solid var(--blue2); /* visual grounding */
        }
        .nav3-inner {
          width: 100%;
          max-width: 1400px;
          margin: 0 auto;
          padding: 0 1.5rem;
          display: flex;
          align-items: center;
          justify-content: space-between;
          height: 100%;
        }
        .nav3-links-wrap {
          display: flex;
          align-items: center;
          height: 100%;
        }
        
        /* Nav3 link (Sentence case, active state) */
        .nav3-link {
          display: inline-flex;
          align-items: center;
          gap: 0.3rem;
          color: rgba(255,255,255,0.9);
          text-decoration: none;
          font-size: 0.85rem;
          font-weight: 500;
          padding: 0 1.15rem;
          height: 100%;
          transition: background 0.18s, color 0.18s;
          white-space: nowrap;
          position: relative;
        }
        
        /* Active bottom border */
        .nav3-link::after {
          content: '';
          position: absolute;
          bottom: 0; left: 0; right: 0;
          height: 3px;
          background: #fff;
          transform: scaleX(0);
          transform-origin: center;
          transition: transform 0.2s ease;
        }
        .nav3-link:hover, .nav3-link.active { 
          color: #fff; 
          background: rgba(255,255,255,0.1); 
        }
        .nav3-link:hover::after, .nav3-link.active::after { 
          transform: scaleX(1); 
        }

        .nav3-item-wrap { position: relative; height: 100%; }
        .nav3-item-mega { position: static; }
        .nav3-link--has-dropdown { cursor: pointer; }
        .nav3-chevron {
          width: 10px; height: 10px;
          transition: transform 0.2s;
          flex-shrink: 0;
          opacity: 0.8;
        }
        .nav3-chevron--open { transform: rotate(180deg); }

        /* Dropdown */
        .nav3-dropdown {
          position: absolute;
          top: 100%;
          left: 0;
          min-width: 220px;
          background: #0a1a19;
          box-shadow: 0 10px 30px rgba(0,0,0,0.3);
          z-index: 100;
          overflow: hidden;
          animation: dropIn 0.15s ease;
          border: 1px solid rgba(255,255,255,0.1);
          border-top: 2px solid #3c8f8c;
        }
        @keyframes dropIn {
          from { opacity: 0; transform: translateY(-4px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .nav3-dropdown-item {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.6rem 1.15rem;
          font-size: 0.82rem;
          font-weight: 500;
          color: #334155;
          text-decoration: none;
          transition: background 0.15s, color 0.15s;
          border-bottom: 1px solid #f1f5f9;
        }
        .nav3-dropdown-item:last-child { border-bottom: none; }
        .nav3-dropdown-item:hover {
          background: #f8fafc;
          color: var(--blue);
        }
        .nav3-dropdown-arrow { color: #94a3b8; font-size: 1rem; line-height: 1; }

        /* Mega Menu */
        .nav3-megamenu {
          position: absolute;
          top: 100%;
          left: 0;
          right: 0;
          width: 100%;
          background: #0a1a19;
          box-shadow: 0 15px 50px rgba(0,0,0,0.4);
          display: flex;
          border-top: 2px solid #3c8f8c;
          border-bottom: 1px solid rgba(255,255,255,0.1);
          overflow: hidden;
          animation: dropIn 0.2s ease;
          z-index: 100;
        }
        .megamenu-left {
          width: 320px;
          background: rgba(255,255,255,0.02);
          border-right: 1px solid rgba(255,255,255,0.08);
          display: flex;
          flex-direction: column;
          padding: 1rem 0;
        }
        .megamenu-tab {
          border-bottom: 1px solid rgba(255,255,255,0.05);
        }
        .megamenu-tab:last-child {
          border-bottom: none;
        }
        .megamenu-tab a {
          display: block;
          padding: 1.25rem 2.5rem;
          color: rgba(255,255,255,0.65);
          font-weight: 600;
          font-size: 0.9rem;
          text-decoration: none;
          transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .megamenu-tab.active a, .megamenu-tab a:hover {
          color: #fff;
          background: rgba(60, 143, 140, 0.15);
          padding-left: 3rem;
          box-shadow: inset 4px 0 0 #3c8f8c;
        }
        .megamenu-right {
          flex: 1;
          padding: 3.5rem 5rem;
          display: flex;
          gap: 4rem;
          background: transparent;
          max-width: 1200px;
          margin: 0 auto;
          width: 100%;
        }
        .megamenu-content {
          flex: 1;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
        }
        .megamenu-title {
          color: #fff;
          font-family: 'Plus Jakarta Sans', sans-serif;
          font-size: 1.8rem;
          font-weight: 800;
          margin-bottom: 1rem;
          margin-top: 0;
          letter-spacing: -0.02em;
        }
        .megamenu-desc {
          color: rgba(255,255,255,0.6);
          line-height: 1.7;
          margin-bottom: 2rem;
          font-size: 1rem;
          margin-top: 0;
        }
        .megamenu-btn {
          display: inline-flex;
          align-items: center;
          gap: 0.6rem;
          background: #3c8f8c;
          color: #fff;
          padding: 0.8rem 1.8rem;
          border-radius: 8px;
          text-decoration: none;
          font-weight: 700;
          font-size: 0.9rem;
          transition: all 0.3s;
          box-shadow: 0 4px 15px rgba(60, 143, 140, 0.2);
        }
        .megamenu-btn:hover {
          background: #2d6d6b;
          transform: translateY(-2px);
          box-shadow: 0 6px 20px rgba(60, 143, 140, 0.3);
        }
        .megamenu-image {
          width: 250px;
          height: 180px;
          flex-shrink: 0;
        }
        .megamenu-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          border-radius: 8px;
        }

        /* Search Icon */
        .nav3-search-btn {
          background: none;
          border: none;
          color: #fff;
          cursor: pointer;
          opacity: 0.85;
          transition: opacity 0.2s;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 0.25rem;
        }
        .nav3-search-btn:hover { opacity: 1; }

        /* ── MOBILE DRAWER ── */
        .nav-mobile-drawer {
          position: fixed;
          top: 112px; left: 0; right: 0; bottom: 0; /* starts below header */
          background: #fff;
          z-index: 999;
          padding: 2rem 1.5rem;
          overflow-y: auto;
          display: flex;
          flex-direction: column;
          animation: drawerIn 0.2s ease;
        }
        @keyframes drawerIn {
          from { opacity: 0; transform: translateY(-10px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .nav-mobile-item { border-bottom: 1px solid #f1f5f9; }
        .nav-mobile-link {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0.85rem 0;
          font-size: 0.95rem;
          font-weight: 600;
          color: var(--text);
          text-decoration: none;
          background: none;
          border: none;
          width: 100%;
          cursor: pointer;
        }
        .nav-mobile-link:hover { color: var(--blue); }
        .nav-mobile-toggle { justify-content: space-between; }
        .nav-mobile-sub {
          padding: 0 0 0.75rem 1rem;
          display: flex;
          flex-direction: column;
        }
        .nav-mobile-sub-link {
          display: block;
          padding: 0.5rem 0;
          font-size: 0.85rem;
          font-weight: 500;
          color: #475569;
          text-decoration: none;
          border-bottom: 1px solid #f8fafc;
        }
        .nav-mobile-book {
          display: block;
          text-align: center;
          margin-top: 1.5rem;
          background: var(--blue);
          color: #fff;
          font-weight: 600;
          font-size: 0.95rem;
          padding: 0.9rem;
          border-radius: 8px;
          text-decoration: none;
        }

        /* ── Responsive rules ── */
        @media (max-width: 1120px) {
          .nav2-col-b { display: none; } /* Hide badges on smaller screens */
        }
        @media (max-width: 900px) {
          .nav1-right { display: none; }
          .nav2-col-c { display: none; } /* Hide buttons on mobile header */
          nav.nav3 { display: none; } /* Hide nav bar */
          .nav2-hamburger { display: flex; }
        }
        @media (max-width: 640px) {
          .nav1-left .nav1-sep:not(:first-of-type),
          .nav1-left a:not(:first-child) { display: none; }
          .nav2-brand-name { font-size: 1rem; }
        }
      `}</style>
    </>
  );
}
