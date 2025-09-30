'use client';

import Image from 'next/image';

export default function AboutPage() {
  return (
    <div
      className="relative flex size-full min-h-screen flex-col bg-[#f8fcfa] group/design-root overflow-x-hidden"
      style={{ fontFamily: '"Plus Jakarta Sans", "Noto Sans", sans-serif' }}
    >
      <div className="layout-container flex h-full grow flex-col">
        <div className="px-40 flex flex-1 justify-center py-5">
          <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
            <div className="flex flex-wrap justify-between gap-3 p-4">
              <p className="text-[#0d1b15] tracking-light text-[32px] font-bold leading-tight min-w-72">
                About Garb Stores
              </p>
            </div>

            <h2 className="text-[#0d1b15] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">
              Our Story
            </h2>
            <p className="text-[#0d1b15] text-base font-normal leading-normal pb-3 pt-1 px-4">
              Garb Stores was founded in 2010 by Amelia and Ethan, two fashion enthusiasts with a vision to bring stylish and sustainable clothing to the local community. Starting as a small boutique, we&apos;ve grown into a beloved brand known for our curated collections and commitment to quality.
            </p>

            <div className="flex w-full grow bg-[#f8fcfa] @container p-4">
              <div className="w-full gap-1 overflow-hidden bg-[#f8fcfa] @[480px]:gap-2 rounded-xl flex">
                <div className="w-full aspect-[3/2] relative rounded-xl overflow-hidden">
                  <Image
                    src="/images/about/store.png"
                    alt="Garb Store"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              </div>
            </div>

            <h2 className="text-[#0d1b15] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">
              Our Mission
            </h2>
            <p className="text-[#0d1b15] text-base font-normal leading-normal pb-3 pt-1 px-4">
              At Garb Stores, our mission is to provide fashionable and eco-friendly clothing options that empower individuals to express their unique style while supporting sustainable practices. We believe in ethical sourcing, quality craftsmanship, and creating a positive impact on the environment.
            </p>

            <h2 className="text-[#0d1b15] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">
              Meet the Founders
            </h2>
            <div className="grid grid-cols-[repeat(auto-fit,minmax(158px,1fr))] gap-3 p-4">
              {/* Amelia */}
              <div className="flex flex-col gap-3 text-center pb-3">
                <div className="px-4">
                  <div className="w-full aspect-square relative rounded-full overflow-hidden">
                    <Image
                      src="/images/about/amelia.png"
                      alt="Amelia"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
                <div>
                  <p className="text-[#0d1b15] text-base font-medium leading-normal">Amelia</p>
                  <p className="text-[#4c9a77] text-sm font-normal leading-normal">Co-founder &amp; Designer</p>
                </div>
              </div>

              {/* Ethan */}
              <div className="flex flex-col gap-3 text-center pb-3">
                <div className="px-4">
                  <div className="w-full aspect-square relative rounded-full overflow-hidden">
                    <Image
                      src="/images/about/ethan.png"
                      alt="Ethan"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
                <div>
                  <p className="text-[#0d1b15] text-base font-medium leading-normal">Ethan</p>
                  <p className="text-[#4c9a77] text-sm font-normal leading-normal">Co-founder &amp; CEO</p>
                </div>
              </div>
            </div>

            <h2 className="text-[#0d1b15] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">
              Sustainability
            </h2>
            <p className="text-[#0d1b15] text-base font-normal leading-normal pb-3 pt-1 px-4">
              We are committed to sustainability by using eco-friendly materials, reducing waste, and partnering with ethical suppliers. Our goal is to minimize our environmental footprint and promote responsible fashion consumption.
            </p>

            <h2 className="text-[#0d1b15] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">
              Quality
            </h2>
            <p className="text-[#0d1b15] text-base font-normal leading-normal pb-3 pt-1 px-4">
              Quality is at the heart of everything we do. From design to production, we ensure that every piece of clothing meets our high standards for durability, comfort, and style. We want our customers to feel confident and satisfied with their purchases.
            </p>

            <h2 className="text-[#0d1b15] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">
              Community
            </h2>
            <p className="text-[#0d1b15] text-base font-normal leading-normal pb-3 pt-1 px-4">
              We love being a part of the local community and actively participate in local events and initiatives. We believe in supporting local artisans and fostering a sense of belonging among our customers and neighbors.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
