import { setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import { createMetadata } from "@/lib/metadata";
import { getServiceBySlug, getAllServiceSlugs } from "@/data/services";
import type { Locale } from "@/config/site";
import { Section } from "@/components/ui/section";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "@/i18n/navigation";
import { JsonLd } from "@/components/seo/json-ld";
import {
  generateServiceSchema,
  generateFaqSchema,
} from "@/lib/structured-data";
import { FaqSection } from "@/components/sections/faq-section";
import { CtaSection } from "@/components/sections/cta";
import { CheckCircle } from "lucide-react";

type Props = { params: Promise<{ locale: string; slug: string }> };

export function generateStaticParams() {
  return getAllServiceSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props) {
  const { locale, slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return {};

  const loc = locale as Locale;
  return createMetadata({
    title: service.meta.title[loc],
    description: service.meta.description[loc],
    keywords: service.meta.keywords[loc],
    path: `/services/${slug}`,
    locale: loc,
  });
}

export default async function ServicePage({ params }: Props) {
  const { locale, slug } = await params;
  setRequestLocale(locale);

  const service = getServiceBySlug(slug);
  if (!service) notFound();

  const loc = locale as Locale;
  const relatedServices = service.relatedSlugs
    .map((s) => getServiceBySlug(s))
    .filter(Boolean);

  const faqData = service.faq.map((f, i) => ({
    id: `service-faq-${i}`,
    question: f.question,
    answer: f.answer,
    category: "service",
  }));

  return (
    <>
      <JsonLd
        data={generateServiceSchema(
          { title: service.title[loc], description: service.description[loc] },
          loc,
        )}
      />
      {service.faq.length > 0 && (
        <JsonLd
          data={generateFaqSchema(
            service.faq.map((f) => ({
              question: f.question[loc],
              answer: f.answer[loc],
            })),
          )}
        />
      )}

      <Section className="bg-gradient-to-br from-primary/5 to-background">
        <h1 className="mb-4 text-4xl font-bold">{service.title[loc]}</h1>
        <p className="max-w-2xl text-lg text-muted-foreground">
          {service.longDescription[loc]}
        </p>
      </Section>

      <Section>
        <h2 className="mb-8 text-2xl font-bold">
          {loc === "ru" ? "Что включено" : "What's Included"}
        </h2>
        <div className="grid gap-3 sm:grid-cols-2">
          {service.features[loc].map((feature) => (
            <div key={feature} className="flex items-center gap-3">
              <CheckCircle size={20} className="shrink-0 text-primary" />
              <span>{feature}</span>
            </div>
          ))}
        </div>
      </Section>

      <Section className="bg-muted/50">
        <h2 className="mb-8 text-2xl font-bold">
          {loc === "ru" ? "Этапы работы" : "Work Stages"}
        </h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {service.process.map((step, i) => (
            <Card key={i}>
              <div className="mb-2 flex h-8 w-8 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground">
                {i + 1}
              </div>
              <h3 className="mb-1 font-semibold">{step.title[loc]}</h3>
              <p className="text-sm text-muted-foreground">
                {step.description[loc]}
              </p>
            </Card>
          ))}
        </div>
      </Section>

      {faqData.length > 0 && <FaqSection items={faqData} />}

      {relatedServices.length > 0 && (
        <Section className="bg-muted/50">
          <h2 className="mb-8 text-2xl font-bold">
            {loc === "ru" ? "Смежные услуги" : "Related Services"}
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {relatedServices.map(
              (rs) =>
                rs && (
                  <Card key={rs.slug}>
                    <h3 className="mb-2 font-semibold">{rs.title[loc]}</h3>
                    <p className="mb-4 text-sm text-muted-foreground">
                      {rs.description[loc]}
                    </p>
                    <Link href={`/services/${rs.slug}`}>
                      <Button variant="outline" size="sm">
                        {loc === "ru" ? "Подробнее" : "Learn More"}
                      </Button>
                    </Link>
                  </Card>
                ),
            )}
          </div>
        </Section>
      )}

      <CtaSection />
    </>
  );
}
