import React from "react";
import Title from "./Title";
import QualityContent from "./QualityContent";
import Gallery from "./Gallery";

const About = () => {
  return (
    <div>
      <Title />
      <section>
        <QualityContent />
        <Gallery />
      </section>
    </div>
  );
};

export default About;
