"use client";

import React from "react";
import Link from "next/link";
import { FEATURED_PROJECTS } from "@/data/projects";
import { ArrowUpRight, Check, Compass, Layers } from "lucide-react";

export default function UIUXPage() {
  const uiProjects = FEATURED_PROJECTS.filter((p) => p.category.includes("UI/UX") || p.category.includes("Platform") || p.category.includes("Hospitality"));

  return (
    <div className="w-full max-w-7xl mx-auto px-6 sm:px-12 py-16 flex flex-col gap-12 select-text">
      {/* Top Header */}
      <div className="flex flex-col gap-3 border-b border-[rgba(247,244,238,0.12)] pb-8">
        <div className="flex flex-wrap items-center justify-between gap-4 text-xs text-[#A5A2A0]">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#B37CFF]" />
            <span className="text-[#F7F4EE] uppercase tracking-wider font-semibold">
              DISCIPLINE 01 // PRODUCT &amp; UI/UX DESIGN
            </span>
          </div>
          <span className="text-[11px] text-[#B37CFF]">TRAVEL ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€š· EDUCATION ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€š· HOSPITALITY</span>
        </div>

        <h1 className="text-display-lg uppercase font-bold text-[#F7F4EE] tracking-tight mt-2">
          Product &amp; UI/UX
        </h1>

        <p className="text-body-lg text-[#A5A2A0] max-w-3xl leading-relaxed">
          Responsive web applications, complex multi-step booking flows, and institutional platforms designed for clarity, accessibility, and buildability.
        </p>
      </div>

      {/* Projects Grid */}
      <div className="flex flex-col gap-10">
        {uiProjects.map((project) => (
          <article
            key={project.id}
            className="p-8 sm:p-12 border border-[rgba(247,244,238,0.14)] bg-[#111214] flex flex-col gap-6"
          >
            <div className="flex flex-wrap items-center justify-between gap-4 text-xs text-[#A5A2A0]">
              <div className="flex items-center gap-3">
                <span className="font-bold text-[#B37CFF]">{project.number} //</span>
                <span className="uppercase tracking-wider font-medium text-[#F7F4EE]">{project.title}</span>
                <span className="text-[rgba(247,244,238,0.25)]">ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€š·</span>
                <span>{project.industry}</span>
              </div>
              <span>TIMELINE: {project.timeline}</span>
            </div>

            <div>
              <h2 className="text-heading-2 uppercase font-semibold text-[#F7F4EE] tracking-tight">
                {project.subtitle}
              </h2>
              <p className="text-body text-[#A5A2A0] mt-3 leading-relaxed">
                {project.overview}
              </p>
            </div>

            {/* Key Contributions */}
            <div className="p-5 bg-[#090A0C] border border-[rgba(247,244,238,0.1)] flex flex-col gap-2">
              <span className="text-[10px] uppercase text-[#B37CFF] font-semibold tracking-wider">
                Sameer&apos;s Key Contributions:
              </span>
              <ul className="flex flex-col gap-2 text-xs text-[#F7F4EE]/90">
                {project.keyContributions.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-[#B37CFF] font-bold">&gt;</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Bottom Actions */}
            <div className="pt-2 flex flex-wrap items-center justify-between gap-4 text-xs">
              <span className="text-[#A5A2A0]">
                {project.agencyAttribution ? `Agency: ${project.agencyAttribution}` : "Direct Collaboration"}
              </span>
              {project.isFlagship ? (
                <Link
                  href={project.href}
                  className="px-6 py-2.5 bg-[#5600A8] hover:bg-[#7A18D6] text-[#F7F4EE] uppercase tracking-wider font-semibold border border-[#B37CFF] flex items-center gap-2 transition-all"
                >
                  <span>Explore Case Study</span>
                  <ArrowUpRight className="w-4 h-4 text-[#F7F4EE]" />
                </Link>
              ) : (
                <Link
                  href="/contact"
                  className="text-[#B37CFF] hover:underline font-semibold flex items-center gap-1"
                >
                  <span>Inquire about similar work</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
              )}
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}