// src/components/Contact.jsx
import React from "react";

export default function Contact() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center px-4">
      <div className="max-w-4xl w-full bg-white shadow-lg rounded-2xl p-8 md:p-12">
        {/* Heading */}
        <h2 className="text-3xl font-bold text-gray-800 mb-4 text-center">
          Contact Us
        </h2>
        <p className="text-gray-600 mb-8 text-center">
          Have questions? We’d love to hear from you. Fill out the form below
          and we’ll get back to you soon.
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

            <button
              type="submit"
              className="w-full bg-blue-600 text-white font-semibold py-3 rounded-xl hover:bg-blue-700 transition duration-300"
            >
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
              <p className="text-gray-600">info@devspheresolutions.in</p>
             
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                Phone
              </h3>
              <p className="text-gray-600">+91 9457818861  +91 9389441961</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
