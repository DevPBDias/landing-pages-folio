"use client";

import useChangePrice from "../hooks/useChangePrice";

const ChangePlanBtns = () => {
  const { isPressed, handleClick } = useChangePrice();

  return (
    <div className="relative mr-24">
      <button
        className={`w-28 py-1  ${
          isPressed ? "bg-black text-white" : "bg-white text-black"
        } font-bold text-base border-2 border-black rounded-2xl shadow-md`}
        type="button"
        onClick={handleClick}
      >
        Mensal
      </button>
      <button
        className={`absolute z-10 left-24 w-28 py-1 ${
          isPressed ? "bg-white text-black" : "bg-black text-white"
        } font-bold text-base border-2 border-black rounded-2xl shadow-md`}
        type="button"
        onClick={handleClick}
      >
        Anual
      </button>
    </div>
  );
};

export default ChangePlanBtns;
