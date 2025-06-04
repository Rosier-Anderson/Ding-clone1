// Import custom UI components
import HeroText from "./ui/home/hero-text";
import HeaderBackground from "./ui/home/header-background";
import Navbar from "./ui/home/navbar";
import TopUpForm from "./ui/home/top-up-form";
import TrustPilotBadge from "./ui/home/TrustPilotBadge";
import AppDownloadSection from "./ui/home/AppDownloadSection";
// Main homepage component
export default function Home() {
  return (
    <div className="min-h-screen bg-white ">
      <main className="text-lg text-cyan-900 leading-2">
        {/* Hero section with fixed background image and overlaid content */}
        <div className="relative  max-h-[450px] min-h-[300px] flex  bg-fixed z-0">
          {/* Background image layer */}
          <HeaderBackground />
          {/* Navigation/header component and links  */}
          <Navbar />
          {/* Hero section text (title and subtitle) */}
          <HeroText />
        </div>
        {/* Top-up form section */}
        <TopUpForm />
        {/* TrustPilot badge and app download section */}
        <section className=" ">
         <TrustPilotBadge />
          <AppDownloadSection />
        </section>
      </main>
    </div>
  );
}
