"use client";

import { projects } from "@/data/projects";

export default function ProjectMarquee() {
  const names = projects.map((p) => p.title);
  const doubled = [...names, ...names];

  return (
    <section className="py-8 border-y border-primary/10 overflow-hidden bg-primary/5">
      <div className="flex animate-marquee whitespace-nowrap">
        {doubled.map((name, i) => (
          <span
            key={`${name}-${i}`}
            className="mx-8 text-lg sm:text-xl font-semibold text-muted-foreground flex items-center gap-4"
          >
            {name}
            <span className="text-primary">✦</span>
          </span>
        ))}
      </div>
    </section>
  );
}
