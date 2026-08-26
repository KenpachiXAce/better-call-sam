"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, ArrowDown, Coffee, Check, Compass, TrendingUp, CheckCircle2 } from "lucide-react";
import { OWNER_DATA } from "@/data/projects";
import { ProjectShowcase } from "@/components/home/ProjectShowcase";
import LiquidGlass from "liquid-glass-react";

export default function HomePage() {
  return (
    <div className="w-full flex flex-col items-center select-text">
      {/* =========================================================================
          1. HERO SECTION — Full-Height with Sameer's Portrait Backdrop
      ========================================================================= */}
      <section
        id="hero"
        className="hero-image-parent relative w-full min-h-[calc(100vh-130px)] flex flex-col justify-between max-w-7xl mx-auto px-6 sm:px-12 py-12 sm:py-16 overflow-hidden"
      >
        {/* Background Portrait with gradient blend + hover color reveal */}
        <div className="absolute right-0 top-0 bottom-0 w-full lg:w-[58%] pointer-events-none overflow-hidden z-0">
          <div className="hero-image-wrap absolute inset-0">
            <Image
              src="/images/sameer-hero-new.png"
              alt="Sameer Chaudhary standing outdoors"
              fill
              priority
              className="grayscale-base object-cover object-top lg:object-center grayscale filter contrast-125 brightness-90 mix-blend-luminosity"
              sizes="(max-width: 1024px) 100vw, 58vw"
            />
            {/* Color reveal purple glow on hover */}
            <div className="color-reveal-glow" />
            {/* Gradient scrim – lighter blend */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#090A0C]/50 via-[#090A0C]/30 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#090A0C]/50 via-transparent to-[#090A0C]/50" />
            <div className="absolute inset-0 bg-gradient-to-l from-[#090A0C]/50 via-transparent to-transparent" />
          </div>
        </div>

        {/* Top Identifier Bar */}
        <div className="relative z-10 flex flex-wrap items-center justify-between gap-4 text-xs text-[#A5A2A0] border-b border-[rgba(247,244,238,0.12)] pb-4">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#B37CFF]" />
            <span className="text-[#F7F4EE] uppercase tracking-wider font-medium">
              {OWNER_DATA.name} — {OWNER_DATA.role}
            </span>
          </div>
          <div className="text-[11px] text-[#A5A2A0]">
            <span>{OWNER_DATA.location}</span>
            <span className="mx-2 text-[rgba(247,244,238,0.25)]">·</span>
            <span className="text-[#B37CFF]">Available for Sprints &amp; Contracts</span>
          </div>
        </div>

        {/* Center Hero Thesis */}
        <div className="relative z-10 my-auto py-12 flex flex-col gap-6 max-w-2xl">
          {/* Script Accent in PP Editorial New / Cormorant Garamond */}
          <div className="font-editorial-italic text-3xl sm:text-5xl text-[#B37CFF] -mb-2 select-none">
            In case of creativity
          </div>

          {/* Primary Headline in Lexend Giga */}
          <h1 className="text-display-xl font-bold tracking-tight text-[#F7F4EE] uppercase leading-none">
            Better Call <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F7F4EE] via-[#B37CFF] to-[#D9D8D5]">Sam</span>
          </h1>

          {/* Supporting Copy */}
          <p className="text-body-lg text-[#A5A2A0] leading-relaxed mt-2">
            I design product experiences, websites and campaign systems that turn complex ideas into clear, buildable work.
          </p>

          {/* Primary & Secondary Action CTAs */}
          <div className="flex flex-wrap items-center gap-4 mt-6">
            <a
              href="#work"
              className="px-7 py-4 bg-[#5600A8] hover:bg-[#7A18D6] text-[#F7F4EE] text-xs uppercase tracking-wider font-semibold border border-[#B37CFF]/50 flex items-center gap-2.5 shadow-[0_0_20px_rgba(86,0,168,0.4)] transition-all rounded-[56px]"
            >
              <span>See selected work</span>
              <ArrowDown className="w-4 h-4 text-[#F7F4EE]" />
            </a>

            <Link
              href="/contact"
              className="px-7 py-4 bg-[#111214] hover:bg-[#1A1B1E] text-[#F7F4EE] text-xs uppercase tracking-wider border border-[rgba(247,244,238,0.2)] hover:border-[#B37CFF] flex items-center gap-2.5 transition-all rounded-[56px]"
            >
              <span>Start a project</span>
              <ArrowUpRight className="w-4 h-4 text-[#B37CFF]" />
            </Link>
          </div>
        </div>

        {/* Bottom Hero Anchor Bar */}
        <div className="relative z-10 pt-6 border-t border-[rgba(247,244,238,0.12)] flex flex-wrap items-center justify-between gap-4 text-xs text-[#A5A2A0]">
          <div className="flex items-center gap-2">
            <Compass className="w-3.5 h-3.5 text-[#B37CFF]" />
            <span>Kathmandu · Available for selected freelance and agency collaborations</span>
          </div>
          <div className="text-[11px] uppercase tracking-wider text-[rgba(247,244,238,0.5)]">
            Scroll to explore work (01 Ã¢â‚¬â€ 04) &darr;
          </div>
        </div>
      </section>

      {/* =========================================================================
          2. SELECTED WORK INDEX Ã¢â‚¬â€ PX Push-Inspired Project Sequence
      ========================================================================= */}
      <ProjectShowcase />

      {/* =========================================================================
          3. PRESTIGE TRAVEL CORPORATION METRIC STRIP (Verified Results)
      ========================================================================= */}
      <section className="w-full border-t border-[rgba(247,244,238,0.12)] bg-[#111214] py-16 px-6 sm:px-12">
        <div className="max-w-7xl mx-auto flex flex-col gap-6">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-[#B37CFF]" />
              <span className="text-xs uppercase tracking-wider text-[#F7F4EE] font-semibold">
                Published Results // Prestige Travel Corporation Case Study
              </span>
            </div>
            <Link
              href="/case-studies/prestige-travel-corporation"
              className="text-xs text-[#B37CFF] hover:underline font-medium flex items-center gap-1"
            >
              <span>Read Full Case Study</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* 4-Metric Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="p-6 bg-[#090A0C] border border-[rgba(247,244,238,0.14)] flex flex-col justify-between rounded-[18px]">
              <span className="text-xs text-[#A5A2A0] uppercase">Booking Flow</span>
              <div className="text-2xl sm:text-3xl font-bold text-[#F7F4EE] my-2">11 &rarr; 4 Steps</div>
              <span className="text-[10px] text-[#B37CFF]">Simplified checkout journey</span>
            </div>

            <div className="p-6 bg-[#090A0C] border border-[rgba(247,244,238,0.14)] flex flex-col justify-between rounded-[18px]">
              <span className="text-xs text-[#A5A2A0] uppercase">Booking Completion</span>
              <div className="text-2xl sm:text-3xl font-bold text-[#F7F4EE] my-2">+156%</div>
              <span className="text-[10px] text-emerald-400">Published conversion surge</span>
            </div>

            <div className="p-6 bg-[#090A0C] border border-[rgba(247,244,238,0.14)] flex flex-col justify-between rounded-[18px]">
              <span className="text-xs text-[#A5A2A0] uppercase">Bounce Rate</span>
              <div className="text-2xl sm:text-3xl font-bold text-[#F7F4EE] my-2">68% &rarr; 22%</div>
              <span className="text-[10px] text-emerald-400">-46% bounce reduction</span>
            </div>

            <div className="p-6 bg-[#090A0C] border border-[rgba(247,244,238,0.14)] flex flex-col justify-between rounded-[18px]">
              <span className="text-xs text-[#A5A2A0] uppercase">Avg Booking Time</span>
              <div className="text-2xl sm:text-3xl font-bold text-[#F7F4EE] my-2">14m &rarr; 5m</div>
              <span className="text-[10px] text-[#B37CFF]">Substantial task efficiency</span>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          4. SERVICES (4 Business-Oriented Capabilities for Clients & Agencies)
      ========================================================================= */}
      <section id="services" className="w-full border-t border-[rgba(247,244,238,0.12)] bg-[#090A0C] py-24 px-6 sm:px-12">
        <div className="max-w-7xl mx-auto flex flex-col gap-12">
          <div>
            <div className="font-editorial-italic text-2xl text-[#B37CFF] mb-1">Capabilities</div>
            <h2 className="text-heading-2 uppercase font-semibold text-[#F7F4EE] tracking-tight">
              Services &amp; Engagement
            </h2>
            <p className="text-body text-[#A5A2A0] max-w-2xl mt-2 leading-relaxed">
              Available for direct founder collaborations and integrated agency sprint teams.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {OWNER_DATA.services.map((svc) => (
              <div
                key={svc.id}
                className="p-8 bg-[#111214] border border-[rgba(247,244,238,0.14)] hover:border-[#B37CFF]/50 transition-all flex flex-col justify-between gap-6 rounded-[18px]"
              >
                <div>
                  <h3 className="text-heading-3 uppercase font-semibold text-[#F7F4EE]">
                    {svc.title}
                  </h3>
                  <p className="text-body text-[#A5A2A0] mt-2 leading-relaxed">
                    {svc.summary}
                  </p>

                  {/* When to Hire Callout */}
                  <div className="mt-4 p-3 bg-[#090A0C] border border-[rgba(247,244,238,0.1)] rounded-[10px] text-xs text-[#F7F4EE]/90">
                    <span className="text-[#B37CFF] uppercase font-semibold text-[10px] block mb-1">
                      When to hire:
                    </span>
                    {svc.whenToHire}
                  </div>
                </div>

                {/* Deliverables List */}
                <div className="pt-4 border-t border-[rgba(247,244,238,0.1)] flex flex-col gap-2">
                  <span className="text-[10px] uppercase text-[#A5A2A0]">Handoff Includes:</span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-[#A5A2A0]">
                    {svc.deliverables.map((del, dIdx) => (
                      <div key={dIdx} className="flex items-center gap-1.5">
                        <Check className="w-3.5 h-3.5 text-[#B37CFF] shrink-0" />
                        <span className="truncate">{del}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          5. ABOUT SAMEER — Bento Grid with Liquid Glass
      ========================================================================= */}
      <section id="about" className="w-full border-t border-[rgba(247,244,238,0.12)] bg-[#111214] py-24 px-6 sm:px-12">
        <div className="max-w-7xl mx-auto flex flex-col gap-10">
          <div>
            <div className="font-editorial-italic text-2xl text-[#B37CFF] mb-1">About Sameer</div>
            <h2 className="text-heading-2 uppercase font-semibold text-[#F7F4EE] tracking-tight">
              Design &amp; Implementation Awareness
            </h2>
          </div>

          {/* Bento Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 auto-rows-[minmax(130px,auto)]">

            {/* Large bio card — spans 4 cols, 2 rows */}
            <div className="col-span-2 md:col-span-4 lg:col-span-4 row-span-2">
              <LiquidGlass mode="prominent" cornerRadius={18} blurAmount={10} saturation={1.5} displacementScale={50} style={{ width: "100%", height: "100%" }}>
                <div className="p-8 h-full flex flex-col justify-between gap-6 min-h-[260px]">
                  <div>
                    {/* Illustration: Panther silhouette */}
                    <div className="w-14 h-14 mb-4">
                      <img src="/images/panther-index.png" alt="" className="w-full h-full object-contain filter invert opacity-60" />
                    </div>
                    <p className="text-[#F7F4EE]/90 text-sm leading-relaxed">
                      I&apos;m Sameer — a Product and UI/UX Designer based in Kathmandu. Across 10 months of agency work and more than ten web projects, I&apos;ve designed travel, education, hospitality, service and commerce experiences from early flows to developer handoff. My frontend background helps me make decisions that are both visually considered and realistic to build.
                    </p>
                  </div>
                  <div className="flex items-center gap-2 text-[10px] uppercase tracking-widest text-[#B37CFF]">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#B37CFF]" />
                    Kathmandu, Nepal · Available for selected projects
                  </div>
                </div>
              </LiquidGlass>
            </div>

            {/* Experience */}
            <div className="col-span-1 md:col-span-2 lg:col-span-2">
              <LiquidGlass mode="prominent" cornerRadius={18} blurAmount={8} saturation={1.4} displacementScale={35} style={{ width: "100%", height: "100%" }}>
                <div className="p-5 h-full flex flex-col justify-between min-h-[130px]">
                  <div className="flex justify-between items-start">
                    <span className="text-[10px] text-[#A5A2A0] uppercase tracking-wider">Experience</span>
                    {/* Icon: calendar */}
                    <svg className="w-5 h-5 text-[#B37CFF] opacity-60" fill="none" viewBox="0 0 24 24" stroke="currentColor"><rect x="3" y="4" width="18" height="18" rx="2" strokeWidth="1.5"/><path d="M16 2v4M8 2v4M3 10h18" strokeWidth="1.5"/></svg>
                  </div>
                  <div className="text-2xl font-bold text-[#F7F4EE]">10 Months</div>
                  <span className="text-[10px] text-[#B37CFF]">Agency team workflow</span>
                </div>
              </LiquidGlass>
            </div>

            {/* Web Projects */}
            <div className="col-span-1 md:col-span-2 lg:col-span-2">
              <LiquidGlass mode="prominent" cornerRadius={18} blurAmount={8} saturation={1.4} displacementScale={35} style={{ width: "100%", height: "100%" }}>
                <div className="p-5 h-full flex flex-col justify-between min-h-[130px]">
                  <div className="flex justify-between items-start">
                    <span className="text-[10px] text-[#A5A2A0] uppercase tracking-wider">Web Projects</span>
                    <svg className="w-5 h-5 text-[#B37CFF] opacity-60" fill="none" viewBox="0 0 24 24" stroke="currentColor"><circle cx="12" cy="12" r="9" strokeWidth="1.5"/><path d="M12 3a9 9 0 010 18M3 12h18" strokeWidth="1.5"/><path d="M12 3c-2.5 3-4 5.7-4 9s1.5 6 4 9" strokeWidth="1.5"/></svg>
                  </div>
                  <div className="text-2xl font-bold text-[#F7F4EE]">10+ Shipped</div>
                  <span className="text-[10px] text-[#B37CFF]">Multi-industry scope</span>
                </div>
              </LiquidGlass>
            </div>

            {/* Travel Apps */}
            <div className="col-span-1 md:col-span-2 lg:col-span-2">
              <LiquidGlass mode="prominent" cornerRadius={18} blurAmount={8} saturation={1.4} displacementScale={35} style={{ width: "100%", height: "100%" }}>
                <div className="p-5 h-full flex flex-col justify-between min-h-[130px]">
                  <div className="flex justify-between items-start">
                    <span className="text-[10px] text-[#A5A2A0] uppercase tracking-wider">Travel Apps</span>
                    <svg className="w-5 h-5 text-[#B37CFF] opacity-60" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path d="M17 8C8 10 5.9 16.17 3.82 21" strokeWidth="1.5" strokeLinecap="round"/><path d="M10 9.5C5.5 12 3.9 17.2 3.82 21" strokeWidth="1.5" strokeLinecap="round"/><path d="M21 3L3 21" strokeWidth="1.5" strokeLinecap="round"/><circle cx="21" cy="3" r="2" strokeWidth="1.5"/></svg>
                  </div>
                  <div className="text-2xl font-bold text-[#F7F4EE]">3 Platforms</div>
                  <span className="text-[10px] text-[#B37CFF]">Complex booking funnels</span>
                </div>
              </LiquidGlass>
            </div>

            {/* University Portal */}
            <div className="col-span-1 md:col-span-2 lg:col-span-2">
              <LiquidGlass mode="prominent" cornerRadius={18} blurAmount={8} saturation={1.4} displacementScale={35} style={{ width: "100%", height: "100%" }}>
                <div className="p-5 h-full flex flex-col justify-between min-h-[130px]">
                  <div className="flex justify-between items-start">
                    <span className="text-[10px] text-[#A5A2A0] uppercase tracking-wider">University Portal</span>
                    <svg className="w-5 h-5 text-[#B37CFF] opacity-60" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path d="M12 3L2 8l10 5 10-5-10-5z" strokeWidth="1.5" strokeLinejoin="round"/><path d="M2 17l10 5 10-5" strokeWidth="1.5" strokeLinejoin="round"/><path d="M2 12l10 5 10-5" strokeWidth="1.5" strokeLinejoin="round"/></svg>
                  </div>
                  <div className="text-2xl font-bold text-[#F7F4EE]">95 Pages</div>
                  <span className="text-[10px] text-[#B37CFF]">IIE academic platform</span>
                </div>
              </LiquidGlass>
            </div>

            {/* Education + Perspective — spans 2 cols */}
            <div className="col-span-2 md:col-span-2 lg:col-span-2">
              <LiquidGlass mode="prominent" cornerRadius={18} blurAmount={8} saturation={1.4} displacementScale={35} style={{ width: "100%", height: "100%" }}>
                <div className="p-5 h-full flex flex-col justify-between min-h-[130px]">
                  <div className="flex justify-between items-start">
                    <span className="text-[10px] text-[#A5A2A0] uppercase tracking-wider">Education</span>
                    <svg className="w-5 h-5 text-[#B37CFF] opacity-60" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path d="M22 10v6M2 10l10-5 10 5-10 5-10-5z" strokeWidth="1.5" strokeLinejoin="round"/><path d="M6 12v5c0 1.657 2.686 3 6 3s6-1.343 6-3v-5" strokeWidth="1.5"/></svg>
                  </div>
                  <div className="text-xl font-bold text-[#F7F4EE]">BSc IT</div>
                  <span className="text-[10px] text-[#A5A2A0]">Techspire College (2024–27)</span>
                  <div className="mt-2 text-sm font-bold text-[#B37CFF]">Design + Code</div>
                  <span className="text-[10px] text-[#A5A2A0]">React &amp; Tailwind aware</span>
                </div>
              </LiquidGlass>
            </div>

          </div>
        </div>
      </section>

      {/* =========================================================================
          6. PROCESS (4 Practical Steps)
      ========================================================================= */}
      <section id="process" className="w-full border-t border-[rgba(247,244,238,0.12)] bg-[#090A0C] py-24 px-6 sm:px-12">
        <div className="max-w-7xl mx-auto flex flex-col gap-12">
          <div>
            <div className="font-editorial-italic text-2xl text-[#B37CFF] mb-1">Collaboration</div>
            <h2 className="text-heading-2 uppercase font-semibold text-[#F7F4EE] tracking-tight">
              Design Process
            </h2>
            <p className="text-body text-[#A5A2A0] max-w-2xl mt-2 leading-relaxed">
              Flexible and transparent workflows adapted to project scope and team cadence.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 bg-[#111214] border border-[rgba(247,244,238,0.14)] flex flex-col gap-3 rounded-[18px]">
              <span className="text-[#B37CFF] font-semibold text-xs">01 //</span>
              <h3 className="text-heading-3 uppercase font-semibold text-[#F7F4EE]">Understand</h3>
              <p className="text-xs text-[#A5A2A0] leading-relaxed">
                Clarify users, business goals, and technical constraints before touching wireframes.
              </p>
            </div>

            <div className="p-6 bg-[#111214] border border-[rgba(247,244,238,0.14)] flex flex-col gap-3 rounded-[18px]">
              <span className="text-[#B37CFF] font-semibold text-xs">02 //</span>
              <h3 className="text-heading-3 uppercase font-semibold text-[#F7F4EE]">Structure</h3>
              <p className="text-xs text-[#A5A2A0] leading-relaxed">
                Shape information architecture, intuitive journeys, and rapid low-fidelity prototypes.
              </p>
            </div>

            <div className="p-6 bg-[#111214] border border-[rgba(247,244,238,0.14)] flex flex-col gap-3 rounded-[18px]">
              <span className="text-[#B37CFF] font-semibold text-xs">03 //</span>
              <h3 className="text-heading-3 uppercase font-semibold text-[#F7F4EE]">Design</h3>
              <p className="text-xs text-[#A5A2A0] leading-relaxed">
                Refine typography, responsive components, accessibility contrast, and micro-interactions.
              </p>
            </div>

            <div className="p-6 bg-[#111214] border border-[rgba(247,244,238,0.14)] flex flex-col gap-3 rounded-[18px]">
              <span className="text-[#B37CFF] font-semibold text-xs">04 //</span>
              <h3 className="text-heading-3 uppercase font-semibold text-[#F7F4EE]">Deliver</h3>
              <p className="text-xs text-[#A5A2A0] leading-relaxed">
                Document tokens, build interactive Figma prototypes, and partner through engineering QA.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          7. CONVERSION TRANSITION BLOCK (Redesigned)
      ========================================================================= */}
      <section id="contact" className="w-full bg-[#E5E5E5] py-24 px-6 sm:px-12 flex flex-col items-center">
        <div className="max-w-4xl mx-auto flex flex-col items-center relative w-full text-center">
          <div className="text-[10px] font-bold uppercase tracking-widest text-[#111214] mb-12">
            ( CONTACT ME )
          </div>

          <div className="relative flex flex-col items-center w-full max-w-2xl">
            <h2 className="text-[3rem] sm:text-[5rem] md:text-[6rem] font-bold text-[#111214] uppercase leading-[0.9] tracking-tighter self-start ml-0 md:-ml-8">
              LET&apos;S PUT
            </h2>
            <div className="font-editorial-italic text-[3rem] sm:text-[4rem] md:text-[5.5rem] text-[#111214] leading-[0.7] z-10 -mt-2 self-center">
              A bit of ourselves
            </div>
            <h2 className="text-[3rem] sm:text-[5rem] md:text-[6rem] font-bold text-[#111214] uppercase leading-[0.9] tracking-tighter self-end mr-0 md:-mr-8 mt-4">
              IN EVERY
            </h2>
            <div className="font-editorial-italic text-[3.5rem] sm:text-[5rem] md:text-[6.5rem] text-[#111214] leading-[0.7] self-end mr-4 md:mr-12 mt-2">
              Design
            </div>

            {/* Circular CTA Button */}
            <Link
              href="/contact"
              className="absolute left-0 top-1/2 -translate-y-1/2 w-[120px] h-[120px] sm:w-[160px] sm:h-[160px] rounded-full border border-[#5600A8] flex items-center justify-center text-[9px] sm:text-[10px] font-bold text-[#5600A8] uppercase tracking-wider hover:bg-[#5600A8] hover:text-[#F7F4EE] transition-all hover:scale-105 -ml-4 md:-ml-16 mt-8"
            >
              SIGN UP NOW!
            </Link>
          </div>
        </div>
      </section>

      {/* =========================================================================
          8. FOOTER
      ========================================================================= */}
      <footer className="w-full bg-[#1A1A1A] py-16 px-6 sm:px-12 flex flex-col items-center">
        <div className="max-w-4xl mx-auto flex flex-col items-center w-full gap-16">
          <div className="text-[10px] font-bold uppercase tracking-widest text-[#F7F4EE]">
            ( FIND ME ONLINE )
          </div>
          
          <a href="https://twitter.com/__sc7" target="_blank" rel="noreferrer" className="text-[4rem] sm:text-[6rem] md:text-[8rem] font-bold leading-none flex items-center tracking-tighter hover:opacity-80 transition-opacity">
            <span className="text-[#F7F4EE]">@__</span>
            <span className="text-[#5600A8]">sc7</span>
          </a>

          <div className="w-full flex flex-col sm:flex-row items-center justify-between gap-6 text-[10px] font-bold uppercase tracking-widest text-[#A5A2A0]">
            <div className="flex items-center gap-4">
              <a href="mailto:sameer974939@gmail.com" className="hover:text-[#F7F4EE] transition-colors">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
              </a>
              <span>|</span>
              <a href="#" className="hover:text-[#F7F4EE] transition-colors">
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path></svg>
              </a>
              <span>|</span>
              <a href="#" className="hover:text-[#F7F4EE] transition-colors">
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4"><path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path></svg>
              </a>
            </div>
            
            <div className="flex items-center gap-4">
              <a href="#" className="hover:text-[#F7F4EE] transition-colors">Terms</a>
              <span>|</span>
              <a href="#" className="hover:text-[#F7F4EE] transition-colors">Policy</a>
              <span>|</span>
              <span>2025</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}