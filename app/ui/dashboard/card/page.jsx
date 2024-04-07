import React from "react";
import { MdSupervisedUserCircle } from "react-icons/md";

const Card = () => {
  return (
    <div className="flex w-full gap-4 p-4 bg-soft cursor-pointer rounded-md bg-hover-sidebar">
      <MdSupervisedUserCircle size={24}/>
      <div className="flex flex-col gap-4">
        <span>Total Users</span>
        <span className="text-lg  font-bold">10.273</span>
        <span className="text-sm">
          <span className="text-green-500">12%</span> more than previous week
        </span>
      </div>
    </div>
  );
};

export default Card;
