import Image from "next/image";

type ProductProps = {
  image: string;
  name: string;
};

const ProductCard = (props: ProductProps) => {
  return (
    <div className=" w-full p-4 bg-[var(--light-primary-color)] flex flex-col justify-center items-center rounded-2xl gap-2">
      <picture className="w-12 h-12">
        <Image
          src={props.image}
          alt={props.name}
          quality={100}
          priority
          className="w-full h-full object-cover"
        />
      </picture>
      <p className="text-base">{props.name}</p>
    </div>
  );
};

export default ProductCard;
