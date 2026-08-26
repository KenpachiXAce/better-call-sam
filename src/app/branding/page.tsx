"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Sun, Moon, ArrowUpRight, Check, Layers } from "lucide-react";

export default function BrandingPage() {
  const [themeMode, setThemeMode] = useState<"dark" | "light">("dark");

  return (
    <div className="w-full max-w-7xl mx-auto px-6 sm:px-12 py-16 flex flex-col gap-12 select-text">
      {/* Top Header */}
      <div className="flex flex-col gap-3 border-b border-[rgba(247,244,238,0.12)] pb-8">
        <div className="flex flex-wrap items-center justify-between gap-4 text-xs text-[#A5A2A0]">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#B37CFF]" />
            <span className="text-[#F7F4EE] uppercase tracking-wider font-semibold">
              DISCIPLINE 02 // BRANDING &amp; VISUAL IDENTITY
            </span>
          </div>
          <span className="text-[11px] text-[#B37CFF]">SYSTEMS &amp; GUIDELINES</span>
        </div>

        <h1 className="text-display-lg uppercase font-bold text-[#F7F4EE] tracking-tight mt-2">
          Brand Systems
        </h1>

        <p className="text-body-lg text-[#A5A2A0] max-w-3xl leading-relaxed">
          Vector logomarks, typographic hierarchies, and packaging guidelines designed with intentional restraint and strict color discipline.
        </p>
      </div>

      {/* Brand Identity Work Showcase */}
      <div className="flex flex-col gap-12">
        <article className="p-8 sm:p-12 border border-[rgba(247,244,238,0.14)] bg-[#111214] flex flex-col gap-8">
          <div className="flex flex-wrap items-center justify-between gap-4 text-xs text-[#A5A2A0]">
            <div className="flex items-center gap-3">
              <span className="text-xs text-[#B37CFF] font-semibold">STUDIO IDENTITY //</span>
              <span className="uppercase text-[#F7F4EE] font-medium">Better Call Sam Visual Language</span>
            </div>

            {/* Dark / Light Mode Canvas Toggle */}
            <div className="flex items-center border border-[rgba(247,244,238,0.16)] bg-[#090A0C] p-0.5">
              <button
                onClick={() => setThemeMode("dark")}
                className={`flex items-center gap-1.5 px-3 py-1 text-xs uppercase transition-colors ${
                  themeMode === "dark" ? "bg-[#5600A8]/40 text-[#F7F4EE] font-semibold" : "text-[#A5A2A0]"
                }`}
              >
                <Moon className="w-3.5 h-3.5" />
                <span>Void Canvas</span>
              </button>
              <button
                onClick={() => setThemeMode("light")}
                className={`flex items-center gap-1.5 px-3 py-1 text-xs uppercase transition-colors ${
                  themeMode === "light" ? "bg-[#F5F1E8] text-[#111214] font-semibold" : "text-[#A5A2A0]"
                }`}
              >
                <Sun className="w-3.5 h-3.5" />
                <span>Paper Canvas</span>
              </button>
            </div>
          </div>

          <div>
            <h2 className="text-heading-2 uppercase font-semibold text-[#F7F4EE] tracking-tight">
              The Panther Emblem &amp; Ceremonial Jewelry Vector Identity
            </h2>
            <p className="text-body text-[#A5A2A0] mt-3 max-w-3xl leading-relaxed">
              An original geometric identity system drawing upon West and Southern African ceremonial adornment, stealth predator instincts, and precision typography.
            </p>
          </div>

          {/* Interactive Logo Canvas */}
          <div
            className={`w-full min-h-[320px] flex items-center justify-center p-12 transition-colors duration-400 border border-[rgba(247,244,238,0.14)] ${
              themeMode === "dark" ? "bg-[#090A0C] text-[#F7F4EE]" : "bg-[#F5F1E8] text-[#111214]"
            }`}
          >
            <div className="flex flex-col items-center gap-4 text-center">
              {/* Original Vector Geometric Mark */}
              <div className="w-24 h-24 relative flex items-center justify-center">
                <svg viewBox="0 0 100 100" className="w-full h-full">
                  <polygon
                    points="50,10 85,35 85,70 50,92 15,70 15,35"
                    fill={themeMode === "dark" ? "#111214" : "#E5E1D8"}
                    stroke={themeMode === "dark" ? "#B37CFF" : "#5600A8"}
                    strokeWidth="2"
                  />
                  <polygon
                    points="50,22 75,40 50,75 25,40"
                    fill={themeMode === "dark" ? "#5600A8" : "#B37CFF"}
                    opacity="0.85"
                  />
                  <line
                    x1="50"
                    y1="10"
                    x2="50"
                    y2="92"
                    stroke={themeMode === "dark" ? "#F7F4EE" : "#111214"}
                    strokeWidth="1.5"
                  />
                </svg>
              </div>

              <div>
                <div className="font-bold text-2xl uppercase tracking-wider">
                  BETTER CALL SAM
                </div>
                <div className="font-script text-2xl text-[#B37CFF] mt-1">
                  In case of creativity
                </div>
              </div>
            </div>
          </div>

          {/* Scope of Delivery */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-[rgba(247,244,238,0.1)] text-xs text-[#A5A2A0]">
            <div className="p-4 bg-[#090A0C] border border-[rgba(247,244,238,0.1)]">
              <span className="text-[#B37CFF] font-semibold block mb-1">Vector Master Marks</span>
              Faceted geometric icons, negative-space locks, and scalable SVG badges.
            </div>
            <div className="p-4 bg-[#090A0C] border border-[rgba(247,244,238,0.1)]">
              <span className="text-[#B37CFF] font-semibold block mb-1">Typography Architecture</span>
              Editorial pairing scales (Lexend Giga + Monsieur La Doulaise).
            </div>
            <div className="p-4 bg-[#090A0C] border border-[rgba(247,244,238,0.1)]">
              <span className="text-[#B37CFF] font-semibold block mb-1">60/30/10 Color Rule</span>
              Strict foundation, neutral reading contrast, and signature accent allocation.
            </div>
          </div>
        </article>

        {/* Content Preparation Notice for Additional Brand Cases */}
        <div className="p-6 bg-[#090A0C] border border-dashed border-[rgba(247,244,238,0.2)] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#A5A2A0]">
          <div className="flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-[#B37CFF]" />
            <span>Additional commercial client branding guidelines and packaging mockups are being prepared for public release.</span>
          </div>
          <Link
            href="/contact"
            className="text-[#B37CFF] hover:underline font-semibold shrink-0"
          >
            Inquire for Private Portfolio &rarr;
          </Link>
        </div>
      </div>
    </div>
  );
}