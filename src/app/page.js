// src/components/LandingPage.jsx
"use client";
import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

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
  return (
    <div className="font-sans text-gray-800 overflow-x-hidden">
      {/* Navbar */}
      <motion.header 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, type: "spring" }}
        className="w-full py-4 px-6 flex justify-between items-center shadow-sm bg-white sticky top-0 z-50"
      >
        <motion.h1 
          whileHover={{ scale: 1.05 }}
          className="text-2xl font-bold text-blue-600"
        >
          DevSphere Solutions
        </motion.h1>
        <nav className="hidden md:flex gap-6 text-gray-700">
          {["Home", "About", "Services", "Process", "Contact"].map((item, index) => (
            <motion.a
              key={index}
              href="#"
              className="hover:text-blue-600"
              whileHover={{ scale: 1.05, color: "#2563eb" }}
              transition={{ duration: 0.2 }}
            >
              {item}
            </motion.a>
          ))}
        </nav>
        <motion.button 
          className="bg-blue-600 text-white px-4 py-2 rounded-lg"
          whileHover={hoverEffect}
          whileTap={tapEffect}
        >
          Get Started
        </motion.button>
      </motion.header>

      {/* Hero Section */}
      <section className="px-6 py-16 grid md:grid-cols-2 gap-10 items-center max-w-6xl mx-auto">
        <AnimatedSection from="left">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold leading-tight">
              Your Business Deserves Expert-<span className="text-blue-600">Led Growth</span>
            </h2>
            <p className="mt-4 text-gray-600">
              Customized consulting solutions that help your business grow smarter and faster.
            </p>
            <div className="mt-6 flex gap-4">
              <motion.button 
                className="bg-blue-600 text-white px-6 py-3 rounded-lg"
                whileHover={hoverEffect}
                whileTap={tapEffect}
              >
                Schedule a Call
              </motion.button>
              <motion.button 
                className="border border-blue-600 text-blue-600 px-6 py-3 rounded-lg"
                whileHover={{ 
                  backgroundColor: "#2563eb",
                  color: "white",
                  transition: { duration: 0.3 }
                }}
                whileTap={tapEffect}
              >
                Learn More
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
            { value: "150+", label: "Projects Done" },
            { value: "25+", label: "Industries Served" },
            { value: "98%", label: "Client Satisfaction" },
            { value: "$20M+", label: "Revenue Growth" }
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
          <motion.img
            src="https://images.unsplash.com/photo-1581092334495-1c1dbdfd2d34"
            alt="Consulting"
            className="rounded-2xl shadow-lg"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          />
        </AnimatedSection>
        
        <AnimatedSection from="right">
          <div>
            <h4 className="text-blue-600 font-semibold">About Us</h4>
            <h2 className="text-3xl font-bold mt-2">Customized Consulting. Real Results.</h2>
            <p className="mt-4 text-gray-600">
              We provide tailored strategies that empower your business to adapt and thrive in a rapidly changing market.
            </p>
            <motion.button 
              className="mt-6 bg-blue-600 text-white px-6 py-3 rounded-lg"
              whileHover={hoverEffect}
              whileTap={tapEffect}
            >
              Learn More
            </motion.button>
          </div>
        </AnimatedSection>
      </section>

      {/* Services Section */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-6xl mx-auto text-center">
          <AnimatedSection from="left">
            <h2 className="text-3xl font-bold">What We Can Do for You</h2>
          </AnimatedSection>
          
          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {[
              "Strategy Consulting",
              "Operational Excellence",
              "Digital Transformation",
              "Research & Analysis",
              "IT Consulting",
              "Talent Development",
            ].map((service, i) => (
              <AnimatedSection 
                key={i} 
                from={i % 2 === 0 ? "left" : "right"}
              >
                <motion.div
                  className="p-6 bg-white rounded-xl shadow hover:shadow-lg transition"
                  whileHover={{ 
                    y: -5,
                    boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)"
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <h3 className="font-semibold">{service}</h3>
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
                We provide solutions that help your business grow faster.
              </p>
              <motion.button 
                className="mt-6 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                whileHover={hoverEffect}
                whileTap={tapEffect}
              >
                Get Started
              </motion.button>
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
            The Strategies of Our Work
          </h3>
        </AnimatedSection>
        
        <div className="mt-10 grid md:grid-cols-3 gap-8">
          {["Strategy", "Design", "Development"].map((item, i) => (
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
                <h4 className="text-xl font-semibold text-blue-600">{item}</h4>
                <p className="mt-3 text-gray-600">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
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
              quote: "Amazing service! Helped our business grow exponentially.",
              author: "John Doe"
            },
            {
              quote: "Professional and dedicated team. Highly recommend.",
              author: "Sarah Smith"
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
                <p className="text-gray-600">"{testimonial.quote}"</p>
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
          {["Basic", "Pro", "Enterprise"].map((plan, i) => (
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
                <h4 className="text-xl font-semibold">{plan}</h4>
                <p className="mt-2 text-gray-600">$29/month</p>
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
          {["How does it work?", "What is included?", "Can I cancel?"].map(
            (q, i) => (
              <AnimatedSection 
                key={i}
                from={i % 2 === 0 ? "left" : "right"}
              >
                <motion.div
                  className="p-4 bg-white shadow rounded-lg hover:shadow-lg transition cursor-pointer"
                  whileHover={{ 
                    y: -2,
                    backgroundColor: "#f8fafc"
                  }}
                  whileTap={{ scale: 0.98 }}
                >
                  <h4 className="font-semibold text-gray-800">{q}</h4>
                  <p className="text-gray-600 mt-2">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                </motion.div>
              </AnimatedSection>
            )
          )}
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
      <section className="bg-blue-600 text-white py-16 text-center">
        <AnimatedSection from="left">
          <h3 className="text-3xl font-bold">
            Ready to Take Your Business to the Next Level?
          </h3>
        </AnimatedSection>
        
        <AnimatedSection from="right">
          <motion.button 
            className="mt-6 px-8 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-200"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Contact Us
          </motion.button>
        </AnimatedSection>
      </section>

      {/* Footer */}
      <motion.footer 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="bg-blue-600 text-white py-6 text-center"
      >
        <p>© 2025 DevSphere Solutions. All rights reserved.</p>
      </motion.footer>
    </div>
  );
}