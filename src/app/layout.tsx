import type { Metadata } from "next";
import Script from "next/script";
import { Toaster } from "sonner";

import { Inter } from "next/font/google";

import { cn } from "@/lib/utils";

import CookieBanner from "@/components/cookie-banner";

import "./globals.css";
import { DESCRIPTION, KEYWORD, SITE_URL, TITLE } from "@/constant";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: `${TITLE}`,
  description: DESCRIPTION,
  keywords: KEYWORD,
  robots: "index follow",
  twitter: {
    card: "summary_large_image",
    site: TITLE,
    title: `${TITLE}`,
    description: DESCRIPTION,
  },
  openGraph: {
    type: "website",
    siteName: `${TITLE}`,
    description: DESCRIPTION,
    url: SITE_URL,
    countryName: "USA",
  },
  metadataBase: new URL(SITE_URL),
  alternates: {
    canonical: "/",
  },
  publisher: "Truepub Media",
  icons: "/favicon.ico",
};

export const revalidate = 0;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Script
        id="Google-Search-ads"
        async
        type="text/javascript"
        src="https://www.google.com/adsense/search/ads.js"
      />
      <Script
        id="google-tag-manager-code-2"
        async
        src="https://www.googletagmanager.com/gtag/js?id=AW-11501672319"
      />
      <Script
        strategy="afterInteractive"
        id="google-tag-manager-code"
      >{`window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'AW-11501672319');
`}</Script>
      <Script
        strategy="afterInteractive"
        id="google-tag-manager-code-3"
      >{`gtag('event', 'conversion', {
      'send_to': 'AW-11501672319/e5LFCP_X7PsZEP-utuwq',
      'value': 1.0,
      'currency': 'INR'
  });
`}</Script>
      <Script
        id="google-search-custom-ads-code"
        type="text/javascript"
        strategy="afterInteractive"
      >
        {`(function(g,o){g[o]=g[o]||function(){(g[o]['q']=g[o]['q']||[]).push(
  arguments)},g[o]['t']=1*new Date})(window,'_googCsa');`}
      </Script>
      <body className={cn(inter.className)}>
        <Toaster />
        {children}
        <CookieBanner />
      </body>
    </html>
  );
}
