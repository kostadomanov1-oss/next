import { useTranslations } from "next-intl";
import { Button } from "@/components/ui/button";
import { Link } from "@/i18n/navigation";
import { Section } from "@/components/ui/section";

export function HeroSection() {
  const t = useTranslations("hero");

  return (
    <Section className="bg-gradient-to-br from-primary/5 via-background to-secondary/5 py-24 lg:py-32">
      <div className="mx-auto max-w-3xl text-center">
        <h1 className="mb-6 text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
          {t("title")}
        </h1>
        <p className="mb-8 text-lg text-muted-foreground sm:text-xl">
          {t("subtitle")}
        </p>
        <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <Link href="/contacts">
            <Button size="lg">{t("cta")}</Button>
          </Link>
          <Link href="/services">
            <Button variant="outline" size="lg">
              {t("secondaryCta")}
            </Button>
          </Link>
        </div>
      </div>
    </Section>
  );
}
