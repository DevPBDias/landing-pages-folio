import ChangePlanBtns from "./ChangePlanBtns";
import PlanList from "./PlanList";

const PricingPlan = () => {
  return (
    <main
      id="planos"
      className="flex flex-col w-full justify-center items-start px-12 py-24 max-[1024px]:items-center max-[1024px]:px-4 max-[1024px]:flex-col"
    >
      <h3 className="text-2xl font-normal text-gray-500 max-[1024px]:text-center max-[1024px]:text-lg">
        Preço dos planos
      </h3>
      <div className="flex flex-row w-full justify-between items-center mt-4 max-[1024px]:flex-col max-[1024px]:gap-12">
        <h1 className="font-bold text-6xl max-[1024px]:text-5xl">
          Comece hoje
        </h1>
        <ChangePlanBtns />
      </div>
      <PlanList />
    </main>
  );
};

export default PricingPlan;
