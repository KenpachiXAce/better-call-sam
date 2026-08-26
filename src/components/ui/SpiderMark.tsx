import Image from "next/image";

interface SpiderMarkProps {
  size?: "sm" | "md" | "lg";
  tone?: "red" | "ink" | "muted";
  className?: string;
}

export function SpiderMark({ size = "sm", tone = "red", className = "" }: SpiderMarkProps) {
  return (
    <span className={`spider-mark spider-mark--${size} spider-mark--${tone} ${className}`} aria-hidden="true">
      <Image src="/images/spidey.png" alt="" fill sizes="80px" />
    </span>
  );
}
