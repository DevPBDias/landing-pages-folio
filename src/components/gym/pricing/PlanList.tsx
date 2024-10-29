import plansData from "../constants/plansData";
import PlanCard from "./PlanCard";

const PlanList = () => {
  return (
    <section className="grid grid-cols-3 gap-20 px-12 mt-24">
      {plansData.map((plan: any) => (
        <PlanCard key={plan.id} data={plan} />
      ))}
    </section>
  );
};

export default PlanList;
