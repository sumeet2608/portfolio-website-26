import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { User, MapPin, Calendar, Target } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="section-header animate-fade-in">About Me</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="animate-slide-in-left">
            <div className="relative hover-scale">
              <img
                src="/lovable-uploads/d5a8d280-5630-47c1-9e33-11605a3c614d.png"
                alt="Sumeet Singh"
                className="w-80 h-80 object-cover rounded-2xl shadow-hover mx-auto lg:mx-0 animate-float"
              />
              <div className="absolute -inset-1 bg-gradient-hero rounded-2xl opacity-20 blur-lg animate-glow"></div>
            </div>
          </div>
          
          <div className="space-y-6 animate-slide-in-right">
            <Card className="portfolio-card hover-scale">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-2xl animate-fade-in">
                  <User className="w-6 h-6 text-primary animate-pulse" />
                  Professional Summary
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-lg text-muted-foreground leading-relaxed animate-fade-in">
                  Aspiring Full-Stack MEAN Developer with 5 months of hands-on internship experience, 
                  passionate about building scalable, secure web applications. Currently pursuing MCA 
                  with exceptional academic performance and proven project delivery skills.
                </p>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
                  <div className="flex items-center gap-3 p-3 bg-muted/50 rounded-lg hover-scale animate-fade-in">
                    <MapPin className="w-5 h-5 text-secondary animate-pulse" />
                    <div>
                      <p className="font-medium">Location</p>
                      <p className="text-sm text-muted-foreground">India</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3 p-3 bg-muted/50 rounded-lg hover-scale animate-fade-in">
                    <Calendar className="w-5 h-5 text-secondary animate-pulse" />
                    <div>
                      <p className="font-medium">Experience</p>
                      <p className="text-sm text-muted-foreground">5 Months</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3 p-3 bg-muted/50 rounded-lg hover-scale animate-fade-in">
                    <Target className="w-5 h-5 text-secondary animate-pulse" />
                    <div>
                      <p className="font-medium">Focus</p>
                      <p className="text-sm text-muted-foreground">MEAN Stack</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3 p-3 bg-muted/50 rounded-lg hover-scale animate-fade-in">
                    <User className="w-5 h-5 text-secondary animate-pulse" />
                    <div>
                      <p className="font-medium">Status</p>
                      <p className="text-sm text-muted-foreground">Available</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="portfolio-card hover-scale">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4 text-primary animate-fade-in">What I Bring</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3 animate-slide-in-left" style={{ animationDelay: '0.1s' }}>
                    <div className="w-2 h-2 bg-accent rounded-full mt-2 animate-pulse"></div>
                    <span>Strong foundation in Angular, Node.js, and MongoDB</span>
                  </li>
                  <li className="flex items-start gap-3 animate-slide-in-left" style={{ animationDelay: '0.2s' }}>
                    <div className="w-2 h-2 bg-accent rounded-full mt-2 animate-pulse"></div>
                    <span>5 months of hands-on experience building full-stack applications</span>
                  </li>
                  <li className="flex items-start gap-3 animate-slide-in-left" style={{ animationDelay: '0.3s' }}>
                    <div className="w-2 h-2 bg-accent rounded-full mt-2 animate-pulse"></div>
                    <span>Consistent academic excellence with 9.42 CGPI in MCA</span>
                  </li>
                  <li className="flex items-start gap-3 animate-slide-in-left" style={{ animationDelay: '0.4s' }}>
                    <div className="w-2 h-2 bg-accent rounded-full mt-2 animate-pulse"></div>
                    <span>Proven project delivery through completed internship projects</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;