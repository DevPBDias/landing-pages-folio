import React from "react";
import commentsData from "../constants/commentsData";
import ReviewCard from "./ReviewCard";

const ReviewsList = () => {
  return (
    <section className="grid grid-cols-2 w-2/3 gap-6 max-[768px]:w-full max-[768px]:flex max-[768px]:flex-col max-[768px]:items-center">
      {commentsData.map((comment) => (
        <ReviewCard key={comment.id} data={comment} />
      ))}
    </section>
  );
};

export default ReviewsList;
