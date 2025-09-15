"use client";

import React from "react";
import { motion } from "framer-motion";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Mail, Phone, MapPin } from "lucide-react";
import { Linkedin, Twitter, Instagram, Github } from "lucide-react";

export default function ContactPage() {
  return (
    <>
      <Navbar />

      <section
        className="relative bg-[#0B0F19] text-white min-h-screen py-12 sm:py-16 md:py-20 px-3 sm:px-6 flex items-center justify-center overflow-hidden"
        style={{ perspective: 1200 }}
      >
        {/* Background Blobs */}
        <motion.div
          className="absolute -top-32 -left-32 w-72 h-72 sm:w-96 sm:h-96 rounded-full bg-gradient-to-r from-pink-500 to-violet-500 opacity-30 filter blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            rotateY: [0, 20, 0],
            rotateX: [0, 10, 0],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute -bottom-32 -right-32 w-72 h-72 sm:w-96 sm:h-96 rounded-full bg-gradient-to-r from-violet-500 to-pink-500 opacity-20 filter blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            rotateY: [0, -20, 0],
            rotateX: [0, -10, 0],
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Glassmorphic Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          whileHover={{ rotateY: 5, rotateX: 3, scale: 1.03, y: -5 }}
          transition={{ type: "spring", stiffness: 100, damping: 10 }}
          className="relative bg-white/5 backdrop-blur-xl rounded-3xl p-4 sm:p-8 md:p-10 shadow-xl border border-white/10 max-w-2xl sm:max-w-3xl md:max-w-5xl w-full flex flex-col gap-8 sm:gap-10 z-10"
        >
          {/* Heading */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-2 bg-gradient-to-r from-violet-500 to-pink-500 bg-clip-text text-transparent">
              Let's Connect
            </h2>
            <p className="text-gray-400 text-sm sm:text-base">
              Have a project in mind? Share your ideas with us — we’ll respond
              within{" "}
              <span className="bg-gradient-to-r from-violet-500 to-pink-500 bg-clip-text text-transparent">
                1–2 business days
              </span>
              .
            </p>
          </motion.div>

          {/* Two Column Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12">
            {/* Left: Contact Form */}
            <form className="flex flex-col gap-5 sm:gap-6">
              <div className="flex flex-col">
                <label className="mb-2 text-gray-300 font-medium text-sm sm:text-base">
                  Name
                </label>
                <input
                  type="text"
                  placeholder="Your Name"
                  className="bg-white/10 text-white placeholder-gray-400 rounded-xl px-4 py-3 sm:px-5 sm:py-4 focus:outline-none focus:ring-2 focus:ring-pink-400 shadow-inner transition text-sm sm:text-base"
                />
              </div>

              <div className="flex flex-col">
                <label className="mb-2 text-gray-300 font-medium text-sm sm:text-base">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="you@example.com"
                  className="bg-white/10 text-white placeholder-gray-400 rounded-xl px-4 py-3 sm:px-5 sm:py-4 focus:outline-none focus:ring-2 focus:ring-violet-400 shadow-inner transition text-sm sm:text-base"
                />
              </div>

              <div className="flex flex-col">
                <label className="mb-2 text-gray-300 font-medium text-sm sm:text-base">
                  Message
                </label>
                <textarea
                  placeholder="Your Message"
                  rows={4}
                  className="bg-white/10 text-white placeholder-gray-400 rounded-xl px-4 py-3 sm:px-5 sm:py-4 focus:outline-none focus:ring-2 focus:ring-pink-400 shadow-inner resize-none transition text-sm sm:text-base"
                ></textarea>
              </div>

              <motion.button
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 20px 40px rgba(238,86,233,0.4)",
                }}
                type="submit"
                className="bg-gradient-to-r from-violet-500 to-pink-500 px-6 sm:px-8 py-2.5 sm:py-3 rounded-full text-white font-semibold mt-2 shadow-lg hover:shadow-pink-400/50 transition text-sm sm:text-base"
              >
                Send Message
              </motion.button>
            </form>

            {/* Right: Contact Info + Socials */}
            <div className="flex flex-col justify-center gap-5 sm:gap-6">
              <div className="flex items-center gap-3 sm:gap-4">
                <MapPin className="w-5 h-5 sm:w-6 sm:h-6 text-pink-400" />
                <p className="text-gray-300 text-sm sm:text-base">
                  Muzaffarnagar, Uttar Pradesh, India
                </p>
              </div>
              <div className="flex items-center gap-3 sm:gap-4">
                <Mail className="w-5 h-5 sm:w-6 sm:h-6 text-violet-400" />
                <p className="text-gray-300 text-sm sm:text-base">
                  info@devspheresolutions.in
                </p>
              </div>
              <div className="flex flex-wrap items-center gap-3 sm:gap-4">
                <Phone className="w-5 h-5 sm:w-6 sm:h-6 text-pink-400" />
                <a
                  href="tel:+919457818861"
                  className="text-gray-300 hover:text-pink-400 transition text-sm sm:text-base"
                >
                  +91 94578 18861
                </a>
                <a
                  href="tel:+919457818861"
                  className="text-gray-300 hover:text-pink-400 transition text-sm sm:text-base"
                >
                  +919389441961
                </a>
              </div>

              <p className="text-gray-400 mt-2 sm:mt-4 text-xs sm:text-sm">
                Follow us on social media for updates and latest projects.
              </p>

              <div className="flex gap-3 sm:gap-4 mt-1 sm:mt-2">
                <motion.a
                  href="https://www.linkedin.com/company/devspheresolutions" // Yahan apna LinkedIn link daalein
                  whileHover={{
                    scale: 1.2,
                    boxShadow: "0 10px 30px rgba(238,86,233,0.4)",
                  }}
                  className="w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center rounded-full bg-white/10 text-violet-400 hover:bg-violet-500 hover:text-white transition"
                >
                  <Linkedin className="w-4 h-4 sm:w-5 sm:h-5" />
                </motion.a>
                <motion.a
                  href="https://www.instagram.com/dev.spheresolutions/" // Yahan apna Twitter/X link daalein
                  whileHover={{
                    scale: 1.2,
                    boxShadow: "0 10px 30px rgba(238,86,233,0.4)",
                  }}
                  className="w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center rounded-full bg-white/10 text-violet-400 hover:bg-violet-500 hover:text-white transition"
                >
                  <Twitter className="w-4 h-4 sm:w-5 sm:h-5" />
                </motion.a>
                <motion.a
                  href="https://www.instagram.com/dev.spheresolutions/" // Yahan apna Instagram link daalein
                  whileHover={{
                    scale: 1.2,
                    boxShadow: "0 10px 30px rgba(238,86,233,0.4)",
                  }}
                  className="w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center rounded-full bg-white/10 text-violet-400 hover:bg-violet-500 hover:text-white transition"
                >
                  <Instagram className="w-4 h-4 sm:w-5 sm:h-5" />
                </motion.a>
                <motion.a
                  href="https://github.com/" // Yahan apna Github link daalein
                  whileHover={{
                    scale: 1.2,
                    boxShadow: "0 10px 30px rgba(238,86,233,0.4)",
                  }}
                  className="w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center rounded-full bg-white/10 text-violet-400 hover:bg-violet-500 hover:text-white transition"
                >
                  <Github className="w-4 h-4 sm:w-5 sm:h-5" />
                </motion.a>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      <Footer />

      <style>{`
        @keyframes blob {
          0%,100% { transform: scale(1) translate(0,0); }
          33% { transform: scale(1.2) translate(20px,-20px); }
          66% { transform: scale(1) translate(-20px,20px); }
        }
      `}</style>
    </>
  );
}
