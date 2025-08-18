// src/components/About.jsx
import React from "react";

export default function About() {
  return (
    <div className="min-h-screen bg-gray-50 px-6 py-12">
      <div className="max-w-6xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">About Us</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We are a product-based company specializing in **Web Development,
            Mobile Apps, and CRM Solutions**. Our mission is to create powerful
            digital products that simplify business processes and help
            organizations scale faster.
          </p>
        </div>

        {/* Mission & Vision */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-lg transition">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Our Mission
            </h2>
            <p className="text-gray-600">
              To deliver cutting-edge web, mobile, and CRM solutions that solve
              real-world problems, empower businesses, and enhance customer
              experiences with innovation and technology.
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-lg transition">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Our Vision
            </h2>
            <p className="text-gray-600">
              To be recognized as a leading global product-based company that
              drives digital transformation and sets new standards for
              innovation, quality, and customer satisfaction.
            </p>
          </div>
        </div>

        {/* Company Stats */}
        <div className="grid md:grid-cols-4 gap-8 text-center mb-16">
          <div className="bg-white p-6 rounded-2xl shadow-md">
            <h3 className="text-3xl font-bold text-blue-600">50+</h3>
            <p className="text-gray-600 mt-2">Projects Delivered</p>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-md">
            <h3 className="text-3xl font-bold text-blue-600">20+</h3>
            <p className="text-gray-600 mt-2">Happy Clients</p>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-md">
            <h3 className="text-3xl font-bold text-blue-600">10+</h3>
            <p className="text-gray-600 mt-2">Products Launched</p>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-md">
            <h3 className="text-3xl font-bold text-blue-600">5+</h3>
            <p className="text-gray-600 mt-2">Years Experience</p>
          </div>
        </div>

        {/* Our Team */}
        {/* <div>
          <h2 className="text-3xl font-bold text-gray-800 text-center mb-8">
            Meet Our Team
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-2xl shadow-md text-center hover:shadow-lg transition">
              <img
                src="https://source.unsplash.com/200x200/?man,developer"
                alt="CEO"
                className="w-32 h-32 mx-auto rounded-full object-cover mb-4"
              />
              <h3 className="text-xl font-semibold text-gray-800">Anas Ansari</h3>
              <p className="text-gray-500">Founder & CEO</p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-md text-center hover:shadow-lg transition">
              <img
                src="https://source.unsplash.com/200x200/?woman,developer"
                alt="CTO"
                className="w-32 h-32 mx-auto rounded-full object-cover mb-4"
              />
              <h3 className="text-xl font-semibold text-gray-800">
                Sarah Khan
              </h3>
              <p className="text-gray-500">Co-Founder & CTO</p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-md text-center hover:shadow-lg transition">
              <img
                src="https://source.unsplash.com/200x200/?man,designer"
                alt="Lead Developer"
                className="w-32 h-32 mx-auto rounded-full object-cover mb-4"
              />
              <h3 className="text-xl font-semibold text-gray-800">Ali Raza</h3>
              <p className="text-gray-500">Lead Developer</p>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
}
