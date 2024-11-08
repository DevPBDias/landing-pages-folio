import React from "react";
import Logo from "./Logo";
import MobileMenu from "./MobileMenu";
import Navbar from "./Navbar";

const Header = () => {
  return (
    <header className="w-full fixed p-4 lg:px-12 z-40 bg-[var(--light-primary-color)] flex flex-row items-center justify-between">
      <Logo />
      <MobileMenu />
      <Navbar />
    </header>
  );
};

export default Header;
