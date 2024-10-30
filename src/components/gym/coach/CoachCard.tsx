import Image from "next/image";

const CoachCard = ({ data }: any) => {
  return (
    <div className="relative w-96 h-[400px] flex justify-center items-center group max-[1024px]:w-full">
      <div className="description_coach invisible group-hover:visible">
        <h3 className="text-xl font-bold text-white">{data.name}</h3>
        <p className="text-sm font-normal text-white ">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
      </div>
      <picture className="w-full h-full rounded-2xl absolute top-0 left-0 z-10">
        <Image
          src={data.image}
          alt={data.name}
          className="w-full h-full object-cover rounded-2xl"
        />
      </picture>
    </div>
  );
};

export default CoachCard;
