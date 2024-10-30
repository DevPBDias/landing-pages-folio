import plansData from "../constants/plansData";
import PlanCard from "./PlanCard";

const PlanList = () => {
  return (
    <section className="grid grid-cols-3 gap-20 px-12 mt-24 max-[768px]:w-full max-[768px]:flex max-[768px]:flex-col max-[768px]:items-center">
      {plansData.map((plan: any) => (
        <PlanCard key={plan.id} data={plan} />
      ))}
    </section>
  );
};

export default PlanList;
