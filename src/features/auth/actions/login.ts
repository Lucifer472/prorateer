"use server";

import { z } from "zod";
import { signIn } from "@/auth";

import db from "@/lib/db";

import { LoginSchema } from "../schema";

export const login = async (v: z.infer<typeof LoginSchema>) => {
  try {
    const validatedData = LoginSchema.safeParse(v);

    if (!validatedData.success) {
      return { error: validatedData.error.message };
    }

    const { email } = validatedData.data;

    const user = await db.user.findUnique({
      where: {
        email,
      },
    });

    if (!user) {
      return { error: "User not found" };
    }

    const formData = new FormData();

    formData.append("email", email);

    await signIn("nodemailer", {
      email,
      redirect: false,
    });

    return { success: "Logged In" };
  } catch (error) {
    console.log(error);
    return { error: "Something went wrong!" };
  }
};
