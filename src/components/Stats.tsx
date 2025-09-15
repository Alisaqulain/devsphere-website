import { motion, easeOut } from "framer-motion";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

// Animation Variants
const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: easeOut,
    },
  },
};

// Stats Data
const stats = [
  { end: 200, suffix: "+", label: "Projects Delivered" },
  { end: 50, suffix: "+", label: "Happy Clients" },
  { end: 99, suffix: "%", label: "Client Satisfaction" },
  { end: 4, suffix: "+", label: "Years of Innovation" },
];

export default function Stats() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  return (
    <section className="bg-background py-8 sm:py-12">
      <motion.div
        ref={ref}
        className="max-w-6xl mx-auto px-3 sm:px-6 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-8 md:gap-10 text-center"
        variants={container}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
        {stats.map((stat, index) => (
          <motion.div
            key={index}
            className="space-y-1 sm:space-y-2 max-w-xs mx-auto"
            variants={fadeUp}
          >
            <h3 className="text-2xl sm:text-4xl md:text-5xl font-extrabold text-primary">
              {inView && (
                <CountUp
                  start={0}
                  end={stat.end}
                  duration={2}
                  suffix={stat.suffix}
                />
              )}
            </h3>
            <p className="text-xs sm:text-sm md:text-base text-muted-foreground">{stat.label}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
