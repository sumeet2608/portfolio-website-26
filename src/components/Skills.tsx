import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Code2, Database, Server, Globe, Wrench } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      category: 'Frontend Development',
      icon: Globe,
      skills: [
        { name: 'Angular (TypeScript)', level: 90 },
        { name: 'JavaScript', level: 85 },
        { name: 'HTML5', level: 95 },
        { name: 'CSS3', level: 90 },
        { name: 'Angular Material', level: 85 },
      ]
    },
    {
      category: 'Backend Development',
      icon: Server,
      skills: [
        { name: 'Node.js', level: 85 },
        { name: 'Express.js', level: 80 },
        { name: 'RESTful APIs', level: 85 },
        { name: 'Authentication', level: 75 },
      ]
    },
    {
      category: 'Database',
      icon: Database,
      skills: [
        { name: 'MongoDB', level: 85 },
        { name: 'MongoDB Compass', level: 80 },
        { name: 'MySQL', level: 70 },
        { name: 'Database Design', level: 75 },
      ]
    },
    {
      category: 'Programming Languages',
      icon: Code2,
      skills: [
        { name: 'TypeScript', level: 85 },
        { name: 'JavaScript', level: 90 },
        { name: 'Python', level: 70 },
      ]
    },
    {
      category: 'Tools & Technologies',
      icon: Wrench,
      skills: [
        { name: 'Angular Routing', level: 85 },
        { name: 'Reactive Forms', level: 80 },
        { name: 'State Management', level: 75 },
        { name: 'Version Control (Git)', level: 80 },
      ]
    }
  ];

  const getSkillColor = (level: number) => {
    if (level >= 85) return 'bg-success';
    if (level >= 75) return 'bg-accent';
    return 'bg-secondary';
  };

  return (
    <section id="skills" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="section-header animate-fade-in">Technical Skills</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <Card 
                key={category.category} 
                className="portfolio-card animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <Icon className="w-6 h-6 text-primary" />
                    {category.category}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {category.skills.map((skill) => (
                    <div key={skill.name} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-medium">{skill.name}</span>
                        <span className="text-xs text-muted-foreground">{skill.level}%</span>
                      </div>
                      <Progress 
                        value={skill.level} 
                        className="h-2"
                      />
                    </div>
                  ))}
                </CardContent>
              </Card>
            );
          })}
        </div>
        
        {/* Core Competencies */}
        <div className="mt-12 animate-fade-in">
          <h3 className="text-2xl font-bold text-center mb-8 text-primary">Core Competencies</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              'MEAN Stack Development',
              'Responsive Web Design',
              'RESTful API Development',
              'Database Design',
              'Angular Components',
              'State Management',
              'Authentication & Security',
              'Performance Optimization',
              'CRUD Operations',
              'Lazy Loading',
              'Reactive Forms',
              'Session Management'
            ].map((skill, index) => (
              <div 
                key={skill} 
                className="skill-chip animate-scale-in"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                {skill}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;