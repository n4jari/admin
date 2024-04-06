"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const MenuLink = ({ item }) => {
  const pathname = usePathname();
  return (
    <Link
      href={item.path}
      className={`flex items-center gap-2 p-4 bg-hover-sidebar rounded-md my-1 ${
        pathname === item.path && "bg-active-sidebar"
      }`}
    >
      {item.icon}
      {item.title}
    </Link>
  );
};

export default MenuLink;
