"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import MagneticButton from "./MagneticButton";
import FloatingGradient from "./FloatingGradient";
import HeroDashboard from "./HeroDashboard";
import { fadeUp, staggerContainer, defaultTransition } from "@/lib/motion";

export default function AnimatedHero() {
  return (
    <section className="relative min-h-[92vh] flex items-center overflow-hidden">
      <FloatingGradient />

      <div className="container-wide relative z-10 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="text-center lg:text-left"
          >
            <motion.div variants={fadeUp} transition={defaultTransition}>
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card text-xs sm:text-sm font-medium text-primary border border-primary/25 mb-6">
                <Sparkles className="w-4 h-4" />
                Premium Software Development Agency
              </span>
            </motion.div>

            <motion.h1
              variants={fadeUp}
              transition={{ ...defaultTransition, delay: 0.05 }}
              className="text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-bold leading-[1.08] tracking-tight"
            >
              We Build{" "}
              <span className="text-gradient">Scalable Digital Products</span>{" "}
              That Help Businesses Grow
            </motion.h1>

            <motion.p
              variants={fadeUp}
              transition={{ ...defaultTransition, delay: 0.1 }}
              className="mt-6 text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto lg:mx-0 leading-relaxed"
            >
              Full-stack development, SaaS platforms, mobile apps, admin dashboards, AI integrations,
              and cloud deployment for India, Dubai, Oman & global markets.
            </motion.p>

            <motion.div
              variants={fadeUp}
              transition={{ ...defaultTransition, delay: 0.15 }}
              className="mt-10 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <MagneticButton href="/projects">View Projects</MagneticButton>
              <MagneticButton href="/contact" variant="outline">
                Start a Project
              </MagneticButton>
            </motion.div>

            <motion.div
              variants={fadeUp}
              transition={{ ...defaultTransition, delay: 0.2 }}
              className="mt-12 flex flex-wrap justify-center lg:justify-start gap-6 text-sm text-muted-foreground"
            >
              {["15+ Projects", "3+ Countries", "Production-Ready Code"].map((item) => (
                <span key={item} className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                  {item}
                </span>
              ))}
            </motion.div>
          </motion.div>

          <HeroDashboard />
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-16 text-center"
        >
          <Link href="/services" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors">
            Explore our services <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
