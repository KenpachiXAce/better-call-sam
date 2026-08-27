"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, PackageCheck, PenTool, Search, Waypoints } from "lucide-react";
import { OWNER_DATA } from "@/data/projects";
import { ProjectShowcase } from "@/components/home/ProjectShowcase";
import { ServiceIndex } from "@/components/home/ServiceIndex";
import { SketchIcon } from "@/components/ui/SketchIcon";

const processSteps = [
  { number: "01", title: "Understand", copy: "Define the user, goal and constraints.", icon: Search },
  { number: "02", title: "Structure", copy: "Map the journey and test the flow.", icon: Waypoints },
  { number: "03", title: "Design", copy: "Build clear, accessible interfaces.", icon: PenTool },
  { number: "04", title: "Deliver", copy: "Document, hand off and refine.", icon: PackageCheck },
];

const heroDecorations = [
  { id: "pen-nib", src: "/images/stickers/pen-nib.png", size: "92px" },
  { id: "pixel-diamond", src: "/images/stickers/pixel-diamond.png", size: "76px" },
  { id: "cursor-arrow", src: "/images/stickers/cursor-arrow.png", size: "74px" },
  { id: "gradient-squiggle", src: "/images/stickers/gradient-squiggle.png", size: "92px" },
];

const aboutNotes = [
  { id: "focus", title: "Focus", copy: "Product, UI/UX and visual systems." },
  { id: "approach", title: "Approach", copy: "Clear decisions. Practical handoff." },
];

export default function HomePage() {
  return (
    <div className="flex w-full flex-col items-center select-text">
      <section id="hero" className="hero-stage">
        <div className="hero-stage__aura" aria-hidden="true" />

        <div className="hero-editorial-card">
          <div className="hero-editorial-card__copy">
            <p className="section-kicker">Product designer · Kathmandu</p>
            <h1 className="hero-editorial-title">
              Better Call <span className="hero-name-accent">Sam</span>
            </h1>
            <p className="hero-editorial-script">In case of creativity</p>
            <div className="hero-editorial-card__bodyline">
              <p className="hero-editorial-deck">
                Interfaces, brands and campaigns.
              </p>
              <div className="hero-editorial-actions">
                <Link href="/contact" className="hero-button hero-button--primary">
                  Start a project <ArrowUpRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>

          <div className="hero-sticker-layer" aria-hidden="true">
            {heroDecorations.map((sticker) => (
              <span key={sticker.id} className={`hero-sticker hero-sticker--${sticker.id}`}>
                <Image src={sticker.src} alt="" fill sizes={sticker.size} />
              </span>
            ))}
            <span className="hero-sticker hero-sticker--figma">
              <Image src="/images/figma-sticker.png" alt="" fill sizes="72px" />
            </span>
            <span className="hero-sticker hero-sticker--photoshop">
              <Image src="/images/photoshop-sticker.png" alt="" fill sizes="72px" />
            </span>
          </div>

          <div className="hero-sense" aria-hidden="true">
            <Image src="/images/hero-sense.png" alt="" fill sizes="220px" />
          </div>

          <div className="hero-name-sticker" aria-label="Sameer Chaudhary, product designer">
            <Image src="/images/hero-name.png" alt="Hello, my name is Sameer" fill sizes="240px" />
          </div>
        </div>

        <div className="hero-portrait" aria-label="Portrait of Sameer Chaudhary">
          <Image
            src="/images/sameer-portrait-seated.png"
            alt="Sameer Chaudhary seated and looking to the side"
            fill
            priority
            className="object-contain object-bottom"
            sizes="(max-width: 640px) 92vw, (max-width: 1024px) 420px, 540px"
          />
          <div className="hero-portrait__grade" aria-hidden="true" />
        </div>

        <div className="hero-stage__footer">
          <span>Available for projects</span>
          <span>Scroll · 01—06</span>
        </div>
      </section>

      <ProjectShowcase />

      <ServiceIndex />

      <section id="about" className="section-gutter w-full border-t border-white/10 bg-[#0D0E10] py-24 sm:py-32">
        <div className="mx-auto max-w-7xl">
          <div className="about-section-heading border-b border-white/10 pb-12">
            <div>
              <p className="section-kicker">04 / About</p>
              <h2 className="about-section-heading__title">About Sameer</h2>
            </div>
            <p className="about-section-heading__copy">
              Product thinking, visual craft and build awareness.
            </p>
          </div>

          <div className="about-grid mt-10">
            <article className="about-card about-bio">
              <div>
                <span className="about-card__label">Profile</span>
                <h3>Sameer Chaudhary</h3>
                <p>Product and UI/UX designer building clear digital experiences.</p>
              </div>
              <div className="about-card__footer">
                <span>{OWNER_DATA.location}</span>
                <span>Available</span>
              </div>
            </article>

            <div className="about-notes">
              {aboutNotes.map((note) => (
                <article key={note.id} className="about-card about-note">
                  <div>
                    <span className="about-card__label">{note.title}</span>
                    <p>{note.copy}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="process" className="section-gutter process-section w-full border-t border-white/10 bg-[#090A0C] py-24 sm:py-32">
        <div className="mx-auto max-w-7xl">
          <div className="process-shell">
            <div className="process-heading section-heading-standard">
              <div>
                <p className="section-kicker">05 / Process</p>
                <h2 className="section-heading-standard__title">Design process</h2>
              </div>
              <p className="section-heading-standard__copy">A clear path from discovery to handoff.</p>
            </div>

            <div className="process-cards">
              {processSteps.map(({ number, title, copy, icon: Icon }) => (
                <article key={number} className="process-card">
                  <div className="process-card__topline">
                    <SketchIcon icon={Icon} size="xl" tone="accent" />
                    <span className="process-card__number">{number}</span>
                  </div>
                  <h3 className="process-card__title">{title}</h3>
                  <p className="process-card__copy">{copy}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="final-cta">
        <div className="final-cta__frame">
          <div className="final-cta__eyebrow">
            <span>06 / Contact</span>
            <span>Kathmandu · Available worldwide</span>
          </div>
          <div className="final-cta__composition">
            <div className="final-cta__headline">
              <p className="font-editorial-italic">Have something</p>
              <h2>Worth making?</h2>
            </div>
            <div className="final-cta__aside">
              <p>Bring the brief—or the problem still taking shape.</p>
              <Link href="/contact" className="final-cta__button">
                Start a project <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
