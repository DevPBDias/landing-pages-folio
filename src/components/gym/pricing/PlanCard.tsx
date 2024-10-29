import { Check } from "lucide-react";

interface CardProps {
  data: any;
}

const PlanCard = ({ data }: CardProps) => {
  return (
    <div>
      <h4>{data?.type}</h4>
      <div>
        <h1>$ {data?.price}</h1>
        <span>/ Mensal</span>
      </div>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut
      </p>
      {data?.advantages.map((item: any) => (
        <div>
          <div>
            <Check size={16} color="#ffffff" />
          </div>
          <p>{item}</p>
        </div>
      ))}
      <button type="button">Escolher plano</button>
    </div>
  );
};

export default PlanCard;
