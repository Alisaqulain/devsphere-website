import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

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
  Globe
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
            <span className="text-xl sm:text-2xl font-extrabold text-gradient tracking-tight hidden sm:inline-block">
              <Globe className="inline-block h-5 w-5 mr-1.5 text-primary" />
              DevsSphere
            </span>
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

          {/* Desktop CTA Button */}
          <div className="hidden md:block">
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
    </nav>
  );
}