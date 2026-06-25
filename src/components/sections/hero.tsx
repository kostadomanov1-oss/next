import { useTranslations } from "next-intl";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Link } from "@/i18n/navigation";

export function HeroSection() {
  const t = useTranslations("hero");

  return (
    <section className="relative overflow-hidden py-24 lg:py-32">
      <Image
        src="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=1600&q=80"
        alt=""
        fill
        className="object-cover"
        priority
      />
      <div className="absolute inset-0 bg-foreground/70" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="mb-6 text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
            {t("title")}
          </h1>
          <p className="mb-8 text-lg text-white/80 sm:text-xl">
            {t("subtitle")}
          </p>
          <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link href="/contacts">
              <Button size="lg">{t("cta")}</Button>
            </Link>
            <Link href="/services">
              <Button
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white/10"
              >
                {t("secondaryCta")}
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
