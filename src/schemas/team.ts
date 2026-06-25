import { z } from "zod";

export const teamMemberSchema = z.object({
  id: z.string(),
  name: z.object({ ru: z.string(), en: z.string() }),
  role: z.object({ ru: z.string(), en: z.string() }),
  image: z.string(),
});

export type TeamMember = z.infer<typeof teamMemberSchema>;
