import { useTranslations } from "next-intl";
import Image from "next/image";

const AboutSection = (): React.ReactElement => {
  const t = useTranslations("AboutSection");

  return (
    <div className="w-full border-b border-black">
      <section className="px-80 py-20 flex flex-col">
        <section className="flex items-start w-full pr-40 gap-10 relative">
          <div className="flex flex-col gap-2 flex-1">
            <h2 className="font-ppHatton text-black text-xl tracking-[2px] p-0 m-0">
              {t("title")}
            </h2>
            <span className="font-ppHatton text-black text-ml">
              {t("subtitle")}
            </span>
            <span className="text-black text-ml w-[50%] font-light pt-16">
              {t("top-text")}
            </span>
          </div>
          <div className="flex justify-center items-center w-[450px] h-[450px] absolute right-48">
            <Image
              src="/icons/sun-about.svg"
              alt="Esoteric sun. About section."
              width={450}
              height={400}
              className="object-contain"
            />
          </div>
        </section>
        <section className="flex items-center justify-between w-full pr-40 gap-32 relative">
          <div className="flex justify-center items-center w-[450px] h-[450px] absolute top-24">
            <Image
              src="/icons/star-about.svg"
              alt="Esoteric sun. About section."
              width={450}
              height={400}
              className="object-contain"
            />
          </div>
          <div className="flex justify-end gap-10 flex-1 pt-56">
            <span className="text-black text-ml font-light w-[50%]">
              {t("bottom-text")}
            </span>
          </div>
        </section>
        <div className="w-full flex flex-col items-center justify-center pt-40">
          <span className="font-ppHatton font-bold text-black text-center text-ml tracking-[1px]">
            {t("close-text-top")}
          </span>
          <span className="font-ppHatton font-bold text-black text-center text-ml tracking-[1px]">
            {t("close-text-bottom")}
          </span>
        </div>
      </section>
    </div>
  );
};

export default AboutSection;
