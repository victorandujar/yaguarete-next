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
      <div className="w-1/3 flex flex-col justify-center px-40 py-20">
        <div className="relative flex flex-col items-center gap-6 min-h-[500px]">
          <div className="w-full h-full p-2 relative flex flex-col items-center justify-center gap-16 min-h-[500px]">
            <Image
              src={images[currentImageIndex].src}
              alt="About photo. Jungle leaves"
              layout="fill"
              className="object-cover rounded-lg"
            />
          </div>
          <div className="flex gap-2">
            {images.map((image: CallToActionImage, index: number) => (
              <button
                key={image.id}
                className={`w-3 h-3 rounded-full border-2 border-gray-500 ${
                  index === currentImageIndex ? "bg-black" : "bg-gray-300"
                }`}
                onClick={() => handleOnClick(index)}
              />
            ))}
          </div>
        </div>
      </div>
      <div className="p-20 w-1/2 border-l border-black flex flex-col">
        <span className="font-ppHatton text-black text-l">{t("title")}</span>
        <section className="flex flex-col gap-10 text-black w-4/5 pt-16 text-xl font-light">
          <span>{t("top-text")}</span>
        </section>
        <section className="font-ppHatton text-black flex flex-col gap-3 pt-20 text-ml">
          <span className="tracking-[2px]">{t("close-text-top")} </span>
          <span>{t("close-text-bottom")}</span>
        </section>
      </div>
    </section>
  );
};

export default CallToAction;
