import { z } from "zod";

export const contactFormSchema = z.object({
  name: z.string().min(2).max(100),
  phone: z.string().min(7).max(20),
  email: z.string().email(),
  message: z.string().max(1000).optional(),
  service: z.string().optional(),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;
