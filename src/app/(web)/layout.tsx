import { NuqsAdapter } from "nuqs/adapters/next/app";

import BackToTop from "@/components/back-to-top";

import { Footer } from "@/features/web/footer";
import { WebNavigation } from "@/features/web/navigation";

const WebLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <NuqsAdapter>
      <div className="w-full relative">
        <WebNavigation />
        <div className="max-w-screen-xl mx-auto w-full mb-4 mt-[86px]">
          {children}
        </div>
        <BackToTop />
        <Footer />
      </div>
    </NuqsAdapter>
  );
};

export default WebLayout;
