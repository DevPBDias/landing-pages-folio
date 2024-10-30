import plansData from "../constants/plansData";
import PlanCard from "./PlanCard";

const PlanList = () => {
  return (
    <section className="grid grid-cols-3 gap-20 px-12 mt-24 max-[1024px]:w-full  max-[1024px]:px-0 max-[1024px]:flex max-[1024px]:flex-col max-[1024px]:items-center">
      {plansData.map((plan: any) => (
        <PlanCard key={plan.id} data={plan} />
      ))}
    </section>
  );
};

export default PlanList;
