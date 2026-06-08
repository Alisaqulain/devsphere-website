"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import ScrollReveal from "@/components/animations/ScrollReveal";

export default function CTASection() {
  return (
    <section className="py-20 sm:py-28">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <ScrollReveal>
          <div className="glass rounded-3xl p-10 sm:p-16 text-center border border-primary/30 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-accent/10" />
            <div className="relative">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4">
                Have an idea? Let&apos;s build it into a{" "}
                <span className="text-gradient">real product.</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                From MVP to enterprise platform — we deliver production-ready digital products.
              </p>
              <Link href="/contact">
                <Button variant="hero" size="lg" className="text-lg px-10 py-6 h-auto group">
                  Start a Project
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
