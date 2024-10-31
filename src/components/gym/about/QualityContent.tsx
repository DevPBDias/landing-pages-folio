import { CloudSnow, DollarSign, HandHeart, HandMetal } from "lucide-react";

const QualityContent = () => {
  return (
    <section className="max-[1440px]:w-full max-[1024px]:grid-cols-1 w-2/3 grid grid-cols-2 gap-y-14 gap-x-9 max-[1440px]:px-4">
      <div className="flex flex-row justify-start items-start w-96 gap-3 max-[1024px]:flex-col max-[1024px]:items-center max-[1024px]:justify-center max-[1024px]:w-full">
        <div className="bg-black rounded-full p-3 flex justify-center items-center">
          <HandMetal size={24} color="#ffffff" />
        </div>
        <figcaption className="flex flex-col justify-start items-start w-full gap-3 max-[1024px]:items-center max-[1024px]:justify-center">
          <h3 className="font-semibold text-xl max-[1024px]:text-lg">
            Treinos estimulantes
          </h3>
          <p className="text-gray-500 text-base font-normal max-[1024px]:text-sm">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore
          </p>
        </figcaption>
      </div>
      <div className="flex flex-row justify-start items-start w-96 gap-3 max-[1024px]:flex-col max-[1024px]:w-full max-[1024px]:items-center max-[1024px]:justify-center ">
        <div className="bg-black rounded-full p-3 flex justify-center items-center">
          <CloudSnow size={24} color="#ffffff" />
        </div>
        <figcaption className="flex flex-col justify-start items-start w-full gap-3 max-[1024px]:items-center max-[1024px]:justify-center">
          <h3 className="font-semibold text-xl max-[1024px]:text-lg">
            Ambientes climatizados
          </h3>
          <p className="text-gray-500 text-base font-normal max-[1024px]:text-sm">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore
          </p>
        </figcaption>
      </div>
      <div className="flex flex-row justify-start items-start w-96 gap-3 max-[1024px]:flex-col max-[1024px]:w-full max-[1024px]:items-center max-[1024px]:justify-center">
        <div className="bg-black rounded-full p-3 flex justify-center items-center">
          <DollarSign size={24} color="#ffffff" />
        </div>
        <figcaption className="flex flex-col justify-start items-start w-full gap-3 max-[1024px]:items-center max-[1024px]:justify-center">
          <h3 className="font-semibold text-xl max-[1024px]:text-lg">
            Preço justo
          </h3>
          <p className="text-gray-500 text-base font-normal max-[1024px]:text-sm">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore
          </p>
        </figcaption>
      </div>
      <div className="flex flex-row justify-start items-start  w-96 gap-3 max-[1024px]:flex-col max-[1024px]:w-full max-[1024px]:items-center max-[1024px]:justify-center">
        <div className="bg-black rounded-full p-3 flex justify-center items-center">
          <HandHeart size={24} color="#ffffff" />
        </div>
        <figcaption className="flex flex-col justify-start items-start w-full gap-3 max-[1024px]:items-center max-[1024px]:justify-center">
          <h3 className="font-semibold text-xl max-[1024px]:text-lg">
            Professores qualificados
          </h3>
          <p className="text-gray-500 text-base font-normal max-[1024px]:text-sm">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore
          </p>
        </figcaption>
      </div>
    </section>
  );
};

export default QualityContent;
