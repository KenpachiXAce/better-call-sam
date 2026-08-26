"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowDown, ArrowUpRight, Compass } from "lucide-react";
import { OWNER_DATA } from "@/data/projects";
import { ProjectShowcase } from "@/components/home/ProjectShowcase";
import { ServiceIndex } from "@/components/home/ServiceIndex";

const aboutStats = [
  { label: "Agency experience", value: "10 months", detail: "Embedded product workflow" },
  { label: "Web projects", value: "10+ shipped", detail: "Across multiple industries" },
  { label: "Travel products", value: "3 platforms", detail: "Complex booking journeys" },
  { label: "Largest platform", value: "95 pages", detail: "University web system" },
];

const processSteps = [
  ["01", "Understand", "Clarify users, business goals and technical constraints before touching wireframes."],
  ["02", "Structure", "Shape information architecture, intuitive journeys and rapid low-fidelity prototypes."],
  ["03", "Design", "Refine responsive components, accessibility, typography and purposeful interaction."],
  ["04", "Deliver", "Document decisions, prepare prototypes and partner through engineering QA."],
];

export default function HomePage() {
  return (
    <div className="flex w-full flex-col items-center select-text">
      <section id="hero" className="hero-stage">
        <div className="hero-stage__aura" aria-hidden="true" />

        <div className="hero-editorial-card">
          <div className="hero-editorial-card__copy">
            <p className="font-editorial-italic text-3xl text-[#B37CFF] sm:text-5xl">
              In case of creativity
            </p>
            <h1 className="hero-editorial-title">
              Better Call <span className="hero-name-accent">Sam</span>
            </h1>
            <p className="hero-editorial-deck">
              Product thinking, expressive interfaces and campaign systems shaped into clear, buildable work.
            </p>
            <div className="mt-7 flex flex-wrap items-center justify-center gap-3">
              <a href="#work" className="hero-button hero-button--primary">
                See selected work <ArrowDown className="h-4 w-4" />
              </a>
              <Link href="/contact" className="hero-button hero-button--secondary">
                Start a project <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>

        <div className="hero-portrait" aria-label="Portrait of Sameer Chaudhary">
          <Image
            src="/images/sameer-hero-new.png"
            alt="Sameer Chaudhary standing outdoors in the mountains"
            fill
            priority
            className="object-cover object-[50%_18%]"
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
            <Compass className="h-3.5 w-3.5 text-[#B37CFF]" />
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
              className="flex items-center gap-1 text-[11px] uppercase tracking-[0.12em] text-[#B37CFF] hover:text-[#D5B8FF]"
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
                <span className="text-[9px] text-[#B37CFF]">{detail}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ServiceIndex />

      <section id="about" className="w-full border-t border-white/10 bg-[#0D0E10] px-6 py-24 sm:px-12 sm:py-32">
        <div className="mx-auto max-w-7xl">
          <div className="horizontal-section-heading border-b border-white/10 pb-12">
            <p className="font-editorial-italic text-3xl text-[#B37CFF] sm:text-4xl">About Sameer</p>
            <h2 className="text-heading-1 max-w-[14ch] uppercase text-[#F7F4EE]">
              Design thinking with implementation awareness
            </h2>
          </div>

          <div className="about-grid mt-10">
            <article className="liquid-panel about-bio">
              <div className="about-bio__mark" aria-hidden="true">
                <Image src="/images/panther-index.png" alt="" width={118} height={70} />
              </div>
              <div>
                <span className="text-[10px] uppercase tracking-[0.18em] text-[#B37CFF]">Profile / 2026</span>
                <p className="mt-6 max-w-2xl text-base leading-8 text-[#D9D8D5] sm:text-lg">
                  I&apos;m Sameer, a Product and UI/UX Designer based in Kathmandu. I&apos;ve worked across travel, education, hospitality, service and commerce experiences, from early user flows through polished interfaces and developer handoff.
                </p>
                <p className="mt-5 max-w-xl text-sm leading-7 text-[#969397]">
                  My frontend familiarity keeps design decisions visually ambitious, technically realistic and easier for teams to ship.
                </p>
              </div>
              <div className="mt-10 flex flex-wrap items-center justify-between gap-4 border-t border-white/10 pt-5 text-[10px] uppercase tracking-[0.14em] text-[#777579]">
                <span>{OWNER_DATA.location}</span>
                <span className="text-[#B37CFF]">Available for selected projects</span>
              </div>
            </article>

            <div className="about-stats">
              {aboutStats.map((stat, index) => (
                <article key={stat.label} className="liquid-panel about-stat">
                  <div className="flex items-start justify-between gap-4">
                    <span className="text-[9px] uppercase tracking-[0.14em] text-[#777579]">{stat.label}</span>
                    <span className="text-[10px] text-[#B37CFF]">0{index + 1}</span>
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
              <p className="font-editorial-italic text-3xl text-[#B37CFF] sm:text-4xl">Design process</p>
              <h2 className="text-heading-1 max-w-[15ch] uppercase text-[#F7F4EE]">
                From ambiguity to buildable clarity
              </h2>
              <p className="max-w-sm text-sm leading-7 text-[#969397]">
                A clear working rhythm, adapted to the scope and the people already in the room.
              </p>
            </div>

            <div className="process-cards">
              {processSteps.map(([number, title, copy]) => (
                <article key={number} className="process-card">
                  <div className="process-card__topline">
                    <span className="process-card__number">{number}</span>
                    <span aria-hidden="true">↗</span>
                  </div>
                  <h3 className="process-card__title">{title}</h3>
                  <p className="process-card__copy">{copy}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="final-cta w-full bg-[#E5E5E5] px-6 py-32 text-[#111214] sm:px-12 sm:py-44">
        <div className="mx-auto flex max-w-6xl flex-col items-center text-center">
          <p className="text-[10px] font-semibold uppercase tracking-[0.22em]">( Contact me )</p>
          <div className="mt-14 flex w-full max-w-5xl flex-col items-center gap-3 sm:mt-20 sm:gap-5">
            <h2 className="text-[clamp(3.15rem,9vw,8.5rem)] font-bold uppercase leading-[0.78] tracking-[-0.065em]">Let&apos;s put</h2>
            <p className="font-editorial-italic text-[clamp(3.2rem,8vw,7.5rem)] leading-[0.72]">A bit of ourselves</p>
            <h2 className="mt-4 text-[clamp(3.15rem,9vw,8.5rem)] font-bold uppercase leading-[0.78] tracking-[-0.065em]">In every</h2>
            <p className="font-editorial-italic text-[clamp(3.6rem,9vw,8.5rem)] leading-[0.72]">Design</p>
          </div>
          <Link href="/contact" className="final-cta__button mt-20 sm:mt-28">
            Start a project <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
