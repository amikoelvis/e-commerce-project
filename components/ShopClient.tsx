// components/ShopClient.tsx
'use client';

import React, { useTransition } from 'react';
import Link from 'next/link';
import { useRouter, useSearchParams } from 'next/navigation';
import { useQuery } from '@tanstack/react-query';
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi2';
import { Product } from '@/interfaces';

const ITEMS_PER_PAGE = 12;

const fetchProducts = async (page: number, category: string, sort: string) => {
  const params = new URLSearchParams({
    page: page.toString(),
    category,
    sort,
  });
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

  if (isLoading) return <p className="p-4">Loading...</p>;
  if (error) return <p className="p-4 text-red-500">Error loading products</p>;

  const { products, totalCount } = data;
  const totalPages = Math.ceil(totalCount / ITEMS_PER_PAGE);

  return (
    <div className="relative flex size-full min-h-screen flex-col bg-[#f9fbfa] group/design-root overflow-x-hidden">
      <div className="layout-container flex h-full grow flex-col">
        <div className="px-40 flex flex-1 justify-center py-5">
          <div className="layout-content-container flex flex-col max-w-[960px] flex-1">

            <h2 className="text-[28px] font-bold capitalize px-4 pb-3 pt-5 text-[#5d8975]">
              {currentCategory === 'all' ? 'All Products' : currentCategory}
            </h2>

            {/* Categories */}
            <div className="flex gap-3 p-3 flex-wrap pr-4 text-[#5d8975]">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => updateQuery({ category: cat, page: 1 })}
                  className={`flex h-8 items-center justify-center rounded-full px-4 capitalize ${
                    currentCategory === cat ? 'bg-[#d8e7de]' : 'bg-[#eaf1ed]'
                  }`}
                >
                  <p className="text-sm">{cat === 'all' ? 'All Products' : cat}</p>
                </button>
              ))}
            </div>

            {/* Sorting */}
            <div className="flex gap-3 p-3 flex-wrap pr-4 text-[#5d8975]">
              {sortOptions.map((option) => (
                <button
                  key={option}
                  onClick={() => updateQuery({ sort: option, page: 1 })}
                  className={`flex h-8 items-center justify-center rounded-full px-4 ${
                    currentSort === option ? 'bg-[#d8e7de]' : 'bg-[#eaf1ed]'
                  }`}
                >
                  <p className="text-sm">{option}</p>
                </button>
              ))}
            </div>

            {/* Products */}
            <div className="grid grid-cols-[repeat(auto-fit,minmax(158px,1fr))] gap-3 p-4">
              {products.map((prod: Product) => (
                <Link
                  key={prod.id}
                  href={`/shop/${prod.id}`}
                  prefetch={true}
                  className="cursor-pointer flex flex-col gap-3 pb-3 hover:opacity-90 transition"
                >
                  <div
                    className="w-full bg-center bg-no-repeat aspect-[3/4] bg-cover rounded-xl"
                    style={{ backgroundImage: `url("/${prod.image}")` }}
                  />
                  <div>
                    <p className="text-base font-medium text-[#5d8975]">{prod.name}</p>
                    <p className="text-sm text-[#5d8975]">${prod.price.toFixed(2)}</p>
                  </div>
                </Link>
              ))}
            </div>

            {/* Pagination */}
            <div className="flex items-center justify-center p-4 gap-2 text-[#5d8975]">
              <button
                onClick={() => updateQuery({ page: Math.max(currentPage - 1, 1) })}
                disabled={currentPage === 1}
              >
                <HiChevronLeft size={18} />
              </button>
              {Array.from({ length: totalPages }, (_, i) => (
                <button
                  key={i + 1}
                  onClick={() => updateQuery({ page: i + 1 })}
                  className={`text-sm flex size-10 items-center justify-center rounded-full ${
                    currentPage === i + 1 ? 'font-bold bg-[#eaf1ed]' : 'font-normal'
                  }`}
                >
                  {i + 1}
                </button>
              ))}
              <button
                onClick={() => updateQuery({ page: Math.min(currentPage + 1, totalPages) })}
                disabled={currentPage === totalPages}
              >
                <HiChevronRight size={18} />
              </button>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopClient;
