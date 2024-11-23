"use client";

import { getConsentCookie, setConsentCookie } from "@/lib/cookie";
import { useEffect, useState } from "react";

const CookieBanner = () => {
  const [consent, setConsent] = useState(true);

  useEffect(() => {
    getConsentCookie().then((res) => {
      if (res) {
        setConsent(true);
      } else {
        setConsent(false);
      }
    });
  }, []);

  const onClick = () => {
    setConsentCookie().then(() => {
      setConsent(true);
    });
  };

  if (consent) return;

  return (
    <div className="fixed bottom-0 left-0 z-50 w-full py-1 border-t border-neutral-300 bg-slate-100">
      <div className="max-w-screen-xl mx-auto w-full px-1 ">
        <p className="text-center text-[.7rem] leading-5 font-light">
          Prorateer uses functional cookies and non-personalized content. Click
          &apos;OK`&apos; to allow us and our partners to use your data for the
          best experience!{" "}
          <span
            className="text-[.8rem] underline cursor-pointer"
            onClick={onClick}
          >
            AGREE
          </span>
        </p>
      </div>
    </div>
  );
};

export default CookieBanner;
