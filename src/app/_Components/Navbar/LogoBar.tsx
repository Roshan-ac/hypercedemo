import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const LogoBar = () => {
  return (
    <Link href={"/"} className="flex justify-center items-center space-x-2">
      <Image src="/logo.svg" alt="Hyperce Logo" width={30} height={30} />
      <div className="relative">
        <h2 className="font-bold text-2xl relative -top-1">Hyperce</h2>
        <Badge
          variant={"default"}
          className=" -bottom-3 rounded-full  px-2 py-[1px]  !text-xs absolute right-0"
        >
          demo
        </Badge>
      </div>
    </Link>
  );
};

export default LogoBar;
