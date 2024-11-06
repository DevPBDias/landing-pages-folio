import Image from "next/image";
import service from "@/assets/farm/images/service.png";
import serviceBg from "@/assets/farm/images/serviceBg.png";
import serviceCorner from "@/assets/farm/images/serviceCorner.png";
import serviceIcon from "@/assets/farm/icons/serviceIcon.png";
import vegetables from "@/assets/farm/icons/vegetables.png";
import growth from "@/assets/farm/icons/growth.png";

const Services = () => {
  return (
    <section className="flex w-full flex-col-reverse gap-10 py-20">
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
      <div className="w-full flex flex-col relative h-fit px-4">
        <h3 className="font-medium text-base mb-3 uppercase">
          MODERN AGRICULTURE
        </h3>
        <h1 className="font-bold text-3xl mb-3">
          Providing High Quality Products
        </h1>
        <div className="flex flex-col gap-4 my-8">
          <picture className="w-16 h-16 p-4 rounded-full flex bg-[var(--dark-primary-color)] items-center justify-center">
            <Image
              src={growth}
              alt="service img"
              quality={100}
              priority
              className="w-full h-full object-cover"
            />
          </picture>
          <div className="flex flex-col justify-center items-start gap-1">
            <h3 className="font-bold text-xl">Our Agriculture Growth</h3>
            <p className="text-sm font-normal">
              Lorem ipsum dolor sit amet consectetur. Cursus purus at tempus
              arcu. Metus elit auctor
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-4 mb-8">
          <picture className="w-16 h-16 p-4 rounded-full flex bg-[var(--dark-primary-color)] items-center justify-center">
            <Image
              src={vegetables}
              alt="service img"
              quality={100}
              priority
              className="w-full h-full object-cover"
            />
          </picture>
          <div className="flex flex-col justify-center items-start gap-1">
            <h3 className="font-bold text-xl">Making Healthy Foods</h3>
            <p className="text-sm font-normal">
              Lorem ipsum dolor sit amet consectetur. Cursus purus at tempus
              arcu. Metus elit auctor
            </p>
          </div>
        </div>
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
      </div>
    </section>
  );
};

export default Services;
