// Import optimized Image component from Next.js
import Image from "next/image";

// Import custom UI components
import Header from "./ui/home/header";
import HeroText from "./ui/home/hero-text";
import HeaderBackground from "./ui/home/header-background";

// Main homepage component
export default function Home() {
  return (
    <div className="min-h-screen bg-white text-lg leading-2">
      <main className="bg-slate-500">
        {/* Hero section with fixed background image and overlaid content */}
        <div className="relative h-[450px] bg-fixed">
          {/* Background image layer */}
          <HeaderBackground />
          {/* Navigation/header component and links  */}
          <Header />
          {/* Hero section text (title and subtitle) */}
          <HeroText />
        </div>
      </main>
    </div>
  );
}
