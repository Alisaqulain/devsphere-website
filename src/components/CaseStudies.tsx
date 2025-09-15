"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Navbar from "./Navbar";
import Footer from "./Footer";

const allCaseStudies = [
   {
    category: "Fintech",
    title: "FinEdge — Secure Fintech Platform",
    desc: "SOC2-aligned practices, fraud events down by 60%.",
    highlight: "60%",
    highlightColor: "text-pink-400",
    img: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40",
  },
  {
    category: "Healthcare",
    title: "HealthPlus — Telemedicine at Scale",
    desc: "Achieved 5x throughput with autoscaling and observability.",
    highlight: "5x throughput",
    highlightColor: "text-violet-400",
    img: "https://images.unsplash.com/photo-1584438784894-089d6a62b8fa",
  },
  {
    category: "EdTech",
    title: "EduSphere — Scalable Learning Platform",
    desc: "Supported 50k+ concurrent students, latency reduced by 40%.",
    highlight: "50k+ concurrent students",
    highlightColor: "text-pink-400",
    img: "https://images.unsplash.com/photo-1588072432836-e10032774350?auto=format&fit=crop&w=800&q=80",
  },
  {
    category: "Retail",
    title: "RetailX — Omnichannel Commerce",
    desc: "Checkout conversion +12%, inventory sync in real-time.",
    highlight: "+12%",
    highlightColor: "text-violet-400",
    img: "https://www.devspheresolutions.in/RetailX%20%E2%80%94%20Omnichannel%20Commerce.png",
  },
  {
    category: "Agriculture",
    title: "AgroIQ — Smart Farming",
    desc: "IoT sensor mesh, crop yield +18% using analytics.",
    highlight: "+18%",
    highlightColor: "text-pink-400",
    img: "https://images.unsplash.com/photo-1464226184884-fa280b87c399",
  },
  {
    category: "Logistics",
    title: "LogistiCo — Route Optimization",
    desc: "Delivery SLA improved 22%, cost per drop -15%.",
    highlight: "22%",
    highlightColor: "text-violet-400",
    img: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80",
  },
];

const categories = ["All", "Fintech", "Healthcare", "EdTech", "Retail", "Agriculture", "Logistics"];

export default function CaseStudies3D() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredStudies =
    activeCategory === "All"
      ? allCaseStudies
      : allCaseStudies.filter((s) => s.category === activeCategory);

  return (
    <>
      <Navbar />
      <section className="relative py-20 bg-[#0B0F19] text-white" style={{ perspective: 1200 }}>
        <div className="max-w-7xl mx-auto px-6">
          {/* Heading */}
          <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6 }} viewport={{ once: true }} className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
              Our{" "}
              <span className="bg-gradient-to-r from-violet-500 to-pink-500 bg-clip-text text-transparent">
                Case Studies
              </span>
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Discover how we’ve helped businesses innovate, grow, and succeed through cutting-edge digital solutions.
            </p>
          </motion.div>

          {/* Filters */}
          <motion.div className="flex flex-wrap justify-center gap-4 mb-12" initial="hidden" animate="visible" variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.1 } } }}>
            {categories.map((cat) => (
              <motion.button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`relative px-5 py-2 rounded-full text-sm font-medium transition transform ${activeCategory === cat ? "bg-gradient-to-r from-violet-500 to-pink-500 text-white shadow-[0_10px_25px_rgba(238,86,233,0.35)]" : "bg-white/5 text-gray-300 hover:bg-white/10"}`}
                variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
                whileTap={{ scale: 0.95 }}
              >
                {cat}
                {activeCategory === cat && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute inset-0 rounded-full border border-pink-400"
                    transition={{ type: "spring", bounce: 0.3, duration: 0.6 }}
                  />
                )}
              </motion.button>
            ))}
          </motion.div>

          {/* Grid */}
          <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence>
              {filteredStudies.map((study, index) => (
                <motion.div
                  key={study.title}
                  layout
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.6, delay: index * 0.05 }}
                  whileHover={{ y: -10, scale: 1.05, rotateY: 5, rotateX: 3 }}
                  className="group relative bg-gradient-to-b from-white/10 to-white/5 backdrop-blur-xl rounded-2xl overflow-hidden shadow-[0_15px_40px_rgba(0,0,0,0.35)] hover:shadow-[0_20px_60px_rgba(238,86,233,0.5)] border border-white/10 hover:border-violet-400/30 transition-transform transform"
                >
                  {/* Image */}
                  <div className="relative overflow-hidden">
                    <motion.img
                      src={study.img}
                      alt={study.title}
                      className="h-48 w-full object-cover"
                      whileHover={{ scale: 1.1, rotateY: -3 }}
                      transition={{ duration: 0.6 }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-70"></div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2">{study.title}</h3>
                    <p className="text-gray-300 text-sm leading-relaxed">
                      {study.desc.split(study.highlight)[0]}
                      <span className={`font-semibold ${study.highlightColor}`}>
                        {study.highlight}
                      </span>
                      {study.desc.split(study.highlight)[1]}
                    </p>

                    {/* Hover Button */}
                    <motion.a
                      whileHover={{ x: 6 }}
                      href="#"
                      className="mt-4 inline-flex items-center text-sm font-medium text-violet-400 hover:text-pink-400 opacity-0 group-hover:opacity-100 transition"
                    >
                      View Details <ArrowRight className="ml-1 w-4 h-4" />
                    </motion.a>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>
      <Footer />
    </>
  );
}
