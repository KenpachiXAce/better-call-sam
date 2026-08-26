"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Compass, PackageCheck, PenTool, Search, Waypoints } from "lucide-react";
import { OWNER_DATA } from "@/data/projects";
import { ProjectShowcase } from "@/components/home/ProjectShowcase";
import { ServiceIndex } from "@/components/home/ServiceIndex";
import { SketchIcon } from "@/components/ui/SketchIcon";

const aboutStats = [
  { label: "Agency experience", value: "10 months", detail: "Embedded product workflow" },
  { label: "Web projects", value: "10+ shipped", detail: "Across multiple industries" },
  { label: "Travel products", value: "3 platforms", detail: "Complex booking journeys" },
  { label: "Largest platform", value: "95 pages", detail: "University web system" },
];

const processSteps = [
  { number: "01", title: "Understand", copy: "Clarify users, business goals and technical constraints before touching wireframes.", icon: Search },
  { number: "02", title: "Structure", copy: "Shape information architecture, intuitive journeys and rapid low-fidelity prototypes.", icon: Waypoints },
  { number: "03", title: "Design", copy: "Refine responsive components, accessibility, typography and purposeful interaction.", icon: PenTool },
  { number: "04", title: "Deliver", copy: "Document decisions, prepare prototypes and partner through engineering QA.", icon: PackageCheck },
];

