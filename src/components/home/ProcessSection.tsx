"use client";

import { processSteps } from "@/data/site";
import ScrollReveal from "@/components/animations/ScrollReveal";

export default function ProcessSection() {
  return (
    <section className="py-20 sm:py-28 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-primary/5" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
            Our <span className="text-gradient">Process</span>
          </h2>
          <p className="text-xl text-muted-foreground">A proven workflow from idea to production.</p>
        </ScrollReveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {processSteps.map((step, i) => (
            <ScrollReveal key={step.title} delay={i * 0.08}>
              <div className="glass rounded-2xl p-6 border border-primary/20 relative overflow-hidden group hover:border-primary/40 transition-all">
                <span className="text-5xl font-extrabold text-primary/10 absolute -top-2 -right-2 group-hover:text-primary/20 transition-colors">
                  {step.step}
                </span>
                <h3 className="text-xl font-bold mb-2 relative">{step.title}</h3>
                <p className="text-sm text-muted-foreground relative">{step.description}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
