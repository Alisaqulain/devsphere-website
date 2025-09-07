"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useEffect } from "react";

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  const navItems = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/services", label: "Services" },
    { href: "/case-studies", label: "Case Studies" },
    { href: "/blog", label: "Blog" },
    { href: "/project", label: "Projects" },
    { href: "/contact", label: "Contact" }
  ];

  return (
    <motion.header
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.45, ease: "easeOut" }}
      className={(scrolled ? "glass shadow-sm " : "bg-transparent ") + "w-full py-4 px-6 flex justify-between items-center sticky top-0 z-50"}
    >
      <Link href="/" className="flex items-center gap-3">
        <Image src="/logo.jpg" alt="DevSphere Solutions logo" width={40} height={40} className="rounded" />
        <motion.span whileHover={{ scale: 1.03 }} className="text-2xl font-bold text-blue-600">DevSphere Solutions</motion.span>
      </Link>

      {/* Desktop nav */}
      <nav className="hidden md:flex gap-6 text-gray-700">
        {navItems.map((item) => {
          const isActive = pathname === item.href;
          return (
            <motion.div key={item.href} whileHover={{ y: -1 }}>
              <Link
                href={item.href}
                className={(isActive ? "text-blue-600 " : "hover:text-blue-600 ") + "group relative px-1"}
              >
                {item.label}
                <span
                  className={"absolute left-0 -bottom-0.5 h-0.5 bg-blue-600 transition-all duration-300 " + (isActive ? "w-full" : "w-0 group-hover:w-full")}
                />
              </Link>
            </motion.div>
          );
        })}
      </nav>

      {/* CTA button on desktop */}
      <div className="hidden md:block">
        <Link href="/contact" className="px-4 py-2 rounded-lg text-white" style={{
          background: "linear-gradient(90deg, #3b82f6, #8b5cf6)",
          boxShadow: "0 10px 25px -10px rgba(59,130,246,0.6)"
        }}>
          <motion.span whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>Get a Quote</motion.span>
        </Link>
      </div>

      {/* Mobile menu toggle */}
      <button
        className="md:hidden p-2 rounded-lg border border-gray-200"
        aria-label={open ? "Close menu" : "Open menu"}
        onClick={() => setOpen((v) => !v)}
      >
        {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
      </button>

      {/* Mobile dropdown */}
      {open && (
        <motion.nav
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="absolute left-0 top-full w-full glass border-t border-gray-200 shadow-md md:hidden"
        >
          <ul className="py-3 px-4 space-y-2">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={(isActive ? "text-blue-600 " : "text-gray-700 ") + "block py-2"}
                    onClick={() => setOpen(false)}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
            <li>
              <Link href="/contact" className="block w-full text-center bg-brand text-white py-2 rounded-lg" onClick={() => setOpen(false)}>
                Get Started
              </Link>
            </li>
          </ul>
        </motion.nav>
      )}
    </motion.header>
  );
}


