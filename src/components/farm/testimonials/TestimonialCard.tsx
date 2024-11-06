import { ArrowBigRight } from "lucide-react";
import Image from "next/image";
import quote from "@/assets/farm/icons/quote.png";

interface TestimonialProps {
  name: string;
  type: string;
  image: any;
  comment: string;
}

const TestimonialCard = (props: TestimonialProps) => {
  return (
    <div className="w-full flex flex-col justify-center items-start gap-4">
      <picture className="w-1/2 h-full flex relative">
        <Image
          src={props.image}
          alt={props.name}
          quality={100}
          priority
          className="w-full h-full object-cover rounded-full"
        />
        <Image
          src={quote}
          alt="quote icon"
          quality={100}
          priority
          className="w-8 h-8 object-cover absolute top-0 right-4"
        />
      </picture>
      <div className="flex flex-col justify-center items-start gap-4">
        <p className="text-sm">{props.comment}</p>
        <div className="flex flex-col justify-center items-start">
          <h3 className="text-base font-semibold">{props.name}</h3>
          <h3 className="opacity-60 text-sm">{props.type}</h3>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
