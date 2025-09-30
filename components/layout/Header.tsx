'use client';

import Link from "next/link";
import {
  ShoppingCartIcon,
  UserIcon,
  HeartIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/24/outline";
import { useState } from "react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="flex flex-col sm:flex-row sm:items-center sm:justify-between px-4 sm:px-10 py-3 border-b border-solid border-b-[#e7f3ee] bg-white">
      {/* Logo + Nav */}
      <div className="flex items-center justify-between w-full sm:w-auto">
        <div className="flex items-center gap-3 text-[#0d1c15]">
          <div className="w-10 h-10">
            {/* SVG Logo */}
            <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M13.8261 17.4264C16.7203 18.1174 20.2244 18.5217 24 18.5217C27.7756 18.5217 31.2797 18.1174 34.1739 17.4264C36.9144 16.7722 39.9967 15.2331 41.3563 14.1648L24.8486 40.6391C24.4571 41.267 23.5429 41.267 23.1514 40.6391L6.64374 14.1648C8.00331 15.2331 11.0856 16.7722 13.8261 17.4264Z"
                fill="currentColor"
              />
            </svg>
          </div>
          <h2 className="text-[#0d1c15] text-lg font-bold leading-tight tracking-[-0.015em]">
            Garb Stores
          </h2>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="sm:hidden flex items-center justify-center p-2 text-[#4b9b78]"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {menuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

     {/* Navigation */}
<nav
  className={`flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-8 mt-3 sm:mt-0 ${
    menuOpen ? "flex" : "hidden sm:flex"
  }`}
>
  {[
    { href: "/", label: "Home" },
    { href: "/shop", label: "Shop" },
    { href: "/contact", label: "Contact" },
    { href: "/about", label: "About" },
  ].map((link, idx) => (
    <Link
      key={link.href}
      href={link.href}
      className={`text-[#0d1c15] text-sm sm:text-base font-medium leading-normal hover:text-[#10de85] transition ${
        idx === 0 ? "sm:ml-6" : ""
      }`} // add spacing only to the first link
    >
      {link.label}
    </Link>
  ))}
</nav>

      {/* Search + Icons */}
      <div className="flex flex-1 justify-end gap-2 mt-3 sm:mt-0 flex-wrap sm:flex-nowrap">
        {/* Search */}
        <div className="flex w-full sm:w-auto items-center rounded-xl bg-[#e7f3ee] px-2 sm:px-3 h-10 sm:h-10 flex-1 sm:flex-none">
          <MagnifyingGlassIcon className="h-5 w-5 text-[#4b9b78]" />
          <input
            placeholder="Search"
            className="ml-2 w-full bg-transparent focus:outline-none placeholder:text-[#4b9b78] text-sm sm:text-base"
          />
        </div>

        {/* Action Icons */}
        <div className="flex gap-2">
          <Link href="/auth/login">
            <button className="flex items-center justify-center h-10 w-10 rounded-full bg-[#e7f3ee] text-[#0d1c15]">
              <UserIcon className="h-5 w-5" />
            </button>
          </Link>
          <Link href="/favorites">
            <button className="flex items-center justify-center h-10 w-10 rounded-full bg-[#e7f3ee] text-[#0d1c15]">
              <HeartIcon className="h-5 w-5" />
            </button>
          </Link>
          <Link href="/cart">
            <button className="flex items-center justify-center h-10 w-10 rounded-full bg-[#e7f3ee] text-[#0d1c15]">
              <ShoppingCartIcon className="h-5 w-5" />
            </button>
          </Link>
        </div>
      </div>
    </header>
  );
}
