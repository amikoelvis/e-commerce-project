'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function HeroSection() {
  return (
    <section className="px-4 sm:px-8 md:px-20 lg:px-40 flex flex-1 justify-center py-6 sm:py-10">
      <div className="layout-content-container flex flex-col w-full max-w-[1200px]">
        <div className="@container">
          <div className="p-2 sm:p-4">
            <div className="relative flex min-h-[320px] sm:min-h-[400px] md:min-h-[480px] lg:min-h-[560px] flex-col gap-4 sm:gap-6 md:gap-8 rounded-lg sm:rounded-xl items-start justify-end px-3 sm:px-6 md:px-10 pb-8 sm:pb-10 overflow-hidden">
              {/* Background Image */}
              <Image
                src="/images/hero-image.png"
                alt="Seasonal Collection Background"
                fill
                className="object-cover object-center z-0"
                priority
              />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-b from-[rgba(0,0,0,0.2)] to-[rgba(0,0,0,0.6)] z-10" />

              {/* Text and CTA */}
              <div className="relative z-20 flex flex-col gap-2 text-left max-w-lg">
                <h1 className="text-white text-2xl sm:text-3xl md:text-5xl font-black leading-tight tracking-tight">
                  Discover the Latest Seasonal Collection
                </h1>
                <h2 className="text-white text-sm sm:text-base md:text-lg font-normal leading-snug">
                  Explore our curated selection of stylish apparel and
                  accessories for every occasion.
                </h2>
              </div>

              {/* CTA Button */}
              <Link href="/shop" className="relative z-20 mt-4">
                <button className="flex min-w-[100px] sm:min-w-[120px] cursor-pointer items-center justify-center rounded-full h-10 sm:h-12 px-4 sm:px-6 bg-[#10de85] text-[#0d1c15] text-sm sm:text-base font-bold tracking-wide shadow-md hover:shadow-lg transition">
                  Shop Now
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
