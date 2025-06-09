// components/AppDownloadSection.tsx
import Image from "next/image";
import LogoGooglePlaystore from "../../../public/assets/images/logo_appstores_androidgoogleplay_en.jpeg";
import LogoAppStore from "../../../public/assets/images/logo_appstores_iosappstore_en.jpeg";
import AppBanner from "../../../public/assets/images/app_banner.webp";
export default function AppDownloadSection() {
  return (
    <div className="flex flex-col sm:flex-row items-center  justify-between bg-teal-100 max-w-[700px] rounded-2xl gap-4 m-6 p-8 pb-0  ">
      {/* App download section with text and images */}
      <div className="flex flex-col items-start justify-center m-4 gap-4 w-full ">
        <h1 className=" font-extrabold ">Top-up wherever, whenever</h1>
        <h5 className="font-bold text-sm">
          Get the Ding App for the fastest, easiest way to top-up any phone.
        </h5>
        <div className="flex items-center justify-start  sm:justify-center gap-4 ">
          <Image
            src={LogoAppStore}
            alt="App Store"
            width={150}
            height={70}
            loading="lazy"
            className="rounded-md object-contain "
          />
          <Image
            src={LogoGooglePlaystore}
            alt="Google Play Store"
            width={150}
            height={70}
            loading="lazy"
            className=" rounded-md "
          />
        </div>
      </div>
      {/* AppBanner Iamge */}
      <div className=" mt-4  mx-auto ">
        <Image
          src={AppBanner}
          width={300}
          height={200}
          alt="Phone with Ding App"
          className="object-cover  "
          loading="lazy"
        />
      </div>
    </div>
  );
}
