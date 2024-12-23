import HeroSection from "../components/HomeCompos/HeroSection/HeroSection";
import AboutSection from "../components/HomeCompos/AboutSection/AboutSection";
import CallToAction from "../components/HomeCompos/CallToAction/CallToAction";
import InformationSection from "../components/HomeCompos/InformationSection/InformationSection";
import MainFooter from "../components/HomeCompos/MainFooter/MainFooter";
import WelcomeSection from "../components/HomeCompos/WelcomeSection/WelcomeSection";

export default function Home() {
  return (
    <main className="flex flex-col">
      <HeroSection />
      <WelcomeSection />
      <AboutSection />
      <CallToAction />
      <InformationSection />
      <div className="mobile:hidden">
        <MainFooter />
      </div>
    </main>
  );
}
