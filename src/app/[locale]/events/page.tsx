import EventsContentGallery from "@/app/components/EventsCompos/EventsContentGallery/EventsContentGallery";
import PictureGalleryRow from "@/app/components/EventsCompos/PictureGalleryRow/PicturesGalleryRow";
import TextWithIconSection from "@/app/components/shared/TextWithIconSection/TextWithIconSection";
import TopPageWelcomeSection from "@/app/components/shared/TopPageWelcomeSection/TopPageWelcomeSection";

const EventsPage = (): React.ReactElement => {
  return (
    <main className="h-full w-screen text-black pt-20">
      <TopPageWelcomeSection
        content_translation="Events"
        icon="/icons/OJOMISTICO.png"
        image="/images/events-top.png"
      />
      <TextWithIconSection
        content_translation="Events"
        icon="/icons/sol-small.svg"
        text="top-text"
      />
      <EventsContentGallery />
      <PictureGalleryRow />
      <TextWithIconSection
        content_translation="Events"
        icon="/icons/sol-small.svg"
        text="bottom-text"
      />
    </main>
  );
};

export default EventsPage;
