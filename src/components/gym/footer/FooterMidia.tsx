import { Facebook, Instagram, Linkedin, Youtube } from "lucide-react";

const FooterMidia = () => {
  return (
    <div className="flex flex-col gap-4 justify-start items-start">
      <h1 className="font-bold text-xl">Mídias Sociais</h1>
      <div className="flex flex-row gap-2 items-center  justify-center">
        <Instagram color="#1a1818" size={20} />
        <p className="text-gray-500 text-sm font-normal">Instagram</p>
      </div>
      <div className="flex flex-row gap-2 items-center  justify-center">
        <Facebook color="#1a1818" size={20} />
        <p className="text-gray-500 text-sm font-normal">Facebook</p>
      </div>
      <div className="flex flex-row gap-2 items-center  justify-center">
        <Youtube color="#1a1818" size={20} />
        <p className="text-gray-500 text-sm font-normal">Youtube</p>
      </div>
      <div className="flex flex-row gap-2 items-center  justify-center">
        <Linkedin color="#1a1818" size={20} />
        <p className="text-gray-500 text-sm font-normal">Linkedin</p>
      </div>
    </div>
  );
};

export default FooterMidia;
