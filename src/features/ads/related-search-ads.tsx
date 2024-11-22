// @ts-nocheck
"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import ClientWrapper from "@/components/client-wrapper";
import { SITE_URL } from "@/constant";

const RelatedSearchAds = () => {
  const pathname = usePathname();

  useEffect(() => {
    var pageOptions = {
      pubId: "partner-pub-2471157282524836", // Make sure that this is the correct client ID!
      styleId: "4122597845",
      relatedSearchTargeting: "content",
      resultsPageBaseUrl: `${SITE_URL}/dsrw`, // Enter the base URL for your results page
      resultsPageQueryParam: "q", // (Default to 'q') Matches the param denoting the query on the search page
    };

    var rsblock1 = {
      container: "relatedsearches1",
      relatedSearches: 6,
    };

    (function (g, o) {
      (g[o] =
        g[o] ||
        function () {
          (g[o]["q"] = g[o]["q"] || []).push(arguments);
        }),
        (g[o]["t"] = 1 * new Date());
    })(window, "_googCsa");

    _googCsa("relatedsearch", pageOptions, rsblock1);
  }, [pathname]);

  return (
    <ClientWrapper>
      <div id="relatedsearches1"></div>
    </ClientWrapper>
  );
};

export default RelatedSearchAds;
