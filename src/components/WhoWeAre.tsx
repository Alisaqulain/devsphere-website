"use client";

import { motion } from "framer-motion";
import { Building2, Globe, Target, Award } from "lucide-react";
import intern from "@/assets/h.png";

export default function WhoWeAre() {
  const values = [
    { 
      icon: <Building2 className="w-6 h-6 text-white" />, 
      title: "Established Organization", 
      desc: "A structured, professional company with proven processes and enterprise-grade capabilities.", 
      gradient: "from-primary to-tech-violet" 
    },
    { 
      icon: <Globe className="w-6 h-6 text-white" />, 
      title: "Global Presence", 
      desc: "Serving businesses across 15+ countries with deep understanding of international markets.", 
      gradient: "from-accent to-cyber-pink" 
    },
    { 
      icon: <Target className="w-6 h-6 text-white" />, 
      title: "Results-Driven", 
      desc: "Every project is measured by business impact, ROI, and long-term value creation.", 
      gradient: "from-electric-blue to-primary" 
    },
    { 
      icon: <Award className="w-6 h-6 text-white" />, 
      title: "Proven Excellence", 
      desc: "200+ successful projects delivered with consistent quality and client satisfaction.", 
      gradient: "from-electric-blue to-primary" 
    },
  ];

  // Parent animation variants for stagger
  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.2 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section className="relative bg-gradient-to-r from-primary/5 to-accent/5 py-16 sm:py-20 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
        {/* Left: Illustration */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex justify-center mb-8 md:mb-0"
        >
          <img
            src={intern}
            alt="Global business transformation and digital excellence"
            className="w-full max-w-md md:max-w-lg rounded-2xl shadow-2xl"
          />
        </motion.div>

        {/* Right: Content */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={containerVariants}
          viewport={{ once: true }}
          className="text-white"
        >
          <motion.h2
            variants={itemVariants}
            className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl font-extrabold mb-6 sm:mb-8"
          >
            About
            <span className="text-gradient"> DevsSphere Solutions</span>
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="mb-6 sm:mb-8 text-lg sm:text-xl leading-relaxed text-muted-foreground"
          >
            DevsSphere Solutions is a globally recognized digital agency trusted by businesses 
            across industries and regions. We combine strategic thinking, technical excellence, 
            and unwavering commitment to deliver solutions that drive measurable business growth.
          </motion.p>

          <motion.p
            variants={itemVariants}
            className="mb-8 sm:mb-10 text-lg sm:text-xl leading-relaxed text-muted-foreground"
          >
            Our vision is to be the world's most trusted digital transformation partner — 
            helping enterprises scale, innovate, and achieve sustainable competitive advantage 
            through technology excellence.
          </motion.p>

          <motion.div
            variants={containerVariants}
            className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6"
          >
            {values.map((item, i) => (
              <motion.div
                key={i}
                variants={itemVariants}
                whileHover={{ scale: 1.03, y: -3 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="flex items-start space-x-3 p-4 sm:p-5 rounded-xl cursor-pointer glass border border-primary/20 hover:border-primary/40 transition-all"
              >
                <div
                  className={`w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-gradient-to-r ${item.gradient} flex items-center justify-center flex-shrink-0`}
                >
                  {item.icon}
                </div>
                <div>
                  <h4 className="text-base sm:text-lg font-bold text-foreground mb-1">{item.title}</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
