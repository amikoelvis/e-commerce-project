import Link from "next/link";
import { FaFacebookF, FaInstagram, FaXTwitter } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="flex flex-col gap-6 px-5 py-10 text-center @container">
      {/* Footer navigation links */}
      <div className="flex flex-wrap items-center justify-center gap-6 @[480px]:flex-row @[480px]:justify-around">
        <Link
          href="/customer-service"
          className="text-[#4b9b78] text-base font-normal leading-normal min-w-40"
        >
          Customer Service
        </Link>
        <Link
          href="/privacy-policy"
          className="text-[#4b9b78] text-base font-normal leading-normal min-w-40"
        >
          Privacy Policy
        </Link>
        <Link
          href="/store-information"
          className="text-[#4b9b78] text-base font-normal leading-normal min-w-40"
        >
          Store Information
        </Link>
        <Link
          href="/faq"
          className="text-[#4b9b78] text-base font-normal leading-normal min-w-40"
        >
          FAQ
        </Link>
      </div>

      {/* Social media links */}
      <div className="flex flex-wrap justify-center gap-4">
        <Link href="/x" aria-label="X / Twitter" className="text-[#4b9b78]">
          <FaXTwitter size={24} />
        </Link>
        <Link href="/instagram" aria-label="Instagram" className="text-[#4b9b78]">
          <FaInstagram size={24} />
        </Link>
        <Link href="/facebook" aria-label="Facebook" className="text-[#4b9b78]">
          <FaFacebookF size={24} />
        </Link>
      </div>

      {/* Copyright */}
      <p className="text-[#4b9b78] text-base font-normal leading-normal">
        &copy; {new Date().getFullYear()} Garb Stores. All rights reserved.
      </p>
    </footer>
  );
}
