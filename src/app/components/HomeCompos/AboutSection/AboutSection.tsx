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
        className="px-60 mobile:px-0 laptop:px-10 py-20 mobile:py-0 flex flex-col items-center w-full min-h-screen bg-cover bg-center bg-no-repeat relative pt-24"
        ref={sectionRef}
      >
        <div
          className="absolute inset-0 bg-black opacity-40 z-0"
          style={{
            backgroundImage: "url('/images/about-section-bg.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div
          className={`flex mobile:flex-col bg-background shadow-custom rounded-3xl w-full z-10 relative mobile:bg-inherit mobile:shadow-none transition-all duration-1000 ease-out transform ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"
          }`}
        >
          <section className="w-full relative mobile:h-[500px]">
            <Image
              src="/images/footer-img.webp"
              alt="Esoteric background. About section."
              fill
              className="rounded-tl-3xl rounded-bl-3xl mobile:rounded-none"
            />
            <Image
              src="/images/tipografia2.svg"
              alt="Esoteric background. About section."
              className={`rounded-tl-3xl rounded-bl-3xl z-50 absolute top-[15%] left-[12%] mobile:w-96 mobile:left-1 mobile:top-10 transition-all duration-1000 ease-out transform ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-20 opacity-0"
              }`}
              width={500}
              height={300}
            />
          </section>
          <section
            className={`flex flex-col items-center mobile:px-5 px-16 py-10 w-full laptop:pr-0 gap-10 relative transition-all duration-1000 ease-out transform ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-20 opacity-0"
            }`}
          >
            <Image
              src="/icons/sun-about.svg"
              alt="Esoteric sun. About section."
              width={300}
              height={300}
              className="object-contain"
            />
            <span className="text-black text-m laptop:text-m text-center w-4/5 mobile:w-full font-light ">
              {t("top-text")}
            </span>
            <span className="text-black text-m laptop:text-m font-light w-4/5 mobile:w-full text-center">
              {t("bottom-text")}
            </span>
            <div className="w-full flex flex-col items-center justify-center pt-5 text-ms ">
              <span className="font-ppHatton font-bold text-black text-center tracking-[1px]">
                {t("close-text-top")}
              </span>
              <span className="font-ppHatton font-bold text-black text-center tracking-[1px]">
                {t("close-text-bottom")}
              </span>
            </div>
          </section>
        </div>
      </section>
    </div>
  );
};

export default AboutSection;
