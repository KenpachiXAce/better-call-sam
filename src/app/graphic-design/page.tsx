"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowUpRight, Maximize2, X, Shield } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface ArtArtifact {
  id: string;
  title: string;
  medium: string;
  year: string;
  dimensions: string;
  description: string;
  style: "poster" | "vinyl" | "monolith" | "generative";
}

const ARTIFACTS: ArtArtifact[] = [
  {
    id: "panther-instinct",
    title: "Panther Instinct // Ceremonial Linework",
    medium: "Screenprint on 350gsm Heavy Black French Paper",
    year: "2026",
    dimensions: "24 x 36 in",
    description: "Original vector ceremonial geometry exploring predator precision, ancestral shields, and stealth typography.",
    style: "poster"
  },
  {
    id: "kathmandu-vinyl",
    title: "Kathmandu Midnight Soundscapes — 2xLP",
    medium: "Gatefold Vinyl Sleeve with Deep Purple Foil & Spot UV",
    year: "2025",
    dimensions: "12 x 12 in",
    description: "Packaging design for Himalayan atmospheric field recordings and midnight synthesizers, built with an asymmetric 12-column Swiss grid.",
    style: "vinyl"
  },
  {
    id: "monolith-book",
    title: "Monolith Concrete Architecture Publication",
    medium: "Hardcover Book, Exposed Thread Binding, Silver Foil",
    year: "2025",
    dimensions: "8.5 x 11 in",
    description: "Editorial book design documenting cast-concrete architecture across Kathmandu, featuring high-contrast duotone photography.",
    style: "monolith"
  },
  {
    id: "wave-generative",
    title: "Wave Interference Generative Vector Study",
    medium: "Algorithmic Vector Art, Archival Giclée Print",
    year: "2026",
    dimensions: "20 x 20 in",
    description: "Mathematical wave calculation simulating acoustic reflections and radar reverberations across void surfaces.",
    style: "generative"
  }
];

