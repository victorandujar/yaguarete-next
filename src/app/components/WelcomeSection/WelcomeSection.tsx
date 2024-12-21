import { useTranslations } from "next-intl";
import Image from "next/image";

const WelcomeSection = (): React.ReactElement => {
  const t = useTranslations("WelcomeSection");
  return (
    <section className="border-b border-black w-full flex">
      <div className="px-80 mobile:px-1 py-32 mobile:p-20 w-2/3 mobile:w-full mobile:border-none border-r border-black flex flex-col gap-5 mobile:items-center">
        <div className="flex flex-col gap-5 mobile:items-center">
          <h2 className="font-ppHatton text-black text-xl mobile:text-center tracking-[2px] p-0 m-0">
            {t("title")} YAGUARETÉ
          </h2>
          <span className="font-ppHatton text-black text-ml mobile:text-m">
            ESOTERIC & SUSTAINABLE CAFÉ
          </span>
        </div>
        <div className="pt-5 hidden mobile:block">
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
        <section className="flex flex-col gap-10 text-black pt-16 mobile:pt-5 text-m font-light px-5">
          <span className="mobile:text-center">{t("top-text")}</span>
          <span className="mobile:text-center">{t("bottom-text")}</span>
        </section>
        <section className="font-ppHatton text-black flex flex-col mobile:items-center gap-3 pt-20 mobile:pt-5 text-ml">
          <span className="tracking-[2px]">{t("close-text-top")} </span>
          <span>{t("close-text-bottom")}</span>
        </section>
        <Image
          src={"/icons/sol-small.svg"}
          alt="About photo. Jungle leaves"
          width={50}
          height={50}
          className="hidden mobile:block object-cover rounded-lg"
        />
      </div>
      <div className="w-1/3 flex justify-center p-10 mobile:hidden">
        <div className="w-full h-full relative ">
          <Image
            src={"/images/jungle.jpg"}
            alt="About photo. Jungle leaves"
            layout="fill"
            className="object-cover rounded-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default WelcomeSection;
