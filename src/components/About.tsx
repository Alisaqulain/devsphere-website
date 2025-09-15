"use client";

import React, { useRef, useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";
import {
  Target,
  Eye,
  Clock,
  Users,
  Award,
  Zap,
  Lightbulb,
  Rocket,
  Globe,
} from "lucide-react";
import { Link } from "react-router-dom";
import heroImg from "@/assets/h.png";
import Navbar from "./Navbar";
import Footer from "./Footer";

/* -------------------------
  Counter Animation
--------------------------*/
function Counter({ end, suffix = "", className = "" }: { end: number; suffix?: string; className?: string }) {
  const ref = useRef<HTMLDivElement | null>(null);
  const inView = useInView(ref, { once: true, margin: "-20% 0px" });
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const duration = 1500;
    let startTime: number | null = null;

    function step(timestamp: number) {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const current = Math.floor(progress * (end - start) + start);
      setValue(current);
      if (progress < 1) requestAnimationFrame(step);
      else setValue(end);
    }
    requestAnimationFrame(step);
  }, [inView, end]);

  return (
    <div ref={ref} className={className}>
      <p className="text-3xl md:text-4xl font-bold text-primary drop-shadow-[2px_2px_4px_rgba(0,0,0,0.2)]">
        {value}
        {suffix}
      </p>
    </div>
  );
}

/* -------------------------
  Animation Variants
--------------------------*/
const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.6 },
  }),
};

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.14 } },
};

