"use client";

import { motion } from "framer-motion";
import { Instagram, Linkedin } from "lucide-react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="relative bg-gradient-to-b from-black via-primary/5 to-black text-gray-300 pt-16 pb-8">
      {/* Top border glow */}
      <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-primary via-accent to-primary opacity-60" />

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12">
        {/* Brand */}
        <div>
          <h3 className="text-2xl font-bold text-white mb-4">DevSphere Solutions</h3>
          <p className="text-sm leading-relaxed text-gray-400">
            Smart solutions for a smarter world — Web, Mobile, and CRM products tailored for your business.
          </p>
          <div className="flex space-x-4 mt-6">
            <motion.a
              href="https://instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2 }}
              className="w-10 h-10 flex items-center justify-center rounded-full bg-white/5 border border-white/10 hover:border-primary hover:bg-primary/10 transition-colors"
            >
              <Instagram className="w-5 h-5 text-white" />
            </motion.a>
            <motion.a
              href="https://linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2 }}
              className="w-10 h-10 flex items-center justify-center rounded-full bg-white/5 border border-white/10 hover:border-primary hover:bg-primary/10 transition-colors"
            >
              <Linkedin className="w-5 h-5 text-white" />
            </motion.a>
          </div>
        </div>

        {/* Services */}
        <div>
          <h4 className="text-lg font-semibold text-white mb-4">Services</h4>
          <ul className="space-y-3 text-sm">
            <li>
              <Link to="/services" className="hover:text-primary transition">
                Web Development
              </Link>
            </li>
            <li>
              <Link to="/services" className="hover:text-primary transition">
                Mobile Apps
              </Link>
            </li>
            <li>
              <Link to="/services" className="hover:text-primary transition">
                CRM Solutions
              </Link>
            </li>
            <li>
              <Link to="/services" className="hover:text-primary transition">
                Cloud & DevOps
              </Link>
            </li>
          </ul>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-lg font-semibold text-white mb-4">Company</h4>
          <ul className="space-y-3 text-sm">
            <li>
              <Link to="/about" className="hover:text-primary transition">
                About Us
              </Link>
            </li>
            <li>
              <Link to="/cases" className="hover:text-primary transition">
                Case Studies
              </Link>
            </li>
            <li>
              <Link to="/projects" className="hover:text-primary transition">
                Projects
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-primary transition">
                Contact
              </Link>
            </li>
          
            <li>
              <Link to="/ourservices" className="hover:text-primary transition">
                Our Services
              </Link>
            </li>
            <li>
              <Link to="/" className="hover:text-primary transition">
                Home
              </Link>
            </li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h4 className="text-lg font-semibold text-white mb-4">Newsletter</h4>
          <p className="text-sm text-gray-400 mb-4">
            Subscribe to get the latest updates, tips, and insights from DevSphere.
          </p>
          <div className="flex items-center bg-white/5 rounded-lg overflow-hidden border border-white/10">
            <input
              type="email"
              placeholder="Your email"
              className="flex-1 bg-transparent px-4 py-3 text-sm text-gray-200 outline-none placeholder-gray-400"
            />
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-5 py-3 text-sm font-medium text-white bg-gradient-to-r from-primary to-accent"
            >
              Subscribe
            </motion.button>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="mt-12 pt-6 border-t border-white/10 text-center text-xs text-gray-500">
        © {new Date().getFullYear()} DevSphere Solutions. All rights reserved.
      </div>
    </footer>
  );
}
