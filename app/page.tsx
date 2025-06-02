// Import optimized Image component from Next.js
import Image from "next/image";

// Import custom UI components

import HeroText from "./ui/home/hero-text";
import HeaderBackground from "./ui/home/header-background";
import Navbar from "./ui/home/navbar";

// Main homepage component
export default function Home() {
  return (
    <div className="min-h-screen bg-white text-lg leading-2">
      <main className="bg-white">
        {/* Hero section with fixed background image and overlaid content */}
        <div className="relative h-[450px] bg-fixed">
          {/* Background image layer */}
          <HeaderBackground />
          {/* Navigation/header component and links  */}
          <Navbar />
          {/* Hero section text (title and subtitle) */}
          <HeroText />
        </div>
        <section className=" ">
          <div className="border rounded-2xl ">
            <h1 className="">Ready to send a top-up?</h1>
            <form action="">
              <input
                type="text"
                name="top-up-number"
                placeholder="Enter number"
                className=""
              />
              <button className="">Start top-up</button>
            </form>
          </div>
        </section>
      </main>
    </div>
  );
}
