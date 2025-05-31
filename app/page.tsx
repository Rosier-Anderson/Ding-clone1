import Image from "next/image";
import HeaderBgImage from "../public/header-bg-image.jpg";
import Header from "./ui/header";
export default function Home() {
  return (
    <div className="  min-h-screen bg-white  text-lg leading-2">
      <main className="bg-slate-500">
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
        </div>
      </main>
    </div>
  );
}
