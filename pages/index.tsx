import { NextPage } from 'next';
import FeaturedProducts from '@/components/common/FeaturedProducts';
import NewsletterSignup from '@/components/common/NewsletterSignup';
import HeroSection from '@/components/common/HeroSection';
import CustomerReviews from '@/components/common/CustomerReviewSection';
import SaleSection from '@/components/common/SaleSection';
import CategorySection from '@/components/common/CategorySection';

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
