import { z } from "zod";

export const faqItemSchema = z.object({
  id: z.string(),
  question: z.object({ ru: z.string(), en: z.string() }),
  answer: z.object({ ru: z.string(), en: z.string() }),
  category: z.string(),
});

export type FaqItem = z.infer<typeof faqItemSchema>;
