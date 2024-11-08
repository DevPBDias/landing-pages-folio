import vegetables from "@/assets/farm/icons/vegetables.png";
import growth from "@/assets/farm/icons/growth.png";
import ServiceCard from "./ServiceCard";
import ServiceImage from "./ServiceImage";
import ServiceAds from "./ServiceAds";

const Services = () => {
  return (
    <section className="flex w-full md:h-[700px] flex-col-reverse gap-10 my-20 md:flex-row md:gap-0 bg-[var(--light-primary-color)]">
      <ServiceImage />
      <section className="w-full md:h-full flex flex-col relative h-fit px-4 md:w-1/2 md:p-8">
        <h3 className="font-medium text-base mb-3 uppercase md:text-lg lg:text-2xl opacity-75">
          MODERN AGRICULTURE
        </h3>
        <h1 className="font-bold text-3xl mb-3 md:text-4xl lg:text-5xl">
          Providing High Quality Products
        </h1>
        <ServiceCard
          title="Our Agriculture Growth"
          image={growth}
          description="Lorem ipsum dolor sit amet consectetur. Cursus purus at tempus arcu.Metus elit auctor"
        />
        <ServiceCard
          title="Making Healthy Foods"
          image={vegetables}
          description="Lorem ipsum dolor sit amet consectetur. Cursus purus at tempus arcu.Metus elit auctor"
        />
        <ServiceAds />
      </section>
    </section>
  );
};

export default Services;
