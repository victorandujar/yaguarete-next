"use client";

import { eventsContentSections } from "@/app/[locale]/events/utils/eventsSections";
import { useTranslations } from "next-intl";
import Image from "next/image";

const EventsContentGallery = (): React.ReactElement => {
  const t = useTranslations("Events");
  return (
    <section className="px-80 mobile:px-5 pt-20 flex flex-col gap-5">
      <h4 className="font-ppHatton font-bold">{t("title-middle")}</h4>
      <ul className="flex justify-between mobile:flex-col mobile:items-center">
        {eventsContentSections.map((section, index) => (
          <li
            key={section.id}
            className={`${index === eventsContentSections.length - 1 ? "border-none" : "border-r"} mobile:px-0 mobile:border-r-0 mobile:border-b mobile:pt-8 border-black ${
              index === 0 ? "px-0 pr-10" : "px-10"
            }`}
          >
            <div className="flex flex-col gap-5 items-center pb-5">
              <Image
                alt={section.text}
                src={section.image}
                width={300}
                height={200}
              />
              <span className="text-center font-ppHatton text-sm font-bold w-4/5">
                {t(section.text)}
              </span>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default EventsContentGallery;
