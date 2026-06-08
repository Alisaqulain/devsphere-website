"use client";

import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { stats } from "@/data/site";
import ScrollReveal from "@/components/animations/ScrollReveal";

export default function StatsSection() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <section className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold">
            Trusted <span className="text-gradient">Worldwide</span>
          </h2>
        </ScrollReveal>

        <div ref={ref} className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, i) => (
            <ScrollReveal key={stat.label} delay={i * 0.1}>
              <div className="glass rounded-2xl p-6 sm:p-8 text-center border border-primary/20 hover:border-primary/40 transition-all hover:scale-105">
                <p className="text-4xl sm:text-5xl font-extrabold text-primary mb-2">
                  {inView && (
                    <CountUp start={0} end={stat.value} duration={2.5} suffix={stat.suffix} />
                  )}
                </p>
                <p className="text-sm sm:text-base font-semibold text-foreground">{stat.label}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
