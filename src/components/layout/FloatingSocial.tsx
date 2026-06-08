"use client";

import { motion } from "framer-motion";
import { Instagram, MessageCircle } from "lucide-react";
import { siteConfig } from "@/data/site";

export default function FloatingSocial() {
  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col gap-4">
      <motion.a
        href={`https://wa.me/${siteConfig.whatsapp}`}
        target="_blank"
        rel="noopener noreferrer"
        className="w-14 h-14 flex items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_10px_30px_rgba(37,211,102,0.6)]"
        whileHover={{ scale: 1.08, y: -2 }}
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle className="w-7 h-7" />
      </motion.a>
      <motion.a
        href={siteConfig.social.instagram}
        target="_blank"
        rel="noopener noreferrer"
        className="w-14 h-14 flex items-center justify-center rounded-full bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#cc2366] text-white shadow-[0_10px_30px_rgba(220,39,67,0.6)]"
        whileHover={{ scale: 1.08, y: -2 }}
        aria-label="Visit Instagram"
      >
        <Instagram className="w-7 h-7" />
      </motion.a>
    </div>
  );
}
