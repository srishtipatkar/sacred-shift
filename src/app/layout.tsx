import type { Metadata } from "next";
import { Cormorant_Garamond, Manrope } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MobileStickyCTA from "@/components/MobileStickyCTA";
import FloatingCTA from "@/components/FloatingCTA";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

const siteUrl = "https://thesacredshift.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "The Sacred Shift | Coach Ujwal — Feminine Energy Transformation Coach & Reiki Master Healer",
    template: "%s | The Sacred Shift",
  },
  description:
    "Shiv Shakti Balance is a 90-day transformation journey for working women, guided by Coach Ujwal — Feminine Energy Transformation Coach and Reiki Master Healer. From burnout to balance.",
  keywords: [
    "Coach Ujwal",
    "Feminine Energy Transformation Coach",
    "Reiki Master Healer",
    "Shiv Shakti Balance",
    "The Sacred Shift",
    "working women coaching",
    "burnout to balance",
    "feminine energy",
    "self-worth coaching",
    "work-life balance",
    "emotional healing",
    "spiritual growth",
  ],
  authors: [{ name: "Coach Ujwal" }],
  openGraph: {
    type: "website",
    url: siteUrl,
    siteName: "The Sacred Shift",
    title: "The Sacred Shift | From Burnout to Balance",
    description:
      "A 90-day transformation journey for working women ready to move beyond exhaustion into peace, purpose and balance — with Coach Ujwal.",
    images: [{ url: "/images/og-cover.jpg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "The Sacred Shift | From Burnout to Balance",
    description:
      "A 90-day transformation journey for working women, guided by Coach Ujwal — Feminine Energy Transformation Coach and Reiki Master Healer.",
    images: ["/images/og-cover.jpg"],
  },
  alternates: {
    canonical: siteUrl,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${cormorant.variable} ${manrope.variable}`}>
      <body className="min-h-screen flex flex-col bg-ivory text-charcoal antialiased">
        <Navbar />
        <main className="flex-1 pb-16 md:pb-0">{children}</main>
        <Footer />
        <MobileStickyCTA />
        <FloatingCTA />
      </body>
    </html>
  );
}
