import { useTranslations } from "next-intl";
import { Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { Link } from "@/i18n/navigation";

export function CtaSection() {
  const t = useTranslations("cta");

  return (
    <Section className="bg-primary text-primary-foreground">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="mb-4 text-3xl font-bold">{t("title")}</h2>
        <p className="mb-8 text-primary-foreground/80">{t("subtitle")}</p>
        <Link href="/contacts">
          <Button
            variant="secondary"
            size="lg"
          >
            {t("button")}
          </Button>
        </Link>
      </div>
    </Section>
  );
}
