import Image from "next/image";

interface CardProps {
  image: any;
  title: string;
  description: string;
}

const ServiceCard = ({ image, title, description }: CardProps) => {
  return (
    <div className="flex flex-col gap-4 my-8">
      <picture className="w-16 h-16 p-4 rounded-full flex bg-[var(--dark-primary-color)] items-center justify-center">
        <Image
          src={image}
          alt="service img"
          quality={100}
          priority
          className="w-full h-full object-cover"
        />
      </picture>
      <div className="flex flex-col justify-center items-start gap-1">
        <h3 className="font-bold text-xl">{title}Our Agriculture Growth</h3>
        <p className="text-sm font-normal">{description}</p>
      </div>
    </div>
  );
};

export default ServiceCard;
