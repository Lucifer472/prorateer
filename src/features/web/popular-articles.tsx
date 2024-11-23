import Image from "next/image";
import Link from "next/link";

import { getPopularArticles } from "@/data/blog";

export const PopularArticles = async () => {
  const data = await getPopularArticles();

  return (
    <aside className="w-full flex flex-col gap-y-2 lg:fixed lg:max-w-[320px]">
      <h2 className="font-semibold text-lg">Popular Article</h2>
      {data &&
        data.map((d, index) => (
          <Link
            href={"/article/" + d.url}
            className="flex items-start gap-x-2"
            key={d.id}
          >
            <div className="aspect-square relative size-[80px] rounded-md">
              <Image
                src={
                  d.image
                    ? d.image
                    : "https://images.drivingexamexpert.com/blogs/673dd078c6f00.JPG"
                }
                alt="BlogImage"
                fill
                style={{ objectFit: "cover", borderRadius: "12px" }}
              />
              <span className="absolute top-1 right-1 size-[24px] bg-brand-dark text-white rounded-full flex items-center justify-center">
                {index + 1}
              </span>
            </div>
            <h3 className="text-sm overflow-hidden font-normal text-ellipsis break-words text-neutral-900">
              {d.title}
            </h3>
          </Link>
        ))}
    </aside>
  );
};
