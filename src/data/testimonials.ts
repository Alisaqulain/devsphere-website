export interface Testimonial {
  name: string;
  role: string;
  company: string;
  location: string;
  quote: string;
}

// Edit testimonials with real client feedback when available
export const testimonials: Testimonial[] = [
  {
    name: "Ahmed Al-Mansoori",
    role: "Chief Executive Officer",
    company: "Vega Wealth",
    location: "Dubai, UAE",
    quote:
      "DevSphere Solutions delivered a world-class platform that transformed our client engagement. Professional, strategic, and exceeded expectations.",
  },
  {
    name: "Rajesh Kumar",
    role: "Founder & Managing Director",
    company: "Krishi Kutumb",
    location: "India",
    quote:
      "They understood our business needs from day one and delivered a solution that significantly improved operational efficiency.",
  },
  {
    name: "Sarah Mitchell",
    role: "Operations Director",
    company: "Auto Excel Pro",
    location: "Global",
    quote:
      "The platform transformed our operations — increased efficiency, better customer relationships, and measurable growth.",
  },
  {
    name: "Mohammed Hassan",
    role: "Business Development Manager",
    company: "Dunex Dubai",
    location: "Dubai, UAE",
    quote:
      "Outstanding service and delivery. DevSphere demonstrated deep market understanding and became central to our business success.",
  },
  {
    name: "Priya Sharma",
    role: "E-Commerce Director",
    company: "The Accessory Center MZN",
    location: "India",
    quote:
      "Our platform exceeded expectations. Responsive team, professional execution, and a seamless customer experience.",
  },
  {
    name: "Dr. James Wilson",
    role: "Chief Technology Officer",
    company: "MPCPCT",
    location: "Global",
    quote:
      "A robust EdTech platform with excellent reliability. DevSphere is an ideal long-term technology partner.",
  },
];
