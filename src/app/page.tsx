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
      <section
        id="hero"
        className="hero-image-parent relative min-h-[calc(100svh-104px)] w-full overflow-hidden border-b border-white/10 bg-[#090A0C]"
      >
        <div className="hero-image-wrap absolute inset-y-0 right-0 z-0 w-full lg:w-[64%]">
          <Image
            src="/images/sameer-hero-new.png"
            alt="Sameer Chaudhary standing outdoors in the mountains"
            fill
            priority
            className="grayscale-base object-cover object-[58%_18%] lg:object-[52%_28%]"
            sizes="(max-width: 1024px) 100vw, 64vw"
          />
          <div className="color-reveal-glow" />
          <div className="hero-image-scrim" />
        </div>

        <div className="relative z-10 mx-auto flex min-h-[calc(100svh-104px)] w-full max-w-7xl flex-col justify-end px-6 pb-10 pt-28 sm:px-12 sm:pb-12 lg:justify-between lg:pt-24">
          <div className="my-auto flex max-w-3xl flex-col gap-6 py-14">
            <p className="font-editorial-italic text-4xl text-[#B37CFF] sm:text-6xl">
              In case of creativity
            </p>
            <h1 className="text-display-xl max-w-[11ch] uppercase text-[#F7F4EE]">
              Better Call <span className="hero-name-accent">Sam</span>
            </h1>
            <p className="max-w-xl text-base leading-7 text-[#C3C0BD] sm:text-lg sm:leading-8">
              I design product experiences, websites and campaign systems that turn complex ideas into clear, buildable work.
            </p>
            <div className="mt-3 flex flex-wrap items-center gap-3">
              <a href="#work" className="hero-button hero-button--primary">
                See selected work <ArrowDown className="h-4 w-4" />
              </a>
              <Link href="/contact" className="hero-button hero-button--secondary">
                Start a project <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>
          </div>

          <div className="flex flex-col gap-3 border-t border-white/15 pt-5 text-[10px] uppercase tracking-[0.12em] text-[#A5A2A0] sm:flex-row sm:items-center sm:justify-between">
            <span className="flex items-center gap-2">
              <Compass className="h-3.5 w-3.5 text-[#B37CFF]" />
              Kathmandu · Freelance and agency collaborations
            </span>
            <span>Scroll to explore · 01—06</span>
          </div>
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
          <div className="grid gap-6 border-b border-white/10 pb-12 lg:grid-cols-[0.72fr_1.28fr] lg:items-end">
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

      <section id="process" className="w-full border-t border-white/10 bg-[#090A0C] px-6 py-24 sm:px-12 sm:py-32">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 grid gap-4 sm:grid-cols-2 sm:items-end">
            <div>
              <p className="font-editorial-italic text-3xl text-[#B37CFF]">Collaboration</p>
              <h2 className="mt-1 text-heading-1 uppercase text-[#F7F4EE]">Process</h2>
            </div>
            <p className="max-w-md text-sm leading-7 text-[#969397] sm:justify-self-end">
              A clear working rhythm, adapted to the scope and the people already in the room.
            </p>
          </div>
          <div className="process-index">
            {processSteps.map(([number, title, copy]) => (
              <article key={number} className="process-index__row">
                <span className="process-index__number">{number}</span>
                <h3 className="process-index__title">{title}</h3>
                <p className="process-index__copy">{copy}</p>
              </article>
            ))}
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
