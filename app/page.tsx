import HeroSection from "./components/HeroSection";
import IntroSection from "./components/IntroSection";
import SpecsSection from "./components/SpecsSection";
import LegacySection from "./components/LegacySection";

export default function Home() {
  return (
    <>
      <main id="main-content">
        <HeroSection />
        <IntroSection />
        <SpecsSection />
        <LegacySection />
      </main>
    </>
  );
}