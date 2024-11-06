import About from "@/components/farm/about/About";
import Header from "@/components/farm/header/Header";
import Hero from "@/components/farm/hero/Hero";
import Products from "@/components/farm/products/Products";

export default function FarmWbesite() {
  return (
    <main className="w-full">
      <Header />
      <Hero />
      <About />
      <Products />
    </main>
  );
}
