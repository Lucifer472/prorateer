import { z } from "zod";

export const LoginSchema = z.object({
  email: z.string().email("Invalid email"),
});

export const RegisterSchema = z.object({
  name: z.string().min(3, "Name Must be at least 3 Characters"),
  email: z.string().email("Invalid email"),
});