export default function GraphicDesignPage() {
  const [selectedArtifact, setSelectedArtifact] = useState<ArtArtifact | null>(null);

  return (
    <div className="w-full max-w-7xl mx-auto px-6 sm:px-12 py-16 flex flex-col gap-12 select-text">
      {/* Top Header */}
      <div className="flex flex-col gap-3 border-b border-[rgba(247,244,238,0.12)] pb-8">
        <div className="flex flex-wrap items-center justify-between gap-4 text-xs text-[#A5A2A0]">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#B37CFF]" />
            <span className="text-[#F7F4EE] uppercase tracking-wider font-semibold">
              DISCIPLINE 04 // VISUAL ARTIFACTS &amp; PRINT
            </span>
          </div>
          <span className="text-[11px] text-[#A5A2A0]">TORCH DISABLED FOR PURE WORK CONTRAST</span>
        </div>

        <h1 className="text-display-lg uppercase font-bold text-[#F7F4EE] tracking-tight mt-2">
          Visual Artifacts
        </h1>

        <p className="text-body-lg text-[#A5A2A0] max-w-3xl leading-relaxed">
          Silk-screen posters, vinyl sleeves, and architectural publications. High-contrast typography and geometric wave vectors. 
          Torch spotlighting is intentionally bypassed here to present uncompressed visual contrast.
        </p>
      </div>

      {/* Artifacts Masonry / Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {ARTIFACTS.map((item) => (
          <article
            key={item.id}
            onClick={() => setSelectedArtifact(item)}
            className="p-8 border border-[rgba(247,244,238,0.14)] bg-[#111214] hover:border-[#B37CFF]/50 transition-all flex flex-col gap-6 cursor-pointer group"
          >
            {/* Visual Canvas Area */}
            <div className="w-full min-h-[300px] bg-[#090A0C] border border-[rgba(247,244,238,0.12)] flex items-center justify-center p-8 relative overflow-hidden">
              {item.style === "poster" && (
                <div className="w-40 h-56 border border-[#B37CFF]/50 bg-[#111214] p-4 flex flex-col items-center justify-center relative">
                  <svg viewBox="0 0 100 140" className="w-full h-full">
                    <polygon points="50,10 90,45 80,105 50,130 20,105 10,45" stroke="#B37CFF" strokeWidth="2" fill="#090A0C" />
                    <circle cx="40" cy="55" r="3" fill="#B37CFF" />
                    <circle cx="60" cy="55" r="3" fill="#B37CFF" />
                    <path d="M 30,85 L 50,100 L 70,85" stroke="#B37CFF" strokeWidth="2" fill="none" />
                  </svg>
                  <div className="font-bold text-[8px] text-[#F7F4EE] uppercase tracking-wider mt-1">PANTHER // 2026</div>
                </div>
              )}

              {item.style === "vinyl" && (
                <div className="w-48 h-48 rounded-full border-4 border-[#4A4750] bg-[#111214] flex items-center justify-center relative shadow-2xl">
                  <div className="w-36 h-36 rounded-full border border-[rgba(247,244,238,0.15)] flex items-center justify-center">
                    <div className="w-16 h-16 rounded-full bg-[#5600A8] border-2 border-[#B37CFF] flex items-center justify-center text-center p-1">
                      <span className="text-[7px] text-[#F7F4EE] font-bold uppercase">2XLP KTM</span>
                    </div>
                  </div>
                </div>
              )}

              {item.style === "monolith" && (
                <div className="w-36 h-48 border-2 border-[#D9D8D5]/50 bg-[#111214] p-4 flex flex-col justify-between shadow-xl">
                  <span className="text-[8px] text-[#A5A2A0]">PUBLICATION</span>
                  <div className="font-bold text-lg uppercase text-[#F7F4EE]">MONOLITH</div>
                  <span className="text-[7px] text-[#A5A2A0]">KATHMANDU 2025</span>
                </div>
              )}

              {item.style === "generative" && (
                <div className="w-44 h-44 border border-[#B37CFF]/40 bg-[#090A0C] flex items-center justify-center">
                  <svg viewBox="0 0 100 100" className="w-full h-full">
                    {[12, 22, 32, 42].map((r, idx) => (
                      <circle key={idx} cx="50" cy="50" r={r} stroke="#B37CFF" strokeWidth="0.8" strokeDasharray="4 3" fill="none" />
                    ))}
                    <line x1="10" y1="50" x2="90" y2="50" stroke="#7A18D6" strokeWidth="1" />
                    <line x1="50" y1="10" x2="50" y2="90" stroke="#7A18D6" strokeWidth="1" />
                  </svg>
                </div>
              )}

              <div className="absolute inset-0 bg-[#090A0C]/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2 text-xs text-[#F7F4EE]">
                <Maximize2 className="w-4 h-4 text-[#B37CFF]" />
                <span>EXPAND ARTIFACT</span>
              </div>
            </div>

            {/* Metadata */}
            <div className="flex flex-col gap-2">
              <div className="flex items-center justify-between text-xs text-[#A5A2A0]">
                <span className="text-[#B37CFF] font-semibold">{item.dimensions}</span>
                <span>{item.year}</span>
              </div>

              <h2 className="text-heading-3 uppercase font-semibold text-[#F7F4EE] group-hover:text-[#B37CFF] transition-colors">
                {item.title}
              </h2>

              <p className="text-body text-[#A5A2A0] text-xs leading-relaxed">
                {item.description}
              </p>

              <div className="pt-3 border-t border-[rgba(247,244,238,0.1)] text-[11px] text-[#A5A2A0]">
                Medium: {item.medium}
              </div>
            </div>
          </article>
        ))}
      </div>

      {/* Expanded Modal */}
      <AnimatePresence>
        {selectedArtifact && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#090A0C]/90 backdrop-blur-xl">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="w-full max-w-2xl border border-[#B37CFF] bg-[#111214] p-8 flex flex-col gap-6 shadow-2xl"
            >
              <div className="flex items-center justify-between border-b border-[rgba(247,244,238,0.12)] pb-4">
                <h3 className="text-heading-3 uppercase font-bold text-[#F7F4EE]">
                  {selectedArtifact.title}
                </h3>
                <button
                  onClick={() => setSelectedArtifact(null)}
                  className="p-1 border border-[rgba(247,244,238,0.2)] hover:border-[#B37CFF] text-[#A5A2A0] hover:text-[#F7F4EE]"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="text-xs grid grid-cols-2 gap-3 p-4 bg-[#090A0C] border border-[rgba(247,244,238,0.1)]">
                <div>
                  <span className="text-[10px] uppercase text-[#A5A2A0]">MEDIUM:</span>
                  <div className="text-[#F7F4EE] mt-0.5">{selectedArtifact.medium}</div>
                </div>
                <div>
                  <span className="text-[10px] uppercase text-[#A5A2A0]">DIMENSIONS:</span>
                  <div className="text-[#B37CFF] mt-0.5">{selectedArtifact.dimensions}</div>
                </div>
              </div>

              <p className="text-sm text-[#A5A2A0] leading-relaxed">
                {selectedArtifact.description}
              </p>

              <div className="flex items-center justify-end pt-4 border-t border-[rgba(247,244,238,0.12)]">
                <button
                  onClick={() => setSelectedArtifact(null)}
                  className="px-5 py-2.5 bg-[#5600A8] hover:bg-[#7A18D6] text-[#F7F4EE] text-xs uppercase font-semibold"
                >
                  Close Preview
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}