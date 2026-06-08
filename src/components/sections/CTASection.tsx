"use client";

import SectionHeading from "./SectionHeading";
import MagneticButton from "./MagneticButton";
import FloatingGradient from "./FloatingGradient";

export default function CTASection() {
  return (
    <section className="section-padding relative overflow-hidden">
      <FloatingGradient />
      <div className="container-wide relative z-10">
        <div className="gradient-border rounded-[2rem] p-10 sm:p-16 text-center bg-card/40 backdrop-blur-xl">
          <SectionHeading
            title="Have an idea? Let's build it into a"
            highlight="real product."
            description="From MVP to enterprise platform — we deliver production-ready digital products that drive growth."
          />
          <div className="flex flex-col sm:flex-row gap-4 justify-center -mt-6">
            <MagneticButton href="/contact">Start a Project</MagneticButton>
            <MagneticButton href="/projects" variant="outline">View Portfolio</MagneticButton>
          </div>
        </div>
      </div>
    </section>
  );
}
