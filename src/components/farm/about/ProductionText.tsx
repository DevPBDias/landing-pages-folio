import { CheckCircle } from "lucide-react";
import React from "react";

const ProductionText = () => {
  return (
    <section className="px-4 lg:px-0 w-full md:mt-3 flex flex-col gap-3">
      <h3 className="font-medium text-base md:text-lg lg:text-2xl opacity-75">
        OUR INTRODUCTION
      </h3>
      <h1 className="font-bold text-3xl md:text-4xl lg:text-5xl">
        Pure Agriculture and Organic Form
      </h1>
      <h4 className="font-medium text-lg md:text-xl lg:text-2xl text-[var(--secondary-color)] my-3">
        We’re Leader in Agriculture Market
      </h4>
      <p className="font-medium text-sm md:text-base mb-3">
        There are many variations of passages of available but the majority have
        suffered alteration in some form, by injected humou or randomised words
        even slightly believable.
      </p>
      <div className="w-full flex flex-row justify-start items-center gap-2">
        <CheckCircle size={20} color="#f7c35f" />
        <p className="font-normal text-sm md:text-base">
          Organic food contains more vitamins
        </p>
      </div>
      <div className="w-full flex flex-row justify-start items-center gap-2">
        <CheckCircle size={20} color="#f7c35f" />
        <p className="font-normal text-sm md:text-base">
          Eat organic because supply meets demand
        </p>
      </div>
      <div className="w-full flex flex-row justify-start items-center gap-2">
        <CheckCircle size={20} color="#f7c35f" />
        <p className="font-normal text-sm md:text-base">
          Organic food is never irradiated
        </p>
      </div>
    </section>
  );
};

export default ProductionText;
