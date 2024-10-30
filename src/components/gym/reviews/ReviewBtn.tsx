import { PlusCircle } from "lucide-react";
import React from "react";

const ReviewBtn = () => {
  return (
    <button
      className="px-9 py-3 bg-black rounded-2xl flex flex-row items-center justify-center gap-2"
      type="button"
    >
      <PlusCircle size={24} color="#ffffff" />
      <p className="font-bold text-xl text-white max-[1024px]:text-lg">
        Comentar
      </p>
    </button>
  );
};

export default ReviewBtn;
