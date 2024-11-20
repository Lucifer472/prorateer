"server-only";

import { auth } from "@/auth";
import { redirect } from "next/navigation";

export const checkLogin = async (redirectUrl?: string) => {
  const session = await auth();

  if (!session || !session.user || !session.user.email) {
    redirect("/sign-in");
  }

  return session.user.email;
};
