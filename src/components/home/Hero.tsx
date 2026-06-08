"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Code2, Database, LayoutDashboard } from "lucide-react";
import { Button } from "@/components/ui/button";
import AnimatedBackground from "@/components/animations/AnimatedBackground";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-20">
      <AnimatedBackground />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-block px-4 py-1.5 rounded-full glass text-sm text-primary mb-6"
            >
              Full-Stack Development Agency
            </motion.span>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight tracking-tight mb-6">
              We Build Scalable Digital Products That{" "}
              <span className="text-gradient">Help Businesses Grow</span>
            </h1>

            <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto lg:mx-0 mb-8 leading-relaxed">
              Full-stack development, websites, SaaS platforms, mobile apps, admin panels,
              AI integrations, automation, and cloud deployment for India, Dubai, Oman & global markets.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link href="/projects">
                <Button variant="hero" size="lg" className="w-full sm:w-auto text-lg px-8 py-6 h-auto group">
                  View Projects
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link href="/contact">
                <Button variant="glass" size="lg" className="w-full sm:w-auto text-lg px-8 py-6 h-auto group">
                  Start a Project
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative hidden lg:block"
          >
            <div className="relative">
              <motion.div
                className="glass rounded-2xl p-6 border border-primary/20 shadow-2xl"
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              >
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-3 h-3 rounded-full bg-red-500" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500" />
                  <div className="w-3 h-3 rounded-full bg-green-500" />
                  <span className="ml-2 text-xs text-muted-foreground">dashboard.tsx</span>
                </div>
                <pre className="text-xs sm:text-sm text-primary/80 font-mono leading-relaxed">
{`const buildProduct = async () => {
  await design("UI/UX");
  await develop("Full-Stack");
  await deploy("Cloud");
  return "Production Ready ✓";
};`}
                </pre>
              </motion.div>

              <motion.div
                className="absolute -top-6 -right-6 glass rounded-xl p-4 border border-primary/30"
                animate={{ y: [0, -12, 0], rotate: [0, 2, 0] }}
                transition={{ duration: 6, repeat: Infinity, delay: 1 }}
              >
                <LayoutDashboard className="w-8 h-8 text-primary" />
              </motion.div>
              <motion.div
                className="absolute -bottom-4 -left-6 glass rounded-xl p-4 border border-accent/30"
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 7, repeat: Infinity, delay: 2 }}
              >
                <Database className="w-8 h-8 text-accent" />
              </motion.div>
              <motion.div
                className="absolute top-1/2 -right-10 glass rounded-xl p-3 border border-primary/20"
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
              >
                <Code2 className="w-6 h-6 text-primary" />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
