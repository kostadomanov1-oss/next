import { useTranslations, useLocale } from "next-intl";
import Image from "next/image";
import { Section } from "@/components/ui/section";
import { Link } from "@/i18n/navigation";
import { projects } from "@/data/projects";
import type { Locale } from "@/config/site";
import { ArrowRight, MapPin, Calendar, Ruler } from "lucide-react";

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
          <Link
            key={project.slug}
            href={`/projects/${project.slug}`}
            className="group"
          >
            <div className="overflow-hidden rounded-lg border border-border bg-card shadow-sm transition-all hover:shadow-lg hover:-translate-y-1">
              <div className="relative h-52 w-full overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title[locale]}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>
              <div className="p-6">
                <h3 className="mb-2 text-lg font-semibold">
                  {project.title[locale]}
                </h3>
                <p className="mb-4 text-sm text-muted-foreground line-clamp-2">
                  {project.description[locale]}
                </p>
                <div className="mb-4 flex flex-wrap gap-3 text-xs text-muted-foreground">
                  <span className="inline-flex items-center gap-1">
                    <Ruler size={12} />
                    {project.area}
                  </span>
                  <span className="inline-flex items-center gap-1">
                    <Calendar size={12} />
                    {project.duration[locale]}
                  </span>
                  <span className="inline-flex items-center gap-1">
                    <MapPin size={12} />
                    {project.year}
                  </span>
                </div>
                <span className="inline-flex items-center gap-1 text-sm font-medium text-primary">
                  {t("viewProject")}
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
