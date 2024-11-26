"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { toast } from "sonner";
import { SearchIcon } from "lucide-react";

const SearchFormDSRW = () => {
  const router = useRouter();

  const query = useSearchParams();
  const search = query.get("q");

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
    <form
      onSubmit={formSearch}
      className="relative w-full flex flex-row-reverse border border-neutral-300 rounded-md"
    >
      <button
        type="submit"
        className="h-[40px] px-2 bg-brand-primary flex items-center justify-center text-white rounded-r-sm"
      >
        <SearchIcon className="size-[20px]" />
      </button>
      <input
        defaultValue={search ?? ""}
        type="text"
        name="search-form"
        className="outline-none px-2 h-[40px] rounded-l-md w-full"
      />
    </form>
  );
};

export default SearchFormDSRW;
