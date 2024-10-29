import Title from "../common/Title";
import CoachList from "./CoachList";
import MentorCard from "./MentorCard";

const Coaches = () => {
  return (
    <div className="flex flex-col px-12 py-24 gap-24">
      <Title title="Conheça nossos professores" />
      <CoachList />
      <MentorCard />
    </div>
  );
};

export default Coaches;
