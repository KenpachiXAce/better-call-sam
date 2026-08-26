import { Coffee, Mail, MapPin, MessageCircle } from "lucide-react";
import { LetterPaper } from "@/components/contact/LetterPaper";
import { HimalayanJavaScheduler } from "@/components/contact/HimalayanJavaScheduler";
import { SketchIcon } from "@/components/ui/SketchIcon";

export default function ContactPage() {
  const contactEmail = process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? "hello@bettercallsam.design";

  return (
    <div className="contact-page select-text">
      <header className="contact-hero">
        <div className="contact-hero__identity">
          <SketchIcon icon={MessageCircle} size="lg" />
          <div>
            <p className="section-kicker">06 / Contact</p>
            <h1 className="discipline-title">Let&apos;s make the next thing</h1>
            <p className="contact-hero__script">feel worth remembering.</p>
          </div>
        </div>
        <p className="contact-hero__copy">
          Share the context, the constraint, and what success should feel like. I&apos;ll reply with a practical next step within one working day.
        </p>
      </header>

      <section className="contact-contract" aria-labelledby="contract-title">
        <div className="contact-section-intro">
          <SketchIcon icon={MessageCircle} size="lg" />
          <div>
            <p className="section-kicker">A note before the form</p>
            <h2 id="contract-title">A small contract of intent</h2>
            <p>No jargon. Just the kind of collaboration I want to build.</p>
          </div>
        </div>
        <LetterPaper />
      </section>

      <section className="contact-form-section" aria-labelledby="contact-form-title">
        <div className="contact-form-section__aside">
          <p className="section-kicker">Start here</p>
          <h2 id="contact-form-title">Tell me what needs clarity.</h2>
          <p>Choose a project inquiry or an in-person coffee. The form only asks for what helps me respond usefully.</p>

          <div className="contact-methods">
            <a href={`mailto:${contactEmail}`}>
              <SketchIcon icon={Mail} size="sm" />
              <span><strong>Email</strong>{contactEmail}</span>
            </a>
            <div>
              <SketchIcon icon={MapPin} size="sm" />
              <span><strong>Based in</strong>Kathmandu, Nepal</span>
            </div>
            <div>
              <SketchIcon icon={Coffee} size="sm" />
              <span><strong>In person</strong>Himalayan Java</span>
            </div>
          </div>
        </div>
        <HimalayanJavaScheduler />
      </section>
    </div>
  );
}
