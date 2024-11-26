import { BlogList } from "@/features/dashboard/blog-list";
import { LiveSearch } from "@/features/dashboard/live-search";

const BlogListPage = ({
  searchParams,
}: {
  searchParams: { search?: string };
}) => {
  const search = searchParams.search;

  return (
    <div className="my-4 border border-black rounded-md p-4 bg-neutral-50">
      <div className="w-full border-b-2 border-black mb-4">
        <span className="text-xl font-medium">Edit Blogs</span>
      </div>
      <LiveSearch />
      <div className="my-2 px-2">
        <BlogList search={search} />
      </div>
    </div>
  );
};

export default BlogListPage;
