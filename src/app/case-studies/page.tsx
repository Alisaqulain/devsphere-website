import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { pageMetadata } from "@/lib/seo";
import PageWrapper from "@/components/sections/PageWrapper";
import SectionHeading from "@/components/sections/SectionHeading";
import { projects } from "@/data/projects";
import CTASection from "@/components/sections/CTASection";

export const metadata = pageMetadata(
  "Case Studies",
  "Detailed case studies showing problem, solution, features, and results for DevSphere Solutions projects.",
  "/case-studies"
);

export default function CaseStudiesPage() {
  return (
    <PageWrapper>
      <section className="section-padding">
        <div className="container-wide">
          <SectionHeading
            eyebrow="Case Studies"
            title="Deep Dives Into"
            highlight="Real Results"
            description="How we solve business problems with technology."
          />
          <div className="space-y-4">
            {projects.map((project) => (
              <Link
                key={project.slug}
                href={`/projects/${project.slug}`}
                className="block gradient-border rounded-3xl p-6 sm:p-8 bg-card/40 hover:bg-card/60 transition-all group"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div>
                    <span className="text-xs font-semibold text-primary">{project.category}</span>
                    <h2 className="text-2xl font-bold mt-1 group-hover:text-primary transition-colors">{project.title}</h2>
                    <p className="text-muted-foreground mt-2 max-w-2xl">{project.description}</p>
                  </div>
                  <span className="inline-flex items-center gap-2 text-primary font-semibold whitespace-nowrap group-hover:gap-3 transition-all">
                    Read Case Study <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <CTASection />
    </PageWrapper>
  );
}
