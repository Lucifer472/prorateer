import { blogCategory } from "@/constant";
import { EditorChoice } from "@/features/web/editor-choice";

const CategoryPage = ({ params }: { params: { category: string } }) => {
  const categoryParams = params.category ?? "health";

  const category = blogCategory.find((c) => c.value === categoryParams);

  return (
    <main className="space-y-6 my-4">
      <div className="py-6 text-left px-6 text-2xl font-semibold text-white bg-brand-dark rounded-md shadow-md">
        {category ? category.label : "Health"}
      </div>
      <EditorChoice category={category ? category.value : "health"} />
    </main>
  );
};

export default CategoryPage;
