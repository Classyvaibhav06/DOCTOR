"use client";
import React, { useEffect, useState } from "react";
import { X, Calendar, Phone, Mail, User, Activity, Clock, ShieldCheck } from "lucide-react";
import ContactFormClient from "./ContactFormClient";

interface AppointmentModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function AppointmentModal({ isOpen, onClose }: AppointmentModalProps) {
  const [isClosing, setIsClosing] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isOpen]);

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      setIsClosing(false);
      onClose();
    }, 300);
  };

  if (!isOpen && !isClosing) return null;

  return (
    <div className={`modal-overlay ${isClosing ? "fade-out" : "fade-in"}`} onClick={handleClose}>
      <div 
        className={`modal-container ${isClosing ? "scale-out" : "scale-in"}`} 
        onClick={(e) => e.stopPropagation()}
      >
        <button className="modal-close" onClick={handleClose}>
          <X size={20} />
        </button>

        <div className="modal-grid">
          {/* Info Side */}
          <div className="modal-info">
            <div className="modal-info-content">
              <span className="overline" style={{ color: "rgba(255,255,255,0.7)" }}>Secure Booking</span>
              <h2 className="modal-title">Book an <em style={{ fontStyle: 'italic', color: 'var(--primary-light)' }}>Appointment</em></h2>
              <p className="modal-desc">
                Schedule a confidential consultation with Dr. Rajesh Manghnani. Our team will contact you shortly to confirm your time.
              </p>

              <div className="modal-features">
                <div className="modal-feature">
                  <div className="modal-feature-icon"><ShieldCheck size={18} /></div>
                  <div>
                    <div className="modal-feature-label">100% Confidential</div>
                    <div className="modal-feature-sub">Privacy is our priority</div>
                  </div>
                </div>
                <div className="modal-feature">
                  <div className="modal-feature-icon"><Activity size={18} /></div>
                  <div>
                    <div className="modal-feature-label">Expert Consultation</div>
                    <div className="modal-feature-sub">Specialized sexual wellness</div>
                  </div>
                </div>
                <div className="modal-feature">
                  <div className="modal-feature-icon"><Clock size={18} /></div>
                  <div>
                    <div className="modal-feature-label">Quick Response</div>
                    <div className="modal-feature-sub">Call back within 24 hours</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Form Side */}
          <div className="modal-form-side">
            <ContactFormClient />
          </div>
        </div>
      </div>

      <style jsx>{`
        .modal-overlay {
          position: fixed;
          top: 0; left: 0; width: 100%; height: 100%;
          background: rgba(10, 26, 25, 0.9);
          backdrop-filter: blur(12px);
          z-index: 10000;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 20px;
        }

        .modal-container {
          background: var(--white);
          width: 100%;
          max-width: 900px;
          border-radius: 32px;
          overflow: hidden;
          position: relative;
          box-shadow: 0 40px 100px rgba(0,0,0,0.4);
          border: 1px solid rgba(255,255,255,0.1);
        }

        .modal-grid {
          display: grid;
          grid-template-columns: 1.2fr 1.5fr;
        }

        @media (max-width: 850px) {
          .modal-grid { grid-template-columns: 1fr; }
          .modal-info { display: none; }
        }

        .modal-info {
          background: linear-gradient(135deg, #0a1a19 0%, #1a2928 100%);
          padding: 3.5rem;
          color: white;
          display: flex;
          align-items: center;
          position: relative;
          overflow: hidden;
        }

        .modal-info::after {
          content: '';
          position: absolute;
          top: -20%; right: -20%;
          width: 300px; height: 300px;
          background: var(--primary-glow);
          filter: blur(80px);
          border-radius: 50%;
        }

        .modal-title {
          font-family: 'Plus Jakarta Sans', sans-serif;
          font-size: 2.5rem;
          font-weight: 800;
          line-height: 1.1;
          margin: 1rem 0 1.5rem;
        }

        .modal-desc {
          font-size: 1rem;
          color: rgba(255,255,255,0.6);
          line-height: 1.6;
          margin-bottom: 2.5rem;
        }

        .modal-features {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        .modal-feature {
          display: flex;
          align-items: flex-start;
          gap: 1rem;
        }

        .modal-feature-icon {
          width: 36px; height: 36px;
          background: rgba(60, 143, 140, 0.2);
          border: 1px solid rgba(60, 143, 140, 0.3);
          border-radius: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--primary-light);
          flex-shrink: 0;
        }

        .modal-feature-label {
          font-weight: 700;
          font-size: 0.95rem;
        }

        .modal-feature-sub {
          font-size: 0.8rem;
          color: rgba(255,255,255,0.4);
        }

        .modal-form-side {
          padding: 3.5rem;
          background: var(--white);
        }

        .modal-close {
          position: absolute;
          top: 1.5rem; right: 1.5rem;
          width: 40px; height: 40px;
          background: rgba(0,0,0,0.05);
          border: none;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          z-index: 10;
          transition: all 0.2s;
        }

        .modal-close:hover {
          background: var(--primary);
          color: white;
          transform: rotate(90deg);
        }

        .fade-in { animation: fadeIn 0.3s forwards; }
        .fade-out { animation: fadeOut 0.3s forwards; }
        .scale-in { animation: scaleIn 0.3s var(--ease) forwards; }
        .scale-out { animation: scaleOut 0.3s var(--ease) forwards; }

        @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
        @keyframes fadeOut { from { opacity: 1; } to { opacity: 0; } }
        @keyframes scaleIn { from { opacity: 0; transform: scale(0.95) translateY(20px); } to { opacity: 1; transform: scale(1) translateY(0); } }
        @keyframes scaleOut { from { opacity: 1; transform: scale(1) translateY(0); } to { opacity: 0; transform: scale(0.95) translateY(20px); } }

        :global(.booking-form) {
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
        }

        :global(.booking-field label) {
          display: block;
          font-size: 0.75rem;
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          color: var(--primary);
          margin-bottom: 0.5rem;
        }

        :global(.booking-field input, .booking-field select) {
          width: 100%;
          padding: 0.9rem 1.25rem;
          background: rgba(60, 143, 140, 0.05);
          border: 1px solid rgba(60, 143, 140, 0.1);
          border-radius: 12px;
          font-family: inherit;
          font-size: 1rem;
          color: var(--text);
          transition: all 0.2s;
        }

        :global(.booking-field input:focus, .booking-field select:focus) {
          outline: none;
          background: white;
          border-color: var(--primary);
          box-shadow: 0 0 0 4px var(--primary-glow);
        }

        :global(.booking-submit) {
          margin-top: 1rem;
          padding: 1.1rem;
          background: var(--primary);
          color: white;
          border: none;
          border-radius: 14px;
          font-weight: 800;
          font-size: 1rem;
          cursor: pointer;
          transition: all 0.3s;
          box-shadow: 0 10px 25px var(--primary-glow);
        }

        :global(.booking-submit:hover) {
          background: var(--primary-dark);
          transform: translateY(-2px);
          box-shadow: 0 15px 35px var(--primary-glow);
        }

        :global(.booking-privacy) {
          text-align: center;
          font-size: 0.75rem;
          color: var(--muted);
          margin-top: 0.5rem;
        }
      `}</style>
    </div>
  );
}