export default function HomePage() {
  return (
    <div className="flex w-full flex-col items-center select-text">
      <section id="hero" className="hero-stage">
        <div className="hero-stage__aura" aria-hidden="true" />

        <div className="hero-editorial-card">
          <div className="hero-editorial-card__copy">
            <p className="section-kicker">Independent product designer · Kathmandu</p>
            <h1 className="hero-editorial-title">
              Better Call <span className="hero-name-accent">Sam</span>
            </h1>
            <p className="hero-editorial-script">In case of creativity</p>
            <div className="hero-editorial-card__bodyline">
              <p className="hero-editorial-deck">
                I turn unclear product problems into thoughtful interfaces, brand systems, and campaigns that feel human and ship cleanly.
              </p>
              <div className="hero-editorial-actions">
                <Link href="/contact" className="hero-button hero-button--primary">
                  Start a project <ArrowUpRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="hero-portrait" aria-label="Portrait of Sameer Chaudhary">
          <Image
            src="/images/sameer-portrait-seated.png"
            alt="Sameer Chaudhary seated and looking to the side"
            fill
            priority
            className="object-contain object-bottom"
            sizes="(max-width: 640px) 78vw, 470px"
          />
          <div className="hero-portrait__grade" aria-hidden="true" />
        </div>

        <p className="hero-stage__caption hero-stage__caption--left">
          Sameer Chaudhary<br /><span>Designer in Kathmandu</span>
        </p>
        <p className="hero-stage__caption hero-stage__caption--right">
          Product &amp; UI/UX designer<br /><span>figuring out thoughtful digital systems</span>
        </p>

        <div className="hero-stage__footer">
          <span className="flex items-center gap-2">
            <Compass className="h-3.5 w-3.5 text-[#B6FF00]" />
            Freelance and agency collaborations
          </span>
          <span>Scroll to explore · 01—06</span>
        </div>
      </section>

      <ProjectShowcase />

      <section className="w-full border-t border-white/10 bg-[#0D0E10] px-6 py-16 sm:px-12">
        <div className="mx-auto flex max-w-7xl flex-col gap-7">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <span className="text-[10px] uppercase tracking-[0.16em] text-[#D9D8D5]">
              Published outcome · Prestige Travel Corporation
            </span>
            <Link
              href="/case-studies/prestige-travel-corporation"
              className="flex items-center gap-1 text-[11px] uppercase tracking-[0.12em] text-[#B6FF00] hover:text-[#D9FF73]"
            >
              Read case study <ArrowUpRight className="h-3.5 w-3.5" />
            </Link>
          </div>
          <div className="grid grid-cols-2 border-l border-t border-white/10 md:grid-cols-4">
            {[
              ["Booking flow", "11 → 4", "steps"],
              ["Completion", "+156%", "published result"],
              ["Bounce rate", "68% → 22%", "measured reduction"],
              ["Booking time", "14m → 5m", "task efficiency"],
            ].map(([label, value, detail]) => (
              <div key={label} className="border-b border-r border-white/10 bg-[#090A0C] p-5 sm:p-7">
                <span className="text-[9px] uppercase tracking-[0.13em] text-[#777579]">{label}</span>
                <div className="my-2 text-xl font-semibold text-[#F7F4EE] sm:text-2xl">{value}</div>
                <span className="text-[9px] text-[#B6FF00]">{detail}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ServiceIndex />

      <section id="about" className="w-full border-t border-white/10 bg-[#0D0E10] px-6 py-24 sm:px-12 sm:py-32">
        <div className="mx-auto max-w-7xl">
          <div className="about-section-heading border-b border-white/10 pb-12">
            <div>
              <p className="section-kicker">04 / About</p>
              <h2 className="about-section-heading__title">About Sameer</h2>
            </div>
            <p className="about-section-heading__copy">
              Design thinking with implementation awareness—grounded in the people using the product and the teams building it.
            </p>
          </div>

          <div className="about-grid mt-10">
            <article className="liquid-panel about-bio">
              <div className="about-bio__mark" aria-hidden="true">
                <Image src="/images/panther-index.png" alt="" width={118} height={70} />
              </div>
              <div>
                <span className="text-[10px] uppercase tracking-[0.18em] text-[#B6FF00]">Profile / 2026</span>
                <p className="mt-6 max-w-2xl text-base leading-8 text-[#D9D8D5] sm:text-lg">
                  I&apos;m Sameer, a Product and UI/UX Designer based in Kathmandu. I&apos;ve worked across travel, education, hospitality, service and commerce experiences, from early user flows through polished interfaces and developer handoff.
                </p>
                <p className="mt-5 max-w-xl text-sm leading-7 text-[#969397]">
                  My frontend familiarity keeps design decisions visually ambitious, technically realistic and easier for teams to ship.
                </p>
              </div>
              <div className="mt-10 flex flex-wrap items-center justify-between gap-4 border-t border-white/10 pt-5 text-[10px] uppercase tracking-[0.14em] text-[#777579]">
                <span>{OWNER_DATA.location}</span>
                <span className="text-[#B6FF00]">Available for selected projects</span>
              </div>
            </article>

            <div className="about-stats">
              {aboutStats.map((stat, index) => (
                <article key={stat.label} className="liquid-panel about-stat">
                  <div className="flex items-start justify-between gap-4">
                    <span className="text-[9px] uppercase tracking-[0.14em] text-[#777579]">{stat.label}</span>
                    <span className="text-[10px] text-[#B6FF00]">0{index + 1}</span>
                  </div>
                  <strong className="mt-8 block text-xl font-semibold uppercase leading-tight text-[#F7F4EE] sm:text-2xl">
                    {stat.value}
                  </strong>
                  <span className="mt-2 block text-[10px] leading-5 text-[#969397]">{stat.detail}</span>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="process" className="process-section w-full border-t border-white/10 bg-[#090A0C] px-6 py-24 sm:px-12 sm:py-32">
        <div className="mx-auto max-w-7xl">
          <div className="process-shell">
            <div className="horizontal-section-heading horizontal-section-heading--three process-heading">
              <p className="font-editorial-italic text-3xl text-[#B6FF00] sm:text-4xl">Design process</p>
              <h2 className="text-heading-1 max-w-[15ch] uppercase text-[#F7F4EE]">
                From ambiguity to buildable clarity
              </h2>
              <p className="max-w-sm text-sm leading-7 text-[#969397]">
                A clear working rhythm, adapted to the scope and the people already in the room.
              </p>
            </div>

            <div className="process-cards">
              {processSteps.map(({ number, title, copy, icon }) => (
                <article key={number} className="process-card">
                  <div className="process-card__topline">
                    <span className="process-card__number">{number}</span>
                    <SketchIcon icon={icon} size="sm" />
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
              <p>Bring the brief, the half-formed idea, or the problem nobody has made clear yet.</p>
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
