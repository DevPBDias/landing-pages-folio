import Image from "next/image";
import hero from "@/assets/farm/images/hero.png";

const HeroImage = () => {
  return (
    <picture className="w-full h-full">
      <Image
        src={hero}
        alt="hero image"
        className="object-cover w-full h-full"
        quality={100}
        priority
      />
    </picture>
  );
};

export default HeroImage;
