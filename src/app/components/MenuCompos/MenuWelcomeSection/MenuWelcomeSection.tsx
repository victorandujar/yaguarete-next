import { useTranslations } from "next-intl";
import Image from "next/image";

const MenuWelcomeSection = (): React.ReactElement => {
  const t = useTranslations("Menu");

  return (
    <section className="border-t border-black flex justify-between w-full px-80 ">
      <section className="flex flex-col justify-start gap-10 font-ppHatton w-2/5 py-24">
        <div>
          <h2 className="text-xl">{t("title")}</h2>
          <h4>{t("subtitle")}</h4>
        </div>
        <span className="font-nunito">{t("main-text")}</span>
        <Image
          alt="menu photo bowl"
          src={"/icons/menu-bowl-icon.svg"}
          width={200}
          height={200}
          className="object-contain rounded-3xl"
        />
      </section>
      <Image
        alt="menu photo"
        src={"/images/menu-top-photo.webp"}
        width={600}
        height={200}
        className="object-contain rounded-3xl"
      />
    </section>
  );
};

export default MenuWelcomeSection;
