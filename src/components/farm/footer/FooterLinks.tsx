import headerLinks from "../constants/headerLinks";
import Link from "next/link";

const FooterLinks = () => {
  return (
    <section className="w-full flex flex-col justify-center items-center gap-2 my-4 lg:my-0">
      <h1 className="font-bold text-lg">Useful Links</h1>
      {headerLinks.map((link) => (
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
