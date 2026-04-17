import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { WhatsAppFloatingButton } from "@/components/WhatsAppFloatingButton";
import { SITE_URL } from "@/lib/metadata";
import JsonLd, { generateMedicalBusinessSchema } from "@/components/JsonLd";

const inter = Inter({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const playfairDisplay = Playfair_Display({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Best Sexologist in Bhopal | Dr. Rajesh Manghnani Burlington Clinic",
    template: "%s | Dr. Rajesh Manghnani"
  },
  description:
    "Dr. Rajesh Manghnani Burlington Clinic – India's most trusted sexual health clinic since 1926. 5,50,000+ patients treated. ISO Certified. World Book of Records holder. Confidential consultations available online.",
  keywords: [
    "best sexologist in bhopal",
    "sexologist doctor bhopal",
    "sexual health clinic bhopal",
    "erectile dysfunction treatment bhopal",
    "premature ejaculation treatment bhopal",
    "Burlington Clinic Bhopal",
    "Dr Rajesh Manghnani",
    "top sexologist in india",
    "sexual wellness expert",
    "male infertility treatment bhopal",
    "ayurvedic sexologist bhopal",
    "homeopathic sexologist bhopal",
    "sex doctor near me",
    "online sexologist consultation",
  ],
  authors: [{ name: "Dr. Rajesh Manghnani" }],
  creator: "Dr. Rajesh Manghnani",
  publisher: "Burlington Clinic & Hospital",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const businessSchema = generateMedicalBusinessSchema();

  return (
    <html lang="en" className={`${inter.variable} ${playfairDisplay.variable}`} suppressHydrationWarning>
      <head>
        <JsonLd data={businessSchema} />
      </head>
      <body suppressHydrationWarning>
        <main>{children}</main>
        <WhatsAppFloatingButton />
        <Script id="scroll-handler" strategy="afterInteractive">
          {`
            window.addEventListener('scroll', () => {
              const nav = document.querySelector('nav');
              if (window.scrollY > 50) nav?.classList.add('scrolled');
              else nav?.classList.remove('scrolled');
            });
          `}
        </Script>
      </body>
    </html>
  );
}
