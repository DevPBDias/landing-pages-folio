import Image from "next/image";
import growth from "@/assets/farm/icons/growth.png";
import bg_ads from "@/assets/farm/images/bg_ads.png";

const Ads = () => {
  return (
    <div className="relative gradient-ads flex flex-row justify-center items-center w-full h-48 my-3">
      <div className="absolute z-10 flex flex-row justify-center items-center w-full px-4 gap-4">
        <picture className="w-10 h-10 p-2 rounded-full flex bg-[var(--dark-primary-color)] items-center justify-center">
          <Image
            src={growth}
            alt="service img"
            quality={100}
            priority
            className="w-full h-full object-cover"
          />
        </picture>
        <h3 className="font-bold text-black text-lg">
          We’re Leader in Agriculture Market
        </h3>
      </div>
      <Image
        src={bg_ads}
        alt="service img"
        quality={100}
        priority
        className="w-full h-full object-cover"
      />
    </div>
  );
};

export default Ads;
