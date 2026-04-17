export type ClinicService = {
  slug: string;
  title: string;
  shortDescription: string;
  overview: string;
  image: string;
  symptoms: string[];
  treatmentApproach: string[];
};

export const services: ClinicService[] = [
  {
    slug: "erectile-dysfunction",
    title: "Erectile Dysfunction",
    shortDescription:
      "Confidential diagnosis and tailored treatment plans to improve performance confidence.",
    image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80&w=1200",
    overview:
      "Erectile dysfunction can happen due to stress, lifestyle factors, vascular concerns, or hormonal imbalance. Early consultation helps identify root causes and improves outcomes. Our approach combines clinical precision with natural support systems tailored to each individual patient's physiology and psychological state.",
    symptoms: [
      "Difficulty achieving erection",
      "Trouble maintaining erection during intimacy",
      "Reduced confidence and relationship stress",
      "Performance anxiety and mental blocks",
    ],
    treatmentApproach: [
      "Comprehensive clinical evaluation and history",
      "Lifestyle and stress-management optimization",
      "Personalized medication and natural German homeopathic support",
      "Regular progress follow-up and adjustment",
    ],
  },
  {
    slug: "premature-ejaculation",
    title: "Premature Ejaculation",
    shortDescription:
      "Structured treatment strategy focused on control, confidence, and improved satisfaction.",
    image: "https://images.unsplash.com/photo-1576091160550-217359f42f8c?auto=format&fit=crop&q=80&w=1200",
    overview:
      "Premature ejaculation is a common concern that affects men of all ages. At our clinic, we focus on identifying whether the cause is psychological, physiological, or a combination of both. A guided, phased treatment plan can significantly improve control, extend timing, and reduce performance anxiety.",
    symptoms: [
      "Ejaculation sooner than expected or desired",
      "Low control over climax timing",
      "Persistent anxiety around intimacy",
      "Feelings of frustration or lack of fulfillment",
    ],
    treatmentApproach: [
      "Behavioral and counselling support sessions",
      "Condition-specific homeopathic therapies",
      "Guided technique training for better control",
      "Partner-inclusive support for holistic recovery",
    ],
  },
  {
    slug: "low-libido",
    title: "Low Libido",
    shortDescription:
      "Restore energy, desire, and emotional wellness with holistic sexual health care.",
    image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=1200",
    overview:
      "Low libido is often a symptom of underlying fatigue, hormonal changes, or high stress levels. We provide a thorough medical and psychological assessment to understand why your desire has decreased and implement a recovery roadmap that restores your natural drive and vitality.",
    symptoms: [
      "Marked decrease in interest in intimacy",
      "Persistent fatigue and low overall energy",
      "Emotional disconnect in personal relationships",
      "Lack of spontaneous desire or morning erections",
    ],
    treatmentApproach: [
      "Initial hormonal and overall wellness assessment",
      "Dietary, sleep, and physical activity optimization",
      "Personalized treatment for identifying root causes",
      "Ongoing emotional and wellness monitoring",
    ],
  },
  {
    slug: "nightfall",
    title: "Nocturnal Emission (Nightfall)",
    shortDescription:
      "Evidence-based counselling and treatment for frequent nightfall concerns.",
    image: "https://images.unsplash.com/photo-1511208687438-2c5a5abb810c?auto=format&fit=crop&q=80&w=1200",
    overview:
      "Occasional nocturnal emissions are a natural bodily process. However, when they become frequent enough to cause fatigue, sleep disturbance, or mental distress, intervention is helpful. We provide safe, effective solutions to stabilize the system and build confidence.",
    symptoms: [
      "Excessively frequent nocturnal emissions",
      "Chronic daytime fatigue or brain fog",
      "Anxiety or guilt regarding sexual health",
      "Lower back pain or general weakness",
    ],
    treatmentApproach: [
      "Medical history review for contributing factors",
      "Stabilizing sleep and stress management protocols",
      "Condition-focused German homeopathic remedies",
      "Confidence-building counselling sessions",
    ],
  },
  {
    slug: "infertility",
    title: "Male Infertility",
    shortDescription:
      "Complete male fertility evaluation and treatment pathway with compassionate support.",
    image: "https://images.unsplash.com/photo-1579152276502-53b8a96635bb?auto=format&fit=crop&q=80&w=1200",
    overview:
      "Addressing male infertility requires a detailed look at sperm health, lifestyle factors, and physiological obstacles. We provide professional diagnostics and support to help couples identify and overcome barriers to conception with natural and clinical precision.",
    symptoms: [
      "Inability to conceive after 12 months of attempts",
      "Low sperm count or poor motility (Azoospermia/Oligospermia)",
      "History of reproductive or hormonal issues",
      "Underlying conditions affecting fertility",
    ],
    treatmentApproach: [
      "Detailed fertility workup and diagnostic review",
      "Targeted corrective treatment for identified factors",
      "Lifestyle and nutritional optimization for sperm health",
      "Specialist coordination and ongoing patient support",
    ],
  },
  {
    slug: "female-sexual-problems",
    title: "Female Sexual Problems",
    shortDescription: "Specialized care for vaginismus, desire disorders, and intimacy concerns for women.",
    image: "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=1200",
    overview: "Female sexual health involves complex physiological and emotional layers. We provide a safe, discreet environment for women to address concerns involving desire, physical discomfort, or orgasmic response with professional medical and psychological support.",
    symptoms: [
      "Low sexual desire or interest (HSDD)",
      "Pain during intimacy (Dyspareunia)",
      "Vaginismus or involuntary muscle tightening",
      "Significant difficulty achieving climax",
    ],
    treatmentApproach: [
      "Sensitive clinical and hormonal consultation",
      "Pelvic health and comfort review",
      "Counseling for psychological and emotional barriers",
      "Multidisciplinary approach to physical wellness",
    ],
  },
  {
    slug: "sti-treatment",
    title: "STI Diagnosis & Treatment",
    shortDescription: "Discreet testing and management of STIs with immediate professional care.",
    image: "https://images.unsplash.com/photo-1584036561566-baf8f5f1b144?auto=format&fit=crop&q=80&w=1200",
    overview: "Sexually transmitted infections require immediate diagnosis and professional management to prevent secondary complications and ensure safety for all partners. We provide rapid testing and evidence-based treatments in a 100% confidential setting.",
    symptoms: [
      "Unusual discharge, irritation, or itching",
      "Pain during urination or physical intimacy",
      "Visible genital sores, bumps, or rashes",
      "Worry after potential exposure or break in safety",
    ],
    treatmentApproach: [
      "Rapid, highly confidential diagnostic testing",
      "Evidence-based medical and symptomatic treatment",
      "Professional partner notification guidance",
      "Comprehensive preventive health education",
    ],
  },
  {
    slug: "couples-counseling",
    title: "Couples Counseling",
    shortDescription: "Professional guidance to strengthen bonds and overcome intimacy barriers together.",
    image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80&w=1200",
    overview: "Intimacy is a shared experience. When challenges arise, they often affect both partners. Our couples counseling provides a neutral, professional space to improve communication, resolve conflicts, and rebuild physical and emotional connection.",
    symptoms: [
      "Frequent conflict or poor communication",
      "Misaligned expectations regarding intimacy",
      "Growing emotional distance between partners",
      "Difficulty discussing sensitive needs or concerns",
    ],
    treatmentApproach: [
      "Structured joint counseling environment",
      "Communication and listening skill-building",
      "Collaborative conflict resolution strategies",
      "Practice-based exercises for emotional bonding",
    ],
  },
  {
    slug: "sexual-anxiety",
    title: "Sexual Anxiety & Counselling",
    shortDescription: "Confidential sessions to overcome performance anxiety and psychological barriers.",
    image: "https://images.unsplash.com/photo-1518152006812-edab29b069ac?auto=format&fit=crop&q=80&w=1200",
    overview: "The 'spectator effect' and performance anxiety are major contributors to intimacy issues. We help patients deconstruct the psychological roots of their anxiety and implement proven cognitive techniques to regain natural confidence and presence.",
    symptoms: [
      "Intense worry or fear before/during intimacy",
      "Avoidance behaviors towards romantic situations",
      "Anxiety-driven physical symptoms (shaking, sweating)",
      "Persistent 'self-monitoring' rather than experiencing",
    ],
    treatmentApproach: [
      "Mental health and stress-source assessment",
      "Cognitive-behavioral confidence building tools",
      "Practicing mindfulness and focus techniques",
      "Integrated approach with physical therapies",
    ],
  },
];

export const getServiceBySlug = (slug: string) =>
  services.find((service) => service.slug === slug);
