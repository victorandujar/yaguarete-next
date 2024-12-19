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

  const handleLogoClick = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <header className="fixed top-0 left-0 z-50 flex w-full items-center justify-between px-10 py-4 bg-background text-black">
      <button onClick={handleLogoClick}>
        <Image
          src="/images/logo-jaguar.png"
          height={50}
          alt="logo"
          width={50}
        />
      </button>
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
        <CustomSelect />
      </div>
    </header>
  );
};

export default Header;
