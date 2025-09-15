"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import k2 from "@/assets/k2.png";
import car from "@/assets/car accessory.png";
import I from "@/assets/l.png";
import mz from "@/assets/mz.jpeg";
import typing from "@/assets/typing.png";
import ecom from "@/assets/ecoomerce.png";
import realTime from "@/assets/realchat.jpg";

const projects = [
  { category: "Fintech", title: "FinEdge Pro — Advanced Banking Tools", desc: "Improved transaction speed by 70%, user retention +25%.", highlight: "70%", highlightColor: "text-pink-400", img: car },
  { category: "Healthcare", title: "MediTrack — Health Analytics Dashboard", desc: "Patient monitoring accuracy improved by 45%, response time -30%.", highlight: "45%", highlightColor: "text-violet-400", img: k2 },
  { category: "EdTech", title: "Learnly — AI-Powered Tutoring", desc: "Adaptive learning increased completion rates by 60%.", highlight: "60%", highlightColor: "text-pink-400", img: I },
  { category: "Retail", title: "ShopSmart — AI Inventory Management", desc: "Stock-outs reduced by 40%, sales uplift +15%.", highlight: "+15%", highlightColor: "text-violet-400", img: mz },
  { category: "Agriculture", title: "FarmIQ — Smart Crop Management", desc: "Yield increased by 22% using predictive analytics.", highlight: "22%", highlightColor: "text-pink-400", img: ecom },
  { category: "Energy", title: "EcoPower — Smart Energy Grid", desc: "Energy savings up to 25%, outage incidents -20%.", highlight: "25%", highlightColor: "text-pink-400", img: realTime },
  { category: "Logistics", title: "RouteMaster — AI Delivery Planner", desc: "Delivery efficiency +30%, fuel cost -12%.", highlight: "+30%", highlightColor: "text-violet-400", img: typing },
];

const categories = ["All", "Fintech", "Healthcare", "EdTech", "Retail", "Agriculture", "Logistics", "Energy"];

export default function ProjectsPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const filteredProjects = activeCategory === "All" ? projects : projects.filter((p) => p.category === activeCategory);

  return (
    <>
      <Navbar />
      <section className="relative py-20 bg-[#0B0F19] text-white md:mx-20" style={{ perspective: 1200 }}>
        <div className="max-w-7xl mx-auto px-6">
          {/* Heading */}
          <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6 }} viewport={{ once: true }} className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
              Our{" "}
              <span className="bg-gradient-to-r from-violet-500 to-pink-500 bg-clip-text text-transparent">
                Projects
              </span>
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Explore our latest projects demonstrating innovation, performance, and user-centric design.
            </p>
          </motion.div>

          {/* Filters */}
          <motion.div className="flex flex-wrap justify-center gap-4 mb-12" initial="hidden" animate="visible" variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.1 } } }}>
            {categories.map((cat) => (
              <motion.button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`relative px-5 py-2 rounded-full text-sm font-medium transition ${activeCategory === cat ? "bg-gradient-to-r from-violet-500 to-pink-500 text-white shadow-lg" : "bg-white/5 text-gray-300 hover:bg-white/10"}`}
                variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
                whileTap={{ scale: 0.9 }}
              >
                {cat}
                {activeCategory === cat && (
                  <motion.div layoutId="activeTab" className="absolute inset-0 rounded-full border border-pink-400" transition={{ type: "spring", bounce: 0.3, duration: 0.6 }} />
                )}
              </motion.button>
            ))}
          </motion.div>

          {/* Grid */}
          <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence>
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.title}
                  layout
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.6, delay: index * 0.05 }}
                  whileHover={{ rotateY: 6, rotateX: 3, scale: 1.05, boxShadow: "0 20px 40px rgba(238,86,233,0.4)" }}
                  className="group relative bg-[#0B0F19] rounded-2xl overflow-hidden shadow-lg border border-white/10 transition-colors duration-300 hover:bg-white/10 hover:shadow-violet-500/40"
                >
                  {/* Image */}
                  <motion.img
                    src={project.img}
                    alt={project.title}
                    className="h-48 w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />

                  {/* Overlay for "View Project" */}
                  <div className="absolute inset-0 bg-black/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <motion.a
                      href="#"
                      className="text-white bg-gradient-to-r from-violet-500 to-pink-500 px-4 py-2 rounded-full font-medium flex items-center gap-2"
                      whileHover={{ scale: 1.05 }}
                    >
                      View Project <ArrowRight className="w-4 h-4" />
                    </motion.a>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                    <p className="text-gray-300 text-sm leading-relaxed">
                      {project.desc.split(project.highlight)[0]}
                      <span className={`font-semibold ${project.highlightColor}`}>{project.highlight}</span>
                      {project.desc.split(project.highlight)[1]}
                    </p>
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
