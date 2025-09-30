'use client'

import Image from 'next/image'

export default function CustomerReviews() {
  return (
    <div className="px-4 sm:px-6 lg:px-12 xl:px-40 flex justify-center">
      <div className="layout-content-container flex flex-col max-w-[960px] w-full">
        <h2 className="text-[#0d1c15] text-xl sm:text-2xl font-bold leading-tight tracking-[-0.015em] px-2 sm:px-4 pb-3">
          Customer Reviews
        </h2>
        <div className="flex flex-col gap-6 sm:gap-8 overflow-x-hidden p-2 sm:p-4">
          {/* Review 1 */}
          <Review
            avatar="/avatars/sarah.png"
            name="Sarah Kim"
            date="July 15, 2024"
            stars={5}
            text="I absolutely love the dress I bought from Garb Stores! The quality is amazing and it fits perfectly."
          />

          {/* Review 2 */}
          <Review
            avatar="/avatars/james.png"
            name="James Smith"
            date="June 22, 2024"
            stars={4}
            text="Great customer service and fast shipping. The shoes I ordered are super comfortable."
          />

          {/* Review 3 */}
          <Review
            avatar="/avatars/amina.png"
            name="Amina Ali"
            date="May 30, 2024"
            stars={5}
            text="Beautiful packaging and lovely handwritten note. The top I bought is exactly as described."
          />
        </div>
      </div>
    </div>
  )
}

function Review({
  avatar,
  name,
  date,
  stars,
  text,
}: {
  avatar: string
  name: string
  date: string
  stars: number
  text: string
}) {
  return (
    <div className="flex flex-col gap-3 bg-[#f8fcfa] rounded-lg p-4 shadow-sm">
      <div className="flex items-center gap-3">
        <div className="relative size-10 rounded-full overflow-hidden">
          <Image
            src={avatar}
            alt={name}
            fill
            className="object-cover"
            sizes="40px"
          />
        </div>
        <div className="flex-1">
          <p className="text-[#0d1c15] text-sm sm:text-base font-medium leading-normal">
            {name}
          </p>
          <p className="text-[#4b9b78] text-xs sm:text-sm font-normal leading-normal">
            {date}
          </p>
        </div>
      </div>
      <div className="flex gap-1">
        {[...Array(5)].map((_, i) => (
          <Star key={i} filled={i < stars} />
        ))}
      </div>
      <p className="text-[#0d1c15] text-sm sm:text-base font-normal leading-normal">
        {text}
      </p>
    </div>
  )
}

function Star({ filled }: { filled: boolean }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill={filled ? '#facc15' : 'none'}
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="#facc15"
      className="size-4 sm:size-5"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M11.48 3.499c.26-.79 1.38-.79 1.64 0l1.6 4.864a.75.75 0 00.712.517h5.107c.832 0 1.178 1.064.505 1.56l-4.134 3.005a.75.75 0 00-.272.84l1.6 4.864c.26.79-.648 1.447-1.32.95l-4.134-3.005a.75.75 0 00-.882 0l-4.134 3.005c-.672.497-1.58-.16-1.32-.95l1.6-4.864a.75.75 0 00-.272-.84l-4.134-3.005c-.673-.496-.327-1.56.505-1.56H9.17a.75.75 0 00.712-.517l1.6-4.864z"
      />
    </svg>
  )
}
