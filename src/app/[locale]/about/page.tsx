import { setRequestLocale, getTranslations } from "next-intl/server";
import { createMetadata } from "@/lib/metadata";
import type { Locale } from "@/config/site";
import { Section } from "@/components/ui/section";
import { Card } from "@/components/ui/card";
import { team } from "@/data/team";
import { CtaSection } from "@/components/sections/cta";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "meta.about" });
  return createMetadata({
    title: t("title"),
    description: t("description"),
    path: "/about",
    locale: locale as Locale,
  });
}

const stats = [
  { key: "years", value: "10+" },
  { key: "projects", value: "500+" },
  { key: "clients", value: "450+" },
  { key: "specialists", value: "25" },
] as const;

export default async function AboutPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: "about" });
  const loc = locale as Locale;

  return (
    <>
      <Section className="bg-gradient-to-br from-primary/5 to-background">
        <h1 className="mb-4 text-4xl font-bold">{t("title")}</h1>
        <p className="max-w-2xl text-lg text-muted-foreground">
          {t("subtitle")}
        </p>
      </Section>

      <Section>
        <p className="mx-auto mb-12 max-w-2xl text-center text-lg text-muted-foreground">
          {t("mission")}
        </p>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map(({ key, value }) => (
            <Card key={key} className="text-center">
              <p className="mb-1 text-3xl font-bold text-primary">{value}</p>
              <p className="text-sm text-muted-foreground">
                {t(`stats.${key}`)}
              </p>
            </Card>
          ))}
        </div>
      </Section>

      <Section className="bg-muted/50">
        <h2 className="mb-8 text-center text-2xl font-bold">
          {t("team.title")}
        </h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {team.map((member) => (
            <Card key={member.id} className="text-center">
              <div className="mx-auto mb-4 h-24 w-24 rounded-full bg-muted" />
              <h3 className="font-semibold">{member.name[loc]}</h3>
              <p className="text-sm text-muted-foreground">
                {member.role[loc]}
              </p>
            </Card>
          ))}
        </div>
      </Section>

      <CtaSection />
    </>
  );
}
