import Image from "next/image";
import HeaderBgImage from "../../../public/header-bg-image.jpg";

const HeaderBackground = () => {
  return (
    <Image
      src={HeaderBgImage}
      className="object-center lg:object-cover flex-1"
      alt="the header-image background flexible image"
   
      priority
    />
  );
};

export default HeaderBackground;
