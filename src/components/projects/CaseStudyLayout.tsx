"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, ExternalLink, Instagram, CheckCircle2, TrendingUp } from "lucide-react";
import type { Project } from "@/data/projects";
import CTASection from "@/components/sections/CTASection";
import MagneticButton from "@/components/sections/MagneticButton";

interface CaseStudyLayoutProps {
  project: Project;
}

export default function CaseStudyLayout({ project }: CaseStudyLayoutProps) {
  return (
    <>
      <section className="relative pt-8 pb-16 overflow-hidden">
        <div className="container-wide">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary mb-8 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" /> Back to Projects
          </Link>

          <div className="grid lg:grid-cols-2 gap-10 items-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-3 py-1 rounded-full glass-card text-xs font-semibold text-primary">
                  {project.category}
                </span>
                <span className="px-3 py-1 rounded-full glass-card text-xs">{project.country}</span>
                <span className="px-3 py-1 rounded-full glass-card text-xs text-emerald-400">
                  {project.status}
                </span>
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-4">
                {project.title}
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">{project.longDescription}</p>
              <div className="flex flex-wrap gap-3">
                {project.liveUrl && (
                  <MagneticButton href={project.liveUrl} external>
                    <ExternalLink className="w-4 h-4" /> Visit Live Site
                  </MagneticButton>
                )}
                {project.instagramUrl && (
                  <a href={project.instagramUrl} target="_blank" rel="noopener noreferrer">
                    <span className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl glass-card border border-primary/25 text-sm font-semibold hover:border-primary/50 transition">
                      <Instagram className="w-4 h-4" /> Instagram
                    </span>
                  </a>
                )}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="relative h-72 sm:h-96 rounded-3xl overflow-hidden gradient-border"
            >
              <Image src={project.image} alt={project.title} fill className="object-cover" priority />
            </motion.div>
          </div>

          {project.metrics && project.metrics.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-12"
            >
              {project.metrics.map((metric, i) => (
                <motion.div
                  key={metric.label}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="gradient-border rounded-2xl p-5 sm:p-6 bg-card/40 text-center"
                >
                  <p className="text-2xl sm:text-3xl font-bold text-gradient mb-1">{metric.value}</p>
                  <p className="text-sm font-medium text-foreground mb-1">{metric.label}</p>
                  {metric.trend && (
                    <p className="text-xs text-muted-foreground flex items-center justify-center gap-1">
                      <TrendingUp className="w-3 h-3 text-emerald-400" />
                      {metric.trend}
                    </p>
                  )}
                </motion.div>
              ))}
            </motion.div>
          )}

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <div className="gradient-border rounded-3xl p-8 bg-card/40">
              <h2 className="text-xl font-bold text-primary mb-3">The Problem</h2>
              <p className="text-muted-foreground leading-relaxed">{project.problem}</p>
            </div>
            <div className="gradient-border rounded-3xl p-8 bg-card/40">
              <h2 className="text-xl font-bold text-accent mb-3">Our Solution</h2>
              <p className="text-muted-foreground leading-relaxed">{project.solution}</p>
            </div>
          </div>

          <div className="gradient-border rounded-3xl p-8 bg-card/40 mb-12">
            <h2 className="text-2xl font-bold mb-6">Key Features</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {project.features.map((f, i) => (
                <motion.div
                  key={f}
                  initial={{ opacity: 0, x: -8 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.04 }}
                  className="flex items-start gap-3"
                >
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">{f}</span>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <div className="gradient-border rounded-3xl p-8 bg-card/40">
              <h2 className="text-xl font-bold mb-4">Tech Stack</h2>
              <div className="flex flex-wrap gap-2">
                {project.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1.5 rounded-xl bg-primary/10 text-primary text-sm font-medium border border-primary/15"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            <div className="gradient-border rounded-3xl p-8 bg-card/40">
              <h2 className="text-xl font-bold mb-3">Results</h2>
              <p className="text-muted-foreground leading-relaxed">{project.result}</p>
            </div>
          </div>

          {project.gallery && project.gallery.length > 0 && (
            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              {project.gallery.map((src, i) => (
                <motion.div
                  key={src}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="relative h-56 sm:h-64 rounded-2xl overflow-hidden gradient-border"
                >
                  <Image
                    src={src}
                    alt={`${project.title} screenshot ${i + 1}`}
                    fill
                    className="object-cover"
                  />
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>
      <CTASection />
    </>
  );
}
