import React from "react";
import Logo from "./Logo";
import MobileMenu from "./MobileMenu";

const Header = () => {
  return (
    <header className="w-full fixed p-4  z-40 bg-[var(--primary-color)]">
      <Logo />
      <MobileMenu />
    </header>
  );
};

export default Header;
