"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";

const HeroSection = (): React.ReactElement => {
  const [backgroundImage, setBackgroundImage] = useState<string>("");
  const [showSun, setShowSun] = useState(false);
  const [showYaguarete, setShowYaguarete] = useState(false);
  const [showFeedText, setShowFeedText] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const t = useTranslations("HeroSection");

  useEffect(() => {
    const updateLayout = () => {
      const isMobileView = window.innerWidth < 800;
      setIsMobile(isMobileView);
      setBackgroundImage(
        isMobileView
          ? "url('/images/footer-img.webp')"
          : "url('/images/hero-background.webp')",
      );
    };

    // Set initial values
    updateLayout();

    // Listen for window resize
    window.addEventListener("resize", updateLayout);

    return () => window.removeEventListener("resize", updateLayout);
  }, []);

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
      className="w-full h-screen bg-cover bg-center bg-no-repeat relative pt-24"
      style={{
        backgroundImage,
      }}
    >
      <div className="flex w-full items-center flex-col relative">
        {!isMobile && (
          <Image
            src={"/icons/sol.svg"}
            alt=""
            width={isMobile ? 200 : 400}
            height={400}
            className={`absolute top-32 transition-opacity duration-1000 ${
              showSun ? "opacity-100" : "opacity-0"
            }`}
          />
        )}
        <div
          className={`absolute mobile:top-48 top-96 flex flex-col items-center transition-opacity duration-1000 ${
            showYaguarete ? "opacity-100" : "opacity-0"
          }`}
        >
          <Image
            src={
              isMobile
                ? "/icons/logo-yaguarete-mobile.svg"
                : "/icons/logo-yaguarete-desktop.svg"
            }
            alt=""
            width={isMobile ? 200 : 900}
            height={600}
            className="relative"
          />
          <span className="mobile:w-[220px] tracking-[10px] text-background uppercase absolute top-56 mobile:text-s mobile:tracking-[4px] mobile:bg-softGray mobile:py-1 mobile:rounded-2xl mobile:text-black text-center">
            · esoteric cafe ·
          </span>
        </div>
      </div>
      <section
        className={`flex items-center justify-around gap-2 mobile:justify-center absolute bottom-16 w-full transition-opacity duration-1000 tracking-[10px] mobile:tracking-[5px] mobile:text-s ${
          showFeedText ? "opacity-100" : "opacity-0"
        }`}
      >
        <span className="text-background uppercase">{t("feed")}</span>
        <span className="text-background uppercase">{t("body-soul")}</span>
      </section>
    </section>
  );
};

export default HeroSection;
