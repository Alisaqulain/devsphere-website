import { pageMetadata } from "@/lib/seo";
import PageWrapper from "@/components/sections/PageWrapper";
import ServicesGrid from "@/components/sections/ServicesGrid";
import ProcessTimeline from "@/components/sections/ProcessTimeline";
import CTASection from "@/components/sections/CTASection";

export const metadata = pageMetadata(
  "Services",
  "Website development, SaaS, mobile apps, e-commerce, admin dashboards, AI integration, cloud deployment & SEO.",
  "/services"
);

export default function ServicesPage() {
  return (
    <PageWrapper>
      <ServicesGrid showFeatures limit={8} />
      <ProcessTimeline />
      <CTASection />
    </PageWrapper>
  );
}
