import { useTranslations } from "next-intl";
import Image from "next/image";

interface Props {
  content_translation: string;
  icon: string;
  image: string;
}

const TopPageWelcomeSection = ({
  content_translation,
  icon,
  image,
}: Props): React.ReactElement => {
  const t = useTranslations(content_translation);

  return (
    <section className="border-t border-black flex justify-between mobile:flex-col w-full px-80 mobile:px-5 mobile:py-10 mobile:gap-20">
      <section className="flex flex-col justify-start gap-10 font-ppHatton w-2/5 py-24 mobile:py-0 mobile:w-full mobile:items-center">
        <div>
          <h2 className="text-xl mobile:text-center">{t("title")}</h2>
          <h4 className="mobile:text-center">{t("subtitle")}</h4>
        </div>
        <span className="font-nunito mobile:text-center">{t("main-text")}</span>
        <Image
          alt="menu photo bowl"
          src={icon}
          width={200}
          height={200}
          className="object-contain rounded-3xl"
        />
      </section>
      <Image
        alt="menu photo"
        src={image}
        width={600}
        height={200}
        className="object-contain rounded-3xl mobile:rounded-xl"
      />
    </section>
  );
};

export default TopPageWelcomeSection;
