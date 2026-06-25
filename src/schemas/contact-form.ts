import { z } from "zod";

export const contactFormSchema = z.object({
  message: z.string().min(1).max(2000),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;
