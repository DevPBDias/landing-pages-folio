import React from "react";

const LogoText = () => {
  return (
    <div className="flex flex-col justify-start items-start gap-6 w-96 max-[1024px]:items-center  max-[1024px]:w-[90%] ">
      <h1 className="font-bold text-5xl max-[1024px]:text-3xl">Gym Logo</h1>
      <p className="w-full text-gray-500 text-sm font-normal max-[1024px]:text-center max-[1024px]:text-xs">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.
      </p>
    </div>
  );
};

export default LogoText;
