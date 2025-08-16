// src/components/Header.jsx
import React from "react";

export default function Header() {
  return (
    <header className="w-full py-4 px-6 flex justify-between items-center shadow-sm bg-white">
      {/* Logo */}
      <h1 className="text-2xl font-bold text-blue-600">DevSphere Solutions</h1>

      {/* Navigation */}
      <nav className="hidden md:flex gap-6 text-gray-700">
        <a href="#" className="hover:text-blue-600">Home</a>
        <a href="#" className="hover:text-blue-600">About</a>
        <a href="#" className="hover:text-blue-600">Services</a>
        <a href="#" className="hover:text-blue-600">Process</a>
        <a href="#" className="hover:text-blue-600">Contact</a>
      </nav>

      {/* Call to Action */}
      <button className="bg-blue-600 text-white px-4 py-2 rounded-lg">
        Get Started
      </button>
    </header>
  );
}
