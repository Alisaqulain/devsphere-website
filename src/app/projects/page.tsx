import { pageMetadata } from "@/lib/seo";
import PageWrapper from "@/components/sections/PageWrapper";
import SectionHeading from "@/components/sections/SectionHeading";
import ProjectsGrid from "@/components/sections/ProjectsGrid";
import CTASection from "@/components/sections/CTASection";

export const metadata = pageMetadata(
  "Projects",
  "Explore DevSphere Solutions portfolio — premium websites, SaaS, CRM, EdTech, real estate & more.",
  "/projects"
);

export default function ProjectsPage() {
  return (
    <PageWrapper>
      <section className="section-padding">
        <div className="container-wide">
          <SectionHeading
            eyebrow="Portfolio"
            title="Our"
            highlight="Work"
            description="Filter and search through our portfolio of production-ready digital products."
          />
          <ProjectsGrid />
        </div>
      </section>
      <CTASection />
    </PageWrapper>
  );
}
