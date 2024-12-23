import { Information, SocialMedia } from "@/interfaces/Information";
import { AiFillTikTok, AiOutlineYoutube } from "react-icons/ai";
import { FaInstagram } from "react-icons/fa";

export const socialMedias: SocialMedia[] = [
  {
    id: 1,
    name: "@yaguarco",
    icon: <FaInstagram size={30} />,
    url: "https://www.instagram.com/yaguarco/",
  },
  {
    id: 2,
    name: "@yaguarco",
    icon: <AiOutlineYoutube size={30} />,
    url: "https://www.youtube.com/@yaguarco",
  },
  {
    id: 3,
    name: "@yaguarco",
    icon: <AiFillTikTok size={30} />,
    url: "https://www.tiktok.com/@yaguarco",
  },
];

export const informations: Information[] = [
  { id: 1, name: "contact" },
  {
    id: 2,
    name: "newsletter",
  },
];
