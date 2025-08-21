"use client";
import React from "react";
import { motion } from "framer-motion";
import SEOHead, { buildLocalBusinessJsonLd } from "../components/SEOHead";

export default function Contact() {
  return (
    <>
    <SEOHead
      title="Contact DevSphere Solutions"
      description="Get in touch for web, mobile and CRM solutions. Based in Muzaffarnagar, Uttar Pradesh."
      url="https://devspheresolutions.in/contact"
      canonical="https://devspheresolutions.in/contact"
      image="https://devspheresolutions.in/logo.png"
      jsonLd={[buildLocalBusinessJsonLd()]}
    />
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center px-4">
      <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3 }} className="max-w-4xl w-full bg-white shadow-lg rounded-2xl p-8 md:p-12">
        {/* Heading */}
        <h2 className="text-3xl font-bold text-gray-800 mb-4 text-center">
          Contact Us
        </h2>
        <p className="text-gray-600 mb-8 text-center">
          Have a project in mind? Tell us about your goals and we’ll respond within 1–2 business days.
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact Form */}
          <form className="space-y-5">
            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Your Name
              </label>
              <input
                type="text"
                placeholder="John Doe"
                className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Email Address
              </label>
              <input
                type="email"
                placeholder="you@example.com"
                className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Message
              </label>
              <textarea
                rows="4"
                placeholder="Write your message..."
                className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              ></textarea>
            </div>

            <button type="submit" className="w-full bg-blue-600 text-white font-semibold py-3 rounded-xl hover:bg-blue-700 transition duration-300">
              Send Message
            </button>
          </form>

          {/* Contact Information */}
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                Address
              </h3>
              <p className="text-gray-600">Muzaffarnagar, Uttar Pradesh, India</p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                Email
              </h3>
              <a className="text-blue-600 hover:underline" href="mailto:info@devspheresolutions.in">info@devspheresolutions.in</a>
             
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                Phone
              </h3>
              <p className="text-gray-600">
                <a className="hover:underline" href="tel:+919457818861">+91 9457818861</a>
                &nbsp;  &nbsp;
                <a className="hover:underline" href="tel:+919389441961">+91 9389441961</a>
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
    </>
  );
}
