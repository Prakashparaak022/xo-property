"use client";
import Logo from "@/components/Common/Logo";
import Link from "next/link";
import { useState } from "react";

export default function HeaderStyle2() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Sales", href: "/sales" },
    { name: "Off Plan", href: "/offplan" },
    { name: "Finance", href: "/financing-property" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header
      className={`static top-0 w-full z-50 transition-all duration-300 bg-white shadow-sm`}>
      <div className="mx-auto flex items-center justify-between px-6 py-6">
        {/* Logo */}
        <Link href="/">
          <Logo />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-gray-700 hover:text-black">
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Right Side (WhatsApp) */}
        <div className="hidden md:flex items-center space-x-2">
          {/* WhatsApp Icon */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            className={`w-6 h-6 text-black`}
            viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M16.71 13.19c-.24-.12-1.42-.7-1.64-.78-.22-.08-.38-.12-.54.12-.16.24-.62.78-.76.94-.14.16-.28.18-.52.06-.24-.12-1.02-.38-1.94-1.18-.72-.64-1.2-1.42-1.34-1.66-.14-.24-.02-.38.1-.5.1-.1.24-.28.36-.42.12-.14.16-.24.24-.4.08-.16.04-.3-.02-.42-.06-.12-.54-1.3-.74-1.78-.2-.48-.4-.42-.54-.42-.14 0-.3 0-.46 0-.16 0-.42.06-.64.3-.22.24-.84.82-.84 2s.86 2.32.98 2.48c.12.16 1.68 2.56 4.08 3.58.57.24 1.02.38 1.36.48.57.18 1.08.16 1.48.1.46-.06 1.42-.58 1.62-1.14.2-.56.2-1.04.14-1.14-.06-.1-.22-.16-.46-.28z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 12c0 4.97-4.03 9-9 9a8.97 8.97 0 0 1-4.44-1.19L3 21l1.23-4.57A9 9 0 1 1 21 12z"
            />
          </svg>
          {/* Dynamic Text Color */}
          <span
            className={`text-gray-700 hover:text-black transition duration-300`}>
            WhatsApp
          </span>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-700 text-2xl"
          onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? "✖" : "☰"}
        </button>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <nav className="flex flex-col space-y-4 px-6 py-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`text-gray-700 hover:text-black transition duration-300`}
                onClick={() => setIsOpen(false)}>
                {link.name}
              </Link>
            ))}
            <div className="flex items-center space-x-2 pt-2">
              {/* WhatsApp Icon again for mobile */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                className={`w-6 h-6 text-black duration-300`}
                viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M16.71 13.19c-.24-.12-1.42-.7-1.64-.78-.22-.08-.38-.12-.54.12-.16.24-.62.78-.76.94-.14.16-.28.18-.52.06-.24-.12-1.02-.38-1.94-1.18-.72-.64-1.2-1.42-1.34-1.66-.14-.24-.02-.38.1-.5.1-.1.24-.28.36-.42.12-.14.16-.24.24-.4.08-.16.04-.3-.02-.42-.06-.12-.54-1.3-.74-1.78-.2-.48-.4-.42-.54-.42-.14 0-.3 0-.46 0-.16 0-.42.06-.64.3-.22.24-.84.82-.84 2s.86 2.32.98 2.48c.12.16 1.68 2.56 4.08 3.58.57.24 1.02.38 1.36.48.57.18 1.08.16 1.48.1.46-.06 1.42-.58 1.62-1.14.2-.56.2-1.04.14-1.14-.06-.1-.22-.16-.46-.28z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 12c0 4.97-4.03 9-9 9a8.97 8.97 0 0 1-4.44-1.19L3 21l1.23-4.57A9 9 0 1 1 21 12z"
                />
              </svg>
              <span
                className={`text-gray-700 hover:text-black transition duration-300`}>
                WhatsApp
              </span>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
