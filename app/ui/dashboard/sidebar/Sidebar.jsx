import {
  MdDashboard,
  MdSupervisedUserCircle,
  MdShoppingBag,
  MdHelpCenter,
  MdPeople,
  MdAnalytics,
  MdWork,
  MdOutlineSettings,
  MdAttachMoney,
  MdLogout,
} from "react-icons/md";

import MenuLink from "./menuLink/MenuLink";
import Image from "next/image";

const menuItems = [
  {
    title: "Pages",
    list: [
      {
        title: "Dashboard",
        path: "/dashboard",
        icon: <MdDashboard />,
      },
      {
        title: "Users",
        path: "/dashboard/users",
        icon: <MdSupervisedUserCircle />,
      },
      {
        title: "Products",
        path: "/dashboard/products",
        icon: <MdShoppingBag />,
      },
      {
        title: "Transactions",
        path: "/dashboard/#",
        icon: <MdAttachMoney />,
      },
    ],
  },
  {
    title: "Analytics",
    list: [
      {
        title: "Revenue",
        path: "/dashboard/#",
        icon: <MdWork />,
      },
      {
        title: "Reports",
        path: "/dashboard/#",
        icon: <MdAnalytics />,
      },
      {
        title: "Teams",
        path: "/dashboard/#",
        icon: <MdPeople />,
      },
    ],
  },
  {
    title: "User",
    list: [
      {
        title: "Settings",
        path: "/dashboard/#",
        icon: <MdOutlineSettings />,
      },
      {
        title: "Help",
        path: "/dashboard/#",
        icon: <MdHelpCenter />,
      },
    ],
  },
];
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
      <ul>
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
          <button className="">Logout</button>
        </div>
      </ul>
    </div>
  );
};
export default Sidebar;
