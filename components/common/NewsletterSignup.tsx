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
    <section className="px-4 sm:px-8 md:px-20 lg:px-40 py-10 sm:py-14 md:py-20">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col justify-center gap-6 sm:gap-8"
      >
        {/* Title & Description */}
        <div className="flex flex-col gap-2 text-center max-w-[720px] mx-auto">
          <h1 className="text-[#0d1c15] text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight tracking-tight sm:tracking-normal">
            Stay Updated
          </h1>
          <p className="text-[#0d1c15] text-sm sm:text-base md:text-lg font-normal leading-relaxed">
            Sign up for our newsletter to receive exclusive offers and the latest news.
          </p>
        </div>

        {/* Input & Button */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mt-4">
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full sm:flex-1 h-12 sm:h-14 px-4 rounded-l-xl rounded-r-xl sm:rounded-r-none text-[#0d1c15] text-sm sm:text-base font-normal placeholder:text-[#4b9a77] bg-[#e7f3ee] focus:outline-none focus:ring-0 border-none"
          />
          <button
            type="submit"
            className="w-full sm:w-auto h-12 sm:h-14 px-6 bg-[#10de85] text-[#0d1c15] text-sm sm:text-base font-bold rounded-xl sm:rounded-r-xl sm:rounded-l-none hover:shadow-md transition"
          >
            Subscribe
          </button>
        </div>
      </form>
    </section>
  )
}
