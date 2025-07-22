import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, Award, CheckCircle, Calendar } from 'lucide-react';

const Certifications = () => {
  const certifications = [
    {
      title: 'Angular (TypeScript) Certification',
      issuer: 'Technology Platform',
      date: '2024',
      description: 'Comprehensive certification covering Angular framework with TypeScript, component architecture, and modern development practices.',
      link: 'https://ibb.co/0y5qzf7x',
      skills: ['Angular', 'TypeScript', 'Component Architecture', 'Data Binding', 'Routing'],
      category: 'Frontend Development',
      verified: true
    },
    {
      title: 'Express.js Certification',
      issuer: 'Technology Platform',
      date: '2024',
      description: 'Backend development certification focusing on Express.js framework, middleware, and API development.',
      link: 'https://ibb.co/5g6R32Cn',
      skills: ['Express.js', 'Node.js', 'REST APIs', 'Middleware', 'Backend Development'],
      category: 'Backend Development',
      verified: true
    },
    {
      title: 'JavaScript Certification',
      issuer: 'Technology Platform',
      date: '2024',
      description: 'Advanced JavaScript certification covering ES6+, asynchronous programming, and modern JavaScript concepts.',
      link: 'https://ibb.co/KxCQJmRT',
      skills: ['JavaScript', 'ES6+', 'Async/Await', 'DOM Manipulation', 'Functional Programming'],
      category: 'Programming',
      verified: true
    },
    {
      title: 'MEAN Stack Certification',
      issuer: 'Technology Platform',
      date: '2024',
      description: 'Full-stack development certification covering MongoDB, Express.js, Angular, and Node.js.',
      link: 'https://ibb.co/0pzvNd1Y',
      skills: ['MongoDB', 'Express.js', 'Angular', 'Node.js', 'Full-Stack Development'],
      category: 'Full-Stack Development',
      verified: true
    },
    {
      title: 'Python Certification',
      issuer: 'Technology Platform',
      date: '2024',
      description: 'Python programming certification covering core concepts, data structures, and application development.',
      link: 'https://ibb.co/dJ5J41MW',
      skills: ['Python', 'Data Structures', 'Object-Oriented Programming', 'Libraries', 'Problem Solving'],
      category: 'Programming',
      verified: true
    }
  ];

  const categories = ['All', 'Frontend Development', 'Backend Development', 'Full-Stack Development', 'Programming'];
  const [selectedCategory, setSelectedCategory] = React.useState('All');

  const filteredCertifications = selectedCategory === 'All' 
    ? certifications 
    : certifications.filter(cert => cert.category === selectedCategory);

  return (
    <section id="certifications" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="section-header animate-fade-in">Professional Certifications</h2>
        
        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12 animate-fade-in">
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              onClick={() => setSelectedCategory(category)}
              className="transition-all duration-300 hover:scale-105"
            >
              {category}
            </Button>
          ))}
        </div>
        
        {/* Certification Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
          <Card className="portfolio-card text-center animate-scale-in">
            <CardContent className="p-6">
              <Award className="w-8 h-8 text-primary mx-auto mb-4" />
              <div className="text-3xl font-bold text-primary mb-2">{certifications.length}</div>
              <div className="text-sm text-muted-foreground">Total Certifications</div>
            </CardContent>
          </Card>
          
          <Card className="portfolio-card text-center animate-scale-in" style={{ animationDelay: '0.1s' }}>
            <CardContent className="p-6">
              <CheckCircle className="w-8 h-8 text-success mx-auto mb-4" />
              <div className="text-3xl font-bold text-success mb-2">{certifications.filter(c => c.verified).length}</div>
              <div className="text-sm text-muted-foreground">Verified</div>
            </CardContent>
          </Card>
          
          <Card className="portfolio-card text-center animate-scale-in" style={{ animationDelay: '0.2s' }}>
            <CardContent className="p-6">
              <Calendar className="w-8 h-8 text-secondary mx-auto mb-4" />
              <div className="text-3xl font-bold text-secondary mb-2">2024</div>
              <div className="text-sm text-muted-foreground">Latest Year</div>
            </CardContent>
          </Card>
          
          <Card className="portfolio-card text-center animate-scale-in" style={{ animationDelay: '0.3s' }}>
            <CardContent className="p-6">
              <Award className="w-8 h-8 text-accent mx-auto mb-4" />
              <div className="text-3xl font-bold text-accent mb-2">4</div>
              <div className="text-sm text-muted-foreground">Categories</div>
            </CardContent>
          </Card>
        </div>
        
        {/* Certification Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCertifications.map((cert, index) => (
            <Card 
              key={cert.title}
              className="portfolio-card animate-slide-in-left hover:shadow-glow transition-all duration-300"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <CardTitle className="text-lg mb-2 leading-tight">{cert.title}</CardTitle>
                    <div className="space-y-2">
                      <div className="text-sm text-muted-foreground">{cert.issuer}</div>
                      <div className="flex items-center gap-2">
                        <Badge variant="outline">{cert.category}</Badge>
                        {cert.verified && (
                          <Badge variant="secondary" className="flex items-center gap-1">
                            <CheckCircle className="w-3 h-3" />
                            Verified
                          </Badge>
                        )}
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <Calendar className="w-4 h-4 text-muted-foreground mb-1" />
                    <div className="text-xs text-muted-foreground">{cert.date}</div>
                  </div>
                </div>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {cert.description}
                </p>
                
                <div>
                  <h5 className="font-medium mb-2 text-primary">Skills Covered</h5>
                  <div className="flex flex-wrap gap-2">
                    {cert.skills.map((skill) => (
                      <div key={skill} className="skill-chip text-xs">
                        {skill}
                      </div>
                    ))}
                  </div>
                </div>
                
                <Button 
                  className="w-full hero-button" 
                  asChild
                >
                  <a href={cert.link} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    View Certificate
                  </a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
        
        {/* Certification Journey */}
        <div className="mt-12 animate-fade-in" style={{ animationDelay: '0.5s' }}>
          <Card className="portfolio-card max-w-2xl mx-auto">
            <CardContent className="p-8 text-center">
              <Award className="w-12 h-12 text-primary mx-auto mb-4 animate-glow" />
              <h3 className="text-xl font-semibold mb-4 text-primary">Continuous Learning Journey</h3>
              <p className="text-muted-foreground mb-6">
                These certifications represent my commitment to staying updated with the latest technologies 
                and best practices in software development. Each certification has enhanced my skills and 
                contributed to my growth as a developer.
              </p>
              <div className="flex justify-center gap-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">25+</div>
                  <div className="text-sm text-muted-foreground">Skills Gained</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-secondary">100%</div>
                  <div className="text-sm text-muted-foreground">Completion Rate</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Certifications;