import { setRequestLocale, getTranslations } from "next-intl/server";
import { createMetadata } from "@/lib/metadata";
import type { Locale } from "@/config/site";
import { FaqSection } from "@/components/sections/faq-section";
import { CtaSection } from "@/components/sections/cta";
import { JsonLd } from "@/components/seo/json-ld";
import { generateFaqSchema } from "@/lib/structured-data";
import { faqItems } from "@/data/faq";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "meta.faq" });
  return createMetadata({
    title: t("title"),
    description: t("description"),
    path: "/faq",
    locale: locale as Locale,
  });
}

export default async function FaqPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const loc = locale as Locale;

  return (
    <>
      <JsonLd
        data={generateFaqSchema(
          faqItems.map((f) => ({
            question: f.question[loc],
            answer: f.answer[loc],
          })),
        )}
      />
      <FaqSection />
      <CtaSection />
    </>
  );
}
