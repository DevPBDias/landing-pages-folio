import ChangePlanBtns from "./ChangePlanBtns";
import PlanList from "./PlanList";

const PricingPlan = () => {
  return (
    <main className="flex flex-col w-full justify-center items-start px-12 py-24">
      <h3 className="text-2xl font-normal text-gray-500">Preço dos planos</h3>
      <div className="flex flex-row w-full justify-between items-center mt-4">
        <h1 className="font-bold text-6xl">Comece hoje</h1>
        <ChangePlanBtns />
      </div>
      <PlanList />
    </main>
  );
};

export default PricingPlan;
