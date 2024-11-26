import dynamic from "next/dynamic";

import Logo from "@/components/Logo";

import SearchForm from "@/features/ads/search-form-dsrw";
import { Footer } from "@/features/web/footer";
import Image from "next/image";
import { redirect } from "next/navigation";

const SearchPage = ({
  params,
  searchParams,
}: {
  params: { s: string };
  searchParams: { q: string };
}) => {
  const q = params.s ?? "loan";

  if (!searchParams.q) {
    redirect(`/s/${encodeURIComponent(q)}?q=${encodeURIComponent(q)}`);
  }

  const QuerySearchAds = dynamic(
    () => import("@/features/ads/query-search-ads"),
    { ssr: false }
  );

  return (
    <div className="w-full">
      <div className="flex items-center z-10 bg-white justify-center flex-col gap-2 lg:hidden fixed top-0 left-0 h-[120px] w-full max-w-screen-md mx-auto px-2">
        <div className="relative aspect-square h-[43px]">
          <Image
            src={"/logo-mobile.png"}
            alt="Logo"
            fill
            style={{ objectFit: "contain" }}
          />
        </div>
        <SearchForm />
      </div>
      <main className="my-6 px-4 mt-[128px] lg:mt-6 sm:px-2 md:px-0 max-w-screen-md mx-auto relative">
        <div className="hidden lg:block lg:fixed top-2 right-4">
          <Logo />
        </div>
        <QuerySearchAds q={q} />
        <div className="hidden lg:block">
          <SearchForm />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default SearchPage;
