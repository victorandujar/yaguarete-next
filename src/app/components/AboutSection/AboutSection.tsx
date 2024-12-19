import { useTranslations } from "next-intl";
import Image from "next/image";

const AboutSection = (): React.ReactElement => {
  const t = useTranslations("AboutSection");

  return (
    <div className="w-full border-b border-black">
      <section className="px-80 py-20 flex flex-col">
        <section className="flex items-start w-full pr-40 gap-10 relative">
          <div className="flex flex-col gap-10 flex-1">
            <h2 className="font-ppHatton text-black text-xxl tracking-[2px] p-0 m-0">
              {t("title")}
            </h2>
            <span className="font-ppHatton text-black text-l">
              {t("subtitle")}
            </span>
            <span className="text-black text-ml w-[50%] font-light">
              {t("top-text")}
            </span>
          </div>
          <div className="flex justify-center items-center w-[500px] h-[500px] absolute right-72">
            <Image
              src="/icons/sun-about.svg"
              alt="Esoteric sun. About section."
              width={500}
              height={400}
              className="object-contain"
            />
          </div>
        </section>
        <section className="flex items-center justify-between w-full pr-40 gap-32 relative">
          <div className="flex justify-center items-center w-[500px] h-[400px] absolute top-24 left-10">
            <Image
              src="/icons/star-about.svg"
              alt="Esoteric sun. About section."
              width={500}
              height={400}
              className="object-contain"
            />
          </div>
          <div className="flex justify-end gap-10 flex-1 pt-72">
            <span className="text-black text-ml font-light w-[50%]">
              {t("bottom-text")}
            </span>
          </div>
        </section>
        <div className="w-full flex flex-col items-center justify-center pt-48">
          <span className="font-ppHatton font-bold text-black text-center text-l tracking-[1px]">
            {t("close-text-top")}
          </span>
          <span className="font-ppHatton font-bold text-black text-center text-l tracking-[1px]">
            {t("close-text-bottom")}
          </span>
        </div>
      </section>
    </div>
  );
};

export default AboutSection;
