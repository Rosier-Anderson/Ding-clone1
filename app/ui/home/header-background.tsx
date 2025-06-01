import Image from "next/image";
import HeaderBgImage from "../../../public/header-bg-image.jpg";

const HeaderBackground = () => {
  return (
    <Image
      src={HeaderBgImage}
      className="object-cover"
      alt="the header-image background"
      fill
      priority
    />
  );
};

export default HeaderBackground;
