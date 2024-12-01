"use client";
import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import Image from "next/image";

export function CollectionMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const collections = [
    {
      title: "Jwellery",
      href: "/collections/jwellery",
    },
    {
      title: "Electronics",
      href: "/collections/electronics",
    },
    {
      title: "Clothing",
      href: "/collections/clothing",
    },
    {
      title: "Shoes",
      href: "/collections/shoes",
    },
  ];

  return (
    <div
      className="relative group hidden lg:block"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <div className="flex items-center cursor-pointer space-x-2 py-3">
        <Image src="/collection.svg" alt="Collection" width={15} height={15} />
        <h2 className="font-medium text-sm flex items-center">Collections</h2>
        <ChevronDown
          size={18}
          className={`transition-transform duration-200 !text-xs font-normal ease-in-out ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </div>
      {isOpen && (
        <div className="absolute !z-[110] w-56 bg-white border rounded-md shadow-lg py-2">
          <div className="px-4 py-2 text-sm font-semibold text-gray-500">
            Our Collections
          </div>
          <hr className="my-2" />
          {collections.map((collection, index) => (
            <div
              key={index}
              className="px-4 py-1.5 text-sm font-medium hover:bg-gray-100 cursor-pointer flex justify-between"
            >
              {collection.title}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
