import Image from "next/image";
import serviceBg from "@/assets/farm/images/serviceBg.png";
import serviceCorner from "@/assets/farm/images/serviceCorner.png";

const ServiceAds = () => {
  return (
    <>
      <Image
        src={serviceCorner}
        alt="service img"
        quality={100}
        priority
        className="w-12 h-12 object-cover absolute top-0 right-0"
      />
      <Image
        src={serviceBg}
        alt="service img"
        quality={100}
        priority
        className="w-1/2 h-1/3 object-cover absolute bottom-0 right-0"
      />
    </>
  );
};

export default ServiceAds;
