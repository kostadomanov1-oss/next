import { setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import { createMetadata } from "@/lib/metadata";
import { getProjectBySlug, getAllProjectSlugs } from "@/data/projects";
import { getServiceBySlug } from "@/data/services";
import type { Locale } from "@/config/site";
import { Section } from "@/components/ui/section";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "@/i18n/navigation";
import { CtaSection } from "@/components/sections/cta";

type Props = { params: Promise<{ locale: string; slug: string }> };

export function generateStaticParams() {
  return getAllProjectSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props) {
  const { locale, slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return {};

  const loc = locale as Locale;
  return createMetadata({
    title: project.meta.title[loc],
    description: project.meta.description[loc],
    path: `/projects/${slug}`,
    locale: loc,
  });
}

export default async function ProjectPage({ params }: Props) {
  const { locale, slug } = await params;
  setRequestLocale(locale);

  const project = getProjectBySlug(slug);
  if (!project) notFound();

  const loc = locale as Locale;
  const projectServices = project.services
    .map((s) => getServiceBySlug(s))
    .filter(Boolean);

  return (
    <>
      <Section className="bg-gradient-to-br from-primary/5 to-background">
        <h1 className="mb-4 text-4xl font-bold">{project.title[loc]}</h1>
        <p className="max-w-2xl text-lg text-muted-foreground">
          {project.description[loc]}
        </p>
      </Section>

      <Section>
        <div className="mb-8 h-64 rounded-lg bg-muted lg:h-96" />
        <div className="grid gap-6 sm:grid-cols-3">
          <Card>
            <p className="text-sm text-muted-foreground">
              {loc === "ru" ? "Площадь" : "Area"}
            </p>
            <p className="text-xl font-bold">{project.area}</p>
          </Card>
          <Card>
            <p className="text-sm text-muted-foreground">
              {loc === "ru" ? "Срок" : "Duration"}
            </p>
            <p className="text-xl font-bold">{project.duration[loc]}</p>
          </Card>
          <Card>
            <p className="text-sm text-muted-foreground">
              {loc === "ru" ? "Год" : "Year"}
            </p>
            <p className="text-xl font-bold">{project.year}</p>
          </Card>
        </div>
      </Section>

      {projectServices.length > 0 && (
        <Section className="bg-muted/50">
          <h2 className="mb-8 text-2xl font-bold">
            {loc === "ru" ? "Выполненные работы" : "Completed Work"}
          </h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {projectServices.map(
              (s) =>
                s && (
                  <Link key={s.slug} href={`/services/${s.slug}`}>
                    <Card className="transition-shadow hover:shadow-md">
                      <h3 className="font-semibold">{s.title[loc]}</h3>
                      <p className="mt-1 text-sm text-muted-foreground">
                        {s.description[loc]}
                      </p>
                    </Card>
                  </Link>
                ),
            )}
          </div>
        </Section>
      )}

      <div className="py-8 text-center">
        <Link href="/projects">
          <Button variant="outline">
            {loc === "ru" ? "Все проекты" : "All Projects"}
          </Button>
        </Link>
      </div>

      <CtaSection />
    </>
  );
}
