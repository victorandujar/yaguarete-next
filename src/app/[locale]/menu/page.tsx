import MenuDownloadSection from "@/app/components/MenuCompos/MenuDownloadSection/MenuDownloadSection";
import menuTexts from "@/app/components/MenuCompos/MenuDownloadSection/utils/menuTexts";
import TopPageWelcomeSection from "@/app/components/shared/TopPageWelcomeSection/TopPageWelcomeSection";
import TextWithIconSection from "@/app/components/shared/TextWithIconSection/TextWithIconSection";

const MenuPage = (): React.ReactElement => {
  return (
    <main className="h-full w-screen text-black pt-20">
      <TopPageWelcomeSection
        content_translation="Menu"
        icon="/icons/menu-bowl-icon.svg"
        image="/images/menu-top-photo.webp"
      />
      <TextWithIconSection
        text="top-text"
        content_translation="Menu"
        icon="/icons/flower-menu-icon.svg"
      />
      <div className="flex justify-center gap-32 py-32 px-72 mobile:flex-col mobile:items-center mobile:px-0">
        <MenuDownloadSection
          color={"primary"}
          title="Menú"
          download_text={menuTexts.es}
          menu_file="/menus/MENÚESPANOLCOMPLETO.pdf"
        />
        <MenuDownloadSection
          color={"secondary"}
          title="Menu"
          download_text={menuTexts.en}
          menu_file="/menus/MENÚINGLÉSCOMPLETO.pdf"
        />
      </div>
      <TextWithIconSection
        text="bottom-text"
        content_translation="Menu"
        icon="/icons/flower-menu-icon.svg"
      />
    </main>
  );
};

export default MenuPage;
