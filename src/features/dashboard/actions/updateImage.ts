"use server";

import { auth } from "@/auth";
import db from "@/lib/db";

export const updateImage = async (email: string, image: string) => {
  try {
    const session = await auth();

    if (!session || !session.user || !session.user.email) {
      return null;
    }

    const user = await db.user.findUnique({
      where: {
        email: session.user.email,
      },
    });

    if (!user || user.role !== "ADMIN") {
      return null;
    }

    return db.user.update({
      where: {
        email,
      },
      data: {
        image,
      },
    });
  } catch (error) {
    console.log(error);
    return null;
  }
};
