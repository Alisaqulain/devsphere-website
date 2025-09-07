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

      {/* Dark Gradient Background to match contact */}
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black">
        <div className="relative z-10 px-6 py-12">
          <div className="max-w-6xl mx-auto">
            {/* Hero Section */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="text-center mb-16"
            >
              <h1 className="text-4xl font-bold text-white mb-4">About Us</h1>
              <p className="text-gray-300 max-w-2xl mx-auto">
                Founded in{" "}
                <span className="font-semibold text-blue-600">2025</span>, 
                DevSphere Solutions is a product engineering studio. 
                We craft web, mobile and CRM products that automate workflows, 
                improve customer experience and accelerate growth. 
                Our team blends strategy, design and engineering to deliver measurable business value.
              </p>
            </motion.div>

            {/* Mission & Vision */}
            <div className="grid md:grid-cols-2 gap-8 mb-20">
              <motion.div
                whileHover={{ y: -4 }}
                className="bg-white/10 backdrop-blur-md border border-white/10 p-8 rounded-2xl shadow hover:shadow-2xl transition"
              >
                <h2 className="text-2xl font-semibold text-white mb-4">
                  Our Mission
                </h2>
                <p className="text-gray-300">
                  To deliver cutting-edge web, mobile, and CRM solutions that solve
                  real-world problems, empower businesses, and enhance customer
                  experiences with innovation and technology.
                </p>
              </motion.div>

              <motion.div
                whileHover={{ y: -4 }}
                className="bg-white/10 backdrop-blur-md border border-white/10 p-8 rounded-2xl shadow hover:shadow-2xl transition"
              >
                <h2 className="text-2xl font-semibold text-white mb-4">
                  Our Vision
                </h2>
                <p className="text-gray-300">
                  To be recognized as a leading global product-based company that
                  drives digital transformation and sets new standards for
                  innovation, quality, and customer satisfaction.
                </p>
              </motion.div>
            </div>

            {/* Journey Timeline */}
            <section className="py-20 bg-white/5 backdrop-blur-lg border border-white/10 px-6 rounded-2xl mb-20 shadow-lg">
              <div className="max-w-5xl mx-auto text-center mb-12">
                <h2 className="text-3xl font-bold text-white">Our Journey</h2>
                <p className="text-gray-300 mt-2">From 2025 to the future</p>
              </div>

              <div className="relative max-w-4xl mx-auto">
                <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-blue-500 to-indigo-600 h-full"></div>

                {[
                  {
                    year: "2025",
                    title: "Founded DevSphere",
                    desc: "Started our journey to craft world-class digital products.",
                    icon: "🚀",
                  },
                  {
                    year: "2026",
                    title: "First Global Clients",
                    desc: "Delivered impactful websites, mobile apps, and CRM solutions worldwide.",
                    icon: "🌍",
                  },
                  {
                    year: "2027",
                    title: "Scaling Fast",
                    desc: "Expanded our team and successfully launched 30+ projects.",
                    icon: "📈",
                  },
                  {
                    year: "2028",
                    title: "Shaping the Future",
                    desc: "Becoming a trusted partner for enterprises and startups globally.",
                    icon: "🏆",
                  },
                ].map((t, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.2 }}
                    className={`mb-12 flex ${
                      i % 2 === 0 ? "justify-start" : "justify-end"
                    } w-full`}
                  >
                    <div className="bg-white/10 backdrop-blur-md border border-white/10 shadow rounded-xl p-6 w-80 relative">
                      <span className="absolute top-6 -left-4 w-12 h-12 rounded-full bg-gradient-to-r from-blue-500 to-indigo-600 text-white flex items-center justify-center text-lg font-bold">
                        {t.icon}
                      </span>
                      <span className="block text-sm font-medium text-blue-300">
                        {t.year}
                      </span>
                      <h3 className="text-xl font-semibold text-white mt-1">{t.title}</h3>
                      <p className="text-gray-300 mt-2">{t.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </section>

            {/* Stats */}
            <div className="grid md:grid-cols-4 gap-8 text-center mb-20">
              {[
                { number: "50+", label: "Projects Delivered" },
                { number: "20+", label: "Happy Clients" },
                { number: "10+", label: "Products Launched" },
                { number: "5+", label: "Years Experience" },
              ].map((stat, i) => (
                <motion.div
                  key={i}
                  whileHover={{ y: -4 }}
                  className="bg-white/10 backdrop-blur-md border border-white/10 p-6 rounded-2xl shadow"
                >
                  <h3 className="text-3xl font-bold text-blue-400">
                    {stat.number}
                  </h3>
                  <p className="text-gray-300 mt-2">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Tailwind Custom Animations */}
      <style jsx>{`
        .animate-blob {
          animation: blob 8s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
        @keyframes blob {
          0% {
            transform: translate(0px, 0px) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
          100% {
            transform: translate(0px, 0px) scale(1);
          }
        }
      `}</style>
    </>
  );
}
