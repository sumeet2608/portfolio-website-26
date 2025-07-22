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
            <div className="relative">
              <img
                src="/lovable-uploads/d5a8d280-5630-47c1-9e33-11605a3c614d.png"
                alt="Sumeet Singh"
                className="w-80 h-80 object-cover rounded-2xl shadow-hover mx-auto lg:mx-0"
              />
              <div className="absolute -inset-1 bg-gradient-hero rounded-2xl opacity-20 blur-lg"></div>
            </div>
          </div>
          
          <div className="space-y-6 animate-slide-in-right">
            <Card className="portfolio-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-2xl">
                  <User className="w-6 h-6 text-primary" />
                  Professional Summary
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Aspiring Full-Stack MEAN Developer with a passion for building scalable, 
                  secure web applications. Currently pursuing MCA with exceptional academic 
                  performance and hands-on experience through internships.
                </p>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
                  <div className="flex items-center gap-3 p-3 bg-muted/50 rounded-lg">
                    <MapPin className="w-5 h-5 text-secondary" />
                    <div>
                      <p className="font-medium">Location</p>
                      <p className="text-sm text-muted-foreground">India</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3 p-3 bg-muted/50 rounded-lg">
                    <Calendar className="w-5 h-5 text-secondary" />
                    <div>
                      <p className="font-medium">Experience</p>
                      <p className="text-sm text-muted-foreground">2+ Years</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3 p-3 bg-muted/50 rounded-lg">
                    <Target className="w-5 h-5 text-secondary" />
                    <div>
                      <p className="font-medium">Focus</p>
                      <p className="text-sm text-muted-foreground">MEAN Stack</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3 p-3 bg-muted/50 rounded-lg">
                    <User className="w-5 h-5 text-secondary" />
                    <div>
                      <p className="font-medium">Status</p>
                      <p className="text-sm text-muted-foreground">Available</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="portfolio-card">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4 text-primary">What I Bring</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-accent rounded-full mt-2"></div>
                    <span>Strong foundation in Angular, Node.js, and MongoDB</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-accent rounded-full mt-2"></div>
                    <span>Experience building full-stack applications with CRUD operations</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-accent rounded-full mt-2"></div>
                    <span>Consistent academic excellence with 9.42 CGPI in MCA</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-accent rounded-full mt-2"></div>
                    <span>Hands-on experience from internships at leading tech companies</span>
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