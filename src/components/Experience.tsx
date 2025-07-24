import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Building, Calendar, MapPin, Briefcase } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      position: 'Application Developer Intern',
      company: 'Alobha Technologies Pvt Ltd',
      period: 'Feb 2025 – Jun 2025 (4 months)',
      location: 'India',
      type: 'Internship',
      description: 'Built comprehensive employee management system with modern web technologies during 4-month internship.',
      responsibilities: [
        'Developed Employee Management System using Angular 16 and Angular Material',
        'Implemented CRUD functionality with MongoDB Compass integration',
        'Created responsive UI with searchable and paginated data tables',
        'Built secure authentication system with session/local storage',
        'Optimized application performance with lazy loading and efficient state management',
        'Implemented undo/redo functionality for better user experience'
      ],
      technologies: ['Angular 16', 'Angular Material', 'MongoDB', 'TypeScript', 'Node.js'],
      achievements: [
        'Successfully completed full-stack project within 4-month timeline',
        'Implemented advanced features like undo/redo and session persistence',
        'Gained hands-on experience with enterprise-level development practices'
      ]
    },
    {
      position: 'Application Developer Intern',
      company: 'Go Digital Technology Consulting LLP',
      period: 'Dec 2024 – Jan 2025 (1 month)',
      location: 'India',
      type: 'Internship',
      description: 'Focused on frontend development with Angular during 1-month intensive internship.',
      responsibilities: [
        'Built responsive UIs with Angular framework',
        'Implemented Angular components with proper data binding',
        'Worked with state management and component lifecycle',
        'Developed reusable components following best practices',
        'Collaborated with team members on code reviews and optimization'
      ],
      technologies: ['Angular', 'TypeScript', 'HTML5', 'CSS3', 'JavaScript'],
      achievements: [
        'Mastered Angular component architecture in 1 month',
        'Improved skills in responsive web design',
        'Learned industry-standard development practices'
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="section-header animate-fade-in">Professional Experience</h2>
        
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-secondary to-accent"></div>
            
            {experiences.map((exp, index) => (
              <div 
                key={`${exp.company}-${exp.period}`}
                className="timeline-item animate-slide-in-left"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="timeline-dot animate-glow"></div>
                
                <Card className="portfolio-card ml-6">
                  <CardHeader>
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                      <div>
                        <CardTitle className="text-xl mb-2">{exp.position}</CardTitle>
                        <div className="space-y-2">
                          <div className="flex items-center gap-2 text-muted-foreground">
                            <Building className="w-4 h-4" />
                            <span className="font-medium">{exp.company}</span>
                          </div>
                          <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                            <div className="flex items-center gap-1">
                              <Calendar className="w-4 h-4" />
                              {exp.period}
                            </div>
                            <div className="flex items-center gap-1">
                              <MapPin className="w-4 h-4" />
                              {exp.location}
                            </div>
                          </div>
                        </div>
                      </div>
                      <Badge variant="secondary" className="flex items-center gap-1">
                        <Briefcase className="w-3 h-3" />
                        {exp.type}
                      </Badge>
                    </div>
                  </CardHeader>
                  
                  <CardContent className="space-y-6">
                    <p className="text-muted-foreground leading-relaxed">
                      {exp.description}
                    </p>
                    
                    <div>
                      <h4 className="font-semibold mb-3 text-primary">Key Responsibilities</h4>
                      <ul className="space-y-2">
                        {exp.responsibilities.map((responsibility, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <div className="w-1.5 h-1.5 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                            <span className="text-sm">{responsibility}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold mb-3 text-primary">Technologies Used</h4>
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech) => (
                          <div key={tech} className="skill-chip text-xs">
                            {tech}
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold mb-3 text-primary">Achievements</h4>
                      <ul className="space-y-2">
                        {exp.achievements.map((achievement, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <div className="w-1.5 h-1.5 bg-success rounded-full mt-2 flex-shrink-0"></div>
                            <span className="text-sm">{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
          
          <div className="timeline-item animate-fade-in mt-8" style={{ animationDelay: '0.4s' }}>
            <div className="timeline-dot animate-glow"></div>
            <Card className="portfolio-card ml-6">
              <CardContent className="p-6 text-center">
                <h3 className="text-lg font-semibold text-primary mb-2">5 Months of Hands-On Experience!</h3>
                <p className="text-muted-foreground">
                  With 5 months of internship experience, I'm ready to contribute to innovative projects and grow as a Full-Stack Developer.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;