"use client";

import React, { useState, useEffect } from "react";
import { useReducedMotion } from "framer-motion";

interface SectionMarker {
  id: string;
  number: string;
  label: string;
  href: string;
}

const SECTIONS: SectionMarker[] = [
  { id: "hero", number: "01", label: "Hero", href: "#hero" },
  { id: "work", number: "02", label: "Work", href: "#work" },
  { id: "services", number: "03", label: "Services", href: "#services" },
  { id: "about", number: "04", label: "About", href: "#about" },
  { id: "process", number: "05", label: "Process", href: "#process" },
  { id: "contact", number: "06", label: "Contact", href: "#contact" }
];

export function PantherScrollIndex() {
  const [activeSection, setActiveSection] = useState("hero");
  const [scrollProgress, setScrollProgress] = useState(0);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    let rafId: number;

    const handleScroll = () => {
      if (typeof window === "undefined") return;

      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = totalHeight > 0 ? window.scrollY / totalHeight : 0;
      setScrollProgress(Math.min(1, Math.max(0, progress)));
    };

    const observerCallback: IntersectionObserverCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, {
      rootMargin: "-30% 0px -40% 0px"
    });

    SECTIONS.forEach((s) => {
      const el = document.getElementById(s.id);
      if (el) observer.observe(el);
    });

    const onScroll = () => {
      rafId = requestAnimationFrame(handleScroll);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(rafId);
      observer.disconnect();
    };
  }, []);

  const activeIndex = SECTIONS.findIndex((s) => s.id === activeSection);
  const activeNumber = activeIndex !== -1 ? SECTIONS[activeIndex].number : "01";

  return (
    <>
      {/* Desktop Fixed Right Index Rail (>= 1280px) */}
      <nav
        aria-label="Section Scroll Navigation"
        className="hidden xl:flex fixed right-8 top-1/2 -translate-y-1/2 z-40 flex-col items-center select-none"
      >
        {/* Track Line */}
        <div className="relative w-8 flex flex-col items-center py-4">
          <div className="absolute top-0 bottom-0 w-[1px]" />

          {/* Traveling Climbing Panther Mark (Original Faceted Vector Animal) */}
          <div
            className="absolute -left-3 w-9 h-12 transition-all duration-300 pointer-events-none"
            style={{
              top: shouldReduceMotion
                ? `${(activeIndex / (SECTIONS.length - 1)) * 82 + 6}%`
                : `${scrollProgress * 82 + 6}%`
            }}
            aria-hidden="true"
          >
            {/* Original Stylized Panther Climbing Vector replaced by actual Panther Image */}
            <img src="/images/panther-index.png" alt="Panther Scroll Indicator" className="w-full h-full object-contain filter invert mix-blend-screen opacity-90" />
          </div>

          {/* Section Marker Targets */}
          <div className="flex flex-col gap-8 relative z-10">
            {SECTIONS.map((sec, idx) => {
              const isActive = activeSection === sec.id;
              return (
                <a
                  key={sec.id}
                  href={sec.href}
                  className="min-w-[44px] min-h-[44px] flex items-center justify-center group outline-none focus-visible:ring-1 focus-visible:ring-[#B37CFF]"
                  aria-label={`Go to section ${sec.number}: ${sec.label}`}
                  aria-current={isActive ? "true" : undefined}
                >
                  <div className="flex items-center gap-2">
                    {/* Node Dot / Square */}
                    <div
                      className={`w-2 h-2 transition-all ${
                        isActive
                          ? "bg-[#B37CFF] shadow-[0_0_8px_#B37CFF] scale-125"
                          : "bg-[#111214] border border-[rgba(247,244,238,0.25)] group-hover:border-[#B37CFF]"
                      }`}
                    />

                    {/* Section Label on Hover / Active */}
                    <span
                      className={`text-[9px] uppercase tracking-wider transition-all whitespace-nowrap ${
                        isActive
                          ? "text-[#F7F4EE] font-semibold opacity-100"
                          : "text-[#A5A2A0] opacity-0 group-hover:opacity-100"
                      }`}
                    >
                      {sec.number} {sec.label}
                    </span>
                  </div>
                </a>
              );
            })}
          </div>
        </div>
      </nav>

      {/* Mobile Top Header Indicator (< 768px): Minimal Section Counter */}
      <div className="xl:hidden fixed top-3 left-1/2 -translate-x-1/2 z-40 pointer-events-none">
        <span className="px-2.5 py-1 text-[9px] text-[#A5A2A0] font-mono tracking-widest uppercase backdrop-blur-md">
          SECTION {activeNumber} / 06
        </span>
      </div>
    </>
  );
}