"use client";

import { useMemo, type ElementType } from "react";
import { motion } from "framer-motion";
import {
  Brain,
  Cloud,
  Code2,
  Container,
  CreditCard,
  Database,
  Globe,
  Layout,
  Network,
  Palette,
  Server,
  Smartphone,
  Sparkles,
  Wrench,
} from "lucide-react";
import { technologies, technologyCategories } from "@/data/site";
import SectionHeading from "./SectionHeading";
import TechIcon from "./TechIcon";

const categoryIcons: Record<string, ElementType> = {
  Frontend: Layout,
  Mobile: Smartphone,
  Language: Code2,
  Backend: Server,
  Database: Database,
  "API & Architecture": Network,
  Styling: Palette,
  Animation: Sparkles,
  Cloud: Cloud,
  DevOps: Container,
  "AI & ML": Brain,
  "CMS & E-commerce": Globe,
  "Tools & Testing": Wrench,
  "Payments & Integrations": CreditCard,
};

function sortByName<T extends { name: string }>(items: T[]) {
  return [...items].sort((a, b) => a.name.localeCompare(b.name));
}

function TechMarqueeCard({ name }: { name: string }) {
  return (
    <div className="flex items-center gap-2.5 px-4 py-2.5 rounded-2xl glass-card border border-white/10 shrink-0 hover:border-primary/30 hover:bg-primary/5 transition-colors">
      <TechIcon name={name} size={22} />
      <span className="text-sm font-medium text-foreground/90 whitespace-nowrap">{name}</span>
    </div>
  );
}

export default function TechStackGrid() {
  const categories = useMemo(
    () => technologyCategories.filter((cat) => technologies.some((t) => t.category === cat)),
    []
  );

  const marqueeTech = useMemo(() => sortByName(technologies), []);
  const row1 = [...marqueeTech, ...marqueeTech];
  const row2 = [...[...marqueeTech].reverse(), ...[...marqueeTech].reverse()];

  return (
    <section className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-primary/[0.04] via-transparent to-transparent pointer-events-none" />

      <div className="container-wide relative">
        <SectionHeading
          eyebrow="Technologies"
          title="Modern Stack,"
          highlight="Production Ready"
          description="We use battle-tested technologies to build fast, secure, and scalable products."
        />

        {/* Logo marquee — dual rows */}
        <div className="relative mb-14 -mx-4 sm:-mx-6">
          <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-24 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-24 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

          <div className="flex gap-4 animate-marquee mb-4">
            {row1.map((t, i) => (
              <TechMarqueeCard key={`r1-${t.name}-${i}`} name={t.name} />
            ))}
          </div>
          <div className="flex gap-4 animate-marquee-reverse">
            {row2.map((t, i) => (
              <TechMarqueeCard key={`r2-${t.name}-${i}`} name={t.name} />
            ))}
          </div>
        </div>

        {/* Category grid with icons */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((cat, i) => {
            const CatIcon = categoryIcons[cat] || Code2;
            const items = sortByName(technologies.filter((t) => t.category === cat));

            return (
              <motion.div
                key={cat}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.04 }}
                whileHover={{ y: -4 }}
                className="gradient-border rounded-3xl p-6 bg-card/40 group"
              >
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center group-hover:bg-primary/15 transition-colors">
                    <CatIcon className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="text-lg font-bold text-primary">{cat}</h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {items.map((t) => (
                    <span
                      key={t.name}
                      className="inline-flex items-center gap-2 px-3 py-2 rounded-xl bg-primary/10 text-sm font-medium border border-primary/15 hover:border-primary/40 hover:bg-primary/15 transition-all"
                    >
                      <TechIcon name={t.name} size={18} />
                      {t.name}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
