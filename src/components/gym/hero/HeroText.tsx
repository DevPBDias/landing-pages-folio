import React from "react";

const HeroText = () => {
  return (
    <div className="max-[1024px]:w-full w-[640px] flex flex-col justify-start gap-4 max-[1024px]:px-4 max-[1024px]:justify-center max-[1024px]:items-center">
      <h1 className="max-[1024px]:w-full max-[1024px]:text-4xl w-1/2 font-bold text-6xl text leading-normal">
        Eleve o seu treino
      </h1>
      <p className="w-full font-light text-base text-gray-500 max-[1024px]:text-xs max-[1024px]:text-center">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.
      </p>
    </div>
  );
};

export default HeroText;
