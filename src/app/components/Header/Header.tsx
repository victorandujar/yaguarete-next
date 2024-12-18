"use client";

import { headerSections } from "./utils/headerSections";
import Link from "next/link";
import Image from "next/image";
import CustomSelect from "../CustomSelect/CustomSelect";
import { useTranslations } from "next-intl";
import { HeaderSection } from "@/interfaces/Header";
import { FaShoppingCart } from "react-icons/fa";

const Header = (): React.ReactElement => {
  const t = useTranslations("Header");

  return (
    <header className="sticky top-0 z-50 flex items-center justify-between p-4 bg-background  text-black">
      <Image src="/logo-jaguar.png" height={50} alt="logo" width={50} />
      <div className="flex gap-16">
        <ul className="flex gap-20">
          {headerSections.map((section: HeaderSection) => (
            <li key={section.id}>
              <Link
                href={section.link}
                className="text-mss uppercase tracking-widest"
              >
                {t(section.name)}
              </Link>
            </li>
          ))}
        </ul>
        {/* <FaShoppingCart size={20} /> */}
        <CustomSelect />
      </div>
    </header>
  );
};

export default Header;
