import { siteConfig } from "@/config/site";
import type { Locale } from "@/config/site";

export function generateLocalBusinessSchema(locale: Locale) {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: siteConfig.name,
    description:
      locale === "ru"
        ? "Профессиональный монтаж систем отопления и водоснабжения в Москве"
        : "Professional heating and water supply installation in Moscow",
    telephone: siteConfig.contact.phone,
    email: siteConfig.contact.email,
    address: {
      "@type": "PostalAddress",
      addressLocality: locale === "ru" ? "Москва" : "Moscow",
      addressCountry: "RU",
      streetAddress: siteConfig.contact.address[locale],
    },
    url: siteConfig.url,
    openingHours: "Mo-Fr 09:00-18:00, Sa 10:00-15:00",
  };
}

export function generateOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteConfig.name,
    url: siteConfig.url,
    contactPoint: {
      "@type": "ContactPoint",
      telephone: siteConfig.contact.phone,
      contactType: "customer service",
      availableLanguage: ["Russian", "English"],
    },
  };
}

export function generateServiceSchema(
  service: { title: string; description: string },
  locale: Locale,
) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title,
    description: service.description,
    provider: {
      "@type": "LocalBusiness",
      name: siteConfig.name,
      telephone: siteConfig.contact.phone,
    },
    areaServed: {
      "@type": "City",
      name: locale === "ru" ? "Москва" : "Moscow",
    },
  };
}

export function generateFaqSchema(
  items: Array<{ question: string; answer: string }>,
) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}
