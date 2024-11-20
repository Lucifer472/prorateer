import { redirect } from "next/navigation";
import { getBlogByUrl } from "@/data/blog";

const ArticlePage = async ({ params }: { params: { url: string } }) => {
  const article = await getBlogByUrl(params.url);

  if (!article) {
    return redirect("/");
  }

  return <div>{JSON.stringify(article.content)}</div>;
};

export default ArticlePage;
