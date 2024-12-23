"use client";

import Link from "next/link";
import { informations, socialMedias } from "./utils/informationSections";
import { environments } from "@/app/utils/environments";
import { useTranslations } from "next-intl";
import { useState, useEffect } from "react";

const InformationSection = (): React.ReactElement => {
  const t = useTranslations("Information");
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 800);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <section className="flex justify-between mobile:flex-col text-black px-[340px] mobile:px-0 ">
      <div className="border-r border-black w-1/3 mobile:w-full mobile:border-r-0 mobile:border-b">
        <section className="h-full flex flex-col mobile:items-center gap-10 py-20 mobile:py-10">
          <h3 className="text-xl font-ppHatton mobile:hidden">Síguenos</h3>
          <ul className="flex flex-col mobile:flex-row gap-10">
            {socialMedias.map((social) => (
              <li key={social.id} className="">
                <Link
                  href={social.url}
                  target="_blank"
                  className="tracking-[2px] flex items-center gap-5"
                >
                  {social.icon}
                  <span className="mobile:hidden">{social.name}</span>
                </Link>
              </li>
            ))}
          </ul>
        </section>
      </div>
      <div className="border-r border-black w-[39%] mobile:w-full mobile:border-none">
        <section className="h-full flex flex-col items-start mobile:items-center gap-10 py-20 mobile:px-5">
          <h3 className="text-xl font-ppHatton ">
            {isMobile ? "Aquí te esperamos" : "Visítanos"}
          </h3>
          <iframe
            src={environments.googleMap}
            className="w-full h-full aspect-[4/3] max-w-[400px] "
            loading="lazy"
            style={{ border: "none" }}
          />
        </section>
      </div>
      <section className="h-full flex flex-col gap-10 py-20 mobile:hidden">
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
