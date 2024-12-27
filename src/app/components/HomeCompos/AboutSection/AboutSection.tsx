"use client";

import { useTranslations } from "next-intl";
import Image from "next/image";
import { useState, useRef, useEffect } from "react";

const AboutSection = (): React.ReactElement => {
  const t = useTranslations("AboutSection");

  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.2 },
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div className="w-full border-b border-black mobile:border-none">
      <section
        className="px-80 mobile:px-5 laptop:px-10 py-20 flex flex-col"
        ref={sectionRef}
      >
        <section
          className={`flex mobile:flex-col items-start mobile:items-center w-full pr-40 mobile:pr-0 laptop:pr-0 gap-10 relative transition-all duration-1000 ease-out transform ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"
          }`}
        >
          <div className="flex flex-col gap-2 flex-1">
            <h2 className="font-ppHatton text-black text-xl tracking-[2px] p-0 m-0 mobile:text-center">
              {t("title")}
            </h2>
            <span className="font-ppHatton text-black text-ml mobile:text-center">
              {t("subtitle")}
            </span>
            <span className="text-black text-ml laptop:text-m mobile:text-center w-[50%] mobile:w-full font-light pt-16 mobile:pt-12">
              {t("top-text")}
            </span>
          </div>
          <div className="flex justify-center items-center mobile:w-72 mobile:h-64 w-[450px] h-[450px] laptop:w-96 absolute right-48 laptop:right-16 mobile:right-0 mobile:pt-4 laptop:top-0 mobile:relative">
            <Image
              src="/icons/sun-about.svg"
              alt="Esoteric sun. About section."
              width={450}
              height={400}
              className="object-contain"
            />
          </div>
        </section>
        <section
          className={`flex mobile:flex-col-reverse items-center justify-between w-full pr-40 laptop:pr-0 mobile:pr-0 gap-32 mobile:gap-0 relative  transition-all duration-1000 ease-out transform ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"
          }`}
        >
          <div className="flex justify-center items-center mobile:w-72 mobile:h-64 w-[450px] h-[450px] laptop:w-96 absolute mobile:relative laptop:left-16 top-24 laptop:top-8 mobile:top-8">
            <Image
              src="/icons/star-about.svg"
              alt="Esoteric sun. About section."
              width={450}
              height={400}
              className="object-contain"
            />
          </div>
          <div className="flex justify-end gap-10 flex-1 pt-56 mobile:pt-16">
            <span className="text-black text-ml laptop:text-m font-light w-[50%] mobile:w-full mobile:text-center">
              {t("bottom-text")}
            </span>
          </div>
        </section>
        <div className="w-full flex flex-col items-center justify-center pt-40 mobile:pt-20 text-ml mobile:text-m">
          <span className="font-ppHatton font-bold text-black text-center tracking-[1px]">
            {t("close-text-top")}
          </span>
          <span className="font-ppHatton font-bold text-black text-center tracking-[1px]">
            {t("close-text-bottom")}
          </span>
        </div>
      </section>
    </div>
  );
};

export default AboutSection;
