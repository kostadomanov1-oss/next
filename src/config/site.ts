export const siteConfig = {
  name: "ГидроТепло",
  url: "https://gidroteplo.vercel.app",
  locales: ["ru", "en"] as const,
  defaultLocale: "ru" as const,
  contact: {
    phone: "+7 (495) 123-45-67",
    email: "info@gidroteplo.ru",
    address: {
      ru: "г. Москва, ул. Инженерная, д. 15, офис 301",
      en: "15 Inzhenernaya St., Office 301, Moscow, Russia",
    },
  },
  social: {
    telegram: "https://t.me/gidroteplo",
    whatsapp: "https://wa.me/74951234567",
  },
} as const;

export type Locale = (typeof siteConfig.locales)[number];
