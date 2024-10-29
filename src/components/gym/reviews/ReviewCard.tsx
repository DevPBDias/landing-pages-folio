import RatingStars from "../common/RatingStars";

interface ICardProps {
  data: any;
}

const ReviewCard = ({ data }: ICardProps) => {
  return (
    <section className="w-[500px] h-64 border-2 border-black rounded-2xl p-4 flex flex-col justify-center items-start gap-3">
      <h3 className="text-3xl font-bold">{data?.name}</h3>
      <RatingStars rating={data?.rating} />
      <p className="text-lg font-normal">{data?.comment}</p>
    </section>
  );
};

export default ReviewCard;
