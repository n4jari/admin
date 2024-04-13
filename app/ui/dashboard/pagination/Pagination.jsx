"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";

const Pagination = ({ count }) => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const page = parseInt(searchParams.get("page")) || 1;
  const params = new URLSearchParams(searchParams);
  const ITEM_PER_PAGE = 2;

  const hasPrev = ITEM_PER_PAGE * (page - 1) > 0;
  const hasNext = ITEM_PER_PAGE * (page - 1) + ITEM_PER_PAGE < count;

  const handleChangePage = (type) => {
    type === "prev"
      ? params.set("page", page - 1)
      : params.set("page", page + 1);
    replace(`${pathname}?${params}`);
  };

  return (
    <div className="flex justify-between p-2 text-sm">
      <button
        onClick={() => handleChangePage("prev")}
        className="py-1 px-2 rounded-md bg-white hover:bg-gray-200 text-black disabled:cursor-not-allowed"
        disabled={!hasPrev}
      >
        Previous
      </button>
      <button
        onClick={() => handleChangePage("next")}
        className="py-1 px-2 rounded-md bg-white text-black hover:bg-gray-200 disabled:cursor-not-allowed"
        disabled={!hasNext}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
