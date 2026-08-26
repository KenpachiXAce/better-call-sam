import React from "react";
import Link from "next/link";
import { ArrowUpRight, ArrowLeft, TrendingUp, CheckCircle2 } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Prestige Travel Corporation Case Study — Sameer Chaudhary | Better Call Sam",
  description: "How Sameer contributed as part of the Arcodify agency team to streamline Prestige Travel's luxury reservation funnel from 11 steps down to 4, boosting booking completion by +156%."
};

export default function PrestigeTravelCaseStudyPage() {
  return (
    <article className="w-full max-w-5xl mx-auto px-6 sm:px-12 py-16 flex flex-col gap-16 select-text">
      {/* Navigation Breadcrumb */}
      <div className="flex items-center justify-between border-b border-[rgba(247,244,238,0.12)] pb-4 text-xs text-[#A5A2A0]">
        <Link
          href="/case-studies"
          className="flex items-center gap-1.5 text-[#A5A2A0] hover:text-[#B37CFF] transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Case Studies</span>
        </Link>
        <span className="text-[#B37CFF] uppercase font-semibold">FLAGSHIP ENGAGEMENT</span>
      </div>

      {/* Hero Header */}
      <header className="flex flex-col gap-6">
        <div className="flex flex-wrap items-center gap-3 text-xs text-[#A5A2A0]">
          <span className="text-[#B37CFF] font-semibold">01 //</span>
          <span className="uppercase tracking-wider">Luxury Travel &amp; Tourism</span>
          <span className="text-[rgba(247,244,238,0.25)]">·</span>
          <span>12 Weeks (2025)</span>
        </div>

        <h1 className="text-display-lg uppercase font-bold text-[#F7F4EE] tracking-tight leading-tight">
          Prestige Travel Corporation
        </h1>

        <p className="text-body-lg text-[#A5A2A0] leading-relaxed max-w-3xl">
          Streamlining a high-friction 11-step luxury reservation funnel into an intuitive 4-stage booking flow, resulting in a published +156% booking completion surge.
        </p>

        {/* Agency Attribution & Metadata Box */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 p-6 bg-[#111214] border border-[rgba(247,244,238,0.16)] text-xs text-[#A5A2A0]">
          <div>
            <span className="text-[10px] text-[#B37CFF] uppercase font-semibold block mb-1">Agency Attribution:</span>
            <div className="text-[#F7F4EE] font-medium">Arcodify Agency Pvt. Ltd.</div>
          </div>
          <div>
            <span className="text-[10px] text-[#B37CFF] uppercase font-semibold block mb-1">Sameer&apos;s Role &amp; Contribution:</span>
            <div className="text-[#F7F4EE] font-medium">UX Research, IA, Accessible UI, Figma Prototyping &amp; Handoff</div>
          </div>
          <div>
            <span className="text-[10px] text-[#B37CFF] uppercase font-semibold block mb-1">Accessibility Standard:</span>
            <div className="text-emerald-400 font-semibold">WCAG 2.1 AA Compliant</div>
          </div>
        </div>
      </header>

      {/* Published Outcomes Strip */}
      <section className="p-8 bg-[#090A0C] border border-[rgba(247,244,238,0.16)] flex flex-col gap-4">
        <div className="flex items-center gap-2 text-xs font-semibold text-[#B37CFF] uppercase tracking-wider">
          <TrendingUp className="w-4 h-4" />
          <span>Published Case Study Outcomes</span>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-2">
          <div>
            <span className="text-[10px] text-[#A5A2A0] uppercase">Booking Journey</span>
            <div className="text-2xl font-bold text-[#F7F4EE] mt-1">11 &rarr; 4 Steps</div>
            <span className="text-[10px] text-[#B37CFF]">-63% friction reduction</span>
          </div>
          <div>
            <span className="text-[10px] text-[#A5A2A0] uppercase">Booking Completion</span>
            <div className="text-2xl font-bold text-[#F7F4EE] mt-1">+156%</div>
            <span className="text-[10px] text-emerald-400">Published conversion surge</span>
          </div>
          <div>
            <span className="text-[10px] text-[#A5A2A0] uppercase">Bounce Rate</span>
            <div className="text-2xl font-bold text-[#F7F4EE] mt-1">68% &rarr; 22%</div>
            <span className="text-[10px] text-emerald-400">-46% bounce reduction</span>
          </div>
          <div>
            <span className="text-[10px] text-[#A5A2A0] uppercase">Average Task Time</span>
            <div className="text-2xl font-bold text-[#F7F4EE] mt-1">14m &rarr; 5m</div>
            <span className="text-[10px] text-[#B37CFF]">64% faster checkout</span>
          </div>
        </div>
      </section>

      {/* 1. Context & Business Challenge */}
      <section className="flex flex-col gap-4 pt-8 border-t border-[rgba(247,244,238,0.12)]">
        <span className="text-xs text-[#B37CFF] uppercase font-semibold">01 // Context &amp; Problem</span>
        <h2 className="text-heading-2 uppercase font-semibold text-[#F7F4EE]">
          The Problem: Complex Itineraries &amp; High Funnel Abandonment
        </h2>
        <div className="text-body text-[#A5A2A0] flex flex-col gap-4 leading-relaxed">
          <p>
            Prestige Travel Corporation caters to international travelers seeking bespoke luxury vacation packages across Asia and Europe. However, their legacy web platform struggled with severe booking drop-off: over 68% of users who initiated a travel booking abandoned the process prior to final confirmation.
          </p>
          <p>
            An internal evaluation conducted by the Arcodify agency team revealed that travelers were forced through 11 fragmented screens—asking for redundant personal details, unclear passport numbers, and confusing flight add-on selections before they were even shown transparent pricing.
          </p>
        </div>
      </section>

      {/* 2. Research & User Friction Analysis */}
      <section className="flex flex-col gap-4 pt-8 border-t border-[rgba(247,244,238,0.12)]">
        <span className="text-xs text-[#B37CFF] uppercase font-semibold">02 // Research &amp; User Journeys</span>
        <h2 className="text-heading-2 uppercase font-semibold text-[#F7F4EE]">
          Mapping the Drop-Off: Where Travelers Got Lost
        </h2>
        <div className="text-body text-[#A5A2A0] flex flex-col gap-4 leading-relaxed">
          <p>
            Sameer assisted in synthesizing traveler feedback and audit logs across mobile and desktop sessions. The team identified three critical friction bottlenecks:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-2">
            <div className="p-5 bg-[#111214] border border-[rgba(247,244,238,0.1)] flex flex-col gap-2">
              <span className="text-[#B37CFF] text-xs font-semibold">Bottleneck 01</span>
              <h3 className="font-semibold text-sm text-[#F7F4EE] uppercase">Hidden Total Pricing</h3>
              <p className="text-xs text-[#A5A2A0]">Taxes and mandatory resort fees only appeared on step 10, causing immediate buyer hesitation.</p>
            </div>

            <div className="p-5 bg-[#111214] border border-[rgba(247,244,238,0.1)] flex flex-col gap-2">
              <span className="text-[#B37CFF] text-xs font-semibold">Bottleneck 02</span>
              <h3 className="font-semibold text-sm text-[#F7F4EE] uppercase">Cluttered Guest Details</h3>
              <p className="text-xs text-[#A5A2A0]">Multi-traveler forms repeated full emergency contact inputs for every individual passenger.</p>
            </div>

            <div className="p-5 bg-[#111214] border border-[rgba(247,244,238,0.1)] flex flex-col gap-2">
              <span className="text-[#B37CFF] text-xs font-semibold">Bottleneck 03</span>
              <h3 className="font-semibold text-sm text-[#F7F4EE] uppercase">Mobile Form Breakage</h3>
              <p className="text-xs text-[#A5A2A0]">Date pickers and room tier tabs were unusable on touchscreen viewports under 400px.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. The 11 to 4 Step Redesign */}
      <section className="flex flex-col gap-4 pt-8 border-t border-[rgba(247,244,238,0.12)]">
        <span className="text-xs text-[#B37CFF] uppercase font-semibold">03 // Information Architecture</span>
        <h2 className="text-heading-2 uppercase font-semibold text-[#F7F4EE]">
          The Redesign: 11 Steps Condensed into 4 Clear Stages
        </h2>
        <div className="text-body text-[#A5A2A0] flex flex-col gap-4 leading-relaxed">
          <p>
            To restore momentum and transparency, the agency restructured the entire reservation architecture into a unified 4-stage progress wizard:
          </p>

          <div className="p-6 bg-[#111214] border border-[rgba(247,244,238,0.14)] flex flex-col gap-4 font-sans">
            <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 text-xs">
              <div className="p-4 bg-[#090A0C] border border-[#B37CFF]/40 flex flex-col gap-1">
                <span className="text-[#B37CFF] font-semibold">STAGE 01</span>
                <span className="font-semibold text-[#F7F4EE] uppercase">Package &amp; Dates</span>
                <span className="text-[10px] text-[#A5A2A0]">Live pricing calculator &amp; room tier select</span>
              </div>
              <div className="p-4 bg-[#090A0C] border border-[rgba(247,244,238,0.1)] flex flex-col gap-1">
                <span className="text-[#B37CFF] font-semibold">STAGE 02</span>
                <span className="font-semibold text-[#F7F4EE] uppercase">Traveler Details</span>
                <span className="text-[10px] text-[#A5A2A0]">Primary guest autofill &amp; dietary notes</span>
              </div>
              <div className="p-4 bg-[#090A0C] border border-[rgba(247,244,238,0.1)] flex flex-col gap-1">
                <span className="text-[#B37CFF] font-semibold">STAGE 03</span>
                <span className="font-semibold text-[#F7F4EE] uppercase">Curated Add-Ons</span>
                <span className="text-[10px] text-[#A5A2A0]">Transparent private tours &amp; airport transfers</span>
              </div>
              <div className="p-4 bg-[#090A0C] border border-[rgba(247,244,238,0.1)] flex flex-col gap-1">
                <span className="text-[#B37CFF] font-semibold">STAGE 04</span>
                <span className="font-semibold text-[#F7F4EE] uppercase">Instant Confirmation</span>
                <span className="text-[10px] text-[#A5A2A0]">Secure deposit &amp; downloadable itinerary</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Accessibility & Design System Implementation */}
      <section className="flex flex-col gap-4 pt-8 border-t border-[rgba(247,244,238,0.12)]">
        <span className="text-xs text-[#B37CFF] uppercase font-semibold">04 // Design System &amp; Accessibility</span>
        <h2 className="text-heading-2 uppercase font-semibold text-[#F7F4EE]">
          Accessibility (WCAG 2.1 AA) &amp; Design Tokens
        </h2>
        <div className="text-body text-[#A5A2A0] flex flex-col gap-4 leading-relaxed">
          <p>
            Sameer focused on establishing reliable component structures and ensuring that luxury visuals did not compromise legibility:
          </p>
          <ul className="flex flex-col gap-2.5 text-xs text-[#F7F4EE]/90">
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#B37CFF] shrink-0 mt-0.5" />
              <span><strong>Contrast Assurance:</strong> High-contrast scrims behind text overlays on full-bleed destination imagery to maintain a minimum 4.5:1 ratio.</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#B37CFF] shrink-0 mt-0.5" />
              <span><strong>Touch-Target Standards:</strong> All date pickers, quantity steppers, and room selector cards set to minimum 44&times;44px touch targets.</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#B37CFF] shrink-0 mt-0.5" />
              <span><strong>Figma Auto-Layout &amp; Token Architecture:</strong> Spacing scale (8/16/24/32/48) mapped to CSS variables for clean developer handoff.</span>
            </li>
          </ul>
        </div>
      </section>

      {/* 5. Sameer's Contribution & Retrospective */}
      <section className="flex flex-col gap-4 pt-8 border-t border-[rgba(247,244,238,0.12)]">
        <span className="text-xs text-[#B37CFF] uppercase font-semibold">05 // Collaboration &amp; Learnings</span>
        <h2 className="text-heading-2 uppercase font-semibold text-[#F7F4EE]">
          Team Collaboration &amp; Key Learnings
        </h2>
        <div className="text-body text-[#A5A2A0] flex flex-col gap-4 leading-relaxed">
          <p>
            Working on Prestige Travel Corporation inside Arcodify reinforced the importance of balancing aesthetic refinement with practical engineering constraints. Contributing across research, Figma design systems, and frontend handoff specs ensured that the final production build matched the design vision with zero layout drift.
          </p>
          <div className="p-4 bg-[#111214] border border-[rgba(247,244,238,0.1)] text-xs text-[#A5A2A0]">
            <span className="text-[#B37CFF] font-semibold block mb-1">What I Would Improve Next:</span>
            Further optimize mobile itinerary timeline visualizations with collapsible accordion stages to reduce vertical scroll length on compact screens.
          </div>
        </div>
      </section>

      {/* Next Case Study Navigation */}
      <div className="pt-12 border-t border-[rgba(247,244,238,0.16)] flex flex-wrap items-center justify-between gap-4">
        <Link
          href="/case-studies"
          className="text-xs text-[#A5A2A0] hover:text-[#B37CFF] transition-colors flex items-center gap-1.5"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>All Case Studies</span>
        </Link>
        <Link
          href="/contact"
          className="px-6 py-3 bg-[#5600A8] hover:bg-[#7A18D6] text-[#F7F4EE] text-xs uppercase tracking-wider font-semibold border border-[#B37CFF] flex items-center gap-2"
        >
          <span>Discuss a Project</span>
          <ArrowUpRight className="w-4 h-4" />
        </Link>
      </div>
    </article>
  );
}
