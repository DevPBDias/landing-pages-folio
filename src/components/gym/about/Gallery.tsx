import Image from "next/image";
import gym1 from "@/assets/gym/images/training.jpg";
import gym2 from "@/assets/gym/images/gymArea.jpg";
import gym3 from "@/assets/gym/images/equipment.jpg";

const Gallery = () => {
  return (
    <section className="flex flex-row w-1/3 justify-between items-center gap-6 max-[768px]:flex-col max-[1440px]:w-full">
      <div className="flex flex-col justify-center items-center gap-8 max-[1440px]:w-full">
        <picture className="flex justify-center items-center w-full h-44">
          <Image
            src={gym1}
            alt="gym_photo"
            className="object-cover w-full h-full rounded-2xl"
          />
        </picture>
        <picture className="flex justify-center items-center w-full h-44">
          <Image
            src={gym2}
            alt="gym_photo2"
            className="object-cover w-full h-full rounded-2xl"
          />
        </picture>
      </div>
      <picture className="flex justify-center items-center w-full h-96">
        <Image
          src={gym3}
          alt="gym_photo3"
          className="object-cover w-full h-full rounded-2xl"
        />
      </picture>
    </section>
  );
};

export default Gallery;
