import { CategoryItem } from '@/interfaces';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const categories: CategoryItem[] = [
  {
    title: 'Men',
    description: 'Explore our latest casual wear collection.',
    imageSrc: '/images/categories/men.png',
    alt: 'Men clothing category',
    slug: 'men',
  },
  {
    title: 'Women',
    description: 'Discover our new line of evening dresses.',
    imageSrc: '/images/categories/women.png',
    alt: 'Women clothing category',
    slug: 'women',
  },
  {
    title: 'Accessories',
    description: 'Complete your outfit with our new accessories.',
    imageSrc: '/images/categories/accessories.png',
    alt: 'Accessories category',
    slug: 'accessories',
  },
];

const CategorySection: React.FC = () => {
  return (
    <div className="px-40 flex flex-1 justify-center">
      <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
        <h2 className="text-[#0d1c15] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4">
          Shop by Category
        </h2>
        <div className="flex overflow-y-auto [-ms-scrollbar-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          <div className="flex items-stretch p-4 gap-3">
            {categories.map((category, index) => (
              <Link
                key={category.slug}
                href={`/shop?category=${category.slug}`}
                className="flex h-full flex-1 flex-col gap-4 rounded-lg min-w-60"
              >
                <div className="w-full aspect-[3/4] rounded-xl overflow-hidden relative">
                  <Image
                    src={category.imageSrc}
                    alt={category.alt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 50vw, 33vw"
                    priority={index === 0}
                  />
                </div>
                <div>
                  <p className="text-[#0d1c15] text-base font-medium leading-normal">
                    {category.title}
                  </p>
                  <p className="text-[#4b9b78] text-sm font-normal leading-normal">
                    {category.description}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategorySection;
