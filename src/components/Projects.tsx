import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, Calendar, Users } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'Employee Management System',
      period: 'Feb 2025 – Jun 2025',
      company: 'Alobha Technologies Pvt Ltd',
      description: 'Comprehensive employee management system built during internship with full CRUD functionality and modern UI.',
      technologies: ['Angular 16', 'Angular Material', 'MongoDB Compass', 'TypeScript', 'Node.js', 'Express.js'],
      features: [
        'Angular routing with lazy loading',
        'Reactive forms with validation',
        'CRUD operations for employee data',
        'Searchable and paginated UI',
        'Secure login/signup system',
        'MongoDB integration',
        'Undo/redo functionality',
        'Session persistence',
        'Performance optimizations'
      ],
      status: 'Completed',
      type: 'Internship Project'
    }
  ];

  return (
    <section id="projects" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="section-header animate-fade-in">Featured Project</h2>
        
        <div className="max-w-4xl mx-auto">
          {projects.map((project, index) => (
            <Card 
              key={project.title} 
              className="portfolio-card animate-scale-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <CardHeader>
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                  <div>
                    <CardTitle className="text-2xl mb-2">{project.title}</CardTitle>
                    <div className="flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {project.period}
                      </div>
                      <div className="flex items-center gap-1">
                        <Users className="w-4 h-4" />
                        {project.company}
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary">{project.status}</Badge>
                    <Badge variant="outline">{project.type}</Badge>
                  </div>
                </div>
              </CardHeader>
              
              <CardContent className="space-y-6">
                <p className="text-muted-foreground leading-relaxed">
                  {project.description}
                </p>
                
                <div>
                  <h4 className="font-semibold mb-3 text-primary">Technologies Used</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <div key={tech} className="skill-chip text-xs">
                        {tech}
                      </div>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-3 text-primary">Key Features</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {project.features.map((feature) => (
                      <div key={feature} className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="pt-4 border-t border-border">
                  <h4 className="font-semibold mb-3 text-primary">Project Highlights</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div className="text-center p-4 bg-muted/50 rounded-lg">
                      <div className="text-2xl font-bold text-primary">100%</div>
                      <div className="text-sm text-muted-foreground">Completion Rate</div>
                    </div>
                    <div className="text-center p-4 bg-muted/50 rounded-lg">
                      <div className="text-2xl font-bold text-secondary">9+</div>
                      <div className="text-sm text-muted-foreground">Key Features</div>
                    </div>
                    <div className="text-center p-4 bg-muted/50 rounded-lg">
                      <div className="text-2xl font-bold text-accent">6</div>
                      <div className="text-sm text-muted-foreground">Technologies</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12 animate-fade-in">
          <Card className="portfolio-card max-w-2xl mx-auto">
            <CardContent className="p-8">
              <h3 className="text-xl font-semibold mb-4 text-primary">More Projects Coming Soon!</h3>
              <p className="text-muted-foreground mb-6">
                I'm constantly working on new projects and learning new technologies. 
                Check back soon to see more of my work!
              </p>
              <Button className="hero-button" asChild>
                <a href="https://shorturl.at/wo4yJ" target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="w-4 h-4 mr-2" />
                  View Portfolio
                </a>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Projects;