"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { toast } from "sonner";
import { usePathname, useRouter } from "next/navigation";
import { ChevronDown, Menu, SearchIcon } from "lucide-react";
import { IoIosClose } from "react-icons/io";

import { blogCategory } from "@/constant";

import { cn } from "@/lib/utils";

export const WebNavigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [logo, setLogo] = useState("/logo.png");

  const pathname = usePathname();

  const router = useRouter();

  useEffect(() => {
    const width = window.innerWidth;

    if (width < 768) {
      setLogo("/logo-mobile.png");
    }

    setIsOpen(false);
  }, [pathname]);

  const formSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    const value = formData.get("search-form");

    if (value && typeof value === "string") {
      router.push("/dsrw?q=" + encodeURIComponent(value));
    } else {
      toast.error("Please Input a valid Value");
    }
  };

  return (
    <header
      className="w-full fixed border-t-4 border-brand-primary top-0 left-0"
      style={{ zIndex: isOpen ? "50" : "10" }}
    >
      <nav className="h-fit w-full border-b border-neutral-50 shadow relative z-50 bg-white px-4 xl:px-1">
        <div className="flex items-center justify-between gap-x-4 max-w-screen-xl h-[70px] mx-auto">
          <Link href={"/"} className="relative w-[32px] md:w-[132px] h-[43px]">
            <Image
              src={logo}
              alt="Logo"
              fill
              style={{ objectFit: "contain" }}
            />
          </Link>
          <ul className="hidden md:flex items-center justify-center gap-x-4">
            {blogCategory.slice(0, 5).map((c) => (
              <li key={c.value} className="hidden lg:block">
                <Link
                  href={"/" + c.value}
                  className="whitespace-nowrap font-semibold hover:underline"
                >
                  {c.label}
                </Link>
              </li>
            ))}
            <li>
              <button
                onClick={() => setIsOpen((prev) => !prev)}
                className="flex items-center justify-center font-semibold hover:underline"
              >
                More{" "}
                <ChevronDown
                  className={cn(
                    "transition-all duration-500",
                    isOpen ? "rotate-180" : "rotate-0"
                  )}
                />
              </button>
            </li>
          </ul>
          <form
            onSubmit={formSearch}
            className="relative md:max-w-[270px] w-full flex flex-row-reverse md:items-center shadow md:justify-center border border-neutral-100 rounded-sm"
          >
            <button
              type="submit"
              className="h-[40px] px-2 hover:bg-brand-primary flex items-center justify-center text-brand-primary hover:text-white rounded-r-sm"
            >
              <SearchIcon className="size-[20px]" />
            </button>
            <input
              type="text"
              name="search-form"
              className="outline-none px-2 h-[40px] md:max-w-[230px] w-full"
            />
          </form>
          <div
            className="size-[40px] flex md:hidden items-center justify-center"
            onClick={() => setIsOpen((prev) => !prev)}
          >
            {!isOpen ? (
              <Menu className="size-8" />
            ) : (
              <IoIosClose className="size-8" />
            )}
          </div>
        </div>
      </nav>
      <div
        className={cn(
          "absolute z-10 w-full bg-white transition-all duration-500 left-0 border-b shadow border-neutral-100",
          isOpen ? "top-[70px]" : "-top-[800px] lg:-top-[250px]"
        )}
      >
        <div className="max-w-screen-xl lg:h-[225px] mx-auto w-full grid grid-cols-1  gap-y-2 md:grid-cols-2 lg:grid-cols-4 px-4 md:px-0 py-4">
          <ul className="flex flex-col w-full col-span-1 items-start justify-between gap-y-2">
            {blogCategory.slice(0, 6).map((c) => (
              <li key={c.value}>
                <Link
                  href={"/" + c.value}
                  className="whitespace-nowrap font-light hover:underline"
                >
                  {c.label}
                </Link>
              </li>
            ))}
          </ul>
          <ul className="flex flex-col w-full col-span-1 items-start justify-between  gap-y-2">
            {blogCategory.slice(6, 12).map((c) => (
              <li key={c.value}>
                <Link
                  href={"/" + c.value}
                  className="whitespace-nowrap font-light hover:underline"
                >
                  {c.label}
                </Link>
              </li>
            ))}
          </ul>
          <ul className="flex flex-col w-full col-span-1 items-start justify-between  gap-y-2">
            {blogCategory.slice(12, 18).map((c) => (
              <li key={c.value}>
                <Link
                  href={"/" + c.value}
                  className="whitespace-nowrap font-light hover:underline"
                >
                  {c.label}
                </Link>
              </li>
            ))}
          </ul>
          <ul className="flex flex-col w-full col-span-1 items-start justify-between  gap-y-2">
            {blogCategory.slice(18, 24).map((c) => (
              <li key={c.value}>
                <Link
                  href={"/" + c.value}
                  className="whitespace-nowrap font-light hover:underline"
                >
                  {c.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </header>
  );
};
