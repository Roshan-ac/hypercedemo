"use client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import React from "react";
import { FetchCategory } from "./FetchCategory";
const queryClient = new QueryClient();
const ShopByCategory = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <section className="pt-12">
        <section className="px-6 md:px-12 lg:px-6 mx-auto max-w-7xl 2xl:px-0">
          <h2
            id="category-heading"
            className="text-2xl text-gray-900 sm:text-3xl"
          >
            Shop by Category
          </h2>
          <FetchCategory />
        </section>
      </section>
    </QueryClientProvider>
  );
};

export default ShopByCategory;
