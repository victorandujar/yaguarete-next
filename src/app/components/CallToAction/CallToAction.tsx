"use client";

import { useTranslations } from "next-intl";
import Image from "next/image";
import { useEffect, useState } from "react";
import { images } from "./utils/images";
import { CallToActionImage } from "@/interfaces/Images";

const CallToAction = (): React.ReactElement => {
  const t = useTranslations("CallToAction");

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

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

  const handleOnClick = (index: number) => {
    setCurrentImageIndex(index);
  };

  return (
    <section
      className="border-b border-black mobile:border-none w-full flex justify-center h-fit mobile:px-5"
      style={{
        backgroundImage: isMobile
          ? "url('/images/callToAction-mobile-img.webp')"
          : "",
        backgroundSize: "contain",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >
      <div className="w-1/3 flex flex-col justify-center px-32 py-24  mobile:hidden">
        <div className="relative flex flex-col items-center gap-6 min-h-[500px] ">
          <div className="w-full h-full p-2 relative flex flex-col items-center justify-center gap-16 min-h-[500px]">
            <Image
              src={images[currentImageIndex].src}
              alt="About photo. Jungle leaves"
              layout="fill"
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
      </div>
      <div className="p-20 py-10 w-1/2 border-l text-black mobile:text-white mobile:text-center border-black mobile:border-none flex flex-col justify-between mobile:w-full  mobile:p-0">
        <section className="flex flex-col mobile:flex-col-reverse gap-10 mobile:gap-64 w-4/5 pt-16 mobile:px-2 mobile:py-8 mobile:pt-8 mobile:pb-8 mobile:w-full">
          <span className="font-ppHatton text-l mobile:text-ml">
            {t("title")}
          </span>
          <span className="text-l  font-light mobile:text-left">
            {t("top-text")}
          </span>
        </section>
        <section className="font-ppHatton flex flex-col gap-3 pt-20 tracking-[2px] pb-32 mobile:hidden">
          <span className="text-ml">{t("close-text-top")} </span>
        </section>
      </div>
    </section>
  );
};

export default CallToAction;
