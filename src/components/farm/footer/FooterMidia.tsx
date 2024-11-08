import Logo from "../header/Logo";
import { Facebook, Instagram, Twitter, Youtube } from "lucide-react";

const FooterMidia = () => {
  return (
    <section className="px-4 flex flex-col justify-start items-start gap-6">
      <div className="flex flex-col justify-start items-start w-full gap-2">
        <Logo />
        <p className="text-sm opacity-75">
          Lorem ipsum dolor sit amet, adipiscing elit. In hac habitasse platea
          dictumst. Duis porta,quam ut finibus ultrices.
        </p>
      </div>
      <div className="flex flex-row items-center justify-start gap-4">
        <Instagram size={20} color="#f7c35f" />
        <Facebook color="#f7c35f" size={20} />
        <Youtube color="#f7c35f" size={20} />
        <Twitter color="#f7c35f" size={20} />
      </div>
    </section>
  );
};

export default FooterMidia;
