import React from 'react';
import Image from 'next/image';

const SaleSection: React.FC = () => {
  return (
    <div className="px-4 md:px-40 flex justify-center py-5">
      <div className="layout-content-container flex flex-col max-w-[960px] w-full">
        <div className="@container">
          <div className="@[480px]:p-4">
            <div className="relative flex min-h-[480px] flex-col gap-6 @[480px]:gap-8 @[480px]:rounded-xl items-center justify-center p-4 overflow-hidden bg-center bg-no-repeat bg-cover">
              {/* Background image as optimized <Image> */}
              <Image
                src="/images/sale-banner.png"
                alt="Summer Sale Background"
                fill
                priority
                className="object-cover z-0"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-black/10 to-black/40 z-10 rounded-xl" />
              
              {/* Content */}
              <div className="flex flex-col gap-2 text-center z-20">
                <h1 className="text-white text-4xl font-black leading-tight tracking-[-0.033em] @[480px]:text-5xl">
                  Huge Summer Sale
                </h1>
                <h2 className="text-white text-sm font-normal leading-normal @[480px]:text-base">
                  Up to 50% off on selected items. Limited time offer!
                </h2>
              </div>

              {/* Button */}
              <button className="z-20 flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 px-4 @[480px]:h-12 @[480px]:px-5 bg-[#10de85] text-[#0d1c15] text-sm font-bold tracking-[0.015em] @[480px]:text-base">
                <span className="truncate">Shop Now</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SaleSection;
