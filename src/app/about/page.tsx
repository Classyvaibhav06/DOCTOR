import Image from "next/image";
import Link from "next/link";
import { Navigation } from "@/components/Navigation";
import {
  Award,
  BadgeCheck,
  Building2,
  GraduationCap,
  HeartPulse,
  ShieldCheck,
  Users,
} from "lucide-react";

export default function AboutPage() {
  const stats = [
    { value: "23+", label: "Years Experience" },
    { value: "5.5L+", label: "Patients Treated" },
    { value: "4.9", label: "Justdial Rating" },
    { value: "100%", label: "Confidential Care" },
  ];

  const credentials = [
    {
      icon: GraduationCap,
      title: "BHMS Graduate",
      text: "Govt. Homeopathy Medical College",
    },
    {
      icon: BadgeCheck,
      title: "Clinical Sexology",
      text: "American College of Sexology Member",
    },
    {
      icon: Award,
      title: "World Book of Records",
      text: "Recognized for medical contribution",
    },
    {
      icon: ShieldCheck,
      title: "ISO Certified",
      text: "International quality benchmark (USA)",
    },
    {
      icon: Building2,
      title: "Established Clinic",
      text: "Trusted center in Bhopal and Mumbai",
    },
    {
      icon: Users,
      title: "High Patient Trust",
      text: "Large referral base and repeat families",
    },
  ];

  return (
    <div style={{ background: "#F8FAFC" }}>
      <Navigation />

      <header
        style={{
          padding: "8.5rem 0 3.5rem",
          background:
            "linear-gradient(150deg, #F8FAFC 0%, #EFF6FF 55%, #DBEAFE 100%)",
          borderBottom: "1px solid #DBEAFE",
        }}
      >
        <div className="container" style={{ textAlign: "center" }}>
          <p
            className="overline"
            style={{ color: "#1E40AF", marginBottom: "0.75rem" }}
          >
            About Burlington Clinic
          </p>
          <h1
            className="section-title"
            style={{ fontSize: "clamp(2.2rem, 4.8vw, 3.8rem)", margin: 0 }}
          >
            Dr. Rajesh Manghnani &amp; The
            <em style={{ color: "#1E40AF", fontStyle: "italic" }}>
              {" "}
              Care Legacy
            </em>
          </h1>
          <p
            style={{
              maxWidth: "760px",
              margin: "1.2rem auto 0",
              color: "#64748B",
              fontSize: "1.02rem",
              lineHeight: 1.8,
            }}
          >
            A modern, evidence-informed clinic where private consultation,
            compassionate diagnosis, and long-term wellness planning come
            together for men and women across India.
          </p>
        </div>
      </header>

      <section style={{ padding: "2rem 0 3.5rem" }}>
        <div className="container">
          <div className="about-spotlight">
            <div className="about-story-card">
              <p className="about-kicker">How It Started</p>
              <h2 className="about-title">
                Building Trusted Sexual Wellness Through Clinical Precision
              </h2>
              <p className="about-copy">
                Dr. Rajesh Manghnani has spent over two decades helping patients
                recover confidence, restore relationships, and improve quality
                of life through scientifically guided homeopathic and
                lifestyle-based treatment plans.
              </p>
              <p className="about-copy">
                At Burlington Clinic, every consultation is private, respectful,
                and personalized. The focus is not just symptom control, but
                complete wellbeing backed by clear diagnosis and ethical care.
              </p>
            </div>

            <div className="about-right-stack">
              <div className="about-image-card">
                <Image
                  src="/images/doctor_consultation.png"
                  alt="Dr. Rajesh Manghnani consulting a patient"
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  style={{ objectFit: "cover" }}
                />
              </div>

              <div className="about-stats-grid">
                {stats.map((item) => (
                  <div key={item.label} className="about-stat-item">
                    <div className="about-stat-value">{item.value}</div>
                    <div className="about-stat-label">{item.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section style={{ padding: "0 0 4rem" }}>
        <div className="container">
          <div className="about-credentials-wrap">
            <div className="about-cred-head">
              <p
                className="overline"
                style={{ color: "#1E40AF", marginBottom: "0.65rem" }}
              >
                Doctor & Clinic Profile
              </p>
              <h3 className="about-cred-title">
                Qualifications, Recognition &amp; Approach
              </h3>
            </div>

            <div className="about-cred-grid">
              {credentials.map((item) => (
                <div key={item.title} className="about-cred-item">
                  <item.icon size={18} color="#1E40AF" strokeWidth={2.2} />
                  <div>
                    <h4>{item.title}</h4>
                    <p>{item.text}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="about-quote-box">
              <HeartPulse size={18} color="#1E40AF" strokeWidth={2.1} />
              <p>
                Our commitment is simple: safe and natural treatment,
                transparent guidance, and complete confidentiality at every
                step.
              </p>
            </div>

            <div className="about-cta-row">
              <Link href="/contact" className="btn-primary">
                Book Confidential Consultation
              </Link>
              <a
                href="tel:+919893880001"
                className="btn-secondary"
                style={{ background: "#fff" }}
              >
                Call Clinic
              </a>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        .about-spotlight {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1rem;
        }
        .about-story-card,
        .about-image-card,
        .about-stats-grid,
        .about-credentials-wrap {
          background: #ffffff;
          border: 1px solid #E2E8F0;
          border-radius: 24px;
        }
        .about-story-card {
          padding: 2.2rem 1.9rem;
        }
        .about-kicker {
          font-size: 0.82rem;
          font-weight: 800;
          letter-spacing: 0.07em;
          text-transform: uppercase;
          color: #EA580C;
          margin-bottom: 0.85rem;
        }
        .about-title {
          font-family: "Plus Jakarta Sans", sans-serif;
          font-size: clamp(2rem, 4vw, 3.1rem);
          line-height: 1.1;
          letter-spacing: -0.04em;
          color: #0F172A;
          margin-bottom: 1.1rem;
        }
        .about-copy {
          font-size: 1rem;
          color: #475569;
          line-height: 1.8;
          margin-bottom: 0.95rem;
        }
        .about-copy:last-child {
          margin-bottom: 0;
        }
        .about-right-stack {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }
        .about-image-card {
          position: relative;
          min-height: 345px;
          overflow: hidden;
        }
        .about-stats-grid {
          padding: 0.8rem;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 0.8rem;
        }
        .about-stat-item {
          border: 1px solid #E2E8F0;
          border-radius: 16px;
          padding: 1rem;
          background: #F8FAFC;
        }
        .about-stat-value {
          font-family: "Plus Jakarta Sans", sans-serif;
          color: #0F172A;
          font-size: 2.2rem;
          font-weight: 800;
          line-height: 1;
          letter-spacing: -0.04em;
        }
        .about-stat-label {
          margin-top: 0.45rem;
          font-size: 0.88rem;
          color: #475569;
          font-weight: 500;
        }
        .about-credentials-wrap {
          padding: 2rem;
        }
        .about-cred-head {
          margin-bottom: 1.25rem;
        }
        .about-cred-title {
          font-family: "Plus Jakarta Sans", sans-serif;
          color: #0F172A;
          font-size: clamp(1.5rem, 2.8vw, 2rem);
          letter-spacing: -0.03em;
        }
        .about-cred-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 0.85rem;
        }
        .about-cred-item {
          display: flex;
          gap: 0.7rem;
          align-items: flex-start;
          border: 1px solid #DBEAFE;
          border-radius: 14px;
          padding: 0.85rem;
          background: #EFF6FF;
        }
        .about-cred-item h4 {
          font-size: 0.87rem;
          color: #0F172A;
          margin: 0 0 0.25rem;
          font-weight: 700;
        }
        .about-cred-item p {
          margin: 0;
          color: #475569;
          font-size: 0.8rem;
          line-height: 1.55;
        }
        .about-quote-box {
          margin-top: 1rem;
          border: 1px solid #DBEAFE;
          background: #F8FAFC;
          border-radius: 14px;
          padding: 0.95rem 1rem;
          display: flex;
          gap: 0.6rem;
          align-items: flex-start;
        }
        .about-quote-box p {
          margin: 0;
          font-size: 0.95rem;
          color: #334155;
          line-height: 1.7;
        }
        .about-cta-row {
          margin-top: 1.2rem;
          display: flex;
          flex-wrap: wrap;
          gap: 0.75rem;
        }
        @media (max-width: 1024px) {
          .about-spotlight {
            grid-template-columns: 1fr;
          }
          .about-image-card {
            min-height: 300px;
          }
          .about-cred-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        @media (max-width: 640px) {
          .about-story-card,
          .about-credentials-wrap {
            padding: 1.25rem;
          }
          .about-stats-grid {
            grid-template-columns: 1fr;
          }
          .about-cred-grid {
            grid-template-columns: 1fr;
          }
          .about-title {
            font-size: 2rem;
          }
          .about-copy {
            font-size: 0.94rem;
          }
        }
      `}</style>
    </div>
  );
}
