"use client";

import React from "react";
import Link from "next/link";
import { Mail, Check, Monitor, ArrowUpRight } from "lucide-react";

export default function EmailDesignPage() {
  return (
    <div className="w-full max-w-7xl mx-auto px-6 sm:px-12 py-16 flex flex-col gap-12 select-text">
      {/* Top Header */}
      <div className="flex flex-col gap-3 border-b border-[rgba(247,244,238,0.12)] pb-8">
        <div className="flex flex-wrap items-center justify-between gap-4 text-xs text-[#A5A2A0]">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#B37CFF]" />
            <span className="text-[#F7F4EE] uppercase tracking-wider font-semibold">
              DISCIPLINE 03 // EMAIL &amp; CAMPAIGN SYSTEMS
            </span>
          </div>
          <span className="text-[11px] text-[#B37CFF]">CROSS-CLIENT COMPATIBILITY</span>
        </div>

        <h1 className="text-display-lg uppercase font-bold text-[#F7F4EE] tracking-tight mt-2">
          Email Design
        </h1>

        <p className="text-body-lg text-[#A5A2A0] max-w-3xl leading-relaxed">
          Editorial newsletters, transactional onboarding sequences, and marketing campaign templates engineered for bulletproof cross-client rendering.
        </p>
      </div>

      {/* Everest Mails Showcase */}
      <div className="flex flex-col gap-12">
        <article className="p-8 sm:p-12 border border-[rgba(247,244,238,0.14)] bg-[#111214] flex flex-col gap-8">
          <div className="flex flex-wrap items-center justify-between gap-4 text-xs text-[#A5A2A0]">
            <div className="flex items-center gap-3">
              <span className="text-xs text-[#B37CFF] font-semibold">CAMPAIGN SYSTEM //</span>
              <span className="uppercase text-[#F7F4EE] font-medium">Everest Mails &amp; Dispatch Systems</span>
            </div>
            <span>EDITORIAL &amp; TRANSACTIONAL</span>
          </div>

          <div>
            <h2 className="text-heading-2 uppercase font-semibold text-[#F7F4EE] tracking-tight">
              Modular Email Components &amp; Clean Typography Hierarchy
            </h2>
            <p className="text-body text-[#A5A2A0] mt-3 max-w-3xl leading-relaxed">
              Designed for high-deliverability communications, ensuring consistent visual appeal across dark mode clients, mobile devices, and legacy desktop mail software.
            </p>
          </div>

          {/* Minimal Device Frame Preview */}
          <div className="w-full max-w-2xl mx-auto border border-[rgba(247,244,238,0.16)] bg-[#090A0C] shadow-2xl">
            {/* Frame Top Header */}
            <div className="px-4 py-2.5 bg-[#111214] border-b border-[rgba(247,244,238,0.1)] flex items-center justify-between text-xs text-[#A5A2A0]">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-red-400/80" />
                <span className="w-2 h-2 rounded-full bg-yellow-400/80" />
                <span className="w-2 h-2 rounded-full bg-emerald-400/80" />
                <span className="ml-2 text-[10px] text-[#F7F4EE] font-mono">Mail Preview // Apple Mail &amp; Superhuman</span>
              </div>
              <span className="text-[10px]">600px Max-Width Standard</span>
            </div>

            {/* Email Canvas */}
            <div className="p-6 sm:p-10 flex flex-col gap-6 text-[#F7F4EE]">
              <div className="border-b border-[rgba(247,244,238,0.15)] pb-4 flex items-center justify-between text-xs">
                <span className="font-bold text-[#F7F4EE] tracking-wider uppercase">EVEREST MAILS</span>
                <span className="text-[#B37CFF] text-[10px]">MONTHLY DIGEST</span>
              </div>

              <div>
                <h3 className="text-xl sm:text-2xl font-bold uppercase text-[#F7F4EE] leading-snug">
                  Structuring High-Conversion Email Campaigns Without Heavy Code
                </h3>
                <div className="text-xs text-[#A5A2A0] mt-1">
                  Design Architecture ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€š· By Sameer Chaudhary
                </div>
              </div>

              <p className="text-sm text-[#A5A2A0] leading-relaxed">
                Building email templates requires a discipline distinct from standard web apps. With inconsistent CSS support across Outlook and Gmail, table-based layouts and explicit inline styles guarantee message integrity.
              </p>

              <div className="p-5 bg-[#111214] border-l-2 border-[#B37CFF] text-xs text-[#F7F4EE]">
                &quot;Good email design respects the recipient&apos;s bandwidth and time: high contrast, scannable hierarchies, and unmistakable action triggers.&quot;
              </div>

              <div className="p-4 bg-[#111214] border border-[rgba(247,244,238,0.12)] flex items-center justify-between">
                <div>
                  <div className="text-xs font-semibold text-[#F7F4EE]">Need custom email campaign templates?</div>
                  <div className="text-[10px] text-[#A5A2A0]">Tested across 20+ email clients</div>
                </div>
                <Link
                  href="/contact"
                  className="px-4 py-2 bg-[#5600A8] hover:bg-[#7A18D6] text-[#F7F4EE] text-xs uppercase font-semibold transition-colors"
                >
                  Inquire &rarr;
                </Link>
              </div>
            </div>
          </div>

          {/* Key Techniques */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-[rgba(247,244,238,0.1)] text-xs text-[#A5A2A0]">
            <div className="p-4 bg-[#090A0C] border border-[rgba(247,244,238,0.1)]">
              <span className="text-[#B37CFF] font-semibold block mb-1">01. Single-Column Flow</span>
              Mobile-first vertical stack ensuring effortless reading on smartphones.
            </div>
            <div className="p-4 bg-[#090A0C] border border-[rgba(247,244,238,0.1)]">
              <span className="text-[#B37CFF] font-semibold block mb-1">02. OLED Dark Mode Ready</span>
              Tested for automated background inversion in Apple Mail and Outlook mobile.
            </div>
            <div className="p-4 bg-[#090A0C] border border-[rgba(247,244,238,0.1)]">
              <span className="text-[#B37CFF] font-semibold block mb-1">03. Fast Asset Loading</span>
              Optimized image assets with fallback color backgrounds during load.
            </div>
          </div>
        </article>
      </div>
    </div>
  );
}