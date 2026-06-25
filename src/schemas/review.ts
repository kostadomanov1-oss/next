import { z } from "zod";

export const reviewSchema = z.object({
  id: z.string(),
  name: z.object({ ru: z.string(), en: z.string() }),
  role: z.object({ ru: z.string(), en: z.string() }),
  text: z.object({ ru: z.string(), en: z.string() }),
  rating: z.number().min(1).max(5),
});

export type Review = z.infer<typeof reviewSchema>;
