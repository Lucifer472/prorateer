import { IoIosAddCircle } from "react-icons/io";
import { RiAdminFill } from "react-icons/ri";
import { TiUserAdd } from "react-icons/ti";

export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL!;

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

export const footerLinks = [
  {
    label: "© 2024 Copyright Prorateer",
    link: "/copyright",
  },
  {
    label: "About Us",
    link: "/about-us",
  },
  {
    label: "Disclaimer",
    link: "/disclaimer",
  },
  {
    label: "Privacy Policy",
    link: "/privacy-policy",
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
  {
    value: "jobs-education",
    label: "Jobs & Education",
  },
  {
    value: "arts-entertainment",
    label: "Arts & Entertainment",
  },
  {
    value: "computers-electronics",
    label: "Computers & Electronics",
  },
  {
    value: "law-government",
    label: "Law & Government",
  },
  {
    value: "pets-animal",
    label: "Pets & Animals",
  },
  {
    value: "sensitive-subjects",
    label: "Sensitive Subjects",
  },
  {
    value: "home-garden",
    label: "Home & Garden",
  },
  {
    value: "news",
    label: "News",
  },
  {
    value: "real-estate",
    label: "Real Estate",
  },
  {
    value: "shopping",
    label: "Shopping",
  },
  {
    value: "beauty-fitness",
    label: "Beauty & Fitness",
  },
  {
    value: "food-drink",
    label: "Food & Drink",
  },
  {
    value: "internet-telecom",
    label: "Internet & Telecom",
  },
  {
    value: "online-communities",
    label: "Online Communities",
  },
  {
    value: "reference",
    label: "Reference",
  },
  {
    value: "sports",
    label: "Sports",
  },
  {
    value: "business-industrial",
    label: "Business & Industrial",
  },
  {
    value: "games",
    label: "Games",
  },
  {
    value: "people-society",
    label: "People & Society",
  },
  {
    value: "science",
    label: "Science",
  },
  {
    value: "travel-transportation",
    label: "Travel & Transportation",
  },
];
