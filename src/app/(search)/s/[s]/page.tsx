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
      <div className="relative h-[80px] w-full max-w-screen-md mx-auto">
        <Image
          src={"/search-image.png"}
          alt="search image"
          fill
          style={{ objectFit: "cover", objectPosition: "center" }}
        />
      </div>
      <main className="my-6 px-4 sm:px-2 md:px-0 max-w-screen-md mx-auto relative">
        <div className="hidden lg:block lg:fixed top-2 right-4">
          <Logo />
        </div>
        <QuerySearchAds q={q} />
        <SearchForm />
      </main>
      <Footer />
    </div>
  );
};

export default SearchPage;
