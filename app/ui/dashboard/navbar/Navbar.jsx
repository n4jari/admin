"use client";

import { usePathname } from "next/navigation";
import {
  MdNotifications,
  MdOutlineChat,
  MdPublic,
  MdSearch,
} from "react-icons/md";

const Navbar = () => {
  const pathname = usePathname();
  return (
    <div className="flex justify-between bg-soft rounded-md px-5 py-3 items-center mb-2">
      <div className="uppercase">{pathname.split("/").pop()}</div>
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
      </div>
    </div>
  );
};

export default Navbar;
