import { CheckCircle } from "lucide-react";
import React from "react";

const ProductionText = () => {
  return (
    <section className="px-4 w-full">
      <h3 className="font-medium text-base mb-3">OUR INTRODUCTION</h3>
      <h1 className="font-bold text-3xl mb-3">
        Pure Agriculture and Organic Form
      </h1>
      <h4 className="font-medium text-lg mb-3 text-[var(--secondary-color)]">
        We’re Leader in Agriculture Market
      </h4>
      <p className="font-medium text-sm mb-3">
        There are many variations of passages of available but the majority have
        suffered alteration in some form, by injected humou or randomised words
        even slightly believable.
      </p>
      <div className="w-full flex flex-row justify-start items-center gap-2 mb-3">
        <CheckCircle size={20} color="#f7c35f" />
        <p className="font-normal text-sm">
          Organic food contains more vitamins
        </p>
      </div>
      <div className="w-full flex flex-row justify-start items-center gap-2 mb-3">
        <CheckCircle size={20} color="#f7c35f" />
        <p className="font-normal text-sm">
          Eat organic because supply meets demand
        </p>
      </div>
      <div className="w-full flex flex-row justify-start items-center gap-2 mb-3">
        <CheckCircle size={20} color="#f7c35f" />
        <p className="font-normal text-sm">Organic food is never irradiated</p>
      </div>
    </section>
  );
};

export default ProductionText;
