import { Button } from "@/components/ui/button";
import { ArrowRight, Globe, TrendingUp, Shield } from "lucide-react";
import heroIllustration from "@/assets/hero-illustration.jpg";
import { motion, easeInOut } from "framer-motion";
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
      ease: easeInOut,
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

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 sm:pt-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 sm:gap-16 items-center">

          {/* Content Section */}
          <motion.div
            className="text-center lg:text-left space-y-6 sm:space-y-8"
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            transition={{ delay: 0.2, duration: 1, ease: easeInOut }}
          >
            <div className="space-y-4 sm:space-y-6">
              <h1 className="text-4xl xs:text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold leading-tight tracking-tight">
                Transform Your Business
                <br />
                <span className="text-gradient bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  Globally
                </span>
              </h1>
              <p className="text-lg xs:text-xl sm:text-2xl md:text-3xl text-muted-foreground leading-relaxed max-w-2xl mx-auto lg:mx-0 font-light">
                Trusted by international businesses to deliver digital solutions that drive growth, 
                scale operations, and create lasting competitive advantage.
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center lg:justify-start pt-4">
              <Link to="/contact" className="w-full sm:w-auto">
                <Button variant="hero" size="lg" className="group w-full sm:w-auto text-lg px-8 py-6 h-auto">
                  Start Your Project
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>

              <Link to="/projects" className="w-full sm:w-auto">
                <Button variant="glass" size="lg" className="group w-full sm:w-auto text-lg px-8 py-6 h-auto">
                  View Our Work
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
            </div>

            {/* Trust Badges */}
            <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-8 pt-6 justify-center lg:justify-start">
              <div className="flex items-center gap-3 text-sm sm:text-base text-muted-foreground">
                <Globe className="h-6 w-6 text-primary" />
                <span className="font-semibold text-foreground">Global Reach</span>
                <span className="text-muted-foreground">Across 15+ Countries</span>
              </div>
              <div className="hidden sm:block w-px h-8 bg-border" />
              <div className="flex items-center gap-3 text-sm sm:text-base text-muted-foreground">
                <TrendingUp className="h-6 w-6 text-accent" />
                <span className="font-semibold text-foreground">Enterprise-Grade</span>
                <span className="text-muted-foreground">Solutions</span>
              </div>
              <div className="hidden sm:block w-px h-8 bg-border" />
              <div className="flex items-center gap-3 text-sm sm:text-base text-muted-foreground">
                <Shield className="h-6 w-6 text-primary" />
                <span className="font-semibold text-foreground">Trusted Partner</span>
                <span className="text-muted-foreground">Long-Term Success</span>
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
                alt="Global digital transformation and business growth"
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