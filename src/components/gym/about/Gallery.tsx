import Image from "next/image";
import gym1 from "@/assets/gym/images/training.jpg";
import gym2 from "@/assets/gym/images/gymArea.jpg";
import gym3 from "@/assets/gym/images/equipment.jpg";

const Gallery = () => {
  return (
    <section>
      <div>
        <picture>
          <Image src={gym1} alt="gym_photo" />
        </picture>
        <picture>
          <Image src={gym2} alt="gym_photo2" />
        </picture>
      </div>
      <picture>
        <Image src={gym3} alt="gym_photo3" />
      </picture>
    </section>
  );
};

export default Gallery;
