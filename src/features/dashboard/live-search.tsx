"use client";

import { Search } from "lucide-react";
import { useRouter } from "next/navigation";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export const LiveSearch = () => {
  const router = useRouter();
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget as any);

    const search = formData.get("search");

    if (search && typeof search === "string") {
      router.push(`/admin/list?search=${encodeURI(search.toLowerCase())}`);
    } else {
      router.push(`/admin/list`);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2">
      <Input placeholder="Search Blogs..." name="search" id="search" />
      <Button variant={"outline"}>
        <Search />
      </Button>
    </form>
  );
};
