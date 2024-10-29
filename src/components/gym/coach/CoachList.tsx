import React from "react";
import coachesData from "../constants/coachesData";
import CoachCard from "./CoachCard";

const CoachList = () => {
  return (
    <div>
      {coachesData.map((coach) => (
        <CoachCard key={coach.id} name={coach.name} />
      ))}
    </div>
  );
};

export default CoachList;
