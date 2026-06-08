// Update contact info, social links, and company details here
export const siteConfig = {
  name: "DevSphere Solutions",
  tagline: "Smart Solutions for a Smarter World",
  description:
    "Premium full-stack development agency building websites, SaaS, mobile apps, and admin dashboards for India, Dubai, Oman & global clients.",
  email: "devsspheresolutions@gmail.com",
  emailAlt: "info@devspheresolutions.in",
  phone: "+91 94578 18861",
  phoneAlt: "+91 93894 41961",
  whatsapp: "919457818861",
  address: "Muzaffarnagar, Uttar Pradesh, India",
  social: {
    instagram: "https://www.instagram.com/dev.spheresolutions/",
    linkedin: "https://www.linkedin.com/company/devspheresolutions",
    github: "https://github.com/", // Update with real GitHub URL
    portfolio: "https://devspheresolutions.com/projects",
  },
};

export const stats = [
  { value: 15, suffix: "+", label: "Projects Delivered", icon: "projects" },
  { value: 5, suffix: "+", label: "Business Domains", icon: "domains" },
  { value: 3, suffix: "+", label: "Countries Served", icon: "countries" },
  { value: 100, suffix: "%", label: "Client-Focused Delivery", icon: "clients" },
];

export const whyChoose = [
  { title: "End-to-End Delivery", description: "From discovery to deployment — we handle the complete product lifecycle." },
  { title: "Fast Development", description: "Agile sprints with rapid prototyping and iterative delivery." },
  { title: "Production-Ready Code", description: "Clean, scalable, maintainable code built for long-term growth." },
  { title: "SEO-Friendly Websites", description: "Technical SEO, schema markup, and performance optimization built-in." },
  { title: "Mobile-First Design", description: "Pixel-perfect responsive UI across all devices and screen sizes." },
  { title: "Secure Backend", description: "Authentication, validation, and security best practices on every project." },
  { title: "Cloud Deployment", description: "AWS, Vercel, and CI/CD pipelines for reliable production releases." },
  { title: "Client Support", description: "Dedicated post-launch support, updates, and long-term partnership." },
];

export const processSteps = [
  { step: "01", title: "Discovery", description: "Understand your goals, users, and business requirements." },
  { step: "02", title: "UI/UX Planning", description: "Wireframes, design systems, and user journey mapping." },
  { step: "03", title: "Development", description: "Agile development with regular demos and transparent progress." },
  { step: "04", title: "Testing", description: "QA, performance testing, and cross-browser validation." },
  { step: "05", title: "Deployment", description: "Cloud deployment with monitoring and CI/CD setup." },
  { step: "06", title: "Maintenance", description: "Ongoing support, updates, and feature enhancements." },
];

export const technologyCategories = [
  "Frontend",
  "Mobile",
  "Language",
  "Backend",
  "Database",
  "API & Architecture",
  "Styling",
  "Animation",
  "Cloud",
  "DevOps",
  "AI & ML",
  "CMS & E-commerce",
  "Tools & Testing",
  "Payments & Integrations",
] as const;

