import { blogCategory, footerLinks, SITE_URL } from "@/constant";
import { getAllBlogsUrl } from "@/features/dashboard/actions/blog";
import type { MetadataRoute } from "next";

export const revalidate = 0;

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  let data: MetadataRoute.Sitemap = [
    {
      url: SITE_URL,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 1,
    },
  ];

  const footerRoutes: MetadataRoute.Sitemap = footerLinks.map((l) => ({
    url: `${SITE_URL}${l.link}`,
    lastModified: new Date(),
    changeFrequency: "yearly",
    priority: 0.5,
  }));

  const categoryRoutes: MetadataRoute.Sitemap = blogCategory.map((c) => ({
    url: `${SITE_URL}/c/${c.value}`,
    lastModified: new Date(),
    changeFrequency: "yearly",
    priority: 0.8,
  }));

  const blogs = await getAllBlogsUrl();

  const articles: MetadataRoute.Sitemap = blogs!.map((b) => ({
    url: `${SITE_URL}/article/${b.url}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 1,
  }));

  const otherRoutes: MetadataRoute.Sitemap = [
    {
      url: `${SITE_URL}/dsrw`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.5,
    },
    {
      url: `${SITE_URL}/s`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.5,
    },
  ];

  data = data.concat(articles);
  data = data.concat(otherRoutes);
  data = data.concat(footerRoutes);
  data = data.concat(categoryRoutes);

  return data;
}
