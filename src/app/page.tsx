import { Github, Linkedin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { templates } from "./_constants";

export default function Home() {
  return (
    <main className="w-full h-fit lg:h-screen bg-blue-950 lg:px-16 px-4 pb-8">
      <header className="flex flex-row justify-between py-4">
        <h1 className="italic text-2xl lg:text-3xl font-bold text-yellow-500 hover:text-yellow-300">
          LandFolio
        </h1>
        <div className="flex flex-row justify-center items-center gap-8">
          <Link
            href="https://github.com/DevPBDias"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Github size={24} color="#facc15" />
          </Link>
          <Link
            href="https://www.linkedin.com/in/devpaulobrunomdias/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Linkedin size={24} color="#facc15" />
          </Link>
          <Link
            href="https://portfolio-final-jade-pi.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
            className="border-yellow-500 border-2 text-yellow-500 font-bold flex justify-center items-center rounded-xl py-2 px-4 hover:text-yellow-300 hover:border-yellow-300"
          >
            Projects
          </Link>
        </div>
      </header>
      <section className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8 mt-4 xl:mt-16">
        {templates.map((item) => (
          <Link
            href={item.link}
            key={item.id}
            className="rounded-2xl bg-blue-800 flex flex-col h-80"
          >
            <picture className="w-full h-full flex">
              <Image
                src={item.image}
                alt="farm image"
                className="object-cover w-full h-full rounded-t-2xl"
                quality={100}
                priority
              />
            </picture>
            <div className="w-full p-4 bg-gray-600 rounded-b-2xl">
              <p className="text-lg text-white">{item.name}</p>
            </div>
          </Link>
        ))}
      </section>
    </main>
  );
}
