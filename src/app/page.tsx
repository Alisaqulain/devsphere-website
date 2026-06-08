import AnimatedHero from "@/components/sections/AnimatedHero";
import ServiceIconsRow from "@/components/sections/ServiceIconsRow";
import ProjectMarquee from "@/components/sections/ProjectMarquee";
import FeaturedProjects from "@/components/sections/FeaturedProjects";
import WhyChooseSection from "@/components/sections/WhyChooseSection";
import ProcessTimeline from "@/components/sections/ProcessTimeline";
import TechStackGrid from "@/components/sections/TechStackGrid";
import AnimatedCounter from "@/components/sections/AnimatedCounter";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import CTASection from "@/components/sections/CTASection";
import ContactPreview from "@/components/sections/ContactPreview";

export default function HomePage() {
  return (
    <>
      <AnimatedHero />
      <ServiceIconsRow />
      <ProjectMarquee />
      <FeaturedProjects />
      <WhyChooseSection />
      <ProcessTimeline />
      <AnimatedCounter />
      <TechStackGrid />
      <TestimonialsSection />
      <CTASection />
      <ContactPreview />
    </>
  );
}
