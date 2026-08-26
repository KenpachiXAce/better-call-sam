"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
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
        className="fixed right-3 top-1/2 z-40 hidden -translate-y-1/2 flex-col items-end select-none xl:flex"
      >
        <div className="relative flex w-44 flex-col items-end py-8">
          <div className="absolute bottom-0 right-[26px] top-0 w-px bg-[rgba(247,244,238,0.18)]" />

          {/* Traveling Climbing Panther Mark (Original Faceted Vector Animal) */}
          <div
            className="pointer-events-none absolute -right-4 h-[138px] w-[86px] transition-all duration-300"
            style={{
              top: shouldReduceMotion
                ? `${(activeIndex / (SECTIONS.length - 1)) * 72 + 2}%`
                : `${scrollProgress * 72 + 2}%`
            }}
            aria-hidden="true"
          >
            <Image
              src="/images/panther-motion.png"
              alt="Panther scroll indicator"
              width={86}
              height={138}
              className="h-full w-full object-contain opacity-95 drop-shadow-[0_0_15px_rgba(179,124,255,0.32)]"
            />
          </div>

          {/* Section Marker Targets */}
          <div className="relative z-10 flex w-full flex-col gap-6">
            {SECTIONS.map((sec) => {
              const isActive = activeSection === sec.id;
              return (
                <a
                  key={sec.id}
                  href={sec.href}
                  className="group grid min-h-[54px] w-full grid-cols-[1fr_52px] items-center outline-none focus-visible:ring-1 focus-visible:ring-[#EA2B1F]"
                  aria-label={`Go to section ${sec.number}: ${sec.label}`}
                  aria-current={isActive ? "true" : undefined}
                >
                  <span
                    className={`pr-3 text-right text-[9px] uppercase tracking-wider transition-all whitespace-nowrap ${
                      isActive
                        ? "text-[#F7F4EE] font-semibold opacity-100"
                        : "text-[#A5A2A0] opacity-0 group-hover:opacity-100"
                    }`}
                  >
                    {sec.number} {sec.label}
                  </span>
                  <div className="flex justify-center">
                    <div
                      className={`w-2 h-2 transition-all ${
                        isActive
                          ? "bg-[#EA2B1F] shadow-[0_0_8px_#EA2B1F] scale-125"
                          : "bg-[#111214] border border-[rgba(247,244,238,0.25)] group-hover:border-[#EA2B1F]"
                      }`}
                    />
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
