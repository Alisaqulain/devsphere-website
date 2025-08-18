// src/components/Projects.jsx
import React from "react";

export default function Projects() {
  const projects = [
    {
      id: 1,
      title: "Portfolio Website",
      description:
        "A personal portfolio website built with React and Tailwind CSS showcasing my work and skills.",
      image:
        "https://source.unsplash.com/600x400/?website,portfolio", // Replace with your image
      demo: "#",
      code: "#",
    },
    {
      id: 2,
      title: "E-Commerce App",
      description:
        "A full-stack e-commerce web app with product listings, cart, and payment integration.",
      image: "https://source.unsplash.com/600x400/?ecommerce,shopping",
      demo: "#",
      code: "#",
    },
    {
      id: 3,
      title: "Chat Application",
      description:
        "A real-time chat app using React, Node.js, and Socket.io with authentication features.",
      image: "https://source.unsplash.com/600x400/?chat,app",
      demo: "#",
      code: "#",
    },
    {
      id: 4,
      title: "Typing Tutor",
      description:
        "An interactive typing tutor app with real-time WPM tracking and accuracy stats.",
      image: "https://source.unsplash.com/600x400/?typing,keyboard",
      demo: "#",
      code: "#",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
          My Projects
        </h2>
        <p className="text-gray-600 text-center mb-12">
          Here are some of the projects I’ve worked on recently.
        </p>

        {/* Projects Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition duration-300"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6 flex flex-col justify-between h-60">
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">
                    {project.description}
                  </p>
                </div>
                <div className="flex gap-4 mt-auto">
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-blue-600 text-white px-4 py-2 rounded-xl text-sm hover:bg-blue-700 transition"
                  >
                    Live Demo
                  </a>
                  <a
                    href={project.code}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gray-200 text-gray-800 px-4 py-2 rounded-xl text-sm hover:bg-gray-300 transition"
                  >
                    Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
