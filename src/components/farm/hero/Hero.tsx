import HeroImage from "./HeroImage";
import HeroText from "./HeroText";
import HeroCTA from "./HeroCTA";

const Hero = () => {
  return (
    <main className="relative w-full h-[85vh] flex justify-start items-center">
      <HeroImage />
      <section className="absolute z-10 px-4 flex flex-col w-full h-2/3 justify-around">
        <HeroText />
        <HeroCTA />
      </section>
    </main>
  );
};

export default Hero;
