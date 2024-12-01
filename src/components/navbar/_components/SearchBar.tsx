"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { useState } from "react";

export function SearchBar() {
  const [showMobileSearch, setShowMobileSearch] = useState<boolean>(false);
  return (
    <div className="flex-1">
      <Search
        width={24}
        onClick={() => {
          setShowMobileSearch((prev: boolean) => !prev);
        }}
        color="#414141"
        className="ml-16 cursor-pointer block lg:hidden"
      />
      <div
        className={`flex-1 pr-6  lg:block hidden ${
          showMobileSearch ? "block " : ""
        }`}
      >
        <form method="get" action="/search" className="flex  h-10 group">
          <Input
            type="search"
            name="q"
            placeholder="What's on your mind today?"
            className="w-full h-10 rounded-l-full border focus:border-black border-r-0 border-subdued peer px-4 text-sm focus:!ring-0"
          />
          <Button
            type="submit"
            variant="outline"
            className="flex h-10 text-base items-center space-x-2 rounded-r-full border border-subdued peer-focus:border-black px-4 text-brand"
          >
            <Search width={16} color="#414141" />
            <span>Search</span>
          </Button>
        </form>
      </div>
    </div>
  );
}
