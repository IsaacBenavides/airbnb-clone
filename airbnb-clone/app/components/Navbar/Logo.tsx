"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Logo() {
  const router = useRouter();
  return (
    <Image
      src="/images/logo.png"
      alt="Logo"
      className="hidden md:block cursor-pointer"
      width={100}
      height={100}
    />
  );
}
