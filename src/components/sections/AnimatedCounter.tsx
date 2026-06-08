"use client";

import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { stats } from "@/data/site";

export default function AnimatedCounter() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <section className="section-padding relative">
      <div className="container-wide">
        <div ref={ref} className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="gradient-border rounded-3xl p-6 sm:p-8 text-center bg-card/50"
            >
              <p className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gradient mb-2">
                {inView && (
                  <CountUp start={0} end={stat.value} duration={2.2} suffix={stat.suffix} />
                )}
              </p>
              <p className="text-sm sm:text-base font-medium text-muted-foreground">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
