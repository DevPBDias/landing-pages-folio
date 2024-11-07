import article1 from "@/assets/farm/images/article1.png";
import article2 from "@/assets/farm/images/article2.png";
import article3 from "@/assets/farm/images/article3.png";

export interface IArticle {
  id: number;
  author: string;
  comments: number;
  title: string;
  image: any;
  date: string;
}

const articles: IArticle[] = [
  {
    id: 1,
    author: "Kevin Martin",
    comments: 2,
    title: "Taking seamless key indicators offline to",
    image: article1,
    date: "22/08/2024",
  },
  {
    id: 2,
    author: "Kevin Martin",
    comments: 5,
    title: "Override the digital divide with additional",
    image: article2,
    date: "22/04/2024",
  },
  {
    id: 3,
    author: "Kevin Martin",
    comments: 3,
    title: "Agriculture Matters to the Future of next",
    image: article3,
    date: "22/01/2024",
  },
];

export default articles;
