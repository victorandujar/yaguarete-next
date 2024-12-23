"use client";

import { useTranslations } from "next-intl";
import { useEffect, useState } from "react";
import { headerSections } from "../Header/utils/headerSections";
import { RiCloseLargeFill } from "react-icons/ri";
import Image from "next/image";
import { IoIosArrowForward } from "react-icons/io";
import Link from "next/link";

interface Props {
  isVisible: boolean;
  handleMenuOpen: () => void;
}

const SideBar = ({ isVisible, handleMenuOpen }: Props): React.ReactElement => {
  const t = useTranslations("Header");
  const [animateItems, setAnimateItems] = useState(false);

  useEffect(() => {
    if (isVisible) {
      const timeout = setTimeout(() => {
        setAnimateItems(true);
      }, 200);
      return () => clearTimeout(timeout);
    } else {
      setAnimateItems(false);
    }
  }, [isVisible]);

  return (
    <div
      className={`fixed inset-0 bg-black bg-opacity-50 z-50 transition-opacity duration-300 ${
        isVisible
          ? "opacity-100 pointer-events-auto"
          : "opacity-0 pointer-events-none"
      }`}
    >
      <nav
        className={`fixed top-0 right-0 w-80 h-full bg-background shadow-lg transform origin-top transition-transform duration-500 ease-in-out flex flex-col items-center justify-between pb-5 ${
          animateItems
            ? "translate-x-0 opacity-100"
            : "translate-x-20 opacity-0"
        }`}
      >
        <button
          onClick={handleMenuOpen}
          className="absolute top-4 right-4 text-black"
        >
          <RiCloseLargeFill size={25} />
        </button>
        <ul className="flex flex-col gap-5 w-full mt-16 px-4">
          {headerSections.map((section, index) => (
            <li
              className={`w-full px-2 py-5 border-b border-black last:border-none transform transition-all duration-500 ease-in-out  ${
                animateItems
                  ? "translate-x-0 opacity-100"
                  : "translate-x-20 opacity-0"
              }`}
              style={{
                transitionDelay: `${index * 100}ms`,
              }}
              key={section.id}
            >
              <Link
                href={section.link}
                className="flex items-center justify-between"
                onClick={handleMenuOpen}
              >
                <span className="font-ppHatton text-ml">{t(section.name)}</span>
                <IoIosArrowForward />
              </Link>
            </li>
          ))}
        </ul>
        <div
          className={`transform transition-all duration-700 ease-in-out ${
            animateItems
              ? "translate-y-0 opacity-100"
              : "translate-y-20 opacity-0"
          } `}
        >
          <Image
            src={"/icons/yaguarete-logo-black.svg"}
            alt="logo"
            width={150}
            height={200}
          />
        </div>
      </nav>
    </div>
  );
};

export default SideBar;
