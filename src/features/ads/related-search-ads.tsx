"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

import { SITE_URL } from "@/constant";

const RelatedSearchAds = () => {
  const pathname = usePathname();

  useEffect(() => {
    const script = document.createElement("script");
    script.type = "text/javascript";
    script.innerHTML = `
   
    var pageOptions = {
      "pubId": "partner-pub-2471157282524836", // Make sure that this is the correct client ID!
      "styleId": "4122597845",
      "relatedSearchTargeting": "content",
      "resultsPageBaseUrl": "${SITE_URL}/dsrw", // Enter the base URL for your results page
      "resultsPageQueryParam": "q" // (Default to 'q') Matches the param denoting the query on the search page
    };

    var rsblock1 = {
      "container": "relatedsearches1",
      "relatedSearches": 6
    };

    _googCsa('relatedsearch', pageOptions, rsblock1);
    
    `;

    document.body.appendChild(script);
    console.log(`Script loaded`);

    return () => {
      document.body.removeChild(script);
      console.log(`Script removed`);
    };
  }, [pathname]);

  return (
    <div className="w-full h-full" style={{ minHeight: "550px" }}>
      <div id="relatedsearches1"></div>
    </div>
  );
};

export default RelatedSearchAds;
