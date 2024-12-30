import { eventsGalleryImages } from "@/app/[locale]/events/utils/eventsSections";
import Image from "next/image";

const PictureGalleryRow = (): React.ReactElement => {
  return (
    <section className="border-t border-black py-10">
      <ul className="flex justify-between mobile:flex-col mobile:gap-5 items-center px-48 mobile:px-5">
        {eventsGalleryImages.map((image, index) => (
          <li key={image.id} className="w-96 h-full mobile:w-full">
            <Image
              alt="gallery image"
              src={image.src}
              width={350}
              height={300}
              className={`object-contain rounded-md mobile:object-cover w-80  ${index === 0 ? "h-[450px]" : "h-[550px]"} mobile:w-full mobile:h-96`}
            />
          </li>
        ))}
      </ul>
    </section>
  );
};

export default PictureGalleryRow;
