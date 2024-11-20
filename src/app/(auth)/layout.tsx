import { redirect } from "next/navigation";
import { auth } from "@/auth";

const AuthLayout = async ({ children }: { children: React.ReactNode }) => {
  const session = await auth();

  if (session) {
    redirect("/");
  }

  return (
    <main className="min-h-screen w-full max-w-screen-2xl mx-auto px-4 sm:px-2 flex items-center justify-center">
      {children}
    </main>
  );
};

export default AuthLayout;
