import { Star, StarIcon } from "lucide-react";

const RatingStars = ({ rating }: any) => {
  const colors = {
    orange: "#080808",
    grey: "#a9a9a9",
  };

  const stars = Array(5).fill(0);

  return (
    <div className="flex flex-row justify-start items-center">
      {stars.map((_: any, index: number) => (
        <div key={index}>
          <Star
            key={index}
            size={20}
            fill={rating > index ? colors.orange : colors.grey}
            strokeWidth={0}
          />
        </div>
      ))}
    </div>
  );
};

export default RatingStars;
