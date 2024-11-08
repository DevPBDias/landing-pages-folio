import React from "react";
import testimonials from "../constants/testimonials";
import TestimonialCard from "./TestimonialCard";

const Testimonials = () => {
  return (
    <section className="w-full flex flex-col py-8 px-4 my-12 h-fit gap-12 lg:px-12">
      <div className="w-full flex flex-col">
        <h3 className="font-medium text-base mb-3 uppercase md:text-lg lg:text-2xl opacity-75">
          Our Testimonials
        </h3>
        <h1 className="font-bold text-3xl mb-3 md:text-4xl lg:text-5xl">
          What they’re talking about
        </h1>
      </div>
      <div className="full flex gap-4 justify-center items-center">
        {testimonials.map((item) => (
          <TestimonialCard
            image={item.image}
            name={item.name}
            key={item.id}
            type={item.type}
            comment={item.comment}
          />
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
