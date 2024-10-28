import navLinks from "../constants/navLinks";
import Link from "next/link";

const Header = () => {
  return (
    <header className="absolute top-6 left-0 w-full flex flex-row justify-between items-center px-12 z-10">
      <h1 className="font-bold text-5xl">Gym Logo</h1>
      <nav className="flex flex-row justify-center items-center gap-8 px-6">
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
      <button className="px-9 py-2 flex flex-col justify-center items-center bg-orange-600 text-black font-bold rounded-2xl text-lg">
        Agendar
      </button>
    </header>
  );
};

export default Header;
