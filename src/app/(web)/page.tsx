import { AllArticles } from "@/features/web/all-articles";
import { RecentArticles } from "@/features/web/recent-articles";

export default function Home() {
  return (
    <main className="space-y-6 my-4">
      <RecentArticles />
      <AllArticles />
    </main>
  );
}
