"use client";

import { useState } from "react";
import { Check, Feather } from "lucide-react";

export function LetterPaper() {
  const [isSigned, setIsSigned] = useState(false);

  return (
    <article className="letter-paper">
      <div className="letter-paper__meta">
        <span>Better Call Sam · Studio note</span>
        <span>Kathmandu · 2026</span>
      </div>

      <div className="letter-paper__body font-handwritten">
        <p>Dear future collaborator,</p>
        <p>
          You bring the challenge. I&apos;ll bring curiosity, honest questions, and enough craft to make the answer feel inevitable. We&apos;ll keep the process clear, protect the reason behind the work, and leave every handoff better than we found it.
        </p>
        <p>If that sounds like your kind of project, I&apos;m in.</p>
        <p className="letter-paper__signoff">Warmly,<br />Sameer</p>
      </div>

      <button
        type="button"
        className={`letter-signature ${isSigned ? "is-signed" : ""}`}
        onClick={() => setIsSigned((value) => !value)}
        aria-pressed={isSigned}
      >
        <Feather aria-hidden="true" />
        <span>{isSigned ? "Intent signed" : "Click to countersign"}</span>
        {isSigned && <Check aria-hidden="true" />}
      </button>
    </article>
  );
}
