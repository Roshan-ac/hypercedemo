import React from "react";
import ImageCard from "@/components/features/ImageCard";
import { CollectionItem } from "@/types/CollectionInterface";

const CategoryList = ({ data }: { data: CollectionItem[] }) => {
  return (
    <div className="grid grid-cols-2 gap-6 mt-4 lg:mt-5 lg:gap-4 lg:grid-cols-4">
      {data.map((item: CollectionItem) => (
        <ImageCard key={item.id} item={item} />
      ))}
    </div>
  );
};

export default CategoryList;
