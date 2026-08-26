"use client";

import React, { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import { useReducedMotion } from "framer-motion";
import { TribalPatternSVG } from "./TribalPatternSVG";

export function TorchReveal() {
  const pathname = usePathname();
  const containerRef = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion() ?? false;

  // Disable torch effect on Graphic Design page to keep raw artwork pure
  const isGraphicPage = pathname === "/graphic-design";

  useEffect(() => {
    const isTouch = "ontouchstart" in window || navigator.maxTouchPoints > 0;

    let rafId: number;
    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    let currentX = mouseX;
    let currentY = mouseY;
    let isMoving = false;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      isMoving = true;
    };

    const animate = () => {
      if (!prefersReducedMotion && !isGraphicPage) {
        if (isTouch) {
          const time = Date.now() * 0.0006;
          const driftX = window.innerWidth * (0.5 + 0.25 * Math.sin(time));
          const driftY = window.innerHeight * (0.4 + 0.2 * Math.cos(time * 0.7));
          currentX += (driftX - currentX) * 0.02;
          currentY += (driftY - currentY) * 0.02;
        } else if (isMoving) {
          currentX += (mouseX - currentX) * 0.12;
          currentY += (mouseY - currentY) * 0.12;
        }

        if (containerRef.current) {
          containerRef.current.style.setProperty("--mx", `${currentX.toFixed(1)}px`);
          containerRef.current.style.setProperty("--my", `${currentY.toFixed(1)}px`);
        }
      }
      rafId = requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    rafId = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(rafId);
    };
  }, [prefersReducedMotion, isGraphicPage]);

  if (isGraphicPage) {
    return (
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden bg-[#090A0C]" aria-hidden="true" />
    );
  }

  return (
    <div
      ref={containerRef}
      className="pointer-events-none fixed inset-0 z-[15] overflow-hidden bg-transparent mix-blend-screen select-none"
      aria-hidden="true"
    >
      {/* 1. Subtle Static Geometric Foundation Layer */}
      <div className="absolute inset-0 opacity-[0.05]">
        <TribalPatternSVG />
      </div>

      {/* 2. Soft Airbrushed Editorial Torch Reveal Layer */}
      <div
        className="absolute inset-0 transition-opacity duration-700"
        style={{
          opacity: prefersReducedMotion ? 0.07 : 0.42,
          maskImage: "radial-gradient(circle 330px at var(--mx, 50vw) var(--my, 50vh), black 0%, rgba(0,0,0,0.82) 46%, transparent 100%)",
          WebkitMaskImage: "radial-gradient(circle 330px at var(--mx, 50vw) var(--my, 50vh), black 0%, rgba(0,0,0,0.82) 46%, transparent 100%)",
          filter: "blur(11px)"
        }}
      >
        <TribalPatternSVG />
      </div>

      {/* 3. Soft Ambient Violet Flare */}
      <div
        className="pointer-events-none absolute h-[620px] w-[620px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-35"
        style={{
          left: "var(--mx, 50vw)",
          top: "var(--my, 50vh)",
          background: "radial-gradient(circle, rgba(179, 124, 255, 0.24) 0%, rgba(86, 0, 168, 0.09) 48%, transparent 72%)",
          filter: "blur(30px)"
        }}
      />
    </div>
  );
}
