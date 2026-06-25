import { useTranslations, useLocale } from "next-intl";
import { Section } from "@/components/ui/section";
import { Card } from "@/components/ui/card";
import { reviews } from "@/data/reviews";
import type { Locale } from "@/config/site";
import { Star } from "lucide-react";

export function TestimonialsSection() {
  const t = useTranslations("testimonials");
  const locale = useLocale() as Locale;

  return (
    <Section className="bg-muted/50">
      <div className="mb-12 text-center">
        <h2 className="mb-4 text-3xl font-bold">{t("title")}</h2>
        <p className="text-muted-foreground">{t("subtitle")}</p>
      </div>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {reviews.map((review) => (
          <Card key={review.id}>
            <div className="mb-3 flex gap-1">
              {Array.from({ length: review.rating }).map((_, i) => (
                <Star
                  key={i}
                  size={16}
                  className="fill-secondary text-secondary"
                />
              ))}
            </div>
            <p className="mb-4 text-sm text-muted-foreground">
              &ldquo;{review.text[locale]}&rdquo;
            </p>
            <div>
              <p className="font-semibold">{review.name[locale]}</p>
              <p className="text-xs text-muted-foreground">
                {review.role[locale]}
              </p>
            </div>
          </Card>
        ))}
      </div>
    </Section>
  );
}
