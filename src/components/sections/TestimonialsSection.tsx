"use client";

import { testimonials } from "@/data/testimonials";
import TestimonialCard from "./TestimonialCard";
import SectionHeading from "./SectionHeading";

export default function TestimonialsSection() {
  return (
    <section className="section-padding">
      <div className="container-wide">
        <SectionHeading
          eyebrow="Testimonials"
          title="Trusted by"
          highlight="Business Leaders"
          description="Real feedback from executives and decision-makers worldwide."
        />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <TestimonialCard key={t.name} testimonial={t} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
