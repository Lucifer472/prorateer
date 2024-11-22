"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

const Logo = () => {
  const [logo, setLogo] = useState("/logo.png");

  useEffect(() => {
    const width = window.innerWidth;

    if (width < 768) {
      setLogo("/logo-mobile.png");
    }
  }, []);

  return (
    <Link href={"/"} className="relative block w-[32px] md:w-[132px] h-[43px]">
      <Image src={logo} alt="Logo" fill style={{ objectFit: "contain" }} />
    </Link>
  );
};

export default Logo;
