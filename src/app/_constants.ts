import { StaticImageData } from "next/image";
import gym from "@/assets/gifs/gym.gif";
import farm from "@/assets/gifs/farm.gif";
import maxtrainning from "@/assets/gifs/maxtrainning.gif";
import olemida from "@/assets/gifs/olemida.gif";

interface TemplateData {
  id: number;
  image: StaticImageData;
  name: string;
  link: string;
}

export const templates: TemplateData[] = [
  {
    id: 1,
    name: "Olé midia website V3",
    image: olemida,
    link: "https://olemidia.com.br/",
  },
  {
    id: 2,
    name: "Max Training website",
    image: maxtrainning,
    link: "https://max-training-lp.vercel.app/maxtrainingperformance",
  },
  {
    id: 3,
    name: "Gym Template",
    image: gym,
    link: "/gym",
  },
  {
    id: 4,
    name: "Farm template",
    image: farm,
    link: "/farm",
  },
];
