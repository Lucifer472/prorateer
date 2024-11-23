"use client";
import { useEffect, useState } from "react";
import { ArrowUpIcon } from "lucide-react";

const BackToTop = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  if (!isScrolled) {
    return null;
  }

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      onClick={handleScrollToTop}
      className="fixed flex md:hidden bottom-24 right-0 z-[5] size-[40px] bg-slate-50 rounded-l-md cursor-pointer  items-center justify-center shadow-lg border border-gray-300"
    >
      <ArrowUpIcon />
    </button>
  );
};

export default BackToTop;
