import About from "@/components/gym/about/About";
import Coaches from "@/components/gym/coach/Coaches";
import Contact from "@/components/gym/contact/Contact";
import Footer from "@/components/gym/footer/Footer";
import Header from "@/components/gym/header/Header";
import Hero from "@/components/gym/hero/MainHero";
import Information from "@/components/gym/information/Information";
import PricingPlan from "@/components/gym/pricing/PricingPlan";
import Reviews from "@/components/gym/reviews/Reviews";

export default function GymWbesite() {
  return (
    <main className="w-full flex flex-col justify-center items-center">
      <Header />
      <Hero />
      <Information />
      <About />
      <Coaches />
      <PricingPlan />
      <Reviews />
      <Contact />
      <Footer />
    </main>
  );
}