export const technologies = [
  // Frontend
  { name: "Angular", category: "Frontend" },
  { name: "Next.js", category: "Frontend" },
  { name: "React", category: "Frontend" },
  { name: "Remix", category: "Frontend" },
  { name: "Svelte", category: "Frontend" },
  { name: "Vue.js", category: "Frontend" },
  // Mobile
  { name: "Expo", category: "Mobile" },
  { name: "Flutter", category: "Mobile" },
  { name: "React Native", category: "Mobile" },
  // Language
  { name: "JavaScript", category: "Language" },
  { name: "PHP", category: "Language" },
  { name: "Python", category: "Language" },
  { name: "TypeScript", category: "Language" },
  // Backend
  { name: "Django", category: "Backend" },
  { name: "Express.js", category: "Backend" },
  { name: "FastAPI", category: "Backend" },
  { name: "Laravel", category: "Backend" },
  { name: "NestJS", category: "Backend" },
  { name: "Node.js", category: "Backend" },
  // Database
  { name: "Firebase", category: "Database" },
  { name: "MongoDB", category: "Database" },
  { name: "MySQL", category: "Database" },
  { name: "PostgreSQL", category: "Database" },
  { name: "Prisma", category: "Database" },
  { name: "Redis", category: "Database" },
  { name: "Supabase", category: "Database" },
  // API & Architecture
  { name: "GraphQL", category: "API & Architecture" },
  { name: "REST API", category: "API & Architecture" },
  { name: "tRPC", category: "API & Architecture" },
  { name: "WebSockets", category: "API & Architecture" },
  // Styling
  { name: "Bootstrap", category: "Styling" },
  { name: "CSS3", category: "Styling" },
  { name: "Material UI", category: "Styling" },
  { name: "Sass", category: "Styling" },
  { name: "Shadcn UI", category: "Styling" },
  { name: "Tailwind CSS", category: "Styling" },
  // Animation
  { name: "Framer Motion", category: "Animation" },
  { name: "GSAP", category: "Animation" },
  { name: "Lottie", category: "Animation" },
  // Cloud
  { name: "AWS", category: "Cloud" },
  { name: "Azure", category: "Cloud" },
  { name: "Cloudflare", category: "Cloud" },
  { name: "DigitalOcean", category: "Cloud" },
  { name: "Google Cloud", category: "Cloud" },
  { name: "Vercel", category: "Cloud" },
  // DevOps
  { name: "Docker", category: "DevOps" },
  { name: "GitHub Actions", category: "DevOps" },
  { name: "GitLab CI", category: "DevOps" },
  { name: "Kubernetes", category: "DevOps" },
  { name: "Nginx", category: "DevOps" },
  { name: "PM2", category: "DevOps" },
  // AI & ML
  { name: "Claude API", category: "AI & ML" },
  { name: "Gemini API", category: "AI & ML" },
  { name: "LangChain", category: "AI & ML" },
  { name: "OpenAI API", category: "AI & ML" },
  { name: "TensorFlow", category: "AI & ML" },
  // CMS & E-commerce
  { name: "Shopify", category: "CMS & E-commerce" },
  { name: "Strapi", category: "CMS & E-commerce" },
  { name: "WooCommerce", category: "CMS & E-commerce" },
  { name: "WordPress", category: "CMS & E-commerce" },
  // Tools & Testing
  { name: "Cypress", category: "Tools & Testing" },
  { name: "ESLint", category: "Tools & Testing" },
  { name: "Figma", category: "Tools & Testing" },
  { name: "Git", category: "Tools & Testing" },
  { name: "Jest", category: "Tools & Testing" },
  { name: "Playwright", category: "Tools & Testing" },
  { name: "Postman", category: "Tools & Testing" },
  { name: "Vite", category: "Tools & Testing" },
  { name: "Webpack", category: "Tools & Testing" },
  // Payments & Integrations
  { name: "Nodemailer", category: "Payments & Integrations" },
  { name: "Razorpay", category: "Payments & Integrations" },
  { name: "Stripe", category: "Payments & Integrations" },
  { name: "Twilio", category: "Payments & Integrations" },
  { name: "WhatsApp API", category: "Payments & Integrations" },
];

export const blogPosts = [
  {
    slug: "why-nextjs-for-agency-websites",
    title: "Why Next.js is the Best Choice for Agency Websites",
    excerpt: "Performance, SEO, and developer experience — why we build with Next.js.",
    date: "2025-01-15",
    category: "Development",
  },
  {
    slug: "saas-development-checklist",
    title: "SaaS Development Checklist for Startups",
    excerpt: "Essential features and architecture decisions for launching your SaaS product.",
    date: "2025-02-01",
    category: "SaaS",
  },
  {
    slug: "web-development-dubai-guide",
    title: "Web Development Guide for Dubai Businesses",
    excerpt: "What Dubai businesses need from their digital agency in 2025.",
    date: "2025-03-10",
    category: "Business",
  },
];
