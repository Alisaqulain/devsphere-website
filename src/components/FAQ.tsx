"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, HelpCircle } from "lucide-react";

const faqs = [
  {
    question: "What services do you offer?",
    answer:
      "We specialize in custom web and mobile development, CRM implementation, API integrations, UI/UX design, cloud solutions, DevOps, and more.",
  },
  {
    question: "What is your project timeline?",
    answer:
      "MVPs are typically delivered in 6–12 weeks, with larger projects broken into iterative milestones for continuous delivery.",
  },
  {
    question: "How do we start a project?",
    answer:
      "Reach out via our contact page, and we’ll schedule a discovery call to understand your needs and provide a tailored proposal.",
  },
  {
    question: "Do you offer ongoing support?",
    answer:
      "Yes, we provide maintenance, updates, and optimization services to ensure your product remains cutting-edge.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-12 relative">
      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-accent/5" />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-5xl font-extrabold mb-4">
            Frequently <span className="text-gradient">Asked Questions</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Everything you need to know about working with us.
          </p>
        </motion.div>

        {/* FAQ Accordion */}
        <div className="space-y-2">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="glass rounded-2xl p-6 border border-primary/10 hover:border-primary/40 transition-all duration-300 cursor-pointer"
              onClick={() => toggleFAQ(index)}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 flex items-center justify-center rounded-lg bg-gradient-to-r from-primary to-accent">
                    <HelpCircle className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground">
                    {faq.question}
                  </h3>
                </div>

                {/* Chevron */}
                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <ChevronDown className="w-6 h-6 text-muted-foreground" />
                </motion.div>
              </div>

              {/* Answer */}
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.4 }}
                    className="mt-4 text-muted-foreground"
                  >
                    {faq.answer}
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
