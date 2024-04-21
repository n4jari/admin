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
} from "react-icons/md";

export const menuItems = [
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
        path: "/dashboard/transactions",
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
