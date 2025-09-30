'use client';

import React, { useTransition } from 'react';
import Link from 'next/link';
import { useRouter, useSearchParams } from 'next/navigation';
import { useQuery } from '@tanstack/react-query';
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi2';
import { Product } from '@/interfaces';

const ITEMS_PER_PAGE = 12;

const fetchProducts = async (page: number, category: string, sort: string) => {
  const params = new URLSearchParams({ page: page.toString(), category, sort });
  const res = await fetch(`/api/shop?${params.toString()}`);
  if (!res.ok) throw new Error('Failed to fetch');
  return res.json();
};

const sortOptions = [
  'Popularity',
  'Newest',
  'Price: Low to High',
  'Price: High to Low',
  'Customer Rating',
];

const ShopClient = ({ categories }: { categories: string[] }) => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [, startTransition] = useTransition();

  const currentPage = parseInt(searchParams.get('page') || '1', 10);
  const currentCategory = searchParams.get('category') || 'all';
  const currentSort = searchParams.get('sort') || 'Popularity';

  const { data, isLoading, error } = useQuery({
    queryKey: ['products', currentPage, currentCategory, currentSort],
    queryFn: () => fetchProducts(currentPage, currentCategory, currentSort),
  });

  const updateQuery = (newParams: Record<string, string | number>) => {
    const params = new URLSearchParams(searchParams.toString());
    Object.entries(newParams).forEach(([key, value]) => {
      if (value === 'all' || value === '' || value === undefined) {
        params.delete(key);
      } else {
        params.set(key, value.toString());
      }
    });
    startTransition(() => {
      router.replace(`/shop?${params.toString()}`);
    });
  };

  if (isLoading) return <p className="p-4 text-center">Loading...</p>;
  if (error) return <p className="p-4 text-center text-red-500">Error loading products</p>;

  const { products, totalCount } = data;
  const totalPages = Math.ceil(totalCount / ITEMS_PER_PAGE);

  return (
    <div className="flex flex-col bg-[#f9fbfa] min-h-screen w-full">
      <div className="flex justify-center px-4 sm:px-6 md:px-8 lg:px-40 py-5 w-full">
        <div className="flex flex-col max-w-[960px] w-full">
          {/* Title */}
          <h2 className="text-[24px] sm:text-[28px] font-bold capitalize text-[#5d8975] px-2 pb-3 pt-5">
            {currentCategory === 'all' ? 'All Products' : currentCategory}
          </h2>

          {/* Categories */}
          <div className="flex flex-wrap gap-2 sm:gap-3 p-2 sm:p-3 text-[#5d8975]">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => updateQuery({ category: cat, page: 1 })}
                className={`h-8 px-3 sm:px-4 rounded-full text-sm sm:text-sm capitalize ${
                  currentCategory === cat ? 'bg-[#d8e7de]' : 'bg-[#eaf1ed]'
                }`}
              >
                {cat === 'all' ? 'All Products' : cat}
              </button>
            ))}
          </div>

          {/* Sorting */}
          <div className="flex flex-wrap gap-2 sm:gap-3 p-2 sm:p-3 text-[#5d8975]">
            {sortOptions.map((option) => (
              <button
                key={option}
                onClick={() => updateQuery({ sort: option, page: 1 })}
                className={`h-8 px-3 sm:px-4 rounded-full text-sm sm:text-sm ${
                  currentSort === option ? 'bg-[#d8e7de]' : 'bg-[#eaf1ed]'
                }`}
              >
                {option}
              </button>
            ))}
          </div>

          {/* Products */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 p-2 sm:p-4">
            {products.map((prod: Product) => (
              <Link
                key={prod.id}
                href={`/shop/${prod.id}`}
                prefetch={true}
                className="flex flex-col gap-2 pb-3 hover:opacity-90 transition cursor-pointer"
              >
                <div
                  className="w-full bg-center bg-no-repeat bg-cover aspect-[3/4] rounded-xl"
                  style={{ backgroundImage: `url("/${prod.image}")` }}
                />
                <div>
                  <p className="text-base font-medium text-[#5d8975] truncate">{prod.name}</p>
                  <p className="text-sm text-[#5d8975]">${prod.price.toFixed(2)}</p>
                </div>
              </Link>
            ))}
          </div>

          {/* Pagination */}
          <div className="flex flex-wrap items-center justify-center gap-2 p-4 text-[#5d8975]">
            <button
              onClick={() => updateQuery({ page: Math.max(currentPage - 1, 1) })}
              disabled={currentPage === 1}
              className="flex items-center justify-center h-8 w-8 rounded-full hover:bg-[#eaf1ed] disabled:opacity-50"
            >
              <HiChevronLeft size={18} />
            </button>

            {Array.from({ length: totalPages }, (_, i) => (
              <button
                key={i + 1}
                onClick={() => updateQuery({ page: i + 1 })}
                className={`h-8 w-8 flex items-center justify-center rounded-full text-sm ${
                  currentPage === i + 1 ? 'font-bold bg-[#eaf1ed]' : 'font-normal'
                }`}
              >
                {i + 1}
              </button>
            ))}

            <button
              onClick={() => updateQuery({ page: Math.min(currentPage + 1, totalPages) })}
              disabled={currentPage === totalPages}
              className="flex items-center justify-center h-8 w-8 rounded-full hover:bg-[#eaf1ed] disabled:opacity-50"
            >
              <HiChevronRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopClient;
