"use client";

import ContactForm from "@/components/contact/ContactForm";
import SectionHeading from "@/components/sections/SectionHeading";

export default function ContactPreview() {
  return (
    <section className="section-padding">
      <div className="container-wide">
        <SectionHeading
          eyebrow="Contact"
          title="Let's Build"
          highlight="Something Great"
          description="Share your project details and we'll respond within 1-2 business days."
        />
        <ContactForm />
      </div>
    </section>
  );
}
