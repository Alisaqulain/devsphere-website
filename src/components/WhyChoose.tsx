"use client";

import { motion } from "framer-motion";
import { Clock, Users, Award, Zap } from "lucide-react";

export default function WhyChoose() {
  const reasons = [
    { icon: Clock, title: "Fast Delivery", description: "We deliver projects on time with our agile development process and proven methodologies." },
    { icon: Users, title: "Expert Team", description: "Our skilled developers and designers have years of experience in cutting-edge technologies." },
    { icon: Award, title: "Proven Results", description: "200+ successful projects delivered for startups and enterprises across various industries." },
    { icon: Zap, title: "Innovative Solutions", description: "We leverage the latest technologies to build scalable, future-ready digital solutions." },
  ];

  return (
    <section className="py-8 sm:py-12 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-background to-primary/5" />
      <div className="relative max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-10 sm:mb-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4">
            Why Choose <span className="text-gradient">DevSphere</span>?
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Partner with a team that combines innovation, expertise, and reliability to deliver exceptional digital experiences.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {reasons.map((reason, index) => {
            const IconComponent = reason.icon;
            return (
              <motion.div
                key={reason.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                viewport={{ once: true }}
              >
                <div className="glass rounded-2xl p-6 sm:p-8 h-full transition-all duration-300 hover:border-primary/40 border border-primary/20 text-center group">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-4 sm:mb-6 rounded-full bg-gradient-to-r from-primary to-electric-blue flex items-center justify-center text-white">
                    <IconComponent size={28} className="sm:w-8 sm:h-8" aria-hidden="true" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-4 text-foreground">{reason.title}</h3>
                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">{reason.description}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
