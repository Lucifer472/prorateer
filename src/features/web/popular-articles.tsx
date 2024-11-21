import Image from "next/image";
import Link from "next/link";

export const PopularArticles = () => {
  return (
    <aside className="w-full flex flex-col gap-y-2 lg:fixed lg:max-w-[320px]">
      <h2 className="font-semibold text-lg">Popular Article</h2>
      <Link href="/" className="flex items-start gap-x-2">
        <div className="aspect-square relative size-[80px] rounded-md">
          <Image
            src={"https://images.drivingexamexpert.com/blogs/673dd078c6f00.JPG"}
            alt="BlogImage"
            fill
            style={{ objectFit: "cover", borderRadius: "12px" }}
          />
          <span className="absolute top-1 right-1 size-[24px] bg-brand-dark text-white rounded-full flex items-center justify-center">
            1
          </span>
        </div>
        <h3 className="text-sm overflow-hidden font-normal text-ellipsis break-words text-neutral-900">
          Mastering Your Workforce Management with Shift Scheduling Software
        </h3>
      </Link>
      <Link href="/" className="flex items-start gap-x-2">
        <div className="aspect-square relative size-[80px] rounded-md">
          <Image
            src={"https://images.drivingexamexpert.com/blogs/673dd078c6f00.JPG"}
            alt="BlogImage"
            fill
            style={{ objectFit: "cover", borderRadius: "12px" }}
          />
          <span className="absolute top-1 right-1 size-[24px] bg-brand-dark text-white rounded-full flex items-center justify-center">
            1
          </span>
        </div>
        <h3 className="text-sm overflow-hidden font-normal text-ellipsis break-words text-neutral-900">
          Mastering Your Workforce Management with Shift Scheduling Software
        </h3>
      </Link>
      <Link href="/" className="flex items-start gap-x-2">
        <div className="aspect-square relative size-[80px] rounded-md">
          <Image
            src={"https://images.drivingexamexpert.com/blogs/673dd078c6f00.JPG"}
            alt="BlogImage"
            fill
            style={{ objectFit: "cover", borderRadius: "12px" }}
          />
          <span className="absolute top-1 right-1 size-[24px] bg-brand-dark text-white rounded-full flex items-center justify-center">
            1
          </span>
        </div>
        <h3 className="text-sm overflow-hidden font-normal text-ellipsis break-words text-neutral-900">
          Mastering Your Workforce Management with Shift Scheduling Software
        </h3>
      </Link>
      <Link href="/" className="flex items-start gap-x-2">
        <div className="aspect-square relative size-[80px] rounded-md">
          <Image
            src={"https://images.drivingexamexpert.com/blogs/673dd078c6f00.JPG"}
            alt="BlogImage"
            fill
            style={{ objectFit: "cover", borderRadius: "12px" }}
          />
          <span className="absolute top-1 right-1 size-[24px] bg-brand-dark text-white rounded-full flex items-center justify-center">
            1
          </span>
        </div>
        <h3 className="text-sm overflow-hidden font-normal text-ellipsis break-words text-neutral-900">
          Mastering Your Workforce Management with Shift Scheduling Software
        </h3>
      </Link>
      <Link href="/" className="flex items-start gap-x-2">
        <div className="aspect-square relative size-[80px] rounded-md">
          <Image
            src={"https://images.drivingexamexpert.com/blogs/673dd078c6f00.JPG"}
            alt="BlogImage"
            fill
            style={{ objectFit: "cover", borderRadius: "12px" }}
          />
          <span className="absolute top-1 right-1 size-[24px] bg-brand-dark text-white rounded-full flex items-center justify-center">
            1
          </span>
        </div>
        <h3 className="text-sm overflow-hidden font-normal text-ellipsis break-words text-neutral-900">
          Mastering Your Workforce Management with Shift Scheduling Software
        </h3>
      </Link>
    </aside>
  );
};
