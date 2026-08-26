import type { Metadata } from "next";
import { Caveat, Lexend_Giga, Cormorant_Garamond } from "next/font/google";
import "./globals.css";
import { NecklaceNav } from "@/components/navigation/NecklaceNav";
import { TorchReveal } from "@/components/background/TorchReveal";
import { CinematicLoader } from "@/components/ui/CinematicLoader";
import { PantherScrollIndex } from "@/components/ui/PantherScrollIndex";
import { VinylPlayer } from "@/components/ui/VinylPlayer";
import { PantherCursor } from "@/components/ui/PantherCursor";
import { SpiderMark } from "@/components/ui/SpiderMark";
import Link from "next/link";
import { Coffee } from "lucide-react";

const contactEmail = process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? "hello@bettercallsam.design";

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

const handwrittenFont = Caveat({
  subsets: ["latin"],
  variable: "--font-handwritten",
  weight: ["400", "500", "600", "700"],
  display: "swap"
});

export const metadata: Metadata = {
  title: "Sameer Chaudhary — Product & UI/UX Designer | Better Call Sam",
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
    title: "Sameer Chaudhary — Product & UI/UX Designer | Better Call Sam",
    description: "Product, web, email and visual design by Sameer Chaudhary. In case of creativity.",
    url: "https://bettercallsam.design",
    siteName: "Better Call Sam",
    locale: "en_US",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Sameer Chaudhary — Product & UI/UX Designer | Better Call Sam",
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
    "email": contactEmail,
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
    <html lang="en" className={`${lexendGiga.variable} ${editorialFont.variable} ${handwrittenFont.variable} h-full bg-[#090A0C] text-[#F7F4EE]`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personStructuredData) }}
        />
      </head>
      <body className="min-h-screen flex flex-col bg-[#090A0C] text-[#F7F4EE] antialiased selection:bg-[#EA2B1F] selection:text-[#F7F4EE]">
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
        <footer className="site-footer">
          <div className="site-footer__frame">
            <div className="site-footer__identity">
              <div className="site-footer__brandline">
                <Link href="/" className="site-footer__brand">Better Call <em>Sam</em></Link>
                <SpiderMark size="md" tone="muted" />
              </div>
              <p>Product, UI/UX, campaign and visual design by Sameer Chaudhary.</p>
            </div>

            <nav className="site-footer__nav" aria-label="Footer navigation">
              <Link href="/ui-ux">UI/UX</Link>
              <Link href="/branding">Branding</Link>
              <Link href="/email-design">Email</Link>
              <Link href="/case-studies">Case studies</Link>
              <Link href="/graphic-design">Graphic design</Link>
            </nav>

            <div className="site-footer__contact">
              <Link href="/contact"><Coffee aria-hidden="true" /> Meet over coffee</Link>
              <a href={`mailto:${contactEmail}`}>{contactEmail}</a>
            </div>

            <div className="site-footer__base">
              <span>© {new Date().getFullYear()} Sameer Chaudhary</span>
              <span>Kathmandu, Nepal · In case of creativity</span>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
