"use client";

import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import { BsDownload } from "react-icons/bs";

interface Props {
  color: string;
  title: string;
  download_text: string;
  menu_file: string;
}

const MenuDownloadSection = ({
  color,
  title,
  download_text,
  menu_file,
}: Props): React.ReactElement => {
  const bgColor = color === "primary" ? "bg-primary" : "bg-secondary";
  const t = useTranslations("Menu");

  return (
    <div className="flex flex-col items-center gap-8">
      <section
        className={`${bgColor} h-200 text-white w-96 p-5 flex flex-col items-center justify-between h-[550px] mobile:w-full`}
      >
        <section className="flex flex-col items-center gap-12">
          <div className="flex flex-col items-center relative">
            <Image
              alt="yaguarete logo"
              src={"/icons/yaguarete-logo-duo.svg"}
              width={300}
              height={200}
            />
            <span className="tracking-[5px] text-s absolute top-[140px]">
              · ESOTERIC CAFE ·
            </span>
          </div>
          <span className="uppercase font-ppHatton font-thin">{title}</span>
        </section>
        <section>
          <Image
            alt="yaguarete logo"
            src={"/images/mystic-leopard.png"}
            width={200}
            height={200}
          />
        </section>
      </section>
      <Link
        href={menu_file}
        className="font-ppHatton flex items-center gap-2 text-sm"
        download
        target="_blank"
      >
        <BsDownload />
        {download_text}
      </Link>
    </div>
  );
};

export default MenuDownloadSection;
