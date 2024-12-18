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
      className="w-screen h-screen bg-cover bg-center bg-no-repeat relative"
      style={{ backgroundImage: "url('/IMAGENYAGUARETE-01-WEB.webp')" }}
    >
      <div className="flex w-full items-center flex-col relative">
        <Image
          src={"/sol.svg"}
          alt=""
          width={400}
          height={400}
          className={`absolute top-40 transition-opacity duration-1000 ${
            showSun ? "opacity-100" : "opacity-0"
          }`}
        />
        <div
          className={`absolute top-96 flex flex-col items-center transition-opacity duration-1000 ${
            showYaguarete ? "opacity-100" : "opacity-0"
          }`}
        >
          <Image
            src={"/YAGUARETETITULO.svg"}
            alt=""
            width={800}
            height={600}
            className="relative"
          />
          <span className="tracking-[10px] text-background uppercase absolute top-48">
            · esoteric cafe ·
          </span>
        </div>
      </div>
      <section
        className={`flex items-center justify-around absolute bottom-56 w-full transition-opacity duration-1000 ${
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
