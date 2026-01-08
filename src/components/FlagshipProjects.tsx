"use client";

import { motion } from "framer-motion";
import { ArrowRight, Globe, Building2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const flagshipProjects = [
  {
    name: "Vega Wealth",
    industry: "Financial Services",
    region: "Dubai, UAE",
    url: "http://vegawealth.com/",
    description: "Premium wealth management platform delivering sophisticated financial solutions for high-net-worth clients across the Middle East.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
  },
  {
    name: "Auto Excel Pro",
    industry: "Automotive Solutions",
    region: "Global",
    url: "http://autoexcelpro.com/",
    description: "Comprehensive automotive management system streamlining operations, inventory, and customer relationships for dealerships worldwide.",
    image: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=800&h=600&fit=crop",
  },
  {
    name: "MPCPCT",
    industry: "Education & Test Practice",
    region: "Global",
    url: "https://www.mpcpct.com/",
    description: "Comprehensive CPCT CCC test practice platform providing students with exam preparation tools, practice tests, and study resources for computer proficiency certification.",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=600&fit=crop&auto=format",
  },
  {
    name: "Krishi Kutumb",
    industry: "Agriculture Technology",
    region: "India",
    url: "https://www.krishikutumb.com/",
    description: "Innovative agricultural technology platform empowering farmers with data-driven insights and market connectivity.",
    image: "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?w=800&h=600&fit=crop",
  },
  {
    name: "MZ Technicals",
    industry: "Technology Services",
    region: "Global",
    url: "https://mztechnicals.com/",
    description: "Enterprise technology solutions provider delivering scalable infrastructure and digital transformation services.",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=600&fit=crop",
  },
  {
    name: "Laptop Secure",
    industry: "Security Solutions",
    region: "India",
    url: "https://laptopsecure.in/",
    description: "Comprehensive device security and management platform protecting enterprise assets and ensuring compliance.",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&h=600&fit=crop",
  },
  {
    name: "Dunex Dubai",
    industry: "Business Services",
    region: "Dubai, UAE",
    url: "https://dunexdubai.com/",
    description: "Premium business services platform connecting enterprises with trusted partners across the Middle East region.",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=600&fit=crop",
  },
  {
    name: "The Accessory Center MZN",
    industry: "Retail & E-Commerce",
    region: "India",
    url: "https://www.theaccessorycentermzn.in/",
    description: "High-performing e-commerce platform driving sales growth and customer engagement through optimized shopping experiences.",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop",
  },
];

export default function FlagshipProjects() {
  return (
    <section className="relative py-20 sm:py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-4">
            Selected Global
            <span className="text-gradient"> Projects</span>
          </h2>
          <p className="text-xl sm:text-2xl text-muted-foreground max-w-3xl mx-auto">
            Work trusted by businesses worldwide — delivering measurable results across industries and regions
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {flagshipProjects.map((project, index) => (
            <motion.div
              key={project.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative"
            >
              <div className="glass rounded-2xl overflow-hidden border border-primary/20 hover:border-primary/40 transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl hover:shadow-primary/20">
                {/* Project Image */}
                <div className="relative h-64 overflow-hidden bg-muted">
                  <img
                    src={project.image}
                    alt={project.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    onError={(e) => {
                      // Fallback to a default education/technology image if the original fails
                      if (project.name === "MPCPCT") {
                        e.currentTarget.src = "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=600&fit=crop&auto=format";
                      }
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent" />
                  
                  {/* Region Badge */}
                  <div className="absolute top-4 right-4">
                    <div className="glass px-3 py-1.5 rounded-full flex items-center gap-2 border border-primary/30">
                      <Globe className="h-4 w-4 text-primary" />
                      <span className="text-xs font-semibold text-foreground">{project.region}</span>
                    </div>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <div className="mb-3">
                    <div className="flex items-center gap-2 mb-2">
                      <Building2 className="h-4 w-4 text-primary" />
                      <span className="text-sm font-medium text-primary">{project.industry}</span>
                    </div>
                    <h3 className="text-2xl font-bold text-foreground mb-3">
                      {project.name}
                    </h3>
                  </div>
                  
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    {project.description}
                  </p>

                  {/* CTA */}
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-primary hover:text-accent font-semibold transition-colors group/link"
                  >
                    View Live Project
                    <ArrowRight className="h-4 w-4 transition-transform group-hover/link:translate-x-1" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All Projects CTA */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
        >
          <Link to="/projects">
            <Button variant="hero" size="lg" className="text-lg px-8 py-6">
              View All Projects
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

