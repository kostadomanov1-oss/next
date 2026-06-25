"use client";

import { useActionState } from "react";
import { useTranslations, useLocale } from "next-intl";
import { submitContactForm, type ContactFormState } from "@/actions/contact";
import { Button } from "@/components/ui/button";
import { services } from "@/data/services";
import type { Locale } from "@/config/site";

export function ContactForm() {
  const t = useTranslations("contacts.form");
  const locale = useLocale() as Locale;

  const [state, formAction, pending] = useActionState<ContactFormState, FormData>(
    submitContactForm,
    { success: false },
  );

  if (state.success) {
    return (
      <div className="rounded-lg border border-green-200 bg-green-50 p-6 text-center text-green-800">
        {t("success")}
      </div>
    );
  }

  return (
    <form action={formAction} className="space-y-4">
      <div>
        <label htmlFor="name" className="mb-1 block text-sm font-medium">
          {t("name")}
        </label>
        <input
          id="name"
          name="name"
          required
          className="w-full rounded-md border border-border px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
        />
      </div>
      <div>
        <label htmlFor="phone" className="mb-1 block text-sm font-medium">
          {t("phone")}
        </label>
        <input
          id="phone"
          name="phone"
          type="tel"
          required
          className="w-full rounded-md border border-border px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
        />
      </div>
      <div>
        <label htmlFor="email" className="mb-1 block text-sm font-medium">
          {t("email")}
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          className="w-full rounded-md border border-border px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
        />
      </div>
      <div>
        <label htmlFor="service" className="mb-1 block text-sm font-medium">
          {t("service")}
        </label>
        <select
          id="service"
          name="service"
          className="w-full rounded-md border border-border px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
        >
          <option value="">—</option>
          {services.map((s) => (
            <option key={s.slug} value={s.slug}>
              {s.title[locale]}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label htmlFor="message" className="mb-1 block text-sm font-medium">
          {t("message")}
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          className="w-full rounded-md border border-border px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
        />
      </div>
      {state.error && (
        <p className="text-sm text-destructive">{t("error")}</p>
      )}
      <Button type="submit" disabled={pending} className="w-full">
        {t("submit")}
      </Button>
    </form>
  );
}
