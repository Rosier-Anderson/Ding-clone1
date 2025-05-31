import Image from "next/image";
import HeaderBgImage from "../public/header-bg-image.jpg";
export default function Home() {
  return (
    <div className="  min-h-screen bg-white  text-lg leading-2">
      <main className="bg-slate-500">
        {/* need to change the width later */}
        <div className="relative max-lg:h-[450px]  ">
          <Image
            src={HeaderBgImage}
            className="object-cover"
            alt="the header-image background"
            fill
            priority
          />
        </div>
      </main>
    </div>
  );
}
