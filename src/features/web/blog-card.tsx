import Image from "next/image";
import Link from "next/link";
import { FaArrowTrendUp } from "react-icons/fa6";

export const BlogCard = () => {
  return (
    <Link
      href={"/"}
      className="block w-full rounded-2xl border border-neutral-300"
    >
      <div className="w-full aspect-video relative">
        <Image
          src={"https://images.drivingexamexpert.com/blogs/673dd078c6f00.JPG"}
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
            Auto Mobile & Vehicles
          </span>
          <span className="text-xs font-normal text-neutral-500">
            5 min read
          </span>
        </div>
        <div className="flex items-center gap-x-1">
          <h3 className="text-xl font-semibold">
            The shift towards hybrid cars: benefits and challenges
          </h3>
          <div className="size-[35px]">
            <FaArrowTrendUp className="text-brand-primary size-[25px]" />
          </div>
        </div>
      </div>
    </Link>
  );
};
