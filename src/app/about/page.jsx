"use client";
import React from "react";
import { motion } from "framer-motion";
import SEOHead, { buildOrganizationJsonLd } from "../components/SEOHead";

export default function About() {
  return (
    <>
    <SEOHead
      title="About DevSphere Solutions"
      description="DevSphere is a product engineering studio building web, mobile and CRM products."
      url="https://devspheresolutions.in/about"
      canonical="https://devspheresolutions.in/about"
      image="https://devspheresolutions.in/logo.png"
      jsonLd={[buildOrganizationJsonLd()]}
    />
    <div className="min-h-screen bg-gray-50 px-6 py-12">
      <div className="max-w-6xl mx-auto">
        {/* SEO for this page */}
        {/* Next 15 supports export const metadata in route file, but for brevity we rely on global metadata. */}
        {/* Hero Section */}
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3 }} className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">About Us</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            DevSphere Solutions is a product engineering studio. We craft web, mobile and CRM
            products that automate workflows, improve customer experience and accelerate growth.
            Our team blends strategy, design and engineering to deliver measurable business value.
          </p>
        </motion.div>

        {/* Mission & Vision */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <motion.div whileHover={{ y: -4 }} className="bg-white p-8 rounded-2xl shadow-md hover:shadow-lg transition">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Our Mission
            </h2>
            <p className="text-gray-600">
              To deliver cutting-edge web, mobile, and CRM solutions that solve
              real-world problems, empower businesses, and enhance customer
              experiences with innovation and technology.
            </p>
          </motion.div>

          <motion.div whileHover={{ y: -4 }} className="bg-white p-8 rounded-2xl shadow-md hover:shadow-lg transition">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Our Vision
            </h2>
            <p className="text-gray-600">
              To be recognized as a leading global product-based company that
              drives digital transformation and sets new standards for
              innovation, quality, and customer satisfaction.
            </p>
          </motion.div>
        </div>

        {/* Company Stats */}
        <div className="grid md:grid-cols-4 gap-8 text-center mb-16">
          <motion.div whileHover={{ y: -4 }} className="bg-white p-6 rounded-2xl shadow-md">
            <h3 className="text-3xl font-bold text-blue-600">50+</h3>
            <p className="text-gray-600 mt-2">Projects Delivered</p>
          </motion.div>
          <motion.div whileHover={{ y: -4 }} className="bg-white p-6 rounded-2xl shadow-md">
            <h3 className="text-3xl font-bold text-blue-600">20+</h3>
            <p className="text-gray-600 mt-2">Happy Clients</p>
          </motion.div>
          <motion.div whileHover={{ y: -4 }} className="bg-white p-6 rounded-2xl shadow-md">
            <h3 className="text-3xl font-bold text-blue-600">10+</h3>
            <p className="text-gray-600 mt-2">Products Launched</p>
          </motion.div>
          <motion.div whileHover={{ y: -4 }} className="bg-white p-6 rounded-2xl shadow-md">
            <h3 className="text-3xl font-bold text-blue-600">5+</h3>
            <p className="text-gray-600 mt-2">Years Experience</p>
          </motion.div>
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
    </>
  );
}
