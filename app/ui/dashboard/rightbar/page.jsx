import Image from "next/image";
import React from "react";
import { MdPlayCircleFilled, MdReadMore } from "react-icons/md";

const RightBar = () => {
  return (
    <div className="fixed flex flex-col gap-4">
      <div
        className="relative p-4 rounded-md"
        style={{ backgroundImage: "linear-gradient(to top,#182237,#253352)" }}
      >
        <div className="w-1/2 h-1/2 absolute right-0 bottom-0">
          <Image
            className=" opacity-30 object-contain"
            src={"/astronaut.png"}
            alt=""
            fill
          />
        </div>
        <div className="flex flex-col gap-4">
          <span className="font-bold">Available Now</span>
          <h3 className="text-soft font-medium text-sm">
            How to use the new version of the admin dashboard?
          </h3>
          <span>Takes 4 minutes to learn</span>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Culpa ad
            repellat quae, est sunt porro dicta at itaque asperiores doloremque,
            tempora possimus. Odit atque saepe, quis sapiente accusantium
            numquam ipsa?
          </p>
          <button className="flex items-center gap-1 py-1 px-2 text-sm font-medium bg-indigo-500 hover:bg-indigo-600 rounded-md border-none w-fit cursor-pointer">
            <MdPlayCircleFilled />
            Watch
          </button>
        </div>
      </div>
      <div
        className="relative p-4 rounded-md"
        style={{ backgroundImage: "linear-gradient(to top,#182237,#253352)" }}
      >
        <div className="flex flex-col gap-4">
          <span className="font-bold">Comming Soon</span>
          <h3 className="text-soft font-medium text-sm">
            New server actions are available, partial pre-rendering is .....
          </h3>
          <span>Boost your productivity</span>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Culpa ad
            repellat quae, est sunt porro dicta at itaque asperiores doloremque,
            tempora possimus. Odit atque saepe, quis sapiente accusantium
            numquam ipsa?
          </p>
          <button className="flex items-center gap-1 py-1 px-2 text-sm font-medium bg-indigo-500 hover:bg-indigo-600 rounded-md border-none w-fit cursor-pointer">
            <MdReadMore />
            Learn
          </button>
        </div>
      </div>
    </div>
  );
};

export default RightBar;
