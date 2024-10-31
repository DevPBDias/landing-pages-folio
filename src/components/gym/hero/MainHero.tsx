import HeroText from "./HeroText";
import HeroImage from "./HeroImage";
import HeroCTA from "./HeroCTA";
import HeroIcons from "./HeroIcons";

const MainHero = () => {
  return (
    <main
      id="#inicio"
      className="max-[1024px]:h-fit w-full h-[90vh] max-[1024px]:my-12"
    >
      <section className="relative max-[1024px]:flex-col-reverse w-full h-full flex flex-row justify-between items-end pl-12 max-[1024px]:pl-0 max-[1024px]:px-4 max-[1024px]:items-center">
        <div className="h-full flex flex-col justify-center items-center gap-9">
          <HeroText />
          <HeroCTA />
          <HeroIcons />
        </div>
        <HeroImage />
      </section>
      <div className="bg-black max-[1440px]:hidden w-1/4 h-screen absolute top-0 right-0"></div>
    </main>
  );
};

export default MainHero;
