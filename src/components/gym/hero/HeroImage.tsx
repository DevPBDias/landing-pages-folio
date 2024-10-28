import Image from "next/image";
import React from "react";
import hero from "@/assets/gym/images/hero-gym.png";

const HeroImage = () => {
  return (
    <picture>
      <Image
        src={hero}
        alt="hero iamge"
        className="z-10 relative w-[750px] h-[700px]"
        quality={100}
        priority
      />
    </picture>
  );
};

export default HeroImage;
