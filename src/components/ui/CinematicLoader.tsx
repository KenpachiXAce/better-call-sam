"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";

export function CinematicLoader() {
  const [progress, setProgress] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    // Only show on the first page load per browser session
    const hasSeenLoader = typeof window !== "undefined" && sessionStorage.getItem("bcs_intro_seen");
    if (hasSeenLoader || shouldReduceMotion) {
      const skipTimer = window.setTimeout(() => {
        if (shouldReduceMotion) {
        sessionStorage.setItem("bcs_intro_seen", "true");
        }
        setIsLoading(false);
      }, 0);
      return () => window.clearTimeout(skipTimer);
    }

    // Lock page scroll while loader is visible
    document.body.style.overflow = "hidden";

    let current = 0;
    const startTime = Date.now();
    const maxDuration = 2200; // Normal max 2.2s

    const timer = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const progressTarget = Math.min(100, Math.floor((elapsed / maxDuration) * 100));

      current += Math.max(1, Math.floor((progressTarget - current) * 0.25));

      if (current >= 100) {
        current = 100;
        setProgress(100);
        clearInterval(timer);

        setTimeout(() => {
          setIsLoading(false);
          document.body.style.overflow = "";
          if (typeof window !== "undefined") {
            sessionStorage.setItem("bcs_intro_seen", "true");
          }
        }, 350);
      } else {
        setProgress(current);
      }
    }, 28);

    // Hard safety timeout: 3.5s max (never traps the user)
    const safetyTimeout = setTimeout(() => {
      clearInterval(timer);
      setProgress(100);
      setIsLoading(false);
      document.body.style.overflow = "";
      if (typeof window !== "undefined") {
        sessionStorage.setItem("bcs_intro_seen", "true");
      }
    }, 3500);

    return () => {
      clearInterval(timer);
      clearTimeout(safetyTimeout);
      document.body.style.overflow = "";
    };
  }, [shouldReduceMotion]);

  if (!isLoading) return null;

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          key="cinematic-loader"
          initial={{ opacity: 1 }}
          exit={{ y: "-100%", opacity: 0.95 }}
          transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
          className="fixed inset-0 z-[100] flex flex-col justify-between bg-[#090A0C] p-8 sm:p-16 select-none"
          role="status"
          aria-live="polite"
          aria-label="Loading portfolio"
        >
          {/* Top Identifier */}
          <div className="flex items-center justify-between text-xs text-[#A5A2A0]">
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#EA2B1F] animate-pulse" />
              <span className="uppercase tracking-widest text-[#F7F4EE]">SAM // STUDIO DIRECT</span>
            </div>
            <span className="text-[10px] text-[rgba(247,244,238,0.4)]">KATHMANDU · NEPAL</span>
          </div>

          {/* Center Brand Wordmark & Progress Orbit */}
          <div className="my-auto flex flex-col items-center justify-center text-center gap-4">
            {/* Lyrical Accent in Editorial Italic */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="font-editorial-italic text-3xl sm:text-4xl text-[#EA2B1F]"
            >
              In case of creativity
            </motion.div>

            {/* Wordmark in Lexend Giga */}
            <motion.h1
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-3xl sm:text-5xl font-bold uppercase tracking-wider text-[#F7F4EE]"
            >
              BETTER CALL SAM
            </motion.h1>

            {/* Orbit / Line Progress with Panther */}
            <div className="relative mt-2 flex h-40 w-64 flex-col justify-end overflow-visible sm:w-80">
              <motion.div
                className="pointer-events-none absolute bottom-2 h-36 w-24"
                style={{ left: `${Math.min(92, Math.max(8, progress))}%`, x: "-50%" }}
                transition={{ ease: "easeOut" }}
              >
                <Image
                  src="/images/panther-motion.png"
                  alt="Running panther"
                  fill
                  priority
                  className="object-contain opacity-95 drop-shadow-[0_0_18px_rgba(179,124,255,0.38)]"
                  sizes="96px"
                />
              </motion.div>
              <div className="w-full h-[2px] bg-[rgba(247,244,238,0.1)] relative overflow-hidden">
                <motion.div
                  className="h-full bg-gradient-to-r from-[#8D120B] via-[#EA2B1F] to-[#FFB4AF]"
                  style={{ width: `${progress}%` }}
                  transition={{ ease: "easeOut" }}
                />
              </div>
            </div>
          </div>

          {/* Bottom Timer Readout */}
          <div className="flex items-end justify-between border-t border-[rgba(247,244,238,0.12)] pt-6 text-xs text-[#A5A2A0]">
            <div className="text-[10px] uppercase tracking-wider text-[rgba(247,244,238,0.5)]">
              PREPARING SYSTEMS &amp; CURATED WORK
            </div>
            <div className="text-2xl sm:text-3xl font-bold text-[#F7F4EE] font-mono tracking-tighter">
              {progress < 10 ? `00${progress}` : progress < 100 ? `0${progress}` : "100"}
              <span className="text-xs text-[#EA2B1F] ml-1 font-normal">%</span>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
