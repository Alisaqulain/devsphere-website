import { Button } from "@/components/ui/button";
import { ArrowRight, Play, CheckCircle, Zap } from "lucide-react";
import heroIllustration from "@/assets/hero-illustration.jpg";
import { motion, easeInOut } from "framer-motion"; // <-- import easeInOut
import { Link } from "react-router-dom";

// Animation Variants
const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const float = {
  animate: {
    y: [0, -10, 0],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: easeInOut, // <-- use imported easeInOut
    },
  },
};

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Effects */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      />
      <motion.div
        className="absolute top-1/4 left-1/4 w-40 h-40 sm:w-64 sm:h-64 bg-primary/20 rounded-full blur-3xl"
        {...float}
      />
      <motion.div
        className="absolute bottom-1/4 right-1/4 w-28 h-28 sm:w-48 sm:h-48 bg-accent/20 rounded-full blur-3xl"
        animate={{
          y: [0, -10, 0],
          transition: {
            duration: 6,
            repeat: Infinity,
            ease: easeInOut,
            delay: 3,
          },
        }}
      />

      <div className="relative max-w-7xl mx-auto px-2 sm:px-4 pt-16 sm:pt-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">

          {/* Content Section */}
          <motion.div
            className="text-center lg:text-left space-y-4 sm:space-y-6"
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            transition={{ delay: 0.2, duration: 1, ease: easeInOut }}
          >
            <div className="space-y-2 sm:space-y-4">
              <h1 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
                Crafting{" "}
                <span className="text-gradient bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  Next-Gen
                </span>
                <br />
                Digital Experiences
              </h1>
              <p className="text-sm xs:text-base sm:text-lg md:text-2xl text-muted-foreground leading-relaxed max-w-xl mx-auto lg:mx-0">
                We empower startups and enterprises with innovative websites, apps, and platforms 
                that drive growth and scalability.
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start">
              <Link to="/services" className="w-full sm:w-auto">
                <Button variant="hero" size="lg" className="group w-full sm:w-auto">
                  Discover Our Services
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>

              <Link to="/contact" className="w-full sm:w-auto">
                <Button variant="glass" size="lg" className="group w-full sm:w-auto">
                  <Play className="mr-2 h-5 w-5" />
                  Get in Touch
                </Button>
              </Link>
            </div>

            {/* Trust Badges */}
            <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-6 pt-0 justify-center lg:justify-start">
              <div className="flex items-center gap-2 text-xs sm:text-sm text-muted-foreground">
                <CheckCircle className="h-5 w-5 text-primary" />
                <span className="font-semibold text-foreground">200+</span> Successful Projects
              </div>
              <div className="hidden sm:block w-px h-6 bg-border" />
              <div className="flex items-center gap-2 text-xs sm:text-sm text-muted-foreground">
                <Zap className="h-5 w-5 text-accent" />
                <span className="font-semibold text-foreground">Agile</span> Delivery
              </div>
            </div>
          </motion.div>

          {/* Hero Illustration Section */}
          <motion.div
            className="relative mt-8 lg:mt-0 block"
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            transition={{ delay: 0.4, duration: 1, ease: easeInOut }}
          >
            <div className="relative max-w-xs mx-auto sm:max-w-md lg:max-w-none">
              {/* Glow background */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-primary/30 to-accent/30 rounded-2xl blur-2xl scale-110"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 1 }}
              />
              
              {/* Main image */}
              <motion.img
                loading="lazy"
                src={heroIllustration}
                alt="Team working on innovative digital projects"
                className="relative rounded-2xl shadow-2xl hover-lift border border-primary/20 w-full"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 1 }}
              />

              {/* Floating Elements */}
              <motion.div
                className="absolute -top-4 -right-4 w-16 h-16 sm:w-24 sm:h-24 glass rounded-xl border border-primary/30 flex items-center justify-center"
                {...float}
              >
                <div className="w-8 h-8 sm:w-12 sm:h-12 bg-gradient-to-r from-primary to-accent rounded-lg" />
              </motion.div>

              <motion.div
                className="absolute -bottom-4 -left-4 w-12 h-12 sm:w-20 sm:h-20 glass rounded-xl border border-accent/30 flex items-center justify-center"
                animate={{
                  y: [0, -10, 0],
                  transition: {
                    duration: 6,
                    repeat: Infinity,
                    ease: easeInOut,
                    delay: 2,
                  },
                }}
              >
                <div className="w-6 h-6 sm:w-10 sm:h-10 bg-gradient-to-r from-accent to-primary rounded-lg" />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}