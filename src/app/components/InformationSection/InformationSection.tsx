"use client";

import Link from "next/link";
import { informations, socialMedias } from "./utils/informationSections";
import { environments } from "@/app/utils/environments";
import { useTranslations } from "next-intl";

const InformationSection = (): React.ReactElement => {
  const t = useTranslations("Information");
  return (
    <section className="flex justify-between text-black px-[340px] ">
      <div className="border-r border-black w-1/3">
        <section className="h-full flex flex-col  gap-10 py-20">
          <h3 className="text-xl font-ppHatton">Síguenos</h3>
          <ul className="flex flex-col gap-10">
            {socialMedias.map((social) => (
              <li key={social.id} className="flex items-center gap-5">
                {social.icon}
                <Link
                  href={social.url}
                  target="_blank"
                  className="tracking-[2px]"
                >
                  {social.name}
                </Link>
              </li>
            ))}
          </ul>
        </section>
      </div>
      <div className="border-r border-black w-1/3 ">
        <section className="h-full flex flex-col items-start gap-10 py-20 ">
          <h3 className="text-xl font-ppHatton">Visítanos</h3>
          <iframe
            src={environments.googleMap}
            className="w-full h-full aspect-[4/3] max-w-[400px]"
            loading="lazy"
            style={{ border: "none" }}
          />
        </section>
      </div>
      <section className="h-full flex flex-col gap-10 py-20 ">
        <h3 className="text-xl font-ppHatton">Información</h3>
        <ul className="flex flex-col gap-5">
          {informations.map((info) => (
            <li key={info.id}>
              <Link href={""} className="uppercase tracking-[2px] text-ms">
                {t(info.name)}
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </section>
  );
};

export default InformationSection;
