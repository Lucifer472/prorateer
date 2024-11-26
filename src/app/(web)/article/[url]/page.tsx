import { redirect } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import dynamic from "next/dynamic";
import { FaFacebook, FaWhatsapp, FaXTwitter } from "react-icons/fa6";
import { IoIosMail, IoMdHome } from "react-icons/io";

import { PopularArticles } from "@/features/web/popular-articles";
import { BlogFormatter } from "@/features/web/blog-formatter";
import { TopStories } from "@/features/web/top-stories";

import { getBlogByUrl } from "@/data/blog";
import { LocalDate, TimeToRead } from "@/lib/utils";

import { BlogContent } from "@/types";
import { SITE_URL } from "@/constant";

const ArticlePage = async ({ params }: { params: { url: string } }) => {
  const article = await getBlogByUrl(params.url);

  if (!article) {
    return redirect("/");
  }

  const RelatedSearchAds = dynamic(
    () => import("@/features/ads/related-search-ads"),
    {
      ssr: false,
    }
  );

  const content = article.content as BlogContent;

  return (
    <main className="w-full flex flex-col lg:grid lg:grid-cols-4">
      <div className="col-span-3 w-full space-y-2 px-2">
        <div className="flex items-center justify-between w-full">
          <div className="flex items-center justify-center font-light gap-x-1">
            <IoMdHome className="size-[16px]" />{" "}
            <span className="text-xs  text-neutral-600">
              Published on {LocalDate(article.createdAt)}
            </span>
          </div>
          <span className="text-xs  text-neutral-600">
            {TimeToRead(content.blocks.length)}
          </span>
        </div>
        <article className="w-full">
          <h1 className="text-xl sm:text-2xl md:text-3xl font-medium text-neutral-900">
            {article.title}
          </h1>
          <RelatedSearchAds />
          <BlogFormatter content={content} />
        </article>
        <div className="w-full flex items-center justify-center flex-col gap-y-4">
          <div className="size-[100px] relative rounded-md">
            <Image
              src={
                article.user.image ? article.user.image : "/dummy-profile.png"
              }
              alt="Profile Picture"
              style={{ objectFit: "cover", borderRadius: "12px" }}
              fill
            />
          </div>
          <p className="text-center text-sm font-normal text-neutral-600">
            Published on {LocalDate(article.createdAt)} <br />
            By {article.user.name}
          </p>
          <p className="text-center font-normal text-neutral-600">Share now!</p>
          <div className="flex items-center justify-center gap-x-2">
            <Link
              className="flex items-center justify-center size-[32px] bg-neutral-100 rounded-sm"
              rel="nofollow noopener noreferrer"
              href={
                "https://www.facebook.com/sharer.php?u=" +
                encodeURIComponent(SITE_URL + "/article/" + article.url)
              }
            >
              <FaFacebook className="text-blue-600" />{" "}
            </Link>
            <Link
              className="flex items-center justify-center size-[32px] bg-neutral-100 rounded-sm"
              rel="nofollow noopener noreferrer"
              href={
                "https://twitter.com/intent/tweet?url=" +
                encodeURIComponent(SITE_URL + "/article/" + article.url)
              }
            >
              <FaXTwitter className="text-black" />{" "}
            </Link>
            <Link
              className="flex items-center justify-center size-[32px] bg-neutral-100 rounded-sm"
              rel="nofollow noopener noreferrer"
              href={
                "https://api.whatsapp.com/send?text=" +
                encodeURIComponent(SITE_URL + "/article/" + article.url)
              }
            >
              <FaWhatsapp className="text-green-600" />{" "}
            </Link>
            <Link
              className="flex items-center justify-center size-[32px] bg-neutral-100 rounded-sm"
              rel="nofollow noopener noreferrer"
              href={
                "mailto:?subject=" +
                article.title +
                "&body=" +
                encodeURIComponent(SITE_URL + "/article/" + article.url)
              }
            >
              <IoIosMail className="text-gray-600" />{" "}
            </Link>
          </div>
        </div>
        <TopStories />
      </div>
      <div className="col-span-1 w-full px-2 relative">
        <PopularArticles />
      </div>
    </main>
  );
};

export default ArticlePage;
