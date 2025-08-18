"use client";
import React from "react";
import { motion } from "framer-motion";

export default function Projects() {
  const projects = [
    {
      id: 1,
      title: "MZTechnicals",
      description:
        "A sleek, user‑friendly and performance‑driven company website built for growth.",
      image: "/mz.jpeg",
      demo: "https://mztechnicals.com",
    },
    {
      id: 2,
      title: "KrishiKutumb",
      description:
        "A digital platform that empowers the farming community with knowledge, tools and connectivity.",
      image: "/k2.png",
      demo: "https://krishikutumb.com",
    },
    {
      id: 3,
      title: "E‑Commerce Platform",
      description:
        "Headless commerce with product catalog, checkout, and Stripe payments.",
   
        image:
"/ecoomerce.png",
        demo: "#",
    },
    {
      id: 4,
      title: "Realtime Chat",
      description:
        "WebSockets-based chat with presence, typing indicators and file sharing.",
      image: "/chat.png",
      demo: "#",
    },
    {
      id: 5,
      title: "Typing Tutor",
      description:
        "Interactive typing app with WPM tracking, accuracy and practice modes.",
      image: "/typing.png",
      demo: "#",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3 }}>
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
            My Projects
          </h2>
          <p className="text-gray-600 text-center mb-12">
            Here are some of the projects I’ve worked on recently.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <motion.a
              key={project.id}
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition duration-300"
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.35 }}
              whileHover={{ y: -6 }}
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6 flex flex-col justify-between h-48">

                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 text-sm">
                  {project.description}
                </p>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </div>
  );
}
