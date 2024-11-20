"use server";

import { z } from "zod";
import { auth } from "@/auth";

import db from "@/lib/db";
import { BlogContent } from "@/types";

import { BlogSchema } from "../schema";

export const addBlog = async (
  v: z.infer<typeof BlogSchema>,
  content: BlogContent
) => {
  const validatedFields = BlogSchema.safeParse(v);

  if (!validatedFields.success) {
    return { error: validatedFields.error.message };
  }

  if (!content) {
    return { error: "Blogs is required" };
  }

  const session = await auth();

  if (!session || !session.user || !session.user.email) {
    return { error: "Please Login Again" };
  }

  const user = await db.user.findUnique({
    where: {
      email: session.user.email,
    },
  });

  if (!user || user.role !== "ADMIN") {
    return { error: "You are not Authorized" };
  }

  const { title, description, category, keywords } = validatedFields.data;

  const url = title
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");

  let image = "https://images.drivingexamexpert.com/blogs/6683d1444482e.png";
  for (const e of content.blocks) {
    if (e.type === "image") {
      image = e.data.file.url;
      break;
    }
  }

  try {
    const isUrl = await db.blogs.findUnique({
      where: {
        url,
      },
    });

    if (isUrl) {
      return { error: "Blog with this url already exists" };
    }

    await db.blogs.create({
      data: {
        content: content as any,
        title,
        url,
        image,
        description: !!description ? description : null,
        keywords: !!keywords ? keywords : null,
        category,
        userId: user.id,
      },
    });

    return { success: "Blog Added!" };
  } catch (error) {
    return { error: "Unable to add blog" };
  }
};
