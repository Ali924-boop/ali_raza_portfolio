import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingCTAs from "../pages/floatingcta/Floatingcta"; // updated path
import Script from "next/script";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ali Raza Portfolio",
  description:
    "Ali Raza is a Full Stack Developer specializing in Next.js, MERN Stack, and responsive modern web applications. Explore projects, skills, and contact details.",
  keywords: [
    "Ali Raza",
    "Full Stack Developer",
    "Next.js Developer",
    "React Developer",
    "MERN Stack",
    "Web Developer",
    "Software Engineer",
    "Portfolio Website",
  ],
  authors: [{ name: "Ali Raza" }],
  creator: "Ali Raza",

  metadataBase: new URL("https://ali-raza-portfolio-bice.vercel.app"),

  openGraph: {
    title: "Ali Raza – Full Stack Developer Portfolio",
    description:
      "Explore projects and skills of Ali Raza, a Full Stack Developer experienced in Next.js & MERN Stack.",
    url: "https://ali-raza-portfolio-bice.vercel.app",
    siteName: "Ali Raza Portfolio",
    images: [
      {
        url: "/hero.png",
        width: 1200,
        height: 630,
        alt: "Ali Raza Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Ali Raza – Full Stack Developer Portfolio",
    description:
      "Full Stack Developer Portfolio built with Next.js and Tailwind CSS.",
    images: ["/hero.png"],
  },

  robots: {
    index: true,
    follow: true,
  },

  alternates: {
    canonical: "https://ali-raza-portfolio-bice.vercel.app",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* ✅ Google AdSense Verification Script */}
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1169411304409191"
          crossOrigin="anonymous"
        ></script>
      </head>

      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        {children}

        {/* ✅ Floating CTA Buttons */}
        <FloatingCTAs />

        <Footer />

        {/* ================= BOTPRESS V3.5 POPUP CHAT ================= */}
     
    <Script
  src="https://cdn.botpress.cloud/webchat/v3.5/inject.js"
  strategy="afterInteractive"
/>

<Script
  src="https://files.bpcontent.cloud/2026/01/04/12/20260104124011-ZB13YQQX.js"
  strategy="afterInteractive"
/>
    


        {/* ✅ Schema.org JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Ali Raza",
              jobTitle: "Full Stack Developer",
              url: "https://ali-raza-portfolio-bice.vercel.app",
              sameAs: [
                "https://github.com/Ali924-boop",
                "https://www.linkedin.com/in/ali-dev-21b666397",
              ],
            }),
          }}
        />
      </body>
    </html>
  );
}
