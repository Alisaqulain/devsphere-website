export interface ProjectMetric {
  label: string;
  value: string;
  trend?: string;
}

export interface Project {
  title: string;
  slug: string;
  category: string;
  description: string;
  longDescription: string;
  problem: string;
  solution: string;
  features: string[];
  techStack: string[];
  result: string;
  image: string;
  gallery?: string[];
  metrics?: ProjectMetric[];
  liveUrl?: string;
  instagramUrl?: string;
  year: string;
  country: string;
  status: "Live" | "In Progress" | "Completed";
}

// Update liveUrl, instagramUrl, and image paths with real assets when available
export const projects: Project[] = [
  {
    title: "Chacha Mobile CRM",
    slug: "chacha-mobile-crm",
    category: "CRM / Business Management",
    description:
      "Tally-like Sales & Purchase CRM system with inventory control, billing, and customer tracking — built after a successful website delivery.",
    longDescription:
      "After delivering the Chacha Mobile website, the client trusted us to build a complete business management system — a Tally-like CRM tailored to wholesale mobile spare parts across Muzaffarnagar, Meerut, Shamli & Western UP. The platform unifies sales, purchase, billing, and shop-level customer tracking in one real-time dashboard.",
    problem:
      "Manual sales registers, scattered purchase records, and no unified inventory view across 1200+ partner shops — billing delays and stock mismatches were costing daily revenue.",
    solution:
      "Built a full Sales & Purchase CRM with live stock ledger, GST-ready billing, customer credit tracking, and income/expense dashboards — mirroring Tally workflows in a modern web app.",
    features: [
      "Smart sales & purchase management with GST invoices",
      "Complete CRM with shop-wise customer & credit tracking",
      "Real-time inventory & low-stock alerts across SKUs",
      "Income, expense & profit dashboard with daily summaries",
      "Billing, order management & WhatsApp-ready receipts",
      "Mobile-friendly responsive design for field staff",
      "Role-based access for admin, sales & warehouse teams",
      "Export-ready reports for accounts & tax filing",
    ],
    techStack: ["React", "Next.js", "Node.js", "MongoDB", "Tailwind CSS"],
    result:
      "Complete business automation — faster billing cycles, accurate stock visibility, and a trusted long-term partnership after the initial website delivery.",
    image: "/images/projects/chacha-mobile-crm.jpg",
    gallery: ["/images/projects/chacha-mobile-crm.jpg"],
    metrics: [
      { label: "SKUs Managed", value: "5,000+", trend: "+18% YoY" },
      { label: "Partner Shops", value: "1,200+", trend: "Western UP" },
      { label: "Stock Accuracy", value: "98%", trend: "Real-time sync" },
      { label: "Billing Speed", value: "40%", trend: "Faster checkout" },
    ],
    liveUrl: "https://chachamobile.in/",
    year: "2025",
    country: "India",
    status: "Live",
  },
  {
    title: "Royal Metro EV",
    slug: "royal-metro-ev",
    category: "Electric Vehicles / Brand Website",
    description:
      "Modern, SEO-optimized electric vehicle platform with futuristic UI, ultra-fast performance, and conversion-focused design.",
    longDescription:
      "High-performance EV brand website for Royal Metro EV — Muzaffarnagar's I-CAT certified e-rickshaw manufacturer. We built a conversion-focused digital platform with hero sliders, model specs, dealer enquiry flows, and local SEO targeting Uttar Pradesh's electric mobility market.",
    problem:
      "Royal Metro EV had strong offline dealer networks but weak online visibility — slow pages, poor local SEO, and no structured way to capture leads from EV buyers searching in UP.",
    solution:
      "Delivered a blazing-fast Next.js site with structured data, geo-targeted SEO, animated product showcases, and enquiry CTAs optimized for mobile-first Indian buyers.",
    features: [
      "Clean & futuristic EV-focused UI with hero sliders",
      "Ultra-fast Next.js performance & Core Web Vitals",
      "Fully SEO-optimized — local UP & Muzaffarnagar keywords",
      "Model pages with 60V battery & 100–150 KM range specs",
      "Dealer enquiry & WhatsApp lead capture flows",
      "Mobile-first responsive design for tier-2 cities",
      "I-CAT certification & trust badges prominently displayed",
      "Scalable architecture for future model launches",
    ],
    techStack: ["Next.js", "Tailwind CSS", "SEO Optimization", "Performance Tuning"],
    result:
      "Production-ready digital platform driving brand visibility, dealer enquiries, and top local search rankings for e-rickshaw buyers in Western UP.",
    image: "/images/projects/royal-metro-ev.jpg",
    gallery: ["/images/projects/royal-metro-ev.jpg", "/images/projects/royal-metro-ev-logo.jpg"],
    metrics: [
      { label: "Battery", value: "60V", trend: "Long-range pack" },
      { label: "Range", value: "150 KM", trend: "Per charge" },
      { label: "Certification", value: "I-CAT", trend: "Govt. approved" },
      { label: "Page Speed", value: "95+", trend: "Lighthouse score" },
    ],
    liveUrl: "https://royalmetroev.com/",
    year: "2025",
    country: "India",
    status: "Live",
  },
  {
    title: "Digital Career Center",
    slug: "digital-career-center",
    category: "EdTech / IT Training",
    description:
      "Official IT training and career advancement platform with fast, scalable, and fully responsive web experience.",
    longDescription:
      "Official website for Digital Career Center — a leading platform offering top-notch IT training and career advancement, built with Next.js and MongoDB for performance and scalability.",
    problem: "Training institute needed a modern digital platform aligned with their career growth vision.",
    solution: "Designed and developed a user-focused, performance-driven website with course showcases and lead capture.",
    features: [
      "IT training course showcase",
      "Career advancement programs",
      "Fast & scalable architecture",
      "Fully responsive design",
      "Lead generation flows",
      "Modern user-focused UI",
    ],
    techStack: ["Next.js", "MongoDB", "Tailwind CSS", "Node.js"],
    result: "Empowered the institute with a professional digital presence that supports student enrollment and brand growth.",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=600&fit=crop",
    liveUrl: "https://www.digitalcareercenter.com/",
    year: "2025",
    country: "India",
    status: "Live",
  },
  {
    title: "Crossline Cricket Stadium",
    slug: "crossline-cricket-stadium",
    category: "Sports Booking Platform",
    description:
      "Cricket stadium website with booking system, admin slot management, match updates, income/expense tracking, and inventory management.",
    longDescription:
      "A complete cricket stadium management platform combining public booking experiences with powerful admin tools for slot management, financial tracking, and inventory control.",
    problem: "Manual booking, scattered match updates, and no unified income/expense visibility.",
    solution: "Built a responsive public website with integrated admin dashboard for operations and finance.",
    features: [
      "Online slot booking",
      "Admin slot management",
      "Match updates",
      "Income & expense tracking",
      "Inventory management",
      "Responsive public website",
    ],
    techStack: ["React", "Node.js", "MySQL", "Tailwind CSS", "REST API"],
    result: "Streamlined stadium operations with digital booking and real-time admin control.",
    image: "https://images.unsplash.com/photo-1531415074968-036ba1b575da?w=800&h=600&fit=crop",
    liveUrl: "http://crosslinecricketstadium.in/",
    instagramUrl: "https://www.instagram.com/dev.spheresolutions/p/DYnB9DWPSUQ/",
    year: "2024",
    country: "India",
    status: "Live",
  },
  {
    title: "Dunex Dubai",
    slug: "dunex-dubai",
    category: "Real Estate / Investment",
    description:
      "Dubai real estate investment platform with property listings, ROI-focused content, lead generation, and authentication flows.",
    longDescription:
      "Premium Dubai real estate platform designed to convert investors through property showcases, ROI calculators, and secure lead capture.",
    problem: "Low-quality lead capture and poor property presentation for international investors.",
    solution: "Designed a premium investment-focused platform with structured listings and conversion funnels.",
    features: [
      "Property listings",
      "ROI-focused content",
      "Lead generation forms",
      "User authentication",
      "Payment-ready flows",
      "Admin content management",
    ],
    techStack: ["Next.js", "React", "Node.js", "PostgreSQL", "Tailwind CSS"],
    result: "Increased qualified investor leads with a professional Dubai-market presence.",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=600&fit=crop",
    liveUrl: "https://dunexdubai.com/",
    instagramUrl: "https://www.instagram.com/dev.spheresolutions/p/DYIJc7jDxC2/",
    year: "2024",
    country: "UAE",
    status: "Live",
  },
  {
    title: "MPCPCT",
    slug: "mpcpct",
    category: "EdTech / Exam Platform",
    description:
      "Online exam preparation and typing test platform with admin dashboard, certificates, and Hindi/English typing features.",
    longDescription:
      "Comprehensive CPCT exam preparation platform with practice tests, typing modules, certificates, and full admin control.",
    problem: "Students lacked a unified platform for CPCT practice and certification.",
    solution: "Built an EdTech platform with bilingual typing tests, exam modules, and admin analytics.",
    features: [
      "Practice tests",
      "Hindi/English typing",
      "Certificate generation",
      "Admin dashboard",
      "User management",
      "Progress tracking",
    ],
    techStack: ["React", "Laravel", "MySQL", "Tailwind CSS"],
    result: "Thousands of students prepared for certification with structured digital practice.",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=600&fit=crop",
    liveUrl: "https://www.mpcpct.com/",
    instagramUrl: "https://www.instagram.com/dev.spheresolutions/p/DX9DHQSD3CO/",
    year: "2023",
    country: "India",
    status: "Live",
  },
  {
    title: "AutoExcelPro",
    slug: "autoexcelpro",
    category: "SaaS / Automobile",
    description:
      "Digital automobile service platform with dashboard, lead system, and business automation.",
    longDescription:
      "SaaS platform for automotive businesses to manage leads, services, and operations from a unified dashboard.",
    problem: "Dealerships struggled with manual lead tracking and disconnected workflows.",
    solution: "Delivered a SaaS dashboard with lead management and automation pipelines.",
    features: [
      "Lead management",
      "Service tracking",
      "Business dashboard",
      "Automation workflows",
      "Reporting",
      "Multi-user access",
    ],
    techStack: ["React", "Node.js", "MongoDB", "Tailwind CSS"],
    result: "Improved lead conversion and operational efficiency for automotive clients.",
    image: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=800&h=600&fit=crop",
    liveUrl: "http://autoexcelpro.com/",
    instagramUrl: "https://www.instagram.com/dev.spheresolutions/p/DXxE0FcEyyB/",
    year: "2024",
    country: "Global",
    status: "Live",
  },
  {
    title: "InfoGate Oman",
    slug: "infogate-oman",
    category: "Bilingual Business Website",
    description:
      "Oman-based bilingual Arabic/English business website with RTL support, services, pricing, blog, and admin panel.",
    longDescription:
      "Fully bilingual business platform for the Oman market with RTL Arabic support, services, pricing, and admin management.",
    problem: "Business needed bilingual presence with Arabic RTL and content management.",
    solution: "Delivered a bilingual website with RTL, admin panel, blog, and contact flows.",
    features: [
      "Arabic/English bilingual",
      "RTL support",
      "Services & pricing pages",
      "Blog system",
      "Admin panel",
      "Contact workflows",
    ],
    techStack: ["Next.js", "i18n", "Tailwind CSS", "Node.js", "PostgreSQL"],
    result: "Expanded Oman market reach with professional bilingual digital presence.",
    image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=800&h=600&fit=crop",
    instagramUrl: "https://www.instagram.com/dev.spheresolutions/p/DTN4rwnD2lA/",
    year: "2024",
    country: "Oman",
    status: "Live",
  },
  {
    title: "Vega Wealth",
    slug: "vega-wealth",
    category: "Wealth / Finance Advisory",
    description:
      "Dubai-based wealth advisory website with premium finance UI, service pages, and lead generation.",
    longDescription:
      "High-end wealth management website for Dubai HNW clients with premium design and conversion-focused flows.",
    problem: "Wealth firm needed a premium digital presence to attract high-net-worth clients.",
    solution: "Designed a luxury finance website with service showcases and secure lead capture.",
    features: [
      "Premium finance UI",
      "Service pages",
      "Lead generation",
      "Client trust sections",
      "Responsive design",
      "SEO optimization",
    ],
    techStack: ["React", "Tailwind CSS", "Node.js", "Framer Motion"],
    result: "Elevated brand perception and increased qualified advisory enquiries.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
    liveUrl: "http://vegawealth.com/",
    instagramUrl: "https://www.instagram.com/dev.spheresolutions/p/DSh3UgMD0vg/",
    year: "2023",
    country: "UAE",
    status: "Live",
  },
  {
    title: "Laptop Secure",
    slug: "laptop-secure",
    category: "Tech Service Website",
    description:
      "Laptop service and security website with service showcase, contact system, and responsive UI.",
    longDescription:
      "Service-focused website for laptop repair and security solutions with clear service pages and contact flows.",
    problem: "Local service business lacked online visibility and structured service information.",
    solution: "Built a clean service website with showcase pages and integrated contact system.",
    features: [
      "Service showcase",
      "Contact system",
      "Responsive UI",
      "Service categories",
      "Location info",
      "Fast loading pages",
    ],
    techStack: ["React", "Tailwind CSS", "Node.js"],
    result: "Improved local discoverability and inbound service requests.",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&h=600&fit=crop",
    liveUrl: "https://laptopsecure.in/",
    instagramUrl: "https://www.instagram.com/dev.spheresolutions/p/DRSISRaD_fE/",
    year: "2023",
    country: "India",
    status: "Live",
  },
  {
    title: "MZ Technicals",
    slug: "mz-technicals",
    category: "Handyman Services",
    description:
      "Dubai handyman services website for electrical, plumbing, AC, painting, maintenance, and repair.",
    longDescription:
      "Multi-service handyman platform for Dubai covering electrical, plumbing, AC, painting, and general maintenance.",
    problem: "Service provider needed a professional site to showcase diverse maintenance services.",
    solution: "Created a service-category website with enquiry forms and Dubai-focused branding.",
    features: [
      "Electrical services",
      "Plumbing & AC",
      "Painting & maintenance",
      "Service enquiry forms",
      "Mobile responsive",
      "WhatsApp integration",
    ],
    techStack: ["React", "Tailwind CSS", "Node.js"],
    result: "Increased service enquiries across multiple maintenance categories.",
    image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=800&h=600&fit=crop",
    liveUrl: "https://mztechnicals.com/",
    instagramUrl: "https://www.instagram.com/dev.spheresolutions/p/DRAQlROD_Jw/",
    year: "2024",
    country: "UAE",
    status: "Live",
  },
  {
    title: "Krishi Kutumb",
    slug: "krishi-kutumb",
    category: "Agriculture / Community",
    description:
      "Agriculture-based digital platform empowering farmers with community features and market connectivity.",
    longDescription:
      "Digital agriculture platform connecting farmers with resources, community, and market opportunities.",
    problem: "Farmers lacked a unified digital platform for community and market access.",
    solution: "Built an agriculture community platform with data-driven features and connectivity.",
    features: [
      "Farmer community",
      "Market connectivity",
      "Resource sharing",
      "Admin dashboard",
      "Mobile responsive",
      "Regional content",
    ],
    techStack: ["React", "Node.js", "MySQL", "Tailwind CSS"],
    result: "Strengthened farmer community engagement and digital market access.",
    image: "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?w=800&h=600&fit=crop",
    liveUrl: "https://www.krishikutumb.com/",
    instagramUrl: "https://www.instagram.com/dev.spheresolutions/p/DOO9wX4k7_A/",
    year: "2023",
    country: "India",
    status: "Live",
  },
  {
    title: "The Accessory Center MZN",
    slug: "accessory-center-mzn",
    category: "Retail / E-commerce",
    description:
      "Local accessory business website with product showcase and contact-focused layout.",
    longDescription:
      "Retail accessory business website designed for product showcase and customer enquiries.",
    problem: "Local retailer needed online product visibility without full e-commerce complexity.",
    solution: "Delivered a showcase website with product galleries and contact-focused conversion.",
    features: [
      "Product showcase",
      "Category pages",
      "Contact forms",
      "Gallery",
      "Mobile-first design",
      "Fast performance",
    ],
    techStack: ["React", "Tailwind CSS", "Node.js"],
    result: "Expanded local customer reach with professional product presentation.",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop",
    liveUrl: "https://www.theaccessorycentermzn.in/",
    year: "2023",
    country: "India",
    status: "Live",
  },
  {
    title: "Spry Insurance Broker",
    slug: "spry-insurance-broker",
    category: "Insurance Website",
    description:
      "Corporate insurance broker website with retail, corporate, and industry insurance pages and lead generation.",
    longDescription:
      "Professional insurance broker platform covering retail, corporate, and industry-specific insurance solutions with trust-focused design.",
    problem: "Outdated web presence failing to generate qualified insurance leads.",
    solution: "Built a corporate website with segmented insurance pages and conversion-focused lead capture.",
    features: [
      "Retail insurance pages",
      "Corporate insurance",
      "Industry-specific sections",
      "Lead generation forms",
      "Professional UI",
      "SEO-optimized content",
    ],
    techStack: ["React", "Tailwind CSS", "Node.js"],
    result: "Stronger brand credibility and improved inbound insurance enquiries.",
    image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&h=600&fit=crop",
    year: "2024",
    country: "UAE",
    status: "Live",
  },
  {
    title: "Skyline Decor",
    slug: "skyline-decor",
    category: "Interior / Decor",
    description:
      "Premium interior decor and design services website with portfolio showcase and enquiry system.",
    longDescription:
      "Elegant decor brand website showcasing interior design services, portfolio galleries, and lead generation for premium clients.",
    problem: "Decor business lacked a premium online presence to showcase work and capture enquiries.",
    solution: "Delivered a visually rich website with portfolio galleries, service pages, and contact flows.",
    features: [
      "Portfolio gallery",
      "Service showcase",
      "Lead generation",
      "Premium UI design",
      "Mobile responsive",
      "SEO optimization",
    ],
    techStack: ["Next.js", "React", "Tailwind CSS"],
    result: "Elevated brand perception and increased qualified interior design enquiries.",
    image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=800&h=600&fit=crop",
    year: "2024",
    country: "India",
    status: "Live",
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getFeaturedProjects(count = 6): Project[] {
  return projects.slice(0, count);
}
