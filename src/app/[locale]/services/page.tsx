import { setRequestLocale } from "next-intl/server";
import { createMetadata } from "@/lib/metadata";
import { getTranslations } from "next-intl/server";
import type { Locale } from "@/config/site";
import { ServicesGridSection } from "@/components/sections/services-grid";
import { CtaSection } from "@/components/sections/cta";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "meta.services" });
  return createMetadata({
    title: t("title"),
    description: t("description"),
    path: "/services",
    locale: locale as Locale,
  });
}

export default async function ServicesPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <>
      <ServicesGridSection />
      <CtaSection />
    </>
  );
}
