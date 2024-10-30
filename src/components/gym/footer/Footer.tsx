import React from "react";
import FooterLinks from "./FooterLinks";
import LogoText from "./LogoText";
import FooterMidia from "./FooterMidia";

const Footer = () => {
  return (
    <footer className="flex flex-row w-full px-12 py-24 gap-80 relative max-[1024px]:px-4 max-[1024px]:flex-col max-[1024px]:gap-16 max-[1024px]:items-center">
      <LogoText />
      <FooterLinks />
      <FooterMidia />
      <span className="absolute bottom-0 left-1/2 my-4 text-xs max-[1024px]:flex max-[1024px]:items-center max-[1024px]:left-0 max-[1024px]:w-full max-[1024px]:justify-center">
        &copy; 2024 DevPBdias
      </span>
    </footer>
  );
};

export default Footer;
