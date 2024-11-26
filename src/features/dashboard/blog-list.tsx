import { cn } from "@/lib/utils";
import { getAllBlogs } from "@/data/blog";

import { ActionButton } from "./action-buttons";

export const BlogList = async ({ search }: { search?: string }) => {
  const data = await getAllBlogs(search);

  return (
    <div className="flex flex-col w-full">
      <div className="w-full grid grid-cols-11 border border-gray-100 rounded-t-sm">
        <div className="col-span-1 border-r border-gray-100 text-center py-2 px-4">
          Index
        </div>
        <div className="col-span-7 border-r border-gray-100 text-center py-2 px-4">
          Name
        </div>
        <div className="col-span-3 text-center py-2 px-4">Action</div>
      </div>
      {data &&
        data.map((data, index, array) => (
          <div
            className={cn(
              "w-full grid grid-cols-11 border border-gray-100",
              index === array.length - 1 ? "rounded-b-sm" : ""
            )}
            key={index}
          >
            <div className="col-span-1 border-r border-gray-100 text-center py-2 px-4 flex items-center justify-center">
              {index + 1}
            </div>
            <div
              className={cn(
                "col-span-7 border-r border-gray-100 text-center py-2 px-4 flex items-center justify-center"
              )}
            >
              {data.title}
            </div>
            <ActionButton data={data} />
          </div>
        ))}
    </div>
  );
};
