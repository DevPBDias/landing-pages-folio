import Image from "next/image";
import reviewClient1 from "@/assets/gym/images/Review_1.png";
import reviewClient2 from "@/assets/gym/images/Review_2.jpg";
import reviewClient3 from "@/assets/gym/images/Review_3.jpg";
import reviewClient4 from "@/assets/gym/images/Review_4.png";

const ReviewClients = () => {
  return (
    <section className="w-1/3 h-[550px] max-[1024px]:hidden flex flex-col justify-around items-center">
      <picture className="w-36 h-36 mr-24 mt-12">
        <Image
          src={reviewClient1}
          alt="client 1"
          className="object-cover w-full h-full"
        />
      </picture>
      <picture className="w-24 h-24 ml-auto -mt-24">
        <Image
          src={reviewClient2}
          alt="client 2"
          className="object-cover w-full h-full "
        />
      </picture>
      <picture className="w-36 h-36 ml-24">
        <Image
          src={reviewClient3}
          alt="client 3"
          className="object-cover w-full h-full"
        />
      </picture>
      <picture className="w-30 h-30 mb-12">
        <Image
          src={reviewClient4}
          alt="client 4"
          className="object-cover w-full h-full"
        />
      </picture>
    </section>
  );
};

export default ReviewClients;
