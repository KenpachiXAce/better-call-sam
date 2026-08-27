"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { FEATURED_PROJECTS } from "@/data/projects";

const caseStudyDetails = {
  "prestige-travel-corporation": {
    logo: "/images/brand-logos/prestige-travel.png",
    logoWidth: 220,
    logoHeight: 120,
    body: "A clearer booking experience for premium travel.",
  },
  "iie-university": {
    logo: "/images/brand-logos/iie.png",
    logoWidth: 220,
    logoHeight: 43,
    body: "A structured academic platform designed to scale.",
  },
  "misc-restaurant": {
    logo: "/images/brand-logos/misc.png",
    logoWidth: 220,
    logoHeight: 67,
    body: "An editorial web experience for dining and reservations.",
  },
} as const;

const projects = FEATURED_PROJECTS.slice(0, 3);

function CaseStudyCard({ project, index, active = true }: {
  project: (typeof projects)[number];
  index: number;
  active?: boolean;
}) {
  const details = caseStudyDetails[project.id as keyof typeof caseStudyDetails];

  return (
    <Link
      href={project.href}
      className={`case-study-card case-study-rail-card ${active ? "is-active" : "is-muted"}`}
      aria-label={`Read ${project.title} case study`}
    >
      <div className="case-study-card__topline">
        <span>0{index + 1}</span>
        <ArrowUpRight aria-hidden="true" />
      </div>

      <div className="case-study-card__logo">
        <Image
          src={details.logo}
          alt={`${project.title} logo`}
          width={details.logoWidth}
          height={details.logoHeight}
          sizes="(max-width: 720px) 180px, 260px"
        />
      </div>

      <div className="case-study-card__copy">
        <p>{project.category}</p>
        <h3>{project.title}</h3>
        <span>{details.body}</span>
      </div>
    </Link>
  );
}

export function ProjectShowcase() {
  const sectionRef = useRef<HTMLElement>(null);
  const [progress, setProgress] = useState(0);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const updateProgress = () => {
      if (!sectionRef.current || window.innerWidth < 1024) return;

      const rect = sectionRef.current.getBoundingClientRect();
      const scrollDistance = Math.max(rect.height - window.innerHeight, 1);
      const nextProgress = Math.min(1, Math.max(0, -rect.top / scrollDistance));

      setProgress(nextProgress);
      setActiveIndex(Math.min(projects.length - 1, Math.round(nextProgress * (projects.length - 1))));
    };

    updateProgress();
    window.addEventListener("scroll", updateProgress, { passive: true });
    window.addEventListener("resize", updateProgress);

    return () => {
      window.removeEventListener("scroll", updateProgress);
      window.removeEventListener("resize", updateProgress);
    };
  }, []);

  const railTravel = progress * (projects.length - 1) * 81;

  return (
    <section id="work" ref={sectionRef} className="case-study-section case-study-section--rail">
      <div className="case-study-scroll-space">
        <div className="case-study-sticky">
          <header className="case-study-heading">
            <div>
              <p className="section-kicker">02 / Selected work</p>
              <h2>Case studies</h2>
            </div>
            <div className="case-study-heading__aside">
              <p>Product and web design.</p>
              <span>0{activeIndex + 1} / 0{projects.length}</span>
            </div>
          </header>

          <div className="case-study-rail-viewport">
            <div className="case-study-rail" style={{ transform: `translate3d(-${railTravel}vw, 0, 0)` }}>
              {projects.map((project, index) => (
                <CaseStudyCard key={project.id} project={project} index={index} active={index === activeIndex} />
              ))}
            </div>
          </div>

          <div className="case-study-progress" aria-hidden="true">
            <span style={{ transform: `scaleX(${progress})` }} />
          </div>
        </div>
      </div>

      <div className="case-study-mobile">
        <header className="case-study-heading">
          <div>
            <p className="section-kicker">02 / Selected work</p>
            <h2>Case studies</h2>
          </div>
          <p>Product and web design.</p>
        </header>
        <div className="case-study-mobile__cards">
          {projects.map((project, index) => (
            <CaseStudyCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
