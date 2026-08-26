import { Box, Palette, PenTool, Shapes, Type } from "lucide-react";
import { DisciplinePage } from "@/components/work/DisciplinePage";

export default function BrandingPage() {
  return (
    <DisciplinePage
      number="02"
      eyebrow="Branding"
      title="Identity with"
      italic="memory built in"
      intro="Distinct marks, typography, color, and visual rules—shaped as one usable system rather than a folder of disconnected assets."
      tags={["Identity systems", "Art direction", "Typography", "Campaign toolkits"]}
      cards={[
        { eyebrow: "Studio identity", title: "Better Call Sam", copy: "A panther-led visual world that balances precision, movement, editorial typography, and a controlled violet accent.", icon: Shapes, meta: "Identity · Digital system", size: "wide", accent: true },
        { eyebrow: "Foundation", title: "Typography architecture", copy: "A disciplined display and body pairing with a responsive golden-ratio hierarchy.", icon: Type, meta: "Editorial · Functional", size: "tall" },
        { eyebrow: "Color", title: "60 / 30 / 10 restraint", copy: "Dark foundation, readable neutral surfaces, and violet used where attention or state truly matters.", icon: Palette, meta: "Contrast checked" },
        { eyebrow: "Craft", title: "Hand-drawn character", copy: "Loose marks and icon gestures soften the system without turning it into decoration.", icon: PenTool, meta: "Icons · Patterns · Marks" },
        { eyebrow: "Delivery", title: "Ready beyond the logo", copy: "Lockups, reusable components, usage rules, and campaign applications keep the identity consistent after handoff.", icon: Box, meta: "Guidelines · Handoff", size: "wide" },
      ]}
    />
  );
}
