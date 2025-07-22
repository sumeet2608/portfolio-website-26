import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Achievements from "./components/Achievements";
import Certifications from "./components/Certifications";
import Contact from "./components/Contact";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <div className="min-h-screen bg-background">
          <Navigation />
          <main>
            <Hero />
            <About />
            <Skills />
            <Projects />
            <Experience />
            <Education />
            <Achievements />
            <Certifications />
            <Contact />
          </main>
          <footer className="bg-foreground text-background py-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <p className="text-sm">
                © 2025 Sumeet Singh. Built with React, TypeScript, and Tailwind CSS.
              </p>
            </div>
          </footer>
        </div>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
