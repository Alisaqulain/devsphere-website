"use client";

import { projects } from "@/data/projects";

export default function ProjectMarquee() {
  const names = projects.map((p) => p.title);
  const doubled = [...names, ...names];

  return (
    <section className="py-6 border-y border-primary/10 bg-primary/[0.03] overflow-hidden">
      <div className="flex animate-marquee whitespace-nowrap">
        {doubled.map((name, i) => (
          <span
            key={`${name}-${i}`}
            className="mx-8 text-base sm:text-lg font-semibold text-muted-foreground/80 flex items-center gap-4"
          >
            {name}
            <span className="text-primary text-xl">◆</span>
          </span>
        ))}
      </div>
    </section>
  );
}
