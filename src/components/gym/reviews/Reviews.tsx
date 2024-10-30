import ReviewBtn from "./ReviewBtn";
import ReviewClients from "./ReviewClients";
import ReviewsList from "./ReviewsList";

const Reviews = () => {
  return (
    <main
      id="avaliacao"
      className="flex flex-col w-full justify-center items-start px-12 py-24 max-[1024px]:items-center max-[1024px]:px-4"
    >
      <h3 className="text-2xl font-normal text-gray-500 max-[1024px]:text-center max-[1024px]:text-lg">
        Comentários dos alunos
      </h3>
      <div className="flex flex-row w-full justify-between items-center mt-4 max-[1024px]:flex-col max-[1024px]:gap-12">
        <h1 className="font-bold text-6xl max-[1024px]:text-5xl">
          Para você ver
        </h1>
        <ReviewBtn />
      </div>
      <div className="flex flex-row w-full justify-between items-center my-32 max-[1024px]:flex-col max-[1024px]:my-16">
        <ReviewClients />
        <ReviewsList />
      </div>
    </main>
  );
};

export default Reviews;
