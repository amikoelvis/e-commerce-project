// components/Header.tsx
import Link from "next/link";
import {
  ShoppingCartIcon,
  UserIcon,
  HeartIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/24/outline";

export default function Header() {
  return (
    <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-b-[#e7f3ee] px-10 py-3">
      {/* Logo + Nav */}
      <div className="flex items-center gap-8">
        <div className="flex items-center gap-4 text-[#0d1c15]">
          <div className="size-4">
            {/* SVG Logo */}
            <svg
              viewBox="0 0 48 48"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Your path definitions here */}
              <path
                d="M13.8261 17.4264C16.7203 18.1174 20.2244 18.5217 24 18.5217C27.7756 18.5217 31.2797 18.1174 34.1739 17.4264C36.9144 16.7722 39.9967 15.2331 41.3563 14.1648L24.8486 40.6391C24.4571 41.267 23.5429 41.267 23.1514 40.6391L6.64374 14.1648C8.00331 15.2331 11.0856 16.7722 13.8261 17.4264Z"
                fill="currentColor"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="..." // truncated
                fill="currentColor"
              />
            </svg>
          </div>
          <h2 className="text-[#0d1c15] text-lg font-bold leading-tight tracking-[-0.015em]">
            Garb Stores
          </h2>
        </div>
        <nav className="flex items-center gap-9">
          <Link
            href="/"
            className="text-[#0d1c15] text-sm font-medium leading-normal"
          >
            Home
          </Link>
          <Link
            href="/shop"
            className="text-[#0d1c15] text-sm font-medium leading-normal"
          >
            Shop
          </Link>
          <Link
            href="/contact"
            className="text-[#0d1c15] text-sm font-medium leading-normal"
          >
            Contact
          </Link>
          <Link
            href="/about"
            className="text-[#0d1c15] text-sm font-medium leading-normal"
          >
            About
          </Link>
        </nav>
      </div>

      {/* Search + Actions */}
      <div className="flex flex-1 justify-end gap-8">
        {/* Search */}
        <label className="flex flex-col min-w-40 !h-10 max-w-64">
          <div className="flex w-full flex-1 items-stretch rounded-xl h-full">
            <div className="text-[#4b9b78] flex border-none bg-[#e7f3ee] items-center justify-center pl-4 rounded-l-xl border-r-0">
              <MagnifyingGlassIcon className="h-5 w-5" />
            </div>
            <input
              placeholder="Search"
              className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-[#0d1c15] focus:outline-0 focus:ring-0 border-none bg-[#e7f3ee] h-full placeholder:text-[#4b9b78] px-4 rounded-l-none pl-2 text-base font-normal leading-normal"
            />
          </div>
        </label>

        {/* Icons */}
        <div className="flex gap-2">
          <Link href="/auth/login">
            <button className="flex items-center justify-center h-10 rounded-full bg-[#e7f3ee] text-[#0d1c15] px-2.5">
              <UserIcon className="h-5 w-5" />
            </button>
          </Link>
          <Link href="/favorites">
            <button className="flex items-center justify-center h-10 rounded-full bg-[#e7f3ee] text-[#0d1c15] px-2.5">
              <HeartIcon className="h-5 w-5" />
            </button>
          </Link>
          <Link href="/cart">
            <button className="flex items-center justify-center h-10 rounded-full bg-[#e7f3ee] text-[#0d1c15] px-2.5">
              <ShoppingCartIcon className="h-5 w-5" />
            </button>
          </Link>
        </div>
      </div>
    </header>
  );
}
