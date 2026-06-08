"use client";

import { useState, useMemo } from "react";
import { Search, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { projects } from "@/data/projects";
import ProjectCard from "@/components/sections/ProjectCard";

export default function ProjectsGrid() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  const categories = useMemo(
    () => ["All", ...Array.from(new Set(projects.map((p) => p.category)))],
    []
  );

  const filtered = useMemo(() => {
    return projects.filter((p) => {
      const matchCat = category === "All" || p.category === category;
      const q = search.toLowerCase().trim();
      const matchSearch =
        !q ||
        p.title.toLowerCase().includes(q) ||
        p.description.toLowerCase().includes(q) ||
        p.category.toLowerCase().includes(q) ||
        p.techStack.some((t) => t.toLowerCase().includes(q));
      return matchCat && matchSearch;
    });
  }, [search, category]);

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45 }}
        className="mb-8 space-y-5"
      >
        {/* Full-width search */}
        <div className="relative w-full">
          <Search className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground pointer-events-none" />
          <input
            type="search"
            placeholder="Search by project name, tech stack, or category..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-14 pr-12 py-4 rounded-2xl bg-white/[0.04] border border-white/10 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/30 text-sm sm:text-base placeholder:text-muted-foreground/70 transition-all shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]"
          />
          {search && (
            <button
              type="button"
              onClick={() => setSearch("")}
              className="absolute right-4 top-1/2 -translate-y-1/2 p-1.5 rounded-lg text-muted-foreground hover:text-foreground hover:bg-white/5 transition-colors"
              aria-label="Clear search"
            >
              <X className="w-4 h-4" />
            </button>
          )}
        </div>

        {/* Horizontal scrollable category pills */}
        <div className="relative">
          <div className="absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none sm:hidden" />
          <div className="absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none sm:hidden" />
          <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-thin scrollbar-thumb-white/10 scrollbar-track-transparent -mx-1 px-1">
            {categories.map((cat) => (
              <motion.button
                key={cat}
                type="button"
                onClick={() => setCategory(cat)}
                whileTap={{ scale: 0.97 }}
                className={`flex-shrink-0 px-4 py-2.5 rounded-xl text-sm font-medium whitespace-nowrap transition-all duration-300 ${
                  category === cat
                    ? "bg-primary text-primary-foreground shadow-[0_0_24px_hsl(var(--primary)/0.35)]"
                    : "glass-card text-muted-foreground hover:text-foreground border border-white/10 hover:border-primary/25"
                }`}
              >
                {cat}
              </motion.button>
            ))}
          </div>
        </div>

        <motion.p
          key={`${category}-${search}-${filtered.length}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-sm text-muted-foreground"
        >
          Showing{" "}
          <span className="text-foreground font-semibold">{filtered.length}</span> of{" "}
          {projects.length} projects
          {category !== "All" && (
            <>
              {" "}
              in <span className="text-primary">{category}</span>
            </>
          )}
        </motion.p>
      </motion.div>

      <AnimatePresence mode="popLayout">
        {filtered.length === 0 ? (
          <motion.p
            key="empty"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="text-center text-muted-foreground py-16"
          >
            No projects match your search. Try a different keyword or category.
          </motion.p>
        ) : (
          <motion.div
            key={`grid-${category}-${search}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
          >
            {filtered.map((project, i) => (
              <ProjectCard key={project.slug} project={project} index={i} />
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
