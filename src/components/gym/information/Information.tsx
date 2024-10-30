import infoGym from "../constants/dataGym";

const Information = () => {
  return (
    <section className="max-[1024px]:flex-col max-[1024px]:gap-12 w-full flex flex-row justify-between items-center px-28 py-14 bg-black max-[1024px]:px-4">
      {infoGym.map((info) => (
        <div
          key={info.id}
          className="flex flex-col gap-2 justify-center items-start max-[1024px]:items-center"
        >
          <h3 className="text-4xl text-white font-bold">{info.numbers}</h3>
          <p className="text-xs text-white">{info.subtitle}</p>
          <span className="text-xs text-white">{info.text}</span>
        </div>
      ))}
    </section>
  );
};

export default Information;
