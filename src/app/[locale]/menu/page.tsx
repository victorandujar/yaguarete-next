import MenuWelcomeSection from "@/app/components/MenuCompos/MenuWelcomeSection/MenuWelcomeSection";
import TextWithIconSection from "@/app/components/MenuCompos/TextWithIconSection/TextWithIconSection";

const MenuPage = (): React.ReactElement => {
  return (
    <main className="h-full w-screen text-black py-20">
      <MenuWelcomeSection />
      <TextWithIconSection />
    </main>
  );
};

export default MenuPage;
