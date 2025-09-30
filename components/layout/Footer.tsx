import Link from "next/link";
import { FaFacebookF, FaInstagram, FaXTwitter } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="flex flex-col gap-6 px-4 sm:px-6 md:px-10 lg:px-40 py-10 text-center bg-[#f8fcfa]">
      {/* Footer navigation links */}
      <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
        {[
          { href: '/customer-service', label: 'Customer Service' },
          { href: '/privacy-policy', label: 'Privacy Policy' },
          { href: '/store-information', label: 'Store Information' },
          { href: '/faq', label: 'FAQ' },
        ].map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="text-[#4b9b78] text-sm sm:text-base font-normal leading-normal min-w-[100px] hover:underline"
          >
            {link.label}
          </Link>
        ))}
      </div>

      {/* Social media links */}
      <div className="flex flex-wrap justify-center gap-4 mt-4">
        <Link href="/x" aria-label="X / Twitter" className="text-[#4b9b78] hover:text-[#10de85] transition">
          <FaXTwitter size={24} />
        </Link>
        <Link href="/instagram" aria-label="Instagram" className="text-[#4b9b78] hover:text-[#10de85] transition">
          <FaInstagram size={24} />
        </Link>
        <Link href="/facebook" aria-label="Facebook" className="text-[#4b9b78] hover:text-[#10de85] transition">
          <FaFacebookF size={24} />
        </Link>
      </div>

      {/* Copyright */}
      <p className="text-[#4b9b78] text-sm sm:text-base font-normal leading-normal mt-4">
        &copy; {new Date().getFullYear()} Garb Stores. All rights reserved.
      </p>
    </footer>
  );
}
