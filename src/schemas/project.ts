import { z } from "zod";

export const projectSchema = z.object({
  slug: z.string(),
  title: z.object({ ru: z.string(), en: z.string() }),
  description: z.object({ ru: z.string(), en: z.string() }),
  image: z.string(),
  area: z.string(),
  duration: z.object({ ru: z.string(), en: z.string() }),
  year: z.number(),
  services: z.array(z.string()),
  meta: z.object({
    title: z.object({ ru: z.string(), en: z.string() }),
    description: z.object({ ru: z.string(), en: z.string() }),
  }),
});

export type Project = z.infer<typeof projectSchema>;
