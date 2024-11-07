import Image from "next/image";
import service from "@/assets/farm/images/service.png";
import serviceIcon from "@/assets/farm/icons/serviceIcon.png";

const ServiceImage = () => {
  return (
    <picture className="w-full h-full flex relative">
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
        className="w-12 h-12 absolute -top-4 left-4"
      />
    </picture>
  );
};

export default ServiceImage;
