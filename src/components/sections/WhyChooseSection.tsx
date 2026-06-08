"use client";

import { motion } from "framer-motion";
import { Target, Zap, Shield, Search, Smartphone, Lock, Cloud, Headphones } from "lucide-react";
import { whyChoose } from "@/data/site";
import SectionHeading from "./SectionHeading";

const icons = [Target, Zap, Shield, Search, Smartphone, Lock, Cloud, Headphones];

export default function WhyChooseSection() {
  return (
    <section className="section-padding relative">
      <div className="absolute inset-0 bg-gradient-to-b from-primary/[0.04] via-transparent to-primary/[0.04]" />
      <div className="container-wide relative">
        <SectionHeading
          eyebrow="Why Us"
          title="Why Choose"
          highlight="DevSphere"
          description="Strategic advantages that make us the right technology partner for global businesses."
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {whyChoose.map((item, i) => {
            const Icon = icons[i] || Target;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="gradient-border rounded-3xl p-6 bg-card/40 hover:bg-card/60 transition-colors h-full"
              >
                <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-cyan-500/20 to-blue-600/20 flex items-center justify-center mb-4 border border-primary/20">
                  <Icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-bold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
