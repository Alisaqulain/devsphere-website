import { motion, easeOut } from "framer-motion";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { Globe, Building2, Award, TrendingUp } from "lucide-react";

// Animation Variants
const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: easeOut,
    },
  },
};

// Global Trust Signals Data
const trustSignals = [
  { 
    icon: Globe, 
    end: 15, 
    suffix: "+", 
    label: "Countries Served",
    description: "Global presence across multiple regions"
  },
  { 
    icon: Building2, 
    end: 8, 
    suffix: "+", 
    label: "Industries",
    description: "Finance, Healthcare, Retail, Agriculture & more"
  },
  { 
    icon: Award, 
    end: 8, 
    suffix: "+", 
    label: "Years of Excellence",
    description: "Established track record of success"
  },
  { 
    icon: TrendingUp, 
    end: 200, 
    suffix: "+", 
    label: "Projects Delivered",
    description: "Successful implementations worldwide"
  },
];

export default function Stats() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <section className="relative py-16 sm:py-20 overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="text-center mb-12 sm:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4">
            Trusted by Businesses
            <span className="text-gradient"> Worldwide</span>
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
            A proven partner for international enterprises seeking digital transformation and sustainable growth
          </p>
        </motion.div>

        {/* Trust Signals Grid */}
        <motion.div
          ref={ref}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8"
          variants={container}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {trustSignals.map((signal, index) => {
            const IconComponent = signal.icon;
            return (
              <motion.div
                key={index}
                className="glass rounded-2xl p-6 sm:p-8 text-center border border-primary/20 hover:border-primary/40 transition-all duration-300 hover:scale-105"
                variants={fadeUp}
              >
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-primary to-accent flex items-center justify-center">
                  <IconComponent className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-primary mb-2">
                  {inView && (
                    <CountUp
                      start={0}
                      end={signal.end}
                      duration={2.5}
                      suffix={signal.suffix}
                    />
                  )}
                </h3>
                <p className="text-lg sm:text-xl font-semibold text-foreground mb-2">
                  {signal.label}
                </p>
                <p className="text-sm text-muted-foreground">
                  {signal.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
