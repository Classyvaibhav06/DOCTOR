import React from 'react';

type JsonLdProps = {
  data: any;
};

const JsonLd: React.FC<JsonLdProps> = ({ data }) => {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
};

export default JsonLd;

export const generateMedicalBusinessSchema = () => ({
  "@context": "https://schema.org",
  "@type": "Physician",
  "name": "Dr. Rajesh Manghnani - Burlington Clinic",
  "image": "https://bestsexologistdoctor.com/wp-content/uploads/2025/11/photo-output.jpg",
  "@id": "https://drskjainclinic.com",
  "url": "https://drskjainclinic.com",
  "telephone": "+919893880001",
  "priceRange": "$$",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "47, Sector C, Kasturba Nagar, Near Chetak Bridge",
    "addressLocality": "Bhopal",
    "addressRegion": "MP",
    "postalCode": "462023",
    "addressCountry": "IN"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 23.232297,
    "longitude": 77.438216
  },
  "openingHoursSpecification": {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday"
    ],
    "opens": "09:00",
    "closes": "21:00"
  },
  "sameAs": [
    "https://www.facebook.com/drrajeshsexologist",
    "https://www.youtube.com/@drrajeshsexologist",
    "https://www.instagram.com/drrajeshsexologist"
  ],
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "reviewCount": "887"
  },
  "medicalSpecialty": [
    "SexualHealth",
    "Urology",
    "Psychiatry"
  ],
  "availableService": [
    {
      "@type": "MedicalProcedure",
      "name": "Erectile Dysfunction Treatment",
      "description": "Evidence-based and holistic treatment for erectile dysfunction."
    },
    {
      "@type": "MedicalProcedure",
      "name": "Premature Ejaculation Treatment",
      "description": "Specialized therapy for improving control and sexual satisfaction."
    },
    {
      "@type": "MedicalProcedure",
      "name": "Male Infertility Treatment",
      "description": "Comprehensive assessments and protocols to improve sperm health."
    }
  ]
});

export const generateFAQSchema = (faqs: { q: string, a: string }[]) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": faqs.map(faq => ({
    "@type": "Question",
    "name": faq.q,
    "acceptedAnswer": {
      "@type": "Answer",
      "text": faq.a
    }
  }))
});
