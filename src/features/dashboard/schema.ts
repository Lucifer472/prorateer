import { z } from "zod";

export const BlogSchema = z.object({
  title: z.string().min(3, "Title Needs minimum of 3 Characters"),
  keywords: z.string().optional(),
  description: z.string().optional(),
  category: z.string(),
  readMore: z.boolean().optional(),
});
