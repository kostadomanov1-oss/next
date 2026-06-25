import { setRequestLocale, getTranslations } from "next-intl/server";
import { createMetadata } from "@/lib/metadata";
import type { Locale } from "@/config/site";
import { siteConfig } from "@/config/site";
import { Section } from "@/components/ui/section";
import { Card } from "@/components/ui/card";
import { ContactForm } from "@/components/sections/contact-form";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

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
  const loc = locale as Locale;

  const contactInfo = [
    { icon: Phone, label: t("info.phone"), value: siteConfig.contact.phone },
    { icon: Mail, label: t("info.email"), value: siteConfig.contact.email },
    { icon: MapPin, label: t("info.address"), value: siteConfig.contact.address[loc] },
    { icon: Clock, label: t("info.workHours"), value: t("info.workHoursValue") },
  ];

  return (
    <>
      <Section className="bg-gradient-to-br from-primary/5 to-background">
        <h1 className="mb-4 text-4xl font-bold">{t("title")}</h1>
        <p className="text-lg text-muted-foreground">{t("subtitle")}</p>
      </Section>

      <Section>
        <div className="grid gap-8 lg:grid-cols-2">
          <div>
            <div className="grid gap-4 sm:grid-cols-2">
              {contactInfo.map(({ icon: Icon, label, value }) => (
                <Card key={label}>
                  <div className="mb-2 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <Icon size={20} />
                  </div>
                  <p className="text-sm text-muted-foreground">{label}</p>
                  <p className="font-medium">{value}</p>
                </Card>
              ))}
            </div>
          </div>
          <Card>
            <ContactForm />
          </Card>
        </div>
      </Section>
    </>
  );
}
