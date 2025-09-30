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
    <section className="w-full px-4 sm:px-8 lg:px-16 py-8">
      <div className="max-w-6xl mx-auto flex flex-col gap-6">
        <h2 className="text-[#0d1c15] text-xl sm:text-2xl font-bold leading-tight tracking-[-0.015em]">
          Shop by Category
        </h2>

        {/* Mobile: stacked, Tablet+: grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category, index) => (
            <Link
              key={category.slug}
              href={`/shop?category=${category.slug}`}
              className="flex flex-col gap-3 rounded-lg overflow-hidden hover:shadow-md transition-shadow duration-200"
            >
              <div className="w-full aspect-[3/4] relative rounded-xl overflow-hidden">
                <Image
                  src={category.imageSrc}
                  alt={category.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  priority={index === 0}
                />
              </div>
              <div className="px-1">
                <p className="text-[#0d1c15] text-base font-semibold">
                  {category.title}
                </p>
                <p className="text-[#4b9b78] text-sm">{category.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategorySection;
