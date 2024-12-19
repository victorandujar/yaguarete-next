import WelcomeSection from "../components/WelcomeSection/WelcomeSection";
import HeroSection from "../components/HeroSection/HeroSection";
import AboutSection from "../components/AboutSection/AboutSection";
import CallToAction from "../components/CallToAction/CallToAction";
import InformationSection from "../components/InformationSection/InformationSection";
import MainFooter from "../components/MainFooter/MainFooter";

export default function Home() {
  return (
    <main className="flex flex-col">
      <HeroSection />
      <WelcomeSection />
      <AboutSection />
      <CallToAction />
      <InformationSection />
      <MainFooter />
    </main>
  );
}
