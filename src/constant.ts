import { IoIosAddCircle } from "react-icons/io";
import { RiAdminFill } from "react-icons/ri";
import { TiUserAdd } from "react-icons/ti";

export const adminNav = [
  {
    label: "Admin",
    path: "/admin",
    icon: RiAdminFill,
  },
  {
    label: "Blogs",
    path: "/admin/list",
    icon: IoIosAddCircle,
  },
  {
    label: "Users",
    path: "/admin/users",
    icon: TiUserAdd,
  },
];

export const blogCategory = [
  {
    value: "health",
    label: "Health",
  },
  {
    value: "finance",
    label: "Finance",
  },
  {
    value: "auto-mobile",
    label: "Auto Mobile",
  },
];
