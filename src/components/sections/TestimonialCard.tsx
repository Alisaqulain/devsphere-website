"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import type { Testimonial } from "@/data/testimonials";

export default function TestimonialCard({ testimonial, index = 0 }: { testimonial: Testimonial; index?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.06 }}
      className="gradient-border rounded-3xl p-6 sm:p-8 bg-card/50 h-full flex flex-col"
    >
      <Quote className="w-8 h-8 text-primary/40 mb-4" />
      <p className="text-foreground leading-relaxed flex-1 mb-6">&ldquo;{testimonial.quote}&rdquo;</p>
      <div className="flex items-center gap-4 pt-4 border-t border-white/10">
        <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center text-primary-foreground font-bold">
          {testimonial.name.charAt(0)}
        </div>
        <div>
          <p className="font-semibold">{testimonial.name}</p>
          <p className="text-sm text-primary">{testimonial.role}</p>
          <p className="text-xs text-muted-foreground">{testimonial.company} · {testimonial.location}</p>
        </div>
      </div>
    </motion.div>
  );
}
