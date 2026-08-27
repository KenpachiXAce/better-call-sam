import Image from "next/image";
import Link from "next/link";
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

export function ProjectShowcase() {
  const projects = FEATURED_PROJECTS.slice(0, 3);

  return (
    <section id="work" className="case-study-section">
      <div className="case-study-shell">
        <header className="case-study-heading">
          <div>
            <p className="section-kicker">02 / Selected work</p>
            <h2>Case studies</h2>
          </div>
          <p>Product and web design.</p>
        </header>

        <div className="case-study-grid">
          {projects.map((project, index) => {
            const details = caseStudyDetails[project.id as keyof typeof caseStudyDetails];

            return (
              <Link
                key={project.id}
                href={project.href}
                className={`case-study-card ${index === 0 ? "case-study-card--featured" : ""}`}
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
                    sizes="220px"
                  />
                </div>

                <div className="case-study-card__copy">
                  <p>{project.category}</p>
                  <h3>{project.title}</h3>
                  <span>{details.body}</span>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
