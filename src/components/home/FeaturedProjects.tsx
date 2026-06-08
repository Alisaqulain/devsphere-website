import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { getFeaturedProjects } from "@/data/projects";
import ProjectCard from "@/components/projects/ProjectCard";
import ScrollReveal from "@/components/animations/ScrollReveal";

export default function FeaturedProjects() {
  const featured = getFeaturedProjects(6);

  return (
    <section className="py-20 sm:py-28 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Real products built for businesses across India, Dubai, Oman & beyond.
          </p>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featured.map((project, i) => (
            <ProjectCard key={project.slug} project={project} index={i} />
          ))}
        </div>

        <ScrollReveal className="text-center mt-12">
          <Link href="/projects">
            <Button variant="hero" size="lg" className="group">
              View All Projects
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </ScrollReveal>
      </div>
    </section>
  );
}
