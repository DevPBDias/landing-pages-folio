import Title from "../common/Title";
import CoachList from "./CoachList";

const Coaches = () => {
  return (
    <div className="flex flex-col px-12 py-24 gap-24">
      <Title title="Conheça nossos professores" />
      <CoachList />
    </div>
  );
};

export default Coaches;
