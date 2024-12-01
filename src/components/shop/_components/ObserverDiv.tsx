import React from "react";

const ObserverDiv = ({
  loadMoreRef,
}: {
  loadMoreRef:  React.MutableRefObject<HTMLDivElement | null>
}) => {
  return (
    <div
      ref={loadMoreRef}
      className="w-full h-10 flex justify-center items-center"
    ></div>
  );
};

export default ObserverDiv;
