"use client";

import { motion } from "framer-motion";
import { Rocket, Globe, Lightbulb, Wrench } from "lucide-react";
import intern from "@/assets/h.png";

export default function WhoWeAre() {
  const features = [
    { icon: <Rocket className="w-6 h-6 text-white" />, title: "5+ Years", desc: "Proven experience in software delivery.", gradient: "from-primary to-tech-violet" },
    { icon: <Globe className="w-6 h-6 text-white" />, title: "Global Reach", desc: "Serving clients across multiple countries.", gradient: "from-accent to-cyber-pink" },
    { icon: <Lightbulb className="w-6 h-6 text-white" />, title: "Agile Process", desc: "Transparent, efficient & collaborative.", gradient: "from-electric-blue to-primary" },
    { icon: <Wrench className="w-6 h-6 text-white" />, title: "Tech Expertise", desc: "Web, Mobile, Cloud & CRM solutions.", gradient: "from-electric-blue to-primary" },
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
    <section className="relative bg-gradient-to-r from-primary/5 to-accent/5 py-10 sm:py-14 md:py-16">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
        {/* Left: Illustration */}
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex justify-center mb-8 md:mb-0"
        >
          <img
            src={intern}
            alt="Team Collaboration Illustration"
            className="w-4/5 xs:w-3/4 sm:w-2/3 md:w-full max-w-xs sm:max-w-md md:max-w-lg rounded-xl shadow-2xl"
          />
        </motion.div>

        {/* Right: Text */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={containerVariants}
          viewport={{ once: true }}
          className="text-white"
        >
          <motion.h2
            variants={itemVariants}
            className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4"
          >
            Who <span className="text-gradient">We Are</span>
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="mb-6 sm:mb-8 text-base sm:text-lg leading-relaxed text-muted-foreground"
          >
            At <span className="font-semibold">DevSphere Solutions</span>, we
            are a team of passionate developers, designers, and strategists
            dedicated to building scalable digital products. Our mission is to
            empower startups and enterprises with innovative, user-centric
            solutions.
          </motion.p>

          <motion.div
            variants={containerVariants}
            className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6"
          >
            {features.map((item, i) => (
              <motion.div
                key={i}
                variants={itemVariants}
                whileHover={{ scale: 1.05, y: -3 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="flex items-start space-x-3 p-3 sm:p-4 rounded-xl cursor-pointer bg-white/5 backdrop-blur-sm"
              >
                <div
                  className={`w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-r ${item.gradient} flex items-center justify-center`}
                >
                  {item.icon}
                </div>
                <div>
                  <h4 className="text-base sm:text-lg font-semibold text-foreground">{item.title}</h4>
                  <p className="text-xs sm:text-sm text-muted-foreground">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
