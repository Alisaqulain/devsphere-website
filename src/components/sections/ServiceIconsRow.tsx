"use client";

import { motion } from "framer-motion";
import { Globe, Code, Layers, Smartphone, LayoutDashboard, Brain, Cloud, Search } from "lucide-react";

const icons = [
  { icon: Globe, label: "Web Dev" },
  { icon: Code, label: "Full-Stack" },
  { icon: Layers, label: "SaaS" },
  { icon: Smartphone, label: "Mobile" },
  { icon: LayoutDashboard, label: "Dashboards" },
  { icon: Brain, label: "AI" },
  { icon: Cloud, label: "Cloud" },
  { icon: Search, label: "SEO" },
];

export default function ServiceIconsRow() {
  return (
    <section className="py-10 border-y border-primary/10 bg-card/20">
      <div className="container-wide">
        <div className="flex flex-wrap justify-center gap-4 sm:gap-8">
          {icons.map(({ icon: Icon, label }, i) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.04 }}
              whileHover={{ y: -4 }}
              className="flex flex-col items-center gap-2 px-4 py-3 rounded-2xl hover:bg-primary/5 transition-colors"
            >
              <div className="w-12 h-12 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center">
                <Icon className="w-5 h-5 text-primary" />
              </div>
              <span className="text-xs font-medium text-muted-foreground">{label}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
