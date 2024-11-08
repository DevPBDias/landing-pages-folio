import Image from "next/image";
import service from "@/assets/farm/images/service.png";
import serviceIcon from "@/assets/farm/icons/serviceIcon.png";

const ServiceImage = () => {
  return (
    <picture className="w-full h-full flex relative md:w-1/2">
      <Image
        src={service}
        alt="service img"
        quality={100}
        priority
        className="w-full h-full object-cover"
      />
      <Image
        src={serviceIcon}
        alt="service img"
        quality={100}
        priority
        className="w-12 h-12 absolute -top-4 left-4 lg:-top-8 lg:w-24 lg:h-24 md:w-18 md:h-18"
      />
    </picture>
  );
};

export default ServiceImage;
