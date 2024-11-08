import React from "react";
import products from "../constants/products";
import ProductCard from "./ProductCard";

const Products = () => {
  return (
    <section className="w-full flex flex-col py-8 px-4 my-24 lg:px-12">
      <h3 className="font-medium text-base mb-3 uppercase md:text-xl lg:text-2xl opacity-75">
        Popular Foods And Vegetables
      </h3>
      <h1 className="font-bold text-3xl mb-3 md:text-4xl lg:text-5xl">
        Quality Fruits & Vegetables
      </h1>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4 justify-center items-center mt-10 md:gap-8 lg:gap-16">
        {products.map((item) => (
          <ProductCard image={item.image} name={item.name} key={item.id} />
        ))}
      </div>
    </section>
  );
};

export default Products;
