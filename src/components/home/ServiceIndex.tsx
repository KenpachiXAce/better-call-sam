"use client";

import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { OWNER_DATA } from "@/data/projects";

const serviceAccents = [
  "linear-gradient(135deg, #151218 0%, #070809 56%, #221431 100%)",
  "linear-gradient(135deg, #101113 0%, #050606 55%, #17131d 100%)",
  "linear-gradient(135deg, #171717 0%, #080909 58%, #21142b 100%)",
  "linear-gradient(135deg, #111014 0%, #060707 56%, #1b1324 100%)",
];

export function ServiceIndex() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeService = OWNER_DATA.services[activeIndex];

  return (
    <section
      id="services"
      className="w-full border-t border-[rgba(247,244,238,0.12)] bg-[#070809] px-6 py-24 sm:px-12 sm:py-32"
    >
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(320px,0.74fr)] lg:gap-20">
        <div>
          <div className="mb-12 flex items-end justify-between gap-6 border-b border-white/10 pb-6">
            <div>
              <p className="font-editorial-italic text-3xl text-[#B37CFF]">Capabilities</p>
              <h2 className="mt-1 text-heading-1 uppercase text-[#F7F4EE]">Services</h2>
            </div>
            <p className="hidden max-w-xs text-right text-[11px] uppercase leading-relaxed tracking-[0.16em] text-[#777579] sm:block">
              Direct client projects<br />and agency collaborations
            </p>
          </div>

          <div className="service-index">
            {OWNER_DATA.services.map((service, index) => {
              const isActive = index === activeIndex;

              return (
                <button
                  key={service.id}
                  type="button"
                  className={`service-index__row ${isActive ? "is-active" : ""}`}
                  onMouseEnter={() => setActiveIndex(index)}
                  onFocus={() => setActiveIndex(index)}
                  onClick={() => setActiveIndex(index)}
                  aria-pressed={isActive}
                >
                  <span className="service-index__number">0{index + 1}</span>
                  <span className="service-index__title">{service.title}</span>
                  <span className="service-index__arrow" aria-hidden="true">
                    <ArrowUpRight />
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        <aside className="service-preview lg:sticky lg:top-36 lg:self-start" aria-live="polite">
          <div
            className="service-preview__visual"
            style={{ background: serviceAccents[activeIndex] }}
            aria-hidden="true"
          >
            <span className="service-preview__ghost">0{activeIndex + 1}</span>
            <div className="service-preview__orb" />
            <span className="service-preview__mark">BCS / CAPABILITY</span>
          </div>

          <div className="service-preview__body">
            <div className="flex items-center justify-between gap-4">
              <span className="text-[10px] uppercase tracking-[0.18em] text-[#B37CFF]">
                Selected service
              </span>
              <span className="text-[10px] text-[#777579]">0{activeIndex + 1} / 04</span>
            </div>
            <h3 className="mt-6 text-2xl font-semibold uppercase leading-tight text-[#F7F4EE]">
              {activeService.title}
            </h3>
            <p className="mt-4 text-sm leading-7 text-[#A5A2A0]">{activeService.summary}</p>
            <div className="mt-7 border-t border-white/10 pt-5">
              <span className="text-[9px] uppercase tracking-[0.16em] text-[#777579]">Core handoff</span>
              <p className="mt-2 text-xs leading-6 text-[#D9D8D5]">
                {activeService.deliverables.slice(0, 3).join(" · ")}
              </p>
            </div>
          </div>
        </aside>
      </div>
    </section>
  );
}
