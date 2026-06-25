import { useTranslations, useLocale } from "next-intl";
import Image from "next/image";
import { Section } from "@/components/ui/section";
import { Link } from "@/i18n/navigation";
import { services } from "@/data/services";
import type { Locale } from "@/config/site";
import { ArrowRight } from "lucide-react";

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
        {services.map((service) => (
          <Link
            key={service.slug}
            href={`/services/${service.slug}`}
            className="group"
          >
            <div className="flex h-full flex-col overflow-hidden rounded-lg border border-border bg-card shadow-sm transition-all hover:shadow-lg hover:-translate-y-1">
              <div className="relative h-48 w-full shrink-0 overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title[locale]}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>
              <div className="flex flex-1 flex-col p-6">
                <h3 className="mb-2 text-lg font-semibold">
                  {service.title[locale]}
                </h3>
                <p className="mb-4 flex-1 text-sm text-muted-foreground">
                  {service.description[locale]}
                </p>
                <span className="inline-flex items-center gap-1 text-sm font-medium text-primary">
                  {t("learnMore")}
                  <ArrowRight
                    size={16}
                    className="transition-transform group-hover:translate-x-1"
                  />
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </Section>
  );
}
