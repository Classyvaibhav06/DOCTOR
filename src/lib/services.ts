export type ClinicService = {
  slug: string;
  title: string;
  shortDescription: string;
  overview: string;
  symptoms: string[];
  treatmentApproach: string[];
};

export const services: ClinicService[] = [
  {
    slug: "erectile-dysfunction",
    title: "Erectile Dysfunction",
    shortDescription:
      "Confidential diagnosis and tailored treatment plans to improve performance confidence.",
    overview:
      "Erectile dysfunction can happen due to stress, lifestyle factors, vascular concerns, or hormonal imbalance. Early consultation helps identify root causes and improves outcomes.",
    symptoms: [
      "Difficulty achieving erection",
      "Trouble maintaining erection during intimacy",
      "Reduced confidence and relationship stress",
    ],
    treatmentApproach: [
      "Comprehensive clinical evaluation",
      "Lifestyle and stress-management plan",
      "Personalized medication and natural support",
      "Regular progress follow-up",
    ],
  },
  {
    slug: "premature-ejaculation",
    title: "Premature Ejaculation",
    shortDescription:
      "Structured treatment strategy focused on control, confidence, and improved satisfaction.",
    overview:
      "Premature ejaculation is common and treatable. A guided plan can significantly improve control and reduce performance anxiety.",
    symptoms: [
      "Ejaculation sooner than expected",
      "Low control over climax timing",
      "Anxiety around intimacy",
    ],
    treatmentApproach: [
      "Behavioral and counselling support",
      "Condition-specific therapies",
      "Guided exercises for better control",
      "Partner-inclusive support when needed",
    ],
  },
  {
    slug: "low-libido",
    title: "Low Libido",
    shortDescription:
      "Restore energy, desire, and emotional wellness with holistic sexual health care.",
    overview:
      "Low libido may be linked to stress, hormonal changes, fatigue, or emotional concerns. Professional evaluation helps create a practical recovery plan.",
    symptoms: [
      "Reduced interest in intimacy",
      "Persistent fatigue and low motivation",
      "Emotional disconnect in relationships",
    ],
    treatmentApproach: [
      "Hormonal and wellness assessment",
      "Diet, sleep, and activity guidance",
      "Personalized treatment for underlying causes",
      "Ongoing wellness monitoring",
    ],
  },
  {
    slug: "nightfall",
    title: "Nightfall",
    shortDescription:
      "Evidence-based counselling and treatment for frequent nightfall concerns.",
    overview:
      "Occasional nightfall is normal, but frequent episodes can affect confidence and sleep quality. A balanced treatment plan can reduce frequency and anxiety.",
    symptoms: [
      "Frequent nocturnal emissions",
      "Sleep disturbance or fatigue",
      "Worry about sexual health",
    ],
    treatmentApproach: [
      "Medical review for associated factors",
      "Sleep and stress management",
      "Condition-focused therapies",
      "Confidence-building counselling",
    ],
  },
  {
    slug: "infertility",
    title: "Infertility",
    shortDescription:
      "Complete male fertility evaluation and treatment pathway with compassionate support.",
    overview:
      "Male infertility can involve sperm quality, hormonal health, or lifestyle factors. Timely evaluation supports better reproductive planning.",
    symptoms: [
      "Difficulty conceiving over extended period",
      "Abnormal semen parameters",
      "History of hormonal or reproductive issues",
    ],
    treatmentApproach: [
      "Detailed fertility workup",
      "Corrective treatment for identified factors",
      "Lifestyle optimization for reproductive health",
      "Specialist coordination when required",
    ],
  },
  {
    slug: "sexual-counselling",
    title: "Sexual Counselling",
    shortDescription:
      "Private counselling sessions for individuals and couples to improve confidence and intimacy.",
    overview:
      "Sexual counselling provides a safe space to address anxiety, communication gaps, and performance concerns with practical guidance.",
    symptoms: [
      "Performance anxiety",
      "Communication gaps in relationship",
      "Stress-related intimacy concerns",
    ],
    treatmentApproach: [
      "Confidential one-on-one sessions",
      "Couple counselling where appropriate",
      "Structured communication and confidence tools",
      "Long-term emotional wellbeing planning",
    ],
  },
];

export const getServiceBySlug = (slug: string) =>
  services.find((service) => service.slug === slug);
