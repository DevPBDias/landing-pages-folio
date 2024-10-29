import { CloudSnow, DollarSign, HandHeart, HandMetal } from "lucide-react";

const QualityContent = () => {
  return (
    <section className="w-2/3 grid grid-cols-2 gap-y-14 gap-x-9">
      <div className="flex flex-row justify-start items-start w-96 gap-3">
        <div className="bg-black rounded-full p-3 flex justify-center items-center">
          <HandMetal size={24} color="#ffffff" />
        </div>
        <figcaption className="flex flex-col justify-start items-start w-full gap-3">
          <h3 className="font-semibold text-xl">Treinos estimulantes</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore
          </p>
        </figcaption>
      </div>
      <div className="flex flex-row justify-start items-start w-96 gap-3">
        <div className="bg-black rounded-full p-3 flex justify-center items-center">
          <CloudSnow size={24} color="#ffffff" />
        </div>
        <figcaption className="flex flex-col justify-start items-start w-full gap-3">
          <h3 className="font-semibold text-xl">Ambientes climatizados</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore
          </p>
        </figcaption>
      </div>
      <div className="flex flex-row justify-start items-start w-96 gap-3">
        <div className="bg-black rounded-full p-3 flex justify-center items-center">
          <DollarSign size={24} color="#ffffff" />
        </div>
        <figcaption className="flex flex-col justify-start items-start w-full gap-3">
          <h3 className="font-semibold text-xl">Preço justo</h3>
          <p className="font-normal text-base">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore
          </p>
        </figcaption>
      </div>
      <div className="flex flex-row justify-start items-start  w-96 gap-3">
        <div className="bg-black rounded-full p-3 flex justify-center items-center">
          <HandHeart size={24} color="#ffffff" />
        </div>
        <figcaption className="flex flex-col justify-start items-start w-full gap-3">
          <h3 className="font-semibold text-xl">Professores qualificados</h3>
          <p className="font-normal text-base">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore
          </p>
        </figcaption>
      </div>
    </section>
  );
};

export default QualityContent;
