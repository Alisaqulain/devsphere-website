import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import Services from "@/components/Services";
import FlagshipProjects from "@/components/FlagshipProjects";
import WhoWeAre from "@/components/WhoWeAre";
import WhyChoose from "@/components/WhyChoose";
import TestimonialsCarousel from "@/components/TestimonialsCarousel";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div>
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <Services />
        <FlagshipProjects />
        <WhyChoose />
        <TestimonialsCarousel />
        <WhoWeAre />
        <CTA />
        <Footer />
      </main>
    </div>
  );
};

export default Index;
