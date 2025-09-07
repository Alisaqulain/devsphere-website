"use client";
import React from "react";
import AnimatedSection from "../components/AnimatedSection";
import { motion } from "framer-motion";
import SEOHead, { buildFaqJsonLd } from "../components/SEOHead";
import {
  Code2,
  Smartphone,
  Boxes,
  PlugZap,
  Palette,
  CloudCog,
  ShieldCheck,
  LineChart,
} from "lucide-react";

export default function ServicesPage() {
  const base = "https://devspheresolutions.in";
  const services = [
    { title: "Custom Web Development", desc: "Next.js, React, Node. High-performance, SEO-first.", Icon: Code2 },
    { title: "Mobile App Development", desc: "React Native and Flutter for iOS/Android.", Icon: Smartphone },
    { title: "CRM Implementation", desc: "HubSpot, Zoho, Salesforce integrations and customizations.", Icon: Boxes },
    { title: "API & Integrations", desc: "REST/GraphQL APIs, secure 3rd-party integrations.", Icon: PlugZap },
    { title: "UI/UX Design", desc: "Accessible, conversion-focused design systems.", Icon: Palette },
    { title: "Cloud & DevOps", desc: "CI/CD, infra as code, observability.", Icon: CloudCog },
    { title: "Security & QA", desc: "Best practices, audits, automated testing.", Icon: ShieldCheck },
    { title: "Analytics & Growth", desc: "Product analytics, funnels, experiments.", Icon: LineChart },
  ];

  return (
    <>
      <SEOHead
        title="Services | DevSphere Solutions"
        description="Full-stack product engineering: Web, Mobile, CRM, APIs, Cloud, and Design."
        url={`${base}/services`}
        canonical={`${base}/services`}
        image={`${base}/logo.png`}
        jsonLd={[
          buildFaqJsonLd([
            { q: "Do you offer fixed-price MVPs?", a: "Yes. We scope and deliver MVPs in 6–10 weeks." },
            { q: "Do you work with startups?", a: "Yes. We work with seed to growth-stage companies and SMEs." },
          ]),
        ]}
      />

      {/* Dark Gradient Background to match contact */}
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black">
        <div className="relative z-10">
          {/* Hero Section */}
          <section className="px-6 pt-20 pb-12 max-w-6xl mx-auto text-center">
            <AnimatedSection>
              <motion.h1
                className="text-4xl md:text-5xl font-bold text-white"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                Our Services
              </motion.h1>
              <motion.p
                className="mt-4 text-gray-300 max-w-2xl mx-auto"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.6 }}
              >
                End-to-end product engineering to design, build and scale modern software.
              </motion.p>
            </AnimatedSection>
          </section>

          {/* Services Grid */}
          <section className="px-6 pb-20 max-w-6xl mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {services.map((s, i) => (
                <AnimatedSection key={s.title} from={i % 2 === 0 ? "left" : "right"}>
                  <motion.div
                    className="p-6 bg-white/10 backdrop-blur-md border border-white/10 rounded-2xl shadow hover:shadow-2xl transition group h-full"
                    whileHover={{ y: -6, scale: 1.03 }}
                  >
                    <div className="flex items-start gap-4">
                      <div className="rounded-lg bg-gradient-to-r from-blue-500 to-indigo-600 text-white p-3 shrink-0 shadow-md">
                        <s.Icon className="w-6 h-6" />
                      </div>
                      <div className="text-left">
                        <h3 className="font-semibold text-white">{s.title}</h3>
                        <p className="text-gray-300 text-sm mt-2">{s.desc}</p>
                      </div>
                    </div>
                  </motion.div>
                </AnimatedSection>
              ))}
            </div>
          </section>

          {/* Process Section */}
          <section className="bg-white/5 backdrop-blur-md border-t border-white/10 py-20 px-6">
            <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10">
              {["Discovery & Strategy", "Design & Engineering"].map((title, idx) => (
                <AnimatedSection key={idx} from={idx % 2 === 0 ? "left" : "right"}>
                  <motion.div
                    className="p-8 bg-white/10 border border-white/10 rounded-2xl shadow-md hover:shadow-xl transition"
                    whileHover={{ scale: 1.02 }}
                  >
                    <h3 className="text-xl font-semibold text-white">{title}</h3>
                    <p className="text-gray-300 mt-3 leading-relaxed">
                      We collaborate closely, define measurable outcomes and iterate in short cycles
                      to reduce risk and accelerate value.
                    </p>
                  </motion.div>
                </AnimatedSection>
              ))}
            </div>
          </section>

          {/* CTA */}
          <section className="text-center py-20 px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="max-w-3xl mx-auto bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-2xl shadow-lg p-10"
            >
              <h2 className="text-3xl font-bold mb-4">Let’s Build Together</h2>
              <p className="mb-6 text-lg">
                Whether you’re a startup or enterprise, we help you design, build, and scale your digital products.
              </p>
              <a
                href="/contact"
                className="inline-block bg-white text-black font-semibold px-6 py-3 rounded-xl shadow hover:bg-gray-100 transition"
             style={{color:"black"}}
             >
                Contact Us
              </a>
            </motion.div>
          </section>
        </div>
      </div>

      {/* Tailwind Animations */}
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
