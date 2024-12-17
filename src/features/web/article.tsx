"use client";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

import { BlogFormatter } from "./blog-formatter";
import RelatedSearchAds from "../ads/related-search-ads";

export const Article = ({ article }: { article: any }) => {
  const [isReadMore, setReadMore] = useState(article.isReadMore);

  if (isReadMore) {
    const firstParagraph = article.content.blocks.find(
      (b: any) => b.type === "paragraph"
    );

    return (
      <article className="w-full">
        <h1 className="text-xl sm:text-2xl md:text-3xl font-medium text-neutral-900">
          {article.title}
        </h1>
        <RelatedSearchAds />
        <div className="prose w-full max-w-full sm:max-w-[95%] blog-styles my-6 ">
          <p dangerouslySetInnerHTML={{ __html: firstParagraph.data.text }}></p>
        </div>
        <div className="w-full flex items-center justify-center  my-6">
          <button
            onClick={() => setReadMore(false)}
            className="w-[40%] h-[40px] text-base rounded-full bg-gray-100 gap-2 flex items-center justify-center"
          >
            Read More...
            <ChevronDown className="size-4" />
          </button>
        </div>
      </article>
    );
  }

  return (
    <article className="w-full">
      <h1 className="text-xl sm:text-2xl md:text-3xl font-medium text-neutral-900">
        {article.title}
      </h1>
      <RelatedSearchAds />
      <BlogFormatter content={article.content} />
    </article>
  );
};
