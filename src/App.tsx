import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import AboutPage from "./components/About";
import OurServices from "./components/OurServices"
import Navbar from "./components/Navbar";
import CaseStudies from "./components/CaseStudies";
import BlogPage from "./components/Blog";
import ProjectsPage from "./components/Projects";
import ContactPage from "./components/Contact";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          {/* Home */}
          <Route path="/" element={<Index />} />

          {/* About Page */}
          <Route path="/about" element={<AboutPage />} />

          {/* services Page */}
          <Route path="/services" element={<OurServices />} />

          {/* Casestudies page */}
          <Route path="/cases" element={<CaseStudies/>}></Route>

          {/* Blog page */}
          <Route path="/blog" element={<BlogPage/>}></Route>

          {/* Blog page */}
          <Route path="/projects" element={<ProjectsPage/>}></Route>

          {/* Contact page */}
          <Route path="/contact" element={<ContactPage/>}></Route>

          {/* Catch-All for 404 */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
