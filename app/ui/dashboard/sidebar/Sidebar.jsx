import { MdLogout } from "react-icons/md";
import { menuItems } from "@/data/data";
import MenuLink from "./menuLink/MenuLink";
import Image from "next/image";

const Sidebar = () => {
  return (
    <div className="sticky top-10">
      <div className="flex items-center gap-2 mb-4">
        <Image
          className="rounded-full object-cover "
          src="/noavatar.png"
          width={50}
          height={50}
          alt="profile"
        />
        <div className="flex flex-col">
          <span className="font-bold">Amireza Najari</span>
          <span className="text-xs text-soft">Adminastaror</span>
        </div>
      </div>
      <ul className="overflow-y-auto">
        {menuItems.map((cat) => (
          <li key={cat.title}>
            <span className="text-soft text-sm">{cat.title}</span>
            {cat.list.map((item) => (
              <MenuLink item={item} key={item.title} />
            ))}
          </li>
        ))}
        <div className="flex items-center gap-2 p-4 ">
          <MdLogout />
          <button>Logout</button>
        </div>
      </ul>
    </div>
  );
};
export default Sidebar;
