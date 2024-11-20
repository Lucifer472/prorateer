"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { User } from "@prisma/client";

import { UserButton } from "../auth/user-button";

import { adminNav } from "@/constant";
import { cn } from "@/lib/utils";

const Navigation = ({ user, email }: { user: User; email: string }) => {
  const pathname = usePathname();

  return (
    <nav className="w-full border-b border-neutral-50 shadow">
      <div className="flex items-center min-h-[52px] justify-between w-full max-w-screen-2xl mx-auto">
        <Link href={"/admin"} className="relative w-[132px] h-[43px]">
          <Image
            src={"/logo.png"}
            alt="Logo"
            fill
            style={{ objectFit: "contain" }}
          />
        </Link>
        <ul className="flex items-center justify-center gap-x-4">
          {adminNav.map((link) => {
            const Icon = link.icon;
            const active = link.path === pathname;

            return (
              <li key={link.path}>
                <Link
                  href={link.path}
                  className={cn(
                    "flex items-center justify-center gap-x-1 border border-brand-primary/20 p-2 rounded-sm bg-brand-dark/20 hover:bg-brand-light/20 text-black",
                    active && "bg-brand-light"
                  )}
                >
                  <Icon className="size-5" />
                  <span>{link.label}</span>
                </Link>
              </li>
            );
          })}
        </ul>
        <UserButton email={email} user={user} />
      </div>
    </nav>
  );
};

export default Navigation;
