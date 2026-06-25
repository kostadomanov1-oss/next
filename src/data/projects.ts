import { type Project, projectSchema } from "@/schemas/project";

const rawProjects: Project[] = [
  {
    slug: "cottage-novorizhskoe",
    title: {
      ru: "Коттедж на Новорижском шоссе",
      en: "Cottage on Novorizhskoe Highway",
    },
    description: {
      ru: "Комплексный монтаж систем отопления, водоснабжения и тёплых полов в загородном доме площадью 350 м².",
      en: "Comprehensive installation of heating, water supply and underfloor heating in a 350 m² country house.",
    },
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80",
    area: "350 м²",
    duration: { ru: "45 дней", en: "45 days" },
    year: 2024,
    services: ["heating", "water-supply", "floor-heating"],
    meta: {
      title: {
        ru: "Коттедж 350 м² — отопление и водоснабжение — ГидроТепло",
        en: "350 m² Cottage — Heating & Water Supply — GidroTeplo",
      },
      description: {
        ru: "Проект комплексного оснащения коттеджа инженерными системами. Отопление, водоснабжение, тёплые полы.",
        en: "Comprehensive engineering systems project for a cottage. Heating, water supply, underfloor heating.",
      },
    },
  },
  {
    slug: "office-center-moscow",
    title: {
      ru: "Бизнес-центр в Москве",
      en: "Business Center in Moscow",
    },
    description: {
      ru: "Проектирование и монтаж котельной и системы отопления для офисного здания на 5 этажей.",
      en: "Design and installation of a boiler room and heating system for a 5-story office building.",
    },
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80",
    area: "2 500 м²",
    duration: { ru: "90 дней", en: "90 days" },
    year: 2024,
    services: ["boiler-installation", "heating"],
    meta: {
      title: {
        ru: "Бизнес-центр — котельная и отопление — ГидроТепло",
        en: "Business Center — Boiler Room & Heating — GidroTeplo",
      },
      description: {
        ru: "Монтаж котельной и системы отопления для бизнес-центра в Москве. 2500 м², 5 этажей.",
        en: "Boiler room and heating installation for a Moscow business center. 2500 m², 5 floors.",
      },
    },
  },
  {
    slug: "townhouse-odintsovo",
    title: {
      ru: "Таунхаус в Одинцово",
      en: "Townhouse in Odintsovo",
    },
    description: {
      ru: "Монтаж водоснабжения, канализации и тёплых полов в таунхаусе 180 м².",
      en: "Water supply, sewage and underfloor heating installation in a 180 m² townhouse.",
    },
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80",
    area: "180 м²",
    duration: { ru: "30 дней", en: "30 days" },
    year: 2023,
    services: ["water-supply", "sewage", "floor-heating"],
    meta: {
      title: {
        ru: "Таунхаус 180 м² — водоснабжение и канализация — ГидроТепло",
        en: "180 m² Townhouse — Water Supply & Sewage — GidroTeplo",
      },
      description: {
        ru: "Комплексный монтаж инженерных систем в таунхаусе. Водоснабжение, канализация, тёплые полы.",
        en: "Comprehensive engineering systems installation in a townhouse. Water supply, sewage, underfloor heating.",
      },
    },
  },
];

export const projects: Project[] = rawProjects.map((p) =>
  projectSchema.parse(p),
);

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getAllProjectSlugs(): string[] {
  return projects.map((p) => p.slug);
}
