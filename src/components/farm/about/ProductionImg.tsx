import Image from "next/image";
import aboutImg from "@/assets/farm/images/aboutImg.png";
import icon from "@/assets/farm/icons/production.png";

const ProductionImg = () => {
  return (
    <picture className="w-full relative flex flex-col items-center justify-center px-4 my-4">
      <Image
        src={aboutImg}
        alt="farm image"
        className="object-cover w-full h-full"
        quality={100}
        priority
      />
      <div className="absolute flex flex-row w-3/4 justify-center items-center bg-[var(--light-primary-color)] -bottom-10 px-8 py-3 rounded-2xl">
        <picture className="w-1/3 relative">
          <Image
            src={icon}
            alt="farm image"
            className="object-cover w-16 h-16"
            quality={100}
            priority
          />
        </picture>
        <div className="flex flex-col justify-start items-center w-2/3 border-l-2 px-2">
          <h3 className="italic font-bold text-xl w-full">86,700</h3>
          <span className="text-sm w-full">Project successfully completed</span>
        </div>
      </div>
    </picture>
  );
};

export default ProductionImg;
