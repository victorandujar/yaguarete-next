"use client";

import { useTranslations } from "next-intl";
import Image from "next/image";
import { useEffect, useState } from "react";
import { images } from "./utils/images";
import { CallToActionImage } from "@/interfaces/Images";

const CallToAction = (): React.ReactElement => {
  const t = useTranslations("CallToAction");

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

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
    <section className="border-b border-black w-full flex justify-center h-fit">
      <div className="w-1/3 flex flex-col justify-center px-32 py-24">
        <div className="relative flex flex-col items-center gap-6 min-h-[500px]">
          <div className="w-full h-full p-2 relative flex flex-col items-center justify-center gap-16 min-h-[500px]">
            <Image
              src={images[currentImageIndex].src}
              alt="About photo. Jungle leaves"
              layout="fill"
              className="object-cover rounded-lg"
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
      <div className="p-20 py-10 w-1/2 border-l border-black flex flex-col justify-between ">
        <section className="flex flex-col gap-10 text-black w-4/5 pt-16 ">
          <span className="font-ppHatton text-black text-l">{t("title")}</span>
          <span className="text-l font-light">{t("top-text")}</span>
        </section>
        <section className="font-ppHatton text-black flex flex-col gap-3 pt-20 tracking-[2px] pb-32">
          <span className="text-ml">{t("close-text-top")} </span>
        </section>
      </div>
    </section>
  );
};

export default CallToAction;
