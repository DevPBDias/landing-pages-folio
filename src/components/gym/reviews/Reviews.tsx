import ReviewBtn from "./ReviewBtn";
import ReviewClients from "./ReviewClients";
import ReviewsList from "./ReviewsList";

const Reviews = () => {
  return (
    <main className="flex flex-col w-full justify-center items-start px-12 py-24">
      <h3 className="text-2xl font-normal text-gray-500">
        Comentários dos alunos
      </h3>
      <div className="flex flex-row w-full justify-between items-center mt-4">
        <h1 className="font-bold text-6xl">Para você ver</h1>
        <ReviewBtn />
      </div>
      <div className="flex flex-row w-full justify-between items-center my-32">
        <ReviewClients />
        <ReviewsList />
      </div>
    </main>
  );
};

export default Reviews;
