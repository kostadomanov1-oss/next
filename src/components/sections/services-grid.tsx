import { useTranslations, useLocale } from "next-intl";
import { Section } from "@/components/ui/section";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "@/i18n/navigation";
import { services } from "@/data/services";
import type { Locale } from "@/config/site";
import {
  Flame,
  Factory,
  Thermometer,
  Droplets,
  PipetteIcon,
  Wrench,
} from "lucide-react";

const iconMap: Record<string, React.ComponentType<{ size?: number }>> = {
  Flame,
  Factory,
  Thermometer,
  Droplets,
  PipetteIcon,
  Wrench,
};

export function ServicesGridSection() {
  const t = useTranslations("services");
  const locale = useLocale() as Locale;

  return (
    <Section className="bg-muted/50">
      <div className="mb-12 text-center">
        <h2 className="mb-4 text-3xl font-bold">{t("title")}</h2>
        <p className="text-muted-foreground">{t("subtitle")}</p>
      </div>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((service) => {
          const Icon = iconMap[service.icon];
          return (
            <Card key={service.slug} className="flex flex-col">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                {Icon && <Icon size={24} />}
              </div>
              <h3 className="mb-2 text-lg font-semibold">
                {service.title[locale]}
              </h3>
              <p className="mb-4 flex-1 text-sm text-muted-foreground">
                {service.description[locale]}
              </p>
              <Link href={`/services/${service.slug}`}>
                <Button variant="outline" size="sm">
                  {t("learnMore")}
                </Button>
              </Link>
            </Card>
          );
        })}
      </div>
    </Section>
  );
}
