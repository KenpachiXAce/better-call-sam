"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";

const INTERACTIVE_SELECTOR = "a, button, [role='button'], input, textarea, select, label";

export function PantherCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const finePointer = window.matchMedia("(hover: hover) and (pointer: fine)");
    if (!finePointer.matches) return;

    const root = document.documentElement;
    const cursor = cursorRef.current;
    if (!cursor) return;

    root.classList.add("has-panther-cursor");

    let frame = 0;
    let pointerX = window.innerWidth / 2;
    let pointerY = window.innerHeight / 2;

    const paint = () => {
      cursor.style.transform = `translate3d(${pointerX - 32}px, ${pointerY - 32}px, 0)`;
      frame = 0;
    };

    const handlePointerMove = (event: PointerEvent) => {
      pointerX = event.clientX;
      pointerY = event.clientY;
      cursor.dataset.visible = "true";
      cursor.dataset.interactive = event.target instanceof Element && event.target.closest(INTERACTIVE_SELECTOR) ? "true" : "false";
      if (!frame) frame = window.requestAnimationFrame(paint);
    };

    const handlePointerLeave = () => {
      cursor.dataset.visible = "false";
    };

    window.addEventListener("pointermove", handlePointerMove, { passive: true });
    document.documentElement.addEventListener("mouseleave", handlePointerLeave);

    return () => {
      root.classList.remove("has-panther-cursor");
      window.removeEventListener("pointermove", handlePointerMove);
      document.documentElement.removeEventListener("mouseleave", handlePointerLeave);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <div ref={cursorRef} className="panther-cursor" data-visible="false" data-interactive="false" aria-hidden="true">
      <Image src="/images/panther-cursor.png" alt="" width={64} height={64} priority />
      <span className="panther-cursor__hotspot" />
    </div>
  );
}
