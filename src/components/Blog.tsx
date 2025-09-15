"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Search } from "lucide-react";
import Navbar from "./Navbar";
import Footer from "./Footer";

const blogs = [
  {
    title: "Building Future-Ready Digital Solutions",
    desc: "How businesses can scale with modern web and app technologies.",
    img: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80",
    category: "Digital",
    author: "DevSphere Team",
    date: "Sep 10, 2025",
  },
  {
    title: "From Idea to MVP: A Founder's Guide",
    desc: "Practical steps to validate your startup idea and launch faster.",
    img: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80",
    category: "Startups",
    author: "DevSphere Team",
    date: "Sep 6, 2025",
  },
  {
    title: "Why Performance Matters in Web Development",
    desc: "Optimizing speed and scalability for a seamless user experience.",
    img: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&w=800&q=80",
    category: "Web Dev",
    author: "DevSphere Team",
    date: "Aug 30, 2025",
  },
  {
    title: "CI/CD for Startups: Ship Faster, Smarter",
    desc: "Leverage DevOps pipelines to deliver high-quality features quickly.",
    img: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80",
    category: "DevOps",
    author: "DevSphere Team",
    date: "Aug 22, 2025",
  },
  {
    title: "Design Systems That Scale Across Products",
    desc: "Maintain consistency and accelerate development with reusable design patterns.",
    img: "https://www.devspheresolutions.in/Design%20Systems%20That%20Scale%20Across%20Products.jpeg",
    category: "Design",
    author: "DevSphere Team",
    date: "Aug 15, 2025",
  },
];

const categories = ["All", "Digital", "Startups", "Web Dev", "DevOps", "Design"];

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  // Filtering logic
  const filteredBlogs = blogs.filter((blog) => {
    const matchesCategory =
      activeCategory === "All" || blog.category === activeCategory;
    const matchesSearch =
      blog.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      blog.desc.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <>
      <Navbar />
      <section className="relative py-20 md:mx-12 bg-[#0B0F19] text-white">
        <div className="max-w-7xl mx-auto px-6">
          {/* Heading */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
              Our{" "}
              <span className="bg-gradient-to-r from-violet-500 to-pink-500 bg-clip-text text-transparent">
                Blog
              </span>
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Insights, strategies, and stories to help you build future-ready
              products and scale your business.
            </p>
          </motion.div>

          {/* Search + Filters */}
            {/* Category Filters */}
            <div className="flex flex-wrap justify-center items-center gap-3 mb-12">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-5 py-2 rounded-full text-sm font-medium transition ${
                    activeCategory === cat
                      ? "bg-gradient-to-r from-violet-500 to-pink-500 text-white shadow-lg"
                      : "bg-white/5 text-gray-300 hover:bg-white/10"
                  }`}
                >
                  {cat}
                </button>
              ))}
          </div>

          {/* Grid */}
          {filteredBlogs.length > 0 ? (
            <motion.div
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-10"
              initial="hidden"
              whileInView="visible"
              variants={{
                hidden: {},
                visible: { transition: { staggerChildren: 0.15 } },
              }}
              viewport={{ once: true }}
            >
              {filteredBlogs.map((blog, index) => (
                <motion.div
                  key={index}
                  variants={{
                    hidden: { opacity: 0, y: 40 },
                    visible: { opacity: 1, y: 0 },
                  }}
                  whileHover={{ y: -8, scale: 1.03, rotate: 0.3 }}
                  transition={{ duration: 0.4 }}
                  className="group relative rounded-2xl overflow-hidden shadow-lg bg-white/10 backdrop-blur-xl border border-white/10 hover:border-violet-400/40 transition"
                >
                  {/* Image */}
                  <div className="relative overflow-hidden">
                    <img
                      src={blog.img}
                      alt={blog.title}
                      className="h-56 w-full object-cover group-hover:scale-110 transition duration-500"
                    />
                    {/* Category Badge */}
                    <span className="absolute top-4 left-4 bg-gradient-to-r from-violet-500 to-pink-500 text-xs font-semibold px-3 py-1 rounded-full">
                      {blog.category}
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2 group-hover:text-violet-400 transition">
                      {blog.title}
                    </h3>
                    <p className="text-gray-300 text-sm leading-relaxed mb-4 line-clamp-3">
                      {blog.desc}
                    </p>

                    {/* Author & Date */}
                    <div className="flex items-center text-xs text-gray-400 mb-4">
                      <span>{blog.author}</span>
                      <span className="mx-2">•</span>
                      <span>{blog.date}</span>
                    </div>

                    {/* Read More */}
                    <motion.a
                      whileHover={{ x: 6 }}
                      href="#"
                      className="inline-flex items-center text-sm font-semibold bg-gradient-to-r from-violet-500 to-pink-500 px-4 py-2 rounded-full shadow-md hover:shadow-pink-500/40 transition"
                    >
                      Read more <ArrowRight className="ml-2 w-4 h-4" />
                    </motion.a>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          ) : (
            <p className="text-center text-gray-400 text-lg">
              No blogs found matching your search.
            </p>
          )}
        </div>
      </section>
      <Footer />
    </>
  );
}