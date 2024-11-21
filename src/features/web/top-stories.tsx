import Image from "next/image";
import Link from "next/link";

export const TopStories = () => {
  return (
    <div className="mt-4 w-full">
      <p className="w-full border-b-4 border-brand-light text-2xl font-semibold py-2">
        Top <span className="text-brand-primary">Stories</span>
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 my-6">
        <Link href={"/"} className="flex flex-col gap-y-4 col-span-1 w-full">
          <div className="w-full aspect-video relative">
            <Image
              src={
                "https://images.drivingexamexpert.com/blogs/673dd078c6f00.JPG"
              }
              alt="Blog Image"
              fill
              style={{ objectFit: "cover" }}
            />
          </div>
          <h3 className="text-2xl font-semibold">
            The Impact of Car Donation: Making a Difference, One Vehicle at a
            Time
          </h3>
          <div className="flex items-center justify-between w-full">
            <p className="p-2 bg-neutral-100 text-sm font-normal text-neutral-400 rounded-sm">
              Autos & Vehicles
            </p>
            <p className="text-sm text-neutral-500 font-normal">5 min read</p>
          </div>
        </Link>
        <Link href={"/"} className="flex flex-col gap-y-4 col-span-1 w-full">
          <div className="w-full aspect-video relative">
            <Image
              src={
                "https://images.drivingexamexpert.com/blogs/673dd078c6f00.JPG"
              }
              alt="Blog Image"
              fill
              style={{ objectFit: "cover" }}
            />
          </div>
          <h3 className="text-2xl font-semibold">
            The Impact of Car Donation: Making a Difference, One Vehicle at a
            Time
          </h3>
          <div className="flex items-center justify-between w-full">
            <p className="p-2 bg-neutral-100 text-sm font-normal text-neutral-400 rounded-sm">
              Autos & Vehicles
            </p>
            <p className="text-sm text-neutral-500 font-normal">5 min read</p>
          </div>
        </Link>
        <Link href={"/"} className="flex flex-col gap-y-4 col-span-1 w-full">
          <div className="w-full aspect-video relative">
            <Image
              src={
                "https://images.drivingexamexpert.com/blogs/673dd078c6f00.JPG"
              }
              alt="Blog Image"
              fill
              style={{ objectFit: "cover" }}
            />
          </div>
          <h3 className="text-2xl font-semibold">
            The Impact of Car Donation: Making a Difference, One Vehicle at a
            Time
          </h3>
          <div className="flex items-center justify-between w-full">
            <p className="p-2 bg-neutral-100 text-sm font-normal text-neutral-400 rounded-sm">
              Autos & Vehicles
            </p>
            <p className="text-sm text-neutral-500 font-normal">5 min read</p>
          </div>
        </Link>
        <Link href={"/"} className="flex flex-col gap-y-4 col-span-1 w-full">
          <div className="w-full aspect-video relative">
            <Image
              src={
                "https://images.drivingexamexpert.com/blogs/673dd078c6f00.JPG"
              }
              alt="Blog Image"
              fill
              style={{ objectFit: "cover" }}
            />
          </div>
          <h3 className="text-2xl font-semibold">
            The Impact of Car Donation: Making a Difference, One Vehicle at a
            Time
          </h3>
          <div className="flex items-center justify-between w-full">
            <p className="p-2 bg-neutral-100 text-sm font-normal text-neutral-400 rounded-sm">
              Autos & Vehicles
            </p>
            <p className="text-sm text-neutral-500 font-normal">5 min read</p>
          </div>
        </Link>
        <Link href={"/"} className="flex flex-col gap-y-4 col-span-1 w-full">
          <div className="w-full aspect-video relative">
            <Image
              src={
                "https://images.drivingexamexpert.com/blogs/673dd078c6f00.JPG"
              }
              alt="Blog Image"
              fill
              style={{ objectFit: "cover" }}
            />
          </div>
          <h3 className="text-2xl font-semibold">
            The Impact of Car Donation: Making a Difference, One Vehicle at a
            Time
          </h3>
          <div className="flex items-center justify-between w-full">
            <p className="p-2 bg-neutral-100 text-sm font-normal text-neutral-400 rounded-sm">
              Autos & Vehicles
            </p>
            <p className="text-sm text-neutral-500 font-normal">5 min read</p>
          </div>
        </Link>
        <Link href={"/"} className="flex flex-col gap-y-4 col-span-1 w-full">
          <div className="w-full aspect-video relative">
            <Image
              src={
                "https://images.drivingexamexpert.com/blogs/673dd078c6f00.JPG"
              }
              alt="Blog Image"
              fill
              style={{ objectFit: "cover" }}
            />
          </div>
          <h3 className="text-2xl font-semibold">
            The Impact of Car Donation: Making a Difference, One Vehicle at a
            Time
          </h3>
          <div className="flex items-center justify-between w-full">
            <p className="p-2 bg-neutral-100 text-sm font-normal text-neutral-400 rounded-sm">
              Autos & Vehicles
            </p>
            <p className="text-sm text-neutral-500 font-normal">5 min read</p>
          </div>
        </Link>
      </div>
    </div>
  );
};
