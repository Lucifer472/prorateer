import { footerLinks } from "@/constant";
import Image from "next/image";
import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="bg-neutral-100 pt-2 pb-4 space-y-4 sm:space-y-6">
      <div className="flex md:hidden items-center justify-center">
        <Link href={"/"} className="relative block w-[132px] h-[43px]">
          <Image
            src={"/logo.png"}
            alt="Logo"
            fill
            style={{ objectFit: "contain" }}
          />
        </Link>
      </div>
      <p className="text-justify sm:text-center text-sm font-normal px-2 sm:px-0 text-neutral-600 max-w-screen-xl mx-auto">
        The information on this site is of a general nature only and is not
        intended to address the specific circumstances of any particular
        individual or entity. It is not intended or implied to be a substitute
        for professional advice.{" "}
        <Link target="_blank" href={"/disclaimer"}>
          Read more.
        </Link>
      </p>
      <div className="w-full h-1 bg-brand-primary"></div>
      <div className="flex flex-wrap items-center justify-center px-2 sm:px-0 gap-4">
        {footerLinks.map((f) => (
          <Link
            className="text-sm font-normal text-neutral-600 hover:underline"
            href={"/" + f.link}
            key={f.label}
          >
            {f.label}
          </Link>
        ))}
      </div>
    </footer>
  );
};
