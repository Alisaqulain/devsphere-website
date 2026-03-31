import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import {
  Home,
  Users,
  Briefcase,
  FolderOpen,
  BookOpen,
  Code,
  Mail,
  Menu,
  X,
  Globe,
  Instagram,
  MessageCircle,
} from "lucide-react";

const navItems = [
  { name: "Home", icon: Home, path: "/" },
  { name: "About", icon: Users, path: "/about" },
  { name: "Services", icon: Briefcase, path: "/services" },
  { name: "Case Studies", icon: FolderOpen, path: "/cases" },
  { name: "Blog", icon: BookOpen, path: "/blog" },
  { name: "Projects", icon: Code, path: "/projects" },
  { name: "Contact", icon: Mail, path: "/contact" },
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 glass border-b border-primary/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex-shrink-0 flex items-center gap-2 group">
            <motion.img
              src="/logoupdate.png"
              alt="DevsSphere Solutions"
              className="h-10 w-10 sm:h-12 sm:w-12 rounded-full shadow-md bg-transparent object-cover"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              whileHover={{ scale: 1.08, rotate: -2 }}
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => {
              const IconComponent = item.icon;
              return (
                <Link
                  key={item.name}
                  to={item.path}
                  className="flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-primary/10 transition-all duration-200 hover-lift"
                >
                  <IconComponent size={16} />
                  {item.name}
                </Link>
              );
            })}
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-3">
            <Link to="/contact">
              <Button variant="cta" size="lg" className="px-6 py-2.5 font-semibold">
                Start Your Project
              </Button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-foreground"
            >
              {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden glass border-t border-primary/20">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navItems.map((item) => {
              const IconComponent = item.icon;
              return (
                <Link
                  key={item.name}
                  to={item.path}
                  className="flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-primary/10 transition-all duration-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <IconComponent size={18} />
                  {item.name}
                </Link>
              );
            })}
            <div className="pt-2">
              <Link to="/contact">
                <Button variant="cta" size="lg" className="w-full font-semibold">
                  Start Your Project
                </Button>
              </Link>
            </div>
          </div>
        </div>
      )}

      {/* Floating Social Icons - bottom right (away from header) */}
        
    </nav>
  );
}