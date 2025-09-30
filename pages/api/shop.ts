import type { NextApiRequest, NextApiResponse } from 'next';
import { sampleProducts } from '@/constants';

const ITEMS_PER_PAGE = 12;

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { page = '1', category = 'all', sort = 'Popularity' } = req.query;

  const currentPage = parseInt(page as string, 10);
  let filteredProducts = sampleProducts;

  // Category filter
  if (category !== 'all') {
    filteredProducts = filteredProducts.filter(
      (product) => product.category.toLowerCase() === (category as string).toLowerCase()
    );
  }

  // Sorting
  if (sort === 'Price: Low to High') {
    filteredProducts = [...filteredProducts].sort((a, b) => a.price - b.price);
  } else if (sort === 'Price: High to Low') {
    filteredProducts = [...filteredProducts].sort((a, b) => b.price - a.price);
  } else if (sort === 'Popularity') {
    filteredProducts = [...filteredProducts].sort((a, b) => Number(b.id) - Number(a.id));
  } else if (sort === 'Newest') {
    filteredProducts = [...filteredProducts].sort((a, b) => Number(b.id) - Number(a.id));
  }

  const totalCount = filteredProducts.length;

  // Pagination
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const paginatedProducts = filteredProducts.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  res.status(200).json({
    products: paginatedProducts,
    totalCount,
  });
}
