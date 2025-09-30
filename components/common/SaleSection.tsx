import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const SaleSection: React.FC = () => {
  return (
    <section className="px-4 sm:px-8 md:px-20 lg:px-40 py-10 sm:py-14 md:py-20">
      <div className="layout-content-container flex flex-col max-w-[960px] w-full mx-auto">
        <div className="relative flex flex-col gap-6 sm:gap-8 items-center justify-center p-4 overflow-hidden rounded-xl min-h-[360px] sm:min-h-[480px]">
          {/* Background image */}
          <Image
            src="/images/sale-banner.png"
            alt="Summer Sale Background"
            fill
            priority
            className="object-cover z-0 rounded-xl"
          />
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/10 to-black/40 z-10 rounded-xl" />

          {/* Text content */}
          <div className="flex flex-col gap-2 text-center z-20">
            <h1 className="text-white text-3xl sm:text-4xl md:text-5xl font-black leading-tight tracking-tight sm:tracking-[-0.033em]">
              Huge Summer Sale
            </h1>
            <h2 className="text-white text-sm sm:text-base md:text-lg font-normal leading-relaxed">
              Up to 50% off on selected items. Limited time offer!
            </h2>
          </div>

          {/* CTA Button */}
          <Link href="/shop">
            <button className="mt-4 sm:mt-6 z-20 flex w-full sm:w-auto min-w-[120px] max-w-[480px] items-center justify-center h-10 sm:h-12 px-4 sm:px-6 bg-[#10de85] text-[#0d1c15] text-sm sm:text-base font-bold rounded-full hover:shadow-md transition">
              Shop Now
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default SaleSection;
