"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function CTA() {
  return (
    <section className="relative py-16 overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/70 via-accent/50 to-primary/90 opacity-90" />

      {/* Content */}
      <div className="relative max-w-5xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="glass rounded-3xl shadow-xl p-12 border border-white/10"
        >
          <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-6 leading-snug">
            Ready to <span className="text-gradient">Transform</span> Your Business?
          </h2>
          <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto mb-10">
            Partner with <span className="font-semibold text-white">DevSphere Solutions</span> 
            to build innovative, scalable, and user-focused digital products that drive growth.
          </p>

          {/* Button */}
          <motion.button
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.96 }}
            className="inline-flex items-center px-8 py-4 text-lg font-semibold rounded-2xl 
                       bg-white text-primary shadow-lg hover:shadow-primary/40 
                       transition-all duration-300"
          >
            Start Your Journey
            <ArrowRight className="ml-3 w-6 h-6" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
