"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

const Logo = () => {
  const router = useRouter();

  return (
    <div
      className="flex items-center justify-center"
      onClick={() => router.push("/")}>
      <Image
        className=" md:block cursor-pointer"
        src="/images/logo.png"
        height="100"
        width="40"
        alt="Logo"
      />
      <div
        onClick={() => router.push("/")}
        className="ml-2 hidden md:block text-rose-500 font-bold text-xl uppercase cursor-pointer">
        Detta Travel
      </div>
    </div>
  );
};

export default Logo;
