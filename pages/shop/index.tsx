import ShopClient from '@/components/ShopClient';
import { sampleProducts } from '@/constants';

export default function ShopPage() {
  // derive categories from products
  const categories = ['all', ...new Set(sampleProducts.map((p) => p.category))];

  return <ShopClient categories={categories} />;
}
