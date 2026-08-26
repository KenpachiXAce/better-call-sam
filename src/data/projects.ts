export interface VerifiedOwner {
  name: string;
  preferredBrand: string;
  tagline: string;
  location: string;
  role: string;
  experienceMonths: number;
  totalProjects: string;
  travelApps: number;
  universityPages: number;
  email: string;
  education: {
    degree: string;
    institution: string;
    location: string;
    years: string;
  };
  services: {
    id: string;
    title: string;
    summary: string;
    deliverables: string[];
    whenToHire: string;
  }[];
  skills: {
    design: string[];
    technical: string[];
    tools: string[];
  };
}

export const OWNER_DATA: VerifiedOwner = {
  name: "Sameer Chaudhary",
  preferredBrand: "Better Call Sam",
  tagline: "In case of creativity",
  location: "Kathmandu, Nepal",
  role: "Product Designer & UI/UX Designer",
  experienceMonths: 10,
  totalProjects: "10+",
  travelApps: 3,
  universityPages: 95,
  email: "sameer974939@gmail.com",
  education: {
    degree: "BSc IT (Bachelor of Science in Information Technology)",
    institution: "Techspire College",
    location: "Kathmandu, Nepal",
    years: "2024–2027"
  },
  services: [
    {
      id: "product-uiux",
      title: "Product & UI/UX Design",
      summary: "Research, flows, interfaces and prototypes built around real user needs.",
      deliverables: ["User flows & journey maps", "Wireframes & interactive prototypes", "WCAG 2.2 AA compliant UI", "Design system documentation"],
      whenToHire: "When you are launching a new digital product or need to solve friction in existing user onboarding and conversion funnels."
    },
    {
      id: "responsive-design-systems",
      title: "Websites & Design Systems",
      summary: "Responsive websites and reusable systems ready for development.",
      deliverables: ["Responsive desktop/mobile layouts", "Semantic token architecture", "Component variants & auto-layout", "Engineering handoff specs"],
      whenToHire: "When your team is scaling past disjointed one-off pages and needs a cohesive, buildable design foundation."
    },
    {
      id: "email-campaigns",
      title: "Email & Campaign Design",
      summary: "Clear campaign systems designed for attention and action.",
      deliverables: ["Responsive email templates", "Marketing banner systems", "Campaign landing page design", "Typography hierarchy guidelines"],
      whenToHire: "When customer retention and outbound campaigns need visual polish without sacrificing cross-client deliverability."
    },
    {
      id: "branding-visual",
      title: "Branding & Visual Communication",
      summary: "Focused identities that stay consistent across every touchpoint.",
      deliverables: ["Logo marks & lockups", "Color palettes & type pairings", "Packaging & collateral guidelines", "Vector icon sets"],
      whenToHire: "When your brand identity needs a memorable visual voice that translates effortlessly across digital and print touchpoints."
    }
  ],
  skills: {
    design: [
      "UX Research",
      "Information Architecture",
      "User Flows",
      "Wireframing",
      "Responsive UI Design",
      "Accessibility (WCAG 2.2 AA)",
      "Interaction Design",
      "High-Fidelity Prototyping",
      "Design Systems",
      "Developer Handoff",
      "Branding & Packaging"
    ],
    technical: [
      "HTML & Semantic Markup",
      "CSS & Tailwind CSS",
      "JavaScript & React",
      "Python Basics",
      "Java Basics",
      "Git & GitHub Workflow"
    ],
    tools: [
      "Figma",
      "Framer",
      "Adobe Photoshop",
      "Canva",
      "Miro",
      "Notion",
      "ClickUp",
      "Slack",
      "Plane"
    ]
  }
};

export interface FeaturedProject {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  category: "UI/UX & Product" | "Web Platform" | "Hospitality" | "Email & Campaign" | "Visual & Identity";
  agencyAttribution?: string;
  sameerRole: string;
  timeline: string;
  year: string;
  industry: string;
  verifiedResults?: {
    label: string;
    value: string;
    detail: string;
  }[];
  overview: string;
  keyContributions: string[];
  href: string;
  isFlagship?: boolean;
}

