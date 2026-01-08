"use client";

import { motion } from "framer-motion";
import { Target, Users, Globe, Award, Shield, TrendingUp } from "lucide-react";

export default function WhyChoose() {
  const advantages = [
    { 
      icon: Target, 
      title: "Strategic Thinking", 
      description: "We don't just build — we analyze your business objectives, market position, and growth opportunities to deliver solutions that create real competitive advantage." 
    },
    { 
      icon: Users, 
      title: "Long-Term Partnerships", 
      description: "Our relationships extend beyond project delivery. We become your trusted technology partner, supporting your growth journey with ongoing expertise and strategic guidance." 
    },
    { 
      icon: Globe, 
      title: "Global Mindset", 
      description: "With experience serving clients across 15+ countries, we understand international markets, cultural nuances, and the complexities of scaling businesses globally." 
    },
    { 
      icon: Award, 
      title: "Quality Obsession", 
      description: "Every solution is built to enterprise standards. We maintain rigorous quality controls, ensuring reliability, scalability, and performance that meets the highest international benchmarks." 
    },
    { 
      icon: Shield, 
      title: "Professional Execution", 
      description: "Transparent processes, clear communication, and disciplined project management ensure on-time delivery, budget adherence, and outcomes that exceed expectations." 
    },
    { 
      icon: TrendingUp, 
      title: "Transparent Process", 
      description: "From initial consultation through delivery and beyond, we maintain complete transparency. Regular updates, clear milestones, and honest communication at every step." 
    },
  ];

  return (
    <section className="relative py-16 sm:py-20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-12 sm:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-4">
            Why DevsSphere
            <span className="text-gradient"> Solutions</span>
          </h2>
          <p className="text-xl sm:text-2xl text-muted-foreground max-w-3xl mx-auto">
            The strategic advantages that make us the obvious choice for businesses seeking world-class digital transformation
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {advantages.map((advantage, index) => {
            const IconComponent = advantage.icon;
            return (
              <motion.div
                key={advantage.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="glass rounded-2xl p-6 sm:p-8 h-full transition-all duration-300 hover:border-primary/40 hover:scale-[1.02] hover:shadow-xl hover:shadow-primary/10 border border-primary/20">
                  <div className="w-14 h-14 mb-6 rounded-xl bg-gradient-to-r from-primary to-accent flex items-center justify-center text-white group-hover:scale-110 transition-transform">
                    <IconComponent size={28} aria-hidden="true" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold mb-4 text-foreground">{advantage.title}</h3>
                  <p className="text-base text-muted-foreground leading-relaxed">{advantage.description}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
