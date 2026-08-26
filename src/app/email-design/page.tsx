import { Gauge, LayoutTemplate, Mail, Send, Smartphone } from "lucide-react";
import { DisciplinePage } from "@/components/work/DisciplinePage";

export default function EmailDesignPage() {
  return (
    <DisciplinePage
      number="03"
      eyebrow="Email design"
      title="Campaigns that"
      italic="keep moving"
      intro="Retention-focused emails with clear hierarchy, connected storytelling, useful product presentation, and no dead ends in the scroll."
      tags={["Lifecycle flows", "Campaign design", "Klaviyo systems", "Creative direction"]}
      cards={[
        { eyebrow: "Everest Mails", title: "Conversion-minded campaign systems", copy: "Reusable email structures that connect message, visual rhythm, trust, product detail, and the next action.", icon: Mail, meta: "E-commerce · Retention", size: "wide", accent: true },
        { eyebrow: "Mobile first", title: "One thumb, one clear path", copy: "Readable type, useful spacing, obvious controls, and assets composed for the small screen first.", icon: Smartphone, meta: "Responsive · Accessible", size: "tall" },
        { eyebrow: "System", title: "Modules without sameness", copy: "Flexible sections make recurring production faster while each campaign still feels intentional.", icon: LayoutTemplate, meta: "Templates · Components" },
        { eyebrow: "Performance", title: "Lightweight by design", copy: "Optimized image weight, safe content width, resilient contrast, and graceful dark-mode behavior.", icon: Gauge, meta: "Deliverability aware" },
        { eyebrow: "Lifecycle", title: "Flows that continue the relationship", copy: "Welcome, browse, cart, post-purchase, win-back, and campaign touchpoints designed as one customer journey.", icon: Send, meta: "Strategy · Design · QA", size: "wide" },
      ]}
    />
  );
}
