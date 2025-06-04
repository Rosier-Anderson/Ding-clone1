// components/AppDownloadSection.tsx
import Image from "next/image";
import LogoGooglePlaystore from "../../../public/assets/images/logo_appstores_androidgoogleplay_en.jpeg"
import LogoAppStore from "../../../public/assets/images/logo_appstores_iosappstore_en.jpeg";

export default function AppDownloadSection() {
  return (
    <div className="">
      <h1 className="">Top-up wherever, whenever</h1>
      <h5 className="">
        Get the Ding App for the fastest, easiest way to top-up any phone.
      </h5>
      <div className="">
        <Image
          src={LogoGooglePlaystore}
          alt="Google Play Store"
          width={150}
          height={50}
          className="mx-2"
        />
        <Image
          src={LogoAppStore}
          alt="App Store"
          width={150}
          height={50}
          className="mx-2"
        />
      </div>
    </div>
  );
}
