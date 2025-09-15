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
    icon: Code,
    title: "Custom Web Development",
    description:
      "High-performance websites and web apps built with modern frameworks like Next.js, React, and Node.js.",
    gradient: "from-primary to-tech-violet",
  },
  {
    icon: Smartphone,
    title: "Mobile App Development",
    description:
      "Native and cross-platform iOS/Android apps with Flutter or React Native for seamless performance.",
    gradient: "from-accent to-cyber-pink",
  },
  {
    icon: Users,
    title: "CRM Implementation",
    description:
      "Tailored CRM solutions with Salesforce, HubSpot, or custom-built workflows to streamline your operations.",
    gradient: "from-electric-blue to-primary",
  },
  {
    icon: Zap,
    title: "API & Integrations",
    description:
      "Secure, scalable APIs and integrations with Stripe, Twilio, or custom endpoints to power your ecosystem.",
    gradient: "from-neon-purple to-accent",
  },
  {
    icon: Database,
    title: "Database Solutions",
    description:
      "Robust database design, optimization, and management for scalability and performance.",
    gradient: "from-green-400 to-primary",
  },
  {
    icon: Globe,
    title: "E-Commerce Development",
    description:
      "Custom online stores, marketplaces, and payment integrations built to drive conversions.",
    gradient: "from-orange-400 to-pink-500",
  },
  {
    icon: Cloud,
    title: "Cloud & DevOps",
    description:
      "Seamless deployment pipelines, CI/CD, and cloud-native solutions for faster delivery.",
    gradient: "from-sky-400 to-indigo-500",
  },
  {
    icon: Settings,
    title: "Product Engineering",
    description:
      "End-to-end product engineering services to take your idea from concept to launch.",
    gradient: "from-yellow-400 to-red-500",
  },
  {
    icon: Shield,
    title: "Cybersecurity Solutions",
    description:
      "Protect your apps and infrastructure with enterprise-grade security and compliance.",
    gradient: "from-rose-500 to-primary",
  },
  {
    icon: Layers,
    title: "UI/UX Design",
    description:
      "Pixel-perfect, user-centric interfaces designed to captivate and convert.",
    gradient: "from-fuchsia-400 to-cyan-400",
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
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-gradient">
              Comprehensive Digital Solutions
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            From ideation to execution, our services are designed to deliver
            measurable results.
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
