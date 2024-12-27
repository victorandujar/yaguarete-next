"use client";

import { headerSections } from "./utils/headerSections";
import Link from "next/link";
import Image from "next/image";
import CustomSelect from "../CustomSelect/CustomSelect";
import { useTranslations } from "next-intl";
import { HeaderSection } from "@/interfaces/Header";
import { useState } from "react";
import BurguerMenu from "../BurguerMenu/BurguerMenu";
import { useParams, usePathname, useRouter } from "next/navigation";

const Header = (): React.ReactElement => {
  const t = useTranslations("Header");
  const path = usePathname();
  const router = useRouter();
  const { locale } = useParams();

  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const handleLogoClick = () => {
    if (path === "/") {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    } else {
      router.push(`/${locale}`);
    }
  };

  return (
    <header className="fixed top-0 left-0 z-50 flex w-full items-center justify-between px-10 mobile:px-5 py-2 bg-background text-black">
      <button onClick={handleLogoClick}>
        <Image
          src="/images/logo-jaguar.png"
          height={50}
          alt="logo"
          width={50}
        />
      </button>

      <div className="flex gap-16 mobile:gap-8 items-start ">
        <ul className="flex gap-20 mobile:hidden">
          {headerSections.map((section: HeaderSection) => (
            <li
              key={section.id}
              className={`${path.includes(section.name) && "font-bold"}`}
            >
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
        <div className="hidden mobile:block">
          <BurguerMenu isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
        </div>
      </div>
    </header>
  );
};

export default Header;
