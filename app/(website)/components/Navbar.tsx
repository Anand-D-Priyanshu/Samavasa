"use client";
import React, { useState, useEffect, useRef } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <nav className="flex h-14 w-full items-center justify-between px-10 lg:px-44">
      <Link
        href="/"
        className="text-2xl font-semibold text-[#9bd3e5] lg:text-xl"
      >
        HMS
      </Link>

      {/* Desktop Menu */}
      <ul className="hidden w-72 justify-between lg:flex">
        {navItems.map((item) => (
          <li key={item.label}>
            <Link
              href={item.href}
              className={` hover:font-medium hover:text-[#9bd3e5] transition-all duration-300 ease-in-out ${
                pathname === item.href ? "text-[#9bd3e5] font-medium" : ""
              }`}
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>

      {/* Sign In Link */}
      <Link
        href="/not-found"
        className="hidden rounded-md py-1 border-2 border-[#80c3d9] bg-[#b0dae8] px-3 text-white hover:bg-[#9bd3e5] lg:flex"
      >
        Sign In
      </Link>

      {/* Mobile Menu */}
      <div className="lg:hidden" ref={menuRef}>
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="text-[#80c3d9] focus:outline-none transition-transform duration-300 ease-in-out"
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            <AiOutlineClose size={28} className="rotate-180" />
          ) : (
            <AiOutlineMenu size={28} className="rotate-0" />
          )}
        </button>

        <div
          className={`absolute right-10 top-14 w-32 text-center bg-white border border-gray-200 rounded-lg shadow-lg z-10 transition-all duration-300 ease-in-out ${
            isMenuOpen
              ? "opacity-100 translate-y-0 visible"
              : "opacity-0 -translate-y-2 invisible"
          }`}
        >
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className={`block px-4 py-2 transition-colors duration-200 hover:bg-[#b0dae8] hover:text-white ${
                pathname === item.href ? "bg-[#b0dae8] text-white" : ""
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
