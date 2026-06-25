import { z } from "zod";

export const serviceSchema = z.object({
  slug: z.string(),
  icon: z.string(),
  image: z.string(),
  title: z.object({ ru: z.string(), en: z.string() }),
  description: z.object({ ru: z.string(), en: z.string() }),
  longDescription: z.object({ ru: z.string(), en: z.string() }),
  features: z.object({
    ru: z.array(z.string()),
    en: z.array(z.string()),
  }),
  process: z.array(
    z.object({
      title: z.object({ ru: z.string(), en: z.string() }),
      description: z.object({ ru: z.string(), en: z.string() }),
    }),
  ),
  faq: z.array(
    z.object({
      question: z.object({ ru: z.string(), en: z.string() }),
      answer: z.object({ ru: z.string(), en: z.string() }),
    }),
  ),
  meta: z.object({
    title: z.object({ ru: z.string(), en: z.string() }),
    description: z.object({ ru: z.string(), en: z.string() }),
    keywords: z.object({
      ru: z.array(z.string()),
      en: z.array(z.string()),
    }),
  }),
  relatedSlugs: z.array(z.string()),
});

export type Service = z.infer<typeof serviceSchema>;
