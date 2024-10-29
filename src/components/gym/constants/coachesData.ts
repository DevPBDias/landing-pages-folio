import { StaticImageData } from "next/image";
import coach1 from "@/assets/gym/images/coach1.jpg";
import coach2 from "@/assets/gym/images/coach2.jpg";
import coach3 from "@/assets/gym/images/coach3.jpg";

interface ICoach {
  id: number;
  name: string;
  image: StaticImageData;
}

const coachesData: ICoach[] = [
  {
    id: 1,
    name: "Jhon Doe",
    image: coach1,
  },
  {
    id: 2,
    name: "Rubio Carlone",
    image: coach2,
  },
  {
    id: 3,
    name: "Oswald Cozy",
    image: coach3,
  },
];

export default coachesData;
