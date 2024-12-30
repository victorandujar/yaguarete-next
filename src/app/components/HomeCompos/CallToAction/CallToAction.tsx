"use client";

import { useTranslations } from "next-intl";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { images } from "./utils/images";
import { CallToActionImage } from "@/interfaces/Images";

const CallToAction = (): React.ReactElement => {
  const t = useTranslations("CallToAction");

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 800);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1,
      );
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const imageChangeTimer = setTimeout(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1,
      );
    }, 5000);

    return () => clearTimeout(imageChangeTimer);
  }, [currentImageIndex]);

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

  const handleOnClick = (index: number) => {
    setCurrentImageIndex(index);
  };

  return (
    <section
      className="pt-20 mobile:pb-20 flex-col border-b border-black mobile:border-none w-full flex justify-center h-fit mobile:px-5 relative overflow-hidden mobile:h-[600px]"
      style={{
        backgroundImage: isMobile
          ? "url('/images/callToAction-mobile-img.webp')"
          : "",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
      ref={sectionRef}
    >
      <div
        className={`w-full text-black mobile:text-white mobile:text-center mobile:border-none flex flex-col justify-between items-center mobile:w-full mobile:p-0 transition-all duration-1000 ease-out transform  ${
          isVisible ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"
        }`}
      >
        <section className="flex flex-col mobile:flex-col-reverse items-center gap-10 mobile:gap-64 w-3/5 pt-5 mobile:px-2 mobile:py-8 mobile:pb-8 mobile:w-full">
          <span className="font-ppHatton text-l mobile:text-ml">
            {t("title")}
          </span>
          <span className="text-l text-center font-light mobile:text-left">
            {t("top-text")}
          </span>
        </section>
        <section className="font-ppHatton flex flex-col gap-3 pt-20 tracking-[2px] pb-20 mobile:hidden">
          <span className="text-ml">{t("close-text-top")} </span>
        </section>
      </div>
      <div
        className={`relative flex flex-col items-center gap-6 min-h-[500px] mobile:hidden transition-all duration-1000 ease-out transform  ${
          isVisible ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"
        }`}
      >
        <div className="w-[500px] h-80 p-2 relative flex flex-col items-center justify-center gap-16 min-h-[100px] shadow-custom rounded-lg">
          <Image
            src={images[currentImageIndex].src}
            alt="About photo. Jungle leaves"
            fill
            className="object-cover rounded-lg"
            loading="lazy"
          />
        </div>
        <div className="flex gap-2 pt-7">
          {images.map((image: CallToActionImage, index: number) => (
            <button
              key={image.id}
              className={`w-8 h-2 rounded-3xl border-2 border-gray-500 ${
                index === currentImageIndex ? "bg-black" : "bg-gray-300"
              }`}
              onClick={() => handleOnClick(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
