"use client";

import { motion } from "framer-motion";
import {
  Target,
  Eye,
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
import Navbar from "./Navbar";
import Footer from "./Footer";

const services = [
  {
    icon: Globe,
    title: "Digital Platform Development",
    description:
      "Enterprise-grade web platforms that scale with your business, drive customer engagement, and deliver measurable ROI.",
    gradient: "from-primary to-tech-violet",
    benefit: "Increased operational efficiency and market reach",
  },
  {
    icon: Smartphone,
    title: "Mobile Business Solutions",
    description:
      "Native mobile applications that enhance customer experience, streamline operations, and unlock new revenue streams.",
    gradient: "from-accent to-cyber-pink",
    benefit: "Enhanced customer engagement and retention",
  },
  {
    icon: Users,
    title: "Customer Relationship Management",
    description:
      "Strategic CRM implementations that optimize sales processes, improve customer satisfaction, and accelerate growth.",
    gradient: "from-electric-blue to-primary",
    benefit: "Streamlined operations and improved conversion",
  },
  {
    icon: Zap,
    title: "Business System Integration",
    description:
      "Seamless integration of business systems to eliminate data silos, automate workflows, and reduce operational costs.",
    gradient: "from-neon-purple to-accent",
    benefit: "Reduced manual work and improved accuracy",
  },
  {
    icon: Database,
    title: "Data & Analytics Solutions",
    description:
      "Intelligent data management and analytics platforms that provide actionable insights for strategic decision-making.",
    gradient: "from-green-400 to-primary",
    benefit: "Data-driven growth and competitive advantage",
  },
  {
    icon: Globe,
    title: "E-Commerce & Marketplace",
    description:
      "High-converting online stores and marketplaces designed to maximize sales, optimize customer journeys, and expand market presence.",
    gradient: "from-orange-400 to-pink-500",
    benefit: "Revenue growth and market expansion",
  },
  {
    icon: Cloud,
    title: "Cloud Infrastructure & Operations",
    description:
      "Scalable cloud solutions that ensure reliability, reduce infrastructure costs, and enable rapid business expansion.",
    gradient: "from-sky-400 to-indigo-500",
    benefit: "Cost optimization and operational agility",
  },
  {
    icon: Settings,
    title: "End-to-End Product Development",
    description:
      "Complete product development from strategy to launch, ensuring market fit, scalability, and long-term success.",
    gradient: "from-yellow-400 to-red-500",
    benefit: "Faster time-to-market and reduced risk",
  },
  {
    icon: Shield,
    title: "Enterprise Security & Compliance",
    description:
      "Comprehensive security solutions that protect business assets, ensure regulatory compliance, and build customer trust.",
    gradient: "from-rose-500 to-primary",
    benefit: "Risk mitigation and regulatory compliance",
  },
  {
    icon: Layers,
    title: "Strategic Design & User Experience",
    description:
      "User-centered design that improves conversion rates, enhances brand perception, and drives customer loyalty.",
    gradient: "from-fuchsia-400 to-cyan-400",
    benefit: "Improved user satisfaction and conversions",
  },
];

const items = [
  {
    title: "Our Mission",
    desc: "To empower businesses with digital products that remove friction, unlock efficiency, and accelerate growth. We put people first — designing intuitive interfaces, building reliable architectures, and ensuring every solution delivers measurable business value.",
    icon: Target,
    color: "from-violet-500 to-purple-600",
  },
  {
    title: "Our Vision",
    desc: "To become a globally recognized engineering partner, driving digital transformation for startups and enterprises, while setting new benchmarks in quality, innovation, and customer success.",
    icon: Eye,
    color: "from-pink-500 to-purple-600",
  },
];

export default function Services() {
  return (
    <>
      <Navbar />
      {/* Services Section */}
      <section className="pt-24 pb-12 relative">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <motion.div
            className="text-center mb-12"
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
                        <CardTitle className="text-xl">
                          {service.title}
                        </CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-base mb-4">
                        {service.description}
                      </CardDescription>
                      <div className="pt-4 border-t border-white/10">
                        <p className="text-sm font-semibold text-primary">
                          Key Benefit: {service.benefit}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="bg-black py-12 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-extrabold">
              Our{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-500 to-pink-500">
                Mission
              </span>{" "}
              & Vision
            </h2>
            <p className="text-muted-foreground mt-3 max-w-2xl mx-auto">
              Guiding everything we do — from strategy and design to engineering
              excellence and client success.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-10">
            {items.map((item, i) => {
              const Icon = item.icon;
              return (
                <div
                  key={i}
                  className="rounded-2xl bg-gradient-to-br from-white/5 to-white/10 p-8 border border-white/10 shadow-xl hover:-translate-y-1 hover:scale-[1.02] hover:shadow-violet-400/20 hover:border-violet-400/30 transition-all duration-300"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div
                      className={`w-12 h-12 rounded-full bg-gradient-to-r ${item.color} flex items-center justify-center text-white shadow-lg`}
                    >
                      <Icon size={22} />
                    </div>
                    <h3 className="text-xl font-bold">{item.title}</h3>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
