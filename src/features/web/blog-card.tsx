import Image from "next/image";
import Link from "next/link";
import { Blogs } from "@prisma/client";

import { FaArrowTrendUp } from "react-icons/fa6";
import { blogCategory } from "@/constant";
import { TimeToRead } from "@/lib/utils";
import { BlogContent } from "@/types";

export const BlogCard = ({ data }: { data: Blogs }) => {
  const category = blogCategory.find((c) => c.value === data.category);

  const content = data.content as BlogContent;

  return (
    <Link
      href={"/article/" + data.url}
      className="block w-full rounded-2xl border border-neutral-300"
    >
      <div className="w-full aspect-video relative">
        <Image
          src={
            data.image
              ? data.image
              : "https://images.drivingexamexpert.com/blogs/673dd078c6f00.JPG"
          }
          alt="Blog Image"
          fill
          style={{
            objectFit: "cover",
            borderTopLeftRadius: "12px",
            borderTopRightRadius: "12px",
          }}
        />
      </div>
      <div className="p-4 flex flex-col w-full gap-y-4">
        <div className="flex items-center justify-between">
          <span className="text-xs text-brand-primary font-light">
            {category ? category.label : "Auto & Mobile"}
          </span>
          <span className="text-xs font-normal text-neutral-500">
            {TimeToRead(content.blocks.length)}
          </span>
        </div>
        <div className="flex items-center gap-x-1">
          <h3 className="text-xl font-semibold">{data.title}</h3>
          <div className="size-[35px]">
            <FaArrowTrendUp className="text-brand-primary size-[25px]" />
          </div>
        </div>
      </div>
    </Link>
  );
};
