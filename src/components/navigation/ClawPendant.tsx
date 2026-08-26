"use client";

import React from "react";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";

export interface ClawPendantProps {
  id: string;
  label: string;
  href: string;
  isActive: boolean;
  isCenter?: boolean;
  isIsolated?: boolean;
  angleDeg: number;
  offsetY: number;
  offsetX?: number;
}

export function ClawPendant({
  id,
  label,
  href,
  isActive,
  isCenter = false,
  isIsolated = false,
  offsetY = 0,
  offsetX = 0
}: ClawPendantProps) {
  const shouldReduceMotion = useReducedMotion();
  const width = isCenter ? 52 : isIsolated ? 36 : 40;
  const height = isCenter ? 72 : isIsolated ? 54 : 58;

  return (
    <div
      className="relative flex flex-col items-center group"
      style={{
        transform: `translate(${offsetX}px, ${offsetY}px)`,
        transition: "transform 0.4s cubic-bezier(0.16, 1, 0.3, 1)"
      }}
    >
      <Link
        href={href}
        className="relative block min-w-[44px] min-h-[44px] flex flex-col items-center outline-none focus-visible:ring-2 focus-visible:ring-[#B37CFF] focus-visible:ring-offset-4 focus-visible:ring-offset-[#090A0C]"
        aria-label={`${label} ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÂ¢Ã¢â€šÂ¬Ã‚Â Navigation Section`}
        aria-current={isActive ? "page" : undefined}
      >
        {/* Animated Claw Jewelry Wrapper */}
        <motion.div
          whileHover={shouldReduceMotion ? {} : { y: -5, scale: 1.03 }}
          whileTap={shouldReduceMotion ? {} : { y: 0, scale: 0.97 }}
          transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
          className="relative flex flex-col items-center"
        >
          {/* Small Top Chain Link Connector */}
          <div
            className={`w-2.5 h-2 border rounded-t-sm transition-colors duration-300 ${
              isActive
                ? "border-[#B37CFF] bg-[#5600A8]/40"
                : "border-[rgba(247,244,238,0.25)] bg-[#111214] group-hover:border-[#B37CFF]/60"
            }`}
          />

          {/* SVG Claw Pendant */}
          <div className="relative">
            {/* Soft Illustration Violet Bloom on Hover / Active */}
            <div
              className={`absolute -inset-3 rounded-full transition-opacity duration-300 pointer-events-none filter blur-md ${
                isActive
                  ? "opacity-90 bg-[rgba(179,124,255,0.3)]"
                  : "opacity-0 group-hover:opacity-75 bg-[rgba(179,124,255,0.18)]"
              }`}
            />

            <svg
              width={width}
              height={height}
              viewBox="0 0 48 72"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className={`relative drop-shadow-md transition-all duration-300 ${
                isActive ? "drop-shadow-[0_0_12px_rgba(179,124,255,0.85)]" : "group-hover:drop-shadow-[0_0_8px_rgba(179,124,255,0.45)]"
              }`}
            >
              <defs>
                <linearGradient id={`metalGrad-${id}`} x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor={isActive ? "#FFFFFF" : "#E8E6ED"} />
                  <stop offset="40%" stopColor={isActive ? "#B37CFF" : "#9B97A6"} />
                  <stop offset="75%" stopColor="#4A4750" />
                  <stop offset="100%" stopColor="#1E1C22" />
                </linearGradient>

                <linearGradient id={`bevelGrad-${id}`} x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.9" />
                  <stop offset="60%" stopColor="#D9D8D5" stopOpacity="0.4" />
                  <stop offset="100%" stopColor="#7A18D6" stopOpacity={isActive ? 0.9 : 0.25} />
                </linearGradient>
              </defs>

              {isCenter ? (
                // Center Pendant: Most Prominent Emblem with Inset Violet Jewel
                <g>
                  <path
                    d="M 12,4 L 36,4 L 44,18 L 38,46 L 24,70 L 10,46 L 4,18 Z"
                    fill={`url(#metalGrad-${id})`}
                    stroke={isActive ? "#B37CFF" : "#D9D8D5"}
                    strokeWidth="1.2"
                  />
                  {/* Left Facet Shadow */}
                  <path
                    d="M 12,4 L 24,14 L 24,70 L 10,46 L 4,18 Z"
                    fill="#000000"
                    fillOpacity="0.3"
                  />
                  {/* Center Ridge Spine */}
                  <line
                    x1="24"
                    y1="4"
                    x2="24"
                    y2="66"
                    stroke={`url(#bevelGrad-${id})`}
                    strokeWidth="1.6"
                  />
                  {/* Ceremonial Engraved Chevrons */}
                  <path
                    d="M 16,24 L 24,32 L 32,24 M 18,36 L 24,42 L 30,36 M 20,48 L 24,52 L 28,48"
                    stroke={isActive ? "#F7F4EE" : "#7A18D6"}
                    strokeWidth="1.2"
                    fill="none"
                  />
                  {/* Inset Violet Jewel */}
                  <polygon
                    points="24,14 28,19 24,24 20,19"
                    fill={isActive ? "#B37CFF" : "#5600A8"}
                    stroke="#F7F4EE"
                    strokeWidth="0.8"
                  />
                </g>
              ) : isIsolated ? (
                // 7th Isolated Contact Stylus
                <g>
                  <path
                    d="M 16,6 L 32,6 L 38,20 L 32,44 L 24,68 L 16,44 L 10,20 Z"
                    fill={`url(#metalGrad-${id})`}
                    stroke={isActive ? "#B37CFF" : "rgba(247,244,238,0.4)"}
                    strokeWidth="1"
                  />
                  <line
                    x1="24"
                    y1="6"
                    x2="24"
                    y2="64"
                    stroke={`url(#bevelGrad-${id})`}
                    strokeWidth="1.2"
                  />
                  <circle cx="24" cy="22" r="2.5" fill={isActive ? "#B37CFF" : "#5600A8"} />
                  <path
                    d="M 18,32 L 24,38 L 30,32"
                    stroke={isActive ? "#B37CFF" : "rgba(247,244,238,0.4)"}
                    strokeWidth="1"
                    fill="none"
                  />
                </g>
              ) : (
                // Standard Arc Claw
                <g>
                  <path
                    d="M 14,6 L 34,6 L 40,20 L 34,44 L 24,66 L 14,44 L 8,20 Z"
                    fill={`url(#metalGrad-${id})`}
                    stroke={isActive ? "#B37CFF" : "rgba(247,244,238,0.3)"}
                    strokeWidth="1"
                  />
                  <path
                    d="M 14,6 L 24,16 L 24,66 L 14,44 L 8,20 Z"
                    fill="#000000"
                    fillOpacity="0.25"
                  />
                  <line
                    x1="24"
                    y1="6"
                    x2="24"
                    y2="62"
                    stroke={`url(#bevelGrad-${id})`}
                    strokeWidth="1.2"
                  />
                  <path
                    d="M 18,26 L 24,32 L 30,26 M 20,38 L 24,42 L 28,38"
                    stroke={isActive ? "#F7F4EE" : "#7A18D6"}
                    strokeWidth="1"
                    fill="none"
                  />
                </g>
              )}
            </svg>
          </div>
        </motion.div>

        {/* Vertical Tether Line & Label */}
        <div className="flex flex-col items-center pointer-events-none mt-1">
          <div
            className={`w-[1px] transition-all duration-300 ease-out origin-top ${
              isActive
                ? "h-4 bg-[#B37CFF] shadow-[0_0_6px_#B37CFF] opacity-100"
                : "h-2 bg-[rgba(247,244,238,0.2)] group-hover:h-3.5 group-hover:bg-[#B37CFF]/80 opacity-60 group-hover:opacity-100"
            }`}
          />
          <span
            className={`text-[10px] tracking-widest uppercase transition-all duration-200 mt-1 whitespace-nowrap ${
              isActive
                ? "text-[#F7F4EE] font-semibold drop-shadow-[0_0_8px_rgba(179,124,255,0.7)]"
                : "text-[#A5A2A0] group-hover:text-[#F7F4EE] group-hover:drop-shadow-[0_0_4px_rgba(179,124,255,0.4)]"
            } ${isCenter ? "font-bold text-[11px] text-[#B37CFF]" : ""}`}
          >
            {label}
          </span>
        </div>
      </Link>
    </div>
  );
}