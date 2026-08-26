import { Image, Layers, Package, PenTool, Presentation } from "lucide-react";
import { DisciplinePage } from "@/components/work/DisciplinePage";

export default function GraphicDesignPage() {
  return (
    <DisciplinePage
      number="05"
      eyebrow="Graphic design"
      title="Visual stories with"
      italic="pace and character"
      intro="Editorial compositions, campaign graphics, and presentation systems built around hierarchy rather than visual noise."
      tags={["Campaign art", "Social systems", "Editorial", "Presentation design"]}
      cards={[
        { eyebrow: "Campaign direction", title: "One idea, many useful sizes", copy: "A clear visual premise adapted across hero images, paid social, stories, posts, and landing-page moments.", icon: Image, meta: "Art direction · Production", size: "wide", accent: true },
        { eyebrow: "Composition", title: "Hierarchy does the work", copy: "Typography, image scale, whitespace, and contrast create the route through every frame.", icon: Layers, meta: "Editorial systems", size: "tall" },
        { eyebrow: "Presentation", title: "Stories people can follow", copy: "Decks built around one thought per frame, visual proof, and a clear decision at the end.", icon: Presentation, meta: "Pitch · Case study" },
        { eyebrow: "Packaging", title: "Designed for the real surface", copy: "Concepts respect print constraints, reading distance, product hierarchy, and shelf context.", icon: Package, meta: "Concept · Guidelines" },
        { eyebrow: "Illustration", title: "Original marks over stock decoration", copy: "Hand-drawn accents and custom icon gestures make information warmer and more ownable.", icon: PenTool, meta: "Icons · Motifs · Accents", size: "wide" },
      ]}
    />
  );
}
