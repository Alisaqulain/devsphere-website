"use client";

import { motion } from "framer-motion";
import FloatingGradient from "./FloatingGradient";
import { usePrefersReducedMotion } from "@/lib/motion";

interface PageWrapperProps {
  children: React.ReactNode;
  className?: string;
}

export default function PageWrapper({ children, className = "" }: PageWrapperProps) {
  const reduced = usePrefersReducedMotion();

  return (
    <motion.div
      initial={reduced ? false : { opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
      className={`relative pt-24 sm:pt-28 ${className}`}
    >
      <FloatingGradient />
      <div className="relative z-10">{children}</div>
    </motion.div>
  );
}
