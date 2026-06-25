import { useTranslations } from "next-intl";
import { Container } from "@/components/ui/container";
import { Link } from "@/i18n/navigation";
import { Phone, Mail, MapPin } from "lucide-react";
import { siteConfig } from "@/config/site";

export function Footer() {
  const t = useTranslations("footer");
  const nav = useTranslations("nav");

  return (
    <footer className="border-t border-border bg-foreground text-background">
      <Container>
        <div className="grid gap-8 py-12 md:grid-cols-3">
          <div>
            <h3 className="mb-4 text-lg font-bold">ГидроТепло</h3>
            <p className="text-sm text-background/70">{t("description")}</p>
          </div>

          <div>
            <h4 className="mb-4 font-semibold">{t("navigation")}</h4>
            <nav className="flex flex-col gap-2 text-sm text-background/70">
              <Link href="/services" className="hover:text-background">
                {nav("services")}
              </Link>
              <Link href="/projects" className="hover:text-background">
                {nav("projects")}
              </Link>
              <Link href="/about" className="hover:text-background">
                {nav("about")}
              </Link>
              <Link href="/contacts" className="hover:text-background">
                {nav("contacts")}
              </Link>
              <Link href="/faq" className="hover:text-background">
                {nav("faq")}
              </Link>
            </nav>
          </div>

          <div>
            <h4 className="mb-4 font-semibold">{t("contacts")}</h4>
            <div className="flex flex-col gap-3 text-sm text-background/70">
              <div className="flex items-center gap-2">
                <Phone size={16} />
                <span>{siteConfig.contact.phone}</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail size={16} />
                <span>{siteConfig.contact.email}</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin size={16} />
                <span>{siteConfig.contact.address.ru}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-background/20 py-6 text-center text-sm text-background/50">
          <p>{t("copyright", { year: new Date().getFullYear() })}</p>
          <Link
            href="/privacy"
            className="mt-1 inline-block hover:text-background"
          >
            {t("privacy")}
          </Link>
        </div>
      </Container>
    </footer>
  );
}
