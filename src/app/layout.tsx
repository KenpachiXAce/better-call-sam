import type { Metadata } from "next";
import { Lexend_Giga, Cormorant_Garamond } from "next/font/google";
import "./globals.css";
import { NecklaceNav } from "@/components/navigation/NecklaceNav";
import { TorchReveal } from "@/components/background/TorchReveal";
import { CinematicLoader } from "@/components/ui/CinematicLoader";
import { PantherScrollIndex } from "@/components/ui/PantherScrollIndex";
import { VinylPlayer } from "@/components/ui/VinylPlayer";
import { PantherCursor } from "@/components/ui/PantherCursor";
import Link from "next/link";
import { Coffee } from "lucide-react";

const lexendGiga = Lexend_Giga({
  subsets: ["latin"],
  variable: "--font-lexend-giga",
  weight: ["300", "400", "500", "600", "700"],
  display: "swap"
});

const editorialFont = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-editorial",
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap"
});

export const metadata: Metadata = {
  title: "Sameer Chaudhary Ã¢â‚¬â€ Product & UI/UX Designer | Better Call Sam",
  description: "Product, web, email and visual design by Sameer Chaudhary, a Kathmandu-based designer working with ambitious clients and agency teams.",
  keywords: [
    "Sameer Chaudhary",
    "Better Call Sam",
    "Product Designer",
    "UI/UX Designer",
    "Kathmandu Designer",
    "Prestige Travel Corporation Case Study",
    "Nepal Product Design",
    "Design Systems"
  ],
  authors: [{ name: "Sameer Chaudhary", url: "https://bettercallsam.design" }],
  creator: "Sameer Chaudhary",
  openGraph: {
    title: "Sameer Chaudhary Ã¢â‚¬â€ Product & UI/UX Designer | Better Call Sam",
    description: "Product, web, email and visual design by Sameer Chaudhary. In case of creativity.",
    url: "https://bettercallsam.design",
    siteName: "Better Call Sam",
    locale: "en_US",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Sameer Chaudhary Ã¢â‚¬â€ Product & UI/UX Designer | Better Call Sam",
    description: "Product, web, email and visual design by Sameer Chaudhary. In case of creativity."
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  const personStructuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Sameer Chaudhary",
    "alternateName": "Better Call Sam",
    "jobTitle": "Product Designer & UI/UX Designer",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Kathmandu",
      "addressCountry": "Nepal"
    },
    "email": "sameer974939@gmail.com",
    "alumniOf": {
      "@type": "EducationalOrganization",
      "name": "Techspire College",
      "location": "Kathmandu, Nepal"
    },
    "knowsAbout": [
      "Product Design",
      "UI/UX Design",
      "Design Systems",
      "Information Architecture",
      "Accessibility (WCAG 2.2 AA)",
      "Web Applications",
      "Frontend Development"
    ]
  };

  return (
    <html lang="en" className={`${lexendGiga.variable} ${editorialFont.variable} h-full bg-[#090A0C] text-[#F7F4EE]`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personStructuredData) }}
        />
      </head>
      <body className="min-h-screen flex flex-col bg-[#090A0C] text-[#F7F4EE] antialiased selection:bg-[#5600A8] selection:text-[#F7F4EE]">
        {/* First-Session Cinematic Entry Loader */}
        <CinematicLoader />

        {/* Desktop panther pointer */}
        <PantherCursor />

        {/* Accessible Skip to Main Content Link */}
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>

        {/* Restrained Ambient Torch Highlight Layer */}
        <TorchReveal />

        {/* Signature Necklace Navigation */}
        <NecklaceNav />

        {/* Traveling Panther Section Index */}
        <PantherScrollIndex />

        {/* Main Content Area */}
        <main id="main-content" className="flex-1 relative z-10 w-full flex flex-col focus:outline-none">
          {children}
        </main>

        {/* Opt-in Vinyl Player ("All the Stars") */}
        <VinylPlayer />

        {/* Global Editorial Footer */}
        <footer className="relative z-20 w-full border-t border-[rgba(247,244,238,0.12)] bg-[#090A0C] py-12 px-6 sm:px-12 text-[12px] text-[#A5A2A0]">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
            {/* Left: Identity & Persistent Phrase */}
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-3">
                <span className="font-semibold tracking-wider text-[#F7F4EE]">BETTER CALL SAM</span>
                <span className="text-[rgba(247,244,238,0.3)]">|</span>
                <span className="font-editorial-italic text-2xl text-[#B37CFF] -mb-1">In case of creativity</span>
              </div>
              <p className="text-[11px] text-[#A5A2A0] max-w-md leading-relaxed">
                Sameer Chaudhary · Product Designer &amp; UI/UX Designer based in Kathmandu, Nepal. 10+ web projects across travel, education, hospitality, and commerce.
              </p>
            </div>

            {/* Center: In-Person Coffee & Email */}
            <div className="flex flex-wrap items-center gap-4 text-[11px]">
              <div className="flex items-center gap-2 px-3 py-1.5 border border-[rgba(247,244,238,0.16)] bg-[#111214]">
                <Coffee className="w-3.5 h-3.5 text-[#B37CFF]" />
                <span>Himalayan Java Meetings</span>
                <Link href="/contact" className="text-[#B37CFF] hover:underline font-semibold ml-1">
                  Book Table &rarr;
                </Link>
              </div>

              <a
                href="mailto:sameer974939@gmail.com"
                className="text-[#F7F4EE] hover:text-[#B37CFF] transition-colors underline underline-offset-4"
              >
                sameer974939@gmail.com
              </a>
            </div>

            {/* Right: Copyright */}
            <div className="text-[11px] text-[#A5A2A0] flex flex-col items-start md:items-end gap-1">
              <span>Ã‚Â© {new Date().getFullYear()} Sameer Chaudhary.</span>
              <span className="text-[10px] text-[rgba(247,244,238,0.4)]">Techspire College BSc IT (2024–2027)</span>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
