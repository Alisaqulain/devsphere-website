"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import MagneticButton from "@/components/sections/MagneticButton";

const navItems = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Services", path: "/services" },
  { name: "Projects", path: "/projects" },
  { name: "Case Studies", path: "/case-studies" },
  { name: "Technologies", path: "/technologies" },
  { name: "Blog", path: "/blog" },
  { name: "Contact", path: "/contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  return (
    <header
      className={cn(
        "fixed top-0 inset-x-0 z-50 transition-all duration-500",
        scrolled ? "py-3 glass-card border-b border-primary/20 shadow-lg" : "py-5 bg-transparent"
      )}
    >
      <div className="container-wide flex items-center justify-between">
        <Link href="/" className="flex-shrink-0">
          <Image
            src="/logoupdate.png"
            alt="DevSphere Solutions"
            width={72}
            height={72}
            className="h-12 w-12 sm:h-14 sm:w-14 object-contain"
            priority
          />
        </Link>

        <nav className="hidden xl:flex items-center gap-1">
          {navItems.map((item) => (
            <Link
              key={item.path}
              href={item.path}
              className={cn(
                "px-3 py-2 rounded-xl text-sm font-medium transition-all",
                pathname === item.path
                  ? "text-primary bg-primary/10"
                  : "text-muted-foreground hover:text-foreground hover:bg-white/5"
              )}
            >
              {item.name}
            </Link>
          ))}
        </nav>

        <div className="hidden xl:block">
          <MagneticButton href="/contact" className="!px-6 !py-3 !text-sm">
            Start a Project
          </MagneticButton>
        </div>

        <button
          className="xl:hidden p-2 rounded-xl glass-card border border-primary/20"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="xl:hidden glass-card border-t border-primary/20 mt-3 overflow-hidden"
          >
            <div className="container-wide py-4 space-y-1">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  href={item.path}
                  className={cn(
                    "block px-4 py-3 rounded-xl text-sm font-medium",
                    pathname === item.path ? "text-primary bg-primary/10" : "text-muted-foreground"
                  )}
                >
                  {item.name}
                </Link>
              ))}
              <div className="pt-3">
                <MagneticButton href="/contact" className="w-full !justify-center">
                  Start a Project
                </MagneticButton>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
