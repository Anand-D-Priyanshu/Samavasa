"use client";
import { useState, useEffect, useRef } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [visible, setVisible] = useState(true);
  const lastScrollY = useRef(0);

  const controlNavbar = () => {
    if (window.scrollY > lastScrollY.current) {
      setVisible(false); // Scrolling down
    } else {
      setVisible(true); // Scrolling up
    }
    lastScrollY.current = window.scrollY;
  };

  useEffect(() => {
    window.addEventListener("scroll", controlNavbar);
    return () => {
      window.removeEventListener("scroll", controlNavbar);
    };
  }, []);

  const toggleMenu = () => setIsOpen((prev) => !prev);

  return (
    <nav
      className={`bg-background border-b backdrop-blur-lg sticky top-0 transition-transform duration-300 ${
        visible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <img
            src="https://flowbite.com/docs/images/logo.svg"
            className="h-8"
            alt="Logo"
          />
          <span className="self-center text-2xl font-semibold text-foreground">
            LOGO
          </span>
        </a>
        <div className="flex md:order-2 space-x-3 rtl:space-x-reverse">
          <a href="/auth/signup">
            <button
              type="button"
              className="bg-foreground text-background hover:opacity-90 focus:ring-4 focus:outline-none font-medium rounded-lg text-xl px-2 py-1"
            >
              Get started
            </button>
          </a>
          <button
            onClick={toggleMenu}
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-foreground rounded-lg md:hidden hover:bg-gray-200 dark:hover:bg-gray-800 focus:ring-2 focus:ring-gray-300 dark:focus:ring-gray-600"
            aria-label="Toggle menu"
            aria-expanded={isOpen}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
              aria-hidden="true"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>
        <div
          className={`items-center w-full md:flex md:w-auto md:order-1 ${
            isOpen ? "block" : "hidden"
          }`}
          id="navbar-cta"
        >
          <ul className="flex flex-col text-lg font-semibold p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-background md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0">
            <li>
              <a
                href="/"
                className="block py-2 px-3 md:p-0 text-foreground hover:underline"
                aria-current="page"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="/about"
                className="block py-2 px-3 md:p-0 text-foreground hover:underline"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="/contact"
                className="block py-2 px-3 md:p-0 text-foreground hover:underline"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
