import { useTranslations, useLocale } from "next-intl";
import { Section } from "@/components/ui/section";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "@/i18n/navigation";
import { projects } from "@/data/projects";
import type { Locale } from "@/config/site";

export function ProjectsShowcaseSection() {
  const t = useTranslations("projects");
  const locale = useLocale() as Locale;

  return (
    <Section>
      <div className="mb-12 text-center">
        <h2 className="mb-4 text-3xl font-bold">{t("title")}</h2>
        <p className="text-muted-foreground">{t("subtitle")}</p>
      </div>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <Card key={project.slug}>
            <div className="mb-4 h-48 rounded-md bg-muted" />
            <h3 className="mb-2 text-lg font-semibold">
              {project.title[locale]}
            </h3>
            <p className="mb-3 text-sm text-muted-foreground">
              {project.description[locale]}
            </p>
            <div className="mb-4 flex gap-4 text-xs text-muted-foreground">
              <span>{project.area}</span>
              <span>{project.duration[locale]}</span>
              <span>{project.year}</span>
            </div>
            <Link href={`/projects/${project.slug}`}>
              <Button variant="outline" size="sm">
                {t("viewProject")}
              </Button>
            </Link>
          </Card>
        ))}
      </div>
    </Section>
  );
}
