// @ts-nocheck
"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

import ClientWrapper from "@/components/client-wrapper";
import { SITE_URL } from "@/constant";
import RelatedSearchAds from "./related-search-ads";

const QuerySearchAds = ({ q }: { q: string }) => {
  const pathname = usePathname();

  function initializeGoogleCustomSearch() {
    google.search.cse.element.render({
      gname: "searchInstance",
      div: "results",
      tag: "search",
      attributes: { linkTarget: "" },
    });
  }
  function myWebResultsRenderedCallback() {
    const ele = google.search.cse.element.getElement("searchInstance");
    if (ele) {
      ele.execute(q);
    }
  }
  window.__gcse = {
    parsetags: "explicit",
    initializationCallback: initializeGoogleCustomSearch,
  };

  useEffect(() => {
    var pageOptions = {
      pubId: "partner-pub-2471157282524836", // Make sure that this is the correct client ID!
      query: q, // Make sure that the correct query is placed here!
      styleId: "4122597845",
      adsafe: "high",
      resultsPageBaseUrl: `${SITE_URL}/dsrw`, // Enter the base URL for your results page
      resultsPageQueryParam: "q", // (Default to 'q') Matches the param denoting the query on the search page
    };
    var rsblock1 = {
      container: "relatedsearches1",
      relatedSearches: 6,
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

    _googCsa("ads", pageOptions, adblock1, adblock2, adblock3, rsblock1);
  }, [pathname, q]);

  return (
    <ClientWrapper>
      <div className="w-full">
        <div id="afscontainer1"></div>
        <div id="afscontainer2"></div>
        <div id="results"></div>
        <div id="afscontainer3"></div>
        <div id="relatedsearches1"></div>
        <RelatedSearchAds />
      </div>
    </ClientWrapper>
  );
};

export default QuerySearchAds;
