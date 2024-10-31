import RatingStars from "../common/RatingStars";

interface ICardProps {
  data: any;
}

const ReviewCard = ({ data }: ICardProps) => {
  return (
    <section className="max-[1440px]:w-full max-[768px]:items-center w-[500px] h-fit border-2 border-black rounded-2xl p-4 flex flex-col justify-center items-start gap-3">
      <h3 className=" max-[1024px]:text-xl text-3xl font-bold">{data?.name}</h3>
      <RatingStars rating={data?.rating} />
      <p className="max-[1024px]:text-base text-lg font-normal max-[768px]:text-center">
        {data?.comment}
      </p>
    </section>
  );
};

export default ReviewCard;
