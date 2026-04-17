import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import { WhatsAppFloatingButton } from "@/components/WhatsAppFloatingButton";
import { SITE_URL } from "@/lib/metadata";

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
  title: "Best Sexologist in Bhopal | Dr. Rajesh Maghnani Burlington Clinic & Hospital",
  description:
    "Dr. Rajesh Maghnani Burlington Clinic & Hospital – India's most trusted sexual health clinic since 1926. 5,50,000+ patients treated. ISO Certified. World Book of Records holder. Confidential consultations available online.",
  keywords: [
    "best sexologist in bhopal",
    "sexologist doctor bhopal",
    "sexual health clinic bhopal",
    "erectile dysfunction treatment",
    "premature ejaculation treatment",
    "Burlington Clinic Bhopal",
    "Dr Rajesh Maghnani",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfairDisplay.variable}`}>
      <body>
        <main>{children}</main>
        <WhatsAppFloatingButton />
      </body>
    </html>
  );
}
