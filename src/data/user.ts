import db from "@/lib/db";

export const getUser = async (email: string) => {
  try {
    return await db.user.findUnique({ where: { email } });
  } catch (error) {
    return null;
  }
};
