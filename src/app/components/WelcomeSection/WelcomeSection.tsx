import { useTranslations } from "next-intl";
import Image from "next/image";

const WelcomeSection = (): React.ReactElement => {
  const t = useTranslations("WelcomeSection");
  return (
    <section className="border-b border-black w-full flex h-fit">
      <div className="px-80 py-20 w-2/3 border-r border-black flex flex-col">
        <h2 className="font-ppHatton text-black text-xxl tracking-[2px] p-0 m-0">
          {t("title")} YAGUARETÉ
        </h2>
        <span className="font-ppHatton text-black text-l">
          ESOTERIC & SUSTAINABLE CAFÉ
        </span>
        <section className="flex flex-col gap-10 text-black w-4/5 pt-16 text-m">
          <span>{t("top-text")}</span>
          <span>{t("bottom-text")}</span>
        </section>
        <section className="font-ppHatton text-black flex flex-col gap-3 pt-20 text-ml">
          <span className="tracking-[2px]">{t("close-text-top")} </span>
          <span>{t("close-text-bottom")}</span>
        </section>
      </div>
      <div className="w-1/3 flex justify-center p-10">
        <div className="w-full h-full bg-white p-2 relative">
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
