"use client";

import { useActionState } from "react";
import { useTranslations } from "next-intl";
import { submitContactForm, type ContactFormState } from "@/actions/contact";
import { Button } from "@/components/ui/button";

export function ContactForm() {
  const t = useTranslations("contacts.form");

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
        <label htmlFor="message" className="mb-1 block text-sm font-medium">
          {t("message")}
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          placeholder={t("placeholder")}
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
