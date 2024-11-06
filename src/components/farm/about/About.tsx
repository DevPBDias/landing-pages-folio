import ProductionImg from "./ProductionImg";
import ProductionText from "./ProductionText";

const About = () => {
  return (
    <section className="w-full flex flex-col py-8">
      <ProductionText />
      <ProductionImg />
    </section>
  );
};

export default About;
