"use server";
import { cookies } from "next/headers";
export const setConsentCookie = async () => {
  cookies().set({
    name: "cookie-consent",
    value: "c3",
    httpOnly: true,
    path: "/",
  });

  return true;
};

export const getConsentCookie = async () => {
  const cookieStore = cookies();
  return cookieStore.get("cookie-consent");
};
