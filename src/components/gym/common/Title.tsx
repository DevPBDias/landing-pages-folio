const Title = ({ title }: { title: string }) => {
  return (
    <div className="flex flex-col justify-center items-center w-full gap-4">
      <h1 className="text-6xl font-bold">{title}</h1>
      <p className="text-base font-normal w-1/2 text-center">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.
      </p>
    </div>
  );
};

export default Title;
