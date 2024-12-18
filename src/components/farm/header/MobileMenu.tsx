"use client";

import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import navLinks from "../constants/headerLinks";

const MobileMenu = () => {
  const [open, setOpen] = useState<boolean>(true);

  return (
    <header className="lg:hidden">
      {open ? (
        <button
          className="absolute top-4 right-4"
          type="button"
          onClick={() => setOpen(!open)}
        >
          <Menu size={28} color="#ffffff" />
        </button>
      ) : (
        <section className="bg-[var(--light-primary-color)] w-2/3 absolute z-50 h-screen top-0 right-0 flex flex-col justify-center items-center">
          <div className="absolute top-4 right-4">
            <button type="button" onClick={() => setOpen(!open)}>
              <X size={28} color="#ffffff" />
            </button>
          </div>
          <nav className="w-full flex flex-col justify-center items-center gap-4 px-6">
            {navLinks?.map((link) => (
              <Link
                className="hover:font-bold scale-110 text-base text-white"
                href={link.route}
                key={link.id}
              >
                {link.name}
              </Link>
            ))}
          </nav>
        </section>
      )}
    </header>
  );
};

export default MobileMenu;
