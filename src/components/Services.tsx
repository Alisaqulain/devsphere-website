"use client";

import { motion } from "framer-motion";
import {
  Code,
  Smartphone,
  Users,
  Zap,
  Database,
  Globe,
  Cloud,
  Settings,
  Shield,
  Layers,
  ArrowRight,
} from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const services = [
  {
    icon: Globe,
    title: "Digital Platform Development",
    description:
      "Enterprise-grade web platforms that scale with your business, drive customer engagement, and deliver measurable ROI.",
    gradient: "from-primary to-tech-violet",
  },
  {
    icon: Smartphone,
    title: "Mobile Business Solutions",
    description:
      "Native mobile applications that enhance customer experience, streamline operations, and unlock new revenue streams.",
    gradient: "from-accent to-cyber-pink",
  },
  {
    icon: Users,
    title: "Customer Relationship Management",
    description:
      "Strategic CRM implementations that optimize sales processes, improve customer satisfaction, and accelerate growth.",
    gradient: "from-electric-blue to-primary",
  },
  {
    icon: Zap,
    title: "Business System Integration",
    description:
      "Seamless integration of business systems to eliminate data silos, automate workflows, and reduce operational costs.",
    gradient: "from-neon-purple to-accent",
  },
  {
    icon: Database,
    title: "Data & Analytics Solutions",
    description:
      "Intelligent data management and analytics platforms that provide actionable insights for strategic decision-making.",
    gradient: "from-green-400 to-primary",
  },
  {
    icon: Globe,
    title: "E-Commerce & Marketplace",
    description:
      "High-converting online stores and marketplaces designed to maximize sales, optimize customer journeys, and expand market presence.",
    gradient: "from-orange-400 to-pink-500",
  },
];

export default function Services() {
  return (
    <section className="py-12 relative">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background to-primary/5" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
            Business Solutions That
            <span className="text-gradient"> Drive Growth</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Strategic digital solutions designed to deliver measurable ROI, operational efficiency, 
            and sustainable competitive advantage for your business.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;

            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group"
              >
                <Card className="relative border border-white/10 rounded-2xl shadow-lg bg-white/5 backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:scale-[1.03] hover:shadow-violet-400/30 hover:border-violet-400/40">
                  <CardHeader>
                    <div className="flex items-center gap-4">
                      <motion.div
                        whileHover={{ rotate: 10, scale: 1.2 }}
                        className={`w-12 h-12 rounded-xl bg-gradient-to-r ${service.gradient} flex items-center justify-center`}
                      >
                        <IconComponent className="h-6 w-6 text-white" />
                      </motion.div>
                      <CardTitle className="text-xl">{service.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base mb-4">
                      {service.description}
                    </CardDescription>
                    <Link to="/services">
                      <Button
                        variant="ghost"
                        className="font-medium text-primary hover:text-blue-600"
                      >
                        Learn More{" "}
                        <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
