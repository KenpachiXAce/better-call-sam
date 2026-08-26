"use client";

import React from "react";
import LiquidGlass from "liquid-glass-react";

interface LiquidGlassCardProps {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  cornerRadius?: number;
  onClick?: () => void;
}

/**
 * LiquidGlassCard — wraps content in the rdev liquid-glass-react effect.
 * Designed for dark backgrounds. Uses 'prominent' mode for maximum visibility.
 */
export default function LiquidGlassCard({
  children,
  className = "",
  style = {},
  cornerRadius = 18,
  onClick,
}: LiquidGlassCardProps) {
  return (
    <LiquidGlass
      mode="prominent"
      cornerRadius={cornerRadius}
      blurAmount={8}
      saturation={1.4}
      displacementScale={40}
      aberrationIntensity={1.5}
      elasticity={0.15}
      className={className}
      style={{ display: "block", width: "100%", height: "100%", ...style }}
      onClick={onClick}
    >
      {children}
    </LiquidGlass>
  );
}
