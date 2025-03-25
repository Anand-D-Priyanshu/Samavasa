"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaGithub,
  FaLinkedinIn,
  FaTimes, // Added for the cross icon
} from "react-icons/fa";
import { RiArrowDropDownLine } from "react-icons/ri";

// Type definitions
interface MenuLinkProps {
  children: React.ReactNode;
  href: string;
  className?: string;
}

interface MenuItem {
  title: string;
  links: string[];
}

interface SocialLink {
  name: string;
  href: string;
  icon: React.ComponentType<{ className?: string }>;
}

// Constants
const MENU_ITEMS: MenuItem[] = [
  {
    title: "Services",
    links: ["For Admins", "For Warden", "For Students", "Back to Top"],
  },
  {
    title: "About",
    links: ["Our Story", "Plans", "Team", "Careers"],
  },
  {
    title: "Help",
    links: ["FAQs", "Blogs", "About Us", "Contact Us"],
  },
];

const SOCIAL_LINKS: SocialLink[] = [
  { name: "Facebook", href: "#", icon: FaFacebookF },
  { name: "Instagram", href: "#", icon: FaInstagram },
  { name: "Twitter", href: "#", icon: FaTwitter },
  { name: "GitHub", href: "#", icon: FaGithub },
  { name: "LinkedIn", href: "#", icon: FaLinkedinIn },
];

// Components
const MenuLink: React.FC<MenuLinkProps> = ({
  children,
  href,
  className = "",
}) => (
  <Link
    href={href}
    className={`text-gray-600 hover:text-gray-900 transition-colors duration-200 ${className}`}
  >
    {children}
  </Link>
);

const MobileDropdown: React.FC<MenuItem> = ({ title, links }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const toggleDropdown = () => setIsOpen((prev) => !prev);

  return (
    <div ref={dropdownRef} className="relative w-full">
      <button
        onClick={toggleDropdown}
        className="flex w-full items-center justify-between py-2 px-4 text-gray-700 font-medium bg-white rounded-lg shadow-md hover:bg-gray-100 transition-colors"
      >
        {title}
        <span className="ml-2">
          {isOpen ? (
            <FaTimes className="w-4 h-4 text-gray-600" />
          ) : (
            <RiArrowDropDownLine className="w-6 h-6 text-gray-600" />
          )}
        </span>
      </button>

      {isOpen && (
        <div className="absolute left-0 mt-2 w-full bg-white border border-gray-200 rounded-lg shadow-lg z-10">
          <ul className="py-2">
            {links.map((link, index) => (
              <li key={index}>
                <Link
                  href={`#${link.toLowerCase().replace(/\s+/g, "-")}`}
                  onClick={() => setIsOpen(false)}
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-blue-600 transition-colors"
                >
                  {link}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

const DesktopMenu: React.FC<MenuItem> = ({ title, links }) => (
  <div className="space-y-4">
    <h3 className="text-lg font-semibold text-[#9ECFE0]">{title}</h3>
    <ul className="space-y-3 text-sm">
      {links.map((link, index) => (
        <li key={index}>
          <MenuLink href="#">{link}</MenuLink>
        </li>
      ))}
    </ul>
  </div>
);

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-50 text-gray-700">
      <div className="px-4 sm:px-6 lg:px-20 py-12">
        <div
          style={{ fontFamily: "Lato" }}
          className="border-b border-gray-200 pb-8"
        >
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
            <div className="flex flex-col items-center lg:items-start lg:gap-1">
              <Image
                src="/assets/HB-logo.png"
                alt="Hostelbees Logo"
                width={40}
                height={40}
                className=""
              />
              <p className="text-lg font-medium text-gray-800">
                Stay. Explore. Connect.
              </p>
            </div>
            <div className="flex items-center gap-4 lg:gap-16">
              <p className="lg:text-lg text-sm">Ready to get started?</p>
              <button className="px-6 py-2 bg-[#9ECFE0] text-black rounded-lg transition-colors font-medium">
                Get Started
              </button>
            </div>
          </div>
        </div>
        <div
          style={{ fontFamily: "Lato" }}
          className="pt-8 flex gap-8 px-10 lg:px-0"
        >
          <div className="space-y-4 hidden lg:block">
            <h2 className="text-xl font-semibold text-[#9ECFE0]">Hostelbees</h2>
            <p className="text-md text-gray-600 leading-relaxed pr-20">
              Connecting students with comfortable living spaces. Quality
              hostels, trusted service, and vibrant communities.
            </p>
          </div>
          {/* <div className="hidden lg:grid lg:grid-cols-3 justify-between gap-8 col-span-3"> */}
          <div className="hidden w-full lg:flex lg:pl-20 justify-around ">
            {MENU_ITEMS.map((item, index) => (
              <DesktopMenu key={index} {...item} />
            ))}
          </div>
          <div className="lg:hidden space-y-4 w-full">
            {MENU_ITEMS.map((item, index) => (
              <MobileDropdown key={index} {...item} />
            ))}
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-gray-200">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
            <p className="text-xs text-gray-500">
              © {new Date().getFullYear()} Hostelbees. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <MenuLink href="#" className="text-sm">
                Terms & Conditions
              </MenuLink>
              <MenuLink href="#" className="text-sm">
                Privacy Policy
              </MenuLink>
            </div>
            <ul className="flex items-center gap-5">
              {SOCIAL_LINKS.map((social, index) => (
                <li key={index}>
                  <Link
                    href={social.href}
                    rel="noreferrer"
                    target="_blank"
                    className="text-gray-600 hover:text-blue-600 transition-colors"
                    aria-label={social.name}
                  >
                    <social.icon className="w-5 h-5" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
