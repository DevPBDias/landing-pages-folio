import HeroText from "./HeroText";
import HeroImage from "./HeroImage";
import HeroCTA from "./HeroCTA";
import HeroIcons from "./HeroIcons";

const MainHero = () => {
  return (
    <main id="#inicio" className="w-full h-[92vh]">
      <section className="w-full h-full flex flex-row justify-between items-end pl-12">
        <div className="h-full flex flex-col justify-center items-center gap-9">
          <HeroText />
          <HeroCTA />
          <HeroIcons />
        </div>
        <HeroImage />
      </section>
      <div className="bg-black w-1/4 h-screen absolute top-0 right-0"></div>
    </main>
  );
};

export default MainHero;
