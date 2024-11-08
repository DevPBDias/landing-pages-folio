import Link from "next/link";
import headerLinks from "../constants/headerLinks";

const Navbar = () => {
  return (
    <nav className="hidden lg:flex flex-row justify-center items-center gap-8">
      {headerLinks?.map((link) => (
        <Link
          className="hover:font-bold scale-110 text-base"
          href={link.route}
          key={link.id}
        >
          {link.name}
        </Link>
      ))}
    </nav>
  );
};

export default Navbar;
