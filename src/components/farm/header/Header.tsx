import React from "react";
import Logo from "./Logo";
import MobileMenu from "./MobileMenu";

const Header = () => {
  return (
    <header className="w-full relative py-4">
      <Logo />
      <MobileMenu />
    </header>
  );
};

export default Header;
