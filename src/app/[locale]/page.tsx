import AboutSection from "../components/AboutSection/AboutSection";
import HeroSection from "../components/HeroSection/HeroSection";

export default function Home() {
  return (
    <main className="flex flex-col">
      <HeroSection />
      <AboutSection />
    </main>
  );
}
