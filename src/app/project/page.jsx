"use client";
import React from "react";
import { motion } from "framer-motion";
import SEOHead from "../components/SEOHead";
import { Sparkles } from "lucide-react";

export default function Projects() {
  const base = "https://devspheresolutions.in";
  const projects = [
    {
      id: 1,
      title: "MZTechnicals",
      description: "A sleek, performance-driven company website built for growth.",
      image: "/mz.jpeg",
      demo: "https://mztechnicals.com",
      category: "Corporate",
    },
    {
      id: 7,
      title: "The Accessory Center MZN",
      description: "Official website for a leading provider of car accessories and parts.",
      image: "/car%20accessory.png",
      demo: "https://lnkd.in/gtVin_95",
      category: "E-commerce",
    },
    {
      id: 2,
      title: "KrishiKutumb",
      description: "A digital platform empowering the farming community with tools and connectivity.",
      image: "/k2.png",
      demo: "https://krishikutumb.com",
      category: "Web",
    },
    {
      id: 3,
      title: "Laptop Secure",
      description: "A platform to sell old laptops safely, efficiently, and at the best prices.",
      image: "/l.png",
      demo: "https://laptopsecure.in/",
      category: "E-commerce",
    },
    {
      id: 4,
      title: "E-Commerce Platform",
      description: "Headless commerce with product catalog, checkout, and Stripe payments.",
      image: "/ecoomerce.png",
      demo: "#",
      category: "E-commerce",
    },
    {
      id: 5,
      title: "Realtime Chat",
      description: "WebSockets-based chat with presence, typing indicators and file sharing.",
      image: "/chat.png",
      demo: "#",
      category: "Web",
    },
    {
      id: 6,
      title: "Typing Tutor",
      description: "Interactive typing app with WPM tracking, accuracy and practice modes.",
      image: "/typing.png",
      demo: "#",
      category: "Web",
    },
  ];

  const filters = ["All", "Web", "Mobile", "E-commerce", "Corporate"];
  const [active, setActive] = React.useState("All");

  const filteredProjects =
    active === "All" ? projects : projects.filter((p) => p.category === active);

  return (
    <>
      <SEOHead
        title="Client Work & Projects | DevSphere Solutions"
        description="Explore DevSphere Solutions’ portfolio — SaaS, e-commerce, platforms and more."
        url={`${base}/project`}
        canonical={`${base}/project`}
        image={`${base}/logo.png`}
      />

      {/* Animated Background */}
      <div className="relative min-h-screen overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-950" />
        <motion.div
          className="absolute inset-0 opacity-30"
          animate={{
            backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
          style={{
            backgroundImage: "linear-gradient(270deg,#3b82f6,#8b5cf6,#ec4899)",
            backgroundSize: "600% 600%",
          }}
        />

        <div className="relative z-10 max-w-7xl mx-auto px-6 py-20">
          {/* Hero Heading */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-center mb-14"
          >
            <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-6">
              Our <span className="text-blue-400">Projects</span>
            </h1>
            <p className="text-gray-300 max-w-2xl mx-auto">
              A showcase of digital experiences crafted with{" "}
              <span className="text-purple-400 font-semibold">innovation</span>{" "}
              and <span className="text-pink-400 font-semibold">precision</span>.
            </p>
          </motion.div>

          {/* Filters */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="flex justify-center gap-3 mb-16 flex-wrap"
          >
            {filters.map((f) => (
              <motion.button
                key={f}
                onClick={() => setActive(f)}
                whileTap={{ scale: 0.95 }}
                whileHover={{ scale: 1.05 }}
                className={`px-6 py-2.5 rounded-full text-sm font-medium transition ${
                  active === f
                    ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg"
                    : "bg-white/10 text-gray-300 hover:bg-white/20"
                }`}
              >
                {f}
              </motion.button>
            ))}
          </motion.div>

          {/* Projects Grid */}
          <motion.div
            className="grid gap-10 md:grid-cols-2 lg:grid-cols-3"
            initial="hidden"
            animate="show"
            variants={{
              hidden: {},
              show: {
                transition: { staggerChildren: 0.15 },
              },
            }}
          >
            {filteredProjects.map((project) => (
              <motion.a
                key={project.id}
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  show: { opacity: 1, y: 0 },
                }}
                whileHover={{ scale: 1.03 }}
                className="group block rounded-3xl overflow-hidden relative bg-white/5 border border-white/10 backdrop-blur-xl shadow-2xl transform-gpu"
              >
                {/* Image */}
                <div className="overflow-hidden h-56">
                  <motion.img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
                    initial={{ scale: 1.2, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.8 }}
                  />
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-2xl font-semibold text-white mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {/* Hover Overlay */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-blue-600/70 to-purple-600/70 opacity-0 group-hover:opacity-100 flex items-center justify-center"
                  transition={{ duration: 0.4 }}
                >
                  <span className="px-5 py-2 rounded-full bg-white/20 text-white font-semibold backdrop-blur-md">
                    View Project
                  </span>
                </motion.div>
              </motion.a>
            ))}
          </motion.div>
        </div>
      </div>
    </>
  );
}
