"use client";
import React, { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";

export default function ClientWrapper({ children }) {
  const pathname = usePathname();
  const cursorRef = useRef(null);
  const rippleRef = useRef(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    const cursor = cursorRef.current;
    const ripple = rippleRef.current;
    if (!cursor || !ripple) return;
    const move = (e) => {
      const x = e.clientX;
      const y = e.clientY;
      cursor.style.transform = `translate3d(${x}px, ${y}px, 0)`;
    };
    const click = () => {
      ripple.animate([
        { transform: "scale(0.6)", opacity: 0.6 },
        { transform: "scale(1.6)", opacity: 0 }
      ], { duration: 450, easing: "ease-out" });
    };
    window.addEventListener("mousemove", move, { passive: true });
    window.addEventListener("mousedown", click, { passive: true });
    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mousedown", click);
    };
  }, []);
  return (
    <AnimatePresence mode="wait">
      <motion.main
        key={pathname}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10 }}
        transition={{ duration: 0.25, ease: "easeOut" }}
        className="min-h-[70vh]"
      >
        {children}
        {mounted && (
          <>
            <div
              ref={cursorRef}
              className="pointer-events-none fixed z-[9999] hidden md:block"
              style={{ left: -10, top: -10 }}
            >
              <div
                className="w-5 h-5 rounded-full"
                style={{
                  background: "radial-gradient(circle at 30% 30%, rgba(59,130,246,0.6), rgba(139,92,246,0.6))",
                  boxShadow: "0 0 30px rgba(59,130,246,0.6), 0 0 60px rgba(139,92,246,0.4)",
                  mixBlendMode: "screen",
                  transform: "translate(-50%, -50%)",
                }}
              />
            </div>
            <div
              ref={rippleRef}
              className="pointer-events-none fixed z-[9998] hidden md:block"
              style={{ left: "-9999px", top: "-9999px" }}
            />
          </>
        )}
      </motion.main>
    </AnimatePresence>
  );
}


