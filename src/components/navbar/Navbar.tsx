import React from "react";
import LogoBar from "./_components/LogoBar";
import { CollectionMenu } from "./_components/CollectionMenu";
import { SearchBar } from "./_components/SearchBar";
import UserMenu from "./_components/UserMenu";
import { Separator } from "@/components/ui/separator";
import { MobileSideBar } from "./_components/MobileSideBar";

const Navbar = () => {
  return (
    <nav className=" sticky z-50 shadow-sm w-full">
      <div className="p-4   max-w-8xl  mx-auto">
        <div className="flex items-center space-x-8 justify-center">
          <LogoBar />
          <CollectionMenu />
          <Separator
            orientation="vertical"
            className=" h-6 bg-[#646b72] lg:block hidden"
          />
          <SearchBar />
          <UserMenu />
          <MobileSideBar />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
