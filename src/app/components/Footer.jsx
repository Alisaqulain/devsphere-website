import React from "react";
import Link from "next/link";
import { FaInstagram, FaLinkedinIn, FaTwitter, FaGithub } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="text-white" style={{ background: "linear-gradient(180deg, #0b1220, #0f172a)" }}>
      <div className="max-w-7xl mx-auto py-14 px-6 grid grid-cols-1 md:grid-cols-5 gap-10">
        <div className="md:col-span-2">
          <h2 className="text-2xl font-bold">DevSphere Solutions</h2>
          <p className="mt-4 text-sm text-slate-300 max-w-sm">Smart solutions for a smarter world — Web, Mobile and CRM products tailored to your business.</p>
          <div className="mt-6 flex gap-4 text-slate-300">
            <a href="https://www.instagram.com/dev.spheresolutions/"><FaInstagram className="hover:text-white" /></a>
            <a href="https://www.linkedin.com/company/devspheresolutions"><FaLinkedinIn className="hover:text-white" /></a>
            
          </div>
        </div>

        <div>
          <h3 className="font-semibold text-slate-200 mb-4">Services</h3>
          <ul className="space-y-2 text-slate-400">
            <li><Link href="/services">Web Development</Link></li>
            <li><Link href="/services">Mobile Apps</Link></li>
            <li><Link href="/services">CRM Solutions</Link></li>
            <li><Link href="/services">Cloud & DevOps</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold text-slate-200 mb-4">Quick Links</h3>
          <ul className="space-y-2 text-slate-400">
            <li><Link href="/blog">Blog</Link></li>
            <li><Link href="/case-studies">Case Studies</Link></li>
            <li><Link href="/project">Projects</Link></li>
            <li><Link href="/contact">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold text-slate-200 mb-4">Newsletter</h3>
          <form className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2 w-full">
            <input type="email" placeholder="Your email" className="w-full sm:flex-1 px-4 py-3 rounded-lg bg-white/10 text-white placeholder:text-slate-400 border border-white/10 focus:outline-none" />
            <button type="submit" className="w-full sm:w-auto px-4 py-3 rounded-lg text-white" style={{ background: "linear-gradient(90deg, #3b82f6, #8b5cf6)" }}>Subscribe</button>
          </form>
        </div>
      </div>

      <div className="border-t border-white/10 py-6 px-6 text-sm text-slate-400 flex flex-col md:flex-row justify-between items-center gap-4 max-w-7xl mx-auto">
        <div className="flex gap-6">
          <Link href="/privacy-policy">Privacy Policy</Link>
          <Link href="/terms-of-use">Terms of Use</Link>
        </div>
        <p>© {new Date().getFullYear()} DevSphere Solutions. All rights reserved.</p>
      </div>
    </footer>
  );
}


