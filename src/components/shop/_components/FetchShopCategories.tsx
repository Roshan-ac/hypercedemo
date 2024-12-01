import { useInfiniteQuery } from "@tanstack/react-query";
import { useInView } from "@/lib/hook/useInView";
import { UsefetchCollection } from "@/lib/hook/useCollection";
import { Suspense, useEffect } from "react";
import CategoryList from "./CategoryList";
import ObserverDiv from "./ObserverDiv";
import ImageLoader from "@/components/features/ImageLoader";

export const FetchShopCategories = () => {
  const { ref: loadMoreRef, inView } = useInView({
    threshold: 0,
    rootMargin: "200px 0px",
  });

  const { data, fetchNextPage, hasNextPage, isFetchingNextPage } =
    useInfiniteQuery({
      queryKey: ["collections"],
      queryFn: ({ pageParam = 0 }) => UsefetchCollection({ pageParam }),
      getNextPageParam: (lastPage) =>
        lastPage.hasMore ? lastPage.nextPage : undefined,
      initialPageParam: 0,
      staleTime: 1000 * 60 * 5,
    });

  useEffect(() => {
    if (inView && hasNextPage && !isFetchingNextPage) {
      fetchNextPage();
    }
  }, [inView, hasNextPage, fetchNextPage, isFetchingNextPage]);

  return (
    <div className="mt-4 flow-root">
      <Suspense fallback={<ImageLoader count={4} />}>
        {data?.pages.flatMap((page, index) => (
          <CategoryList key={index} data={page.items} />
        ))}
      </Suspense>
      <ObserverDiv
        loadMoreRef={
          loadMoreRef as React.MutableRefObject<HTMLDivElement | null>
        }
      />
    </div>
  );
};
