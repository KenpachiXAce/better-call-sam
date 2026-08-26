import Link from "next/link";
import type { LucideIcon } from "lucide-react";
import { ArrowUpRight, Sparkles } from "lucide-react";
import { SketchIcon } from "@/components/ui/SketchIcon";

export interface DisciplineCard {
  eyebrow: string;
  title: string;
  copy: string;
  icon: LucideIcon;
  href?: string;
  meta?: string;
  size?: "wide" | "tall" | "standard";
  accent?: boolean;
}

interface DisciplinePageProps {
  number: string;
  eyebrow: string;
  title: string;
  italic: string;
  intro: string;
  tags: string[];
  cards: DisciplineCard[];
}

export function DisciplinePage({ number, eyebrow, title, italic, intro, tags, cards }: DisciplinePageProps) {
  return (
    <div className="discipline-page select-text">
      <header className="discipline-hero">
        <div className="discipline-hero__identity">
          <SketchIcon icon={Sparkles} size="lg" />
          <div>
            <p className="section-kicker">{number} / {eyebrow}</p>
            <h1 className="discipline-title">{title}</h1>
            <p className="discipline-script">{italic}</p>
          </div>
        </div>
        <div className="discipline-hero__intro">
          <p>{intro}</p>
          <div className="discipline-tags" aria-label="Capabilities">
            {tags.map((tag) => <span key={tag}>{tag}</span>)}
          </div>
        </div>
      </header>

      <section className="bento-grid" aria-label={`${title} portfolio highlights`}>
        {cards.map((card, index) => {
          const content = (
            <>
              <div className="bento-card__top">
                <SketchIcon icon={card.icon} size="md" tone={card.accent ? "paper" : "violet"} />
                <span>{String(index + 1).padStart(2, "0")}</span>
              </div>
              <div className="bento-card__body">
                <p className="section-kicker">{card.eyebrow}</p>
                <h2>{card.title}</h2>
                <p>{card.copy}</p>
              </div>
              <div className="bento-card__footer">
                <span>{card.meta ?? "Selected work"}</span>
                {card.href && <ArrowUpRight aria-hidden="true" />}
              </div>
            </>
          );

          const className = `bento-card bento-card--${card.size ?? "standard"}${card.accent ? " bento-card--accent" : ""}`;
          return card.href ? (
            <Link href={card.href} key={card.title} className={className}>{content}</Link>
          ) : (
            <article key={card.title} className={className}>{content}</article>
          );
        })}
      </section>

      <div className="discipline-cta">
        <div>
          <p className="section-kicker">Have a similar brief?</p>
          <p>Bring the messy problem. I&apos;ll help shape the clear next move.</p>
        </div>
        <Link href="/contact" className="pill-action">
          Start a project <ArrowUpRight aria-hidden="true" />
        </Link>
      </div>
    </div>
  );
}
