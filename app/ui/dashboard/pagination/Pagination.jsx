import React from "react";

const Pagination = () => {
  return (
    <div className="flex justify-between p-2 text-sm">
      <button className="py-1 px-2 rounded-md bg-white hover:bg-gray-200 text-black disabled:cursor-not-allowed" disabled>
        Previous
      </button>
      <button className="py-1 px-2 rounded-md bg-white text-black hover:bg-gray-200 disabled:cursor-not-allowed">
        Next
      </button>
    </div>
  );
};

export default Pagination;
