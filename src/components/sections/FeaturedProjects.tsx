"use client";

import { motion } from "framer-motion";
import { getFeaturedProjects } from "@/data/projects";
import ProjectCard from "./ProjectCard";
import SectionHeading from "./SectionHeading";
import MagneticButton from "./MagneticButton";

export default function FeaturedProjects() {
  const featured = getFeaturedProjects(6);

  return (
    <section className="section-padding">
      <div className="container-wide">
        <SectionHeading
          eyebrow="Portfolio"
          title="Featured"
          highlight="Projects"
          description="Real products built for businesses across India, Dubai, Oman & beyond."
        />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {featured.map((project, i) => (
            <ProjectCard key={project.slug} project={project} index={i} />
          ))}
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <MagneticButton href="/projects" variant="outline">
            View All Projects
          </MagneticButton>
        </motion.div>
      </div>
    </section>
  );
}
