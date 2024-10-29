import Title from "../common/Title";
import QualityContent from "./QualityContent";
import Gallery from "./Gallery";

const About = () => {
  return (
    <main id="somos" className="flex flex-col px-12 py-24 gap-24">
      <Title title="Quem somos" />
      <section className="flex flex-row w-full justify-between items-center">
        <QualityContent />
        <Gallery />
      </section>
    </main>
  );
};

export default About;
