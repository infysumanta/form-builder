import { z } from "zod";

/**
 * Represents the schema for a form.
 */
export const formSchema = z.object({
  name: z.string().min(4),
  description: z.string().optional(),
});

export type formSchemaType = z.infer<typeof formSchema>;
