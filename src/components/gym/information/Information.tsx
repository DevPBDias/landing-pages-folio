import infoGym from "../constants/dataGym";

const Information = () => {
  return (
    <section className="w-full flex flex-row justify-between items-center px-28 py-14 bg-black">
      {infoGym.map((info) => (
        <div
          key={info.id}
          className="flex flex-col gap-2 justify-center items-start"
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
