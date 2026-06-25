import { useTranslations } from "next-intl";
import { Section } from "@/components/ui/section";
import { Card } from "@/components/ui/card";
import { Clock, Award, Briefcase, Headphones } from "lucide-react";

const icons = [Briefcase, Award, Clock, Headphones] as const;
const keys = ["experience", "projects", "warranty", "support"] as const;

export function BenefitsSection() {
  const t = useTranslations("benefits");

  return (
    <Section>
      <h2 className="mb-12 text-center text-3xl font-bold">{t("title")}</h2>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {keys.map((key, i) => {
          const Icon = icons[i];
          return (
            <Card key={key} className="text-center">
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <Icon size={24} />
              </div>
              <h3 className="mb-2 font-semibold">{t(`${key}.title`)}</h3>
              <p className="text-sm text-muted-foreground">
                {t(`${key}.description`)}
              </p>
            </Card>
          );
        })}
      </div>
    </Section>
  );
}
