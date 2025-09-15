import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Highlights from "@/components/HowDeleverExcelence";
import Process from "@/components/Process";
import WhyChoose from "@/components/WhyChoose";
import Services from "@/components/Services";
import Stats from "@/components/Stats";
import WhoWeAre from "@/components/WhoWeAre";
import TestimonialsCarousel from "@/components/TestimonialsCarousel";
import PricingPlans from "@/components/PricingPlans";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import { Routes } from "react-router-dom";

const Index = () => {
  return (
    <div>
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <WhoWeAre />
        <Services />
        <WhyChoose />
        <Highlights />
        <Process />
        <TestimonialsCarousel/>
        <PricingPlans/>
        <FAQ/>
        <CTA/>
        <Footer/>
      </main>
    </div>
  );
};

export default Index;
