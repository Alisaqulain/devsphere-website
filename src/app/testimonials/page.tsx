import { pageMetadata } from "@/lib/seo";
import PageWrapper from "@/components/sections/PageWrapper";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import CTASection from "@/components/sections/CTASection";

export const metadata = pageMetadata(
  "Testimonials",
  "Client testimonials for DevSphere Solutions — trusted by business leaders in India, Dubai, and globally.",
  "/testimonials"
);

export default function TestimonialsPage() {
  return (
    <PageWrapper>
      <TestimonialsSection />
      <CTASection />
    </PageWrapper>
  );
}
