import Image from "next/image";
import HeaderBgImage from "../../../public/assets/images/header-bg-image.jpg";

const HeaderBackground = () => {
  return (
    <Image
      src={HeaderBgImage}
      className="object-cover  lg:object-cover  flex-1"
      alt="the header-image background flexible image"
      priority
      fill
    />
  );
};

export default HeaderBackground;
