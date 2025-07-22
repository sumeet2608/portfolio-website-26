import React from 'react';
import { ArrowDown, Github, Linkedin, Mail, Phone, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import heroImage from '@/assets/hero-bg.jpg';

const Hero = () => {
  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="home" 
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${heroImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      <div className="absolute inset-0 bg-gradient-hero opacity-20"></div>
      
      <div className="relative z-10 text-center max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 animate-scale-in">
            Hi, I'm{' '}
            <span className="bg-gradient-accent bg-clip-text text-transparent animate-glow">
              Sumeet Singh
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl mx-auto animate-slide-in-left">
            Aspiring Full-Stack MEAN Developer focused on building scalable, secure web applications
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 mb-12 animate-slide-in-right">
            <div className="skill-chip">Angular (TypeScript)</div>
            <div className="skill-chip">Node.js</div>
            <div className="skill-chip">Express.js</div>
            <div className="skill-chip">MongoDB</div>
            <div className="skill-chip">JavaScript</div>
          </div>
          
          <div className="flex flex-col sm:flex-row justify-center items-center gap-6 mb-12">
            <Button 
              onClick={scrollToAbout}
              className="hero-button animate-float"
            >
              View My Work
              <ArrowDown className="ml-2 w-5 h-5" />
            </Button>
            
            <div className="flex gap-4">
              <Button
                variant="outline"
                size="sm"
                className="bg-white/10 border-white/20 text-white hover:bg-white/20 backdrop-blur-sm"
                asChild
              >
                <a href="https://www.linkedin.com/in/sumeet-singh-668516273" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="w-5 h-5" />
                </a>
              </Button>
              
              <Button
                variant="outline"
                size="sm"
                className="bg-white/10 border-white/20 text-white hover:bg-white/20 backdrop-blur-sm"
                asChild
              >
                <a href="https://shorturl.at/wo4yJ" target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="w-5 h-5" />
                </a>
              </Button>
              
              <Button
                variant="outline"
                size="sm"
                className="bg-white/10 border-white/20 text-white hover:bg-white/20 backdrop-blur-sm"
                asChild
              >
                <a href="mailto:sumeetwebdeveloper.26@gmail.com">
                  <Mail className="w-5 h-5" />
                </a>
              </Button>
              
              <Button
                variant="outline"
                size="sm"
                className="bg-white/10 border-white/20 text-white hover:bg-white/20 backdrop-blur-sm"
                asChild
              >
                <a href="tel:9167471055">
                  <Phone className="w-5 h-5" />
                </a>
              </Button>
            </div>
          </div>
          
          <div className="text-white/80 text-sm animate-fade-in">
            <p>📧 sumeetwebdeveloper.26@gmail.com</p>
            <p>📱 +91 9167471055</p>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowDown className="w-6 h-6 text-white/60" />
      </div>
    </section>
  );
};

export default Hero;