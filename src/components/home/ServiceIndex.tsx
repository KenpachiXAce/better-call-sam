"use client";

import { useState } from "react";
import { ArrowUpRight, Boxes, Mail, Palette, PanelsTopLeft } from "lucide-react";
import { OWNER_DATA } from "@/data/projects";
import { SketchIcon } from "@/components/ui/SketchIcon";

const serviceIcons = [PanelsTopLeft, Boxes, Mail, Palette];

export function ServiceIndex() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeService = OWNER_DATA.services[activeIndex];
  const ActiveIcon = serviceIcons[activeIndex];

  return (
    <section id="services" className="services-section">
      <div className="section-frame">
        <header className="editorial-section-header">
          <div>
            <p className="section-kicker">03 / Capabilities</p>
            <p className="editorial-script">What I can help with</p>
          </div>
          <p className="editorial-section-header__copy">
            Direct client projects and agency collaborations, shaped around the outcome—not a fixed package.
          </p>
        </header>

        <div className="services-hover-stage">
          <div className="service-index">
            {OWNER_DATA.services.map((service, index) => {
              const isActive = index === activeIndex;
              const Icon = serviceIcons[index];
              return (
                <div key={service.id} className="service-row-wrap">
                  <button
                    type="button"
                    className={`service-index__row ${isActive ? "is-active" : ""}`}
                    onMouseEnter={() => setActiveIndex(index)}
                    onFocus={() => setActiveIndex(index)}
                    onClick={() => setActiveIndex(index)}
                    aria-expanded={isActive}
                  >
                    <span className="service-index__number">0{index + 1}</span>
                    <SketchIcon icon={Icon} size="sm" />
                    <span className="service-index__title">{service.title}</span>
                    <span className="service-index__arrow" aria-hidden="true"><ArrowUpRight /></span>
                  </button>
                  {isActive && (
                    <div className="service-mobile-detail">
                      <p>{service.summary}</p>
                      <span>{service.deliverables.slice(0, 2).join(" · ")}</span>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          <aside className="service-hover-card" aria-live="polite">
            <div className="service-hover-card__top">
              <SketchIcon icon={ActiveIcon} size="lg" />
              <span>0{activeIndex + 1} / 04</span>
            </div>
            <p className="section-kicker">Selected capability</p>
            <h3>{activeService.title}</h3>
            <p>{activeService.summary}</p>
            <div className="service-hover-card__handoff">
              <span>Core handoff</span>
              <p>{activeService.deliverables.slice(0, 3).join(" · ")}</p>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
