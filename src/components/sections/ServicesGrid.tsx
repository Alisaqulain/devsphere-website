"use client";

import { services } from "@/data/services";
import ServiceCard from "./ServiceCard";
import SectionHeading from "./SectionHeading";

interface ServicesGridProps {
  showFeatures?: boolean;
  limit?: number;
}

export default function ServicesGrid({ showFeatures = false, limit }: ServicesGridProps) {
  const list = limit ? services.slice(0, limit) : services;

  return (
    <section className="section-padding">
      <div className="container-wide">
        <SectionHeading
          eyebrow="Services"
          title="Solutions That"
          highlight="Drive Growth"
          description="End-to-end digital services from concept to cloud deployment."
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {list.map((service, i) => (
            <ServiceCard key={service.slug} service={service} index={i} showFeatures={showFeatures} />
          ))}
        </div>
      </div>
    </section>
  );
}
