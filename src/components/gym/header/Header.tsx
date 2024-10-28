import React from "react";
import Container from "../container/Container";
import navLinks from "../constants/navLinks";
import Link from "next/link";

const Header = () => {
  return (
    <Container>
      <header className="w-full flex flex-row justify-between items-center py-6 sticky">
        <h1 className="font-bold text-5xl w-1/4 border-red-600 border-2">
          Gym Logo
        </h1>
        <nav className="w-full flex flex-row justify-center items-center gap-8">
          {navLinks?.map((link) => (
            <Link
              className="hover:font-bold scale-110"
              href={link.route}
              key={link.id}
            >
              {link.name}
            </Link>
          ))}
        </nav>
        <button className="w-32 h-12 flex flex-col justify-center items-center bg-orange-600 text-black font-bold rounded-2xl shadow-md">
          Agendar
        </button>
      </header>
    </Container>
  );
};

export default Header;
