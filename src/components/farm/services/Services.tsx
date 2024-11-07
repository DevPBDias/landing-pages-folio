import vegetables from "@/assets/farm/icons/vegetables.png";
import growth from "@/assets/farm/icons/growth.png";
import ServiceCard from "./ServiceCard";
import ServiceImage from "./ServiceImage";
import ServiceAds from "./ServiceAds";

const Services = () => {
  return (
    <section className="flex w-full flex-col-reverse gap-10 py-20">
      <ServiceImage />
      <section className="w-full flex flex-col relative h-fit px-4">
        <h3 className="font-medium text-base mb-3 uppercase">
          MODERN AGRICULTURE
        </h3>
        <h1 className="font-bold text-3xl mb-3">
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
