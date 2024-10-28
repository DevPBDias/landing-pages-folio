import Hero from "@/components/gym/hero/MainHero";
import Information from "@/components/gym/information/Information";

export default function GymWbesite() {
  return (
    <main className="relative w-full flex flex-col justify-center items-center">
      <Hero />
      <Information />
    </main>
  );
}
