import { useState } from "react";

const useChangePrice = () => {
  const [isPressed, setIsPressed] = useState(true);

  const handleClick = () => {
    setIsPressed(!isPressed);
  };

  return { isPressed, handleClick };
};

export default useChangePrice;
