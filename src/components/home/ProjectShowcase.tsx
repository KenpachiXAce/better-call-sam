"use client";

import React, { useRef, useState, useEffect } from "react";
import Link from "next/link";
import { ArrowUpRight, ChevronLeft, ChevronRight, Mail, PanelsTopLeft, Route, Utensils } from "lucide-react";
import { FEATURED_PROJECTS } from "@/data/projects";
import { useReducedMotion } from "framer-motion";
import { SketchIcon } from "@/components/ui/SketchIcon";
import { SpiderMark } from "@/components/ui/SpiderMark";

const projectSurfaces = ["#111214", "#0D0E10", "#151518", "#0A0B0D"];
const projectIcons = [Route, PanelsTopLeft, Utensils, Mail];

export function ProjectShowcase() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeIdx, setActiveIdx] = useState(0);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    let rafId: number;

    const handleScroll = () => {
      if (!containerRef.current || window.innerWidth < 1024) return;

      const rect = containerRef.current.getBoundingClientRect();
      const totalScrollable = rect.height - window.innerHeight;

      if (totalScrollable <= 0) return;

      const currentScroll = -rect.top;
      const rawProgress = currentScroll / totalScrollable;
      const clamped = Math.min(1, Math.max(0, rawProgress));

      setScrollProgress(clamped);

      const computedIdx = Math.min(
        FEATURED_PROJECTS.length - 1,
        Math.floor(clamped * FEATURED_PROJECTS.length)
      );
      setActiveIdx(computedIdx);
    };

    const onScroll = () => {
      rafId = requestAnimationFrame(handleScroll);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(rafId);
    };
  }, []);

  const handleNext = () => {
    if (activeIdx < FEATURED_PROJECTS.length - 1 && containerRef.current) {
      const targetProgress = (activeIdx + 1) / (FEATURED_PROJECTS.length - 1);
      const rect = containerRef.current.getBoundingClientRect();
      const topOffset = window.scrollY + rect.top;
      const totalScrollable = rect.height - window.innerHeight;
      window.scrollTo({
        top: topOffset + targetProgress * totalScrollable,
        behavior: "smooth"
      });
    }
  };

  const handlePrev = () => {
    if (activeIdx > 0 && containerRef.current) {
      const targetProgress = (activeIdx - 1) / (FEATURED_PROJECTS.length - 1);
      const rect = containerRef.current.getBoundingClientRect();
      const topOffset = window.scrollY + rect.top;
      const totalScrollable = rect.height - window.innerHeight;
      window.scrollTo({
        top: topOffset + targetProgress * totalScrollable,
        behavior: "smooth"
      });
    }
  };

  const totalSlides = FEATURED_PROJECTS.length;
  const translateX = scrollProgress * (totalSlides - 1) * 78;

  return (
    <section id="work" ref={containerRef} className="relative w-full border-t border-[rgba(247,244,238,0.12)] bg-[#090A0C]">
      {/* DESKTOP PINNED HORIZONTAL TRACK (>= 1024px) */}
      <div className="hidden lg:block relative h-[320vh]">
        <div className="project-sticky-frame sticky top-0 h-screen w-full flex flex-col justify-between overflow-hidden">
          {/* Top Bar with Section Title & Controls */}
          <div className="w-full flex items-center justify-between border-b border-[rgba(247,244,238,0.12)] pb-4 text-xs text-[#A5A2A0]">
            <div className="flex items-center gap-3">
              <SketchIcon icon={PanelsTopLeft} size="sm" label="Selected work" />
              <span className="text-[#EA2B1F] font-semibold">02 //</span>
              <h2 className="text-sm font-semibold uppercase text-[#F7F4EE] tracking-wider">
                Selected Work
              </h2>
            </div>

            {/* Previous / Next Controls & Progress Counter */}
            <div className="flex items-center gap-6">
              <div className="text-xs font-mono text-[#F7F4EE]">
                <span className="text-[#EA2B1F] font-bold">0{activeIdx + 1}</span>
                <span className="text-[rgba(247,244,238,0.3)] mx-1">/</span>
                <span>0{totalSlides}</span>
              </div>

              <div className="flex items-center border border-[rgba(247,244,238,0.16)] bg-[#111214]">
                <button
                  onClick={handlePrev}
                  disabled={activeIdx === 0}
                  className="p-2 hover:bg-[#1A1B1E] disabled:opacity-30 disabled:pointer-events-none text-[#F7F4EE] transition-colors"
                  aria-label="Previous project"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  onClick={handleNext}
                  disabled={activeIdx === totalSlides - 1}
                  className="p-2 hover:bg-[#1A1B1E] disabled:opacity-30 disabled:pointer-events-none text-[#F7F4EE] transition-colors border-l border-[rgba(247,244,238,0.1)]"
                  aria-label="Next project"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          {/* Horizontally Translating Projects Track */}
          <div className="my-auto w-full overflow-visible py-4">
            <div
              className="flex items-stretch gap-10 transition-transform ease-out"
              style={{
                transform: shouldReduceMotion ? "none" : `translateX(-${translateX}vw)`,
                transitionDuration: "0.15s"
              }}
            >
              {FEATURED_PROJECTS.map((project, idx) => {
                const isActive = activeIdx === idx;
                const ProjectIcon = projectIcons[idx] ?? PanelsTopLeft;
                return (
                  <article
                    key={project.id}
                    className={`project-glass-card w-[78vw] max-w-5xl shrink-0 p-8 sm:p-12 border transition-all duration-300 flex flex-col justify-between gap-8 glass-card rounded-[32px] ${
                      isActive
                        ? "border-[#EA2B1F]/55 shadow-[0_28px_90px_rgba(0,0,0,0.48)]"
                        : "border-[rgba(247,244,238,0.1)] opacity-55"
                    }`}
                    style={{ backgroundColor: projectSurfaces[idx % projectSurfaces.length] }}
                  >
                    <SpiderMark size="md" className="project-spider-mark" />
                    {/* Slide Top Metadata */}
                    <div className="flex items-center justify-between text-xs text-[#A5A2A0]">
                      <div className="flex items-center gap-3">
                        <SketchIcon icon={ProjectIcon} size="sm" label={`${project.category} project`} />
                        <span className="font-bold text-[#EA2B1F]">{project.number} {"//"}</span>
                        <span className="uppercase tracking-wider">{project.category}</span>
                        <span className="text-[rgba(247,244,238,0.25)]">·</span>
                        <span>{project.year}</span>
                      </div>
                      {project.agencyAttribution && (
                        <span className="text-[11px]">Agency: {project.agencyAttribution}</span>
                      )}
                    </div>

                    {/* Headline & Overview */}
                    <div className="flex flex-col gap-3">
                      <h3
                        className={`text-heading-2 uppercase font-bold tracking-tight transition-colors ${
                          isActive ? "text-[#F7F4EE]" : "text-[#A5A2A0]"
                        }`}
                      >
                        {project.title}
                      </h3>
                      <p className="text-body-lg text-[#A5A2A0] max-w-3xl leading-relaxed">
                        {project.subtitle}
                      </p>
                    </div>

                    {/* Published Metric Strip */}
                    {project.verifiedResults && (
                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 p-4 bg-[#090A0C] border border-[rgba(247,244,238,0.1)] text-xs">
                        {project.verifiedResults.map((res, rIdx) => (
                          <div key={rIdx} className="flex flex-col">
                            <span className="text-[10px] text-[#A5A2A0] uppercase">{res.label}</span>
                            <span className="text-lg font-bold text-[#F7F4EE] mt-0.5">{res.value}</span>
                            <span className="text-[9px] text-[#EA2B1F]">{res.detail}</span>
                          </div>
                        ))}
                      </div>
                    )}

                    {/* Contribution Summary & Action Link */}
                    <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-[rgba(247,244,238,0.1)] text-xs">
                      <div className="text-[#A5A2A0] max-w-lg truncate">
                        <span className="text-[#EA2B1F] font-semibold">Role:</span> {project.sameerRole}
                      </div>

                      <Link
                        href={project.href}
                        className="px-6 py-3 bg-gradient-to-br from-[#EA2B1F] to-[#A6160F] hover:from-[#FF6B61] hover:to-[#EA2B1F] text-[#F7F4EE] uppercase tracking-wider font-semibold border border-[#EA2B1F] flex items-center gap-2 transition-all shadow-[0_0_18px_rgba(234,43,31,0.22)]"
                      >
                        <span>{project.isFlagship ? "Read Case Study" : "View Details"}</span>
                        <ArrowUpRight className="w-4 h-4 text-[#F7F4EE]" />
                      </Link>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>

          {/* Bottom Track Progress Bar */}
          <div className="w-full h-[2px] bg-[rgba(247,244,238,0.1)] relative">
            <div
              className="h-full bg-[#EA2B1F] transition-all"
              style={{ width: `${((activeIdx + 1) / totalSlides) * 100}%` }}
            />
          </div>
        </div>
      </div>

      {/* MOBILE & TABLET EDITORIAL VERTICAL STACK (< 1024px) */}
      <div className="section-gutter lg:hidden py-16 flex flex-col gap-10">
        <div className="border-b border-[rgba(247,244,238,0.12)] pb-4 flex items-center justify-between text-xs text-[#A5A2A0]">
          <div className="flex items-center gap-2">
            <SketchIcon icon={PanelsTopLeft} size="sm" label="Selected work" />
            <span className="text-[#EA2B1F] font-semibold">02 //</span>
            <span className="uppercase text-[#F7F4EE] font-semibold">Selected Work</span>
          </div>
          <span>01 — 04</span>
        </div>

        <div className="flex flex-col gap-8">
          {FEATURED_PROJECTS.map((project, index) => {
            const ProjectIcon = projectIcons[index] ?? PanelsTopLeft;
            return (
              <article
                key={project.id}
                className="project-glass-card glass-card rounded-[32px] border border-[rgba(247,244,238,0.12)] p-6 sm:p-8 flex flex-col gap-4"
                style={{ backgroundColor: projectSurfaces[Number(project.number) - 1] ?? "#111214" }}
              >
                <SpiderMark size="sm" className="project-spider-mark" />
                <div className="flex items-center justify-between text-xs text-[#A5A2A0]">
                  <SketchIcon icon={ProjectIcon} size="sm" label={`${project.category} project`} />
                  <span className="font-bold text-[#EA2B1F]">{project.number} {"//"}</span>
                  <span className="uppercase">{project.category}</span>
                  <span>{project.year}</span>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold uppercase text-[#F7F4EE]">
                  {project.title}
                </h3>

                <p className="text-xs text-[#A5A2A0] leading-relaxed">
                  {project.subtitle}
                </p>

                {project.verifiedResults && (
                  <div className="grid grid-cols-2 gap-2 p-3 bg-[#090A0C] border border-[rgba(247,244,238,0.1)] text-xs">
                    {project.verifiedResults.slice(0, 2).map((res, rIdx) => (
                      <div key={rIdx} className="flex flex-col">
                        <span className="text-[9px] text-[#A5A2A0] uppercase">{res.label}</span>
                        <span className="text-sm font-bold text-[#F7F4EE]">{res.value}</span>
                      </div>
                    ))}
                  </div>
                )}

                <Link
                  href={project.href}
                  className="mt-2 py-3 bg-gradient-to-br from-[#EA2B1F] to-[#A6160F] text-[#F7F4EE] text-xs uppercase font-semibold text-center border border-[#EA2B1F] flex items-center justify-center gap-1.5"
                >
                  <span>{project.isFlagship ? "Read Case Study" : "View Project"}</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
