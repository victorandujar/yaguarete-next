import MenuDownloadSection from "@/app/components/MenuCompos/MenuDownloadSection/MenuDownloadSection";
import menuTexts from "@/app/components/MenuCompos/MenuDownloadSection/utils/menuTexts";
import MenuWelcomeSection from "@/app/components/MenuCompos/MenuWelcomeSection/MenuWelcomeSection";
import TextWithIconSection from "@/app/components/MenuCompos/TextWithIconSection/TextWithIconSection";

const MenuPage = (): React.ReactElement => {
  return (
    <main className="h-full w-screen text-black pt-20">
      <MenuWelcomeSection />
      <TextWithIconSection text="top-text" />
      <div className="flex justify-center gap-32 py-32 px-72">
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
      <TextWithIconSection text="bottom-text" />
    </main>
  );
};

export default MenuPage;
