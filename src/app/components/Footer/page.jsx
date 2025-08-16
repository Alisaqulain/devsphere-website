// src/components/Footer.jsx
import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#0a2a5e] text-white py-12 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">

        {/* Brand + Newsletter */}
        <div>
          <h2 className="text-2xl font-bold flex items-center gap-2">
            <span className="text-white">OPTIVISE</span>
          </h2>
          <p className="mt-4 text-sm text-gray-300">
            Stay Updated with Expert Insights
          </p>
          <p className="mt-2 text-sm text-gray-400">
            Subscribe to our newsletter for tips, trends, and success stories in business consulting.
          </p>
          <div className="mt-4 flex">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-4 py-2 rounded-l-lg text-gray-800 w-full focus:outline-none"
            />
            <button className="bg-blue-500 px-4 py-2 rounded-r-lg">Send</button>
          </div>

          {/* Social Icons */}
          <div className="mt-6 flex gap-4 text-gray-300">
            <a href="#"><FaTwitter className="hover:text-white" /></a>
            <a href="#"><FaFacebookF className="hover:text-white" /></a>
            <a href="#"><FaInstagram className="hover:text-white" /></a>
            <a href="#"><FaLinkedinIn className="hover:text-white" /></a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-gray-300">
            <li><a href="#" className="hover:text-white">Home</a></li>
            <li><a href="#" className="hover:text-white">About Us</a></li>
            <li><a href="#" className="hover:text-white">Services</a></li>
            <li><a href="#" className="hover:text-white">Contact Us</a></li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="font-semibold mb-4">Services</h3>
          <ul className="space-y-2 text-gray-300">
            <li><a href="#" className="hover:text-white">Business Strategy Consulting</a></li>
            <li><a href="#" className="hover:text-white">Operational Excellence</a></li>
            <li><a href="#" className="hover:text-white">Digital Transformation</a></li>
            <li><a href="#" className="hover:text-white">Market Research & Analysis</a></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="font-semibold mb-4">Contact</h3>
          <ul className="space-y-3 text-gray-300 text-sm">
            <li>📧 info@devspheresolutions.in</li>
            <li>📞 9457818861</li>
            <li>📍 Muzaffarnagar, Uttar Pradesh, India</li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-600 mt-10 pt-6 text-sm text-gray-400 flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="flex gap-6">
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Use</a>
          <a href="#">Cookie Preferences</a>
        </div>
        <p>© 2025 Optivise Consulting. All rights reserved.</p>
      </div>
    </footer>
  );
}
