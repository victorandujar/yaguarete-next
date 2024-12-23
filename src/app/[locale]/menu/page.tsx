import MenuWelcomeSection from "@/app/components/MenuCompos/MenuWelcomeSection";

const MenuPage = (): React.ReactElement => {
  return (
    <main className="h-screen w-screen">
      <div className="py-20">
        <MenuWelcomeSection />
      </div>
    </main>
  );
};

export default MenuPage;
