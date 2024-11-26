import { redirect } from "next/navigation";

import Navigation from "@/features/dashboard/navigation";

import { getUser } from "@/data/user";
import { checkLogin } from "@/lib/check-login";

const DashboardLayout = async ({ children }: { children: React.ReactNode }) => {
  const email = await checkLogin();

  const user = await getUser(email);
  if (!user || user.role !== "ADMIN") {
    return redirect("/");
  }

  return (
    <div className="w-full">
      <Navigation email={email} user={user} />
      <div className="max-w-screen-lg mx-auto">{children}</div>
    </div>
  );
};

export default DashboardLayout;
