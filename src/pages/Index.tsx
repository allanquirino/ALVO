import { Hero } from "@/components/home/Hero";
import { FeaturedProducts } from "@/components/home/FeaturedProducts";
import { NewArrivals } from "@/components/home/NewArrivals";
import { Categories } from "@/components/home/Categories";
import { Features } from "@/components/home/Features";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { CartDrawer } from "@/components/cart/CartDrawer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <Features />
        <NewArrivals />
        <FeaturedProducts />
        <Categories />
      </main>
      <Footer />
      <CartDrawer />
    </div>
  );
};

export default Index;
