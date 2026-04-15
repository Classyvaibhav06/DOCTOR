import Link from "next/link";
import type { ClinicService } from "@/lib/services";

const serviceIcons: Record<string, string> = {
  "erectile-dysfunction": "💊",
  "premature-ejaculation": "⚡",
  "low-libido": "🌿",
  nightfall: "🌙",
  infertility: "🔬",
  "sexual-counselling": "🤝",
  "penis-enlargement": "📈",
  "nightfall-treatment": "🌙",
  "ling-ki-kamzori": "💪",
  "shighrapatan": "⚡",
};

type ServiceCardProps = {
  service: ClinicService;
};

export function ServiceCard({ service }: ServiceCardProps) {
  const icon = serviceIcons[service.slug] || "🏥";

  return (
    <article className="service-card">
      <div className="service-card-icon" aria-hidden="true">
        <span style={{ fontSize: "1.2rem" }}>{icon}</span>
      </div>
      <h3 className="service-card-title">{service.title}</h3>
      <p className="service-card-desc">{service.shortDescription}</p>
      <Link href={`/services/${service.slug}`} className="service-card-link">
        Read More
        <svg width="14" height="14" fill="currentColor" viewBox="0 0 24 24">
          <path d="M9 18l6-6-6-6" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </Link>
    </article>
  );
}
