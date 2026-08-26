import React from "react";

export function TribalPatternSVG({ className = "" }: { className?: string }) {
  return (
    <svg
      className={`w-full h-full pointer-events-none select-none ${className}`}
      xmlns="http://www.w3.org/2000/svg"
      width="100%"
      height="100%"
      fill="none"
    >
      <defs>
        {/* Core Tribal Chevron / Diamond Pattern */}
        <pattern
          id="pantherTribalGrid"
          width="160"
          height="160"
          patternUnits="userSpaceOnUse"
        >
          {/* Central Diamond Motif */}
          <polygon
            points="80,10 150,80 80,150 10,80"
            stroke="#664EAE"
            strokeWidth="1.2"
            strokeDasharray="4 3"
            fill="none"
            opacity="0.7"
          />
          <polygon
            points="80,28 132,80 80,132 28,80"
            stroke="#9B85D9"
            strokeWidth="0.8"
            fill="none"
            opacity="0.5"
          />
          <polygon
            points="80,46 114,80 80,114 46,80"
            stroke="#664EAE"
            strokeWidth="1.4"
            fill="#3A2E63"
            fillOpacity="0.15"
          />

          {/* Stepped Chevrons (West/Southern African inspired geometry) */}
          <path
            d="M 80,56 L 95,70 L 80,84 L 65,70 Z"
            fill="#9B85D9"
            opacity="0.8"
          />
          <path
            d="M 80,0 L 90,10 L 80,20 L 70,10 Z"
            fill="#664EAE"
            opacity="0.4"
          />
          <path
            d="M 80,140 L 90,150 L 80,160 L 70,150 Z"
            fill="#664EAE"
            opacity="0.4"
          />
          <path
            d="M 0,80 L 10,70 L 20,80 L 10,90 Z"
            fill="#664EAE"
            opacity="0.4"
          />
          <path
            d="M 140,80 L 150,70 L 160,80 L 150,90 Z"
            fill="#664EAE"
            opacity="0.4"
          />

          {/* Precision Corner Interlocks */}
          <path
            d="M 0,0 L 35,35 M 160,0 L 125,35 M 0,160 L 35,125 M 160,160 L 125,125"
            stroke="#664EAE"
            strokeWidth="1"
            opacity="0.6"
          />
          <path
            d="M 20,0 L 0,20 M 140,0 L 160,20 M 0,140 L 20,160 M 160,140 L 140,160"
            stroke="#9B85D9"
            strokeWidth="0.75"
            opacity="0.4"
          />

          {/* Dot Fields / Constellation Points */}
          <circle cx="80" cy="80" r="2.5" fill="#9B85D9" />
          <circle cx="40" cy="40" r="1.5" fill="#664EAE" opacity="0.8" />
          <circle cx="120" cy="40" r="1.5" fill="#664EAE" opacity="0.8" />
          <circle cx="40" cy="120" r="1.5" fill="#664EAE" opacity="0.8" />
          <circle cx="120" cy="120" r="1.5" fill="#664EAE" opacity="0.8" />

          {/* Stealth Circuit Telemetry Notches */}
          <line x1="80" y1="0" x2="80" y2="28" stroke="#9B85D9" strokeWidth="0.8" />
          <line x1="80" y1="132" x2="80" y2="160" stroke="#9B85D9" strokeWidth="0.8" />
          <line x1="0" y1="80" x2="28" y2="80" stroke="#9B85D9" strokeWidth="0.8" />
          <line x1="132" y1="80" x2="160" y2="80" stroke="#9B85D9" strokeWidth="0.8" />
        </pattern>

        {/* Secondary Macro Tech Linework Overlay */}
        <pattern
          id="pantherTechGrid"
          width="480"
          height="480"
          patternUnits="userSpaceOnUse"
        >
          <path
            d="M 0,240 H 480 M 240,0 V 480"
            stroke="#3A2E63"
            strokeWidth="0.75"
            strokeDasharray="8 12"
            opacity="0.35"
          />
          <circle
            cx="240"
            cy="240"
            r="160"
            stroke="#664EAE"
            strokeWidth="0.5"
            strokeDasharray="2 6"
            opacity="0.4"
          />
          <circle
            cx="240"
            cy="240"
            r="80"
            stroke="#9B85D9"
            strokeWidth="0.5"
            opacity="0.25"
          />
        </pattern>
      </defs>

      {/* Repeating Pattern Rectangles */}
      <rect width="100%" height="100%" fill="url(#pantherTribalGrid)" />
      <rect width="100%" height="100%" fill="url(#pantherTechGrid)" />
    </svg>
  );
}