/* -------------------------
  About Page - 3D
--------------------------*/
export default function AboutPage3D() {
  const timeline = [
    { year: "2025", title: "Founded DevSphere", text: "Started our journey to craft world-class digital products.", icon: Rocket },
    { year: "2026", title: "First Global Clients", text: "Delivered impactful websites, mobile apps, and CRM solutions worldwide.", icon: Globe },
    { year: "2027", title: "Scaling Fast", text: "Expanded the team and successfully launched 30+ projects.", icon: Lightbulb },
    { year: "2028", title: "Shaping the Future", text: "Becoming a trusted partner for enterprises & startups globally.", icon: Award },
  ];

  const metrics = [
    { value: 50, suffix: "+", label: "Projects Delivered" },
    { value: 20, suffix: "+", label: "Happy Clients" },
    { value: 10, suffix: "+", label: "Products Launched" },
    { value: 5, suffix: "+", label: "Years Experience" },
  ];

  return (
    <main className="bg-background text-foreground">
      <Navbar />

      {/* HERO */}
      <section className="py-20 sm:py-12 text-center mt-12 perspective-[1000px]">
        <div className="mx-auto px-6 flex flex-col items-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={container}>
            <motion.h1 variants={fadeUp} className="text-4xl md:text-5xl font-extrabold leading-tight mb-4 drop-shadow-[3px_3px_6px_rgba(0,0,0,0.2)]">
              About <span className="text-gradient">DevSphere Solutions</span>
            </motion.h1>

            <motion.p variants={fadeUp} className="text-lg text-muted-foreground mb-6 max-w-2xl drop-shadow-[1px_1px_2px_rgba(0,0,0,0.1)]">
              We are a <span className="font-semibold">product engineering studio</span> founded in 2025. At DevSphere, we build scalable digital products — websites, mobile apps, and CRM solutions — designed to automate workflows, elevate customer experiences, and fuel business growth.
            </motion.p>

            <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" className="inline-block bg-primary text-white font-semibold px-5 py-3 rounded-xl shadow-[0_12px_20px_rgba(0,0,0,0.4)] hover:shadow-[0_5px_15px_rgba(0,0,0,0.5)] transition-transform transform hover:-translate-y-1">
                Start a Project
              </Link>
              <a href="#journey" className="inline-block text-primary ring-1 ring-primary/20 px-5 py-3 rounded-xl hover:bg-primary/5 transition">
                Our Journey
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* MISSION & VISION */}
      <section className="py-14 bg-gradient-to-r from-primary/5 to-accent/5 perspective-[1000px]">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-8">
          {/* Mission Card */}
          <motion.article variants={container} initial="hidden" whileInView="visible" viewport={{ once: true }}
            className="glass rounded-2xl p-8 border border-primary/20 shadow-[0_10px_30px_rgba(0,0,0,0.25)] hover:shadow-[0_5px_15px_rgba(0,0,0,0.35)] transition-transform transform hover:-translate-y-2 hover:rotate-y-2 hover:rotate-x-1"
          >
            <motion.div variants={fadeUp} className="flex items-center gap-4 mb-4">
              <Target className="w-10 h-10 text-primary" />
              <h3 className="text-2xl font-bold">Our Mission</h3>
            </motion.div>
            <motion.p variants={fadeUp} className="text-muted-foreground leading-relaxed">
              To empower businesses with digital products that remove friction, unlock efficiency, and accelerate growth. We put people first — designing intuitive interfaces, building reliable architectures, and ensuring every solution delivers measurable business value.
            </motion.p>
          </motion.article>

          {/* Vision Card */}
          <motion.article variants={container} initial="hidden" whileInView="visible" viewport={{ once: true }}
            className="glass rounded-2xl p-8 border border-primary/20 shadow-[0_10px_30px_rgba(0,0,0,0.25)] hover:shadow-[0_5px_15px_rgba(0,0,0,0.35)] transition-transform transform hover:-translate-y-2 hover:rotate-y-2 hover:rotate-x-1"
          >
            <motion.div variants={fadeUp} className="flex items-center gap-4 mb-4">
              <Eye className="w-10 h-10 text-accent" />
              <h3 className="text-2xl font-bold">Our Vision</h3>
            </motion.div>
            <motion.p variants={fadeUp} className="text-muted-foreground leading-relaxed">
              To become a globally recognized engineering partner, driving digital transformation for startups and enterprises, while setting new benchmarks in quality, innovation, and customer success.
            </motion.p>
          </motion.article>
        </div>
      </section>

      {/* JOURNEY */}
      <section id="journey" className="relative py-24 bg-gradient-to-b from-background via-background/80 to-primary/5 perspective-[1000px]">
        <div className="max-w-6xl mx-auto px-6">
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}
            className="text-4xl md:text-5xl font-extrabold text-center mb-20 drop-shadow-[2px_2px_6px_rgba(0,0,0,0.2)]">
            Our <span className="text-gradient">Journey</span>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mt-3">From 2025 to the Future</p>
          </motion.h2>

          {/* Timeline */}
          <div className="relative">
            <div className="absolute left-1/2 top-0 bottom-0 w-1 -translate-x-1/2 bg-gradient-to-b from-pink-500 via-purple-500 to-indigo-500 rounded-full shadow-[0_0_25px_rgba(236,72,153,0.6)]"></div>
            <div className="space-y-20">
              {timeline.map((t, i) => {
                const Icon = t.icon;
                const isLeft = i % 2 === 0;
                return (
                  <motion.div key={t.year} initial={{ opacity: 0, x: isLeft ? -100 : 100 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: i * 0.15 }} viewport={{ once: true }}
                    className={`relative flex items-center ${isLeft ? "justify-start" : "justify-end"} perspective-[1000px]`}
                  >
                    <div className={`w-full md:w-[46%] glass rounded-2xl p-8 border border-primary/10 shadow-[0_10px_30px_rgba(0,0,0,0.25)] hover:shadow-[0_5px_15px_rgba(0,0,0,0.35)] transition-transform transform hover:-translate-y-2 hover:rotate-y-3 hover:rotate-x-2 ${isLeft ? "mr-14" : "ml-14"}`}>
                      <p className="text-sm font-semibold text-pink-500 mb-2 tracking-wide">{t.year}</p>
                      <h4 className="text-xl font-bold mb-3">{t.title}</h4>
                      <p className="text-muted-foreground leading-relaxed">{t.text}</p>
                    </div>

                    {/* Glowing Ring */}
                    <div className="absolute left-1/2 -translate-x-1/2 flex items-center justify-center">
                      <div className="w-16 h-16 rounded-full bg-white border-4 border-pink-400/60 flex items-center justify-center shadow-[0_0_25px_rgba(236,72,153,0.5)]">
                        <div className="w-12 h-12 rounded-full bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 flex items-center justify-center text-white animate-pulse">
                          <Icon className="w-6 h-6" />
                        </div>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* METRICS */}
      <section className="py-16 bg-gradient-to-b from-primary/5 to-background perspective-[1000px]">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={container} className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {metrics.map((m, i) => (
              <motion.div key={m.label} variants={fadeUp} custom={i} className="glass rounded-xl p-6 text-center border border-primary/10 shadow-[0_10px_20px_rgba(0,0,0,0.25)] hover:shadow-[0_5px_15px_rgba(0,0,0,0.35)] transition-transform transform hover:-translate-y-2">
                <Counter end={m.value} suffix={m.suffix} className="mb-2" />
                <p className="text-sm text-muted-foreground">{m.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* TEAM PHILOSOPHY */}
      <section className="py-20 bg-gradient-to-r from-accent/5 to-primary/5 perspective-[1000px]">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }} className="text-3xl md:text-4xl font-bold mb-6 drop-shadow-[2px_2px_6px_rgba(0,0,0,0.2)]">
            Our Culture & Philosophy
          </motion.h2>
          <motion.p initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }} viewport={{ once: true }} className="text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto">
            At DevSphere, culture drives everything we do. We believe in collaboration, continuous learning, and a bias towards action. Every idea matters, and every project is an opportunity to innovate, grow, and leave a lasting impact.
          </motion.p>
        </div>
      </section>

      <Footer />
    </main>
  )
}
    