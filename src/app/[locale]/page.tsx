import { Suspense, lazy } from "react";

const HeroSection = lazy(
  () => import("../components/HomeCompos/HeroSection/HeroSection"),
);
const WelcomeSection = lazy(
  () => import("../components/HomeCompos/WelcomeSection/WelcomeSection"),
);
const AboutSection = lazy(
  () => import("../components/HomeCompos/AboutSection/AboutSection"),
);
const CallToAction = lazy(
  () => import("../components/HomeCompos/CallToAction/CallToAction"),
);
const InformationSection = lazy(
  () =>
    import("../components/HomeCompos/InformationSection/InformationSection"),
);

export default function Home() {
  return (
    <main className="flex flex-col">
      <Suspense fallback={<div>Cargando Hero Section...</div>}>
        <HeroSection />
      </Suspense>
      <Suspense fallback={<div>Cargando Welcome Section...</div>}>
        <WelcomeSection />
      </Suspense>
      <Suspense fallback={<div>Cargando About Section...</div>}>
        <AboutSection />
      </Suspense>
      <Suspense fallback={<div>Cargando Call to Action...</div>}>
        <CallToAction />
      </Suspense>
      <Suspense fallback={<div>Cargando Information Section...</div>}>
        <InformationSection />
      </Suspense>
    </main>
  );
}
