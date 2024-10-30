import React from "react";
import commentsData from "../constants/commentsData";
import ReviewCard from "./ReviewCard";

const ReviewsList = () => {
  return (
    <section className="grid grid-cols-2 w-2/3 gap-6 max-[1440px]:w-full max-[1440px]:grid-cols-1">
      {commentsData.map((comment) => (
        <ReviewCard key={comment.id} data={comment} />
      ))}
    </section>
  );
};

export default ReviewsList;
