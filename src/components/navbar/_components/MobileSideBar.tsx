"use client";

import * as React from "react";
import { Menu } from "lucide-react";

import { Drawer, DrawerContent, DrawerTrigger } from "@/components/ui/drawer";
import { DialogTitle } from "@radix-ui/react-dialog";

export function MobileSideBar() {

  return (
    <Drawer direction="right">
      <DrawerTrigger asChild>
        <Menu className="lg:hidden block cursor-pointer" />
      </DrawerTrigger>
      <DrawerContent className="lg:hidden block bg-white w-full">
        <DialogTitle></DialogTitle>
      </DrawerContent>
    </Drawer>
  );
}
