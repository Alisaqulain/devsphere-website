"use client";
import React from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Code2, Smartphone, Boxes, PlugZap, Palette, CloudCog, ShieldCheck, LineChart, Globe, Users, Rocket, Zap, Award } from "lucide-react";
import { useInView } from "react-intersection-observer";

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      when: "beforeChildren",
    },
  },
};

const itemVariants = {
  hidden: { y: 30, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const slideInLeft = {
  hidden: { x: -120, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const slideInRight = {
  hidden: { x: 120, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const hoverEffect = {
  scale: 1.05,
  transition: { duration: 0.4, ease: "easeOut" },
};

const tapEffect = {
  scale: 0.95,
  transition: { duration: 0.2 },
};

// Component for scroll-triggered animations
const AnimatedSection = ({ children, from = "left", className }) => {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={from === "left" ? slideInLeft : slideInRight}
      className={className}
    >
      {children}
    </motion.div>
  );
};

// SEOHead Component (simplified for brevity)
const SEOHead = ({ title, description, keywords, url, canonical, image, type, jsonLd }) => (
  <>
    <title>{title}</title>
    <meta name="description" content={description} />
    <meta name="keywords" content={keywords} />
    <meta property="og:title" content={title} />
    <meta property="og:description" content={description} />
    <meta property="og:image" content={image} />
    <meta property="og:url" content={url} />
    <meta property="og:type" content={type} />
    <link rel="canonical" href={canonical} />
    {jsonLd.map((ld, i) => (
      <script key={i} type="application/ld+json">{JSON.stringify(ld)}</script>
    ))}
  </>
);

const buildOrganizationJsonLd = ({ url, logo }) => ({
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "DevSphere Solutions",
  url,
  logo,
});

const buildLocalBusinessJsonLd = ({ url }) => ({
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "DevSphere Solutions",
  url,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Uttar Pradesh",
    addressCountry: "India",
  },
});

const buildFaqJsonLd = (faqs) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map(({ q, a }) => ({
    "@type": "Question",
    name: q,
    acceptedAnswer: { "@type": "Answer", text: a },
  })),
});

export default function LandingPage() {
  const base = "https://devspheresolutions.in";
  const services = [
    { title: "Custom Web Development", desc: "High-performance websites and web apps built with modern frameworks like Next.js, React, and Node.js.", Icon: Code2 },
    { title: "Mobile App Development", desc: "Native and cross-platform iOS/Android apps with Flutter or React Native for seamless performance.", Icon: Smartphone },
    { title: "CRM Implementation", desc: "Tailored CRM solutions with platforms like Salesforce, HubSpot, or custom builds for your workflows.", Icon: Boxes },
    { title: "API & Integrations", desc: "Secure, scalable APIs and integrations with tools like Stripe, Twilio, or custom endpoints.", Icon: PlugZap },
    { title: "UI/UX Design", desc: "Intuitive, accessible designs crafted to enhance user engagement and drive conversions.", Icon: Palette },
    { title: "Cloud & DevOps", desc: "AWS, Azure, or GCP solutions with CI/CD pipelines, Kubernetes, and Docker for scalability.", Icon: CloudCog },
    { title: "Security & QA", desc: "Robust security practices and automated testing for reliable, secure applications.", Icon: ShieldCheck },
    { title: "Analytics & Growth", desc: "Data-driven insights with tools like Google Analytics, Mixpanel, or custom dashboards.", Icon: LineChart },
    { title: "Globalization", desc: "Localization, i18n, and performance optimization for global audiences.", Icon: Globe },
    { title: "Team Augmentation", desc: "Embed our senior engineers and designers to accelerate your project timelines.", Icon: Users },
  ];

  return (
    <>
      <SEOHead
        title="Innovative Web, Mobile & CRM Solutions | DevSphere Solutions"
        description="DevSphere Solutions builds cutting-edge websites, mobile apps, and CRM systems for startups and enterprises, delivering scalable, high-quality digital products."
        keywords="web development India, mobile app development, CRM solutions, DevOps services, UI/UX design, custom software development, startup tech solutions"
        url={`${base}/`}
        canonical={`${base}/`}
        image={`${base}/logo.png`}
        type="website"
        jsonLd={[
          buildOrganizationJsonLd({ url: base, logo: `${base}/logo.png` }),
          buildLocalBusinessJsonLd({ url: base }),
          buildFaqJsonLd([
            { q: "What services does DevSphere offer?", a: "We provide web and mobile app development, CRM implementation, API integrations, UI/UX design, cloud solutions, and more." },
            { q: "What is the typical project timeline?", a: "MVPs are delivered in 6–12 weeks, with larger projects broken into iterative milestones." },
            { q: "How do you ensure quality?", a: "We follow agile methodologies, rigorous QA, and best-in-class security practices." },
          ]),
        ]}
      />
      <div className="font-sans text-white bg-gradient-to-br from-gray-900 via-gray-800 to-black overflow-x-hidden">
        {/* Hero Section */}
        <section className="relative min-h-[90vh] flex items-center justify-center bg-gradient-to-br from-blue-900 via-indigo-800 to-purple-900">
          <div className="absolute inset-0 bg-[url('/grid-pattern.png')] opacity-10 bg-cover" />
          <div className="relative max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-12">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <AnimatedSection from="left">
                <motion.div variants={containerVariants}>
                  <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight text-white">
                    Crafting <span className="text-blue-400">Next-Gen</span> Digital Experiences
                  </h1>
                  <motion.p variants={itemVariants} className="mt-6 text-lg text-gray-200 max-w-lg">
                    We empower startups and enterprises with innovative websites, apps, and platforms that drive growth and scalability.
                  </motion.p>
                  <motion.div variants={itemVariants} className="mt-8 flex flex-wrap gap-4">
                    <Link
                      href="/services"
                      className="px-6 py-3 rounded-lg text-white font-semibold bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 shadow-lg"
                    >
                      Discover Our Services
                    </Link>
                    <Link
                      href="/contact"
                      className="px-6 py-3 rounded-lg border border-gray-300 text-white hover:bg-gray-800/50 transition-colors"
                    >
                      Get in Touch
                    </Link>
                  </motion.div>
                  <motion.div variants={itemVariants} className="mt-6 flex gap-6 text-sm text-gray-300">
                    <span className="flex items-center gap-2"><Award className="w-5 h-5" /> 200+ Successful Projects</span>
                    <span className="flex items-center gap-2"><Zap className="w-5 h-5" /> Agile Delivery</span>
                  </motion.div>
                </motion.div>
              </AnimatedSection>
              <AnimatedSection from="right">
                <motion.div
                  className="relative"
                  whileHover={{ scale: 1.05, rotate: 2 }}
                  transition={{ duration: 0.4 }}
                >
                  <Image
                    src="/Crafting Next-Gen Digital Experiences.png"
                    alt="Digital Solutions Illustration"
                    width={600}
                    height={400}
                    className="rounded-2xl shadow-2xl object-contain"
                    priority
                  />
                </motion.div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 relative">
          <div className="relative max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center px-4 sm:px-6 lg:px-8">
            {[
              { value: "200+", label: "Projects Delivered" },
              { value: "50+", label: "Happy Clients" },
              { value: "99%", label: "Client Satisfaction" },
              { value: "4+", label: "Years of Innovation" },
            ].map((stat, i) => (
              <AnimatedSection key={i} from={i % 2 === 0 ? "left" : "right"}>
                <motion.div
                  whileHover={{ y: -8, scale: 1.1 }}
                  className="p-4"
                >
                  <h3 className="text-4xl font-bold text-blue-400">{stat.value}</h3>
                  <p className="text-gray-300 mt-2">{stat.label}</p>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </section>

        {/* About Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
            <AnimatedSection from="left">
              <motion.div
                whileHover={{ scale: 1.03 }}
                className="rounded-2xl shadow-xl overflow-hidden"
              >
                <Image
                  src="/Who We Are.png"
                  alt="About DevSphere"
                  width={960}
                  height={720}
                  className="w-full h-auto object-cover"
                  loading="lazy"
                />
              </motion.div>
            </AnimatedSection>
            <AnimatedSection from="right">
              <motion.div variants={containerVariants}>
                <motion.h4 variants={itemVariants} className="text-blue-400 font-semibold text-lg">Who We Are</motion.h4>
                <motion.h2 variants={itemVariants} className="text-3xl sm:text-4xl font-bold mt-2 text-white">
                  Innovating with Purpose
                </motion.h2>
                <motion.p variants={itemVariants} className="mt-4 text-gray-300 max-w-lg">
                  DevSphere Solutions is a team of passionate engineers, designers, and strategists dedicated to building transformative digital products. With a focus on quality, scalability, and user experience, we help businesses thrive in the digital age.
                </motion.p>
                <motion.div variants={itemVariants} whileHover={hoverEffect} whileTap={tapEffect} className="mt-6">
                  <Link href="/about" className="px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700">
                    Learn More About Us
                  </Link>
                </motion.div>
              </motion.div>
            </AnimatedSection>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-16 relative">
          <div className="relative max-w-7xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <AnimatedSection from="left">
              <motion.h2 variants={itemVariants} className="text-3xl sm:text-4xl font-bold text-white">
                Comprehensive Digital Solutions
              </motion.h2>
              <motion.p variants={itemVariants} className="mt-4 text-gray-300 max-w-2xl mx-auto">
                From ideation to execution, our services are designed to deliver measurable results.
              </motion.p>
            </AnimatedSection>
            <motion.div
              className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {services.map((s, i) => (
                <AnimatedSection key={s.title} from={i % 2 === 0 ? "left" : "right"} className="flex">
                  <motion.div
                    variants={itemVariants}
                    whileHover={{ y: -8, boxShadow: "0 15px 30px -5px rgba(0,0,0,0.35)" }}
                    className="flex-1 p-6 rounded-xl bg-white/10 border border-white/10 shadow-lg backdrop-blur-md"
                  >
                    <div className="flex items-start gap-4">
                      <motion.div
                        className="rounded-lg p-3 bg-gradient-to-r from-blue-500 to-indigo-600 text-white"
                        whileHover={{ scale: 1.1 }}
                      >
                        <s.Icon className="w-6 h-6" />
                      </motion.div>
                      <div className="text-left">
                        <h3 className="font-semibold text-lg text-white">{s.title}</h3>
                        <p className="text-gray-300 text-sm mt-2">{s.desc}</p>
                        <motion.div className="mt-4" whileHover={{ x: 5 }}>
                          <Link href="/services" className="text-blue-300 hover:underline underline-offset-4 font-medium">
                            Learn More →
                          </Link>
                        </motion.div>
                      </div>
                    </div>
                  </motion.div>
                </AnimatedSection>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <AnimatedSection from="left">
              <motion.h4 variants={itemVariants} className="text-blue-400 font-semibold text-lg">Our Approach</motion.h4>
              <motion.h2 variants={itemVariants} className="text-3xl sm:text-4xl font-bold text-white">
                A Streamlined Process for Success
              </motion.h2>
            </AnimatedSection>
            <motion.div
              className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {[
                { step: "Discovery", desc: "We analyze your goals and market to define a clear vision." },
                { step: "Strategy", desc: "We create a tailored roadmap to achieve your objectives." },
                { step: "Implementation", desc: "We build and deploy with precision and agility." },
                { step: "Optimization", desc: "We monitor and refine to ensure long-term success." },
              ].map((step, i) => (
                <AnimatedSection key={i} from={i % 2 === 0 ? "left" : "right"}>
                  <motion.div
                    variants={itemVariants}
                    whileHover={{ y: -8, boxShadow: "0 10px 20px rgba(0,0,0,0.35)" }}
                    className="p-6 bg-white/10 rounded-xl shadow-md backdrop-blur-md border border-white/10"
                  >
                    <div className="w-12 h-12 mx-auto mb-4 flex items-center justify-center rounded-full bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-bold">
                      {i + 1}
                    </div>
                    <h3 className="font-semibold text-lg">{step.step}</h3>
                    <p className="text-gray-300 text-sm mt-2">{step.desc}</p>
                  </motion.div>
                </AnimatedSection>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 relative">
          <div className="relative max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
            <AnimatedSection from="left">
              <motion.div variants={containerVariants}>
                <motion.h2 variants={itemVariants} className="text-3xl sm:text-4xl font-bold text-white">
                  Why Choose <span className="text-blue-600">DevSphere</span>?
                </motion.h2>
                <motion.p variants={itemVariants} className="mt-4 text-gray-300 max-w-lg">
                  Partner with us for innovative solutions, unparalleled expertise, and a commitment to your success.
                </motion.p>
                <motion.ul variants={containerVariants} className="mt-6 space-y-4">
                  {[
                    { icon: Rocket, text: "Rapid delivery with agile methodologies" },
                    { icon: Award, text: "Proven track record with 200+ projects" },
                    { icon: Users, text: "Dedicated team of 50+ experts" },
                  ].map((item, i) => (
                    <motion.li
                      key={i}
                      variants={itemVariants}
                      className="flex items-center gap-3 text-gray-300"
                    >
                      <item.icon className="w-6 h-6 text-blue-400" />
                      {item.text}
                    </motion.li>
                  ))}
                </motion.ul>
                <motion.div variants={itemVariants} whileHover={hoverEffect} whileTap={tapEffect} className="mt-8">
                  <Link href="/contact" className="px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700">
                    Start Your Project
                  </Link>
                </motion.div>
              </motion.div>
            </AnimatedSection>
            <AnimatedSection from="right">
              <motion.div
                whileHover={{ scale: 1.03 }}
                className="relative"
              >
                <Image
              src="/Why Choose DevSphere.png"
                  alt="Team Collaboration"
                  width={960}
                  height={720}
                  className="rounded-2xl shadow-xl object-cover"
                  loading="lazy"
                />
              </motion.div>
            </AnimatedSection>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 relative">
          <div className="relative max-w-7xl mx-auto">
            <AnimatedSection from="left">
              <motion.h3 variants={itemVariants} className="text-center text-3xl sm:text-4xl font-bold text-white">
                How We Deliver Excellence
              </motion.h3>
            </AnimatedSection>
            <motion.div
              className="mt-12 grid md:grid-cols-3 gap-8"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {[
                { title: "Strategy", desc: "Aligning your vision with actionable roadmaps for maximum impact." },
                { title: "Design", desc: "Creating intuitive, user-centric interfaces that captivate and convert." },
                { title: "Engineering", desc: "Building scalable, high-performance solutions with modern tech stacks." },
              ].map((feature, i) => (
                <AnimatedSection key={i} from={i === 1 ? "right" : "left"}>
                  <motion.div
                    variants={itemVariants}
                    whileHover={{ y: -8, boxShadow: "0 15px 30px rgba(0,0,0,0.4)" }}
                    className="p-6 bg-white/10 rounded-xl shadow-md text-center backdrop-blur-md border border-white/10"
                  >
                    <h4 className="text-xl font-semibold text-blue-400">{feature.title}</h4>
                    <p className="mt-3 text-gray-300">{feature.desc}</p>
                  </motion.div>
                </AnimatedSection>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 relative">
  <div className="relative max-w-7xl mx-auto">
    <AnimatedSection from="left">
      <motion.h3 variants={itemVariants} className="text-center text-3xl sm:text-4xl font-bold text-white">
        What Our Clients Say
      </motion.h3>
    </AnimatedSection>
    <motion.div
      className="mt-12 grid md:grid-cols-2 gap-8"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      {[
        {
          quote: "DevSphere transformed our vision into a scalable MVP in just 8 weeks, exceeding our expectations.",
          author: "Amit Verma, Founder — BrightCart",
        },
        {
          quote: "Their team delivered clean code and seamless communication, making our project a success.",
          author: "Neha Sharma, Product Lead — FinEdge",
        },
        {
          quote: "The UI/UX design and cloud integration were top-notch, driving our user engagement.",
          author: "Rahul Patel, CTO — TechTrend",
        },
        {
          quote: "Ali ensured our laptops and systems were completely secure, giving us peace of mind for our business operations.",
          author: "Ali — Laptop Secure",
        },
        {
          quote: "Shazy Zaidi guided us in creating a seamless online presence for our store, https://www.theaccessorycentermzn.in/, driving more sales and engagement.",
          author: "Shazy Zaidi — The Accessory Center",
        },
      ].map((testimonial, i) => (
        <AnimatedSection key={i} from={i % 2 === 0 ? "left" : "right"}>
          <motion.div
            variants={itemVariants}
            whileHover={{ y: -8, boxShadow: "0 15px 30px rgba(0,0,0,0.4)" }}
            className="p-6 bg-white/10 rounded-xl shadow-md backdrop-blur-md border border-white/10"
          >
            <div className="mb-4">
              <h4 className="font-semibold text-white">{testimonial.author}</h4>
            </div>
            <p className="text-gray-300">&quot;{testimonial.quote}&quot;</p>
          </motion.div>
        </AnimatedSection>
      ))}
    </motion.div>
  </div>
</section>


        {/* Pricing Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 relative">
          <div className="relative max-w-7xl mx-auto">
            <AnimatedSection from="left">
              <motion.h3 variants={itemVariants} className="text-center text-3xl sm:text-4xl font-bold text-white">
                Flexible Pricing Plans
              </motion.h3>
              <motion.p variants={itemVariants} className="mt-4 text-gray-300 max-w-2xl mx-auto text-center">
                Choose a plan that fits your needs, or contact us for a custom solution.
              </motion.p>
            </AnimatedSection>
            <motion.div
              className="mt-12 grid md:grid-cols-3 gap-8"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {[
                { name: "MVP", price: "From ₹75k", desc: "Perfect for startups looking to launch quickly." },
                { name: "Growth", price: "From ₹2.5L", desc: "Ideal for businesses scaling their digital presence." },
                { name: "Scale", price: "Custom Quote", desc: "Tailored solutions for enterprise-grade projects." },
              ].map((plan, i) => (
                <AnimatedSection key={i} from={i === 1 ? "right" : "left"}>
                  <motion.div
                    variants={itemVariants}
                    whileHover={{ y: -8, scale: 1.05, boxShadow: "0 15px 30px rgba(0,0,0,0.4)" }}
                    className="p-8 bg-white/10 rounded-xl shadow-md text-center backdrop-blur-md border border-white/10"
                  >
                    <h4 className="text-xl font-semibold text-white">{plan.name}</h4>
                    <p className="mt-2 text-gray-300 text-2xl font-bold">{plan.price}</p>
                    <p className="mt-2 text-gray-300">{plan.desc}</p>
                    <motion.button
                      className="mt-6 px-6 py-2 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Get Started
                    </motion.button>
                  </motion.div>
                </AnimatedSection>
              ))}
            </motion.div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 relative">
          <div className="relative max-w-3xl mx-auto">
            <AnimatedSection from="left">
              <motion.h3 variants={itemVariants} className="text-center text-3xl sm:text-4xl font-bold text-white">
                Frequently Asked Questions
              </motion.h3>
            </AnimatedSection>
            <motion.div
              className="mt-12 space-y-6"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {[
                { q: "What services do you offer?", a: "We specialize in custom web and mobile development, CRM implementation, API integrations, UI/UX design, cloud solutions, DevOps, and more." },
                { q: "What is your project timeline?", a: "MVPs are typically delivered in 6–12 weeks, with larger projects broken into iterative milestones for continuous delivery." },
                { q: "How do we start a project?", a: "Reach out via our contact page, and we’ll schedule a discovery call to understand your needs and provide a tailored proposal." },
                { q: "Do you offer ongoing support?", a: "Yes, we provide maintenance, updates, and optimization services to ensure your product remains cutting-edge." },
              ].map((item, i) => (
                <AnimatedSection key={i} from={i % 2 === 0 ? "left" : "right"}>
                  <motion.div
                    variants={itemVariants}
                    whileHover={{ y: -4, backgroundColor: "rgba(255,255,255,0.06)" }}
                    whileTap={{ scale: 0.98 }}
                    className="p-6 bg-white/10 rounded-lg shadow-sm cursor-pointer backdrop-blur-md border border-white/10"
                  >
                    <h4 className="font-semibold text-lg text-white">{item.q}</h4>
                    <p className="text-gray-300 mt-2">{item.a}</p>
                  </motion.div>
                </AnimatedSection>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Blog Section */}
        

        {/* CTA Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8 text-center text-white overflow-hidden">
          {/* Soft gradient film */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-indigo-500/10 to-purple-500/10" />
          {/* Animated blobs */}
          <motion.div
            aria-hidden
            className="absolute -top-24 -left-24 w-80 h-80 bg-blue-500/25 rounded-full blur-3xl"
            animate={{ y: [0, 20, 0], x: [0, 10, 0] }}
            transition={{ duration: 10, repeat: Infinity, repeatType: "mirror" }}
          />
          <motion.div
            aria-hidden
            className="absolute -bottom-28 left-1/3 w-96 h-96 bg-indigo-500/20 rounded-full blur-3xl"
            animate={{ y: [0, -15, 0], x: [0, -10, 0] }}
            transition={{ duration: 12, repeat: Infinity, repeatType: "mirror", delay: 1 }}
          />
          <motion.div
            aria-hidden
            className="absolute -right-24 top-10 w-72 h-72 bg-purple-500/25 rounded-full blur-3xl"
            animate={{ y: [0, 18, 0], x: [0, -6, 0] }}
            transition={{ duration: 11, repeat: Infinity, repeatType: "mirror", delay: 0.5 }}
          />

          <div className="relative z-10 max-w-4xl mx-auto">
            <AnimatedSection from="left">
              <motion.h3 variants={itemVariants} className="text-3xl sm:text-4xl font-bold">
                Ready to Transform Your Business?
              </motion.h3>
              <motion.p variants={itemVariants} className="mt-4 text-slate-200 max-w-2xl mx-auto">
                Partner with DevSphere Solutions to build innovative, scalable, and user-focused digital products that drive growth.
              </motion.p>
            </AnimatedSection>
            <AnimatedSection from="right">
              <motion.div
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="mt-8"
              >
                <Link
                  href="/contact"
                  className="px-8 py-3 rounded-xl bg-white text-blue-600 font-semibold hover:bg-gray-100 shadow-lg"
                  style={{color:"black"}}
                >
                  Start Your Journey
                </Link>
              </motion.div>
            </AnimatedSection>
          </div>
        </section>
      </div>
    </>
  );
}