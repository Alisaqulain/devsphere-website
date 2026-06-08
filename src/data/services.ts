import {
  Globe,
  Code,
  Layers,
  ShoppingCart,
  Smartphone,
  LayoutDashboard,
  Brain,
  Cog,
  Cloud,
  Search,
  Wrench,
  type LucideIcon,
} from "lucide-react";

export interface Service {
  title: string;
  slug: string;
  description: string;
  icon: LucideIcon;
  gradient: string;
}

export const services: Service[] = [
  {
    title: "Website Development",
    slug: "website-development",
    description: "Premium responsive websites built for speed, SEO, and conversions.",
    icon: Globe,
    gradient: "from-primary to-tech-violet",
  },
  {
    title: "Full-Stack Web Apps",
    slug: "full-stack-web-apps",
    description: "Scalable web applications with secure APIs and modern architecture.",
    icon: Code,
    gradient: "from-electric-blue to-primary",
  },
  {
    title: "SaaS Development",
    slug: "saas-development",
    description: "Multi-tenant SaaS platforms with dashboards, billing, and automation.",
    icon: Layers,
    gradient: "from-neon-purple to-accent",
  },
  {
    title: "E-commerce Development",
    slug: "ecommerce-development",
    description: "High-converting online stores and marketplaces with payment flows.",
    icon: ShoppingCart,
    gradient: "from-orange-400 to-pink-500",
  },
  {
    title: "Mobile App Development",
    slug: "mobile-app-development",
    description: "Native and cross-platform mobile apps for iOS and Android.",
    icon: Smartphone,
    gradient: "from-accent to-cyber-pink",
  },
  {
    title: "Admin Dashboards",
    slug: "admin-dashboards",
    description: "Powerful admin panels with analytics, roles, and workflow control.",
    icon: LayoutDashboard,
    gradient: "from-green-400 to-primary",
  },
  {
    title: "AI Integration",
    slug: "ai-integration",
    description: "Smart AI features, chatbots, and automation for modern products.",
    icon: Brain,
    gradient: "from-violet-500 to-pink-500",
  },
  {
    title: "Automation Systems",
    slug: "automation-systems",
    description: "Workflow automation to reduce manual work and improve efficiency.",
    icon: Cog,
    gradient: "from-blue-500 to-cyan-400",
  },
  {
    title: "Cloud Deployment",
    slug: "cloud-deployment",
    description: "AWS, Vercel, and cloud infrastructure setup with CI/CD pipelines.",
    icon: Cloud,
    gradient: "from-sky-400 to-primary",
  },
  {
    title: "SEO Optimization",
    slug: "seo-optimization",
    description: "Technical SEO, metadata, schema markup, and Core Web Vitals tuning.",
    icon: Search,
    gradient: "from-emerald-400 to-teal-500",
  },
  {
    title: "Maintenance & Support",
    slug: "maintenance-support",
    description: "Ongoing updates, monitoring, security patches, and feature enhancements.",
    icon: Wrench,
    gradient: "from-amber-400 to-orange-500",
  },
];
