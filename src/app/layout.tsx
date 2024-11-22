import type { Metadata } from "next";
import Script from "next/script";
import { Toaster } from "sonner";

import { Inter } from "next/font/google";

import { cn } from "@/lib/utils";

import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Prorateer",
  description: "Google Authorized Ads Search",
};

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
      <body className={cn(inter.className)}>
        <Toaster />
        {children}
      </body>
    </html>
  );
}
