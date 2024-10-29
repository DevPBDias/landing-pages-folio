import About from "@/components/gym/about/About";
import Coaches from "@/components/gym/coach/Coaches";
import Header from "@/components/gym/header/Header";
import Hero from "@/components/gym/hero/MainHero";
import Information from "@/components/gym/information/Information";

export default function GymWbesite() {
  return (
    <main className="w-full flex flex-col justify-center items-center">
      <Header />
      <Hero />
      <Information />
      <About />
      <Coaches />
    </main>
  );
}
