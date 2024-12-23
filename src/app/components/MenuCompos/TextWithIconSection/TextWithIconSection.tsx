"use client";

import { useTranslations } from "next-intl";
import Image from "next/image";

interface Props {
  text: string;
}

const TextWithIconSection = ({ text }: Props): React.ReactElement => {
  const t = useTranslations("Menu");

  return (
    <section className="w-full flex flex-col items-center justify-between h-fit py-24 border-y border-black">
      <Image
        alt="flower icon"
        src={"/icons/flower-menu-icon.svg"}
        width={50}
        height={50}
      />
      <span className="text-center w-1/4 font-ppHatton font-thin pt-16">
        {t(text)}
      </span>
    </section>
  );
};

export default TextWithIconSection;
