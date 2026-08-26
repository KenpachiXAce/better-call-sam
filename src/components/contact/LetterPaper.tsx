"use client";

import React, { useState } from "react";
import { Feather, CheckCircle2 } from "lucide-react";
import { useReducedMotion } from "framer-motion";

export function LetterPaper() {
  const [isSigned, setIsSigned] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className="relative w-full paper-surface p-8 sm:p-12 border border-black/10 shadow-2xl flex flex-col justify-between select-text overflow-hidden">
      {/* Paper Fold Crease Lines */}
      <div className="paper-crease-horizontal top-1/3" />
      <div className="paper-crease-horizontal top-2/3" />

      {/* Top Memorandum Header */}
      <div className="relative z-10 flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-black/10 text-[11px] text-[#4A4750]">
        <div>
          <div className="font-bold text-[#111214] text-xs uppercase tracking-wider">
            SAM // STUDIO DIRECT
          </div>
          <div className="text-[10px] text-[#4A4750]">
            Product Designer &amp; UI/UX · Kathmandu, Nepal
          </div>
        </div>

        <div className="text-right">
          <span className="px-2 py-0.5 border border-black/20 text-[9px] uppercase font-semibold">
            MEMORANDUM // 2026
          </span>
        </div>
      </div>

      {/* Letter Body */}
      <div className="relative z-10 my-8 flex flex-col gap-6">
        {/* Salutation in PP Editorial New / Cormorant Garamond Italic */}
        <div className="font-editorial-italic text-3xl sm:text-4xl text-[#1B3F8B] select-none font-medium">
          Dear Client &amp; Partner,
        </div>

        {/* Readable Letter Body in Lexend Giga */}
        <p className="text-body text-[#111214] leading-relaxed max-w-xl font-normal">
          You bring the problem. I&apos;ll bring clarity, craft and a practical path to launch. If the work deserves care and a point of view, let&apos;s talk.
        </p>

        {/* Sign-off in PP Editorial New / Cormorant Garamond Italic */}
        <div className="font-editorial-italic text-3xl sm:text-4xl text-[#1B3F8B] mt-2 select-none font-medium">
          Warmly,<br />
          Sameer Chaudhary
        </div>
      </div>

      {/* Optional Interactive Signature Flourish */}
      <div className="relative z-10 pt-6 border-t border-black/10 flex flex-col gap-3">
        <div
          onClick={() => setIsSigned(!isSigned)}
          className="p-3 border border-dashed border-black/20 hover:border-[#1B3F8B] bg-black/[0.02] flex items-center justify-between cursor-pointer transition-colors"
          role="button"
          tabIndex={0}
          aria-label="Click to add personal countersign flourish"
        >
          <div className="flex items-center gap-2 text-xs text-[#1B3F8B]">
            <Feather className="w-4 h-4" />
            <span className="font-medium">
              {isSigned ? "Countersigned by Client" : "[ Click to sign note ]"}
            </span>
          </div>

          {isSigned && (
            <span className="text-[10px] text-emerald-700 font-semibold flex items-center gap-1">
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>STAMP VERIFIED</span>
            </span>
          )}
        </div>

        <div className="text-[9px] text-[#4A4750]">
          * Playful personal sign flourish · Inquiries submit directly via the console on the right.
        </div>
      </div>
    </div>
  );
}