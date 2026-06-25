import { setRequestLocale, getTranslations } from "next-intl/server";
import { createMetadata } from "@/lib/metadata";
import type { Locale } from "@/config/site";
import { Section } from "@/components/ui/section";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "meta.privacy" });
  return createMetadata({
    title: t("title"),
    description: t("description"),
    path: "/privacy",
    locale: locale as Locale,
    noIndex: true,
  });
}

export default async function PrivacyPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const loc = locale as Locale;
  const t = await getTranslations({ locale, namespace: "privacy" });

  return (
    <Section>
      <div className="prose mx-auto max-w-3xl">
        <h1>{t("title")}</h1>
        <p className="text-muted-foreground">
          {t("lastUpdated", { date: "01.01.2025" })}
        </p>

        {loc === "ru" ? (
          <>
            <h2>1. Общие положения</h2>
            <p>
              Настоящая Политика конфиденциальности определяет порядок обработки и
              защиты персональных данных пользователей сайта ГидроТепло.
            </p>
            <h2>2. Сбор данных</h2>
            <p>
              Мы собираем только те данные, которые вы добровольно предоставляете
              через формы обратной связи: имя, телефон, email.
            </p>
            <h2>3. Использование данных</h2>
            <p>
              Собранные данные используются исключительно для обработки вашей заявки
              и связи с вами.
            </p>
            <h2>4. Защита данных</h2>
            <p>
              Мы принимаем все необходимые меры для защиты ваших персональных данных
              от несанкционированного доступа.
            </p>
          </>
        ) : (
          <>
            <h2>1. General Provisions</h2>
            <p>
              This Privacy Policy defines the procedure for processing and
              protecting personal data of GidroTeplo website users.
            </p>
            <h2>2. Data Collection</h2>
            <p>
              We only collect data that you voluntarily provide through contact
              forms: name, phone, email.
            </p>
            <h2>3. Data Usage</h2>
            <p>
              Collected data is used exclusively for processing your request and
              contacting you.
            </p>
            <h2>4. Data Protection</h2>
            <p>
              We take all necessary measures to protect your personal data from
              unauthorized access.
            </p>
          </>
        )}
      </div>
    </Section>
  );
}
