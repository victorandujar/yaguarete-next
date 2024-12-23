import paths from "@/app/utils/paths";
import { HeaderSection } from "@/interfaces/Header";

export const headerSections: HeaderSection[] = [
  {
    id: 1,
    name: "events",
    link: "",
  },
  // {
  //   id: 2,
  //   name: "shop",
  //   link: "",
  // },
  {
    id: 3,
    name: "menu",
    link: paths.menu,
  },
  {
    id: 4,
    name: "contact",
    link: "",
  },
  // {
  //   id: 5,
  //   name: "newsletter",
  //   link: "",
  //   isVisible: true,
  // },
];
