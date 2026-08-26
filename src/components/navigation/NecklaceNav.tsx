"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { ClawPendant } from "./ClawPendant";
import { X } from "lucide-react";

interface NavItem {
  id: string;
  label: string;
  href: string;
  angleDeg: number;
  offsetY: number;
  offsetX?: number;
  isCenter?: boolean;
  isIsolated?: boolean;
}

export function NecklaceNav() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const beadButtonRef = useRef<HTMLButtonElement>(null);
  const dialogRef = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();

  // Scroll listener for compact sticky state
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 80);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Accessibility: Focus trap & Escape key handler for mobile dialog
  useEffect(() => {
    if (!mobileMenuOpen) return;

    // Prevent background scrolling while open
    document.body.style.overflow = "hidden";

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setMobileMenuOpen(false);
        beadButtonRef.current?.focus();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [mobileMenuOpen]);

  const handleCloseMenu = () => {
    setMobileMenuOpen(false);
    beadButtonRef.current?.focus();
  };

  // The 6 main necklace arc claws + 1 isolated contact claw in exact verified order:
  // UI/UX -> Branding -> Email Design -> Home (Center) -> Case Studies -> Graphic Design -> Contact
  const arcClaws: NavItem[] = [
    { id: "ui-ux", label: "UI/UX", href: "/ui-ux", angleDeg: -45, offsetY: isScrolled ? 0 : 2 },
    { id: "branding", label: "Branding", href: "/branding", angleDeg: -26, offsetY: isScrolled ? 4 : 10 },
    { id: "email-design", label: "Email Design", href: "/email-design", angleDeg: -10, offsetY: isScrolled ? 8 : 18 },
    { id: "home", label: "BCS // Home", href: "/", angleDeg: 0, offsetY: isScrolled ? 12 : 24, isCenter: true },
    { id: "case-studies", label: "Case Studies", href: "/case-studies", angleDeg: 12, offsetY: isScrolled ? 8 : 18 },
    { id: "graphic-design", label: "Graphic Design", href: "/graphic-design", angleDeg: 28, offsetY: isScrolled ? 4 : 10 }
  ];

  const contactClaw: NavItem = {
    id: "contact",
    label: "Contact",
    href: "/contact",
    angleDeg: 46,
    offsetY: isScrolled ? 0 : 2,
    isIsolated: true
  };

  const allNavItems: NavItem[] = [...arcClaws, contactClaw];

  return (
    <header className="sticky top-0 z-50 w-full bg-[#090A0C]/90 backdrop-blur-md border-b border-[rgba(247,244,238,0.1)] transition-all duration-300">
      {/* Desktop signature necklace navigation */}
      <div
        className={`hidden lg:flex items-start justify-between max-w-7xl mx-auto px-8 transition-all duration-300 ${
          isScrolled ? "pt-1 pb-2 max-h-[110px]" : "pt-2 pb-4 max-h-[145px]"
        }`}
      >
        {/* Left Ceremonial Chain Band */}
        <div className="flex-1 pt-3 flex items-center pr-4">
          <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-[rgba(247,244,238,0.15)] to-[#4A4750]" />
          <div className="w-1.5 h-1.5 rotate-45 border border-[#B37CFF]/50 bg-[#090A0C] -ml-0.5" />
        </div>

        {/* The 6 Main Arc Pendants */}
        <nav
          className="flex items-start justify-center gap-6 xl:gap-9 pt-1 relative"
          aria-label="Primary Ceremonial Navigation"
        >
          {arcClaws.map((claw) => {
            const isActive = claw.href === "/" ? pathname === "/" : pathname.startsWith(claw.href);
            return (
              <ClawPendant
                key={claw.id}
                id={claw.id}
                label={claw.label}
                href={claw.href}
                isActive={isActive}
                isCenter={claw.isCenter}
                angleDeg={claw.angleDeg}
                offsetY={claw.offsetY}
              />
            );
          })}
        </nav>

        {/* Separator Chain Link Spacer */}
        <div className="w-6 xl:w-10 pt-3 flex items-center px-1">
          <div className="h-[1px] w-full bg-gradient-to-r from-[#4A4750] to-[#5600A8] border-t border-dashed border-[#B37CFF]/30" />
        </div>

        {/* 7th Isolated Contact Stylus */}
        <div className="pt-1 flex items-start pl-1">
          <ClawPendant
            id={contactClaw.id}
            label={contactClaw.label}
            href={contactClaw.href}
            isActive={pathname === "/contact"}
            isIsolated={true}
            angleDeg={contactClaw.angleDeg}
            offsetY={contactClaw.offsetY}
          />
        </div>

        {/* Right Ceremonial Chain Band */}
        <div className="flex-1 pt-3 flex items-center pl-4">
          <div className="w-1.5 h-1.5 rotate-45 border border-[#B37CFF]/50 bg-[#090A0C] -mr-0.5" />
          <div className="h-[1px] w-full bg-gradient-to-r from-[#4A4750] via-[rgba(247,244,238,0.15)] to-transparent" />
        </div>
      </div>

      {/* Mobile compact bead control */}
      <div className="lg:hidden flex items-center justify-between px-4 py-2.5">
        <Link href="/" className="flex items-center gap-2">
          <span className="font-bold text-sm tracking-wider text-[#F7F4EE]">SAM</span>
          <span className="text-[10px] text-[#A5A2A0]">/ Product &amp; UIUX</span>
        </Link>

        {/* Accessible Compact Bead Control */}
        <button
          ref={beadButtonRef}
          onClick={() => setMobileMenuOpen(true)}
          className="w-11 h-11 rounded-full border border-[rgba(247,244,238,0.25)] bg-[#111214] hover:border-[#B37CFF] flex items-center justify-center p-1 relative group focus-visible:ring-2 focus-visible:ring-[#B37CFF] transition-all shadow-[0_0_12px_rgba(0,0,0,0.5)]"
          aria-label="Open navigation menu"
          aria-expanded={mobileMenuOpen}
        >
          {/* Outer Faceted Metal Rim */}
          <div className="w-full h-full rounded-full border border-[#D9D8D5]/40 flex items-center justify-center relative overflow-hidden">
            {/* Inner Violet Jewel Stone */}
            <div className="w-4 h-4 rounded-full bg-[#5600A8] border border-[#B37CFF] group-hover:bg-[#7A18D6] group-hover:shadow-[0_0_10px_#B37CFF] transition-all flex items-center justify-center">
              <span className="w-1.5 h-1.5 rounded-full bg-[#F7F4EE] opacity-80" />
            </div>
          </div>
        </button>
      </div>

      {/* Accessible mobile dialog */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <div
            ref={dialogRef}
            role="dialog"
            aria-modal="true"
            aria-label="Navigation Menu"
            className="fixed inset-0 z-50 flex flex-col justify-between bg-[#090A0C]/98 backdrop-blur-2xl p-6 sm:p-8"
          >
            {/* Top Bar of Modal */}
            <div className="flex items-center justify-between border-b border-[rgba(247,244,238,0.12)] pb-4">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#B37CFF]" />
                <span className="font-semibold text-sm tracking-wider text-[#F7F4EE]">NAVIGATION</span>
              </div>
              <button
                onClick={handleCloseMenu}
                className="p-2 border border-[rgba(247,244,238,0.2)] hover:border-[#B37CFF] text-[#A5A2A0] hover:text-[#F7F4EE] transition-colors"
                aria-label="Close navigation menu"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Menu Links in Necklace Order */}
            <nav className="flex flex-col gap-2 my-auto py-6" aria-label="Mobile Navigation Links">
              {allNavItems.map((item, idx) => {
                const isActive = item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);
                return (
                  <motion.div
                    key={item.id}
                    initial={shouldReduceMotion ? {} : { opacity: 0, x: -15 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.04, duration: 0.2 }}
                  >
                    <Link
                      href={item.href}
                      onClick={handleCloseMenu}
                      className={`flex items-center justify-between px-4 py-3.5 border transition-all text-sm ${
                        isActive
                          ? "border-[#B37CFF] bg-[#5600A8]/25 text-[#F7F4EE] font-semibold shadow-[0_0_12px_rgba(179,124,255,0.25)]"
                          : "border-[rgba(247,244,238,0.1)] bg-[#111214]/60 text-[#A5A2A0] hover:border-[#B37CFF]/50 hover:text-[#F7F4EE]"
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <span className="text-[10px] text-[#B37CFF]">0{idx + 1}</span>
                        <span className="tracking-wider uppercase">{item.label}</span>
                      </div>
                      {isActive && <span className="text-[10px] text-[#B37CFF] uppercase font-bold">[ACTIVE]</span>}
                      {item.isIsolated && !isActive && <span className="text-[10px] text-[rgba(247,244,238,0.4)] uppercase">[DIRECT]</span>}
                    </Link>
                  </motion.div>
                );
              })}
            </nav>

            {/* Footer of Modal */}
            <div className="pt-4 border-t border-[rgba(247,244,238,0.12)] flex items-center justify-between text-xs text-[#A5A2A0]">
              <span>Kathmandu, Nepal</span>
              <Link
                href="/contact"
                onClick={handleCloseMenu}
                className="text-[#B37CFF] hover:underline font-semibold"
              >
                Start a project &rarr;
              </Link>
            </div>
          </div>
        )}
      </AnimatePresence>
    </header>
  );
}
