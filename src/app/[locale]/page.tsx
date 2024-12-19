import WelcomeSection from "../components/WelcomeSection/WelcomeSection";
import HeroSection from "../components/HeroSection/HeroSection";
import AboutSection from "../components/AboutSection/AboutSection";
import CallToAction from "../components/CallToAction/CallToAction";

export default function Home() {
  return (
    <main className="flex flex-col">
      <HeroSection />
      <WelcomeSection />
      <AboutSection />
      <CallToAction />
    </main>
  );
}
