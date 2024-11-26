import { getBlogByUrl } from "@/data/blog";
import { BlogEditCard } from "@/features/dashboard/blog-edit-card";
import { redirect } from "next/navigation";

const EditPage = async ({ params }: { params: { url: string } }) => {
  const { url } = params;

  const data = await getBlogByUrl(url);

  if (!data) return redirect("/admin");

  return (
    <main className="min-h-screen flex items-center justify-center">
      <BlogEditCard data={data} />
    </main>
  );
};

export default EditPage;
