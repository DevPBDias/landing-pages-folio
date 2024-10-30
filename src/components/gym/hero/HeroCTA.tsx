import { PlayCircle } from "lucide-react";
import React from "react";

const HeroCTA = () => {
  return (
    <div className="w-full flex flex-row gap-7 justify-start max-[1024px]:flex-col max-[1024px]:items-center">
      <button
        className="px-9 py-3 bg-black max-[1024px]:text-base max-[1024px]:w-2/3 font-bold text-xl text-white rounded-2xl"
        type="button"
      >
        Começar
      </button>
      <button
        className="flex flex-row justify-center items-center gap-3 px-6 py-3"
        type="button"
      >
        <PlayCircle color="#030303" size={24} />
        <p className="bg-white max-[1024px]:text-base  font-bold text-xl text-black rounded-2xl">
          Ver vídeo
        </p>
      </button>
    </div>
  );
};

export default HeroCTA;