export const FEATURED_PROJECTS: FeaturedProject[] = [
  {
    id: "prestige-travel-corporation",
    number: "01",
    title: "Prestige Travel Corporation",
    subtitle: "Re-architecting luxury travel booking from 11 friction-heavy steps down to 4 intuitive stages.",
    category: "UI/UX & Product",
    agencyAttribution: "Arcodify Agency Pvt. Ltd.",
    sameerRole: "Contributed to UX research, information architecture, accessible UI design, interactive prototyping, and developer handoff",
    timeline: "12 Weeks",
    year: "2025",
    industry: "Luxury Travel & Tourism",
    isFlagship: true,
    href: "/case-studies/prestige-travel-corporation",
    verifiedResults: [
      { label: "Booking Flow", value: "11 → 4 Steps", detail: "Simplified 4-stage booking flow" },
      { label: "Booking Completion", value: "+156%", detail: "Published conversion surge" },
      { label: "Bounce Rate", value: "68% → 22%", detail: "Measured exit rate reduction" },
      { label: "Avg Booking Time", value: "14m → 5m", detail: "Dramatic user task efficiency" }
    ],
    overview: "Prestige Travel Corporation required a modern, accessible web application to showcase high-tier travel packages and streamline complex multi-guest reservations. Sameer contributed as part of the Arcodify agency team across user journeys, responsive interface layouts, and Figma design tokens.",
    keyContributions: [
      "Mapped user drop-off points across the legacy 11-step reservation checkout flow",
      "Structured a unified 4-stage booking wizard (Selection -> Traveler Details -> Add-ons -> Instant Confirmation)",
      "Designed responsive package comparison tables and dynamic date-picker widgets",
      "Ensured WCAG 2.1 AA color contrast compliance across travel imagery and overlays"
    ]
  },
  {
    id: "iie-university",
    number: "02",
    title: "IIE University Web Platform",
    subtitle: "Structuring a comprehensive 95-page academic portal for prospective students and faculty.",
    category: "Web Platform",
    agencyAttribution: "Arcodify Agency Pvt. Ltd.",
    sameerRole: "Information architecture, responsive page structures, component hierarchy, and developer handoff",
    timeline: "8 Weeks",
    year: "2025",
    industry: "Higher Education",
    href: "/ui-ux",
    overview: "A massive 95-page institutional university website encompassing departmental programs, admissions portals, campus event calendars, and faculty directories.",
    keyContributions: [
      "Organized multi-tier navigation hierarchy across 14 academic departments and admissions pathways",
      "Created reusable modular templates for course detail pages and faculty bios",
      "Standardized typography scale and grid spacing across desktop, tablet, and mobile breakpoints"
    ]
  },
  {
    id: "misc-restaurant",
    number: "03",
    title: "MISC Restaurant & Lounge",
    subtitle: "Editorial culinary storytelling, digital menu hierarchy, and seamless reservation journeys.",
    category: "Hospitality",
    sameerRole: "Customer-facing content hierarchy, menu interaction patterns, and guided a junior contributor",
    timeline: "4 Weeks",
    year: "2025",
    industry: "Hospitality & Dining",
    href: "/ui-ux",
    overview: "A refined digital presence for MISC Restaurant, spotlighting seasonal tasting menus, beverage pairings, private event bookings, and mobile-friendly reservation links.",
    keyContributions: [
      "Crafted an elegant dark editorial aesthetic spotlighting culinary photography and menu curation",
      "Designed an intuitive dietary filtering system (Vegan, Gluten-Free, Chef Special) for the digital menu",
      "Guided and mentored a junior designer through layout consistency and component structuring"
    ]
  },
  {
    id: "everest-mails",
    number: "04",
    title: "Everest Mails & Campaign Systems",
    subtitle: "High-deliverability editorial email templates and automated onboarding sequences for regional brands.",
    category: "Email & Campaign",
    sameerRole: "Email design systems, responsive HTML table layouts, and visual promotional banners",
    timeline: "Ongoing",
    year: "2025–2026",
    industry: "E-commerce & SaaS",
    href: "/email-design",
    overview: "Curated newsletter and promotional campaign design systems for client communications, engineered for cross-client rendering consistency across Apple Mail, Gmail, and Outlook.",
    keyContributions: [
      "Built responsive email wireframes with clear single-column mobile adaptation",
      "Developed high-contrast call-to-action blocks and typography hierarchies",
      "Created reusable modular email components for rapid recurring dispatch"
    ]
  }
];
