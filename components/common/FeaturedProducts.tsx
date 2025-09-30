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
    <div className="px-4 md:px-40 flex justify-center">
      <div className="layout-content-container flex flex-col max-w-[960px] w-full">
        <h2 className="text-[#0d1c15] text-[22px] font-bold leading-tight tracking-[-0.015em] px-2 md:px-4 pb-3">
          Featured Products
        </h2>
        <div className="flex md:grid md:grid-cols-3 md:gap-3 overflow-x-auto md:overflow-visible [-ms-scrollbar-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden px-2">
          {featuredProducts.map((product, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-60 md:w-auto flex flex-col gap-4 rounded-lg"
            >
              <div className="aspect-[3/4] w-full relative rounded-xl overflow-hidden">
                <Image
                  src={product.imageSrc}
                  alt={product.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 80vw, (max-width: 1024px) 30vw, 300px"
                  priority={index === 0}
                />
              </div>
              <div>
                <p className="text-[#0d1c15] text-base font-medium leading-normal">
                  {product.title}
                </p>
                <p className="text-[#4b9b78] text-sm font-normal leading-normal">
                  {product.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturedProducts;
