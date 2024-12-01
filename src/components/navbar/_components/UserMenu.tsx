import { Separator } from "@/components/ui/separator";
import {  ShoppingCart } from "lucide-react";
import Link from "next/link";
import React from "react";

const UserMenu = () => {
  const routes = [
    {
      href: "/signin",
      label: "Sign in",
    },
    {
      href: "/signup",
      label: "Sign up",
    },
  ];
  return (
    <div className=" items-center space-x-4 flex">
      <ShoppingCart className=" cursor-pointer" />
      <Separator orientation="vertical" className=" h-6 bg-[#BABEC3] lg:block hidden" />
      <div className="lg:flex items-center  hidden space-x-3 font-normal text-sm">
        {routes.map((route, index) => (
          <Link key={index} href={route.href} className="hover:underline">
            {route.label}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default UserMenu;
