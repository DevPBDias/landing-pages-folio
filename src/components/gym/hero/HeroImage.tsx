import Image from "next/image";
import React from "react";
import hero from "@/assets/gym/images/hero-gym.png";

const HeroImage = () => {
  return (
    <picture className="z-10 relative w-[750px] h-[700px] max-[1024px]:w-64 max-[1024px]:h-64">
      <Image
        src={hero}
        alt="hero iamge"
        className="w-full h-full object-cover"
        quality={100}
        priority
      />
    </picture>
  );
};

export default HeroImage;
