// @ts-nocheck
"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

import ClientWrapper from "@/components/client-wrapper";
import { SITE_URL } from "@/constant";

const QuerySearchAds = ({ q }: { q: string }) => {
  const pathname = usePathname();

  useEffect(() => {
    var pageOptions = {
      pubId: "partner-pub-2471157282524836", // Make sure that this is the correct client ID!
      query: q, // Make sure that the correct query is placed here!
      styleId: "4122597845",
      adsafe: "high",
      resultsPageBaseUrl: `${SITE_URL}/dsrw`, // Enter the base URL for your results page
      resultsPageQueryParam: "q", // (Default to 'q') Matches the param denoting the query on the search page
    };

    var adblock1 = {
      container: "afscontainer1",
    };

    var adblock2 = {
      container: "afscontainer2",
    };

    var adblock3 = {
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

    window.__gcse = {
      parsetags: "explicit",
      initializationCallback: function () {
        const searchBox = google.search.cse.element.getElement(
          "gcse-searchresults-only"
        );
        if (searchBox) {
          searchBox.execute(q);
        }
      },
    };
  }, [pathname, q]);

  return (
    <ClientWrapper>
      <div className="w-full">
        <div id="afscontainer1"></div>
        <div id="afscontainer2"></div>
        <div class="gcse-searchresults-only"></div>
        <div id="afscontainer3"></div>
      </div>
    </ClientWrapper>
  );
};

export default QuerySearchAds;
