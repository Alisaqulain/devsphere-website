"use client";

import { motion } from "framer-motion";
import type { Service } from "@/data/services";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { useIsMobile } from "@/lib/motion";

interface ServiceCardProps {
  service: Service;
  index?: number;
  showFeatures?: boolean;
}

const serviceFeatures: Record<string, string[]> = {
  "website-development": ["Responsive design", "SEO-ready", "Fast performance", "CMS integration"],
  "saas-development": ["Multi-tenant architecture", "Billing systems", "Admin dashboards", "API layer"],
  "mobile-app-development": ["iOS & Android", "Cross-platform", "Push notifications", "App store ready"],
  "ecommerce-development": ["Payment gateways", "Product catalog", "Cart & checkout", "Analytics"],
  "admin-dashboards": ["Role-based access", "Real-time analytics", "Workflow automation", "Reports"],
  "ai-integration": ["Chatbots", "AI automation", "Smart search", "OpenAI integration"],
  "cloud-deployment": ["AWS / Vercel", "CI/CD pipelines", "Monitoring", "Auto-scaling"],
  "seo-optimization": ["Technical SEO", "Schema markup", "Core Web Vitals", "Content strategy"],
};

export default function ServiceCard({ service, index = 0, showFeatures = false }: ServiceCardProps) {
  const mobile = useIsMobile();
  const Icon = service.icon;
  const features = serviceFeatures[service.slug] || ["Custom solution", "Scalable build", "Modern stack", "Ongoing support"];

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      whileHover={mobile ? undefined : { y: -6 }}
      className="group gradient-border rounded-3xl p-6 sm:p-8 h-full bg-card/60 backdrop-blur-sm hover:border-primary/40 transition-colors"
    >
      <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-cyan-500/20 to-blue-500/20 border border-primary/25 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
        <Icon className="w-7 h-7 text-primary" />
      </div>

      <h3 className="text-xl font-bold mb-3">{service.title}</h3>
      <p className="text-sm text-muted-foreground leading-relaxed mb-4">{service.description}</p>

      {showFeatures && (
        <ul className="space-y-2 mb-6">
          {features.map((f) => (
            <li key={f} className="flex items-center gap-2 text-xs text-muted-foreground">
              <span className="w-1 h-1 rounded-full bg-primary" />
              {f}
            </li>
          ))}
        </ul>
      )}

      <Link
        href="/contact"
        className="inline-flex items-center gap-2 text-sm font-semibold text-primary group-hover:gap-3 transition-all"
      >
        Get Started <ArrowRight className="w-4 h-4" />
      </Link>
    </motion.div>
  );
}
