"use client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import React from "react";
import { FetchShopCategories } from "./_components/FetchShopCategories";
const queryClient = new QueryClient();
const Shop = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <section className="pt-12">
        <section className="px-6 md:px-12 lg:px-6 mx-auto max-w-7xl 2xl:px-0">
          <h2
            className="text-2xl text-gray-900 font-normal sm:text-3xl"
          >
            Shop by Category
          </h2>
          <FetchShopCategories />
        </section>
      </section>
    </QueryClientProvider>
  );
};

export default Shop;
