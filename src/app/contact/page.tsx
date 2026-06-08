import { pageMetadata } from "@/lib/seo";
import PageWrapper from "@/components/sections/PageWrapper";
import SectionHeading from "@/components/sections/SectionHeading";
import ContactForm from "@/components/contact/ContactForm";

export const metadata = pageMetadata(
  "Contact",
  "Contact DevSphere Solutions for web development, SaaS, mobile apps, and custom software projects.",
  "/contact"
);

export default function ContactPage() {
  return (
    <PageWrapper>
      <section className="section-padding">
        <div className="container-wide">
          <SectionHeading
            eyebrow="Contact"
            title="Let's"
            highlight="Connect"
            description="Tell us about your project — we respond within 1-2 business days."
          />
          <ContactForm />
        </div>
      </section>
    </PageWrapper>
  );
}
