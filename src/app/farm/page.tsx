import About from "@/components/farm/about/About";
import Header from "@/components/farm/header/Header";
import Hero from "@/components/farm/hero/Hero";
import News from "@/components/farm/news/News";
import Products from "@/components/farm/products/Products";
import Projects from "@/components/farm/projects/Projects";
import Services from "@/components/farm/services/Services";
import Testimonials from "@/components/farm/testimonials/Testimonials";
import FarmVideo from "@/components/farm/video/FarmVideo";

export default function FarmWbesite() {
  return (
    <main className="w-full">
      <Header />
      <Hero />
      <About />
      <Products />
      <FarmVideo />
      <Projects />
      <Testimonials />
      <Services />
      <News />
    </main>
  );
}
