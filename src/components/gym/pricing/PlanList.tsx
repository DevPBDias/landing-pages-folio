import plansData from "../constants/plansData";
import PlanCard from "./PlanCard";

const PlanList = () => {
  return (
    <section>
      {plansData.map((plan) => (
        <PlanCard key={plan.id} data={plan} />
      ))}
    </section>
  );
};

export default PlanList;
