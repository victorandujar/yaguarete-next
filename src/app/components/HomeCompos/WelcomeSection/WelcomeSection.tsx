"use client";

import { useTranslations } from "next-intl";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const WelcomeSection = (): React.ReactElement => {
  const t = useTranslations("WelcomeSection");
  const highLights = ["sit", "breath", "enjoy"];

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
    <section
      className="relative border-b border-black w-full flex overflow-hidden"
      ref={sectionRef}
    >
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover opacity-30 z-0"
      >
        <source src="/videos/water-b&w.mov" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="relative z-10 pl-80 pr-32 mobile:px-1 laptop:px-10 laptop:p-20 py-32 mobile:p-20 w-3/5 laptop:w-3/5 mobile:w-full  flex flex-col gap-5 mobile:items-center">
        <div
          className={`flex flex-col gap-5 mobile:items-center transition-all duration-1000 ease-out transform ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"
          }`}
        >
          <h2 className="font-ppHatton text-black text-xl mobile:text-center tracking-[2px] p-0 m-0">
            {t("title")} YAGUARETÉ
          </h2>
          <span className="font-ppHatton text-black text-ml mobile:text-m">
            ESOTERIC & SUSTAINABLE CAFÉ
          </span>
        </div>
        <div className={`pt-5 hidden mobile:block`}>
          <Image
            src={"/images/jungle-color.webp"}
            alt="About photo. Jungle leaves"
            width={250}
            height={150}
            className="object-cover rounded-lg"
          />
        </div>
        <Image
          src={"/icons/sol-small.svg"}
          alt="About photo. Jungle leaves"
          width={50}
          height={50}
          className="hidden mobile:block object-cover rounded-lg"
        />
        <section
          className={`flex flex-col gap-10 text-black pt-16 mobile:pt-5 text-m font-light mobile:px-5 transition-all duration-1000 ease-out transform ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"
          }`}
        >
          <span className="mobile:text-center">{t("top-text")}</span>
          <span className="mobile:text-center">{t("bottom-text")}</span>
        </section>
        <section className="font-ppHatton text-black flex flex-col mobile:items-center gap-10 pt-20 mobile:pt-5 text-ml">
          <div className="flex items-center justify-between mobile:hidden">
            {highLights.map((highLight, index) => (
              <div key={highLight} className="flex items-center gap-24">
                <span className="uppercase tracking-[2px]">{t(highLight)}</span>
                {index < highLights.length - 1 && (
                  <Image
                    src={"/icons/sol-small.svg"}
                    alt="About photo. Jungle leaves"
                    width={30}
                    height={30}
                    className="mobile:hidden object-cover rounded-lg"
                  />
                )}
              </div>
            ))}
          </div>
          <span>{t("close-text-bottom")}</span>
        </section>
        <Image
          src={"/icons/sol-small.svg"}
          alt="About photo. Jungle leaves"
          width={50}
          height={50}
          className="hidden mobile:block object-cover rounded-lg"
          loading="lazy"
        />
      </div>
      <div
        className={`w-2/5 flex justify-center mobile:hidden py-20 transition-all duration-1000 ease-out transform ${
          isVisible ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"
        }`}
      >
        <div
          className={`w-full h-full relative transition-all duration-1000 ease-out transform pr-60 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"
          }`}
        >
          <div className="w-full h-full relative shadow-custom rounded-lg">
            <Image
              src={"/images/jungle-color.webp"}
              alt="About photo. Jungle leaves"
              fill
              className="object-cover rounded-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WelcomeSection;
