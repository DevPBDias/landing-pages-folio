import HeroImage from "./HeroImage";
import HeroText from "./HeroText";
import HeroCTA from "./HeroCTA";

const Hero = () => {
  return (
    <main className="relative w-full h-[95vh] flex justify-start items-center">
      <HeroImage />
      <section className="absolute z-10 px-4 flex flex-col w-full h-full justify-end gap-10 mb-40">
        <HeroText />
        <HeroCTA />
      </section>
    </main>
  );
};

export default Hero;
