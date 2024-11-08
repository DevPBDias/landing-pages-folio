import Image from "next/image";
import playBtn from "@/assets/farm/icons/play btn 3.png";
import video from "@/assets/farm/images/video.png";
import Link from "next/link";

const FarmVideo = () => {
  return (
    <section className="w-full my-12 h-[70vh] flex relative justify-center items-center lg:my-36">
      <picture className="w-full h-full">
        <Image
          src={video}
          alt="hero image"
          className="object-cover w-full h-full"
          quality={100}
          priority
        />
      </picture>
      <div className="absolute flex flex-col justify-center items-center px-4 gap-4 md:flex-row md:justify-around">
        <h1 className="w-2/3 text-center md:text-xl lg:text-2xl xl:text-3xl">
          Agriculture Matters to the Future of Bangladesh
        </h1>
        <Link
          href="https://www.youtube.com/watch?v=5ZiHkYhWEto&t=4s"
          target="_blank"
          rel="noopener noreferrer"
          className="flex justify-center items-center"
        >
          <Image
            src={playBtn}
            alt="play icon"
            quality={100}
            priority
            className="w-full h-full object-cover"
          />
        </Link>
      </div>
    </section>
  );
};

export default FarmVideo;
