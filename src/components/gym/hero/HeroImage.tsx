import Image from "next/image";
import React from "react";
import hero from "@/assets/gym/images/hero-gym.png";

const HeroImage = () => {
  return (
    <picture className="z-10 min-[1024px]:absolute min-[1024px]:bottom-0 min-[1024px]:right-3 w-[750px] h-[700px] max-[1440px]:w-[500px] max-[1440px]:h-[500px] max-[1024px]:w-64 max-[1024px]:h-64 max-[1024px]:mb-9">
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
