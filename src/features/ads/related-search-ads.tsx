// @ts-nocheck
"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

import { SITE_URL } from "@/constant";

const RelatedSearchAds = () => {
  const pathname = usePathname();

  useEffect(() => {
    const pageOptions = {
      pubId: "partner-pub-2471157282524836",
      styleId: "4122597845",
      relatedSearchTargeting: "content",
      resultsPageBaseUrl: `${SITE_URL}/dsrw`,
      resultsPageQueryParam: "q",
    };

    const rsblock1 = {
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
    <div
      id="relatedsearches1"
      style={{ width: "100%", minHeight: "500px" }}
    ></div>
  );
};

export default RelatedSearchAds;
