"use client";

import { useTranslations } from "next-intl";
import Image from "next/image";

interface Props {
  text: string;
  icon: string;
  content_translation: string;
}

const TextWithIconSection = ({
  text,
  content_translation,
  icon,
}: Props): React.ReactElement => {
  const t = useTranslations(content_translation);

  return (
    <section className="w-full flex flex-col items-center justify-between h-fit py-24 border-y border-black">
      <Image alt="flower icon" src={icon} width={50} height={50} />
      <span className="text-center w-1/4 font-ppHatton font-thin pt-16 mobile:w-full mobile:px-5">
        {t(text)}
      </span>
    </section>
  );
};

export default TextWithIconSection;
