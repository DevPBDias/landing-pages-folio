import { ArrowBigRight } from "lucide-react";
import Image from "next/image";

type ProjectProps = {
  image: string;
  name: string;
  type: string;
};

const ProjectCard = (props: ProjectProps) => {
  return (
    <div className="relative w-full h-64 flex justify-center items-center rounded-2xl gap-2">
      <picture className="w-full h-full flex">
        <Image
          src={props.image}
          alt={props.name}
          quality={100}
          priority
          className="w-full h-full object-cover rounded-2xl"
        />
      </picture>
      <div className="absolute bottom-0 left-0 py-4 w-full flex flex-row justify-between items-center px-4 bg-black bg-opacity-60 rounded-b-2xl">
        <div className="flex flex-col justify-start items-start">
          <h3 className="text-[var(--secondary-color)] font-bold uppercase">
            {props.type}
          </h3>
          <h3 className="text-base font-bold">{props.name}</h3>
        </div>
        <ArrowBigRight size={24} color="#f7c35f" />
      </div>
    </div>
  );
};

export default ProjectCard;
