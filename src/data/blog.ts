import db from "@/lib/db";

export const getBlogByUrl = async (url: string) => {
  try {
    const data = await db.blogs.update({
      where: { url },
      data: { views: { increment: 1 } },
      include: { user: true },
    });

    return data;
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

export const getPopularArticles = async () => {
  try {
    return await db.blogs.findMany({
      take: 6,
      orderBy: {
        views: "desc",
      },
    });
  } catch (error) {
    return null;
  }
};

export const getTopStories = async () => {
  try {
    return await db.blogs.findMany({
      skip: 6,
      take: 6,
      orderBy: {
        views: "desc",
      },
    });
  } catch (error) {
    return null;
  }
};

export const getCategoryBlogs = async (category: string) => {
  try {
    return await db.blogs.findMany({
      take: 12,
      where: {
        category,
      },
      orderBy: {
        views: "desc",
      },
    });
  } catch (error) {
    return null;
  }
};

export const getAllBlogs = async (search?: string) => {
  try {
    return await db.blogs.findMany({
      take: 100,
      orderBy: {
        updatedAt: "desc",
      },
      where: search
        ? {
            OR: [
              { title: { contains: search } },
              { url: { contains: search } },
            ],
          }
        : undefined,
      select: {
        title: true,
        url: true,
      },
    });
  } catch {
    return null;
  }
};
