import Image from "next/image";
import Link from "next/link";

const Logo = () => {
  return (
    <Link href={"/"} className="flex items-center justify-center gap-1">
      <div className="relative aspect-square h-[43px]">
        <Image
          src={"/logo-mobile.png"}
          alt="Logo"
          fill
          style={{ objectFit: "contain" }}
        />
      </div>
    </Link>
  );
};

export default Logo;
