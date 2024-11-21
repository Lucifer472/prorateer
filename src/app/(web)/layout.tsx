import { Footer } from "@/features/web/footer";
import { WebNavigation } from "@/features/web/navigation";

const WebLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="w-full relative">
      <WebNavigation />
      <div className="max-w-screen-xl mx-auto w-full mb-4 mt-[86px]">
        {children}
      </div>
      <Footer />
    </div>
  );
};

export default WebLayout;
