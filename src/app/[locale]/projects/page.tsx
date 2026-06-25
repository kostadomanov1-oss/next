import { setRequestLocale } from "next-intl/server";
import { createMetadata } from "@/lib/metadata";
import { getTranslations } from "next-intl/server";
import type { Locale } from "@/config/site";
import { ProjectsShowcaseSection } from "@/components/sections/projects-showcase";
import { CtaSection } from "@/components/sections/cta";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "meta.projects" });
  return createMetadata({
    title: t("title"),
    description: t("description"),
    path: "/projects",
    locale: locale as Locale,
  });
}

export default async function ProjectsPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <>
      <ProjectsShowcaseSection />
      <CtaSection />
    </>
  );
}
