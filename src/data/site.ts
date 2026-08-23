// All editable content lives here. Swap text and image imports freely.
import heroLiving from "@/assets/hero-living.jpg";
import bedroom1 from "@/assets/bedroom-1.jpg";
import kitchen1 from "@/assets/kitchen-1.jpg";
import dining1 from "@/assets/dining-1.jpg";
import villa1 from "@/assets/villa-1.jpg";
import office1 from "@/assets/office-1.jpg";
import detail1 from "@/assets/detail-1.jpg";
import apartment1 from "@/assets/apartment-1.jpg";
import living2 from "@/assets/living-2.jpg";
import founder from "@/assets/founder.jpg";

export const images = {
  heroLiving,
  bedroom1,
  kitchen1,
  dining1,
  villa1,
  office1,
  detail1,
  apartment1,
  living2,
  founder,
};

export const site = {
  name: "SHAH INTERIOR",
  tagline: "Thoughtful interiors. Timeless spaces.",
  phone: "+91 00000 00000",
  email: "hello@shahinterior.com",
  whatsapp: "https://wa.me/910000000000",
  instagram: "https://instagram.com/shahinterior",
  studio: "Studio Address Line 1, City, State 000000",
};

export const nav = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Services", to: "/services" },
  { label: "Projects", to: "/projects" },
  { label: "Gallery", to: "/gallery" },
  { label: "Contact", to: "/contact" },
] as const;

export type Project = {
  name: string;
  category: "Residential" | "Luxury" | "Commercial";
  location: string;
  image: string;
  featured?: boolean;
};

export const projects: Project[] = [
  {
    name: "The Ivory Residence",
    category: "Residential",
    location: "Ahmedabad",
    image: heroLiving,
    featured: true,
  },
  {
    name: "The Terra Villa",
    category: "Luxury",
    location: "Udaipur",
    image: villa1,
    featured: true,
  },
  {
    name: "Urban Serenity",
    category: "Residential",
    location: "Mumbai",
    image: living2,
    featured: true,
  },
  {
    name: "The Walnut House",
    category: "Luxury",
    location: "Surat",
    image: kitchen1,
    featured: true,
  },
  { name: "Modern Heritage", category: "Residential", location: "Jaipur", image: dining1 },
  { name: "The Minimal Residence", category: "Residential", location: "Pune", image: bedroom1 },
  { name: "Luxe Apartment", category: "Luxury", location: "Bengaluru", image: apartment1 },
  { name: "Contemporary Workspace", category: "Commercial", location: "Delhi NCR", image: office1 },
];

export const projectFilters = ["All", "Residential", "Luxury", "Commercial"] as const;

export type Service = {
  name: string;
  description: string;
  image: string;
};

export const services: Service[] = [
  {
    name: "Residential Interior Design",
    description:
      "Complete home interior design shaped around your daily rhythms, light and long-term comfort.",
    image: heroLiving,
  },
  {
    name: "Luxury Home Interiors",
    description:
      "Refined material palettes, bespoke joinery and layered lighting for high-end residences.",
    image: apartment1,
  },
  {
    name: "Apartment Interiors",
    description:
      "Space-efficient layouts and calm detailing that make compact apartments feel generous.",
    image: living2,
  },
  {
    name: "Villa Interiors",
    description:
      "Architecture-led villa interiors that connect indoor volumes with landscape and light.",
    image: villa1,
  },
  {
    name: "Modular Kitchen Design",
    description:
      "Ergonomic modular kitchen design with premium finishes, storage planning and durable surfaces.",
    image: kitchen1,
  },
  {
    name: "Bedroom Interiors",
    description: "Restful bedrooms with soft textiles, warm woods and considered ambient lighting.",
    image: bedroom1,
  },
  {
    name: "Living Room Design",
    description:
      "Living spaces balanced for conversation, comfort and quiet visual drama around a focal point.",
    image: detail1,
  },
  {
    name: "Commercial Interiors",
    description:
      "Brand-aligned commercial interiors designed for flow, hospitality and lasting impression.",
    image: office1,
  },
  {
    name: "Office Interiors",
    description:
      "Workspaces tuned for focus and collaboration, with acoustic comfort and natural light.",
    image: office1,
  },
  {
    name: "Turnkey Interior Solutions",
    description:
      "End-to-end execution — design, procurement, site supervision and handover in one contract.",
    image: dining1,
  },
];

export const featuredServices = services.slice(0, 6);

export const processSteps = [
  {
    step: "01",
    title: "Discover",
    text: "We listen closely — to how you live, the site, the light and the way you want to feel at home.",
  },
  {
    step: "02",
    title: "Design",
    text: "Layouts, materials and lighting develop together into one clear, buildable narrative.",
  },
  {
    step: "03",
    title: "Create",
    text: "Craftsmen, joiners and suppliers are coordinated under close studio supervision.",
  },
  {
    step: "04",
    title: "Transform",
    text: "Styling and handover — the space becomes calm, complete and unmistakably yours.",
  },
];

export const testimonials = [
  {
    quote:
      "They understood our home before we could describe it. Every corner feels intentional and calm.",
    author: "A. Mehta",
    role: "Private Residence, Ahmedabad",
  },
  {
    quote:
      "Impeccable material choices and a level of site detailing we simply hadn't seen before.",
    author: "R. & S. Kapoor",
    role: "Villa Owners, Udaipur",
  },
  {
    quote: "Our workspace now feels warm and considered. The team delivered on time, end to end.",
    author: "N. Shah",
    role: "Founder, Studio Practice",
  },
];

export const stats = [
  { value: "50+", label: "Projects Delivered" },
  { value: "10+", label: "Years of Experience" },
  { value: "100+", label: "Happy Clients" },
];

export type GalleryItem = {
  image: string;
  alt: string;
  category: "Living" | "Kitchen" | "Bedroom" | "Dining" | "Office";
};

export const galleryCategories = [
  "All",
  "Living",
  "Kitchen",
  "Bedroom",
  "Dining",
  "Office",
] as const;

export const gallery: GalleryItem[] = [
  { image: heroLiving, alt: "Luxury living room with arched windows", category: "Living" },
  { image: kitchen1, alt: "Walnut modular kitchen with marble island", category: "Kitchen" },
  { image: bedroom1, alt: "Warm minimal bedroom with oak headboard", category: "Bedroom" },
  { image: dining1, alt: "Dining area with sculptural pendant light", category: "Dining" },
  { image: office1, alt: "Minimal office interior with oak joinery", category: "Office" },
  { image: living2, alt: "Lounge corner with armchair and floor lamp", category: "Living" },
  { image: apartment1, alt: "Luxury apartment living space in ivory tones", category: "Living" },
  { image: detail1, alt: "Curved plaster architectural detail", category: "Living" },
  { image: villa1, alt: "Villa courtyard in travertine stone", category: "Living" },
  { image: founder, alt: "Designer at the Shah Interior studio", category: "Office" },
  { image: kitchen1, alt: "Kitchen cabinetry detail in warm walnut", category: "Kitchen" },
  { image: bedroom1, alt: "Bedroom textiles in cream linen", category: "Bedroom" },
];
