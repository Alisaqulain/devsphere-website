"use client";
import React from "react";
import AnimatedSection from "../components/AnimatedSection";
import { motion } from "framer-motion";
import SEOHead from "../components/SEOHead";

const CASES = [
  {
    title: "FinEdge — Secure Fintech Platform",
    impact: "SOC2-aligned practices, fraud events down 60%",
    img: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40",
  },
  {
    title: "HealthPlus — Telemedicine at Scale",
    impact: "5x throughput with autoscaling and observability",
    img: "https://images.unsplash.com/photo-1584438784894-089d6a62b8fa",
  },
  {
    title: "EduSphere — Scalable Learning Platform",
    impact: "Handled 50k+ concurrent students, latency reduced by 40%",
    img: "https://images.unsplash.com/photo-1523580494863-6f3031224c94",
  },
  {
    title: "RetailX — Omnichannel Commerce",
    impact: "Checkout conversion +12%, inventory sync in real-time",
    img: "/RetailX — Omnichannel Commerce.png",
  },
  {
    title: "AgroIQ — Smart Farming",
    impact: "IoT sensor mesh, crop yield +18% using analytics",
    img: "https://images.unsplash.com/photo-1464226184884-fa280b87c399",
  },
  {
    title: "LogistiCo — Route Optimization",
    impact: "Delivery SLA improved 22%, cost per drop -15%",
    img: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957",
  },
];

export default function CaseStudiesPage() {
  const base = "https://devspheresolutions.in";
  return (
    <>
      <SEOHead
        title="Case Studies | DevSphere Solutions"
        description="Real outcomes from product design, engineering and growth."
        url={`${base}/case-studies`}
        canonical={`${base}/case-studies`}
        image={`${base}/logo.png`}
      />

      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black">
        {/* Hero Section */}
        <section className="px-6 pt-20 pb-8 max-w-6xl mx-auto text-center">
          <AnimatedSection>
            <h1 className="text-4xl md:text-5xl font-bold text-white">Case Studies</h1>
            <p className="mt-4 text-gray-300 max-w-2xl mx-auto">
              Selected projects that demonstrate how we ship business impact.
            </p>
          </AnimatedSection>
        </section>

        {/* Case Studies Grid */}
        <section className="px-6 pb-20 max-w-6xl mx-auto">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {CASES.map((c, i) => (
              <AnimatedSection key={c.title} from={i % 2 === 0 ? "left" : "right"}>
                <motion.div
                  className="bg-white/10 backdrop-blur-md border border-white/10 rounded-2xl shadow hover:shadow-2xl overflow-hidden"
                  whileHover={{ y: -6 }}
                >
                  <div className="overflow-hidden">
                    <motion.img
                      src={c.img}
                      alt={c.title}
                      className="w-full h-44 object-cover transition-transform duration-300 group-hover:scale-105"
                      whileHover={{ scale: 1.02 }}
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="font-semibold text-white">{c.title}</h3>
                    <p className="text-gray-300 text-sm mt-2">{c.impact}</p>
                  </div>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </section>
      </div>
    </>
  );
}
