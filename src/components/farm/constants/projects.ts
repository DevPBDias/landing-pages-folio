import project1 from "@/assets/farm/images/project1.png";
import project2 from "@/assets/farm/images/project2.png";
import project3 from "@/assets/farm/images/propject3.png";
import project4 from "@/assets/farm/images/project4.png";

interface IProject {
  id: number;
  type: string;
  name: string;
  image: any;
}

const projects: IProject[] = [
  {
    id: 1,
    name: "Natural way of agriculture",
    type: "Agriculture",
    image: project1,
  },
  { id: 2, name: "Our products on sale", type: "Sales", image: project2 },
  {
    id: 3,
    name: "Old Modern agriculture",
    type: "Agriculture",
    image: project3,
  },
  { id: 4, name: "Machine agriculture", type: "Agriculture", image: project4 },
];

export default projects;
