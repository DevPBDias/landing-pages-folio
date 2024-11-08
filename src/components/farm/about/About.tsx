import ProductionImg from "./ProductionImg";
import ProductionText from "./ProductionText";

const About = () => {
  return (
    <section className="w-full flex flex-col md:gap-0 lg:gap-8 py-8 md:flex-row-reverse lg:px-12">
      <ProductionText />
      <ProductionImg />
    </section>
  );
};

export default About;
