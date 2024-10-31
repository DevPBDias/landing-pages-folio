import Image from "next/image";
import React from "react";
import coach4 from "@/assets/gym/images/coach1.jpg";
import coach5 from "@/assets/gym/images/coach2.jpg";

const MentorCard = () => {
  return (
    <section className="w-full flex flex-row justify-between items-center h-96 gap-9 mt-32 max-[1024px]:flex-col-reverse max-[1024px]:h-fit">
      <div className="w-1/2 flex flex-row justify-center items-center h-full gap-7 max-[1024px]:w-full max-[768px]:flex-col">
        <picture className="w-1/3 h-full rounded-2xl max-[1024px]:w-full">
          <Image
            src={coach4}
            alt="coach training"
            className="object-cover w-full h-full rounded-2xl"
          />
        </picture>
        <picture className="w-2/3 h-full rounded-2xl max-[1024px]:w-full">
          <Image
            src={coach5}
            alt="coach training"
            className="object-cover w-full h-full rounded-2xl"
            quality={100}
          />
        </picture>
      </div>
      <div className="w-1/2 flex flex-col justify-around items-start h-full max-[1024px]:w-full max-[1024px]:gap-6 max-[1024px]:text-base max-[1024px]:items-center">
        <div className="flex flex-col justify-center items-start gap-4 max-[1024px]:items-center">
          <h3 className="font-normal text-xl">Procurando por um professor?</h3>
          <h1 className="font-bold text-4xl">Professores</h1>
        </div>
        <p className="font-normal text-base text-gray-500 max-[1024px]:text-sm max-[1024px]:text-center">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet,
          consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
          labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
          exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>
        <button
          className="px-9 py-3 bg-black font-bold text-xl text-white rounded-2xl max-[1024px]:text-base max-[1024px]:w-2/3"
          type="button"
        >
          Saiba mais
        </button>
      </div>
    </section>
  );
};

export default MentorCard;
