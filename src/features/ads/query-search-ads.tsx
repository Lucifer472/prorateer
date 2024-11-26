// @ts-nocheck
"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

import { SITE_URL } from "@/constant";

const QuerySearchAds = ({ q }: { q: string }) => {
  const pathname = usePathname();

  useEffect(() => {
    const pageOptions = {
      pubId: "partner-pub-2471157282524836", // Make sure that this is the correct client ID!
      query: q, // Make sure that the correct query is placed here!
      styleId: "4122597845",
      adsafe: "high",
      resultsPageBaseUrl: `${SITE_URL}/dsrw`, // Enter the base URL for your results page
      resultsPageQueryParam: "q", // (Default to 'q') Matches the param denoting the query on the search page
    };

    const adblock1 = {
      container: "afscontainer1",
    };

    const adblock2 = {
      container: "afscontainer2",
    };

    const adblock3 = {
      container: "afscontainer3",
    };

    (function (g, o) {
      (g[o] =
        g[o] ||
        function () {
          (g[o]["q"] = g[o]["q"] || []).push(arguments);
        }),
        (g[o]["t"] = 1 * new Date());
    })(window, "_googCsa");

    _googCsa("ads", pageOptions, adblock1, adblock2, adblock3);
  }, [pathname, q]);

  return (
    <div className="w-full my-6">
      <div id="afscontainer1"></div>
      <div id="afscontainer2"></div>
      <p className="text-left w-full text-sm text-neutral-900 border-b border-neutral-300">
        Web Result
      </p>
      <div class="gcse-searchresults-only"></div>
      <div id="afscontainer3"></div>
    </div>
  );
};

export default QuerySearchAds;
