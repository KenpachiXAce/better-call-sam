"use client";

import React, { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { TribalPatternSVG } from "./TribalPatternSVG";

export function TorchReveal() {
  const pathname = usePathname();
  const containerRef = useRef<HTMLDivElement>(null);
  const [isTouch, setIsTouch] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  // Disable torch effect on Graphic Design page to keep raw artwork pure
  const isGraphicPage = pathname === "/graphic-design";

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReducedMotion(mediaQuery.matches);
    const handleMotionChange = (e: MediaQueryListEvent) => setPrefersReducedMotion(e.matches);
    mediaQuery.addEventListener("change", handleMotionChange);

    const touchCheck = "ontouchstart" in window || navigator.maxTouchPoints > 0;
    setIsTouch(touchCheck);

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
      mediaQuery.removeEventListener("change", handleMotionChange);
      cancelAnimationFrame(rafId);
    };
  }, [isTouch, prefersReducedMotion, isGraphicPage]);

  if (isGraphicPage) {
    return (
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden bg-[#090A0C]" aria-hidden="true" />
    );
  }

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden bg-[#090A0C] select-none"
      aria-hidden="true"
    >
      {/* 1. Subtle Static Geometric Foundation Layer (3% Opacity) */}
      <div className="absolute inset-0 opacity-[0.035]">
        <TribalPatternSVG />
      </div>

      {/* 2. Soft Airbrushed Editorial Torch Reveal Layer */}
      <div
        className="absolute inset-0 transition-opacity duration-700"
        style={{
          opacity: prefersReducedMotion ? 0.04 : 0.16,
          maskImage: "radial-gradient(circle 240px at var(--mx, 50vw) var(--my, 50vh), black 0%, rgba(0,0,0,0.6) 45%, transparent 100%)",
          WebkitMaskImage: "radial-gradient(circle 240px at var(--mx, 50vw) var(--my, 50vh), black 0%, rgba(0,0,0,0.6) 45%, transparent 100%)",
          filter: "blur(20px)"
        }}
      >
        <TribalPatternSVG />
      </div>

      {/* 3. Soft Ambient Violet Flare */}
      <div
        className="absolute w-[450px] h-[450px] rounded-full pointer-events-none -translate-x-1/2 -translate-y-1/2 opacity-20"
        style={{
          left: "var(--mx, 50vw)",
          top: "var(--my, 50vh)",
          background: "radial-gradient(circle, rgba(179, 124, 255, 0.16) 0%, rgba(86, 0, 168, 0.06) 50%, transparent 70%)",
          filter: "blur(36px)"
        }}
      />
    </div>
  );
}