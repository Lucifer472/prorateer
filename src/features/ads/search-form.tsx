"use client";

import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { SearchIcon } from "lucide-react";

const SearchForm = () => {
  const router = useRouter();

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
  );
};

export default SearchForm;
