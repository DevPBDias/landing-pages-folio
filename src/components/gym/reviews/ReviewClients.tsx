import Image from "next/image";
import reviewClient1 from "@/assets/gym/images/Review_1.png";
import reviewClient2 from "@/assets/gym/images/Review_2.jpg";
import reviewClient3 from "@/assets/gym/images/Review_3.jpg";
import reviewClient4 from "@/assets/gym/images/Review_4.png";

const ReviewClients = () => {
  return (
    <section className="w-1/3 relative h-[550px] max-[1024px]:w-full">
      <picture className="absolute top-4 left-52">
        <Image src={reviewClient1} alt="client 1" className="object-cover" />
      </picture>
      <picture className="absolute top-36 left-12">
        <Image src={reviewClient2} alt="client 1" />
      </picture>
      <picture className="absolute bottom-24 right-12">
        <Image src={reviewClient3} alt="client 1" />
      </picture>
      <picture className="absolute bottom-4 left-20">
        <Image src={reviewClient4} alt="client 1" />
      </picture>
    </section>
  );
};

export default ReviewClients;
