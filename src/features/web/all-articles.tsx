import { getAllArticles } from "@/data/blog";
import { BlogCard } from "./blog-card";

export const AllArticles = async () => {
  const data = await getAllArticles();

  return (
    <div className="space-y-4 w-full px-4 sm:px-0">
      <p className="w-full border-b-4 border-brand-light text-2xl font-semibold py-2">
        All Articles
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 w-full gap-6">
        {data &&
          data.length > 0 &&
          data.map((d) => (
            <div className="w-full col-span-1" key={d.id}>
              <BlogCard data={d} />
            </div>
          ))}
      </div>
    </div>
  );
};
