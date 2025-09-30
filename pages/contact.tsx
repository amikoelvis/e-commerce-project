'use client'

import React from 'react'
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa'
import { FaInstagram, FaFacebookF, FaXTwitter } from 'react-icons/fa6'
import Link from 'next/link'
import ContactForm from '@/components/common/ContactForm'

const ContactPage: React.FC = () => {
  const handleSubmit = (values: { name: string; email: string; subject: string; message: string }) => {
    console.log('Form Submitted:', values)
  }

  const contactInfo = [
    { label: 'Address', value: '456 Style Avenue, Fashion City, 10001', icon: <FaMapMarkerAlt /> },
    { label: 'Phone', value: '+1 (555) 987-6543', icon: <FaPhoneAlt /> },
    { label: 'Email', value: 'support@garbstores.com', icon: <FaEnvelope /> },
  ]

  const socialLinks = [
    { name: 'Instagram', icon: <FaInstagram />, href: 'https://instagram.com' },
    { name: 'Facebook', icon: <FaFacebookF />, href: 'https://facebook.com' },
    { name: 'X', icon: <FaXTwitter />, href: 'https://x.com' },
  ]

  return (
    <div className="relative flex min-h-screen flex-col bg-[#f8fcfa] overflow-x-hidden">
      <div className="layout-container flex flex-col grow">
        <div className="px-4 md:px-10 lg:px-40 flex flex-col justify-center py-8">
          <div className="layout-content-container flex flex-col max-w-[960px] mx-auto w-full gap-8">

            {/* Heading */}
            <h1 className="text-[#0d1b15] text-3xl md:text-4xl font-bold leading-tight">
              Contact Us
            </h1>

            {/* Form */}
            <ContactForm onSubmit={handleSubmit} />

            {/* Contact Information */}
            <section className="flex flex-col gap-4">
              <h2 className="text-[#0d1b15] text-xl md:text-2xl font-bold leading-tight">
                Our Contact Information
              </h2>
              <p className="text-[#0d1b15] text-base md:text-lg leading-relaxed">
                Visit us at our store or reach out through the following channels:
              </p>

              <div className="flex flex-col gap-3">
                {contactInfo.map(({ label, value, icon }, idx) => (
                  <div key={idx} className="flex items-center gap-4 bg-[#f8fcfa] px-4 py-3 rounded-xl">
                    <div className="text-[#0d1b15] flex items-center justify-center rounded-lg bg-[#e7f3ee] shrink-0 w-12 h-12 text-xl">
                      {icon}
                    </div>
                    <div className="flex flex-col justify-center">
                      <p className="text-[#0d1b15] text-base font-medium leading-normal line-clamp-1">
                        {label}
                      </p>
                      <p className="text-[#4c9a77] text-sm font-normal leading-normal line-clamp-2">
                        {value}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Social Media */}
            <section className="flex flex-col gap-4">
              <h2 className="text-[#0d1b15] text-xl md:text-2xl font-bold leading-tight">
                Follow Us
              </h2>
              <div className="flex flex-wrap gap-4">
                {socialLinks.map(({ name, icon, href }, idx) => (
                  <Link
                    key={idx}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-col items-center gap-2 w-20 text-center"
                  >
                    <div className="rounded-full bg-[#e7f3ee] p-2.5 text-xl">
                      {icon}
                    </div>
                    <p className="text-[#0d1b15] text-sm font-medium">{name}</p>
                  </Link>
                ))}
              </div>
            </section>

          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactPage
