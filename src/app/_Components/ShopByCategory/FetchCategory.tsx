import { useInfiniteQuery } from "@tanstack/react-query";
import { useInView } from "@/hook/useInView";
import { UsefetchCollection } from "@/hook/useCollection";
import { useEffect } from "react";
import CategoryCard from "./CategoryList";

export const FetchCategory = () => {
  const { ref: loadMoreRef, inView } = useInView({ threshold: 0.5 });

  const { data, fetchNextPage, hasNextPage, isFetchingNextPage } =
    useInfiniteQuery({
      queryKey: ["collections"],
      queryFn: ({ pageParam = 0 }) => UsefetchCollection({ pageParam }),
      getNextPageParam: (lastPage) =>
        lastPage.hasMore ? lastPage.nextPage : undefined,
      initialPageParam: 0,
    });

  useEffect(() => {
    if (inView && hasNextPage) {
      fetchNextPage();
    }
  }, [inView, hasNextPage, fetchNextPage]);

  return (
    <div className="mt-4 flow-root">
      {data?.pages.flatMap((page, index) => (
        <CategoryCard key={index} data={page.items} />
      ))}

      <div
        ref={loadMoreRef as React.MutableRefObject<HTMLDivElement | null>}
        className="w-full h-10 flex justify-center items-center"
      >
        {isFetchingNextPage && <p>Loading more...</p>}
      </div>
    </div>
  );
};
