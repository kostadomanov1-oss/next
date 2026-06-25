"use client";

import { useTranslations, useLocale } from "next-intl";
import { Section } from "@/components/ui/section";
import { faqItems } from "@/data/faq";
import type { Locale } from "@/config/site";
import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

export function FaqSection({
  items,
  showHeader = true,
}: {
  items?: typeof faqItems;
  showHeader?: boolean;
}) {
  const t = useTranslations("faq");
  const locale = useLocale() as Locale;
  const data = items ?? faqItems;

  return (
    <Section>
      {showHeader && (
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold">{t("title")}</h2>
          <p className="text-muted-foreground">{t("subtitle")}</p>
        </div>
      )}
      <div className="mx-auto max-w-3xl divide-y divide-border">
        {data.map((item) => (
          <FaqAccordionItem
            key={item.id}
            question={item.question[locale]}
            answer={item.answer[locale]}
          />
        ))}
      </div>
    </Section>
  );
}

function FaqAccordionItem({
  question,
  answer,
}: {
  question: string;
  answer: string;
}) {
  const [open, setOpen] = useState(false);

  return (
    <div className="py-4">
      <button
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between text-left"
      >
        <span className="font-medium">{question}</span>
        <ChevronDown
          size={20}
          className={cn(
            "shrink-0 text-muted-foreground transition-transform",
            open && "rotate-180",
          )}
        />
      </button>
      {open && (
        <p className="mt-3 text-sm text-muted-foreground">{answer}</p>
      )}
    </div>
  );
}
