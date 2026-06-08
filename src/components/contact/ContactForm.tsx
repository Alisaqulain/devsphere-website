"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { toast } from "sonner";
import { Mail, MessageCircle, Instagram, Linkedin } from "lucide-react";
import { siteConfig } from "@/data/site";
import MagneticButton from "@/components/sections/MagneticButton";

const schema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Valid email required"),
  phone: z.string().optional(),
  projectType: z.string().min(1, "Select a project type"),
  budget: z.string().optional(),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type FormData = z.infer<typeof schema>;

const inputClass =
  "w-full bg-white/[0.03] border border-white/10 rounded-2xl px-4 py-3.5 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/40 transition-all placeholder:text-muted-foreground/60";

const selectClass = `${inputClass} cursor-pointer appearance-none bg-[hsl(222_40%_7%)] pr-10`;

export default function ContactForm() {
  const [loading, setLoading] = useState(false);
  const { register, handleSubmit, reset, formState: { errors } } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (data: FormData) => {
    setLoading(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const result = await res.json();
      if (!res.ok) throw new Error(result.error || "Failed to send");
      toast.success("Message sent! We'll respond within 1-2 business days.");
      reset();
    } catch (err) {
      toast.error(err instanceof Error ? err.message : "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="grid lg:grid-cols-5 gap-8 lg:gap-12">
      <form onSubmit={handleSubmit(onSubmit)} className="lg:col-span-3 gradient-border rounded-3xl p-6 sm:p-8 bg-card/40 space-y-5">
        <h2 className="text-2xl font-bold mb-2">Send us a message</h2>
        <p className="text-sm text-muted-foreground mb-6">Tell us about your project and we&apos;ll get back within 1-2 business days.</p>

        <div className="grid sm:grid-cols-2 gap-5">
          <div>
            <label className="block text-sm font-medium mb-2">Name *</label>
            <input {...register("name")} className={inputClass} placeholder="Your name" />
            {errors.name && <p className="text-red-400 text-xs mt-1">{errors.name.message}</p>}
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">Email *</label>
            <input {...register("email")} type="email" className={inputClass} placeholder="you@example.com" />
            {errors.email && <p className="text-red-400 text-xs mt-1">{errors.email.message}</p>}
          </div>
        </div>

        <div className="grid sm:grid-cols-2 gap-5">
          <div>
            <label className="block text-sm font-medium mb-2">Phone</label>
            <input {...register("phone")} className={inputClass} placeholder="+91 XXXXX XXXXX" />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">Project Type *</label>
            <div className="relative">
              <select {...register("projectType")} className={selectClass}>
                <option value="" disabled>
                  Select type
                </option>
                <option value="website">Website</option>
                <option value="saas">SaaS Platform</option>
                <option value="mobile">Mobile App</option>
                <option value="ecommerce">E-commerce</option>
                <option value="admin">Admin Dashboard</option>
                <option value="other">Other</option>
              </select>
              <span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground text-xs">
                ▼
              </span>
            </div>
            {errors.projectType && <p className="text-red-400 text-xs mt-1">{errors.projectType.message}</p>}
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">Budget Range</label>
          <div className="relative">
            <select {...register("budget")} className={selectClass}>
              <option value="" disabled>
                Select budget
              </option>
              <option value="under-50k">Under ₹50,000</option>
              <option value="50k-2l">₹50,000 - ₹2,00,000</option>
              <option value="2l-5l">₹2,00,000 - ₹5,00,000</option>
              <option value="5l-plus">₹5,00,000+</option>
            </select>
            <span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground text-xs">
              ▼
            </span>
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">Message *</label>
          <textarea {...register("message")} rows={4} className={`${inputClass} resize-none`} placeholder="Tell us about your project..." />
          {errors.message && <p className="text-red-400 text-xs mt-1">{errors.message.message}</p>}
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full py-4 rounded-2xl font-semibold bg-gradient-to-r from-cyan-500 via-primary to-blue-500 text-primary-foreground shadow-[0_0_30px_hsl(199_89%_48%/0.35)] hover:shadow-[0_0_45px_hsl(199_89%_48%/0.5)] transition-all disabled:opacity-60"
        >
          {loading ? "Sending..." : "Send Message"}
        </button>
      </form>

      <div className="lg:col-span-2 flex flex-col gap-5">
        <div className="gradient-border rounded-3xl p-6 bg-card/40">
          <h3 className="font-bold mb-4">Contact Info</h3>
          <p className="text-sm text-muted-foreground mb-4">{siteConfig.address}</p>
          <a href={`mailto:${siteConfig.email}`} className="flex items-center gap-3 text-sm hover:text-primary transition mb-3">
            <Mail className="w-5 h-5 text-primary" /> {siteConfig.email}
          </a>
          <a href={`https://wa.me/${siteConfig.whatsapp}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-sm hover:text-primary transition">
            <MessageCircle className="w-5 h-5 text-emerald-400" /> {siteConfig.phone}
          </a>
        </div>

        <a href={`https://wa.me/${siteConfig.whatsapp}`} target="_blank" rel="noopener noreferrer">
          <span className="flex items-center justify-center gap-2 w-full py-4 rounded-2xl font-semibold bg-[#25D366] hover:bg-[#20bd5a] transition-colors">
            <MessageCircle className="w-5 h-5" /> Chat on WhatsApp
          </span>
        </a>

        <a href={`mailto:${siteConfig.email}`}>
          <span className="flex items-center justify-center gap-2 w-full py-4 rounded-2xl font-semibold glass-card border border-primary/25 hover:border-primary/50 transition-colors">
            <Mail className="w-5 h-5 text-primary" /> Email Us
          </span>
        </a>

        <div className="flex gap-3">
          <a href={siteConfig.social.linkedin} target="_blank" rel="noopener noreferrer" className="flex-1 flex items-center justify-center gap-2 py-3 rounded-2xl glass-card border border-primary/20 hover:border-primary/40 transition">
            <Linkedin className="w-5 h-5" />
          </a>
          <a href={siteConfig.social.instagram} target="_blank" rel="noopener noreferrer" className="flex-1 flex items-center justify-center gap-2 py-3 rounded-2xl glass-card border border-primary/20 hover:border-primary/40 transition">
            <Instagram className="w-5 h-5" />
          </a>
        </div>
      </div>
    </div>
  );
}
