// pages/index.tsx
import type { NextPage } from "next";
import FeaturedProducts from "@/components/FeaturedProducts";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import NewsletterSignup from "@/components/NewsletterSignup";
import HeroSection from "@/components/HeroSection";
import CustomerReviews from "@/components/CustomerReviewSection";
import SaleSection from "@/components/SaleSection";
import CategorySection from "@/components/CategorySection";

const HomePage: NextPage = () => {
  return (
    <div className="relative flex size-full min-h-screen flex-col bg-white group/design-root overflow-x-hidden">
      <Header />

      <div className="layout-container flex h-full grow flex-col">
        <main>
          <HeroSection />
          <CategorySection />
          <FeaturedProducts />
          <SaleSection />
          <CustomerReviews />
          <NewsletterSignup />
        </main>
      </div>

      <Footer />
    </div>
  );
};

export default HomePage;
