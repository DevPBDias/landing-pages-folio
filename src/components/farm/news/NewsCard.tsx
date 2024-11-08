import Image from "next/image";
import { MessageCircle, User } from "lucide-react";

interface CardProps {
  author: string;
  comments: number;
  title: string;
  image: any;
  date: string;
}

const NewsCard = ({ author, date, image, title, comments }: CardProps) => {
  return (
    <section className="w-full h-fit flex flex-col justify-center items-center bg-[var(--dark-primary-color)] rounded-2xl">
      <picture className="w-full relative rounded-2xl flex">
        <Image src={image} alt={title} className="rounded-t-2xl w-full" />
        <span className="absolute bottom-0 right-0 text-xs p-2 bg-[var(--secondary-color)] text-black rounded-tl-2xl font-bold">
          {date}
        </span>
      </picture>
      <figcaption className="w-full flex flex-col justify-start items-center gap-4 p-4">
        <div className="w-full flex flex-row justify-start items-center gap-6">
          <div className="flex flex-row justify-start items-center gap-1">
            <User size={16} color="#f7c35f" />
            <p className="text-xs xl:text-base">by {author}</p>
          </div>
          <div className="flex flex-row justify-start items-center gap-1">
            <MessageCircle size={16} color="#f7c35f" />
            <p className="text-xs xl:text-base">{comments} comments</p>
          </div>
        </div>
        <h3 className="text-base font-semibold w-full lg:text-lg">{title}</h3>
      </figcaption>
    </section>
  );
};

export default NewsCard;
