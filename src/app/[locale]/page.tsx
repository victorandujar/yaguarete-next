import WelcomeSection from "../components/WelcomeSection/WelcomeSection";
import HeroSection from "../components/HeroSection/HeroSection";

export default function Home() {
  return (
    <main className="flex flex-col">
      <HeroSection />
      <WelcomeSection />
    </main>
  );
}
