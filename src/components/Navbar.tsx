"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { DUMMY } from "../constants/images";
import Image from "next/image";
import { Button } from "./Button";

export default function Navbar() {
  const [isSticky, setIsSticky] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 500) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Close mobile menu when sticky state changes (switching between navbars)
  useEffect(() => {
    setIsOpen(false);
  }, [isSticky]);

  const navItems = [
    { name: "About Us", href: "/about" },
    { name: "Features", href: "/features" },
    { name: "Pricing", href: "/pricing" },
    { name: "Article", href: "/article" },
  ];

  const NavbarTrack = () => (
    <nav className="w-full h-18 flex items-center px-4 pl-6 py-3 self-stretch bg-linear-to-r from-[#0000000a] to-[#feb4b42e] backdrop-blur-lg border-solid border-[0.5px] border-white/60 shadow-custom">
      <button
        className="md:hidden text-white mr-4 flex items-center justify-center w-8 h-8 shrink-0"
        onClick={() => setIsOpen(!isOpen)}
        aria-label={isOpen ? "Close menu" : "Open menu"}
        aria-expanded={isOpen}
      >
        {isOpen ? (
          /* Close (✕) icon */
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="22"
            height="22"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        ) : (
          /* Hamburger (☰) icon */
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="22"
            height="22"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="3" y1="6" x2="21" y2="6" />
            <line x1="3" y1="12" x2="21" y2="12" />
            <line x1="3" y1="18" x2="21" y2="18" />
          </svg>
        )}
      </button>

      <Link href="/" className="flex items-center">
        <Image
          src={DUMMY.Logo3}
          alt="Logo"
          height={20}
          className="brightness-0 invert"
        />
      </Link>

      {/* 3. Desktop Navigation Links (Pushed away from logo via ml-auto) */}
      <div className="hidden md:flex space-x-6 items-center ml-8 mr-auto">
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="text-white hover:text-gray-300 text-base font-normal"
          >
            {item.name}
          </Link>
        ))}
      </div>

      <Button variant="primary" size="medium" className="bg-white ml-auto md:ml-0">
        Request Demo
      </Button>
    </nav>
  );

  return (
    <div className="w-full relative">
      <div
        className={
          isSticky
            ? "opacity-0 pointer-events-none"
            : "opacity-100 transition-opacity duration-300"
        }
      >
        <NavbarTrack />
      </div>

      <div
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 transform ${isSticky ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0 pointer-events-none"}`}
      >
        <div className="backdrop-blur-md shadow-lg [&>nav]:bg-none! [&>nav]:bg-linear-to-r! [&>nav]:from-gray-100! [&>nav]:to-gray-200! [&>nav]:border-black/10! [&>nav]:shadow-md! [&>nav]:backdrop-blur-[0px] [&_img]:brightness-100! [&_img]:invert-0! [&_a]:text-[#1a1a1a]! [&_Button]:bg-[#fb4a24]! [&_Button]:text-white!">
          <NavbarTrack />
        </div>
      </div>

      {/* 5. Mobile Dropdown Menu (Renders directly underneath the navbar track) */}
      {isOpen && (
        <div
          className={`md:hidden w-full bg-[#feb4b4e2] backdrop-blur-md p-4 space-y-3 border-b border-white/20 z-40 ${
            isSticky
              ? "fixed top-[72px] left-0"
              : "absolute top-16 left-0"
          }`}
        >
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="block text-white font-medium"
              onClick={() => setIsOpen(false)}
            >
              {item.name}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
