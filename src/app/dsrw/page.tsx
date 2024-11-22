import dynamic from "next/dynamic";

import SearchForm from "@/features/ads/search-form-dsrw";
import { Footer } from "@/features/web/footer";
import Logo from "@/components/Logo";
import Script from "next/script";

const Dsrw = ({ searchParams }: { searchParams: { q: string } }) => {
  const q = searchParams.q ?? "Loan";

  const QuerySearchAds = dynamic(
    () => import("@/features/ads/query-search-ads"),
    { ssr: false }
  );

  return (
    <div className="w-full">
      <Script id="google-custom-search-script" strategy="afterInteractive">{`
          function initializeGoogleCustomSearch() {
          google.search.cse.element.render({
            gname: "searchInstance",
            div: "results",
            tag: "search",
            attributes: { linkTarget: "" },
          });
          const ele = google.search.cse.element.getElement("searchInstance");
          if (ele) {
            ele.execute('loan');
          }
        }
        window.__gcse = {
          parsetags: "explicit",
          initializationCallback: initializeGoogleCustomSearch,
        };
      `}</Script>
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

export default Dsrw;
