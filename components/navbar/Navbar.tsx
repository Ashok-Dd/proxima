"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const links = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Gallery", href: "/gallery" },
  { label: "Upcoming Events", href: "/events" },
  { label: "Sponsors", href: "/sponsors" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* NAVBAR */}
      <nav className="fixed top-6 w-full py-2 z-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="bg-white rounded-lg shadow-lg px-6 py-3 flex items-center justify-between">

            {/* Logo */}
            <Link href="/" className="text-xl font-bold text-teal-600">
              The Proxima
            </Link>

            {/* Desktop Menu */}
            <ul className="hidden md:flex items-center gap-6 text-md font-medium text-gray-700">
              {links.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="hover:text-teal-600 transition"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden"
              onClick={() => setOpen(!open)}
            >
              {open ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>
        </div>
      </nav>

      {/* MOBILE MENU */}
      {open && (
        <div className="fixed inset-0 z-40 bg-black/40 md:hidden">
          <div className="bg-white rounded-2xl mx-6 mt-24 p-6 shadow-xl">
            <ul className="flex flex-col gap-4 text-gray-800 font-medium">
              {links.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="hover:text-teal-600"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </>
  );
}
