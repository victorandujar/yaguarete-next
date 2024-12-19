"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";

const HeroSection = (): React.ReactElement => {
  const [showSun, setShowSun] = useState(false);
  const [showYaguarete, setShowYaguarete] = useState(false);
  const [showFeedText, setShowFeedText] = useState(false);

  const t = useTranslations("HeroSection");

  useEffect(() => {
    const timer1 = setTimeout(() => setShowSun(true), 500);
    const timer2 = setTimeout(() => setShowYaguarete(true), 1500);
    const timer3 = setTimeout(() => setShowFeedText(true), 2500);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
    };
  }, []);

  return (
    <section
      className="w-screen h-screen bg-cover bg-center bg-no-repeat relative pt-24"
      style={{ backgroundImage: "url('/images/hero-background.webp')" }}
    >
      <div className="flex w-full items-center flex-col relative ">
        <Image
          src={"/icons/sol.svg"}
          alt=""
          width={400}
          height={400}
          className={`absolute top-32 transition-opacity duration-1000 ${
            showSun ? "opacity-100" : "opacity-0"
          }`}
        />
        <div
          className={`absolute top-96 flex flex-col items-center transition-opacity duration-1000 ${
            showYaguarete ? "opacity-100" : "opacity-0"
          }`}
        >
          <Image
            src={"/icons/YAGUARETETITULO.svg"}
            alt=""
            width={900}
            height={600}
            className="relative"
          />
          <span className="tracking-[10px] text-background uppercase absolute top-56">
            · esoteric cafe ·
          </span>
        </div>
      </div>
      <section
        className={`flex items-center justify-around absolute bottom-16 w-full transition-opacity duration-1000 ${
          showFeedText ? "opacity-100" : "opacity-0"
        }`}
      >
        <span className="tracking-[10px] text-background uppercase">
          {t("feed")}
        </span>
        <span className="tracking-[10px] text-background uppercase">
          {t("body-soul")}
        </span>
      </section>
    </section>
  );
};

export default HeroSection;
