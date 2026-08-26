"use client";

import React from "react";
import Link from "next/link";
import { FEATURED_PROJECTS } from "@/data/projects";
import { ArrowUpRight, TrendingUp } from "lucide-react";

export default function CaseStudiesPage() {
  return (
    <div className="w-full max-w-7xl mx-auto px-6 sm:px-12 py-16 flex flex-col gap-12 select-text">
      {/* Top Header */}
      <div className="flex flex-col gap-3 border-b border-[rgba(247,244,238,0.12)] pb-8">
        <div className="flex flex-wrap items-center justify-between gap-4 text-xs text-[#A5A2A0]">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#B37CFF]" />
            <span className="text-[#F7F4EE] uppercase tracking-wider font-semibold">
              CASE STUDIES &amp; DETAILED BREAKDOWNS
            </span>
          </div>
          <span className="text-[11px] text-[#B37CFF]">VERIFIED AGENCY WORK</span>
        </div>

        <h1 className="text-display-lg uppercase font-bold text-[#F7F4EE] tracking-tight mt-2">
          Case Studies
        </h1>

        <p className="text-body-lg text-[#A5A2A0] max-w-3xl leading-relaxed">
          Deep dives into user research, information architecture, design systems, and measurable outcomes.
        </p>
      </div>

      {/* Case Studies List */}
      <div className="flex flex-col gap-8">
        {FEATURED_PROJECTS.map((project) => (
          <article
            key={project.id}
            className="p-8 sm:p-12 border border-[rgba(247,244,238,0.14)] bg-[#111214] hover:border-[#B37CFF]/50 transition-all flex flex-col gap-6"
          >
            <div className="flex flex-wrap items-center justify-between gap-4 text-xs text-[#A5A2A0]">
              <div className="flex items-center gap-3">
                <span className="text-lg font-bold text-[#B37CFF]">{project.number} //</span>
                <span className="uppercase tracking-wider">{project.category}</span>
                <span className="text-[rgba(247,244,238,0.25)]">ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€š·</span>
                <span>{project.year}</span>
              </div>
              {project.agencyAttribution && (
                <span className="text-[11px] text-[#A5A2A0]">Agency: {project.agencyAttribution}</span>
              )}
            </div>

            <div>
              <h2 className="text-heading-2 uppercase font-semibold text-[#F7F4EE] tracking-tight">
                {project.title}
              </h2>
              <p className="text-body text-[#A5A2A0] mt-2 max-w-3xl leading-relaxed">
                {project.subtitle}
              </p>
            </div>

            {/* Verified Metrics Strip if Flagship */}
            {project.verifiedResults && (
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 p-4 bg-[#090A0C] border border-[rgba(247,244,238,0.1)] text-xs">
                {project.verifiedResults.map((res, rIdx) => (
                  <div key={rIdx} className="flex flex-col">
                    <span className="text-[10px] text-[#A5A2A0] uppercase">{res.label}</span>
                    <span className="text-base font-bold text-[#F7F4EE] mt-0.5">{res.value}</span>
                    <span className="text-[9px] text-[#B37CFF]">{res.detail}</span>
                  </div>
                ))}
              </div>
            )}

            {/* Sameer's Contribution */}
            <div className="p-4 bg-[#090A0C] border border-[rgba(247,244,238,0.1)] text-xs text-[#A5A2A0]">
              <span className="text-[10px] text-[#B37CFF] uppercase font-semibold block mb-1">
                Sameer&apos;s Contribution:
              </span>
              <p className="text-[#F7F4EE]/90 leading-relaxed">{project.sameerRole}</p>
            </div>

            {/* Navigation Button */}
            <div className="pt-2 flex items-center justify-between">
              <span className="text-xs text-[#A5A2A0]">TIMELINE: {project.timeline}</span>
              <Link
                href={project.href}
                className="px-5 py-2.5 bg-[#5600A8] hover:bg-[#7A18D6] text-[#F7F4EE] text-xs uppercase tracking-wider font-semibold border border-[#B37CFF]/50 flex items-center gap-1.5 transition-all"
              >
                <span>Read Full Case Study</span>
                <ArrowUpRight className="w-4 h-4 text-[#F7F4EE]" />
              </Link>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}