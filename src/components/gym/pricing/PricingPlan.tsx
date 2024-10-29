import ChangePlanBtns from "./ChangePlanBtns";
import PlanList from "./PlanList";

const PricingPlan = () => {
  return (
    <main>
      <h3>Preço dos planos</h3>
      <div>
        <h1>Comece hoje</h1>
        <ChangePlanBtns />
      </div>
      <PlanList />
    </main>
  );
};

export default PricingPlan;
