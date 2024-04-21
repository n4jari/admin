"use client";

import { MainContext } from "@/context/MainContext";
import { usePathname } from "next/navigation";
import { useContext } from "react";
import {
  MdMenu,
  MdNotifications,
  MdOutlineChat,
  MdPublic,
  MdSearch,
} from "react-icons/md";

const Navbar = () => {
  const { setOpenMenu } = useContext(MainContext);

  const pathname = usePathname();

  return (
    <div className="flex justify-between bg-soft rounded-md px-5 py-3 items-center mb-2 max-sm:justify-center">
      <div className="uppercase max-sm:hidden">{pathname.split("/").pop()}</div>
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-1 rounded-md px-2 py-1 bg-active-sidebar">
          <MdSearch />
          <input
            className="bg-transparent text-xs p-1 outline-none border-none"
            type="text"
            placeholder="Search .."
          />
        </div>
        <div className="flex gap-4">
          <MdOutlineChat size={20} />
          <MdNotifications size={20} />
          <MdPublic size={20} />
        </div>
        <button
          className=" hidden max-md:block border-none"
          onClick={() => setOpenMenu((prev) => !prev)}
        >
          <MdMenu fontSize="large" />
        </button>
      </div>
    </div>
  );
};

export default Navbar;
