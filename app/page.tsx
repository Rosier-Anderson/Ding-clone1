// Import optimized Image component from Next.js
import Image from "next/image";

// Import custom UI components

import HeroText from "./ui/home/hero-text";
import HeaderBackground from "./ui/home/header-background";
import Navbar from "./ui/home/navbar";
import { CgSearch } from "react-icons/cg";
// Main homepage component
export default function Home() {
  return (
    <div className="min-h-screen bg-white text-lg leading-2">
      <main className="bg-white ">
        {/* Hero section with fixed background image and overlaid content */}
        <div className="relative  max-h-[450px] min-h-[300px] flex  bg-fixed z-0">
          {/* Background image layer */}
          <HeaderBackground />
          {/* Navigation/header component and links  */}
          <Navbar />
          {/* Hero section text (title and subtitle) */}
          <HeroText />
        </div>

        <section className="relative z-50 font-bold text-center text-sky-900 p-4 bg-white -mt-10 rounded-t-[50px]">
          <div className="border rounded-3xl  mx-auto my-8 max-w-[450px]">
            <form
              action="#top-up-form"
              className="w-full flex flex-col items-center justify-center p-4 "
            >
              {" "}
              <h1 className="font-bold text-lg ">Ready to send a top-up?</h1>
              <div className="flex items-center  w-full rounded-full border border-gray-300 p-3 m-4 focus-within:border-limeBright focus-within:shadow-sm focus-within:ring-2 
              ">
                <CgSearch />
                <label
                htmlFor="top-up-number"
                className="relative w-full h-full flex  items-center justify-start gap-2   whitespace-nowrap "
              >
                {" "} Enter number
                <input
                  type="text"
                  name="top-up-number"
         
                  className=" absolute  w-full outline-none text-left bg-transparent rounded-2xl"
                />{" "}
              </label>
              </div>
              
              <button type="submit" className="w-full bg-limeBright rounded-full min-w-32  whitespace-nowrap  p-3 m-4">
                Start top-up
              </button>
            </form>
          </div>
        </section>
      </main>
    </div>
  );
}
