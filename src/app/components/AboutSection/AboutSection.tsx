import { useTranslations } from "next-intl";
import Image from "next/image";

const AboutSection = (): React.ReactElement => {
  const t = useTranslations("AboutSection");

  return (
    <div className="w-full border-b border-black">
      <section className="px-80 py-20">
        <section className="flex items-start w-full pr-40 gap-10">
          <div className="flex flex-col gap-10 flex-1">
            <h2 className="font-ppHatton text-black text-xxl tracking-[2px] p-0 m-0">
              {t("title")}
            </h2>
            <span className="font-ppHatton text-black text-l">
              {t("subtitle")}
            </span>
            <span className="text-black text-m w-[75%]">{t("top-text")}</span>
          </div>
          <div className="flex justify-center items-center w-[500px] h-[500px]">
            <Image
              src="/icons/sun-about.svg"
              alt="Esoteric sun. About section."
              width={500}
              height={400}
              className="object-contain"
            />
          </div>
        </section>
        <section className="flex items-center justify-between w-full pr-40 gap-32  ">
          <div className="flex justify-center items-center w-[500px] h-[400px] pb-48">
            <Image
              src="/icons/star-about.svg"
              alt="Esoteric sun. About section."
              width={500}
              height={400}
              className="object-contain"
            />
          </div>
          <div className="flex justify-end gap-10 flex-1 pb-48">
            <span className="text-black text-m  w-[80%]">
              {t("bottom-text")}
            </span>
          </div>
        </section>
        <div className="w-full flex flex-col items-center justify-center">
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
