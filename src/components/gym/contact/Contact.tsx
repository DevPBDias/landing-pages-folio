import Image from "next/image";
import contact from "@/assets/gym/images/Footer.png";

const Contact = () => {
  return (
    <main className="flex flex-col w-full justify-center items-start relative">
      <picture className="w-full flex justify-center items-center">
        <Image
          src={contact}
          alt="training facility"
          className="w-full object-cover"
        />
      </picture>
      <div className="absolute w-full flex flex-col items-center justify-center gap-8">
        <h3 className="text-white text-2xl font-medium">
          Entre em contato conosco!
        </h3>
        <h1 className="text-white text-6xl font-bold">(99) 99999-9999</h1>
        <p className="text-gray-500 text-base font-normal w-1/2 text-center">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
      </div>
    </main>
  );
};

export default Contact;
