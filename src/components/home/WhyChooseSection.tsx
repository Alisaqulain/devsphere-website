"use client";

import { Target, Zap, Shield, Search, Smartphone, Lock, Cloud, Headphones } from "lucide-react";
import { whyChoose } from "@/data/site";
import ScrollReveal from "@/components/animations/ScrollReveal";

const icons = [Target, Zap, Shield, Search, Smartphone, Lock, Cloud, Headphones];

export default function WhyChooseSection() {
  return (
    <section className="py-20 sm:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
            Why Choose <span className="text-gradient">DevSphere</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            The strategic advantages that make us the right technology partner.
          </p>
        </ScrollReveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {whyChoose.map((item, i) => {
            const Icon = icons[i] || Target;
            return (
              <ScrollReveal key={item.title} delay={i * 0.05}>
                <div className="glass rounded-2xl p-6 border border-primary/20 hover:border-primary/40 transition-all hover:scale-[1.02] h-full">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-primary to-accent flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
