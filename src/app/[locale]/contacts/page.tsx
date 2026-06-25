import { setRequestLocale, getTranslations } from "next-intl/server";
import { createMetadata } from "@/lib/metadata";
import type { Locale } from "@/config/site";
import { Section } from "@/components/ui/section";
import { Card } from "@/components/ui/card";
import { ContactForm } from "@/components/sections/contact-form";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "meta.contacts" });
  return createMetadata({
    title: t("title"),
    description: t("description"),
    path: "/contacts",
    locale: locale as Locale,
  });
}

export default async function ContactsPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: "contacts" });

  return (
    <>
      <Section className="bg-gradient-to-br from-primary/5 to-background">
        <h1 className="mb-4 text-4xl font-bold">{t("title")}</h1>
        <p className="text-lg text-muted-foreground">{t("subtitle")}</p>
      </Section>

      <Section>
        <div className="mx-auto max-w-lg">
          <Card>
            <ContactForm />
          </Card>
        </div>
      </Section>
    </>
  );
}
