"use client";
import React, { useState } from "react";
import Image from "next/image";
import { Menu, X, } from "lucide-react";
import Link from "next/link";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  // Close menu when clicking a link (mobile only)
  const closeMenu = () => setOpen(false);

  return (
    <nav className="fixed w-full z-20 top-0 start-0 text-white backdrop-blur-lg bg-white/10 border-b border-white/10">
      <div className="flex flex-wrap items-center justify-between mx-auto p-4">

        {/* Logo */}
        <div className="flex items-center">
          <Link href="/home">
          <Image src="/logo.png" alt="Logo" width={40} height={30} />
          </Link>
        </div>

        {/* Right Side */}
        <div className="flex items-center md:order-2">

          {/* Mobile Menu Button */}
          <button
            onClick={() => setOpen(!open)}
            className="inline-flex items-center p-2 w-10 h-10 text-gray-300 md:hidden"
          >
            {open ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`${
            open ? "block" : "hidden"
          } w-full md:flex md:w-auto md:order-1 transition-all duration-300`}
        >
          <ul className="flex flex-col p-4 md:p-0 mt-4 md:flex-row md:space-x-8 md:mt-0 text-lg">

            <li>
              <Link
                href="/home"
                onClick={closeMenu}
                className="block py-2 px-3 md:p-0 hover:text-blue-400"
              >
                Home
              </Link>
            </li>

            <li>
              <Link
                href="/about"
                onClick={closeMenu}
                className="block py-2 px-3 md:p-0 hover:text-blue-400"
              >
                About
              </Link>
            </li>

            <li>
              <Link
                href="/projects"
                onClick={closeMenu}
                className="block py-2 px-3 md:p-0 hover:text-blue-400"
              >
                Projects
              </Link>
            </li>
            <li>
              <Link
                href="/blogs"
                onClick={closeMenu}
                className="block py-2 px-3 md:p-0 hover:text-blue-400"
              >
                Blogs
              </Link>
            </li>

            <li>
              <Link
                href="/services"
                onClick={closeMenu}
                className="block py-2 px-3 md:p-0 hover:text-blue-400"
              >
                Services
              </Link>
            </li>

            <li>
              <Link
                href="/testimonials"
                onClick={closeMenu}
                className="block py-2 px-3 md:p-0 hover:text-blue-400"
              >
                Testimonials
              </Link>
            </li>

            <li>
              <Link
                href="/contacts"
                onClick={closeMenu}
                className="block py-2 px-3 md:p-0 hover:text-blue-400"
              >
                Contacts
              </Link>
            </li>

          </ul>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;
