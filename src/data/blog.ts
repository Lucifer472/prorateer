import db from "@/lib/db";

export const getBlogByUrl = async (url: string) => {
  try {
    return await db.blogs.findUnique({
      where: {
        url,
      },
      include: {
        user: true,
      },
    });
  } catch (error) {
    return null;
  }
};
