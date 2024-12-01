import Image from "next/image";
import Link from "next/link";
import React from "react";
import FallbackImg from "../../../../public/FallbackImg.png";
import { CollectionItem } from "@/Interface/CollectionInterface";

const ImageCard = ({ item }: { item: CollectionItem }) => {
  return (
    <Link
      href={`#`}
      className="relative group block overflow-hidden rounded"
    >
      <div className="overflow-hidden aspect-square">
        <Image
          width={100}
          height={100}
          src={item.featuredAsset?.source ?? FallbackImg}
          alt={item.featuredAsset?.name || "Image"}
          className="object-cover w-full h-full transition-all duration-300 group-hover:scale-125 rounded"
        />
      </div>
      <div className="absolute left-3 top-3">
        <p className="sm:px-3 sm:py-1.5 px-1.5 py-1 text-[8px] sm:text-xs font-bold tracking-wide text-gray-900 uppercase bg-white rounded-full">
          {item.name}
        </p>
      </div>
    </Link>
  );
};

export default ImageCard;
