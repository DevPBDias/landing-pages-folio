import { Check } from "lucide-react";

interface CardProps {
  data: any;
}

const PlanCard = ({ data }: CardProps) => {
  return (
    <section className="flex flex-col p-8 border-2 border-black rounded-lg shadow-lg gap-9 h-fit group hover:bg-black">
      <div className="flex flex-col justify-start items-start gap-4">
        <h4 className="text-lg font-medium group-hover:text-white">
          {data?.type}
        </h4>
        <div className="flex flex-row gap-3 items-end">
          <h1 className="text-5xl font-bold group-hover:text-white">
            $ {data?.price.month}
          </h1>
          <span className="text-base font-bold group-hover:text-white">
            / Mensal
          </span>
        </div>
        <p className="text-base font-normal text-gray-500 group-hover:text-gray-300 max-[1024px]:text-sm">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut
        </p>
      </div>
      <div className="flex flex-col justify-start items-start gap-3">
        {data?.advantages.map((item: any, index: number) => (
          <div key={index} className="flex flex-row gap-3 items-center">
            <div className="p-1 rounded-full bg-black group-hover:hidden">
              <Check size={16} color="#ffffff" />
            </div>
            <div className="p-1 rounded-full bg-white hidden group-hover:flex">
              <Check size={16} color="#0f0f0f" />
            </div>
            <p className="text-base font-normal group-hover:text-white max-[1024px]:text-sm">
              {item}
            </p>
          </div>
        ))}
      </div>
      <button
        className="w-full py-3 bg-black font-bold text-xl text-white rounded-2xl group-hover:text-black group-hover:bg-white"
        type="button"
      >
        Escolher plano
      </button>
    </section>
  );
};

export default PlanCard;
