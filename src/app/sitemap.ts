import type { MetadataRoute } from "next";
import { siteConfig } from "@/config/site";
import { getAllServiceSlugs } from "@/data/services";
import { getAllProjectSlugs } from "@/data/projects";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = siteConfig.url;
  const locales = siteConfig.locales;

  function localizedUrls(path: string) {
    return locales.map((locale) => ({
      url: `${baseUrl}${locale === siteConfig.defaultLocale ? "" : `/${locale}`}${path}`,
      lastModified: new Date(),
      alternates: {
        languages: Object.fromEntries(
          locales.map((l) => [
            l,
            `${baseUrl}${l === siteConfig.defaultLocale ? "" : `/${l}`}${path}`,
          ]),
        ),
      },
    }));
  }

  const staticPages = [
    "",
    "/services",
    "/projects",
    "/about",
    "/contacts",
    "/faq",
    "/privacy",
  ];

  const servicePages = getAllServiceSlugs().map((s) => `/services/${s}`);
  const projectPages = getAllProjectSlugs().map((p) => `/projects/${p}`);

  const allPaths = [...staticPages, ...servicePages, ...projectPages];

  return allPaths.flatMap((path) => localizedUrls(path));
}
