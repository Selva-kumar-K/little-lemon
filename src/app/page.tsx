import About from "@/components/About";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ProductSection from "@/components/ProductSection";
import Reviews from "@/components/Reviews";
export default function Home() {
  return (
    <main>
      <Header />
      <HeroSection />
      <ProductSection />
      <Reviews/>
      <About/>
      <Footer/>
    </main>
  );
}
