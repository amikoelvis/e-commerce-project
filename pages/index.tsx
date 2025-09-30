import { NextPage } from 'next';
import FeaturedProducts from '@/components/FeaturedProducts';
import NewsletterSignup from '@/components/NewsletterSignup';
import HeroSection from '@/components/HeroSection';
import CustomerReviews from '@/components/CustomerReviewSection';
import SaleSection from '@/components/SaleSection';
import CategorySection from '@/components/CategorySection';

const HomePage: NextPage = () => {
  return (
      <main>
        <HeroSection />
        <CategorySection />
        <FeaturedProducts />
        <SaleSection />
        <CustomerReviews />
        <NewsletterSignup />
      </main>
  );
};

export default HomePage;
