import type { Metadata } from "next";
import Script from "next/script";
import { Toaster } from "sonner";

import { Inter } from "next/font/google";

import { cn } from "@/lib/utils";

import CookieBanner from "@/components/cookie-banner";

import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Search Hello Gandhinagar",
  description: "Google Authorized Ads Search",
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
        src="https://www.google.com/adsense/search/ads.js"
      />
      <Script
        id="Google-Search-Custom-ads"
        async
        src="https://cse.google.com/cse.js?cx=142fbffd1b55a478f"
      />
      <body className={cn(inter.className)}>
        <Toaster />
        {children}
        <CookieBanner />
      </body>
    </html>
  );
}
