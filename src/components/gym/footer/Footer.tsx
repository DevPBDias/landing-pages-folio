import React from "react";
import FooterLinks from "./FooterLinks";
import LogoText from "./LogoText";
import FooterMidia from "./FooterMidia";

const Footer = () => {
  return (
    <footer className="flex flex-row w-full px-12 py-24 gap-80 relative">
      <LogoText />
      <FooterLinks />
      <FooterMidia />
      <span className="absolute bottom-0 left-1/2 my-4 text-xs">
        &copy; 2024 DevPBdias
      </span>
    </footer>
  );
};

export default Footer;
