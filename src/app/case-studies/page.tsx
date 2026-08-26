import { BarChart3, BookOpen, Route, Search, Workflow } from "lucide-react";
import { DisciplinePage } from "@/components/work/DisciplinePage";

export default function CaseStudiesPage() {
  return (
    <DisciplinePage
      number="04"
      eyebrow="Case studies"
      title="Decisions before"
      italic="decoration"
      intro="Focused stories about the problem, constraints, design reasoning, collaboration, and evidence behind the final interface."
      tags={["Research", "Process", "Outcomes", "Reflection"]}
      cards={[
        { eyebrow: "Published case study", title: "Prestige Travel Corporation", copy: "See how research and information architecture helped compress a complex luxury booking journey from eleven steps to four.", icon: Route, href: "/case-studies/prestige-travel-corporation", meta: "Read the full case study", size: "wide", accent: true },
        { eyebrow: "01 / Frame", title: "Understand the real problem", copy: "Business goals and user friction are separated from surface requests before concepts begin.", icon: Search, meta: "Evidence · Constraints", size: "tall" },
        { eyebrow: "02 / Structure", title: "Make the path visible", copy: "Flows and content relationships turn a large problem into decisions a team can discuss.", icon: Workflow, meta: "IA · Journey mapping" },
        { eyebrow: "03 / Measure", title: "Show what changed", copy: "Outcomes sit beside design decisions so the work reads as a case—not a screenshot gallery.", icon: BarChart3, meta: "Metrics · Reflection" },
        { eyebrow: "Next release", title: "More stories are being documented", copy: "Education, hospitality, and campaign-system work will be added as permission and evidence are cleared.", icon: BookOpen, meta: "Private walkthrough available", size: "wide" },
      ]}
    />
  );
}
