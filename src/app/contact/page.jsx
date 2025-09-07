"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, User, MessageSquare } from "lucide-react";
import SEOHead, { buildLocalBusinessJsonLd } from "../components/SEOHead";
import CustomAlert from "../components/CustomAlert";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitting, setSubmitting] = useState(false);
  const [successOpen, setSuccessOpen] = useState(false);

  const onChange = (e) => {
    const { id, value } = e.target;
    setForm((f) => ({ ...f, [id]: value }));
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      const endpoint = process.env.NEXT_PUBLIC_FORM_ENDPOINT || "https://formspree.io/f/mwkgyqeb"; // replace with your Formspree ID or set env
      const res = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          message: form.message,
          _subject: "New inquiry from devspheresolutions.in",
          to: "info@devspheresolutions.in",
        }),
      });
      if (res.ok) {
        setSuccessOpen(true);
        setForm({ name: "", email: "", message: "" });
      } else {
        setSuccessOpen(true);
      }
    } catch (err) {
      setSuccessOpen(true);
    } finally {
      setSubmitting(false);
    }
  };
  return (
    <>
      <SEOHead
        title="Contact DevSphere Solutions"
        description="Get in touch for web, mobile and CRM solutions. Based in Muzaffarnagar, Uttar Pradesh."
        url="https://devspheresolutions.in/contact"
        canonical="https://devspheresolutions.in/contact"
        image="https://devspheresolutions.in/logo.png"
        jsonLd={[buildLocalBusinessJsonLd()]}
      />

      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black flex flex-col items-center justify-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="max-w-5xl w-full bg-white/10 backdrop-blur-lg border border-white/20 shadow-xl rounded-3xl p-8 md:p-12"
        >
          {/* Heading */}
          <h2 className="text-4xl font-extrabold text-white mb-4 text-center tracking-tight">
            Let’s Connect
          </h2>
          <p className="text-gray-300 mb-10 text-center max-w-xl mx-auto">
            Have a project in mind? Share your ideas with us — we’ll respond within
            <span className="text-blue-400 font-semibold"> 1–2 business days</span>.
          </p>

          <div className="grid md:grid-cols-2 gap-10">
            {/* Contact Form */}
            <form className="space-y-6" onSubmit={onSubmit}>
              {/* Name */}
              <div className="relative">
                <User className="absolute left-4 top-4 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  required
                  className="w-full bg-white/5 border border-white/20 rounded-2xl pl-12 pr-4 py-4 text-white placeholder-transparent focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                  placeholder="John Doe"
                  id="name"
                  value={form.name}
                  onChange={onChange}
                />
                <label
                  htmlFor="name"
                  className="absolute left-12 top-1 text-gray-400 text-sm transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500"
                >
                  Your Name
                </label>
              </div>

              {/* Email */}
              <div className="relative">
                <Mail className="absolute left-4 top-4 text-gray-400 w-5 h-5" />
                <input
                  type="email"
                  required
                  className="w-full bg-white/5 border border-white/20 rounded-2xl pl-12 pr-4 py-4 text-white placeholder-transparent focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                  placeholder="you@example.com"
                  id="email"
                  value={form.email}
                  onChange={onChange}
                />
                <label
                  htmlFor="email"
                  className="absolute left-12 top-1 text-gray-400 text-sm transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500"
                >
                  Email Address
                </label>
              </div>

              {/* Message */}
              <div className="relative">
                <MessageSquare className="absolute left-4 top-4 text-gray-400 w-5 h-5" />
                <textarea
                  rows="4"
                  required
                  className="w-full bg-white/5 border border-white/20 rounded-2xl pl-12 pr-4 py-4 text-white placeholder-transparent focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                  placeholder="Write your message..."
                  id="message"
                  value={form.message}
                  onChange={onChange}
                />
                <label
                  htmlFor="message"
                  className="absolute left-12 top-1 text-gray-400 text-sm transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500"
                >
                  Message
                </label>
              </div>

              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                disabled={submitting}
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold py-4 rounded-2xl shadow-lg hover:shadow-blue-500/30 transition disabled:opacity-70"
              >
                {submitting ? "Sending..." : "Send Message"}
              </motion.button>
            </form>

            {/* Contact Information */}
            <div className="space-y-8 text-gray-300">
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">Address</h3>
                <p>Muzaffarnagar, Uttar Pradesh, India</p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-white mb-2">Email</h3>
                <a
                  className="text-blue-400 hover:underline"
                  href="mailto:info@devspheresolutions.in"
                >
                  info@devspheresolutions.in
                </a>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-white mb-2">Phone</h3>
                <p>
                  <a className="hover:underline" href="tel:+919457818861">
                    +91 9457818861
                  </a>
                  <br />
                  <a className="hover:underline" href="tel:+919389441961">
                    +91 9389441961
                  </a>
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      <CustomAlert
        open={successOpen}
        onClose={() => setSuccessOpen(false)}
        title="Message Sent!"
        message="Thanks for reaching out. We’ll get back to you at the earliest."
        type="success"
        position="top-right"
      />
    </>
  );
}
