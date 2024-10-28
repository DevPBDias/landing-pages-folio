import { PlayCircle } from "lucide-react";
import React from "react";

const HeroCTA = () => {
  return (
    <div className="w-full flex flex-row gap-7 justify-start">
      <button
        className="px-9 py-3 bg-black font-bold text-xl text-white rounded-2xl"
        type="button"
      >
        Começar
      </button>
      <button
        className="flex flex-row justify-center items-center gap-3 px-6 py-3"
        type="button"
      >
        <PlayCircle color="#030303" size={28} />
        <p className="bg-white font-bold text-xl text-black rounded-2xl">
          Ver vídeo
        </p>
      </button>
    </div>
  );
};

export default HeroCTA;
