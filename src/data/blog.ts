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

export const getRecentArticles = async () => {
  try {
    return await db.blogs.findMany({
      take: 3,
      orderBy: {
        updatedAt: "desc",
      },
    });
  } catch (error) {
    return null;
  }
};

export const getAllArticles = async () => {
  try {
    return await db.blogs.findMany({
      take: 9,
      orderBy: {
        updatedAt: "asc",
      },
    });
  } catch (error) {
    return null;
  }
};
