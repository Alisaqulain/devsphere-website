"use client";

import { motion } from "framer-motion";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { LayoutDashboard, Database, Code2, TrendingUp, IndianRupee } from "lucide-react";
import { useIsMobile, usePrefersReducedMotion } from "@/lib/motion";

const revenueBars = [42, 58, 45, 72, 65, 88, 76, 94];
const incomeRows = [
  { label: "Sales", amount: "₹4.2L", pct: "+12%" },
  { label: "Purchase", amount: "₹2.8L", pct: "-4%" },
  { label: "Net Profit", amount: "₹1.4L", pct: "+18%" },
];

export default function HeroDashboard() {
  const mobile = useIsMobile();
  const reduced = usePrefersReducedMotion();
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });

  return (
    <motion.div
      initial={{ opacity: 0, x: 40 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, delay: 0.25 }}
      className="relative hidden lg:block"
    >
      <div className="relative" ref={ref}>
        <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-accent/20 rounded-3xl blur-3xl scale-110" />

        <motion.div
          animate={reduced || mobile ? undefined : { y: [0, -10, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          className="gradient-border glass-card rounded-3xl p-6 relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-2xl" />

          <div className="flex items-center justify-between mb-5">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-red-400" />
              <div className="w-3 h-3 rounded-full bg-yellow-400" />
              <div className="w-3 h-3 rounded-full bg-green-400" />
              <span className="ml-2 text-xs text-muted-foreground font-mono">crm-dashboard.tsx</span>
            </div>
            <motion.span
              animate={reduced ? undefined : { opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="text-[10px] px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30"
            >
              Live sync
            </motion.span>
          </div>

          <div className="grid grid-cols-3 gap-3 mb-5">
            {[
              { label: "Revenue", end: 142, suffix: "%", prefix: "+" },
              { label: "Active Users", end: 12.4, suffix: "K", decimals: 1 },
              { label: "Uptime", end: 99.9, suffix: "%", decimals: 1 },
            ].map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + i * 0.1 }}
                className="rounded-xl bg-white/5 p-3 border border-white/5"
              >
                <p className="text-[10px] text-muted-foreground">{stat.label}</p>
                <p className="text-sm font-bold text-gradient">
                  {inView ? (
                    <CountUp
                      start={0}
                      end={stat.end}
                      duration={2.2}
                      decimals={stat.decimals ?? 0}
                      prefix={stat.prefix ?? ""}
                      suffix={stat.suffix ?? ""}
                    />
                  ) : (
                    "—"
                  )}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Animated revenue chart */}
          <div className="rounded-xl bg-white/[0.03] border border-white/5 p-4 mb-4">
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs text-muted-foreground flex items-center gap-1.5">
                <TrendingUp className="w-3.5 h-3.5 text-primary" />
                Monthly Revenue
              </span>
              <span className="text-xs font-semibold text-emerald-400">+24.6%</span>
            </div>
            <div className="flex items-end gap-1.5 h-16">
              {revenueBars.map((h, i) => (
                <motion.div
                  key={i}
                  className="flex-1 rounded-t-md bg-gradient-to-t from-primary/40 to-primary"
                  initial={{ height: 0 }}
                  animate={inView ? { height: `${h}%` } : { height: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 + i * 0.06, ease: "easeOut" }}
                />
              ))}
            </div>
          </div>

          {/* Income / expense rows */}
          <div className="space-y-2">
            {incomeRows.map((row, i) => (
              <motion.div
                key={row.label}
                initial={{ opacity: 0, x: -12 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.8 + i * 0.1 }}
                className="flex items-center justify-between text-xs py-1.5 px-2 rounded-lg hover:bg-white/[0.03] transition-colors"
              >
                <span className="text-muted-foreground flex items-center gap-1.5">
                  <IndianRupee className="w-3 h-3 text-primary/70" />
                  {row.label}
                </span>
                <span className="font-mono font-semibold">{row.amount}</span>
                <span
                  className={`text-[10px] font-medium ${
                    row.pct.startsWith("+") ? "text-emerald-400" : "text-amber-400"
                  }`}
                >
                  {row.pct}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {!mobile && !reduced && (
          <>
            <motion.div
              className="absolute -top-5 -right-5 glass-card rounded-2xl p-4 border border-primary/30"
              animate={{ y: [0, -12, 0], rotate: [0, 3, 0] }}
              transition={{ duration: 6, repeat: Infinity }}
            >
              <LayoutDashboard className="w-7 h-7 text-primary" />
            </motion.div>
            <motion.div
              className="absolute -bottom-4 -left-6 glass-card rounded-2xl p-4 border border-accent/30"
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 7, repeat: Infinity, delay: 1 }}
            >
              <Database className="w-7 h-7 text-accent" />
            </motion.div>
            <motion.div
              className="absolute top-1/2 -right-8 glass-card rounded-xl p-3"
              animate={{ x: [0, 6, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
            >
              <Code2 className="w-5 h-5 text-primary" />
            </motion.div>
          </>
        )}
      </div>
    </motion.div>
  );
}
