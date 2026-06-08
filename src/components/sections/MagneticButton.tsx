"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { useIsMobile } from "@/lib/motion";

interface MagneticButtonProps {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "outline";
  className?: string;
  external?: boolean;
}

export default function MagneticButton({
  href,
  children,
  variant = "primary",
  className,
  external,
}: MagneticButtonProps) {
  const mobile = useIsMobile();

  const base =
    "inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl text-sm sm:text-base font-semibold transition-all duration-300";
  const variants = {
    primary:
      "bg-gradient-to-r from-cyan-500 via-primary to-blue-500 text-primary-foreground shadow-[0_0_30px_hsl(199_89%_48%/0.4)] hover:shadow-[0_0_50px_hsl(199_89%_48%/0.55)]",
    outline:
      "glass-card text-foreground border border-primary/30 hover:border-primary/60 hover:bg-primary/5",
  };

  const content = (
    <motion.span
      whileHover={mobile ? undefined : { scale: 1.03, y: -2 }}
      whileTap={{ scale: 0.98 }}
      className={cn(base, variants[variant], className)}
    >
      {children}
    </motion.span>
  );

  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer">
        {content}
      </a>
    );
  }

  return <Link href={href}>{content}</Link>;
}
