"use client";

import { useEffect, useState } from "react";
import dynamic from "next/dynamic";

const ClientWrapper = ({ children }: { children: React.ReactNode }) => {
  const [isClient, setClient] = useState(false);

  useEffect(() => {
    setClient(true);
  }, []);

  if (!isClient) return;

  return children;
};

export default dynamic(() => Promise.resolve(ClientWrapper), { ssr: false });
