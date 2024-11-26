"use server";

import { z } from "zod";
import { signIn } from "@/auth";

import db from "@/lib/db";

import { RegisterSchema } from "../schema";

export const register = async (v: z.infer<typeof RegisterSchema>) => {
  try {
    const validatedData = RegisterSchema.safeParse(v);

    if (!validatedData.success) {
      return { error: validatedData.error.message };
    }

    const { email, name } = validatedData.data;

    const user = await db.user.findUnique({
      where: {
        email,
      },
    });

    if (user) {
      return { error: "User Already Exists Please Use Login!" };
    }

    await db.user.create({
      data: {
        email,
        name,
      },
    });

    await signIn("nodemailer", {
      email,
      redirect: false,
    });

    return { success: "Registered In" };
  } catch {
    return { error: "Something went wrong!" };
  }
};
