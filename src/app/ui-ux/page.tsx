import { Accessibility, Component, LayoutGrid, Route, Workflow } from "lucide-react";
import { DisciplinePage } from "@/components/work/DisciplinePage";

export default function UIUXPage() {
  return (
    <DisciplinePage
      number="01"
      eyebrow="Product & UI/UX"
      title="Interfaces with"
      italic="a human hand"
      intro="I turn complex requirements into focused journeys, accessible interfaces, and systems engineers can ship without guesswork."
      tags={["UX research", "Information architecture", "Responsive UI", "Design systems"]}
      cards={[
        { eyebrow: "Flagship case study", title: "Prestige Travel Corporation", copy: "A luxury travel booking experience restructured from eleven friction-heavy steps into four clear stages.", icon: Route, href: "/case-studies/prestige-travel-corporation", meta: "12 weeks · Travel", size: "wide", accent: true },
        { eyebrow: "Institutional platform", title: "IIE University", copy: "A scalable 95-page information architecture for programs, admissions, faculty, and campus content.", icon: LayoutGrid, meta: "8 weeks · Education", size: "tall" },
        { eyebrow: "Hospitality", title: "MISC Restaurant", copy: "Editorial menus, useful dietary filters, and a shorter path from discovery to reservation.", icon: Component, meta: "4 weeks · Hospitality" },
        { eyebrow: "Method", title: "Built to be understood", copy: "Flows, prototypes, tokens, states, and handoff notes stay connected from first sketch to QA.", icon: Workflow, meta: "Figma · React awareness" },
        { eyebrow: "Quality bar", title: "Accessibility is structural", copy: "Contrast, hierarchy, keyboard paths, readable type, and 44px minimum interactive targets are designed in early.", icon: Accessibility, meta: "WCAG 2.2 AA", size: "wide" },
      ]}
    />
  );
}
