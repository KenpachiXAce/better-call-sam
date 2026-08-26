"use client";

import React from "react";
import { LetterPaper } from "@/components/contact/LetterPaper";
import { HimalayanJavaScheduler } from "@/components/contact/HimalayanJavaScheduler";
import { Mail, Compass, Coffee, Shield } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="w-full max-w-7xl mx-auto px-6 sm:px-12 py-16 flex flex-col gap-12 select-text">
      {/* Top Header */}
      <div className="flex flex-col gap-3 border-b border-[rgba(247,244,238,0.12)] pb-8">
        <div className="flex flex-wrap items-center justify-between gap-4 text-xs text-[#A5A2A0]">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#B37CFF]" />
            <span className="text-[#F7F4EE] uppercase tracking-wider font-semibold">
              START A PROJECT // DIRECT ACCESS
            </span>
          </div>
          <span className="text-[11px] text-[#B37CFF]">KATHMANDU ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€š· GLOBAL SPRINTS</span>
        </div>

        <h1 className="text-display-lg uppercase font-bold text-[#F7F4EE] tracking-tight mt-2">
          Direct Engagement
        </h1>

        <p className="text-body-lg text-[#A5A2A0] max-w-3xl leading-relaxed">
          No generic discovery gates or recruiter middle-management. Send a project inquiry directly or schedule an in-person coffee review in Kathmandu.
        </p>
      </div>

      {/* Main Two-Column Layout: Left 60% Letter, Right 40% Action Form */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left: Scanned Paper Note */}
        <div className="lg:col-span-7 flex flex-col gap-3">
          <div className="flex items-center justify-between text-xs text-[#A5A2A0] px-1">
            <span className="uppercase text-[#B37CFF] font-semibold">[ MEMORANDUM // STUDIO DIRECT ]</span>
            <span>SAMEER CHAUDHARY</span>
          </div>
          <LetterPaper />
        </div>

        {/* Right: Project Inquiry & Coffee Scheduler Form */}
        <div className="lg:col-span-5 sticky top-28 flex flex-col gap-3">
          <div className="flex items-center justify-between text-xs text-[#A5A2A0] px-1">
            <span className="uppercase text-[#B37CFF] font-semibold">[ DIRECT DISPATCH CONSOLE ]</span>
            <span>24H RESPONSE</span>
          </div>
          <HimalayanJavaScheduler />
        </div>
      </div>
    </div>
  );
}