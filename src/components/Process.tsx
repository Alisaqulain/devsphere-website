"use client";

import { motion } from "framer-motion";

export default function Process() {
  const steps = [
    { number: "1", title: "Discovery", description: "We analyze your goals and market to define a clear vision." },
    { number: "2", title: "Strategy", description: "We create a tailored roadmap to achieve your objectives." },
    { number: "3", title: "Implementation", description: "We build and deploy with precision and agility." },
    { number: "4", title: "Optimization", description: "We monitor and refine to ensure long-term success." },
  ];

  return (
    <section className="py-8 sm:py-10 relative mx-4">
      {/* Background effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-background" />

      <div className="relative max-w-7xl mx-auto px-2 sm:px-4 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="text-center mb-8 sm:mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <p className="text-primary font-medium text-base sm:text-lg mb-2 sm:mb-4">Our Approach</p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2 sm:mb-4">
            A <span className="text-gradient">Streamlined Process</span> for Success
          </h2>
        </motion.div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {steps.map((step, index) => {
            // Determine animation direction
            let xDirection = 0;
            let yDirection = 0;

            if (index === 0) xDirection = -100;       // left-most
            else if (index === 3) xDirection = 100;   // right-most
            else yDirection = 30;                     // middle steps slide from bottom

            return (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, x: xDirection, y: yDirection }}
                whileInView={{ opacity: 1, x: 0, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                viewport={{ once: true }}
              >
                <div className="glass rounded-2xl p-6 sm:p-8 h-full transition-all duration-300 hover:border-primary/40 border border-primary/20 text-center group">
                  {/* Number Badge */}
                  <div className="w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-4 sm:mb-6 rounded-full bg-gradient-to-r from-primary to-electric-blue flex items-center justify-center text-white font-bold text-lg sm:text-xl">
                    {step.number}
                  </div>

                  {/* Content */}
                  <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-4 text-foreground">{step.title}</h3>
                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">{step.description}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
