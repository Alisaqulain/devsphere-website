"use client";

import { motion } from "framer-motion";
import { processSteps } from "@/data/site";
import SectionHeading from "./SectionHeading";

export default function ProcessTimeline() {
  return (
    <section className="section-padding">
      <div className="container-wide">
        <SectionHeading
          eyebrow="Process"
          title="How We"
          highlight="Deliver Excellence"
          description="A proven workflow from discovery to deployment and beyond."
        />

        <div className="relative">
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary/50 via-accent/30 to-transparent" />

          <div className="space-y-6 lg:space-y-0">
            {processSteps.map((step, i) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className={`lg:grid lg:grid-cols-2 lg:gap-12 lg:mb-12 ${i % 2 === 1 ? "lg:direction-rtl" : ""}`}
              >
                <div className={`${i % 2 === 1 ? "lg:col-start-2" : ""} lg:py-4`}>
                  <div className="gradient-border rounded-3xl p-6 sm:p-8 bg-card/50 relative">
                    <span className="text-5xl font-black text-primary/15 absolute top-4 right-6">{step.step}</span>
                    <h3 className="text-xl font-bold mb-2 relative">{step.title}</h3>
                    <p className="text-sm text-muted-foreground relative leading-relaxed">{step.description}</p>
                  </div>
                </div>
                <div className="hidden lg:flex items-center justify-center">
                  <div className="w-4 h-4 rounded-full bg-primary shadow-[0_0_20px_hsl(var(--primary))]" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
