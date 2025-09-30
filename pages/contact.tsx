import React from 'react';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';
import { FaInstagram, FaFacebookF, FaXTwitter } from 'react-icons/fa6';
import Link from 'next/link';
import ContactForm from '@/components/ContactForm';

const ContactPage: React.FC = () => {
  const handleSubmit = (values: { name: string; email: string; subject: string; message: string }) => {
    console.log('Form Submitted:', values);
  };

  return (
    <div className="relative flex size-full min-h-screen flex-col bg-[#f8fcfa] group/design-root overflow-x-hidden">
      <div className="layout-container flex h-full grow flex-col">
        <div className="px-40 flex flex-1 justify-center py-5">
          <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
            {/* Heading */}
            <div className="flex flex-wrap justify-between gap-3 p-4">
              <p className="text-[#0d1b15] tracking-light text-[32px] font-bold leading-tight min-w-72">
                Contact Us
              </p>
            </div>

            {/* Form */}
            <ContactForm onSubmit={handleSubmit} />

            {/* Contact Information */}
            <h3 className="text-[#0d1b15] text-lg font-bold leading-tight tracking-[-0.015em] px-4 pb-2 pt-4">
              Our Contact Information
            </h3>
            <p className="text-[#0d1b15] text-base font-normal leading-normal pb-3 pt-1 px-4">
              Visit us at our store or reach out through the following channels:
            </p>

            {[{ label: 'Address', value: '456 Style Avenue, Fashion City, 10001', icon: <FaMapMarkerAlt /> },
              { label: 'Phone', value: '+1 (555) 987-6543', icon: <FaPhoneAlt /> },
              { label: 'Email', value: 'support@garbstores.com', icon: <FaEnvelope /> }]
              .map(({ label, value, icon }, idx) => (
                <div key={idx} className="flex items-center gap-4 bg-[#f8fcfa] px-4 min-h-[72px] py-2">
                  <div className="text-[#0d1b15] flex items-center justify-center rounded-lg bg-[#e7f3ee] shrink-0 size-12 text-xl">
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

            {/* Socials */}
            <h3 className="text-[#0d1b15] text-lg font-bold leading-tight tracking-[-0.015em] px-4 pb-2 pt-4">
              Follow Us
            </h3>
            <div className="@container">
              <div className="gap-2 px-4 flex flex-wrap justify-start">
                {[{ name: 'Instagram', icon: <FaInstagram />, href: 'https://instagram.com' },
                  { name: 'Facebook', icon: <FaFacebookF />, href: 'https://facebook.com' },
                  { name: 'X', icon: <FaXTwitter />, href: 'https://x.com' }]
                  .map(({ name, icon, href }, idx) => (
                    <Link key={idx} href={href} target="_blank" rel="noopener noreferrer">
                      <div className="flex flex-col items-center gap-2 bg-[#f8fcfa] py-2.5 text-center w-20">
                        <div className="rounded-full bg-[#e7f3ee] p-2.5 text-xl">
                          {icon}
                        </div>
                        <p className="text-[#0d1b15] text-sm font-medium leading-normal">
                          {name}
                        </p>
                      </div>
                    </Link>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
