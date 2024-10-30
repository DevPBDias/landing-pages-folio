import navLinks from "../constants/navLinks";
import Link from "next/link";
import Burger from "./Burger";

const Header = () => {
  return (
    <header className="max-[1024px]:px-4 sticky top-0 left-0 w-full flex flex-row justify-between items-center px-12 py-4 z-20 backdrop-blur-md bg-white/30">
      <h1 className="max-[1024px]:text-2xl font-bold text-5xl">Gym Logo</h1>
      <nav className="max-[1024px]:hidden flex flex-row justify-center items-center gap-8 px-6">
        {navLinks?.map((link) => (
          <Link
            className="hover:font-bold scale-110 text-base"
            href={link.route}
            key={link.id}
          >
            {link.name}
          </Link>
        ))}
      </nav>
      <button className="max-[1024px]:hidden px-9 py-2 flex flex-col justify-center items-center bg-orange-600 text-black font-bold rounded-2xl text-lg">
        Agendar
      </button>
      <Burger />
    </header>
  );
};

export default Header;
