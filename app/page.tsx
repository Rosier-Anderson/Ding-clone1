import Image from "next/image";
import HeaderBgImage from "../public/header-bg-image.jpg";
import Header from "./ui/header";
export default function Home() {
  return (
    <div className="  min-h-screen bg-white  text-lg leading-2">
      <main className="bg-slate-500 ">
        {/* need to change the width later */}

        <div className="relative h-[450px]  bg-fixed   ">
          <Image
            src={HeaderBgImage}
            className="object-cover "
            alt="the header-image background"
            fill
            priority
          />{" "}
          <Header />
          <div className="absolute inset-x-0 bottom-10 mx-auto h-64 w-[40%]  text-white text-center">
            <h1 className="text-5xl leading-[60px] font-semibold">
              The fastest way to send mobile top-up worldwide
            </h1>
            <p className="leading-[60px]">
              99% of mobile recharges sent online with Ding arrive in 3 seconds.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
