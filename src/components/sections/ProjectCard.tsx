"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, ExternalLink, TrendingUp } from "lucide-react";
import type { Project } from "@/data/projects";
import { useIsMobile } from "@/lib/motion";

interface ProjectCardProps {
  project: Project;
  index?: number;
}

export default function ProjectCard({ project, index = 0 }: ProjectCardProps) {
  const mobile = useIsMobile();

  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, delay: index * 0.06 }}
      whileHover={mobile ? undefined : { y: -8 }}
      className="group gradient-border rounded-3xl overflow-hidden"
    >
      <div className="relative h-52 sm:h-56 overflow-hidden">
        <Image
          src={project.image}
          alt={`${project.title} project screenshot`}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />

        {project.metrics && project.metrics.length > 0 && (
          <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-4">
            <div className="grid grid-cols-2 gap-2">
              {project.metrics.slice(0, 2).map((metric) => (
                <div
                  key={metric.label}
                  className="rounded-xl bg-background/80 backdrop-blur-md border border-white/10 px-3 py-2"
                >
                  <p className="text-[10px] text-muted-foreground uppercase tracking-wide">{metric.label}</p>
                  <p className="text-sm font-bold text-gradient flex items-center gap-1">
                    {metric.value}
                    {metric.trend && (
                      <TrendingUp className="w-3 h-3 text-emerald-400 opacity-80" />
                    )}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

        <div className="absolute top-4 left-4 flex gap-2">
          <span className="px-3 py-1 rounded-full glass-card text-xs font-semibold text-primary">
            {project.category}
          </span>
        </div>
        <span className="absolute top-4 right-4 px-3 py-1 rounded-full glass-card text-xs font-medium">
          {project.country}
        </span>
      </div>

      <div className="p-6 sm:p-7 bg-card/80 backdrop-blur-sm">
        <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">{project.title}</h3>
        <p className="text-sm text-muted-foreground line-clamp-2 mb-4">{project.description}</p>

        <div className="flex flex-wrap gap-2 mb-5">
          {project.techStack.slice(0, 4).map((tech) => (
            <span
              key={tech}
              className="px-2.5 py-1 rounded-lg bg-primary/10 text-primary text-xs font-medium border border-primary/15"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <Link
            href={`/projects/${project.slug}`}
            className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:gap-3 transition-all"
          >
            View Case Study <ArrowRight className="w-4 h-4" />
          </Link>
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label={`Visit ${project.title} live site`}
            >
              <ExternalLink className="w-4 h-4" />
            </a>
          )}
        </div>
      </div>
    </motion.article>
  );
}
