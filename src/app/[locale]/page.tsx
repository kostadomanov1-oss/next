import { setRequestLocale } from "next-intl/server";
import { createMetadata } from "@/lib/metadata";
import { getTranslations } from "next-intl/server";
import type { Locale } from "@/config/site";
import { HeroSection } from "@/components/sections/hero";
import { BenefitsSection } from "@/components/sections/benefits";
import { ServicesGridSection } from "@/components/sections/services-grid";
import { ProjectsShowcaseSection } from "@/components/sections/projects-showcase";
import { TestimonialsSection } from "@/components/sections/testimonials";
import { FaqSection } from "@/components/sections/faq-section";
import { CtaSection } from "@/components/sections/cta";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "meta.home" });
  return createMetadata({
    title: t("title"),
    description: t("description"),
    path: "",
    locale: locale as Locale,
  });
}

export default async function HomePage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <>
      <HeroSection />
      <BenefitsSection />
      <ServicesGridSection />
      <ProjectsShowcaseSection />
      <TestimonialsSection />
      <FaqSection />
      <CtaSection />
    </>
  );
}
