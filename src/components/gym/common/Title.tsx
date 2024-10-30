const Title = ({ title }: { title: string }) => {
  return (
    <div className="flex flex-col justify-center items-center w-full gap-6">
      <h1 className="max-[1024px]:text-4xl text-6xl font-bold max-[1024px]:text-center">{title}</h1>
      <p className="text-base font-normal w-1/2 text-center text-gray-500 max-[1024px]:w-full max-[1024px]:text-sm">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.
      </p>
    </div>
  );
};

export default Title;
