"use client";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";
import { Code2, Smartphone, Boxes, PlugZap, Palette, CloudCog, ShieldCheck, LineChart, Globe, Users } from "lucide-react";
import { useInView } from "react-intersection-observer";
import SEOHead, { buildOrganizationJsonLd, buildLocalBusinessJsonLd, buildFaqJsonLd } from "./components/SEOHead";

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      when: "beforeChildren"
    }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut"
    }
  }
};

const slideInLeft = {
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

const slideInRight = {
  hidden: { x: 100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

const hoverEffect = {
  scale: 1.03,
  transition: { duration: 0.3 }
};

const tapEffect = {
  scale: 0.98
};

// Component for scroll-triggered animations
const AnimatedSection = ({ children, from = "left" }) => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={from === "left" ? slideInLeft : slideInRight}
    >
      {children}
    </motion.div>
  );
};

export default function LandingPage() {
  const base = "https://devspheresolutions.in";
  const services = [
    { title: "Custom Web Development", desc: "High‑performance websites and web apps built with modern stacks.", Icon: Code2 },
    { title: "Mobile App Development", desc: "iOS/Android apps with native feel and cross‑platform speed.", Icon: Smartphone },
    { title: "CRM Implementation", desc: "Set up, customize and integrate CRMs to your business workflows.", Icon: Boxes },
    { title: "API & Integrations", desc: "Reliable, secure integrations with third‑party systems and services.", Icon: PlugZap },
    { title: "UI/UX Design", desc: "User‑centred design that’s accessible, beautiful and conversion‑oriented.", Icon: Palette },
    { title: "Cloud & DevOps", desc: "CI/CD, containerization and cloud infrastructure for scale and reliability.", Icon: CloudCog },
    { title: "Security & QA", desc: "Best practices for auth, data protection and automated testing.", Icon: ShieldCheck },
    { title: "Analytics & Growth", desc: "Instrumentation, dashboards and experiments to grow faster.", Icon: LineChart },
    { title: "Globalization", desc: "i18n, localization and performance optimization for worldwide users.", Icon: Globe },
    { title: "Team Augmentation", desc: "Senior engineers and designers embedded with your team.", Icon: Users },
  ];
  return (
    <>
    <SEOHead
      title="Web, Mobile & CRM Product Engineering | DevSphere Solutions"
      description="We design and build high‑quality websites, mobile apps and CRM products for startups and enterprises."
      keywords="web development company in India, CRM development solutions, custom software Uttar Pradesh, mobile app development services India, DevOps cloud solutions for startups"
      url={`${base}/`}
      canonical={`${base}/`}
      image={`${base}/logo.png`}
      type="website"
      jsonLd={[
        buildOrganizationJsonLd({ url: base, logo: `${base}/logo.png` }),
        buildLocalBusinessJsonLd({ url: base }),
        buildFaqJsonLd([
          { q: "What services do you offer?", a: "Web, mobile, CRM, APIs, UI/UX, cloud and DevOps." },
          { q: "Typical timeline?", a: "MVPs in 6–10 weeks; larger builds delivered in milestones." },
        ]),
      ]}
    />
    <div className="font-sans text-gray-800 overflow-x-hidden">
      {/* Hero Section */}
      <section className="px-6 py-16 grid md:grid-cols-2 gap-10 items-center max-w-6xl mx-auto">
        <AnimatedSection from="left">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold leading-tight">
              Your Business Deserves Expert-<span className="text-blue-600">Led Growth</span>
            </h2>
            <p className="mt-4 text-gray-600">
              We design and build web, mobile and CRM products that help businesses launch faster,
              scale reliably and deliver delightful user experiences.
            </p>
            <div className="mt-6 flex gap-4">
              <motion.div whileHover={hoverEffect} whileTap={tapEffect} className="inline-block">
                <Link href="/contact" className="bg-blue-600 text-white px-6 py-3 rounded-lg inline-block">Schedule a Call</Link>
              </motion.div>
              <motion.button 
                className="border border-blue-600 text-blue-600 px-6 py-3 rounded-lg"
                whileHover={{ 
                  backgroundColor: "#2563eb",
                  color: "white",
                  transition: { duration: 0.3 }
                }}
                whileTap={tapEffect}
              >
                <Link href="/about">Learn More</Link>
              </motion.button>
            </div>
            <div className="mt-6 flex gap-6 text-sm text-gray-500">
              <span>✔ Trusted by 150+ clients</span>
              <span>✔ Proven Results</span>
            </div>
          </div>
        </AnimatedSection>
        
        <AnimatedSection from="right">
          <motion.img
            src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf"
            alt="Business Meeting"
            className="rounded-2xl shadow-lg"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          />
        </AnimatedSection>
      </section>

      {/* Stats Section */}
      <section className="bg-gray-50 py-12">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { value: "60+", label: "Projects Delivered" },
            { value: "25+", label: "Active Clients" },
            { value: "98%", label: "Avg. CSAT Score" },
            { value: "3+", label: "Years Building" }
          ].map((stat, i) => (
            <AnimatedSection key={i} from={i % 2 === 0 ? "left" : "right"}>
              <motion.div whileHover={{ y: -5 }}>
                <h3 className="text-3xl font-bold text-blue-600">{stat.value}</h3>
                <p className="text-gray-600 mt-2">{stat.label}</p>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
      </section>

      {/* Consulting Section */}
      <section className="px-6 py-16 grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
        <AnimatedSection from="left">
          <motion.div whileHover={{ scale: 1.02 }} transition={{ duration: 0.3 }} className="rounded-2xl shadow-lg overflow-hidden">
            <Image src="/about.png" alt="About Us - Product Engineering. Real Results." width={960} height={720} loading="lazy" className="w-full h-auto" />
          </motion.div>
        </AnimatedSection>
        
        <AnimatedSection from="right">
          <div>
            <h4 className="text-blue-600 font-semibold">About Us</h4>
            <h2 className="text-3xl font-bold mt-2">Product Engineering. Real Results.</h2>
            <p className="mt-4 text-gray-600">
              We provide tailored strategies that empower your business to adapt and thrive in a rapidly changing market.
            </p>
            <motion.div whileHover={hoverEffect} whileTap={tapEffect} className="mt-6 inline-block">
              <Link className="bg-blue-600 text-white px-6 py-3 rounded-lg inline-block" href="/about">Learn More</Link>
            </motion.div>
          </div>
        </AnimatedSection>
      </section>

      {/* Services Section */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-6xl mx-auto text-center">
          <AnimatedSection from="left">
            <h2 className="text-3xl font-bold">What We Can Do for You</h2>
          </AnimatedSection>
          
          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {services.map((s, i) => (
              <AnimatedSection key={s.title} from={i % 2 === 0 ? "left" : "right"}>
                <motion.div
                  className="p-6 bg-white rounded-xl shadow hover:shadow-lg transition group"
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  whileHover={{ y: -6 }}
                >
                  <div className="flex items-start gap-4">
                    <div className="rounded-lg bg-blue-50 text-blue-600 p-3 shrink-0">
                      <s.Icon className="w-6 h-6" />
                    </div>
                    <div className="text-left">
                      <h3 className="font-semibold text-gray-900">{s.title}</h3>
                      <p className="text-gray-600 text-sm mt-2">{s.desc}</p>
                    </div>
                  </div>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="px-6 py-16 max-w-6xl mx-auto text-center">
        <AnimatedSection from="left">
          <h4 className="text-blue-600 font-semibold">Process</h4>
        </AnimatedSection>
        
        <AnimatedSection from="right">
          <h2 className="text-3xl font-bold">Our Proven Process</h2>
        </AnimatedSection>
        
        <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-8">
          {["Discovery", "Strategy", "Implementation", "Optimization"].map((step, i) => (
            <AnimatedSection 
              key={i} 
              from={i % 2 === 0 ? "left" : "right"}
            >
              <motion.div 
                className="p-6 bg-white rounded-xl shadow"
                whileHover={{ 
                  y: -5,
                  backgroundColor: "#f8fafc",
                  transition: { duration: 0.3 }
                }}
              >
                <div className="w-12 h-12 mx-auto mb-4 flex items-center justify-center rounded-full bg-blue-100 text-blue-600 font-bold">
                  {i + 1}
                </div>
                <h3 className="font-semibold">{step}</h3>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
      </section>

      {/* Future Section */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto grid md:grid-cols-2 gap-10 px-6">
          <AnimatedSection from="left">
            <div className="flex flex-col justify-center">
              <h2 className="text-4xl font-bold leading-snug text-gray-900">
                Build Your <span className="text-blue-600">Future</span> with Us
              </h2>
              <p className="mt-4 text-gray-600">
                Let’s build the next version of your product together — faster, better and scalable.
              </p>
              <motion.div whileHover={hoverEffect} whileTap={tapEffect} className="mt-6 inline-block">
                <Link href="/contact" className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 inline-block">Get Started</Link>
              </motion.div>
            </div>
          </AnimatedSection>
          
          <AnimatedSection from="right">
            <motion.img
              src="https://images.unsplash.com/photo-1579389083078-4e7018379f7e"
              alt="Teamwork"
              className="rounded-xl shadow-lg"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            />
          </AnimatedSection>
        </div>
      </section>

      {/* Features */}
      <section className="container mx-auto py-16 px-6">
        <AnimatedSection from="left">
          <h3 className="text-center text-3xl font-bold text-gray-900">
            How We Work
          </h3>
        </AnimatedSection>
        
        <div className="mt-10 grid md:grid-cols-3 gap-8">
          {[
            { title: "Strategy", desc: "We align product goals with business outcomes and define a clear roadmap." },
            { title: "Design", desc: "We craft user-centric interfaces and flows that are simple, accessible and beautiful." },
            { title: "Engineering", desc: "We ship robust, scalable software using modern stacks and best practices." }
          ].map((feature, i) => (
            <AnimatedSection 
              key={i}
              from={i === 1 ? "right" : "left"}
            >
              <motion.div
                className="p-6 bg-white shadow-md rounded-xl text-center hover:shadow-xl transition"
                whileHover={{ 
                  y: -5,
                  boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)"
                }}
              >
                <h4 className="text-xl font-semibold text-blue-600">{feature.title}</h4>
                <p className="mt-3 text-gray-600">{feature.desc}</p>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-gray-50 py-16 px-6">
        <AnimatedSection from="left">
          <h3 className="text-center text-3xl font-bold text-gray-900">
            Client Reviews About Our Work
          </h3>
        </AnimatedSection>
        
        <div className="mt-10 grid md:grid-cols-2 gap-8 container mx-auto">
          {[
            {
              quote: "DevSphere helped us launch our MVP in 8 weeks and scale to our first 10k users.",
              author: "Amit Verma, Founder — BrightCart"
            },
            {
              quote: "Clean architecture, great communication and on-time delivery. Exactly what we needed.",
              author: "Neha Sharma, Product Lead — FinEdge"
            }
          ].map((testimonial, i) => (
            <AnimatedSection 
              key={i}
              from={i === 0 ? "left" : "right"}
            >
              <motion.div
                className="p-6 bg-white shadow-md rounded-xl"
                whileHover={{ 
                  y: -5,
                  boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)"
                }}
              >
<p className="text-gray-600">&quot;{testimonial.quote}&quot;</p>
<h4 className="mt-4 font-bold">- {testimonial.author}</h4>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="container mx-auto py-16 px-6">
        <AnimatedSection from="left">
          <h3 className="text-center text-3xl font-bold text-gray-900">
            Smart Pricing Plans
          </h3>
        </AnimatedSection>
        
        <div className="mt-10 grid md:grid-cols-3 gap-8">
          {[
            { name: "MVP", price: "From ₹75k" },
            { name: "Growth", price: "From ₹2.5L" },
            { name: "Scale", price: "Custom quote" }
          ].map((plan, i) => (
            <AnimatedSection 
              key={i}
              from={i === 1 ? "right" : "left"}
            >
              <motion.div
                className="p-8 bg-white shadow-md rounded-xl text-center hover:shadow-xl transition"
                whileHover={{ 
                  y: -5,
                  scale: 1.03,
                  boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)"
                }}
              >
                <h4 className="text-xl font-semibold">{plan.name}</h4>
                <p className="mt-2 text-gray-600">{plan.price}</p>
                <motion.button 
                  className="mt-6 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Get Started
                </motion.button>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-gray-50 py-16 px-6">
        <AnimatedSection from="left">
          <h3 className="text-center text-3xl font-bold text-gray-900">
            Everything You Need to Know
          </h3>
        </AnimatedSection>
        
        <div className="mt-10 max-w-2xl mx-auto space-y-4">
          {[
            { q: "What services do you offer?", a: "Custom web and mobile development, CRM implementation, UI/UX, APIs, cloud and DevOps." },
            { q: "What is your typical timeline?", a: "MVPs in 6–10 weeks. Larger builds are broken into milestones with fortnightly releases." },
            { q: "How do we start?", a: "Share your goals on the contact page. We’ll schedule a discovery call and send a proposal." }
          ].map((item, i) => (
            <AnimatedSection key={i} from={i % 2 === 0 ? "left" : "right"}>
              <motion.div
                className="p-4 bg-white shadow rounded-lg hover:shadow-lg transition cursor-pointer"
                whileHover={{ y: -2, backgroundColor: "#f8fafc" }}
                whileTap={{ scale: 0.98 }}
              >
                <h4 className="font-semibold text-gray-800">{item.q}</h4>
                <p className="text-gray-600 mt-2">{item.a}</p>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
      </section>

      {/* Blog */}
      <section className="container mx-auto py-16 px-6">
        <AnimatedSection from="left">
          <h3 className="text-center text-3xl font-bold text-gray-900">
            Insights to Grow Your Business
          </h3>
        </AnimatedSection>
        
        <div className="mt-10 grid md:grid-cols-2 gap-8">
          {[
            {
              title: "Business Growth Strategies",
              img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71"
            },
            {
              title: "Modern Marketing Techniques",
              img: "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5"
            }
          ].map((post, i) => (
            <AnimatedSection 
              key={i}
              from={i === 0 ? "left" : "right"}
            >
              <motion.div
                className="p-6 bg-white shadow-md rounded-xl overflow-hidden"
                whileHover={{ 
                  y: -5,
                  boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)"
                }}
              >
                <motion.img
                  src={post.img}
                  alt="Blog"
                  className="rounded-lg w-full h-48 object-cover"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                />
                <h4 className="mt-4 font-semibold text-xl">{post.title}</h4>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="text-white py-16 text-center cta-gradient relative overflow-hidden">
        <AnimatedSection from="left">
          <h3 className="text-3xl md:text-4xl font-bold">
            Ready to Take Your Business to the Next Level?
          </h3>
          <p className="mt-3 text-blue-100 max-w-2xl mx-auto px-6">
            Partner with DevSphere to design, build and scale world‑class digital products.
          </p>
        </AnimatedSection>
        <AnimatedSection from="right">
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }} className="mt-8 inline-block">
            <Link href="/contact" className="px-8 py-3 rounded-xl font-semibold btn-smart inline-block">
              Let’s Talk
            </Link>
          </motion.div>
        </AnimatedSection>
      </section>
    </div>
    </>
  );
}