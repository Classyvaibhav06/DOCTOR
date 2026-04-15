import type { Metadata } from "next";

export const CITY = "bhopal";
export const CLINIC_NAME = "Dr. Rajesh Maghnani Burlington Clinic";
export const SITE_URL = "https://drskjainclinic.com";

export const defaultDescription =
  "Professional and confidential sexual health clinic care with online consultation available for bhopal and nearby patients.";

type MetadataOptions = {
  title: string;
  description?: string;
  path?: string;
  image?: string;
};

export function buildPageMetadata({
  title,
  description = defaultDescription,
  path = "/",
  image = "/images/og-clinic.svg",
}: MetadataOptions): Metadata {
  const canonical = `${SITE_URL}${path}`;

  return {
    title,
    description,
    alternates: {
      canonical,
    },
    openGraph: {
      title,
      description,
      url: canonical,
      type: "website",
      siteName: CLINIC_NAME,
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: "dr. rajesh maghnani Burlington Clinic",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
    },
  };
}
