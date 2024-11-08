import Link from "next/link";
import React from "react";

const HeroCTA = () => {
  return (
    <Link
      href="#projects"
      className="py-2 w-full sm:w-56 bg-[var(--secondary-color)] text-black font-bold text-base text-center rounded-xl shadow-xl"
    >
      Discover more
    </Link>
  );
};

export default HeroCTA;
