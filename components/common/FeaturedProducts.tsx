import { FeaturedProduct } from '@/interfaces';
import Image from 'next/image';
import React from 'react';

const featuredProducts: FeaturedProduct[] = [
  {
    title: 'Top-Rated Dress',
    description: 'Our best-selling dress is a must-have.',
    imageSrc: '/images/featured/dress.png',
    alt: 'Top-rated dress',
  },
  {
    title: 'Most Popular Shirt',
    description: 'This shirt is a customer favorite.',
    imageSrc: '/images/featured/shirt.png',
    alt: 'Most popular shirt',
  },
  {
    title: 'Customer Favorite Accessories',
    description: 'Accessorize with our top-rated items.',
    imageSrc: '/images/featured/accessories.png',
    alt: 'Customer favorite accessories',
  },
];

const FeaturedProducts: React.FC = () => {
  return (
    <section className="px-4 md:px-40 flex justify-center">
      <div className="layout-content-container flex flex-col max-w-[960px] w-full">
        {/* Title */}
        <h2 className="text-[#0d1c15] text-xl md:text-2xl font-bold leading-tight tracking-[-0.015em] px-2 md:px-4 pb-3">
          Featured Products
        </h2>

        {/* Products container */}
        <div className="flex gap-4 md:grid md:grid-cols-3 md:gap-6 overflow-x-auto md:overflow-visible [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden px-2">
          {featuredProducts.map((product, index) => (
            <article
              key={index}
              className="flex-shrink-0 w-48 sm:w-56 md:w-auto flex flex-col gap-3 rounded-lg"
            >
              {/* Image wrapper */}
              <div className="aspect-[3/4] w-full relative rounded-xl overflow-hidden shadow-sm">
                <Image
                  src={product.imageSrc}
                  alt={product.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 70vw, (max-width: 1024px) 30vw, 300px"
                  priority={index === 0}
                />
              </div>

              {/* Text */}
              <div>
                <p className="text-[#0d1c15] text-sm sm:text-base font-medium leading-snug">
                  {product.title}
                </p>
                <p className="text-[#4b9b78] text-xs sm:text-sm font-normal leading-snug">
                  {product.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
