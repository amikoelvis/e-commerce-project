'use client'

import { useState } from 'react'

export default function NewsletterSignup() {
  const [email, setEmail] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Subscribed email:', email)
    // TODO: send email to backend or service like Mailchimp
  }

  return (
    <div className="@container">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col justify-end gap-6 px-4 py-10 @[480px]:gap-8 @[480px]:px-10 @[480px]:py-20"
      >
        {/* Title & Description */}
        <div className="flex flex-col gap-2 text-center">
          <h1 className="text-[#0d1c15] tracking-light text-[32px] font-bold leading-tight @[480px]:text-4xl @[480px]:font-black @[480px]:leading-tight @[480px]:tracking-[-0.033em] max-w-[720px] mx-auto">
            Stay Updated
          </h1>
          <p className="text-[#0d1c15] text-base font-normal leading-normal max-w-[720px] mx-auto">
            Sign up for our newsletter to receive exclusive offers and the latest news.
          </p>
        </div>

        {/* Input & Button */}
        <div className="flex flex-1 justify-center">
          <label className="flex flex-col min-w-40 h-14 max-w-[480px] flex-1 @[480px]:h-16">
            <div className="flex w-full flex-1 items-stretch rounded-xl h-full">
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-[#0d1c15] focus:outline-0 focus:ring-0 border-none bg-[#e7f3ee] h-full placeholder:text-[#4b9b78] px-4 rounded-r-none border-r-0 pr-2 text-sm font-normal leading-normal @[480px]:text-base @[480px]:font-normal @[480px]:leading-normal"
              />
              <div className="flex items-center justify-center rounded-r-xl border-l-0 border-none bg-[#e7f3ee] pr-2">
                <button
                  type="submit"
                  className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 px-4 @[480px]:h-12 @[480px]:px-5 bg-[#10de85] text-[#0d1c15] text-sm font-bold leading-normal tracking-[0.015em] @[480px]:text-base @[480px]:font-bold @[480px]:leading-normal @[480px]:tracking-[0.015em]"
                >
                  <span className="truncate">Subscribe</span>
                </button>
              </div>
            </div>
          </label>
        </div>
      </form>
    </div>
  )
}
