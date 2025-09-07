"use client";
import React from "react";
import AnimatedSection from "../components/AnimatedSection";
import { motion } from "framer-motion";
import SEOHead from "../components/SEOHead";

const POSTS = [
  { 
    title: "Building Future-Ready Digital Solutions", 
    img: "/Building Future-Ready Digital Solutions.jpeg",
    desc: "How businesses can scale with modern web and app technologies."
  },
  { 
    title: "From Idea to MVP: A Founder’s Guide", 
    img: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f",
    desc: "Practical steps to validate your startup idea and launch faster."
  },
  { 
    title: "Why Performance Matters in Web Development", 
    img: "Why Performance Matters in Web Development.jpeg",
    desc: "Optimizing speed and scalability for a seamless user experience."
  },
  { 
    title: "CI/CD for Startups: Ship Faster, Smarter", 
    img: "/download.jpeg",
    desc: "Leverage DevOps pipelines to deliver high-quality features quickly."
  },
  { 
    title: "Design Systems That Scale Across Products", 
    img: "Design Systems That Scale Across Products.jpeg",
    desc: "Maintain consistency and accelerate development with reusable design patterns."
  },
  
];

export default function BlogPage() {
  const base = "https://devspheresolutions.in";
  return (
    <>
      <SEOHead
        title="Blog | DevSphere Solutions"
        description="Insights on startups, technology, product design, and growth from DevSphere Solutions."
        url={`${base}/blog`}
        canonical={`${base}/blog`}
        image={`${base}/logo.png`}
      />

      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black">
        <section className="px-6 pt-20 pb-8 max-w-6xl mx-auto text-center">
          <AnimatedSection>
            <h1 className="text-4xl md:text-5xl font-bold text-white">Blog</h1>
            <p className="mt-4 text-gray-300 max-w-2xl mx-auto">
              Insights, strategies, and stories to help you build future-ready products and scale your business.
            </p>
          </AnimatedSection>
        </section>

        <section className="px-6 pb-20 max-w-6xl mx-auto">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {POSTS.map((p, i) => (
              <AnimatedSection key={p.title} from={i % 2 === 0 ? "left" : "right"}>
                <motion.article 
                  className="group bg-white/10 backdrop-blur-md border border-white/10 rounded-2xl shadow hover:shadow-2xl overflow-hidden" 
                  whileHover={{ y: -6 }}
                >
                  <div className="overflow-hidden">
                    <motion.img 
                      src={p.img} 
                      alt={p.title} 
                      className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105" 
                      whileHover={{ scale: 1.02 }} 
                    />
                  </div>
                  <div className="p-6 text-left">
                    <h3 className="font-semibold text-white text-lg">{p.title}</h3>
                    <p className="text-gray-400 text-sm mt-2">{p.desc}</p>
                    <p className="text-gray-300 text-sm mt-3">Read more →</p>
                  </div>
                </motion.article>
              </AnimatedSection>
            ))}
          </div>
        </section>
      </div>
    </>
  );
}
