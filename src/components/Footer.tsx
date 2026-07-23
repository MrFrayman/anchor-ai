"use client";

import { Button } from "@/components/Button";
import Link from "next/link";
import { DUMMY, IMAGES } from "../constants/images";
import Image from "next/image";

export const Footer: React.FC = () => {
  const navItems = [
    { name: "Platform", href: "/about" },
    { name: "Use Cases", href: "/features" },
    { name: "Pricing", href: "/pricing" },
    { name: "Resources", href: "/article" },
    { name: "Company", href: "/contact" },
  ];
  return (
    <section className="relative flex flex-col items-center h-[619px] w-full overflow-hidden bg-[url('../../public/assets/elements/fbg.png')] bg-cover bg-bottom bg-no-repeat">
      <div className="relative flex flex-col items-center h-208.5 w-full overflow-hidden">
        {/* Changed: justify-center → justify-start, added pt-[100px] */}
        <div className="h-141.5 relative z-10 flex flex-col justify-start pt-[100px] w-full text-center max-w-7xl">
          <h1 className="text-white text-[40px] font-medium leading-tight tracking-[-2.5px] mb-4">
            See how AI transforms <br /> enterprise revenue operations
          </h1>
          <p className="text-white text-[16px] font-normal leading-7">
            Helping revenue teams move faster and grow with confidence.
          </p>

          <div className="pt-7 flex justify-center gap-4">
            <Button variant="primary" size="medium">
              Request a Demo
              <span className="ml-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="size-5"
                >
                  <path
                    fillRule="evenodd"
                    d="M3 10a.75.75 0 0 1 .75-.75h10.638L10.23 5.29a.75.75 0 1 1 1.04-1.08l5.5 5.25a.75.75 0 0 1 0 1.08l-5.5 5.25a.75.75 0 1 1-1.04-1.08l4.158-3.96H3.75A.75.75 0 0 1 3 10Z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
            </Button>
          </div>
        </div>
      </div>
      <nav className="w-full h-19 flex items-center px-28 py-3 self-stretch bg-linear-to-r from-[#0000000a] to-[#feb4b42e] border-solid border-t-[0.5px] border-white/30">
        {/* Left: Copyright (fixed width) */}
        <div className="flex items-center shrink-0">
          <span className="flex items-center">
            © 2026 ANCHOR. All Reserved.
          </span>
        </div>

        {/* Center: Navigation Links */}
        <div className="hidden md:flex space-x-6 items-center justify-center flex-1">
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

        {/* Right: Button (fixed width, content right-aligned) */}
        <div className="flex items-center justify-end shrink-0">
          <span className="flex items-center gap-2">
            <Link
              href="/"
              className="flex items-center gap-2 text-[16px] font-normal"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
                />
              </svg>
              <p>info@anchor.ai</p>
            </Link>
          </span>
        </div>
      </nav>
    </section>
  );
};

export default Footer;
