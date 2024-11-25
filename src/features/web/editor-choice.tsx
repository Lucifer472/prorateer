import { BlogContent } from "@/types";
import Image from "next/image";
import Link from "next/link";

import { getCategoryBlogs } from "@/data/blog";
import { TimeToRead } from "@/lib/utils";

import { blogCategory } from "@/constant";

export const EditorChoice = async ({ category }: { category: string }) => {
  const data = await getCategoryBlogs(category);
  return (
    <div className="mt-4 w-full">
      <p className="w-full border-b-4 border-brand-light text-2xl font-semibold py-2">
        Editor&apos;s <span className="text-brand-primary">Choice</span>
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 my-6">
        {data &&
          data.map((d) => {
            const category = blogCategory.find((c) => c.value === d.category);
            const content = d.content as BlogContent;
            return (
              <Link
                href={"/article/" + d.url}
                key={d.id}
                className="flex flex-col gap-y-4 col-span-1 w-full"
              >
                <div className="w-full aspect-video relative">
                  <Image
                    src={
                      d.image
                        ? d.image
                        : "https://images.drivingexamexpert.com/blogs/673dd078c6f00.JPG"
                    }
                    alt="Blog Image"
                    fill
                    style={{ objectFit: "cover" }}
                  />
                </div>
                <h3 className="text-2xl font-semibold">{d.title}</h3>
                <div className="flex items-center justify-between w-full">
                  <p className="p-1 bg-neutral-100 text-xs font-normal text-neutral-400 rounded-sm">
                    {category && category.label}
                  </p>
                  <p className="text-xs text-neutral-500 font-normal">
                    {TimeToRead(content.blocks.length)}
                  </p>
                </div>
              </Link>
            );
          })}
      </div>
    </div>
  );
};
