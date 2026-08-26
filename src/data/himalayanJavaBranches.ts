export interface HimalayanJavaBranch {
  id: string;
  name: string;
  neighborhood: string;
  city: string;
  address: string;
  vibe: string;
  hours: string;
  recommendedDrink: string;
}

export const HIMALAYAN_JAVA_BRANCHES: HimalayanJavaBranch[] = [
  {
    id: "thamel",
    name: "Himalayan Java — Thamel Flagship",
    neighborhood: "Tridevi Marg, Thamel",
    city: "Kathmandu",
    address: "Tridevi Marg (Opposite Garden of Dreams), Kathmandu",
    vibe: "High energy, creative hub, warm timber interiors and ambient jazz",
    hours: "07:00 - 21:00",
    recommendedDrink: "Himalayan French Roast / Flat White"
  },
  {
    id: "durbar-marg",
    name: "Himalayan Java — Durbar Marg Lounge",
    neighborhood: "Kingsway / Durbar Marg",
    city: "Kathmandu",
    address: "Annapurna Arcade, Durbar Marg, Kathmandu",
    vibe: "Polished executive lounge, quiet corners for deep reviews",
    hours: "07:30 - 21:30",
    recommendedDrink: "Cortado (Double Ristretto)"
  },
  {
    id: "mandikhatar",
    name: "Himalayan Java — Mandikhatar Garden",
    neighborhood: "Mandikhatar / Golfutar",
    city: "Kathmandu",
    address: "Golfutar Main Rd, Mandikhatar, Kathmandu",
    vibe: "Quiet garden patio, sunlit terrace, design strategy sessions",
    hours: "07:00 - 20:30",
    recommendedDrink: "Nepal Highland Pour-Over"
  },
  {
    id: "jhamsikhel",
    name: "Himalayan Java — Jhamsikhel Patan",
    neighborhood: "Restaurant Row, Jhamsikhel",
    city: "Lalitpur",
    address: "Near British School Rd, Jhamsikhel, Lalitpur",
    vibe: "Designer and architect corridor, relaxed outdoor veranda",
    hours: "07:00 - 21:00",
    recommendedDrink: "Iced Single-Origin Americano"
  },
  {
    id: "bouddha",
    name: "Himalayan Java — Bouddha Stupa View",
    neighborhood: "Bouddha Stupa Circle",
    city: "Kathmandu",
    address: "Bouddhanath Sadak, 3rd Floor Rooftop, Kathmandu",
    vibe: "Iconic prayer-flag view, serene spiritual backdrop",
    hours: "06:30 - 20:30",
    recommendedDrink: "Honey Cinnamon Latte"
  },
  {
    id: "baluwatar",
    name: "Himalayan Java — Baluwatar",
    neighborhood: "Diplomatic Enclave, Baluwatar",
    city: "Kathmandu",
    address: "Near Prime Minister Residence, Baluwatar, Kathmandu",
    vibe: "Calm, discreet, minimal background chatter",
    hours: "07:00 - 20:00",
    recommendedDrink: "Double Espresso Macchiato"
  },
  {
    id: "pokhara-lakeside",
    name: "Himalayan Java — Pokhara Lakeside",
    neighborhood: "Center Point, Lakeside",
    city: "Pokhara",
    address: "Lakeside-6, Center Point, Pokhara",
    vibe: "Phewa lake panorama, mountain air, long-form brainstorms",
    hours: "07:00 - 22:00",
    recommendedDrink: "Organic Cold Brew"
  }
];

export const COFFEE_MENU = [
  { id: "flat-white", name: "Flat White", notes: "Double ristretto, velvety microfoam" },
  { id: "cortado", name: "Cortado", notes: "1:1 ratio espresso & textured warm milk" },
  { id: "french-roast", name: "Himalayan French Roast", notes: "Dark, bold, single-estate mountain beans" },
  { id: "americano", name: "Iced / Hot Americano", notes: "Clean, floral, high-altitude notes" },
  { id: "pour-over", name: "Highland Pour-Over", notes: "Artisanal hand-drip, Typica variety" },
  { id: "cappuccino", name: "Traditional Cappuccino", notes: "Crisp dry foam, dark cacao dusting" }
];
