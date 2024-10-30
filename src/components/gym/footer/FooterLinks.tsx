import navLinks from "../constants/navLinks";
import Link from "next/link";

const FooterLinks = () => {
  return (
    <section className="w-fit flex flex-col justify-start items-start gap-4 max-[1024px]:items-center">
      <h1 className="font-bold text-xl max-[1024px]:text-lg">Menu</h1>
      {navLinks.map((link) => (
        <Link
          className="hover:font-bold scale-110 text-sm"
          href={link.route}
          key={link.id}
        >
          {link.name}
        </Link>
      ))}
    </section>
  );
};

export default FooterLinks;
