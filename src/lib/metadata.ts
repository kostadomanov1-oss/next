import type { Metadata } from "next";
import { siteConfig, type Locale } from "@/config/site";

interface MetadataParams {
  title: string;
  description: string;
  keywords?: string[];
  path: string;
  locale: Locale;
  noIndex?: boolean;
}

export function createMetadata({
  title,
  description,
  keywords,
  path,
  locale,
  noIndex = false,
}: MetadataParams): Metadata {
  const url = `${siteConfig.url}${locale === siteConfig.defaultLocale ? "" : `/${locale}`}${path}`;
  const alternateLocale = locale === "ru" ? "en" : "ru";
  const alternateUrl = `${siteConfig.url}${alternateLocale === siteConfig.defaultLocale ? "" : `/${alternateLocale}`}${path}`;

  return {
    title,
    description,
    keywords,
    alternates: {
      canonical: url,
      languages: {
        ru: `${siteConfig.url}${path}`,
        en: `${siteConfig.url}/en${path}`,
      },
    },
    openGraph: {
      title,
      description,
      url,
      siteName: siteConfig.name,
      locale: locale === "ru" ? "ru_RU" : "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
    robots: noIndex
      ? { index: false, follow: false }
      : { index: true, follow: true },
  };
}
