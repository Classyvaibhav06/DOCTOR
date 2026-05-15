"use client";
import React, { useState, useEffect } from "react";
import { X, PhoneCall, ShieldCheck, Zap } from "lucide-react";

export default function LeadPopup() {
  const [isOpen, setIsOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const [form, setForm] = useState({ 
    name: "", 
    phone: "", 
    email: "", 
    problem: "Erectile Dysfunction",
    message: ""
  });
  const [status, setStatus] = useState<"idle" | "submitting" | "success">("idle");

  useEffect(() => {
    // Show popup after 3 seconds
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      setIsOpen(false);
      setIsClosing(false);
    }, 400);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");
    
    try {
      await fetch("/api/book", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ 
          ...form, 
          concern: form.problem,
          preferredTime: form.message || "Callback Requested"
        }),
      });
      setStatus("success");
      setTimeout(handleClose, 2000);
    } catch (err) {
      setStatus("idle");
    }
  };

  if (!isOpen) return null;

  return (
    <div className={`lead-overlay ${isClosing ? "fade-out" : "fade-in"}`}>
      <div className={`lead-card ${isClosing ? "slide-out" : "slide-in"}`}>
        <button className="lead-close" onClick={handleClose}>
          <X size={18} />
        </button>

        <div className="lead-content">
          <div className="lead-header">
            <div className="lead-icon-wrap">
              <PhoneCall size={24} className="lead-icon" />
            </div>
            <div>
              <h3 className="lead-title">Get a <em style={{ color: 'var(--primary-light)', fontStyle: 'italic' }}>Free</em> Callback</h3>
              <p className="lead-subtitle">Confidential expert consultation.</p>
            </div>
          </div>

          {status === "success" ? (
            <div className="lead-success">
              <Zap size={32} style={{ color: '#10B981', marginBottom: '1rem' }} />
              <h4>Request Received!</h4>
              <p>We'll call you shortly.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="lead-form">
              <div className="lead-input-group">
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem' }}>
                  <input 
                    type="text" 
                    placeholder="Full Name" 
                    required 
                    value={form.name}
                    onChange={e => setForm(p => ({ ...p, name: e.target.value }))}
                  />
                  <input 
                    type="tel" 
                    placeholder="Phone Number" 
                    required 
                    value={form.phone}
                    onChange={e => setForm(p => ({ ...p, phone: e.target.value }))}
                  />
                </div>
                <input 
                  type="email" 
                  placeholder="Email Address" 
                  required 
                  value={form.email}
                  onChange={e => setForm(p => ({ ...p, email: e.target.value }))}
                />
                <select 
                  value={form.problem}
                  onChange={e => setForm(p => ({ ...p, problem: e.target.value }))}
                  style={{ width: '100%', padding: '0.9rem', borderRadius: '12px', border: '1px solid rgba(60, 143, 140, 0.1)', background: 'rgba(60, 143, 140, 0.04)' }}
                >
                  <option>Erectile Dysfunction</option>
                  <option>Premature Ejaculation</option>
                  <option>Low Libido</option>
                  <option>Male Infertility</option>
                  <option>Other Concerns</option>
                </select>
                <textarea 
                  placeholder="Briefly describe your concern (Optional)..." 
                  rows={2}
                  value={form.message}
                  onChange={e => setForm(p => ({ ...p, message: e.target.value }))}
                  style={{ width: '100%', padding: '0.9rem', borderRadius: '12px', border: '1px solid rgba(60, 143, 140, 0.1)', background: 'rgba(60, 143, 140, 0.04)', resize: 'none', fontFamily: 'inherit' }}
                />
              </div>
              <button type="submit" className="lead-btn" disabled={status === "submitting"}>
                {status === "submitting" ? "Sending..." : "Get Free Callback Now"}
              </button>
            </form>
          )}

          <div className="lead-footer">
            <ShieldCheck size={14} />
            <span>100% Private & Confidential</span>
          </div>
        </div>
      </div>

      <style jsx>{`
        .lead-overlay {
          position: fixed;
          inset: 0;
          background: rgba(10, 26, 25, 0.8);
          backdrop-filter: blur(10px);
          z-index: 100000;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 20px;
        }

        .lead-card {
          background: var(--white);
          width: 100%;
          max-width: 460px;
          border-radius: 28px;
          overflow: hidden;
          position: relative;
          box-shadow: 0 40px 120px rgba(0,0,0,0.5);
          border: 1px solid rgba(60, 143, 140, 0.2);
        }

        .lead-close {
          position: absolute;
          top: 1.25rem; right: 1.25rem;
          background: rgba(0,0,0,0.05); border: none; color: var(--muted);
          width: 32px; height: 32px; border-radius: 50%;
          display: flex; align-items: center; justify-content: center;
          cursor: pointer; transition: all 0.2s;
        }
        .lead-close:hover { background: var(--primary); color: white; transform: rotate(90deg); }

        .lead-content { padding: 3rem 2.5rem; }

        .lead-header {
          display: flex;
          align-items: center;
          gap: 1.25rem;
          margin-bottom: 2rem;
        }

        .lead-icon-wrap {
          width: 58px; height: 58px;
          background: var(--primary-glow);
          border: 1px solid rgba(60, 143, 140, 0.3);
          border-radius: 18px;
          display: flex; align-items: center; justify-content: center;
          color: var(--primary);
          flex-shrink: 0;
        }

        .lead-title {
          font-family: 'Plus Jakarta Sans', sans-serif;
          font-size: 1.6rem; font-weight: 800; margin: 0; line-height: 1.2;
        }

        .lead-subtitle {
          font-size: 0.9rem; color: var(--muted); margin: 0.4rem 0 0; font-weight: 500;
        }

        .lead-form { display: flex; flex-direction: column; gap: 1.25rem; }

        .lead-input-group { display: flex; flex-direction: column; gap: 0.85rem; }

        .lead-input-group input, .lead-input-group select, .lead-input-group textarea {
          width: 100%;
          padding: 1rem 1.25rem;
          background: rgba(60, 143, 140, 0.05);
          border: 1px solid rgba(60, 143, 140, 0.1);
          border-radius: 14px;
          font-family: inherit; font-size: 1rem;
          transition: all 0.2s;
        }

        .lead-input-group input:focus, .lead-input-group select:focus, .lead-input-group textarea:focus {
          outline: none; background: white; border-color: var(--primary);
          box-shadow: 0 0 0 4px var(--primary-glow);
        }

        .lead-btn {
          background: var(--primary);
          color: white; border: none; padding: 1.2rem;
          border-radius: 16px; font-weight: 800; font-size: 1.1rem;
          cursor: pointer; transition: all 0.3s;
          box-shadow: 0 10px 30px var(--primary-glow);
        }

        .lead-btn:hover { background: var(--primary-dark); transform: translateY(-2px); box-shadow: 0 15px 40px var(--primary-glow); }

        .lead-success { text-align: center; padding: 2rem 0; }
        .lead-success h4 { font-size: 1.5rem; margin: 0; color: var(--text); }
        .lead-success p { color: var(--muted); margin: 0.75rem 0 0; font-size: 1.1rem; }

        .lead-footer {
          margin-top: 1.75rem; display: flex; align-items: center; justify-content: center;
          gap: 0.6rem; font-size: 0.75rem; color: var(--muted); font-weight: 800;
          text-transform: uppercase; letter-spacing: 0.1em;
        }

        .fade-in { animation: fadeIn 0.4s forwards; }
        .fade-out { animation: fadeOut 0.4s forwards; }
        .slide-in { animation: slideIn 0.5s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
        .slide-out { animation: slideOut 0.4s cubic-bezier(0.16, 1, 0.3, 1) forwards; }

        @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
        @keyframes fadeOut { from { opacity: 1; } to { opacity: 0; } }
        @keyframes slideIn { from { opacity: 0; transform: translateY(40px) scale(0.9); } to { opacity: 1; transform: translateY(0) scale(1); } }
        @keyframes slideOut { from { opacity: 1; transform: translateY(0) scale(1); } to { opacity: 0; transform: translateY(40px) scale(0.9); } }
      `}</style>
    </div>
  );
}
