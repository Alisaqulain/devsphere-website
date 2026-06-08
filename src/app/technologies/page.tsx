import { pageMetadata } from "@/lib/seo";
import PageWrapper from "@/components/sections/PageWrapper";
import TechStackGrid from "@/components/sections/TechStackGrid";
import CTASection from "@/components/sections/CTASection";

export const metadata = pageMetadata(
  "Technologies",
  "Full-stack tech stack A–Z: Next.js, React, TypeScript, Node.js, Laravel, MongoDB, AWS, Docker, OpenAI API & more.",
  "/technologies"
);

export default function TechnologiesPage() {
  return (
    <PageWrapper>
      <TechStackGrid />
      <CTASection />
    </PageWrapper>
  );
}
