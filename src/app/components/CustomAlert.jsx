"use client";
import React, { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function CustomAlert({
  open,
  onClose,
  title = "",
  message = "",
  type = "info",
  autoHideMs = 2800,
  position = "top-right",
}) {
  useEffect(() => {
    if (!open) return;
    if (!autoHideMs) return;
    const id = setTimeout(() => onClose?.(), autoHideMs);
    return () => clearTimeout(id);
  }, [open, autoHideMs, onClose]);

  const colorClasses = {
    success: {
      ring: "ring-emerald-400/40",
      grad: "from-emerald-500 to-emerald-700",
      text: "text-emerald-50",
    },
    error: {
      ring: "ring-rose-400/40",
      grad: "from-rose-500 to-rose-700",
      text: "text-rose-50",
    },
    warning: {
      ring: "ring-amber-400/40",
      grad: "from-amber-500 to-amber-700",
      text: "text-amber-50",
    },
    info: {
      ring: "ring-blue-400/40",
      grad: "from-blue-500 to-indigo-600",
      text: "text-blue-50",
    },
  }[type] || {
    ring: "ring-blue-400/40",
    grad: "from-blue-500 to-indigo-600",
    text: "text-blue-50",
  };

  const positionClasses = {
    "top-right": "top-4 right-4",
    "top-left": "top-4 left-4",
    "bottom-right": "bottom-4 right-4",
    "bottom-left": "bottom-4 left-4",
    center: "inset-0 flex items-center justify-center",
  };

  const containerClass = position === "center" ? positionClasses.center : `pointer-events-none fixed z-[9999] ${positionClasses[position]}`;

  return (
    <AnimatePresence>
      {open && (
        <div className={containerClass}>
          <motion.div
            initial={{ opacity: 0, y: position?.startsWith("top") || position === "center" ? -10 : 10, scale: position === "center" ? 0.96 : 1 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: position?.startsWith("top") || position === "center" ? -10 : 10, scale: position === "center" ? 0.96 : 1 }}
            transition={{ duration: 0.22, ease: "easeOut" }}
            className={`pointer-events-auto relative w-[min(92vw,560px)] ${position !== "center" ? "max-w-sm" : ""} bg-white/10 backdrop-blur-xl border border-white/15 ring-1 ${colorClasses.ring} rounded-2xl shadow-2xl overflow-hidden`}
          >
            <div className={`h-1 w-full bg-gradient-to-r ${colorClasses.grad}`} />
            <div className="p-4">
              {title ? (
                <h4 className={`font-semibold ${colorClasses.text}`}>{title}</h4>
              ) : null}
              {message ? (
                <p className="text-slate-200 text-sm mt-1 leading-relaxed">{message}</p>
              ) : null}
              <div className="mt-3 flex justify-end">
                <button
                  onClick={onClose}
                  className="px-3 py-1.5 rounded-lg text-white text-sm bg-black/30 hover:bg-black/40 border border-white/10"
                >
                  Close
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}


