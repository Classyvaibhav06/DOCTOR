"use client";
import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Search } from "lucide-react";

/* ── Dropdown data for main nav items (Sentence Case) ── */
type NavItem = {
  label: string;
  href: string;
  dropdown?: { label: string; href: string }[];
};

const mainNavItems: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  {
    label: "Services",
    href: "/services",
    dropdown: [
      { label: "Erectile Dysfunction", href: "/services/erectile-dysfunction" },
      { label: "Premature Ejaculation", href: "/services/premature-ejaculation" },
      { label: "Low Libido", href: "/services/low-libido" },
      { label: "Male Infertility", href: "/services/male-infertility" },
      { label: "Nightfall Treatment", href: "/services/nightfall" },
      { label: "Phimosis Treatment", href: "/services/phimosis" },
      { label: "Sexual Weakness", href: "/services/sexual-weakness" },
      { label: "Online Consultation", href: "/ask-online" },
    ],
  },
  {
    label: "Disease",
    href: "/disease",
    dropdown: [
      { label: "Sexual Disorders", href: "/disease" },
      { label: "Male Sexual Health", href: "/disease#male" },
      { label: "Hormonal Issues", href: "/disease#hormonal" },
    ],
  },
  { label: "Blog", href: "/blog" },
  { label: "Contact Us", href: "/contact" },
];

/* ── Dropdown Item Component ── */
function DropdownMenu({ items }: { items: { label: string; href: string }[] }) {
  return (
    <div className="nav3-dropdown">
      {items.map((item) => (
        <Link key={item.href} href={item.href} className="nav3-dropdown-item">
          <span className="nav3-dropdown-arrow">›</span>
          {item.label}
        </Link>
      ))}
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
      className="nav3-item-wrap"
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
      {open && <DropdownMenu items={item.dropdown} />}
    </div>
  );
}

/* ── Main Navigation Component ── */
export function Navigation() {
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
                  <circle cx="24" cy="24" r="22" fill="#1E40AF" />
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
            <a
              href="https://bestsexologistdoctor.com/index.php/payment/"
              target="_blank"
              rel="noopener"
              className="nav2-btn-primary"
            >
              Book Appointment
            </a>
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
                          key={sub.href}
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
          <a
            href="https://bestsexologistdoctor.com/index.php/payment/"
            target="_blank"
            rel="noopener"
            className="nav-mobile-book"
            onClick={() => setMobileOpen(false)}
          >
            📅 Book Appointment
          </a>
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
          background: #0f172a; /* dark navy */
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
          color: #0f172a;
          letter-spacing: -0.01em;
          line-height: 1.1;
        }
        .nav2-brand-tagline {
          font-size: 0.7rem;
          font-weight: 600;
          color: #64748b;
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
          color: #0f172a;
          line-height: 1.1;
          text-transform: uppercase;
        }
        .nav2-badge-sub {
          font-size: 0.65rem;
          font-weight: 700;
          color: #1e40af;
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
          background: #1e40af;
          color: #ffffff;
          font-size: 0.8rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.06em;
          padding: 0.6rem 1.4rem;
          border-radius: 6px;
          text-decoration: none;
          transition: background 0.2s, transform 0.2s;
          box-shadow: 0 4px 10px rgba(30,64,175,0.2);
        }
        .nav2-btn-primary:hover {
          background: #1d3a9e;
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
          background: #1e40af;
          border-radius: 2px;
          transition: transform 0.3s, opacity 0.3s;
        }
        .nav2-bar--open1 { transform: translateY(7px) rotate(45deg); }
        .nav2-bar--open2 { opacity: 0; }
        .nav2-bar--open3 { transform: translateY(-7px) rotate(-45deg); }

        /* ── ZONE 3: Navigation Bar ── */
        nav.nav3 {
          background: #1e40af; /* deep blue */
          top: 112px; /* 32 + 80 */
          z-index: 1000;
          height: 44px;
          display: flex;
          align-items: center;
          border-bottom: 3px solid #1d3a9e; /* visual grounding */
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
          min-width: 230px;
          background: #fff;
          border-radius: 0 0 8px 8px;
          box-shadow: 0 10px 30px rgba(30,64,175,0.15);
          z-index: 100;
          overflow: hidden;
          animation: dropIn 0.15s ease;
          border: 1px solid #e2e8f0;
          border-top: none;
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
          color: #1e40af;
        }
        .nav3-dropdown-arrow { color: #94a3b8; font-size: 1rem; line-height: 1; }

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
          color: #0f172a;
          text-decoration: none;
          background: none;
          border: none;
          width: 100%;
          cursor: pointer;
        }
        .nav-mobile-link:hover { color: #1e40af; }
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
          background: #1e40af;
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
