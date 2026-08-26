import type { LucideIcon } from "lucide-react";

interface SketchIconProps {
  icon: LucideIcon;
  label?: string;
  size?: "sm" | "md" | "lg";
  tone?: "violet" | "paper";
}

export function SketchIcon({ icon: Icon, label, size = "md", tone = "violet" }: SketchIconProps) {
  return (
    <span
      className={`sketch-icon sketch-icon--${size} sketch-icon--${tone}`}
      aria-label={label}
      aria-hidden={label ? undefined : true}
    >
      <span className="sketch-icon__scribble" aria-hidden="true" />
      <Icon strokeWidth={1.65} />
    </span>
  );
}
