import React from "react";
import Link from "next/link";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-white text-gray-800 py-12 px-6 mt-16 border-t border-gray-200">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
        <div>
          <h2 className="text-2xl font-bold flex items-center gap-2">
            <span className="text-blue-600">DevSphere Solutions</span>
          </h2>
          <p className="mt-4 text-sm text-gray-600">Smart solutions for a smarter world — Web, Mobile and CRM products tailored to your business.</p>
          <div className="mt-6 flex gap-4 text-gray-500">

            <a href="https://www.instagram.com/dev.spheresolutions/"><FaInstagram className="hover:text-blue-600" /></a>
            <a href="https://www.linkedin.com/company/devspheresolutions"><FaLinkedinIn className="hover:text-blue-600" /></a>
          </div>
        </div>

        <div>
          <h3 className="font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-gray-600">
            <li><Link href="/" className="hover:text-blue-600">Home</Link></li>
            <li><Link href="/about" className="hover:text-blue-600">About</Link></li>
            <li><Link href="/project" className="hover:text-blue-600">Projects</Link></li>
            <li><Link href="/contact" className="hover:text-blue-600">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold mb-4">Services</h3>
          <ul className="space-y-2 text-gray-600">
            <li>Web Development</li>
            <li>Mobile Apps</li>
            <li>CRM Solutions</li>
            <li>Consulting</li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold mb-4">Contact</h3>
          <ul className="space-y-3 text-gray-600 text-sm">
            <li>
              <a className="hover:text-blue-600 underline-offset-2 hover:underline" href="mailto:info@devspheresolutions.in">info@devspheresolutions.in</a>
            </li>
            <li>
              <a className="hover:text-blue-600 underline-offset-2 hover:underline" href="tel:+919457818861">+91 9457818861</a>
            </li>
            <li>Muzaffarnagar, Uttar Pradesh, India</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-gray-200 mt-10 pt-6 text-sm text-gray-500 flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="flex gap-6">
          <Link href="/privacy-policy">Privacy Policy</Link>
          <Link href="/terms-of-use">Terms of Use</Link>
        </div>
        <p>© {new Date().getFullYear()} DevSphere Solutions. All rights reserved.</p>
      </div>
    </footer>
  );
}


