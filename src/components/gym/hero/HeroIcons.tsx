import { Facebook, Instagram, Linkedin, Youtube } from "lucide-react";
import React from "react";

const HeroIcons = () => {
  return (
    <div className="w-full flex flex-row gap-7 justify-start">
      <Instagram color="#1a1818" size={28} />
      <Facebook color="#1a1818" size={28} />
      <Youtube color="#1a1818" size={28} />
      <Linkedin color="#1a1818" size={28} />
    </div>
  );
};

export default HeroIcons;
