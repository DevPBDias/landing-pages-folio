import React from "react";
import coachesData from "../constants/coachesData";
import CoachCard from "./CoachCard";

const CoachList = () => {
  return (
    <div className="flex flex-row justify-around items-center">
      {coachesData.map((coach) => (
        <CoachCard key={coach.id} data={coach} />
      ))}
    </div>
  );
};

export default CoachList;
